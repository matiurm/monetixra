/**
 * ═══════════════════════════════════════════════════════════════
 * MONETIXRA - REQUIRED API ENDPOINTS
 * ═══════════════════════════════════════════════════════════════
 * API endpoints that must be implemented for new modular system
 */

# MONETIXRA এপিআই এন্ডপয়েন্ট রিকোয়ারমেন্ট

## 🔐 Authentication Endpoints

### `POST /api/auth/login`
লগইন এন্ডপয়েন্ট
```
Request:
{
  email: string,
  password: string
}

Response (200):
{
  token: string,
  expiresIn: number (milliseconds),
  user: {
    id: string,
    email: string,
    name: string
  }
}

Response (401):
{
  error: string
}
```

### `POST /api/auth/register`
রেজিস্ট্রেশন এন্ডপয়েন্ট
```
Request:
{
  email: string,
  password: string,
  name: string,
  metadata: object (optional)
}

Response (201):
{
  token: string,
  expiresIn: number,
  user: object
}
```

### `POST /api/auth/logout`
লগআউট এন্ডপয়েন্ট
```
Headers:
Authorization: Bearer {token}

Response (200):
{
  success: true
}
```

### `GET /api/auth/verify`
টোকেন ভেরিফিকেশন
```
Headers:
Authorization: Bearer {token}

Response (200):
{
  valid: true,
  user: object
}

Response (401):
{
  error: 'Invalid token'
}
```

### `POST /api/auth/refresh`
টোকেন রিফ্রেশ
```
Headers:
Authorization: Bearer {token}

Response (200):
{
  token: string,
  expiresIn: number
}
```

---

## 📱 Account Management Endpoints

### `POST /api/account/deactivate`
অ্যাকাউন্ট ডিঅ্যাক্টিভেট
```
Headers:
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  userId: string,
  reason: string (optional),
  deactivatedAt: string (ISO format)
}

Response (200):
{
  success: true,
  userId: string
}
```

### `DELETE /api/account/{userId}`
অ্যাকাউন্ট ডিলিট (পারম্যানেন্ট)
```
Headers:
Authorization: Bearer {token}
Content-Type: application/json

Request:
{
  password: string,
  deletedAt: string (ISO format),
  reason: string
}

Response (200):
{
  success: true,
  userId: string
}

Response (401):
{
  error: 'Invalid password'
}
```

### `POST /api/notifications/clear`
সব নোটিফিকেশন ক্লিয়ার
```
Headers:
Authorization: Bearer {token}

Response (200):
{
  success: true,
  clearedCount: number
}
```

### `POST /api/notifications/mark-read`
সব নোটিফিকেশন রিড
```
Headers:
Authorization: Bearer {token}

Response (200):
{
  success: true,
  markedCount: number
}
```

---

## 🤖 AI Features Endpoints

### `POST /api/ai/caption`
এআই ক্যাপশন জেনারেট
```
Request:
{
  type: string ('video'|'audio'|'photo'),
  data: string (base64 or data URL),
  style: string ('descriptive'|'engaging'|'casual'),
  language: string ('auto'|language code)
}

Response (200):
{
  caption: string,
  type: string,
  style: string,
  language: string
}
```

### `POST /api/ai/hashtags`
হ্যাশট্যাগ সাজেশন
```
Request:
{
  caption: string,
  fileType: string ('photo'|'video'|'audio'),
  maxHashtags: number (default: 10)
}

Response (200):
{
  hashtags: string[] (array of #hashtags)
}
```

### `POST /api/ai/vision`
ভিশন এআই (অবজেক্ট ডিটেকশন)
```
Request:
{
  type: string ('object-detection'|'photo'),
  data: string (base64 image)
}

Response (200):
{
  caption: string,
  labels: string[],
  text: string,
  safe: boolean,
  objects: string[]
}
```

### `POST /api/ai/translate`
অনুবাদ
```
Request:
{
  text: string,
  targetLanguage: string,
  sourceLanguage: string ('auto'|language code)
}

Response (200):
{
  translated: string,
  translatedText: string,
  sourceLanguage: string,
  targetLanguage: string,
  configured: boolean
}
```

### `POST /api/ai/transcribe`
ট্রান্সক্রাইব (ভিডিও/অডিও থেকে টেক্সট)
```
Request:
{
  name: string (filename),
  data: string (base64),
  type: string (mime type)
}

Response (200):
{
  transcript: string,
  source: string ('vision'|'asr')
}

Response (501):
{
  error: string (if ASR not configured)
}
```

---

## 📝 Data Sync Endpoints

### `POST /api/posts/sync`
পোস্ট সিঙ্ক
```
Headers:
Authorization: Bearer {token}

Request:
{
  id: string,
  author: string,
  text: string,
  hashtags: string[],
  fileUrl: string,
  fileType: string,
  createdAt: number,
  isPremium: boolean,
  metadata: object
}

Response (200):
{
  success: true,
  synced: true,
  persisted: true,
  id: string,
  totalPosts: number
}
```

### `POST /api/posts/{postId}/like`
লাইক টগল
```
Headers:
Authorization: Bearer {token}

Request:
{
  userId: string,
  postId: string
}

Response (200):
{
  success: true,
  liked: boolean
}
```

### `POST /api/posts/{postId}/unlike`
আনলাইক
```
Headers:
Authorization: Bearer {token}

Request:
{
  userId: string,
  postId: string
}

Response (200):
{
  success: true
}
```

### `POST /api/comments/sync`
কমেন্ট সিঙ্ক
```
Headers:
Authorization: Bearer {token}

Request:
{
  id: string,
  postId: string,
  author: string,
  text: string,
  createdAt: number
}

Response (200):
{
  success: true
}
```

### `POST /api/chat/sync`
চ্যাট মেসেজ সিঙ্ক
```
Headers:
Authorization: Bearer {token}

Request:
{
  room: string,
  from: string,
  text: string,
  media: string (optional),
  timestamp: number
}

Response (200):
{
  success: true
}
```

### `POST /api/user-data/sync`
ইউজার ডেটা সিঙ্ক
```
Headers:
Authorization: Bearer {token}

Request:
{
  id: string,
  name: string,
  username: string,
  points: number,
  profile: object,
  metadata: object
}

Response (200):
{
  success: true,
  synced: true,
  persisted: true,
  key: string,
  canonicalId: string,
  points: number,
  totalUsers: number
}
```

---

## 🔄 Sync Status Endpoints

### `GET /api/sync/status`
সিঙ্ক স্ট্যাটাস
```
Response (200):
{
  online: true,
  queued: number,
  syncing: boolean
}
```

### `POST /api/points/sync`
পয়েন্ট সিঙ্ক
```
Headers:
Authorization: Bearer {token}

Request:
{
  userId: string,
  points: number,
  label: string
}

Response (200):
{
  success: true,
  synced: true,
  persisted: true,
  points: number
}
```

---

## 📋 Error Handling

**সব API এন্ডপয়েন্ট এই এরর রেসপন্স ফরম্যাট ব্যবহার করবে:**

```
Response (400):
{
  error: string,
  detail: string (optional)
}

Response (401):
{
  error: 'Unauthorized'
}

Response (403):
{
  error: 'Forbidden'
}

Response (404):
{
  error: 'Not found'
}

Response (409):
{
  error: 'Conflict'
}

Response (500):
{
  error: 'Server error',
  detail: string
}
```

---

## ✅ Implementation Checklist

Backend টিম এই সব এন্ডপয়েন্ট নিশ্চিত করবে:

### Authentication (Required)
- [ ] POST /api/auth/login
- [ ] POST /api/auth/register
- [ ] POST /api/auth/logout
- [ ] GET /api/auth/verify
- [ ] POST /api/auth/refresh

### Account Management (Required)
- [ ] POST /api/account/deactivate
- [ ] DELETE /api/account/{userId}
- [ ] POST /api/notifications/clear
- [ ] POST /api/notifications/mark-read

### AI Features (Optional but important)
- [ ] POST /api/ai/caption
- [ ] POST /api/ai/hashtags
- [ ] POST /api/ai/vision
- [ ] POST /api/ai/translate
- [ ] POST /api/ai/transcribe

### Data Sync (Required)
- [ ] POST /api/posts/sync
- [ ] POST /api/posts/{postId}/like
- [ ] POST /api/posts/{postId}/unlike
- [ ] POST /api/comments/sync
- [ ] POST /api/chat/sync
- [ ] POST /api/user-data/sync
- [ ] GET /api/sync/status
- [ ] POST /api/points/sync

---

## 🚀 Testing

### Curl Examples

**লগইন টেস্ট:**
```bash
curl -X POST http://localhost:3000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

**ক্যাপশন জেনারেট টেস্ট:**
```bash
curl -X POST http://localhost:3000/api/ai/caption \
  -H "Content-Type: application/json" \
  -d '{"type":"video","data":"...base64...","style":"engaging"}'
```

**সিঙ্ক স্ট্যাটাস টেস্ট:**
```bash
curl -X GET http://localhost:3000/api/sync/status
```

---

## 📚 Reference

**Frontend imports required:**
```javascript
<script src="js/auth-system.js"></script>
<script src="js/account-management.js"></script>
<script src="js/ai-features.js"></script>
<script src="js/offline-sync.js"></script>
```

**All endpoints should include:**
- Proper CORS headers (if needed)
- Error handling and validation
- Rate limiting for security
- Request/response logging
- Authentication checks

---

*This document should be shared with the backend team to ensure all endpoints are properly implemented.*
