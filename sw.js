// ============================================================
//  Monetixra — Mobile-Optimized Service Worker (PWA)
//  Keeps the app usable across refresh, update, reset, and offline use.
//  Optimized for mobile performance with aggressive caching
// ============================================================
const CACHE_NAME = 'monetixra-v9-mobile';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-72.png',
  '/icon-96.png',
  '/icon-128.png',
  '/icon-144.png',
  '/icon-152.png',
  '/icon-192.png',
  '/icon-384.png',
  '/icon-512.png',
];

const CDN_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Outfit:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap',
  'https://cdn.socket.io/4.7.5/socket.io.min.js',
  'https://unpkg.com/peerjs@1.5.2/dist/peerjs.min.js',
];

const ASSETS = [...STATIC_ASSETS, ...CDN_ASSETS];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => Promise.allSettled(ASSETS.map(url => cache.add(url).catch(() => {})))).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // API and Socket.io - Network first with offline fallback
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/socket.io/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache successful API responses for 5 minutes
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME + '-api').then(cache => {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => {
          // Try cache first, then return offline error
          return caches.match(event.request).then(cached => {
            if (cached) return cached;
            return new Response(JSON.stringify({ error: 'Offline' }), { 
              headers: { 'Content-Type': 'application/json' } 
            });
          });
        })
    );
    return;
  }

  // Navigation - Network first with cache fallback (Stale-While-Revalidate)
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then(response => {
          // Cache the latest version
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
          return response;
        })
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Images - Cache first with background refresh (Stale-While-Revalidate)
  if (event.request.destination === 'image' || /\.(png|jpg|jpeg|webp|gif|svg|avif)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const networkFetch = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME + '-images').then(cache => cache.put(event.request, clone));
          }
          return response;
        }).catch(() => cached);
        
        // Return cached immediately, refresh in background
        if (cached) {
          // Refresh cache in background
          fetch(event.request).then(response => {
            if (response && response.status === 200) {
              const clone = response.clone();
              caches.open(CACHE_NAME + '-images').then(cache => cache.put(event.request, clone));
            }
          }).catch(() => {});
          return cached;
        }
        return networkFetch;
      })
    );
    return;
  }

  // Static assets (CSS, JS, Fonts) - Cache first with long TTL
  if (event.request.destination === 'script' || 
      event.request.destination === 'style' || 
      event.request.destination === 'font' ||
      /\.(css|js|woff|woff2|ttf|otf)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CACHE_NAME + '-static').then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // Default - Network first with cache fallback
  event.respondWith(
    caches.match(event.request).then(cached => {
      return fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => cached);
    })
  );
});

// Push notification handler
self.addEventListener('push', e => {
  const data = e.data?.json() || { title: 'MediaEarn', body: 'You have a new notification!' };
  e.waitUntil(
    self.registration.showNotification(data.title || 'MediaEarn Ultra X', {
      body:    data.body || '',
      icon:    '/icon-192.png',
      badge:   '/icon-72.png',
      tag:     data.tag || 'mediaearn',
      data:    data.url || '/',
      actions: data.actions || [],
      vibrate: [200, 100, 200],
    })
  );
});

// Notification click
self.addEventListener('notificationclick', e => {
  e.notification.close();
  const url = e.notification.data || '/';
  e.waitUntil(
    clients.matchAll({ type:'window' }).then(list => {
      for (const c of list) {
        if (c.url === url && 'focus' in c) return c.focus();
      }
      if (clients.openWindow) return clients.openWindow(url);
    })
  );
});

// Background sync for offline data synchronization (Facebook/YouTube style)
self.addEventListener('sync', event => {
  if (event.tag === 'sync-posts') {
    event.waitUntil(syncPosts());
  }
  if (event.tag === 'sync-user-data') {
    event.waitUntil(syncUserData());
  }
  if (event.tag === 'sync-media') {
    event.waitUntil(syncMedia());
  }
});

// Sync posts when connection is restored
async function syncPosts() {
  try {
    // Get queued posts from IndexedDB
    const queuedPosts = await getQueuedPosts();
    for (const post of queuedPosts) {
      try {
        const response = await fetch('/api/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(post)
        });
        if (response.ok) {
          await removeQueuedPost(post.id);
        }
      } catch (error) {
        console.warn('[BackgroundSync] Failed to sync post:', post.id, error);
      }
    }
  } catch (error) {
    console.warn('[BackgroundSync] Sync posts failed:', error);
  }
}

// Sync user data when connection is restored
async function syncUserData() {
  try {
    const userData = await getQueuedUserData();
    if (userData) {
      const response = await fetch('/api/users/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      });
      if (response.ok) {
        await clearQueuedUserData();
      }
    }
  } catch (error) {
    console.warn('[BackgroundSync] Sync user data failed:', error);
  }
}

// Sync media uploads when connection is restored
async function syncMedia() {
  try {
    const queuedMedia = await getQueuedMedia();
    for (const media of queuedMedia) {
      try {
        const formData = new FormData();
        formData.append('file', media.file);
        formData.append('postId', media.postId);
        
        const response = await fetch('/api/media/upload', {
          method: 'POST',
          body: formData
        });
        if (response.ok) {
          await removeQueuedMedia(media.id);
        }
      } catch (error) {
        console.warn('[BackgroundSync] Failed to sync media:', media.id, error);
      }
    }
  } catch (error) {
    console.warn('[BackgroundSync] Sync media failed:', error);
  }
}

// IndexedDB helpers for background sync
async function getQueuedPosts() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MonetixraSyncDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['queuedPosts'], 'readonly');
      const store = transaction.objectStore('queuedPosts');
      const getRequest = store.getAll();
      getRequest.onerror = () => reject(getRequest.error);
      getRequest.onsuccess = () => resolve(getRequest.result || []);
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('queuedPosts')) {
        db.createObjectStore('queuedPosts', { keyPath: 'id' });
      }
    };
  });
}

async function removeQueuedPost(id) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MonetixraSyncDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['queuedPosts'], 'readwrite');
      const store = transaction.objectStore('queuedPosts');
      const deleteRequest = store.delete(id);
      deleteRequest.onerror = () => reject(deleteRequest.error);
      deleteRequest.onsuccess = () => resolve();
    };
  });
}

async function getQueuedUserData() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MonetixraSyncDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['queuedUserData'], 'readonly');
      const store = transaction.objectStore('queuedUserData');
      const getRequest = store.get('current');
      getRequest.onerror = () => reject(getRequest.error);
      getRequest.onsuccess = () => resolve(getRequest.result || null);
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('queuedUserData')) {
        db.createObjectStore('queuedUserData', { keyPath: 'id' });
      }
    };
  });
}

async function clearQueuedUserData() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MonetixraSyncDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['queuedUserData'], 'readwrite');
      const store = transaction.objectStore('queuedUserData');
      const deleteRequest = store.delete('current');
      deleteRequest.onerror = () => reject(deleteRequest.error);
      deleteRequest.onsuccess = () => resolve();
    };
  });
}

async function getQueuedMedia() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MonetixraSyncDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['queuedMedia'], 'readonly');
      const store = transaction.objectStore('queuedMedia');
      const getRequest = store.getAll();
      getRequest.onerror = () => reject(getRequest.error);
      getRequest.onsuccess = () => resolve(getRequest.result || []);
    };
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains('queuedMedia')) {
        db.createObjectStore('queuedMedia', { keyPath: 'id' });
      }
    };
  });
}

async function removeQueuedMedia(id) {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('MonetixraSyncDB', 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['queuedMedia'], 'readwrite');
      const store = transaction.objectStore('queuedMedia');
      const deleteRequest = store.delete(id);
      deleteRequest.onerror = () => reject(deleteRequest.error);
      deleteRequest.onsuccess = () => resolve();
    };
  });
}
