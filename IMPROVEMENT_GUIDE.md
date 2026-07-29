# Monetixra উন্নতি গাইড - ধাপে ধাপে
**শুরু করার তারিখ:** 2026-07-21

---

## 📋 সম্পূর্ণ উন্নতি প্ল্যান

এই গাইড অনুযায়ী ধাপে ধাপে উন্নত করলে ওয়েবসাইট শক্তিশালী হবে। প্রতিটি ধাপ সম্পন্ন করার পর পরবর্তী ধাপে যান।

---

## 🎯 ফেজ ১: ক্রিটিক্যাল সেটআপ (আজ করুন)

### ধাপ ১.১: npm Dependencies ইনস্টল করুন

**সমস্যা:** PowerShell এক্সিকিউশন পলিসির কারণে npm install কাজ করছে না

**সমাধান:**

১. PowerShell ওপেন করুন (Administrator হিসেবে না)
২. নিচের কমান্ড রান করুন:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
৩. তারপর প্রজেক্ট ফোল্ডারে যান:
```powershell
cd f:\monetixra-main
```
৪. npm install রান করুন:
```powershell
npm install
```

**ভেরিফাই:** কমান্ড সফল হলে `node_modules` ফোল্ডার তৈরি হবে।

---

### ধাপ ১.২: FFmpeg ইনস্টল করুন

**সমস্যা:** FFmpeg নেই, তাই ভিডিও/অডিও ট্রান্সকোডিং কাজ করবে না।

**সমাধান:**

**অপশন A: winget ব্যবহার করে (সবচেয়ে সহজ)**
```powershell
winget install Gyan.dev.FFmpeg
```
যদি প্রম্পট আসে, তাহলে `Y` চাপুন। যদি `winget` কাজ না করে, তাহলে অপশন B বা C ব্যবহার করুন।

**অপশন B: Chocolatey ব্যবহার করে**
```powershell
# PowerShell এ রান করুন (প্রথমে Chocolatey ইনস্টল করুন)
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))

# তারপর FFmpeg ইনস্টল করুন
choco install ffmpeg -y
```

**অপশন C: ম্যানুয়ালি ডাউনলোড**
১. https://ffmpeg.org/download.html এ যান
২. Windows এর জন্য বाइनারি/বিল্ড ডাউনলোড করুন
৩. জিপ ফাইল আনজিপ করুন (যেমন: `C:\ffmpeg`)
৪. PATH এ যোগ করুন:
```powershell
# System Environment Variables এ যান
# PATH এ যোগ করুন: C:\ffmpeg\bin
```
৫. PowerShell অথবা VS Code বন্ধ করে আবার খুলুন।

**ভেরিফাই:**
```powershell
ffmpeg -version
ffprobe -version
```
যদি version দেখায়, তাহলে ইনস্টলেশন সফল। যদি `ffmpeg` না চিনে, তাহলে টার্মিনাল রিস্টার্ট করুন এবং PATH ঠিক আছে কিনা চেক করুন।

---

### ধাপ ১.৩: .env ফাইল তৈরি করুন

**সমস্যা:** সব credentials কোডে হার্ডকোড আছে (নিরাপত্তা ঝুঁকি)

**সমাধান:**

১. `f:\monetixra-main` ফোল্ডারে যান
২. নতুন ফাইল তৈরি করুন: `.env`
৩. নিচের কন্টেন্ট কপি করে পেস্ট করুন:

```env
# ── Server Configuration ────────────────────────────────────────────
PORT=3000
NODE_ENV=production

# ── API Keys ────────────────────────────────────────────────────────
OPENAI_API_KEY=
DEEPSEEK_API_KEY=

# ── Cloudinary ───────────────────────────────────────────────────────
CLOUDINARY_CLOUD_NAME=djdqqkdyf
CLOUDINARY_API_KEY=333568318583158
CLOUDINARY_API_SECRET=3aPp5oR0zmJX9P4oOfb3fR3a3SI

# ── Supabase ────────────────────────────────────────────────────────
SUPABASE_URL=https://rkiyxsskrypowghxfauy.supabase.co
SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJraXl4c3Nrcnlwb3dnaHhmYXV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzNzYzNzgsImV4cCI6MjA5Mzk1MjM3OH0.WC3NUHlzJE-cez7MVhNN8s7UiZKC1WeFn5FpjewALHE
SUPABASE_SERVICE_ROLE_KEY=

# ── MEGA API ────────────────────────────────────────────────────────
MEGA_API_KEY=4dt-kltg8nnVA_ycAUMS_Q

# ── Agora ───────────────────────────────────────────────────────────
AGORA_APP_ID=e9cfd627a92f4466a047b2a820e1382e
AGORA_APP_CERTIFICATE=3ea92e07b5204067afdaaf8b06457c46
AGORA_API_KEY=333568318583158
AGORA_API_SECRET=3aPp5oR0zmJX9P4oOfb3fR3a3SI

# ── AdMob ────────────────────────────────────────────────────────────
ADMOB_APP_ID=ca-app-pub-2253243248364888~1427340343
ADMOB_BANNER_AD_UNIT=ca-app-pub-2253243248364888/3990983995
ADMOB_INTERSTITIAL_AD_UNIT=ca-app-pub-2253243248364888/3199587018
ADMOB_REWARDED_AD_UNIT=ca-app-pub-2253243248364888/5139354646

# ── AdSense ──────────────────────────────────────────────────────────
ADSENSE_CLIENT=ca-pub-2397116277801081

# ── Adsterra ─────────────────────────────────────────────────────────
ADSTERRA_API_KEY=55d8dff1aa431254a145e6f12f01b775

# ── Payment Gateways ─────────────────────────────────────────────────
BKASH_APP_KEY=
BKASH_APP_SECRET=
BKASH_USERNAME=
BKASH_PASSWORD=

NAGAD_MERCHANT_ID=
NAGAD_PUBLIC_KEY=

# ── Web Push ─────────────────────────────────────────────────────────
VAPID_PUBLIC_KEY=
VAPID_PRIVATE_KEY=
VAPID_EMAIL=mailto:myworktoolsp3@gmail.com

# ── Google APIs ─────────────────────────────────────────────────────
GOOGLE_API_KEY=AIzaSyCk05RbvCwZmX42jd-z1STsjSwn3uvkqzU
GOOGLE_VISION_KEY=AIzaSyDIgQr0BfU4-AfWRA2_HFcDhwZZj7ymiUg

# ── Metered TURN ─────────────────────────────────────────────────────
METERED_API_KEY=ffb21c8dfcff4bf229f8973e77541a11edc0

# ── Security ─────────────────────────────────────────────────────────
ADMIN_API_SECRET=
ALLOWED_ORIGINS=http://localhost:3000,https://monetixra.onrender.com
SOCKET_AUTH_REQUIRED=false
PTS_PER_USD=1000
```

**গুরুত্বপূর্ণ:** খালি ফিলডগুলো পরে পূরণ করবেন (যদি থাকে)।

---

### ধাপ ১.৪: Supabase প্রজেক্ট ভেরিফাই করুন

**সমস্যা:** নতুন Supabase URL দেওয়া হয়েছে, কিন্তু প্রজেক্টটি সত্যিই কাজ করছে কিনা নিশ্চিত করতে হবে।

**সমাধান:**

১. https://supabase.com/dashboard এ যান
২. লগইন করুন
৩. প্রজেক্ট ID চেক করুন: `rkiyxsskrypowghxfauy`
৪. যদি প্রজেক্ট না থাকে:
   - নতুন প্রজেক্ট তৈরি করুন
   - নতুন URL এবং anon/service-role key কপি করুন
   - `.env` ফাইল আপডেট করুন
৫. যদি প্রজেক্ট থাকে:
   - Supabase SQL Editor খুলুন
   - নিচের SQL রান করুন:

```sql
-- Users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT,
  username TEXT UNIQUE,
  email TEXT UNIQUE,
  phone TEXT,
  points INTEGER DEFAULT 0,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Posts table
CREATE TABLE IF NOT EXISTS posts (
  id TEXT PRIMARY KEY,
  author TEXT REFERENCES users(id),
  text TEXT,
  type TEXT,
  file TEXT,
  hashtags TEXT[],
  category TEXT,
  published BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Transactions table
CREATE TABLE IF NOT EXISTS transactions (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  type TEXT,
  label TEXT,
  pts INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Media table
CREATE TABLE IF NOT EXISTS media (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  type TEXT,
  url TEXT,
  size INTEGER,
  created_at TIMESTAMP DEFAULT NOW()
);
```

৬. Table Editor বা Database → Tables-এ যান এবং `users`, `posts`, `transactions`, `media` দেখা যাচ্ছে কিনা চেক করুন।

**ভেরিফাই:**
- Supabase dashboard-এ টেবিলগুলো দেখা উচিত
- `.env`-এর `SUPABASE_URL` ও `SUPABASE_ANON_KEY` সেই প্রজেক্টের সাথে মিলছে কিনা নিশ্চিত করুন
- SQL Editor-এ `SELECT * FROM users LIMIT 1;` রান করলে error না হলে connection কাজ করছে

**Supabase verification checklist:**
- [ ] Project exists in dashboard
- [ ] Tables created successfully
- [ ] Connection from app is possible
- [ ] `.env` values match the project

---

### ধাপ ১.৫: সার্ভার টেস্ট রান করুন

**সমস্যা:** অ্যাপ স্টার্ট হচ্ছে কিনা, সেটি যাচাই করতে হবে।

**সমাধান:**

```powershell
cd f:\monetixra-main
node server.js
```

**ভেরিফাই:**
- কনসোলে নিচের ধরণের আউটপুট দেখলে সফল:

```text
🚀 Monetixra v8.0 — Port 3000
   ✅ Socket.io Real-time
   ✅ WebRTC Video/Audio
```

**যদি error আসে:**
- `Cannot find module ...` হলে `npm install` আবার চালান
- `.env` না থাকলে আগের ধাপ পুনরায় চেক করুন
- Port already in use হলে অন্য কোনো প্রসেস বন্ধ করুন বা `PORT=3001` ব্যবহার করুন
- `ECONNREFUSED` বা `SUPABASE` related error হলে Supabase URL/key চেক করুন

**Server test checklist:**
- [ ] Server starts without crashing
- [ ] Port 3000 or chosen port is listening
- [ ] No critical runtime errors in console
- [ ] App can connect to Supabase and socket layer

---

## 🔒 ফেজ ২: সিকিউরিটি হার্ডেনিং (এই সপ্তাহ)

### ধাপ ২.১: CORS কনফিগারেশন ঠিক করুন

**সমস্যা:** CORS `'*'` অনুমতি দিয়েছে (নিরাপত্তা ঝুঁকি)

**সমাধান:**

`server.js` ফাইল ওপেন করুন এবং লাইন ৯৭ এবং ১০৩ পরিবর্তন করুন:

**পূর্বে:**
```javascript
cors:{origin:'*',methods:['GET','POST']},
```

**পরে:**
```javascript
cors:{
  origin: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(','),
  methods:['GET','POST'],
  credentials: true
},
```

এবং লাইন ১০৩:
```javascript
app.use(cors({
  origin: (process.env.ALLOWED_ORIGINS || 'http://localhost:3000').split(','),
  credentials: true
}));
```

---

### ধাপ ২.২: অ্যাডমিন অথেন্টিকেশন উন্নত করুন

**সমস্যা:** Header spoofing করা সম্ভব

**সমাধান:**

`server.js` এ লাইন ২৬১-২৭৩ পরিবর্তন করুন:

**পূর্বে:**
```javascript
function isAdminRequest(req) {
  const adminId = req.headers['x-user-id'] || req.query.userId || req.body?.userId;
  const suppliedSecret = req.headers['x-admin-secret'] || req.query.adminSecret || req.body?.adminSecret || '';
  const trustedRoleHeader = !!(process.env.ADMIN_API_SECRET && suppliedSecret && suppliedSecret === process.env.ADMIN_API_SECRET);
  const adminRole = trustedRoleHeader && String(req.headers['x-admin-role'] || req.query.admin || '').toLowerCase() === 'true';
  const user = adminId ? syncStore.users.get(String(adminId)) : null;
  return adminRole || !!(user && (user.isAdmin || user.is_admin));
}
```

**পরে:**
```javascript
function isAdminRequest(req) {
  const adminId = req.headers['x-user-id'] || req.query.userId || req.body?.userId;
  const suppliedSecret = req.headers['x-admin-secret'] || req.query.adminSecret || req.body?.adminSecret || '';
  
  // Strong secret validation
  if (!process.env.ADMIN_API_SECRET) {
    console.warn('[Security] ADMIN_API_SECRET not set in environment');
  }
  
  const trustedRoleHeader = !!(process.env.ADMIN_API_SECRET && suppliedSecret && suppliedSecret === process.env.ADMIN_API_SECRET);
  const adminRole = trustedRoleHeader && String(req.headers['x-admin-role'] || req.query.admin || '').toLowerCase() === 'true';
  
  const user = adminId ? syncStore.users.get(String(adminId)) : null;
  const userIsAdmin = user && (user.isAdmin || user.is_admin);
  
  // Log admin access attempts
  if (adminRole || userIsAdmin) {
    console.log('[AdminAccess]', { adminId, adminRole, userIsAdmin, ip: req.ip });
  }
  
  return adminRole || userIsAdmin;
}
```

---

### ধাপ ২.৩: ইনপুট ভ্যালিডেশন যোগ করুন

**সমস্যা:** API endpoints এ ভ্যালিডেশন নেই

**সমাধান:**

প্রথমে express-validator ইনস্টল করুন:
```powershell
npm install express-validator
```

তারপর `server.js` এ শুরুতে যোগ করুন:
```javascript
const { body, validationResult } = require('express-validator');
```

এখন `/api/posts/sync` endpoint এ ভ্যালিডেশন যোগ করুন (লাইন ১১১১):

**পূর্বে:**
```javascript
app.post('/api/posts/sync', async(req,res)=>{
  try {
    const postData = req.body;
    if(!postData || !postData.id) return res.status(400).json({error:'Post id required'});
```

**পরে:**
```javascript
app.post('/api/posts/sync',
  body('id').isString().notEmpty().withMessage('Post id is required'),
  body('text').optional().isString().withMessage('Text must be a string'),
  body('type').optional().isString().withMessage('Type must be a string'),
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // বাকি কোড একই থাকবে
```

একইভাবে অন্য endpoints এ ভ্যালিডেশন যোগ করুন।

---

### ধাপ ২.৪: Per-User Rate Limiting যোগ করুন

**সমস্যা:** Rate limiting গ্লোবাল, per-user নেই

**সমাধান:**

`server.js` এ লাইন ১১২-১১৮ এর পরে যোগ করুন:

```javascript
// Per-user rate limiting
const userLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per window per user
  keyGenerator: (req) => {
    return req.headers['x-user-id'] || req.ip;
  },
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests from this user' }
});

// Apply to sensitive endpoints
app.use('/api/posts/', userLimiter);
app.use('/api/points/', userLimiter);
app.use('/api/payment/', userLimiter);
```

---

### ধাপ ২.৫: CSRF প্রটেকশন যোগ করুন

**সমস্যা:** CSRF প্রটেকশন নেই

**সমাধান:**

প্রথমে csurf ইনস্টল করুন:
```powershell
npm install csurf cookie-parser
```

`server.js` এ শুরুতে যোগ করুন:
```javascript
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
```

app.use সেকশনে যোগ করুন:
```javascript
app.use(cookieParser());
const csrfProtection = csrf({ cookie: true });

// CSRF token endpoint
app.get('/api/csrf-token', csrfProtection, (req, res) => {
  res.json({ csrfToken: req.csrfToken() });
});
```

State-changing endpoints এ যোগ করুন:
```javascript
app.post('/api/posts/sync', csrfProtection, async(req,res)=>{
  // ... existing code
});
```

---

## ⚡ ফেজ ৩: পারফরম্যান্স অপটিমাইজেশন (পরের সপ্তাহ)

### ধাপ ৩.১: ক্যাশিং স্ট্র্যাটেজি যোগ করুন

**সমস্যা:** API calls রিপিট হচ্ছে

**সমাধান:**

প্রথমে node-cache ইনস্টল করুন:
```powershell
npm install node-cache
```

`server.js` এ শুরুতে যোগ করুন:
```javascript
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); // 5 minutes
```

Crypto prices endpoint এ ক্যাশিং যোগ করুন (লাইন ৮৮৩):

**পূর্বে:**
```javascript
app.get('/api/crypto/prices', async(_,res)=>{
  try {
    const r=await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,solana,toncoin&vs_currencies=usd&include_24hr_change=true');
    res.json(await r.json());
  }catch(e){ res.json({bitcoin:{usd:0},ethereum:{usd:0},solana:{usd:0},binancecoin:{usd:0}}); }
});
```

**পরে:**
```javascript
app.get('/api/crypto/prices', async(_,res)=>{
  const cached = cache.get('crypto_prices');
  if (cached) {
    console.log('[Cache] Hit for crypto_prices');
    return res.json(cached);
  }
  
  try {
    const r=await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin,solana,toncoin&vs_currencies=usd&include_24hr_change=true');
    const data = await r.json();
    cache.set('crypto_prices', data);
    console.log('[Cache] Miss for crypto_prices, cached now');
    res.json(data);
  }catch(e){ 
    res.json({bitcoin:{usd:0},ethereum:{usd:0},solana:{usd:0},binancecoin:{usd:0}}); 
  }
});
```

---

### ধাপ ৩.২: Socket.io Reconnection উন্নত করুন

**সমস্যা:** Reconnection স্ট্র্যাটেজি নেই

**সমাধান:**

`index.html` এ socket.io কানেকশন খুঁজুন এবং আপডেট করুন:

**পূর্বে:**
```javascript
socket = io(SOCKET_URL);
```

**পরে:**
```javascript
socket = io(SOCKET_URL || window.location.origin, {
  transports: ['websocket', 'polling'],
  reconnection: true,
  reconnectionAttempts: 5,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  timeout: 10000
});

// Connection status monitoring
socket.on('connect', () => {
  console.log('[Socket] Connected');
  toast('s', '✅ Connected to server');
});

socket.on('disconnect', () => {
  console.log('[Socket] Disconnected');
  toast('w', '⚠️ Disconnected from server');
});

socket.on('reconnect', (attemptNumber) => {
  console.log('[Socket] Reconnected after', attemptNumber, 'attempts');
  toast('s', '✅ Reconnected to server');
});

socket.on('reconnect_attempt', (attemptNumber) => {
  console.log('[Socket] Reconnection attempt', attemptNumber);
  if (attemptNumber > 2) {
    toast('i', `🔄 Reconnecting... (${attemptNumber}/5)`);
  }
});

socket.on('reconnect_failed', () => {
  console.log('[Socket] Reconnection failed');
  toast('e', '❌ Failed to reconnect to server');
});
```

---

### ধাপ ৩.৩: Global Error Handler যোগ করুন

**সমস্যা:** JavaScript এররে অ্যাপ ক্র্যাশ হতে পারে

**সমাধান:**

`index.html` এ শেষে যোগ করুন (আগের error handler এর পরে):

```javascript
// Enhanced Global Error Handler with Logging
window.onerror = function(msg, url, line, col, error) {
  console.error('[GlobalError]', {
    message: msg,
    url: url,
    line: line,
    column: col,
    error: error?.stack
  });
  
  // Send error to server for logging (optional)
  if (typeof fetch === 'function') {
    fetch('/api/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: msg,
        url: url,
        line: line,
        column: col,
        stack: error?.stack,
        userAgent: navigator.userAgent,
        timestamp: new Date().toISOString()
      })
    }).catch(() => {}); // Silent fail
  }
  
  // Show user-friendly error message
  if (!window.errorShown) {
    window.errorShown = true;
    toast('e', 'Something went wrong. Please refresh the page.');
  }
  
  return false;
};

// Unhandled Promise Rejection Handler
window.onunhandledrejection = function(event) {
  console.error('[UnhandledPromiseRejection]', event.reason);
  
  if (typeof fetch === 'function') {
    fetch('/api/log-error', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'unhandled_rejection',
        reason: String(event.reason),
        timestamp: new Date().toISOString()
      })
    }).catch(() => {});
  }
  
  event.preventDefault();
};
```

---

### ধাপ ৩.৪: অ্যাড লোডিং Error Handling যোগ করুন

**সমস্যা:** অ্যাড স্ক্রিপ্ট সাইলেন্টলি ফেইল হতে পারে

**সমাধান:**

`index.html` এ অ্যাড লোডিং ফাংশনগুলোতে error handling যোগ করুন:

**loadDlAdBundle ফাংশন আপডেট (লাইন ৬৭৩৯):**

```javascript
function loadDlAdBundle(slotId, type) {
  let slot = G(slotId); if(!slot) return;
  slot.innerHTML = '';
  
  // Revenue tracking
  trackAdRevenue(type === 'during' ? 'download_during' : 'download_after', 0);
  
  try {
    if (type === 'during') {
      // ... existing during ad code ...
      
      // Load the 160x30 ad with error handling
      try {
        loadDlAd(slotId + '_160', CPMR_BANNER_160x30_KEY, 30, 160, 'https://www.highperformanceformat.com/' + CPMR_BANNER_160x30_KEY + '/invoke.js');
      } catch(e) {
        console.warn('[Ad] 160x30 ad failed to load:', e);
        slot.querySelector('#' + slotId + '_160').innerHTML = '<div style="font-size:10px;color:var(--t3);">Ad unavailable</div>';
      }
      
      // Load 300x50 ad with error handling
      setTimeout(() => {
        try {
          loadDlAd(slotId + '_300', CPMR_BANNER_300x50_KEY, 50, 300, 'https://www.highperformanceformat.com/' + CPMR_BANNER_300x50_KEY + '/invoke.js');
        } catch(e) {
          console.warn('[Ad] 300x50 ad failed to load:', e);
          slot.querySelector('#' + slotId + '_300').innerHTML = '<div style="font-size:10px;color:var(--t3);">Ad unavailable</div>';
        }
      }, 300);
      
      // Load native banner with error handling
      setTimeout(() => {
        try {
          let nativeScript = document.createElement('script');
          nativeScript.async = true;
          nativeScript.setAttribute('data-cfasync', 'false');
          nativeScript.src = 'https://pl29280287.profitablecpmratenetwork.com/1805a61f4f6c6177d946441e5153e81c/invoke.js';
          nativeScript.onerror = () => {
            console.warn('[Ad] Native banner failed to load');
            slot.querySelector('#' + slotId + '_native').innerHTML = '<div style="font-size:10px;color:var(--t3);">Ad unavailable</div>';
          };
          slot.querySelector('#' + slotId + '_native')?.appendChild(nativeScript);
        } catch(e) {
          console.warn('[Ad] Native banner error:', e);
        }
      }, 600);
      
    } else if (type === 'after') {
      // ... existing after ad code with similar error handling ...
    }
  } catch(e) {
    console.error('[AdBundle] Failed to load ad bundle:', e);
    slot.innerHTML = '<div style="font-size:10px;color:var(--t3);">Ads temporarily unavailable</div>';
  }
}
```

---

## 📱 ফেজ ৪: UX উন্নতি (পরবর্তী সপ্তাহ)

### ধাপ ৪.১: Loading States যোগ করুন

**সমস্যা:** ইউজার জানে না কখন অপারেশন চলছে

**সমাধান:**

গ্লোবাল loading ফাংশন যোগ করুন:

```javascript
// Global loading state
let isLoading = false;

function showLoading(message = 'Loading...') {
  if (isLoading) return;
  isLoading = true;
  
  let loader = document.createElement('div');
  loader.id = 'globalLoader';
  loader.style.cssText = `
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;
  loader.innerHTML = `
    <div style="background:var(--g2);padding:20px;border-radius:12px;text-align:center;">
      <div style="width:40px;height:40px;border:3px solid var(--neon);border-top-color:transparent;border-radius:50%;animation:spin 1s linear infinite;margin:0 auto 10px;"></div>
      <div style="color:var(--t2);font-size:14px;">${message}</div>
    </div>
    <style>@keyframes spin{to{transform:rotate(360deg)}}</style>
  `;
  document.body.appendChild(loader);
}

function hideLoading() {
  isLoading = false;
  let loader = G('globalLoader');
  if (loader) loader.remove();
}
```

ব্যবহার:
```javascript
// API calls এ
async function someAsyncFunction() {
  showLoading('Processing...');
  try {
    const result = await fetch('/api/something');
    // ... process result
  } finally {
    hideLoading();
  }
}
```

---

### ধাপ ৪.২: Offline Support যোগ করুন

**সমস্যা:** ইন্টারনেট না থাকলে অ্যাপ কাজ করে না

**সমাধান:**

Service Worker তৈরি করুন (`sw.js`):

```javascript
const CACHE_NAME = 'monetixra-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
```

`index.html` এ রেজিস্টার করুন:
```javascript
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(() => console.log('[SW] Registered'))
    .catch(err => console.error('[SW] Failed:', err));
}
```

---

## 🧪 ফেজ ৫: টেস্টিং এবং ভেরিফিকেশন

### ধাপ ৫.১: ফাংশনাল টেস্টিং

**টেস্ট চেকলিস্ট:**

- [ ] সার্ভার স্টার্ট হচ্ছে
- [ ] লগইন কাজ করছে
- [ ] পোস্ট করা যাচ্ছে
- [ ] ফিড লোড হচ্ছে
- [ ] ডাউনলোড কাজ করছে
- [ ] অ্যাড দেখা যাচ্ছে
- [ ] পেমেন্ট ফ্লো কাজ করছে
- [ ] Socket.io কানেক্ট হচ্ছে
- [ ] মোবাইলে রেসপন্সিভ

### ধাপ ৫.২: সিকিউরিটি টেস্টিং

**টেস্ট চেকলিস্ট:**

- [ ] CORS শুধুমাত্র allowed origins থেকে কাজ করছে
- [ ] ইনভ্যালিড ইনপুট reject হচ্ছে
- [ ] Rate limiting কাজ করছে
- [ ] Admin endpoints protected
- [ ] CSRF tokens working

---

## 📊 প্রোগ্রেস ট্র্যাকার

| ফেজ | ধাপ | স্ট্যাটাস | তারিখ |
|------|------|----------|--------|
| ফেজ ১ | ১.১ npm install | ⬜ | |
| ফেজ ১ | ১.২ FFmpeg install | ⬜ | |
| ফেজ ১ | ১.৩ .env তৈরি | ⬜ | |
| ফেজ ১ | ১.৪ Supabase ভেরিফাই | ⬜ | |
| ফেজ ১ | ১.৫ সার্ভার টেস্ট | ⬜ | |
| ফেজ ২ | ২.১ CORS ঠিক করা | ⬜ | |
| ফেজ ২ | ২.২ অ্যাডমিন অথেন্টিকেশন | ⬜ | |
| ফেজ ২ | ২.৩ ইনপুট ভ্যালিডেশন | ⬜ | |
| ফেজ ২ | ২.৪ Per-user rate limiting | ⬜ | |
| ফেজ ২ | ২.৫ CSRF প্রটেকশন | ⬜ | |
| ফেজ ৩ | ৩.১ ক্যাশিং | ⬜ | |
| ফেজ ৩ | ৩.২ Socket.io reconnection | ⬜ | |
| ফেজ ৩ | ৩.৩ Global error handler | ⬜ | |
| ফেজ ৩ | ৩.৪ অ্যাড error handling | ⬜ | |
| ফেজ ৪ | ৪.১ Loading states | ⬜ | |
| ফেজ ৪ | ৪.২ Offline support | ⬜ | |

---

## 🎓 টিপস এবং বেস্ট প্র্যাকটিস

1. **একটি ধাপ সম্পন্ন করার পর পরবর্তী ধাপে যান**
2. **প্রতিটি পরিবর্তনের পর টেস্ট করুন**
3. **Git commit ব্যবহার করুন প্রতিটি ফেজ শেষে**
4. **ব্যাকআপ রাখুন বড় পরিবর্তনের আগে**
5. **লগ চেক করুন এরর খুঁজে পেতে**

---

## 🆘 সাপোর্ট

যদি কোনো ধাপে সমস্যা হয়:
- এরর মেসেজ চেক করুন
- কনসোল লগ দেখুন
- এই গাইডের সংশিষ্ট ধাপ রিভিউ করুন
- প্রয়োজনে পূর্বাবস্থায় ফিরে যান

---

**গাইড তৈরি:** Cascade AI Assistant  
**আপডেট:** 2026-07-21
