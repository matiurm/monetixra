// Enhanced Persistence System for Monetixra
// Ensures data survives refresh/logout/login like Facebook/YouTube

const EnhancedPersistence = (function() {
  const STORAGE_KEY = 'monetixra_enhanced_';
  const MEDIA_DB_NAME = 'MonetixraMediaDB';
  const MEDIA_DB_VERSION = 1;
  let mediaDB = null;
  
  // Supabase Configuration
  const SUPABASE_URL = 'https://rgximkhnhxgaonrxzzxl.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJneGlta2huaHhnYW9ucnh6enhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2NDg3MDQsImV4cCI6MjA5MTIyNDcwNH0.zgBfCTs2AEocLVwjJntg1dDBwy4quQS40QWqeuYRTwU';

  // Initialize IndexedDB for media storage
  async function initMediaDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(MEDIA_DB_NAME, MEDIA_DB_VERSION);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        mediaDB = request.result;
        resolve(mediaDB);
      };
      
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('media')) {
          db.createObjectStore('media', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('posts')) {
          db.createObjectStore('posts', { keyPath: 'id' });
        }
        if (!db.objectStoreNames.contains('points')) {
          db.createObjectStore('points', { keyPath: 'userId' });
        }
      };
    });
  }

  // Save media file to IndexedDB
  async function saveMedia(id, data, metadata = {}) {
    if (!mediaDB) await initMediaDB();
    
    return new Promise((resolve, reject) => {
      const transaction = mediaDB.transaction(['media'], 'readwrite');
      const store = transaction.objectStore('media');
      
      const record = {
        id: id,
        data: data,
        metadata: metadata,
        savedAt: Date.now()
      };
      
      const request = store.put(record);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
  }

  // Load media file from IndexedDB
  async function loadMedia(id) {
    if (!mediaDB) await initMediaDB();
    
    return new Promise((resolve, reject) => {
      const transaction = mediaDB.transaction(['media'], 'readonly');
      const store = transaction.objectStore('media');
      const request = store.get(id);
      
      request.onsuccess = () => {
        const record = request.result;
        resolve(record ? record.data : null);
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Save post to IndexedDB
  async function savePost(post) {
    if (!mediaDB) await initMediaDB();
    
    // Save to IndexedDB
    const dbPromise = new Promise((resolve, reject) => {
      const transaction = mediaDB.transaction(['posts'], 'readwrite');
      const store = transaction.objectStore('posts');
      
      const record = {
        id: post.id,
        post: post,
        authorId: post.author,
        savedAt: Date.now()
      };
      
      const request = store.put(record);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
    
    // Also sync to Supabase for cloud persistence
    const supabasePromise = syncPostToSupabase(post);
    
    try {
      await Promise.all([dbPromise, supabasePromise]);
      return true;
    } catch (error) {
      console.warn('[EnhancedPersistence] Post save failed:', error);
      return false;
    }
  }

  // Load all posts for a user
  async function loadPosts(userId) {
    if (!mediaDB) await initMediaDB();
    
    return new Promise((resolve, reject) => {
      const transaction = mediaDB.transaction(['posts'], 'readonly');
      const store = transaction.objectStore('posts');
      const request = store.getAll();
      
      request.onsuccess = () => {
        const allPosts = request.result || [];
        const userPosts = allPosts.filter(p => p.authorId === userId);
        resolve(userPosts.map(p => p.post));
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Save points for a user
  async function savePoints(userId, points) {
    if (!mediaDB) await initMediaDB();
    
    // Save to IndexedDB
    const dbPromise = new Promise((resolve, reject) => {
      const transaction = mediaDB.transaction(['points'], 'readwrite');
      const store = transaction.objectStore('points');
      
      const record = {
        userId: userId,
        points: points,
        savedAt: Date.now()
      };
      
      const request = store.put(record);
      request.onsuccess = () => resolve(true);
      request.onerror = () => reject(request.error);
    });
    
    // Also sync to Supabase for cloud persistence
    const supabasePromise = syncPointsToSupabase(userId, points);
    
    try {
      await Promise.all([dbPromise, supabasePromise]);
      return true;
    } catch (error) {
      console.warn('[EnhancedPersistence] Points save failed:', error);
      return false;
    }
  }

  // Load points for a user
  async function loadPoints(userId) {
    if (!mediaDB) await initMediaDB();
    
    return new Promise((resolve, reject) => {
      const transaction = mediaDB.transaction(['points'], 'readonly');
      const store = transaction.objectStore('points');
      const request = store.get(userId);
      
      request.onsuccess = () => {
        const record = request.result;
        resolve(record ? record.points : 0);
      };
      request.onerror = () => reject(request.error);
    });
  }

  // Restore all data for a user
  async function restore(userId) {
    if (!mediaDB) await initMediaDB();
    
    try {
      // Load from IndexedDB (local storage)
      const localPosts = await loadPosts(userId);
      const localPoints = await loadPoints(userId);
      
      // Load from Supabase (cloud storage)
      const cloudPosts = await loadPostsFromSupabase(userId);
      const cloudPoints = await loadPointsFromSupabase(userId);
      
      // Merge posts (use cloud as primary, local as backup)
      const allPosts = [...cloudPosts, ...localPosts];
      const uniquePosts = [];
      const seenIds = new Set();
      
      allPosts.forEach(post => {
        if (!seenIds.has(post.id)) {
          seenIds.add(post.id);
          uniquePosts.push(post);
        }
      });
      
      // Use higher points value between local and cloud
      const finalPoints = Math.max(localPoints, cloudPoints);
      
      // Restore posts to D object if it exists
      if (typeof D !== 'undefined' && D.posts) {
        const existingIds = new Set(D.posts.map(p => p.id));
        uniquePosts.forEach(post => {
          if (!existingIds.has(post.id)) {
            D.posts.push(post);
          }
        });
      }
      
      console.log('[EnhancedPersistence] Restored:', {
        userId: userId,
        postsCount: uniquePosts.length,
        points: finalPoints,
        source: cloudPosts.length > 0 ? 'cloud+local' : 'local'
      });
      
      return { posts: uniquePosts, points: finalPoints };
    } catch (error) {
      console.error('[EnhancedPersistence] Restore failed:', error);
      return { posts: [], points: 0 };
    }
  }

  // Get storage statistics
  async function getStorageStats() {
    if (!mediaDB) await initMediaDB();
    
    return new Promise((resolve) => {
      const stats = {
        posts: 0,
        media: 0,
        points: 0,
        totalSize: 0
      };
      
      Promise.all([
        new Promise((resolve) => {
          const transaction = mediaDB.transaction(['posts'], 'readonly');
          const store = transaction.objectStore('posts');
          const request = store.getAll();
          request.onsuccess = () => {
            stats.posts = (request.result || []).length;
            resolve();
          };
        }),
        new Promise((resolve) => {
          const transaction = mediaDB.transaction(['media'], 'readonly');
          const store = transaction.objectStore('media');
          const request = store.getAll();
          request.onsuccess = () => {
            const mediaItems = request.result || [];
            stats.media = mediaItems.length;
            stats.totalSize += JSON.stringify(mediaItems).length;
            resolve();
          };
        }),
        new Promise((resolve) => {
          const transaction = mediaDB.transaction(['points'], 'readonly');
          const store = transaction.objectStore('points');
          const request = store.getAll();
          request.onsuccess = () => {
            stats.points = (request.result || []).length;
            resolve();
          };
        })
      ]).then(() => resolve(stats));
    });
  }

  // Clear all data for a user (account deletion)
  async function clearUserData(userId) {
    if (!mediaDB) await initMediaDB();
    
    return new Promise((resolve) => {
      const transaction = mediaDB.transaction(['posts', 'media', 'points'], 'readwrite');
      
      // Delete user's posts
      const postsStore = transaction.objectStore('posts');
      const postsRequest = postsStore.getAll();
      postsRequest.onsuccess = () => {
        const posts = postsRequest.result || [];
        posts.forEach(post => {
          if (post.authorId === userId) {
            postsStore.delete(post.id);
          }
        });
      };
      
      // Delete user's media
      const mediaStore = transaction.objectStore('media');
      const mediaRequest = mediaStore.getAll();
      mediaRequest.onsuccess = () => {
        const media = mediaRequest.result || [];
        media.forEach(item => {
          if (item.metadata && item.metadata.authorId === userId) {
            mediaStore.delete(item.id);
          }
        });
      };
      
      // Delete user's points
      const pointsStore = transaction.objectStore('points');
      pointsStore.delete(userId);
      
      transaction.oncomplete = () => {
        console.log('[EnhancedPersistence] Cleared data for user:', userId);
        resolve(true);
      };
    });
  }

  // Initialize the persistence system
  async function init() {
    try {
      await initMediaDB();
      console.log('[EnhancedPersistence] Initialized successfully');
      return true;
    } catch (error) {
      console.error('[EnhancedPersistence] Init failed:', error);
      return false;
    }
  }

  // Show persistence status
  function showPersistenceStatus() {
    getStorageStats().then(stats => {
      const message = `
📊 Enhanced Persistence Status

Posts Saved: ${stats.posts}
Media Files: ${stats.media}
User Points: ${stats.points}
Total Storage: ${(stats.totalSize / 1024).toFixed(2)} KB

✅ Your data is safe and will survive logout/login!
      `;
      alert(message);
    });
  }

  // Supabase Helper Functions
  async function supabaseRequest(table, method, data = null) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/${table}`, {
        method: method,
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
          'Prefer': 'return=representation'
        },
        body: data ? JSON.stringify(data) : null
      });
      
      if (!response.ok) throw new Error(`Supabase error: ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn('[Supabase] Request failed:', error);
      return null;
    }
  }

  // Sync post to Supabase
  async function syncPostToSupabase(post) {
    try {
      const postData = {
        id: post.id,
        author: post.author,
        text: post.text,
        type: post.type,
        file: post.file,
        hashtags: post.hashtags,
        category: post.category,
        published: true,
        created_at: new Date(post.createdAt).toISOString()
      };
      
      const result = await supabaseRequest('posts', 'POST', postData);
      if (result) {
        console.log('[Supabase] Post synced:', post.id);
      }
    } catch (error) {
      console.warn('[Supabase] Post sync failed:', error);
    }
  }

  // Sync points to Supabase
  async function syncPointsToSupabase(userId, points) {
    try {
      const pointsData = {
        user_id: userId,
        points: points,
        updated_at: new Date().toISOString()
      };
      
      const result = await supabaseRequest('user_points', 'POST', pointsData);
      if (result) {
        console.log('[Supabase] Points synced for user:', userId);
      }
    } catch (error) {
      console.warn('[Supabase] Points sync failed:', error);
    }
  }

  // Load posts from Supabase
  async function loadPostsFromSupabase(userId) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/posts?author=eq.${userId}&select=*`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to load posts');
      const posts = await response.json();
      return posts || [];
    } catch (error) {
      console.warn('[Supabase] Load posts failed:', error);
      return [];
    }
  }

  // Load points from Supabase
  async function loadPointsFromSupabase(userId) {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/user_points?user_id=eq.${userId}&select=points`, {
        headers: {
          'apikey': SUPABASE_ANON_KEY,
          'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
        }
      });
      
      if (!response.ok) throw new Error('Failed to load points');
      const data = await response.json();
      return data && data.length > 0 ? data[0].points : 0;
    } catch (error) {
      console.warn('[Supabase] Load points failed:', error);
      return 0;
    }
  }

  return {
    init,
    savePost,
    saveMedia,
    savePoints,
    loadPosts,
    loadMedia,
    loadPoints,
    restore,
    restorePoints: loadPoints,
    getStorageStats,
    clearUserData,
    showPersistenceStatus,
    syncPostToSupabase,
    syncPointsToSupabase,
    loadPostsFromSupabase,
    loadPointsFromSupabase
  };
})();

// Make it globally available
window.enhancedPersistence = EnhancedPersistence;

console.log('[EnhancedPersistence] System loaded');
