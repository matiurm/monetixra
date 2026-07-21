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

  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/socket.io/')) {
    event.respondWith(fetch(event.request).catch(() => new Response(JSON.stringify({ error: 'Offline' }), { headers: { 'Content-Type': 'application/json' } })));
    return;
  }

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => caches.match('/index.html'))
    );
    return;
  }

  if (event.request.destination === 'image' || /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        const networkFetch = fetch(event.request).then(response => {
          if (response && response.status === 200) {
            caches.open(CACHE_NAME).then(cache => cache.put(event.request, response.clone()));
          }
          return response;
        }).catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).then(response => {
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
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
