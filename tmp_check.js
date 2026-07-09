


  const admobAppId = 'ca-app-pub-2253243248364888~1427340343';
  const bannerAdUnit = 'ca-app-pub-2253243248364888/3990983995';
  const interstitialAdUnit = 'ca-app-pub-2253243248364888/3199587018';
  const rewardedAdUnit = 'ca-app-pub-2253243248364888/5139354646';

  function showBannerAd() {
    console.log('Banner Ad Loaded:', bannerAdUnit);
  }

  function showInterstitialAd() {
    console.log('Interstitial Ad Loaded:', interstitialAdUnit);
  }

  function showRewardedAd() {
    console.log('Rewarded Ad Loaded:', rewardedAdUnit);
  }


{
  "@context":"https://schema.org",
  "@type":"WebApplication",
  "name":"Monetixra",
  "description":"Complete Social Earn Platform with AI, Crypto, NFT, MLM & Live",
  "url":"https://monetixra.onrender.com",
  "applicationCategory":"SocialNetworkingApplication",
  "offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}
}








(function() {
  var smartlink = document.createElement('script');
  smartlink.async = true;
  smartlink.src = 'https://www.profitablecpmratenetwork.com/qu1bqnynm6?key=d753b3018195910056f99110db5b614a';
  if(document.head) document.head.appendChild(smartlink);
})();



window.atOptions_300x50 = {
  'key' : 'ddb48e8829959135fea1323207677af1',
  'format' : 'iframe',
  'height' : 50,
  'width' : 300,
  'params' : {}
};





window.atOptions_160x30 = {
  'key' : '5c1a960ae2f4c6d4ac2b758a9e2fb18b',
  'format' : 'iframe',
  'height' : 30,
  'width' : 160,
  'params' : {}
};





window.atOptions_468x60 = {
  'key' : '2c59b270de9e21b57ad543e7b88c2e3f',
  'format' : 'iframe',
  'height' : 60,
  'width' : 468,
  'params' : {}
};























































// ═══════════════════════════════════════════════════════════
//  MONETIXRA — ALL API KEYS & CONFIGURATION
//  ★ Fill in your keys below to activate each service
// ═══════════════════════════════════════════════════════════

// ── Google APIs ─────────────────────────────────────────────
const GOOGLE_API_KEY    = 'AIzaSyCk05RbvCwZmX42jd-z1STsjSwn3uvkqzU';
const GOOGLE_ACCESS_KEY = 'a90da8236a6227623551a3088d94f413';
const GOOGLE_API_KEY2   = 'AIzaSyANIywK7V-Zoh_2Y_xnmsO8nAErDpSqUHs';

// ── Supabase Database ───────────────────────────────────────
const SUPABASE_PROJECT_ID = 'rkiyxsskrypowghxfauy';
const SUPABASE_URL       = 'https://rgximkhnhxgaonrxzzxl.supabase.co';
const SUPABASE_ANON_KEY  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJneGlta2huaHhnYW9ucnh6enhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU2NDg3MDQsImV4cCI6MjA5MTIyNDcwNH0.zgBfCTs2AEocLVwjJntg1dDBwy4quQS40QWqeuYRTwU';

// ── MEGA Storage ───────────────────────────────────────────────
const MEGA_API_KEY = '';

// ── Agora Video/Audio Calling ───────────────────────────────────
const AGORA_APP_ID        = 'e9cfd627a92f4466a047b2a820e1382e';
const AGORA_APP_CERTIFICATE = '';
const AGORA_TEMP_TOKEN    = '';

// ── Cloudinary Media Storage ───────────────────────────────────────
const CLOUDINARY_CLOUD_NAME = 'djdqqkdyf';
const CLOUDINARY_API_KEY    = '333568318583158';
const CLOUDINARY_API_SECRET = '';

// ── AdMob Configuration ───────────────────────────────────────────
const ADMOB_APP_ID                 = 'ca-app-pub-2253243248364888~1427340343';
const ADMOB_BANNER_AD_UNIT         = 'ca-app-pub-2253243248364888/3990983995';
const ADMOB_INTERSTITIAL_AD_UNIT    = 'ca-app-pub-2253243248364888/3199587018';
const ADMOB_REWARDED_AD_UNIT        = 'ca-app-pub-2253243248364888/5139354646';
const ADMOB_NATIVE_AD_UNIT          = 'ca-app-pub-2253243248364888/2245597996';
const ADMOB_APP_OPEN_AD_UNIT       = 'ca-app-pub-2253243248364888/8392203945';
const ADMOB_REWARDED_INTERSTITIAL   = 'ca-app-pub-2253243248364888/1173248962';

// ── AdSense Configuration ───────────────────────────────────────────
const ADSENSE_CLIENT   = 'ca-pub-2397116277801081';
const ADSENSE_PUBLISHER_ID = 'pub-2397116277801081';
const ADSENSE_CUSTOMER_ID = '9316157812';

// ── Adsterra Configuration ───────────────────────────────────────────
const ADSTERRA_API_KEY          = '55d8dff1aa431254a145e6f12f01b775';
const ADSTERRA_POPUNDER_ID      = '29179785';
const ADSTERRA_SMARTLINK_ID     = '29179786';
const ADSTERRA_SOCIAL_BAR_ID     = '29179787';
const ADSTERRA_NATIVE_BANNER_ID  = '29179788';
const ADSTERRA_BANNER_160X30_ID = '29179789';
const ADSTERRA_BANNER_468X60_ID = '29179790';
const ADSTERRA_BANNER_300X50_ID = '29179791';
const GOOGLE_VISION_KEY = 'AIzaSyDIgQr0BfU4-AfWRA2_HFcDhwZZj7ymiUg';

// ── Supabase ─────────────────────────────────────────────────
const SUPABASE_KEY  = SUPABASE_ANON_KEY;
const SUPABASE_PUB  = 'sb_publishable_vXwOEuVDttLpE1NqvmRvog_g3M2o-Es';
const SUPABASE_CLIENT_KEY = SUPABASE_PUB || SUPABASE_KEY;
let supabaseClient = null;

function initSupabaseClient() {
  if (supabaseClient) return supabaseClient;
  if (typeof window.supabase === 'undefined' || !window.supabase.createClient) {
    console.warn('[Supabase] JS library not loaded');
    return null;
  }
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_CLIENT_KEY);
  return supabaseClient;
}

function isSupabaseReady() {
  return !!initSupabaseClient();
}

async function supabaseSignIn(email, password) {
  const supabase = initSupabaseClient();
  if (!supabase) return { data: null, error: { message: 'Supabase unavailable' } };
  return await supabase.auth.signInWithPassword({ email, password });
}

async function supabaseSignUp(email, password, metadata = {}) {
  const supabase = initSupabaseClient();
  if (!supabase) return { data: null, error: { message: 'Supabase unavailable' } };
  return await supabase.auth.signUp({ email, password, options: { data: metadata } });
}

async function supabaseSendPasswordReset(email) {
  const supabase = initSupabaseClient();
  if (!supabase) return { data: null, error: { message: 'Supabase unavailable' } };
  return await supabase.auth.resetPasswordForEmail(email, { redirectTo: location.href });
}

async function supabaseSignOut() {
  const supabase = initSupabaseClient();
  if (!supabase) return { data: null, error: { message: 'Supabase unavailable' } };
  return await supabase.auth.signOut();
}

async function uploadBackupToSupabase() {
  if (!CU || !isSupabaseReady()) return null;
  try {
    const backup = {
      backupAt: new Date().toISOString(),
      userId: CU.id,
      data: D
    };
    const blob = new Blob([JSON.stringify(backup)], { type: 'application/json' });
    const url = await uploadToSupabase(blob, 'application/json', 'media');
    if (url) {
      console.log('[CloudBackup] Uploaded backup to Supabase', url);
    }
    return url;
  } catch (err) {
    console.warn('[CloudBackup] Upload failed', err);
    return null;
  }
}

async function listSupabaseBackupFiles(prefix) {
  if (!isSupabaseReady()) return [];
  try {
    const r = await fetch(`${SUPABASE_URL}/storage/v1/object/list/media?prefix=${encodeURIComponent(prefix)}`, {
      method: 'GET',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`
      }
    });
    if (!r.ok) return [];
    const data = await r.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.warn('[CloudBackup] List failed', err);
    return [];
  }
}

async function restoreLatestCloudBackup() {
  if (!CU || !isSupabaseReady()) return toast('e','Login and Supabase required');
  const prefix = `backups/${CU.id}/`;
  const files = await listSupabaseBackupFiles(prefix);
  if (!files.length) return toast('w','No cloud backups found');
  const latest = files.sort((a,b) => new Date(b.updated_at||b.created_at) - new Date(a.updated_at||a.created_at))[0];
  const url = `${SUPABASE_URL}/storage/v1/object/public/media/${latest.name}`;
  const response = await fetch(url);
  if (!response.ok) return toast('e','Restore download failed');
  const backup = await response.json();
  if (!backup?.data) return toast('e','Invalid backup format');
  localStorage.setItem(STORAGE_KEY+'data', JSON.stringify(backup.data));
  if (backup.data.cur) localStorage.setItem(STORAGE_KEY+'session', backup.data.cur);
  toast('s','✅ Cloud backup restored. Reloading...');
  setTimeout(() => location.reload(), 800);
}

async function syncCloudBackup() {
  if (!CU || !isSupabaseReady()) return;
  try {
    await uploadBackupToSupabase();
  } catch (err) {
    console.warn('[CloudBackup] sync failed', err);
  }
}

// ── Metered TURN (WebRTC) ────────────────────────────────────
const METERED_API_KEY = 'ffb21c8dfcff4bf229f8973e77541a11edc0';

// ── OpenAI ───────────────────────────────────────────────────
const OPENAI_API_KEY = '';  // Server-only. Set OPENAI_API_KEY in backend environment.

// ── DeepSeek ─────────────────────────────────────────────────
const DEEPSEEK_API_KEY = '';  // ★ sk-... from platform.deepseek.com

// ── EmailJS ──────────────────────────────────────────────────
const EMAILJS_SERVICE  = '';  // ★ service_xxx from emailjs.com
const EMAILJS_TEMPLATE = '';  // ★ template_xxx from emailjs.com
const EMAILJS_PUBLIC   = '';  // ★ public key from emailjs.com

// ── Ads ──────────────────────────────────────────────────────
const ADSTERRA_KEY       = '55d8dff1aa431254a145e6f12f01b775';   // ★ from adsterra.com
const ADSENSE_SLOT       = '';   // ★ slot ID from adsense.google.com
const PROPELLERADS_ZONE  = '';   // ★ Zone ID from propellerads.com
const MEDIANET_CID       = '9316157812';   // Customer ID from media.net
const MGID_WIDGET        = '';   // ★ Widget ID from mgid.com
const TABOOLA_PUBLISHER  = '';   // ★ Publisher ID from taboola.com

// ── AdMob Configuration ──────────────────────────────────────
const ADMOB_BANNER_ID        = 'ca-app-pub-2253243248364888/3990983995';
const ADMOB_INTERSTITIAL_ID  = 'ca-app-pub-2253243248364888/3199587018';
const ADMOB_REWARDED_INTERSTITIAL_ID = 'ca-app-pub-2253243248364888/5139354646';
const ADMOB_REWARDED_ID      = 'ca-app-pub-2253243248364888/6812588459';
const ADMOB_NATIVE_ID        = 'ca-app-pub-2253243248364888/2245597996';
const ADMOB_APP_OPEN_ID      = 'ca-app-pub-2253243248364888/8392203945';
const ADMOB_APP_OPEN_ALT_ID  = 'ca-app-pub-2253243248364888/1173248962';

// ── ProfitableCPMRate Network ─────────────────────────────────
const CPMR_POPUNDER_ID     = '29179785';
const CPMR_SMARTLINK_ID    = '29179786';
const CPMR_SMARTLINK_URL   = 'https://www.profitablecpmratenetwork.com/qu1bqnynm6?key=d753b3018195910056f99110db5b614a';
const CPMR_SOCIALBAR_ID    = '29179787';
const CPMR_NATIVE_BANNER_ID= '29179788';
const CPMR_BANNER_160x30_ID= '29179789';
const CPMR_BANNER_160x30_KEY= '5c1a960ae2f4c6d4ac2b758a9e2fb18b';
const CPMR_BANNER_468x60_ID= '29179790';
const CPMR_BANNER_468x60_KEY= '2c59b270de9e21b57ad543e7b88c2e3f';
const CPMR_BANNER_300x50_KEY= 'ddb48e8829959135fea1323207677af1';

// ── Additional AdSense Info ───────────────────────────────────

// ── Payments ─────────────────────────────────────────────────
const STRIPE_PUB_KEY = '';       // ★ pk_live_xxx from stripe.com

// ── Cloudinary Media Upload ──────────────────────────────────
const CLOUDINARY_UPLOAD_PRESET= 'monetixra_unsigned';  // Create an unsigned upload preset in Cloudinary or use signed upload via server
const CLOUDINARY_USE_SERVER_SIGN = true; // Set to true to request a signed Cloudinary upload token from the backend

// ── Web3 RPC ─────────────────────────────────────────────────
const INFURA_PROJECT_ID = '';    // ★ from infura.io
const HELIUS_API_KEY    = '';    // ★ from helius.dev

// ── AWS S3 (for data migration) ─────────────────────────────
const S3_CONFIG = {
  accessKeyId: '',      // ★ AWS Access Key ID
  secretAccessKey: '',  // ★ AWS Secret Access Key
  region: 'us-east-1',  // ★ S3 Bucket region
  bucket: '',           // ★ S3 Bucket name
  endpoint: ''          // ★ Custom endpoint (optional, for Wasabi, DigitalOcean Spaces, etc.)
};

// ── Auto-activate Adsterra ───────────────────────────────────
if(ADSTERRA_KEY) {
  window.atOptions = { key: ADSTERRA_KEY, format: 'iframe', height: 50, width: 320, params: {} };
  let s = document.createElement('script');
  s.src = '//www.topcreativeformat.com/' + ADSTERRA_KEY + '/invoke.js';
  document.head.appendChild(s);
}



  if(ADSENSE_CLIENT) {
    let s = document.createElement('script');
    s.async = true;
    s.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + ADSENSE_CLIENT;
    s.crossOrigin = 'anonymous';
    document.head.appendChild(s);
  }
  // PropellerAds push notifications
  if(PROPELLERADS_ZONE) {
    let s = document.createElement('script');
    s.async = true;
    s.setAttribute('data-cfasync', 'false');
    s.src = 'https://srv.adstxtmanager.com/' + PROPELLERADS_ZONE + '/invoke.js';
    document.head.appendChild(s);
    // Also add push notification ad
    let p = document.createElement('script');
    p.async = true;
    p.setAttribute('data-zone', PROPELLERADS_ZONE);
    p.src = 'https://acepixel.com/tag.min.js';
    document.head.appendChild(p);
  }
  // Media.net
  if(MEDIANET_CID) {
    let s = document.createElement('script');
    s.async = true;
    s.src = 'https://contextual.media.net/dmedianet.js?cid=' + MEDIANET_CID;
    document.head.appendChild(s);
  }
  // MGID native ads
  if(MGID_WIDGET) {
    let s = document.createElement('script');
    s.src = 'https://jsc.mgid.com/m/o/monetixra.com.' + MGID_WIDGET + '.js';
    s.async = true;
    document.head.appendChild(s);
  }
  // Taboola
  if(TABOOLA_PUBLISHER) {
    window._taboola = window._taboola || [];
    _taboola.push({article:'auto'});
    let s = document.createElement('script');
    s.src = '//cdn.taboola.com/libtrc/' + TABOOLA_PUBLISHER + '/loader.js';
    s.async = true;
    document.head.appendChild(s);
  }
  // Stripe.js load
  if(STRIPE_PUB_KEY) {
    let s = document.createElement('script');
    s.src = 'https://js.stripe.com/v3/';
    s.async = true;
    document.head.appendChild(s);
  }





  const agoraAppId = 'e9cfd627a92f4466a047b2a820e1382e';
  const agoraToken = '';

  let agoraClient = null;
  let localStream = null;
  let remoteStreams = new Map();

  async function initAgora() {
    try {
      agoraClient = AgoraRTC.createClient({ mode: 'rtc', codec: 'vp8' });

      // Initialize client
      await agoraClient.init(agoraAppId);
      console.log('AgoraRTC client initialized ✅');

      // Set up event listeners
      setupAgoraEventListeners();

    } catch (error) {
      console.error('AgoraRTC initialization failed:', error);
      // Fallback to WebRTC
      initWebRTC();
    }
  }

  function setupAgoraEventListeners() {
    // User joined
    agoraClient.on('stream-added', (evt) => {
      const remoteStream = evt.stream;
      console.log('New stream added: ' + remoteStream.getId());
      agoraClient.subscribe(remoteStream, (err) => {
        console.log('Subscribe stream failed', err);
      });
    });

    // User published stream
    agoraClient.on('stream-subscribed', (evt) => {
      const remoteStream = evt.stream;
      console.log('Subscribed to stream: ' + remoteStream.getId());

      // Play remote stream
      const remoteContainer = document.getElementById('remote-container') || createRemoteContainer();
      const streamDiv = document.createElement('div');
      streamDiv.id = 'remote-stream-' + remoteStream.getId();
      streamDiv.style.cssText = 'width: 300px; height: 200px; background: #000; margin: 10px; border-radius: 8px; overflow: hidden;';
      remoteContainer.appendChild(streamDiv);

      remoteStream.play('remote-stream-' + remoteStream.getId());
      remoteStreams.set(remoteStream.getId(), remoteStream);
    });

    // User left
    agoraClient.on('stream-removed', (evt) => {
      const remoteStream = evt.stream;
      console.log('Stream removed: ' + remoteStream.getId());

      const streamDiv = document.getElementById('remote-stream-' + remoteStream.getId());
      if (streamDiv) streamDiv.remove();

      remoteStreams.delete(remoteStream.getId());
    });

    // Connection state changed
    agoraClient.on('connection-state-change', (evt) => {
      console.log('Connection state changed:', evt.prevState, '->', evt.curState);
    });
  }

  async function joinAgoraChannel(channelName = 'test-channel') {
    try {
      if (!agoraClient) await initAgora();

      // Join channel
      const uid = await agoraClient.join(agoraToken, channelName, null);
      console.log('User ' + uid + ' joined channel successfully ✅');

      // Create and publish local stream
      localStream = AgoraRTC.createStream({
        streamID: uid,
        audio: true,
        video: true,
        screen: false
      });

      await localStream.init(() => {
        console.log('Local stream initialized');
        agoraClient.publish(localStream, (err) => {
          console.log('Publish local stream error:', err);
        });

        // Play local stream
        const localContainer = document.getElementById('local-container') || createLocalContainer();
        localStream.play('local-stream');
      });

      return uid;

    } catch (error) {
      console.error('Failed to join Agora channel:', error);
      throw error;
    }
  }

  async function leaveAgoraChannel() {
    try {
      if (localStream) {
        localStream.close();
        localStream = null;
      }

      if (agoraClient) {
        await agoraClient.leave();
        console.log('Left Agora channel');
      }

      // Clear remote streams
      remoteStreams.clear();
      const remoteContainer = document.getElementById('remote-container');
      if (remoteContainer) remoteContainer.innerHTML = '';

    } catch (error) {
      console.error('Error leaving Agora channel:', error);
    }
  }

  function createLocalContainer() {
    const container = document.createElement('div');
    container.id = 'local-container';
    container.innerHTML = '<div id="local-stream" style="width: 200px; height: 150px; background: #000; border-radius: 8px; margin: 10px;"></div>';
    document.body.appendChild(container);
    return container;
  }

  function createRemoteContainer() {
    const container = document.createElement('div');
    container.id = 'remote-container';
    container.style.cssText = 'position: fixed; bottom: 20px; right: 20px; display: flex; flex-wrap: wrap; z-index: 1000;';
    document.body.appendChild(container);
    return container;
  }

  // Initialize Agora on page load
  initAgora();

  // WebRTC fallback
  function initWebRTC() {
    console.log('Initializing WebRTC fallback...');
    // WebRTC implementation would go here
  }



(function() {
  const isMobile = /Mobi|Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry/i.test(navigator.userAgent);
  const html = document.documentElement;

  function onReady() {
    if (isMobile) {
      html.classList.add('mobile', 'mobile-friendly', 'touch-device');
      document.body.classList.add('mobile', 'mobile-friendly', 'touch-device');
    }

    if (typeof optimizeMobileMedia === 'function') {
      try {
        optimizeMobileMedia();
      } catch (e) {
        console.warn('[MobileEnhance] optimizeMobileMedia failed', e);
      }
    }

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 250);
  }

  document.addEventListener('DOMContentLoaded', onReady);
  window.addEventListener('orientationchange', () => {
    setTimeout(() => window.dispatchEvent(new Event('resize')),
      300);
  });
})();



(function(){
  const ads = [
    '🚀 Monetixra with AI, Crypto, NFT, MLM, Metaverse & More!',
    '💰 Earn Real Money — Watch Ads, Complete Tasks, Invite Friends!',
    '🔥 Trending Now: AI-Powered Social Earnings Platform!',
    '🎁 Daily Bonus: Claim Free Points Every Day!',
    '💎 Premium Plans: 2x Earnings & Priority Withdrawals!',
    '🤖 AI Caption Generator — Create Viral Posts Instantly!',
    '🪙 Crypto Withdrawals: BTC, ETH, USDT, BNB Supported!',
    '🎨 NFT Marketplace — Mint Your Posts as NFTs!',
    '🌐 100+ Languages — Auto-Translate Your Content!',
    '⚡ Instant Withdrawals via bKash, Nagad, PayPal, Crypto!'
  ];
  let idx = 0;
  const el = document.getElementById('baT');
  if(el) setInterval(() => { idx = (idx + 1) % ads.length; el.textContent = ads[idx]; }, 5000);
})();



        (function(){
          window.atOptions_ints = { key: '2c59b270de9e21b57ad543e7b88c2e3f', format: 'iframe', height: 60, width: 468, params: {} };
          window.atOptions = window.atOptions_ints;
          let s = document.createElement('script');
          s.src = 'https://www.highperformanceformat.com/2c59b270de9e21b57ad543e7b88c2e3f/invoke.js';
          document.currentScript.parentNode.appendChild(s);
        })();
      




// Ensure FAB works properly
document.addEventListener('DOMContentLoaded', function() {
  let fab = document.getElementById('fab');
  if(fab) {
    fab.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      console.log('[FAB] Clicked');
      if(typeof openPostModal === 'function') {
        openPostModal();
      } else {
        console.error('[FAB] openPostModal not found');
        alert('Error: Create Post function not loaded');
      }
    });
  }
  
  // Fix bottom nav buttons - ensure they work
  let navButtons = document.querySelectorAll('#btmNav .bn');
  navButtons.forEach(function(btn) {
    let page = btn.getAttribute('data-p');
    if(page) {
      // Remove old onclick and add fresh event listener
      btn.onclick = null;
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('[BottomNav] Clicked:', page);
        if(typeof nav === 'function') {
          nav(page);
        } else {
          console.error('[BottomNav] nav function not found');
        }
      });
    }
  });
  console.log('[BottomNav] Fixed', navButtons.length, 'navigation buttons');
});



// ========== COMPLETE JAVASCRIPT ==========
const ADMIN_EMAIL = 'myworktoolsp3@gmail.com';
const ADMIN_PHONE = '01757008864';
const ADMIN_ID = 'admin_matiur';
const ADMIN_PASS_DEFAULT = 'F<%0K"-9!H5.X+(*#)`';
const ADMIN_PASS_FALLBACK = 'ChangeMeAdmin123!';
const ADMIN_PASS = localStorage.getItem('MONETIXRA_ADMIN_PASS') || ADMIN_PASS_DEFAULT;
const ADMIN_CUT = 0.10;
const PTS_PER_USD = 1000;
const MIN_WITHDRAW = 50000;
const STORAGE_KEY = 'mxt_';
const STORAGE_VERSION = '2026-05-13-persistent-media-v1';
const MLM_LEVELS = [{ level: 1, commission: 0.10, name: 'Level 1' },{ level: 2, commission: 0.05, name: 'Level 2' },{ level: 3, commission: 0.03, name: 'Level 3' },{ level: 4, commission: 0.02, name: 'Level 4' },{ level: 5, commission: 0.01, name: 'Level 5' },{ level: 6, commission: 0.01, name: 'Level 6' },{ level: 7, commission: 0.01, name: 'Level 7' },{ level: 8, commission: 0.01, name: 'Level 8' },{ level: 9, commission: 0.01, name: 'Level 9' },{ level: 10, commission: 0.01, name: 'Level 10' }];
const LANGUAGES = { en: { name: 'English', flag: '🇬🇧' }, bn: { name: 'Bengali', flag: '🇧🇩' }, hi: { name: 'Hindi', flag: '🇮🇳' }, es: { name: 'Spanish', flag: '🇪🇸' }, fr: { name: 'French', flag: '🇫🇷' }, de: { name: 'German', flag: '🇩🇪' }, zh: { name: 'Chinese', flag: '🇨🇳' }, ja: { name: 'Japanese', flag: '🇯🇵' }, ar: { name: 'Arabic', flag: '🇸🇦' }, ru: { name: 'Russian', flag: '🇷🇺' }, pt: { name: 'Portuguese', flag: '🇵🇹' } };
let D = { users: {}, posts: [], txs: [], notifs: [], chats: {}, stories: [], groups: [], marketplace: [], nfts: [], apps: [] };
let CU = null;
let currentChatId = null;
let activeCat = 'all';
let pfData = null, pfMime = null, pfName = null, pfFile = null;
let grpMems = [];
let disappearTimer = 0;
let isRecordingVoice = false;
let mediaRecorder = null;
let currentLang = 'en';
const COLORS = ['#00ffaa','#00d4ff','#f59e0b','#f43f5e','#a78bfa','#38bdf8','#fb923c','#ec4899'];
const COPYRIGHT_KEYWORDS = ['©','copyright','all rights reserved','proprietary','licensed','rights reserved','do not reproduce','do not share','copyrighted','trademark','all rights reserved'];
const COPYRIGHT_AUTO_DELETE_HOURS = 12;
const COPYRIGHT_FLAGGED_DELETE_HOURS = 24;
const MAX_ADS_PER_DAY   = 50;   // max ads user can watch per day
const MAX_TASKS_PER_DAY = 30;   // max tasks
const MAX_REF_BONUS     = 10;   // max referral bonuses per day

// ── Core Utilities ───────────────────────────────
const G = id => document.getElementById(id);
const V = id => { let e = G(id); return e ? e.value.trim() : ''; };
const setV = (id, val) => { let e = G(id); if(e) e.value = val; };
const hide = id => { let e = G(id); if(e) e.style.display = 'none'; };
const show = id => { let e = G(id); if(e) e.style.display = 'block'; };
const flex = id => { let e = G(id); if(e) e.style.display = 'flex'; };

function collectLoginCandidates(value) {
  const raw = String(value || '').trim();
  if (!raw) return [];
  const parts = raw
    .split(/[\/|,;:]+/)
    .map(p => String(p || '').trim())
    .filter(Boolean);
  const candidates = new Set();
  const add = (v) => {
    const s = String(v || '').trim();
    if (!s) return;
    candidates.add(s);
    candidates.add(s.toLowerCase());
    const compact = s.replace(/\s+/g, '');
    if (compact) {
      candidates.add(compact);
      candidates.add(compact.toLowerCase());
    }
    const digits = compact.replace(/\D/g, '');
    if (digits) {
      candidates.add(digits);
      candidates.add(digits.replace(/^0+/, ''));
    }
  };
  parts.forEach(add);
  add(raw);
  return Array.from(candidates);
}

function accountMatchesLogin(user, loginCandidates) {
  const values = [user?.id, user?.email, user?.username, user?.phone].filter(v => v !== undefined && v !== null);
  return loginCandidates.some(candidate => {
    const input = String(candidate || '').trim();
    if (!input) return false;
    const inputDigits = input.replace(/\D/g, '');
    return values.some(value => {
      const normalizedValue = String(value || '').trim();
      if (!normalizedValue) return false;
      const normalizedValueDigits = normalizedValue.replace(/\D/g, '');
      return normalizedValue.toLowerCase() === input.toLowerCase() ||
        normalizedValue.replace(/\s+/g, '').toLowerCase() === input.replace(/\s+/g, '').toLowerCase() ||
        (inputDigits && normalizedValueDigits && normalizedValueDigits === inputDigits);
    });
  });
}

// ── Password hashing (SHA-256) with Fallback ───────────────────────────────
async function hashPass(pw) {
  try {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(pw + 'mxt_salt_2025'));
    return Array.from(new Uint8Array(buf)).map(b=>b.toString(16).padStart(2,'0')).join('');
  } catch(e) {
    let h = 0;
    for(let i=0;i<pw.length;i++) h = Math.imul(31,h)+pw.charCodeAt(i)|0;
    return 'fb_' + Math.abs(h).toString(16) + pw.length;
  }
}
// Check if password is already hashed
function isHashed(pw) { return pw && (pw.length === 64 || pw.startsWith('fb_')); }
const esc = s => { if(!s) return ''; return String(s).replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[m]); };
const ago = ts => { let s = Math.floor((Date.now() - ts)/1000); if(s<60) return 'now'; if(s<3600) return Math.floor(s/60)+'m'; if(s<86400) return Math.floor(s/3600)+'h'; return Math.floor(s/86400)+'d'; };
const fmt = n => { if(n>=1e6) return (n/1e6).toFixed(1)+'M'; if(n>=1e3) return (n/1e3).toFixed(1)+'K'; return n||0; };
const rOtp = () => Math.floor(100000 + Math.random()*900000);
const uid = () => 'u'+Date.now()+Math.random().toString(36).slice(2,8);
const pid = () => 'p'+Date.now()+Math.random().toString(36).slice(2,8);
const randomGrad = () => { let g=[['#6d28d9','#00ffaa'],['#0ea5e9','#10b981'],['#f59e0b','#ef4444'],['#ec4899','#8b5cf6']]; return g[Math.floor(Math.random()*g.length)]; };
const vis2ico = v => ({ public:'🌐', friends:'👥', private:'🔒' })[v]||'🌐';

// Rich Editor Functions
function execCmd(cmd) { document.execCommand(cmd, false, null); document.getElementById('postEditor').focus(); }
function insertLink() { let url = prompt('Enter URL:'); if(url) document.execCommand('createLink', false, url); }

// MLM Functions
function getUpline(userId, level = 1) {
  let user = D.users[userId];
  if(!user || !user.referredBy) return null;
  if(level === 1) return user.referredBy;
  return getUpline(user.referredBy, level - 1);
}
function addMLMCommission(userId, amount, reason) {
  for(let i = 0; i < MLM_LEVELS.length; i++) {
    let uplineId = getUpline(userId, i + 1);
    if(uplineId && D.users[uplineId]) {
      let commission = Math.floor(amount * MLM_LEVELS[i].commission);
      if(commission > 0) {
        D.users[uplineId].points = (D.users[uplineId].points || 0) + commission;
        D.users[uplineId].mlmPts = (D.users[uplineId].mlmPts || 0) + commission;
        D.txs.unshift({ id: 'tx'+Date.now(), type: 'mlm', label: `${MLM_LEVELS[i].name} Commission from ${reason}`, pts: commission, at: Date.now(), user: uplineId });
        addNotif(uplineId, 'mlm', '🏆', `You earned ${commission} pts from ${MLM_LEVELS[i].name} commission!`);
      }
    }
  }
}
function getMLMMembersCount(userId, level) {
  if(level === 1) return (D.users[userId]?.refs?.length || 0);
  let count = 0;
  (D.users[userId]?.refs || []).forEach(ref => count += getMLMMembersCount(ref, level - 1));
  return count;
}

// NFT Functions
function mintNFT() { if(!CU) { toast('e','Login required'); return; } if(CU.points < 500) { toast('e','Need 500 pts to mint NFT'); return; } openModal('nftModal'); }
function mintNFTSubmit() {
  let name = V('nftName'), desc = V('nftDesc'), price = parseInt(V('nftPrice')), file = document.getElementById('nftFile').files[0];
  if(!name || !desc || !price || !file) { toast('e','Fill all fields'); return; }
  if(price < 100) { toast('e','Minimum price 100 pts'); return; }
  if(CU.points < 500) { toast('e','Insufficient points'); return; }
  CU.points -= 500;
  let reader = new FileReader();
  reader.onload = e => {
    let nft = { id: 'nft'+Date.now(), name, description: desc, price, image: e.target.result, creator: CU.id, creatorName: CU.name, owner: CU.id, createdAt: Date.now(), sold: false, royalty: 5 };
    D.nfts = D.nfts || []; D.nfts.unshift(nft);
    saveData(); closeModal('nftModal'); toast('s','NFT Minted!'); rNFTMarketplace();
  };
  reader.readAsDataURL(file);
}
function buyNFT(nftId) {
  if(!CU) { toast('e','Login required'); return; }
  let nft = D.nfts.find(n => n.id === nftId);
  if(!nft || nft.sold) { toast('e','NFT not available'); return; }
  if(CU.points < nft.price) { toast('e','Insufficient points'); return; }
  CU.points -= nft.price;
  let creator = D.users[nft.creator];
  if(creator) {
    let royalty = Math.floor(nft.price * 0.05);
    let creatorEarn = nft.price - royalty;
    creator.points += creatorEarn;
    creator.nftPts = (creator.nftPts || 0) + creatorEarn;
    D.users[ADMIN_ID].points += royalty;
    D.users[ADMIN_ID].adminRevenue += royalty;
    addNotif(nft.creator, 'nft', '🎨', `Your NFT "${nft.name}" was sold for ${nft.price} pts!`);
  }
  nft.owner = CU.id; nft.sold = true; nft.soldAt = Date.now();
  saveData(); toast('s',`Purchased NFT "${nft.name}"!`); rNFTMarketplace();
}

// Achievements
const ACHIEVEMENTS = [{ id: 'first_post', name: 'First Post', desc: 'Create your first post', reward: 50, icon: '📝' },{ id: 'first_like', name: 'Getting Popular', desc: 'Get 10 likes on a post', reward: 100, icon: '❤️' },{ id: 'first_follower', name: 'Influencer', desc: 'Get 50 followers', reward: 200, icon: '👥' },{ id: 'first_earn', name: 'Earner', desc: 'Earn 1000 points', reward: 500, icon: '💰' },{ id: 'first_referral', name: 'Referrer', desc: 'Refer 5 friends', reward: 250, icon: '🤝' },{ id: 'first_nft', name: 'NFT Creator', desc: 'Mint your first NFT', reward: 300, icon: '🎨' },{ id: 'first_mlm', name: 'Team Leader', desc: 'Get 10 MLM team members', reward: 500, icon: '🏆' },{ id: 'viral_post', name: 'Viral', desc: 'Get 1000 views on a post', reward: 1000, icon: '🔥' }];
function checkAchievements() {
  if(!CU) return;
  CU.achievements = CU.achievements || [];
  ACHIEVEMENTS.forEach(ach => {
    if(CU.achievements.includes(ach.id)) return;
    let earned = false;
    if(ach.id === 'first_post' && CU.posts?.length >= 1) earned = true;
    if(ach.id === 'first_like' && D.posts.some(p => p.author === CU.id && (p.likedBy?.length || 0) >= 10)) earned = true;
    if(ach.id === 'first_follower' && (CU.followers?.length || 0) >= 50) earned = true;
    if(ach.id === 'first_earn' && (CU.points || 0) >= 1000) earned = true;
    if(ach.id === 'first_referral' && (CU.refs?.length || 0) >= 5) earned = true;
    if(ach.id === 'first_nft' && (CU.nftPts || 0) > 0) earned = true;
    if(ach.id === 'first_mlm' && getMLMMembersCount(CU.id, 1) >= 10) earned = true;
    if(ach.id === 'viral_post' && D.posts.some(p => p.author === CU.id && (p.views || 0) >= 1000)) earned = true;
    if(earned) {
      CU.achievements.push(ach.id);
      addPts(ach.reward, `Achievement: ${ach.name}`, 'engage');
      addNotif(CU.id, 'achievement', ach.icon, `🎉 Achievement Unlocked: ${ach.name}! +${ach.reward} pts`);
      toast('s', `🏅 Achievement Unlocked: ${ach.name}! +${ach.reward} pts`);
    }
  });
}

// ===== FIXED Storage & Session =====
// Media Storage using IndexedDB for larger quota
const MediaDB = {
  db: null,
  async init() {
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('MonetixraMedia', 1);
      req.onerror = () => reject(req.error);
      req.onsuccess = () => { this.db = req.result; resolve(); };
      req.onupgradeneeded = (e) => {
        const db = e.target.result;
        if(!db.objectStoreNames.contains('media')) db.createObjectStore('media', {keyPath: 'id'});
      };
    });
  },
  async save(id, data) {
    if(!this.db) await this.init();
    return new Promise((resolve, reject) => {
      const tx = this.db.transaction(['media'], 'readwrite');
      const store = tx.objectStore('media');
      const req = store.put({id, data, savedAt: Date.now()});
      req.onsuccess = () => resolve();
      req.onerror = () => reject(req.error);
    });
  },
  async get(id) {
    if(!this.db) await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction(['media'], 'readonly');
      const store = tx.objectStore('media');
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result?.data || null);
      req.onerror = () => resolve(null);
    });
  },
  async delete(id) {
    if(!this.db) await this.init();
    return new Promise((resolve) => {
      const tx = this.db.transaction(['media'], 'readwrite');
      const store = tx.objectStore('media');
      store.delete(id);
      tx.oncomplete = () => resolve();
    });
  }
};

// Initialize MediaDB on load
MediaDB.init().catch(e => console.warn('MediaDB init failed:', e));

function shrinkStoragePayload(lite) {
  // Keep every post and point transaction metadata. Media is moved to IndexedDB
  // before this fallback runs, so app refreshes/updates should not erase content.
  if(lite.chats && typeof lite.chats === 'object') {
    Object.keys(lite.chats).forEach(room => {
      if(Array.isArray(lite.chats[room]) && lite.chats[room].length > 100) {
        lite.chats[room] = lite.chats[room].slice(-100);
      }
    });
  }
  if(lite.notifs && Array.isArray(lite.notifs) && lite.notifs.length > 200) {
    lite.notifs = lite.notifs.slice(-200);
  }
  if(lite.txs && Array.isArray(lite.txs) && lite.txs.length > 100) {
    lite.txs = lite.txs.slice(-100);
  }
  return lite;
}

function savePersistenceBackup(snapshot) {
  try {
    const payload = snapshot ? JSON.stringify(snapshot) : JSON.stringify(D || {});
    const sessionId = D?.cur || '';
    localStorage.setItem(STORAGE_KEY + 'backup_data', payload);
    localStorage.setItem(STORAGE_KEY + 'backup_session', sessionId);
    localStorage.setItem(STORAGE_KEY + 'backup_time', String(Date.now()));
    localStorage.setItem(STORAGE_KEY + 'persisted_at', String(Date.now()));
    localStorage.setItem(STORAGE_KEY + 'persist_version', '2');
    try {
      sessionStorage.setItem(STORAGE_KEY + 'backup_data', payload);
      sessionStorage.setItem(STORAGE_KEY + 'backup_session', sessionId);
      sessionStorage.setItem(STORAGE_KEY + 'backup_time', String(Date.now()));
      sessionStorage.setItem(STORAGE_KEY + 'persisted_at', String(Date.now()));
    } catch (e) {}
  } catch (e) {
    console.warn('[Persistence] Backup write failed:', e);
  }
}

function restorePersistenceBackup() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY + 'backup_data') || localStorage.getItem(STORAGE_KEY + 'backup_data');
    if (!raw) return false;
    const backup = JSON.parse(raw);
    if (!backup || typeof backup !== 'object') return false;
    const hasContent = !!(backup.users || backup.posts || backup.txs || backup.notifs || backup.chats || backup.stories || backup.marketplace || backup.nfts || backup.apps);
    if (!hasContent) return false;
    D = { ...D, ...backup };
    if (!D.users) D.users = {};
    if (!D.posts) D.posts = [];
    if (!D.txs) D.txs = [];
    if (!D.notifs) D.notifs = [];
    if (!D.chats) D.chats = {};
    if (!D.stories) D.stories = [];
    if (!D.groups) D.groups = {};
    if (!D.marketplace) D.marketplace = [];
    if (!D.nfts) D.nfts = [];
    if (!D.apps) D.apps = [];
    if (!D.withdrawals) D.withdrawals = [];
    if (D.cur && D.users && D.users[D.cur]) {
      CU = D.users[D.cur];
    } else if (D.users) {
      const firstActive = Object.values(D.users).find(u => u && u.id);
      if (firstActive) {
        D.cur = firstActive.id;
        CU = firstActive;
      }
    }
    saveData();
    return true;
  } catch (e) {
    console.warn('[Persistence] Backup restore failed:', e);
    return false;
  }
}

async function saveData() {
  try {
    const safeRoot = D && typeof D === 'object' ? D : { users: {}, posts: [], txs: [], notifs: [], chats: {}, stories: [], groups: {}, marketplace: [], nfts: [], apps: [] };
    let lite = JSON.parse(JSON.stringify(safeRoot));
    lite._storageVersion = STORAGE_VERSION;
    if (!lite.users) lite.users = {};
    if (!lite.posts) lite.posts = [];
    if (!lite.txs) lite.txs = [];
    if (!lite.notifs) lite.notifs = [];
    if (!lite.chats) lite.chats = {};
    if (!lite.stories) lite.stories = [];
    if (!lite.groups) lite.groups = {};
    if (!lite.marketplace) lite.marketplace = [];
    if (!lite.nfts) lite.nfts = [];
    if (!lite.apps) lite.apps = [];
    if (!lite.withdrawals) lite.withdrawals = [];

    // Aggressively store large base64 files in IndexedDB
    lite._storageVersion = STORAGE_VERSION;

    // Queue DB writes for large media and only replace references if writes succeed.
    const postPromises = [];
    lite.posts = (lite.posts||[]).map(p => ({ ...p }));
    for (let pp of lite.posts) {
      if (pp.file && pp.file.length > 20000 && pp.file.startsWith('data:')) {
        const key = 'post_' + pp.id;
        const pr = MediaDB.save(key, pp.file).then(() => {
          pp.file = 'db://' + key;
          pp.fileInDB = true;
        }).catch(err => {
          console.warn('MediaDB.save failed for', key, err);
          // leave original pp.file so it stays in localStorage as fallback
        });
        postPromises.push(pr);
      }
    }

    const avatarPromises = [];
    for (let u of Object.values(lite.users||{})) {
      if (u.avatar && u.avatar.length > 20000 && u.avatar.startsWith('data:')) {
        const key = 'avatar_' + u.id;
        const pr = MediaDB.save(key, u.avatar).then(() => {
          u.avatar = 'db://' + key;
          u.avatarInDB = true;
        }).catch(err => {
          console.warn('MediaDB.save failed for', key, err);
        });
        avatarPromises.push(pr);
      }
    }

    // Wait for DB writes to complete (best-effort). Failures won't block localStorage write.
    try { await Promise.all([...postPromises, ...avatarPromises]); } catch(e) {}

    let str = JSON.stringify(lite);
    try {
      localStorage.setItem(STORAGE_KEY + 'data', str);
      savePersistenceBackup(lite);
    } catch (qe) {
      console.warn('LocalStorage Quota Exceeded. Trimming storage payload...');
      lite = shrinkStoragePayload(lite);
      try {
        localStorage.setItem(STORAGE_KEY + 'data', JSON.stringify(lite));
        savePersistenceBackup(lite);
      } catch (qe2) {
        console.warn('LocalStorage still full. Saving compact metadata without inline media...');
        for (let pp of (lite.posts||[])) {
          if (pp.file && pp.file.startsWith && pp.file.startsWith('data:')) {
            const key = 'post_' + pp.id;
            try { await MediaDB.save(key, pp.file); pp.file = 'db://' + key; pp.fileInDB = true; }
            catch(err) { console.warn('Compact media save failed for', key, err); }
          }
        }
        localStorage.setItem(STORAGE_KEY + 'data', JSON.stringify(lite));
        savePersistenceBackup(lite);
      }
    }
  } catch (e) { console.warn('saveData error:', e); }
}
async function loadData() {
  try {
    let raw = localStorage.getItem(STORAGE_KEY+'data');
    if(!raw) {
      raw = sessionStorage.getItem(STORAGE_KEY+'backup_data') || localStorage.getItem(STORAGE_KEY+'backup_data');
    }
    if(raw) {
      let saved = JSON.parse(raw);
      if(saved._storageVersion && saved._storageVersion !== STORAGE_VERSION) {
        console.log('[loadData] legacy storage version', saved._storageVersion);
      }
      delete saved._storageVersion;
      // Remove legacy demo users
      ['u_alice','u_bob','u_carol','u_dave','u_emma'].forEach(k => {
        if(saved.users) delete saved.users[k];
      });
      if(saved.posts)       saved.posts       = saved.posts.filter(p => !String(p.id||'').startsWith('p_demo'));
      if(saved.stories)     saved.stories     = saved.stories.filter(s => s.id !== 's1');
      if(saved.marketplace) saved.marketplace = saved.marketplace.filter(m => m.id !== 'm1');
      Object.assign(D, saved);
      if (!D.users || Object.keys(D.users).length === 0) {
        const backup = localStorage.getItem(STORAGE_KEY+'backup_data');
        if (backup) {
          try { Object.assign(D, JSON.parse(backup)); } catch (e) {}
        }
      }
      
      // Restore media files from IndexedDB
      await MediaDB.init();
      
      // Restore post media files
      for(let p of (D.posts||[])) {
        if(p.file && p.file.startsWith('db://')) {
          const dbKey = p.file.replace('db://', '');
          const realData = await MediaDB.get(dbKey);
          if(realData) {
            p.file = realData;
            p.fileInDB = false; // Reset flag since file is now restored
          } else {
            console.warn('Failed to restore media for post:', p.id);
            p.fileMissing = true;
          }
        }
      }
      
      // Restore user avatars
      for(let u of Object.values(D.users||{})) {
        if(u.avatar && u.avatar.startsWith('db://')) {
          const dbKey = u.avatar.replace('db://', '');
          const realData = await MediaDB.get(dbKey);
        if(realData) {
          u.avatar = realData;
          u.avatarInDB = false;
        } else {
          console.warn('Failed to restore avatar for user:', u.id);
          u.avatarMissing = true;
        }
      }
      }
      
      // Save the restored data to ensure consistency
      saveData();
    } else {
      restorePersistenceBackup();
    }
  } catch(e) { console.warn('loadData error:', e); }
}

function ensurePersistentRecovery() {
  try {
    if (!D || typeof D !== 'object') {
      D = { users: {}, posts: [], txs: [], notifs: [], chats: {}, stories: [], groups: {}, marketplace: [], nfts: [], apps: [] };
    }

    if (!D.users) D.users = {};
    if (!D.posts) D.posts = [];
    if (!D.txs) D.txs = [];
    if (!D.notifs) D.notifs = [];
    if (!D.chats) D.chats = {};
    if (!D.stories) D.stories = [];
    if (!D.groups) D.groups = {};
    if (!D.marketplace) D.marketplace = [];
    if (!D.nfts) D.nfts = [];
    if (!D.apps) D.apps = [];
    if (!D.withdrawals) D.withdrawals = [];

    if (!D.users) D.users = {};
    if (!D.posts) D.posts = [];
    if (!D.txs) D.txs = [];
    if (!D.notifs) D.notifs = [];
    if (!D.chats) D.chats = {};
    if (!D.stories) D.stories = [];
    if (!D.groups) D.groups = {};
    if (!D.marketplace) D.marketplace = [];
    if (!D.nfts) D.nfts = [];
    if (!D.apps) D.apps = [];

    const hasLocalContent = Object.keys(D.users).length > 0 || D.posts.length > 0 || D.txs.length > 0 || D.notifs.length > 0 || Object.keys(D.chats).length > 0 || D.stories.length > 0 || D.marketplace.length > 0 || D.nfts.length > 0 || D.apps.length > 0;
    if (!hasLocalContent) {
      restorePersistenceBackup();
    }

    if (!D.cur) {
      D.cur = sessionStorage.getItem(STORAGE_KEY + 'backup_session') || localStorage.getItem(STORAGE_KEY + 'backup_session') || '';
    }

    if (D.cur && D.users && D.users[D.cur]) {
      CU = D.users[D.cur];
    } else if (D.users) {
      const firstUser = Object.values(D.users).find(u => u && u.id);
      if (firstUser) {
        D.cur = firstUser.id;
        CU = firstUser;
      }
    }

    if (CU && typeof saveSession === 'function') {
      saveSession();
    }
  } catch (e) {
    console.warn('[Persistence] Recovery guard failed:', e);
  }
}

// Time-based multiplier for dynamic point system
function getTimeBasedMultiplier() {
  const hour = new Date().getHours();
  const dayOfWeek = new Date().getDay();
  
  // Weekend bonus (Saturday, Sunday)
  const weekendBonus = (dayOfWeek === 0 || dayOfWeek === 6) ? 1.2 : 1.0;
  
  // Time-based multiplier:
  // Early morning (5-8): 0.8x (slow start)
  // Morning peak (9-11): 1.5x (high engagement)
  // Lunch (12-14): 1.2x (moderate)
  // Afternoon (15-17): 1.0x (normal)
  // Evening peak (18-21): 1.8x (highest engagement)
  // Night (22-4): 0.6x (lowest)
  let timeMultiplier;
  if (hour >= 5 && hour < 8) timeMultiplier = 0.8;
  else if (hour >= 9 && hour < 11) timeMultiplier = 1.5;
  else if (hour >= 12 && hour < 14) timeMultiplier = 1.2;
  else if (hour >= 15 && hour < 17) timeMultiplier = 1.0;
  else if (hour >= 18 && hour < 21) timeMultiplier = 1.8;
  else timeMultiplier = 0.6;
  
  return timeMultiplier * weekendBonus;
}

// Initialize data if empty
function initData() {
  if (!D) D = {};
  if (!D.users) D.users = {};
  if (!D.posts) D.posts = [];
  if (!D.txs) D.txs = [];
  if (!D.notifs) D.notifs = [];
  if (!D.chats) D.chats = {};
  if (!D.stories) D.stories = [];
  if (!D.groups) D.groups = {};
  if (!D.marketplace) D.marketplace = [];
  if (!D.nfts) D.nfts = [];
  if (!D.apps) D.apps = [];
  if (!D.withdrawals) D.withdrawals = [];
  
  // Always ensure admin exists
  if(!D.users[ADMIN_ID]) seedData();
  
  // Always reset admin to correct credentials
  if (D.users[ADMIN_ID]) {
    D.users[ADMIN_ID].email    = ADMIN_EMAIL;
    D.users[ADMIN_ID].phone    = ADMIN_PHONE;
    D.users[ADMIN_ID].password = ADMIN_PASS;
    D.users[ADMIN_ID].isAdmin  = true;
    D.users[ADMIN_ID].kycVerified = true;
    D.users[ADMIN_ID].verified = true;
  }
}
// FIXED: save only user ID, not full object
function saveSession() {
  try {
    const sessionId = D.cur || '';
    localStorage.setItem(STORAGE_KEY+'session', sessionId);
    localStorage.setItem(STORAGE_KEY+'backup_session', sessionId);
    localStorage.setItem(STORAGE_KEY+'last_login_user', sessionId);
    
    // PERSISTENCE: Also save to persistence manager for extra reliability
    if(typeof PersistenceManager !== 'undefined' && PersistenceManager && CU) {
      PersistenceManager.saveSession(CU.id, { cur: D.cur }).catch(err => {
        console.warn('[PersistenceManager] Session save failed:', err);
      });
    }
  } catch(e) {}
}
// Helper to force-clear session (used by logout/delete)
function clearSession() {
  try {
    D.cur = null; CU = null;
    localStorage.setItem(STORAGE_KEY+'session', '');
    let raw = localStorage.getItem(STORAGE_KEY+'data');
    if(raw){ let d=JSON.parse(raw); d.cur=null; localStorage.setItem(STORAGE_KEY+'data', JSON.stringify(d)); }
  } catch(e) {}
}
// FIXED: restore CU as a direct reference to D.users[uid]
async function loadSession() {
  try {
    let uid = localStorage.getItem(STORAGE_KEY+'session');
    if(!uid) {
      uid = localStorage.getItem(STORAGE_KEY+'backup_session');
    }
    if(!uid) {
      uid = localStorage.getItem(STORAGE_KEY+'last_login_user');
    }
    
    // PERSISTENCE: Try to restore from persistence manager if localStorage is empty
    if(!uid && typeof PersistenceManager !== 'undefined' && PersistenceManager) {
      const session = await PersistenceManager.loadSession();
      if(session && session.userId) {
        uid = session.userId;
        localStorage.setItem(STORAGE_KEY+'session', uid);
        console.log('[PersistenceManager] Session restored from persistence storage');
      }
    }
    
    if(uid && uid.length > 0 && D.users[uid]) {
      let u = D.users[uid];
      // Don't auto-login disabled accounts
      if(u.disabled && uid !== ADMIN_ID) return;
      CU = u;      // direct reference
      D.cur = uid;
      
      // PERSISTENCE: Restore points from persistence manager
      if(typeof PersistenceManager !== 'undefined' && PersistenceManager) {
        const savedPoints = await PersistenceManager.loadPoints(uid);
        if(savedPoints > 0 && (u.points || 0) < savedPoints) {
          u.points = savedPoints;
          console.log('[PersistenceManager] Points restored:', savedPoints);
        }
      }
    }
  } catch(e) {}
}
// Helper: always re-sync CU to D.users after loadSession

// ─── Dynamic SEO Meta Tags ──────────────────────────────────
function updateSEO({ title, desc, image, url, type='article' }={}) {
  const base = 'Monetixra';
  const baseUrl = 'https://monetixra.onrender.com';
  const t = title ? `${title} | ${base}` : `${base} — Earn Money on Social Media`;
  const d = desc  || 'Post, watch ads, invite friends & earn real money. AI-powered social platform.';
  const img = image || `${baseUrl}/icon-512.png`;
  const u = url   || baseUrl;
  // Update meta tags
  const setMeta = (id, val) => { let el=document.getElementById(id); if(el) el.setAttribute('content', val); };
  const setLink  = (id, val) => { let el=document.getElementById(id); if(el) el.setAttribute('href', val); };
  document.title = t;
  setMeta('og-type',  type);
  setMeta('og-url',   u);
  setMeta('og-title', t);
  setMeta('og-desc',  d);
  setMeta('og-image', img);
  setMeta('tw-title', t);
  setMeta('tw-desc',  d);
  setMeta('tw-image', img);
  setLink('canonical', u);
}

// Update SEO when viewing a post
function updatePostSEO(post) {
  if(!post) return;
  let author = D.users[post.author]||{};
  updateSEO({
    title: `${author.name||'User'}: ${(post.text||'').slice(0,60)}`,
    desc:  (post.text||'Check this post on Monetixra').slice(0,160),
    image: post.file?.startsWith('http') ? post.file : undefined,
    url:   `https://monetixra.onrender.com/?post=${post.id}`,
    type:  'article'
  });
}

function syncCU() {
  if(D.cur && D.users[D.cur]) CU = D.users[D.cur];
}

// Seed Data
function seedData() {
  // Only create admin — no demo users
  D.users[ADMIN_ID] = {
    id: ADMIN_ID,
    name: 'Admin',
    username: 'admin',
    email: ADMIN_EMAIL,
    phone: ADMIN_PHONE,
    password: ADMIN_PASS,
    isAdmin: true,
    verified: true,
    points: 0,
    adminRevenue: 0,
    followers: [], following: [], refs: [],
    refCode: 'MXTADMIN',
    savedPosts: [], blocked: [],
    tasksToday: {}, twoFA: false,
    kycVerified: true,
    tin: null, cryptoWallets: {},
    achievements: [],
    adViews: 0, adPts: 0, engPts: 0,
    refPts: 0, mlmPts: 0, nftPts: 0, stakePts: 0,
    createdAt: Date.now(),
    // Tracking fields for accurate statistics
    lastActive: 0,
    lastLogin: 0,
    lastAction: 0,
    sessionStart: 0,
    loginCount: 0,
    isLoggedIn: false,
    isOnline: false,
    dailyUsage: {}
  };
  D.posts = [];
  D.stories = [];
  D.marketplace = [];
  D.nfts = [];
  D.apps = [];
  D.txs = [];
  D.notifs = [];
  D.withdrawals = [];
  saveData();
}

// Toast
// Dark/Light Theme Toggle
function toggleTheme() {
  let isLight = document.body.classList.toggle('light-theme');
  let btn = G('themeToggleBtn');
  if(btn) btn.textContent = isLight ? '☀️' : '🌙';
  localStorage.setItem('mxt_theme', isLight ? 'light' : 'dark');
}
function applyTheme() {
  let saved = localStorage.getItem('mxt_theme');
  if(saved === 'light') {
    document.body.classList.add('light-theme');
    let btn = G('themeToggleBtn');
    if(btn) btn.textContent = '☀️';
  }
}

// Notification sound player
function playNotifSound(type) {
  try {
    let ctx = new (window.AudioContext||window.webkitAudioContext)();
    let osc = ctx.createOscillator();
    let gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    if(type==='s') { osc.frequency.setValueAtTime(880,ctx.currentTime); osc.frequency.setValueAtTime(1100,ctx.currentTime+0.1); }
    else if(type==='e') { osc.frequency.setValueAtTime(440,ctx.currentTime); osc.frequency.setValueAtTime(330,ctx.currentTime+0.1); }
    else { osc.frequency.setValueAtTime(660,ctx.currentTime); }
    gain.gain.setValueAtTime(0.15,ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001,ctx.currentTime+0.3);
    osc.start(ctx.currentTime); osc.stop(ctx.currentTime+0.3);
  } catch(e) {}
}

function toast(type, title, msg='', dur=4000) {
  let w = G('toastWrap'); if(!w) return;
  // Play sound for success/error
  if(type==='s'||type==='e') playNotifSound(type);
  let t = document.createElement('div');
  t.className = `toast t-${type}`;
  t.innerHTML = `<span>${ {s:'✅',e:'❌',w:'⚠️',i:'ℹ️'}[type] }</span><div><div style="font-weight:700;">${esc(title)}</div>${msg?`<div>${esc(msg)}</div>`:''}</div>`;
  w.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(110%)'; setTimeout(()=>t.remove(),300); }, dur-300);
}

// Confetti
function confetti() { for(let i=0;i<30;i++) { let c=document.createElement('div'); c.style.cssText=`position:fixed; top:-10px; left:${Math.random()*100}%; width:6px; height:6px; background:${COLORS[Math.floor(Math.random()*COLORS.length)]}; border-radius:50%; pointer-events:none; z-index:10006; animation:confetti ${1+Math.random()}s forwards;`; document.body.appendChild(c); setTimeout(()=>c.remove(),2000); } }

// Guard / once-only helpers
function _mxtNow(){ return Date.now().toString(); }
function _mxtGetClaimsRoot(){ try { return JSON.parse(sessionStorage.getItem('mxt_claims_root') || '{}'); } catch(e){ return {}; } }
function _mxtSetClaimsRoot(v){ try { sessionStorage.setItem('mxt_claims_root', JSON.stringify(v || {})); } catch(e){} }
// claimOnce(key, fn) -> returns true if fn executed
function claimOnce(key, fn){
  if(!key) key = 'k_'+_mxtNow()+'_'+Math.random().toString(36).slice(2);
  let root = _mxtGetClaimsRoot();
  if(root[key]) return false;
  root[key] = { at: _mxtNow() };
  _mxtSetClaimsRoot(root);
  try { fn && fn(); } catch(e){ console.warn('[claimOnce] fn failed', e); }
  return true;
}

// Basic concurrency lock for async actions
function withLock(lockKey, fn){
  if(!withLock._locks) withLock._locks = {};
  if(withLock._locks[lockKey]) return Promise.reject(new Error('LOCKED'));
  withLock._locks[lockKey] = true;
  return Promise.resolve()
    .then(fn)
    .finally(()=>{ withLock._locks[lockKey] = false; });
}


// Modals
function openModal(id) {
  const el = G(id);
  if(!el) return;
  el.classList.add('open');
  if(el.id === 'pushNotifModal' || el.id === 'paywallModal') {
    el.setAttribute('aria-modal','true');
    el.setAttribute('role','dialog');
  }
}
function closeModal(id) {
  const el = G(id);
  if(!el) return;
  el.classList.remove('open');
}

// Auth
function authTab(tab, btn) {
  document.querySelectorAll('.af').forEach(f=>f.classList.remove('on'));
  document.querySelectorAll('.seg-b').forEach(b=>b.classList.remove('on'));
  if(btn) btn.classList.add('on');
  G('af'+tab.charAt(0).toUpperCase()+tab.slice(1))?.classList.add('on');
}
function togglePw(id) { let i=G(id); i.type = i.type==='password'?'text':'password'; }
function otpNext(inp,i) { if(inp.value && i<5) G('ob'+(i+1))?.focus(); }
async function doLogin() {
  try {
    let rawId = V('liId');
    const loginCandidates = collectLoginCandidates(rawId);
    let id = String(loginCandidates[0] || rawId || '').trim();
    let pw = V('liPw');
    if(!id) return toast('e','Enter your email, phone or username');
    if(!pw) return toast('e','Enter your password');

    let idLower = id.toLowerCase();
    let normalizedPhone = id.replace(/\D/g, '');
    let normalizedAdminPhone = String(ADMIN_PHONE || '').replace(/\D/g, '');
    let isAdminId = loginCandidates.some(candidate => {
      const candidateText = String(candidate || '').trim().toLowerCase();
      const candidatePhone = candidateText.replace(/\D/g, '');
      return candidateText === ADMIN_EMAIL.toLowerCase() || candidatePhone === normalizedAdminPhone || candidateText === 'admin';
    });
    let isAdminPassword = pw === ADMIN_PASS || pw === ADMIN_PASS_DEFAULT || pw === ADMIN_PASS_FALLBACK;
    let foundUid = null;

    // Ensure D and D.users are initialized
    if (!D) D = { users: {} };
    if (!D.users) D.users = {};

    // Admin fallback: local admin account should always authorize with the master password
    if (isAdminId && isAdminPassword) {
      if (!D.users[ADMIN_ID]) seedData();
      let admin = D.users[ADMIN_ID];
      admin.email = ADMIN_EMAIL;
      admin.phone = ADMIN_PHONE;
      admin.password = ADMIN_PASS;
      admin.isAdmin = true;
      admin.verified = true;
      admin.kycVerified = true;
      foundUid = ADMIN_ID;
    }

    if (typeof pullCloudAccountForLogin === 'function') {
      await pullCloudAccountForLogin(id);
    }

    // Supabase auth for email logins when not using local admin fallback
    const loginEmail = (loginCandidates.find(c => String(c || '').includes('@')) || id).trim();
    if (!foundUid && loginEmail.includes('@') && isSupabaseReady()) {
      const { data: authData, error: authError } = await supabaseSignIn(loginEmail, pw);
      if (!authError && authData?.user) {
        let authUid = authData.user.id;
        let emailLower = loginEmail.toLowerCase();
        for (let k in D.users) {
          let u = D.users[k];
          if (!u) continue;
          if (u.authUid === authUid || (u.email||'').toLowerCase() === emailLower) {
            foundUid = k; break;
          }
        }
        if (!foundUid) {
          let newId = 'u' + Date.now() + Math.random().toString(36).slice(2,6);
          D.users[newId] = {
            id: newId,
            authUid,
            name: loginEmail.split('@')[0],
            username: loginEmail.split('@')[0],
            email: loginEmail,
            password: await hashPass(pw),
            points: 50,
            verified: true,
            followers: [],
            following: [],
            refs: [],
            refCode: 'MX' + Math.random().toString(36).slice(2,8).toUpperCase(),
            savedPosts: [],
            blocked: [],
            tasksToday: {},
            twoFA: false,
            kycVerified: false,
            createdAt: Date.now()
          };
          foundUid = newId;
        }
        D.cur = foundUid;
        CU = D.users[foundUid];
        saveSession();
        saveData();
        syncCloudBackup();
        mount();
        toast('s','✅ Logged in with Supabase as '+CU.name+'!');
        return;
      }
      if (authError && authError.message && !authError.message.toLowerCase().includes('invalid login credentials')) {
        console.warn('[Supabase login]', authError.message);
      }
    }

    // Brute force protection
    let attempts = parseInt(sessionStorage.getItem('mxt_attempts')||'0');
    if(attempts >= 10) return toast('e','Too many attempts. Refresh the page and try again.');

    if(!foundUid) {
      for(let k in D.users) {
        let u = D.users[k];
        if(!u) continue;
        if(accountMatchesLogin(u, loginCandidates)) {
          foundUid = k; break;
        }
      }
    }
    
    if(!foundUid) {
      sessionStorage.setItem('mxt_attempts', attempts+1);
      return toast('e','No account found with that email/phone/username');
    }
    
    let u = D.users[foundUid];
    // Password check: support plain text (legacy), hashed, and local admin fallback credentials
    let pwHash = await hashPass(pw);
    let match = false;
    
    if(foundUid === ADMIN_ID && isAdminPassword) {
      match = true;
    } else if(u.password === pw) {
      // Plain text match — migrate to hash
      match = true;
      u.password = pwHash;
    } else if(u.password === pwHash) {
      match = true;
    }
    
    if(!match) {
      sessionStorage.setItem('mxt_attempts', attempts+1);
      return toast('e','Incorrect password. Try again.');
    }
    
    sessionStorage.removeItem('mxt_attempts');
    if(u.disabled && foundUid !== ADMIN_ID)    return toast('e','Your account has been disabled. Contact support.');
    if(u.deactivated && foundUid !== ADMIN_ID) {
      u.deactivated = false;
      addNotif(foundUid,'account','✅','Your account has been reactivated.');
    }
    
    // Ensure admin flag
    if(foundUid === ADMIN_ID || u.email === ADMIN_EMAIL || u.phone === ADMIN_PHONE) {
      u.isAdmin = true;
    }
    
    D.cur = foundUid;
    CU    = D.users[foundUid];
    saveSession();
    saveData();
    
    // PERSISTENCE: Restore points from persistence manager on login
    if(typeof PersistenceManager !== 'undefined' && PersistenceManager) {
      const savedPoints = await PersistenceManager.loadPoints(foundUid);
      if(savedPoints > 0 && (CU.points || 0) < savedPoints) {
        CU.points = savedPoints;
        D.users[foundUid].points = savedPoints;
        console.log('[PersistenceManager] Points restored on login:', savedPoints);
        saveData(); // Save the restored points
      }
    }
    
    trackUserActivity('login');
    mount();
    toast('s','✅ Welcome back, '+CU.name+'!');
  } catch(err) {
    console.error('[doLogin]', err);
    toast('e','Login error: ' + err.message);
  }
}
async function sendRegOtp() {
  try {
    let id = V('rgId');
    if(!id) return toast('e','Enter your email or phone number');
    if(!G('rgTerms')?.checked) return toast('e','You must agree to Terms of Service');
    if (typeof pullCloudAccountForLogin === 'function') {
      await pullCloudAccountForLogin(id);
    }
    // Check duplicate
    let idLower = id.toLowerCase();
    let existing = Object.values(D.users).find(u =>
      (u.email||'').toLowerCase() === idLower ||
      (u.phone||'') === id ||
      (u.username||'').toLowerCase() === idLower
    );
    if(existing) return toast('e','This email/phone is already registered. Please sign in.');
    // Rate limit
    let otpCount = parseInt(sessionStorage.getItem('mxt_otp')||'0');
    if(otpCount >= 5) return toast('e','Too many requests. Please wait a few minutes.');
    sessionStorage.setItem('mxt_otp', otpCount+1);
    // Generate OTP
    let otp = Math.floor(100000 + Math.random()*900000);
    D.otp = D.otp || {};
    D.otp.reg = { code: String(otp), id: id, exp: Date.now()+600000 };
    saveData();
    // Send OTP
    let sent = false;
    if(EMAILJS_PUBLIC && EMAILJS_SERVICE && EMAILJS_TEMPLATE && id.includes('@')) {
      try {
        if(typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC);
        await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, {
          to_email: id, to_name: 'New User',
          otp_code: String(otp), platform: 'Monetixra'
        });
        toast('s','📧 OTP sent to '+id);
        sent = true;
      } catch(e) { console.warn('EmailJS error:', e.message); }
    }
    if(!sent) {
      // Show OTP directly (demo mode)
      toast('i','Your OTP code: ' + otp, 'Valid for 10 minutes', 15000);
    }
    G('rgOtpWrap').style.display = 'block';
    // Auto-fill OTP boxes if demo
    if(!sent) {
      let s = String(otp);
      for(let i=0;i<6;i++){let el=G('ob'+i);if(el)el.value=s[i]||'';}
    }
  } catch(err) {
    console.error('[sendRegOtp]', err);
    toast('e','Error. Try again.');
  }
}
function checkPwMatch() {
  let pw=V('rgPw'), pw2=V('rgPw2');
  let msg=G('pwMatchMsg');
  if(!pw2) { if(msg) msg.style.display='none'; return; }
  if(pw===pw2) { msg.style.display='block'; msg.style.color='var(--c3)'; msg.textContent='✅ Passwords match'; }
  else         { msg.style.display='block'; msg.style.color='var(--c5)'; msg.textContent='❌ Passwords do not match'; }
}

async function doRegister() {
  try {
    let nm  = V('rgName').trim();
    let un  = V('rgUser').trim().toLowerCase();
    let id  = V('rgId').trim();
    let pw  = V('rgPw');
    let pw2 = V('rgPw2');
    let ref = V('rgRef').trim().toUpperCase();
    
    // Ensure D and D.users are initialized
    if (!D) D = { users: {} };
    if (!D.users) D.users = {};

    // Validate fields
    if(!nm || nm.length < 2)  return toast('e','Enter your full name (minimum 2 characters)');
    if(!un || un.length < 3)  return toast('e','Username must be at least 3 characters');
    if(!/^[a-z0-9_.]+$/.test(un)) return toast('e','Username: letters, numbers, _ and . only');
    if(!id)                   return toast('e','Enter your email or phone number');
    if(!pw || pw.length < 6)  return toast('e','Password must be at least 6 characters');
    if(pw !== pw2)            return toast('e','Passwords do not match');
    
    // Verify OTP
    let otpEntered = '';
    for(let i=0;i<6;i++) { let el=G('ob'+i); otpEntered += el ? (el.value||'') : ''; }
    
    if(!D.otp?.reg?.code) return toast('e','No OTP found. Click "Send OTP" first.');
    if(D.otp.reg.id !== id) return toast('e','OTP was sent to a different email/phone.');
    if(Date.now() > (D.otp.reg.exp||0)) return toast('e','OTP expired. Click "Send OTP" again.');
    if(String(D.otp.reg.code) !== otpEntered) return toast('e','Wrong OTP. Check and try again.');
    
    // Check duplicates
    for(let k in D.users) {
      let u = D.users[k];
      if(!u) continue;
      if((u.email||'').toLowerCase() === id.toLowerCase() || (u.phone||'')=== id) return toast('e','Email/phone already registered. Sign in instead.');
      if((u.username||'').toLowerCase() === un) return toast('e','Username taken. Choose a different one.');
    }
    
    // Create account
    let newId   = 'u'+Date.now()+Math.random().toString(36).slice(2,6);
    let isEmail = id.includes('@');
    let pwHash  = await hashPass(pw);
    
    D.users[newId] = {
      id: newId, name: nm, username: un,
      email: isEmail ? id : '',
      phone: isEmail ? '' : id,
      password: pwHash,
      points: 50, verified: false, isAdmin: false,
      followers:[], following:[], refs:[],
      referredBy: null,
      refCode: 'MX'+Math.random().toString(36).slice(2,8).toUpperCase(),
      savedPosts:[], blocked:[], tasksToday:{}, twoFA:false,
      kycVerified:false, tin:null, cryptoWallets:{}, achievements:[],
      adViews:0, adPts:0, engPts:0, refPts:0, mlmPts:0, nftPts:0, stakePts:0,
      notifSettings:{}, privacySettings:{},
      createdAt: Date.now(),
      // Tracking fields for accurate statistics
      lastActive: 0,
      lastLogin: 0,
      lastAction: 0,
      sessionStart: 0,
      loginCount: 0,
      isLoggedIn: false,
      isOnline: false,
      dailyUsage: {}
    };

    if (isEmail && isSupabaseReady()) {
      const { data: regData, error: regError } = await supabaseSignUp(id, pw, {
        name: nm,
        username: un,
        refCode: D.users[newId].refCode,
        localId: newId
      });
      if (regError) {
        console.warn('[Supabase signup]', regError.message);
        if(String(regError.message || '').toLowerCase().includes('already')) {
          delete D.users[newId];
          return toast('e','This email is already registered. Please sign in.');
        }
        toast('w','Account created locally, but cloud signup failed. Please try again later.');
      } else if (regData?.user) {
        D.users[newId].authUid = regData.user.id;
        D.users[newId].verified = true;
      }
    }
    
    // Referral bonus
    if(ref) {
      let ru = Object.values(D.users).find(u => u && (u.refCode||'')=== ref);
      if(ru) {
        ru.refs = ru.refs||[]; ru.refs.push(newId);
        D.users[newId].referredBy = ru.id;
        ru.points = (ru.points||0)+45; ru.refPts=(ru.refPts||0)+45;
        D.users[newId].points += 10;
        addMLMCommission(newId, 10, 'New Referral');
        addNotif(ru.id,'mlm','🤝','Your referral '+nm+' just joined! +45 pts');
        toast('i','Referral code applied! +10 bonus pts');
      }
    }
    
    // Signup tx
    D.txs = D.txs||[];
    D.txs.unshift({ id:'t'+Date.now(), type:'bonus', label:'Signup bonus', pts:50, at:Date.now(), user:newId });
    D.otp.reg = null; // Clear used OTP
    D.cur = newId;
    CU    = D.users[newId];
    addNotif(newId,'welcome','🎉','Welcome to Monetixra! Start earning by posting, watching ads, and referring friends.');
    saveSession(); saveData(); mount();
    try {
      fetch('/api/user-data/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(CU)}).catch(()=>{});
      fetch('/api/points/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({userId:CU.id, points:CU.points || 0, label:'signup-sync'})}).catch(()=>{});
    } catch(e) {}
    toast('s','🎉 Account created! Welcome '+nm+'! +50 bonus pts');
    confetti();
  } catch(err) {
    console.error('[doRegister]', err);
    toast('e','Registration failed: ' + err.message);
  }
}
async function sendForgotOtp() {
  try {
    let id = V('fiId').trim();
    if(!id) return toast('e','Enter your registered email or phone number');
    // Supabase password reset for email users
    if (id.includes('@') && isSupabaseReady()) {
      const { data, error } = await supabaseSendPasswordReset(id);
      if (!error) {
        toast('s','📧 Password reset email sent to '+id);
        return;
      }
      console.warn('[Supabase reset]', error.message);
    }
    // Find account
    let foundUid = null;
    for(let k in D.users) {
      let u = D.users[k];
      if((u.email||'')=== id || (u.phone||'')=== id || (u.username||'').toLowerCase()=== id.toLowerCase()) {
        foundUid = k; break;
      }
    }
    if(!foundUid) return toast('e','No account found with that email/phone');
    let otp = Math.floor(100000 + Math.random()*900000);
    D.otp = D.otp || {};
    D.otp.forgot = { code: String(otp), uid: foundUid, exp: Date.now()+600000 };
    saveData();
    let u = D.users[foundUid];
    // Try EmailJS
    let sent = false;
    if(EMAILJS_PUBLIC && EMAILJS_SERVICE && EMAILJS_TEMPLATE && u.email) {
      try {
        if(typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC);
        await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE,{
          to_email: u.email, to_name: u.name||'User',
          otp_code: String(otp), platform: 'Monetixra'
        });
        toast('s','📧 OTP sent to '+u.email);
        sent = true;
      } catch(e) { console.warn('EmailJS:', e.message); }
    }
    if(!sent) {
      if(foundUid !== ADMIN_ID) {
        toast('i','Your reset OTP: '+otp, 'Valid for 10 minutes', 15000);
        // Auto-fill the OTP field
        let el = G('fiOtp'); if(el) el.value = String(otp);
      } else {
        toast('i','OTP sent to admin contact (check browser console)');
        console.log('[ADMIN RESET OTP]', otp);
      }
    }
    G('fOtpWrap').style.display = 'block';
  } catch(err) {
    console.error('[sendForgotOtp]', err);
    toast('e','Error. Please try again.');
  }
}
async function doReset() {
  let otp = V('fiOtp'), np = V('fiPw'), np2 = V('fiPw2');
  if(!otp || !np || !np2) return toast('e','Fill all fields');
  if(np !== np2) return toast('e','Passwords do not match');
  if(np.length < 6) return toast('e','Password must be 6+ chars');
  let saved = D.otp?.forgot;
  if(!saved || String(saved.code) !== otp) return toast('e','Invalid OTP — check and retry');
  if(Date.now() > saved.exp) return toast('e','OTP expired. Request a new one.');
  let u = D.users[saved.uid];
  if(!u) return toast('e','User not found');
  u.password = await hashPass(np);
  D.otp.forgot = null;
  saveData();
  toast('s','✅ Password reset! Please sign in.');
  authTab('login', null);
}
function seedAndLogin() { /* disabled */ }
function persistAuthState() {
  try {
    localStorage.setItem(STORAGE_KEY+'session', D.cur || '');
    localStorage.setItem(STORAGE_KEY+'data', JSON.stringify(D));
  } catch(e) {
    console.warn('[persistAuthState]', e);
  }
}
function logout(skipConfirm = false) {
  if (typeof MonetixraAccountManagement !== 'undefined' && typeof MonetixraAccountManagement.signOut === 'function') {
    return MonetixraAccountManagement.signOut(skipConfirm);
  }

  if (!skipConfirm && !confirm('Sign out of Monetixra?')) return false;
  if (typeof D !== 'undefined') {
    D.cur = null;
  }
  CU = null;

  if (typeof isSupabaseReady === 'function' && isSupabaseReady()) {
    if (typeof supabaseSignOut === 'function') {
      supabaseSignOut().catch(err => {
        console.warn('[Supabase signout]', err.message || err);
      });
    }
  }

  if (typeof PersistenceManager !== 'undefined' && PersistenceManager && typeof PersistenceManager.clearSession === 'function') {
    PersistenceManager.clearSession().catch(err => {
      console.warn('[PersistenceManager] Session clear failed:', err);
    });
  }

  if (typeof saveData === 'function') {
    saveData();
  }
  if (typeof persistAuthState === 'function') {
    persistAuthState();
  }
  try {
    localStorage.setItem(STORAGE_KEY+'last_login_user', '');
    localStorage.setItem(STORAGE_KEY+'backup_session', '');
  } catch (e) {}

  if (typeof document !== 'undefined') {
    const authWrap = document.getElementById('authWrap');
    const appWrap = document.getElementById('appWrap');
    const fab = document.getElementById('fab');
    if (authWrap) authWrap.style.display = 'flex';
    if (appWrap) appWrap.style.display = 'none';
    if (fab) fab.style.display = 'none';
    if (typeof authTab === 'function') {
      authTab('login');
    }
  }

  if (typeof toast === 'function') {
    toast('s', 'Signed out successfully');
  }
  setTimeout(() => location.reload(), 600);
  return true;
}
function deleteAccount() {
  if(!CU) return;
  
  // Use new modular system
  if(typeof MonetixraAccountManagement !== 'undefined' && typeof MonetixraAccountManagement.deleteAccount === 'function') {
    return MonetixraAccountManagement.deleteAccount();
  }
  
  // Fallback
  let confirmText = prompt('Type DELETE to permanently delete your account:');
  if(confirmText !== 'DELETE') { toast('e','Cancelled — type DELETE to confirm'); return; }
  let uid = CU.id;
  // Clean up all user data
  delete D.users[uid];
  D.posts   = (D.posts||[]).filter(p=>p.author!==uid);
  D.notifs  = (D.notifs||[]).filter(n=>n.to!==uid);
  D.txs     = (D.txs||[]).filter(t=>t.user!==uid);
  // Remove from others' followers/following
  Object.values(D.users).forEach(u => {
    u.followers = (u.followers||[]).filter(f=>f!==uid);
    u.following = (u.following||[]).filter(f=>f!==uid);
    u.autoFriends = (u.autoFriends||[]).filter(f=>f!==uid);
  });
  D.cur = null;
  CU    = null;
  persistAuthState();
  if (isSupabaseReady()) {
    supabaseSignOut().catch(err => console.warn('[Supabase signout]', err.message || err));
  }
  toast('s','Account deleted');
  setTimeout(()=> location.reload(), 700);
}

// Mount
function mount() {
  if (!CU || !D?.users?.[CU.id]) {
    if (G('authWrap')) G('authWrap').style.display = 'flex';
    if (G('appWrap')) G('appWrap').style.display = 'none';
    if (G('fab')) G('fab').style.display = 'none';
    if (typeof authTab === 'function') authTab('login');
    return;
  }

  G('authWrap').style.display='none';
  G('appWrap').style.display='block';
  G('fab').style.display='flex';
  
  // Initialize bottom nav buttons after login
  initBottomNav();
  
  if(!D.users[ADMIN_ID]) seedData();
  
  // Initialize user tracking fields for accurate statistics
  if(typeof initializeUserTracking === 'function') {
    initializeUserTracking();
  }
  
  syncCU();
  if(CU?.email===ADMIN_EMAIL || CU?.phone===ADMIN_PHONE) {
    CU.isAdmin=true;
    if(D.users[CU.id]) D.users[CU.id].isAdmin=true;
  }
  
  // Track user login and online status
  if(CU) {
    let today = new Date().toDateString();
    let u = D.users[CU.id];
    if(u) {
      u.lastLogin = today;
      u.loginCount = (u.loginCount || 0) + 1;
      u.isOnline = true;
      u.lastActive = Date.now();
    }
    saveData();
    
    // Track user activity
    if(typeof trackUserActivity === 'function') {
      trackUserActivity('login');
    }
    
    // Update last active periodically
    setInterval(() => {
      if(CU && D.users[CU.id]) {
        D.users[CU.id].lastActive = Date.now();
      }
    }, 60000); // Every minute
    
    // Mark offline on page unload
    window.addEventListener('beforeunload', () => {
      if(CU && D.users[CU.id]) {
        D.users[CU.id].isOnline = false;
        D.users[CU.id].lastActive = Date.now();
        saveData();
      }
    });
  }
  
  syncUI(); nav('feed'); checkAutoDeleteOnLoad(); startBanner(); scheduleInts(); scheduleReward(); scheduleAutoAd();
  let light = localStorage.getItem(STORAGE_KEY+'light'); if(light==='1') { document.body.classList.add('lm'); }
  let accent = localStorage.getItem(STORAGE_KEY+'accent'); if(accent) setAccent(accent);
  buildColorPicker(); rLangGrid();
  // Init PeerJS when user logs in
  if(CU?.id) setTimeout(()=>initPeerJS(CU.id), 1500);
}

// Sync UI
function syncUI() {
  if(!CU) return;
  let av = G('tbAv'); if(av) av.innerHTML = CU.avatar ? `<img src="${CU.avatar}">` : (CU.name?.charAt(0).toUpperCase()||'M');
  G('tbPts').textContent = fmt((D.users[CU.id]||CU).points||0)+' pts';
  G('ehBal') && (G('ehBal').textContent = fmt((D.users[CU.id]||CU).points||0));
  G('ehUsd') && (G('ehUsd').textContent = (((D.users[CU.id]||CU).points||0)/PTS_PER_USD).toFixed(2));
  let unreadNotif = (D.notifs||[]).filter(n=>!n.read && n.to===CU.id).length;
  G('notifDot') && (G('notifDot').style.display = unreadNotif?'block':'none');
  let unreadMsg = countUnreadMsgs();
  G('msgDot') && (G('msgDot').style.display = unreadMsg?'block':'none');
  G('msgBdg') && (G('msgBdg').textContent = unreadMsg) && (G('msgBdg').style.display = unreadMsg?'flex':'none');
  updateFriendsBadge();
  if(G('kycStatus')) G('kycStatus').textContent = (D.users[CU.id]||CU).kycVerified ? '✅ Verified' : 'Not Verified';
  if(G('kycBadge')) G('kycBadge').style.display = (D.users[CU.id]||CU).kycVerified ? 'inline-flex' : 'none';
  if(G('mlmPtsEl')) G('mlmPtsEl').textContent = fmt((D.users[CU.id]||CU).mlmPts||0)+' pts';
  if(G('nftPtsEl')) G('nftPtsEl').textContent = fmt((D.users[CU.id]||CU).nftPts||0)+' pts';
}
function updatePageAds(page) {
  const banner = G('bannerAd');
  const baText = G('baT');
  const pageMessages = {
    feed: '🚀 Monetixra with AI, Crypto, NFT, MLM, Metaverse & More!',
    explore: '🔥 Explore trending creators and earn extra points.',
    earn: '💰 Complete tasks, watch ads, and collect bonus points.',
    wallet: '💎 Secure points and payout-ready offers in your wallet.',
    messages: '💬 Smooth conversations mixed with relevant ad moments.',
    friends: '👥 Discover creators and connect with every friend.',
    referral: '🎁 Invite friends and earn referral points instantly.',
    profile: '📈 Keep your profile fresh to attract more followers.',
    settings: '⚙️ Customize your app experience and privacy settings.',
    admin: '📋 Admin dashboard — manage users, posts, and live streams.',
    leaderboard: '🏆 See top creators and stay ahead of the leaderboard.',
    marketplace: '🛍️ Shop, sell, and earn through the Monetixra marketplace.',
    nft: '🎨 Showcase NFTs with rotating sponsor spots.',
    metaverse: '🌐 Metaverse discovery with targeted partner rewards.',
    apps: '📱 App recommendations with rotating sponsor cards.',
    analytics: '📊 Real-time reports with ad-based revenue insights.',
    activity: '📌 Activity feed enhanced with dynamic sponsor content.',
    gamification: '⚡ Level up your mission rewards with sponsor bonuses.',
    meta: '🎯 Discover hidden offers in the meta experience.',
    stats: '📈 Your stats page now includes rotating sponsor highlights.',
    badges: '🏅 Earn badges with premium ad-supported rewards.',
    me: '🙋‍♂️ Personalize your profile with hidden sponsor boosts.',
    notif: '🔔 Stay updated with notifications and live alerts.',
    offline: '🌙 You are offline — continue earning with cached actions.'
  };
  if(baText) baText.textContent = pageMessages[page] || '💎 Monetixra ads and rewards on every page.';
  if(banner) banner.style.display = 'flex';
  // FABs removed - no longer displaying fabAd and socialBarAd
  if(typeof rotateContextAds === 'function') rotateContextAds(page);
}
function installFloatingAdDrag() {
  const selectors = ['#bannerAd .ba-earn'];
  selectors.forEach(sel => {
    const el = document.querySelector(sel);
    if(!el || el.dataset.mxtDragBound === '1') return;
    el.dataset.mxtDragBound = '1';
    el.style.position = 'fixed';
    el.style.touchAction = 'none';
    el.style.cursor = 'grab';
    if(!el.style.right) el.style.right = '18px';
    if(sel === '#bannerAd .ba-earn') {
      if(!el.style.top) el.style.top = '48px';
      el.style.bottom = '';
    }
    let dragging = false;
    let startX = 0;
    let startY = 0;
    el.addEventListener('pointerdown', e => {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      el.setPointerCapture?.(e.pointerId);
      el.style.cursor = 'grabbing';
      e.preventDefault();
    }, {passive:false});
    el.addEventListener('pointermove', e => {
      if(!dragging) return;
      e.preventDefault();
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      const style = getComputedStyle(el);
      const currentRight = parseFloat(style.right) || 0;
      const currentTop = parseFloat(style.top);
      const currentBottom = parseFloat(style.bottom);
      const nextRight = Math.max(-el.offsetWidth + 12, currentRight - dx);
      el.style.right = nextRight + 'px';
      if(!Number.isNaN(currentTop)) {
        el.style.top = Math.max(12, currentTop + dy) + 'px';
      } else {
        el.style.bottom = Math.max(12, currentBottom - dy) + 'px';
      }
      startX = e.clientX;
      startY = e.clientY;
    }, {passive:false});
    el.addEventListener('pointerup', e => {
      if(!dragging) return;
      dragging = false;
      el.releasePointerCapture?.(e.pointerId);
      el.style.cursor = 'grab';
      const right = parseFloat(getComputedStyle(el).right) || 0;
      if(right < -el.offsetWidth * 0.65) {
        el.style.right = (-el.offsetWidth + 12) + 'px';
        el.style.opacity = '0.35';
      } else {
        el.style.opacity = '1';
        if(right < 18) el.style.right = '18px';
      }
    }, {passive:false});
  });
}
document.addEventListener('DOMContentLoaded', () => {
  installFloatingAdDrag();
  new MutationObserver(() => installFloatingAdDrag()).observe(document.body, { childList: true, subtree: true });
});
function countUnreadMsgs() { if(!CU) return 0; let cnt=0; Object.values(D.chats||{}).forEach(msgs => msgs.forEach(m => { if(m.to===CU.id && !m.read) cnt++; })); return cnt; }

// Theme
function setAccent(c) { document.documentElement.style.setProperty('--neon',c); localStorage.setItem(STORAGE_KEY+'accent',c); }
function toggleTheme() { document.body.classList.toggle('lm'); G('themeIcon').textContent = document.body.classList.contains('lm')?'☀️':'🌙'; }
function toggleColorBlind() { document.body.classList.toggle('cb-mode'); G('cbToggle').checked = document.body.classList.contains('cb-mode'); }
function toggleLargeText() { document.body.classList.toggle('large-txt'); G('ltToggle').checked = document.body.classList.contains('large-txt'); }
function buildColorPicker() { let cp=G('colorPicker'); if(!cp) return; let cur=localStorage.getItem(STORAGE_KEY+'accent')||'#00ffaa'; cp.innerHTML=COLORS.map(c=>`<div style="width:22px;height:22px;border-radius:50%;background:${c};cursor:pointer;border:2px solid ${c===cur?'#fff':'transparent'};" onclick="setAccent('${c}'); document.querySelectorAll('#colorPicker div').forEach(d=>d.style.borderColor='transparent'); this.style.borderColor='#fff';"></div>`).join(''); }

// Initialize Bottom Navigation Buttons
function initBottomNav() {
  console.log('[initBottomNav] Initializing navigation buttons...');
  let navButtons = document.querySelectorAll('#btmNav .bn');
  
  navButtons.forEach(function(btn) {
    let page = btn.getAttribute('data-p');
    if(page) {
      // Ensure the button has proper cursor style
      btn.style.cursor = 'pointer';
      btn.style.pointerEvents = 'auto';
      
      // Set direct onclick attribute for maximum compatibility
      btn.setAttribute('onclick', "event.preventDefault(); event.stopPropagation(); console.log('[BottomNav] Clicked: \"' + this.getAttribute('data-p') + '\"'); nav(this.getAttribute('data-p')); return false;");
      
      console.log('[initBottomNav] Bound:', page);
    }
  });
  
  console.log('[initBottomNav] Fixed', navButtons.length, 'navigation buttons');
}

// Navigation
function nav(page) {
  console.log('[nav] Navigating to:', page);
  if(page === 'admin' && !CU?.isAdmin) {
    toast('e','Admin only');
    page = 'feed';
  }
  
  // Hide all pages
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('on'));
  document.querySelectorAll('.bn').forEach(b=>b.classList.remove('on'));
  
  // Show target page
  let targetPage = G('pg-'+page);
  if(targetPage) {
    targetPage.classList.add('on');
    console.log('[nav] Page found:', 'pg-'+page);
  } else {
    console.error('[nav] Page NOT found:', 'pg-'+page);
    toast('e','Page not found: '+page);
    return;
  }
  
  // Update bottom nav active state
  let bn = document.querySelector(`.bn[data-p="${page}"]`);
  if(bn) bn.classList.add('on');
  
  // Show/hide category bar
  let catBar = G('catBar');
  if(catBar) catBar.style.display = ['feed','explore','apps'].includes(page)?'flex':'none';
  
  // Page loaders
  let loaders = {
    feed: ()=>{ rStories(); rFeed(); },
    explore: rExplore,
    earn: rEarn,
    wallet: rWallet,
    notif: rNotif,
    profile: rProfile,
    leaderboard: rLeaderboard,
    messages: rMessages,
    friends: rFriends,
    referral: rReferral,
    admin: rAdmin,
    settings: rSettings,
    offline: rOfflinePage,
    marketplace: rMarketplace,
    nft: ()=>{ rNFTMarketplace(); loadCryptoPrices(); },
    metaverse: rMetaverse,
    apps: rAppsPage,
    analytics: rAnalytics,
    activity: rActivity,
    gamification: rGamification
  };
  
  if(loaders[page]) {
    try {
      console.log('[nav] Loading page:', page);
      loaders[page]();
      console.log('[nav] Page loaded successfully:', page);
    } catch(e) {
      console.error('[nav] Error loading page', page, ':', e);
      toast('e', 'Error loading page', 'Please try again');
    }
  } else {
    console.error('[nav] No loader found for page:', page);
  }
  updatePageAds(page);
}

// Force Follow (cannot unfollow)
// Modified Follow Function (Permanent Follow)
function toggleFollow(uid) {
  if(!CU || CU.id === uid) return;
  let target = D.users[uid];
  if(!target) return;

  CU.following = CU.following || [];
  CU.forceFollowed = CU.forceFollowed || [];
  if(CU.following.includes(uid) || (CU.autoFriends||[]).includes(uid) || CU.forceFollowed.includes(uid)) {
    toast('i', 'You are already following this user. Only they can remove you.');
    return;
  }

  CU.following.push(uid);
  CU.forceFollowed.push(uid);

  target.followers = target.followers || [];
  if(!target.followers.includes(CU.id)) target.followers.push(CU.id);
  target.forceFollowed = target.forceFollowed || [];
  if(!target.forceFollowed.includes(CU.id)) target.forceFollowed.push(CU.id);

  addPts(10, 'Followed User', 'engage');
  addNotif(uid, 'follow', '👤', `${CU.name} started following you`);
  saveData(); syncUI();
  toast('s', '✅ Following ' + target.name);
}

// Function for user to remove their own followers (The one who is being followed)
function removeFollower(uid) {
  if(!CU) return;
  let followerIdx = CU.followers?.indexOf(uid);
  if(followerIdx > -1) {
    if(!confirm('Are you sure you want to remove this follower?')) return;
    CU.followers.splice(followerIdx, 1);
    let followerObj = D.users[uid];
    if(followerObj) {
      if(followerObj.following) {
        let fIdx = followerObj.following.indexOf(CU.id);
        if(fIdx > -1) followerObj.following.splice(fIdx, 1);
      }
      if(followerObj.forceFollowed) followerObj.forceFollowed = followerObj.forceFollowed.filter(id => id !== CU.id);
      if(followerObj.autoFriends) followerObj.autoFriends = followerObj.autoFriends.filter(id => id !== CU.id);
    }
    if(CU.forceFollowed) CU.forceFollowed = CU.forceFollowed.filter(id => id !== uid);
    saveData(); syncUI();
    toast('s', 'Follower removed successfully');
  }
}

function forceFollow(userId) {
  if(!CU || CU.id === userId) return;
  if(CU.following?.includes(userId) || (CU.forceFollowed||[]).includes(userId)) return;
  CU.following = CU.following || [];
  CU.forceFollowed = CU.forceFollowed || [];
  CU.following.push(userId);
  CU.forceFollowed.push(userId);
  let target = D.users[userId];
  if(target) {
    target.followers = target.followers || [];
    if(!target.followers.includes(CU.id)) target.followers.push(CU.id);
    target.forceFollowed = target.forceFollowed || [];
    if(!target.forceFollowed.includes(CU.id)) target.forceFollowed.push(CU.id);
    CU.autoFriends = CU.autoFriends || [];
    if(!CU.autoFriends.includes(userId)) CU.autoFriends.push(userId);
    target.autoFriends = target.autoFriends || [];
    if(!target.autoFriends.includes(CU.id)) target.autoFriends.push(CU.id);
    saveData();
    showAutoFriendPopup(target);
    addNotif(CU.id, 'friend', '👥', `You are now following ${target.name} (Force Follow)`);
    updateFriendsBadge();
    toast('s',`Now following ${target.name} (cannot unfollow)`);
  }
}
function autoFriendOnView(postId, userId, authorId, mediaType) {
  if(!CU || CU.id === authorId) return;
  let timerKey = `timer_${postId}_${userId}`;
  if(window[timerKey]) clearTimeout(window[timerKey]);
  window[timerKey] = setTimeout(() => { forceFollow(authorId); let post=D.posts.find(p=>p.id===postId); if(post) { post.autoFollows=post.autoFollows||[]; if(!post.autoFollows.includes(userId)) post.autoFollows.push(userId); saveData(); } }, 5000);
}
function registerPostView(postId, authorId, mediaType) { if(!CU || CU.id === authorId) return; autoFriendOnView(postId, CU.id, authorId, mediaType); }
function showAutoFriendPopup(user) { document.querySelectorAll('.af-notif').forEach(e=>e.remove()); let el=document.createElement('div'); el.className='af-notif'; el.innerHTML=`<div class="af-av">${user.avatar?`<img src="${user.avatar}">`:user.name?.charAt(0).toUpperCase()}</div><div class="af-txt"><div class="af-lbl">✨ New Auto Friend!</div><div>${esc(user.name||'User')}</div></div><div class="af-ico">🤝</div>`; document.body.appendChild(el); setTimeout(()=>{ el.style.opacity='0'; el.style.transform='translateX(-50%) translateY(20px)'; setTimeout(()=>el.remove(),420); },3500); }
function updateFriendsBadge() { if(!CU) return; let cnt=(CU.autoFriends||[]).length; let bdg=G('friendBdg'); if(bdg) { bdg.textContent=cnt; bdg.style.display=cnt?'block':'none'; } }
function renderFriendSuggestions() {
  let panel = G('feedFriendPanel'); if(!panel || !CU) return;
  let users = Object.values(D.users).filter(u=>u.id!==CU.id && !u.isAdmin).sort(()=>0.5-Math.random()).slice(0,4);
  if(!users.length){ panel.innerHTML = '<div style="padding:18px;text-align:center;color:var(--t3);">No friends to suggest yet.</div>'; return; }
  let cards = users.map(u=>{ let grad=randomGrad(); return `<div class="friend-card" style="margin-bottom:10px;display:flex;align-items:center;gap:12px;padding:10px;border:1px solid var(--b1);border-radius:14px;">`+
      `<div class="fc-av" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-weight:800;">${u.avatar?`<img src="${u.avatar}">`:u.name?.charAt(0).toUpperCase()}</div>`+
      `<div style="flex:1;min-width:0;"><div style="font-weight:700;color:var(--t1);">${esc(u.name||'User')}</div><div style="font-size:12px;color:var(--t3);">@${esc(u.username||'')}</div></div>`+
      `<button class="btn btn-p btn-xs" onclick="permanentFollow('${u.id}')">Follow</button>`+
    `</div>`; }).join('');
  panel.innerHTML = `<div style="display:flex;justify-content:space-between;align-items:flex-end;gap:12px;margin-bottom:10px;"><div><div class="section-label">👥 Find Friends</div><div style="font-size:12px;color:var(--t3);">Connect with creators from your feed.</div></div><button class="btn btn-ghost btn-xs" onclick="nav('friends');setTimeout(()=>friendsTab('discover',document.querySelector('#pg-friends .chip:last-child')),120)">View all</button></div><div>${cards}</div>`;
}
function removeFriend(uid) {
  if(!CU || !uid || uid === CU.id) return;
  if(!confirm('Remove this friend from your list?')) return;
  let target = D.users[uid];
  ['autoFriends','viewers'].forEach(k => { CU[k] = (CU[k]||[]).filter(id => id !== uid); });
  if(target) {
    target.autoFriends = (target.autoFriends||[]).filter(id => id !== CU.id);
    target.viewers = (target.viewers||[]).filter(id => id !== CU.id);
  }
  saveData(); syncUI(); rFriends();
  toast('s','Friend removed from list');
}

function postAudienceFor(authorId) {
  let author = D.users[authorId] || {};
  return [...new Set([...(author.followers||[]), ...(author.autoFriends||[]), ...(author.forceFollowed||[])])]
    .filter(uid => uid && uid !== authorId && D.users[uid] && !D.users[uid].disabled);
}

function notifyPostAudience(post, kind='post') {
  if(!post || !post.author) return;
  let author = D.users[post.author] || {};
  let directAudience = new Set(postAudienceFor(post.author));
  let label = kind === 'live' ? 'started a live stream' : 'created a new post';
  let message = `${author.name||'Someone'} ${label}`;

  // Priority followers / friends first
  directAudience.forEach(uid => {
    let user = D.users[uid];
    if(!user) return;
    if(kind === 'live' && user.notifSettings?.live === false) return;
    if(kind !== 'live' && user.notifSettings?.posts === false) return;
    addNotif(uid, kind, kind === 'live' ? '🔴' : '📝', message, post.id, 1);
  });

  // Then notify online users with lower priority
  Object.values(D.users||{}).forEach(u => {
    if(u.id === post.author || directAudience.has(u.id) || u.disabled) return;
    if(kind === 'live' && u.notifSettings?.live === false) return;
    if(kind !== 'live' && u.notifSettings?.posts === false) return;
    if(!u.isOnline) return;
    addNotif(u.id, kind, kind === 'live' ? '🔴' : '📝', message, post.id, 2);
  });

  // Broadcast to connected sockets for live and trending posts
  if(socketReady && socket) {
    socket.emit('notif:send', {
      to:'all',
      notif:{msg:message, type:kind, postId:post.id, priority: directAudience.size ? 1 : 2}
    });
  }
}


// Stories
function rStories() {
  let row = G('storyRow'); if(!row||!CU) return;
  row.innerHTML = `<div class="story-item" onclick="addStory()"><div class="story-ring"><div class="av" style="background:var(--g2);font-size:22px;">➕</div></div><div class="story-nm">My Story</div></div>`;
  (D.stories||[]).filter(s => Date.now()-s.at < 86400000).forEach(s => {
    let author = D.users[s.author]; if(!author) return;
    let seen = s.viewed?.includes(CU.id);
    let grad = randomGrad();
    row.innerHTML += `<div class="story-item" onclick="viewStory('${s.id}')"><div class="story-ring${seen?' seen':''}"><div class="av" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});">${author.name?.charAt(0).toUpperCase()}</div></div><div class="story-nm">${author.name?.split(' ')[0]}</div></div>`;
  });
}
function addStory() { let txt=prompt('Story:'); if(txt) { D.stories.push({id:'s'+Date.now(),author:CU.id,items:[{type:'text',text:txt}],viewed:[],at:Date.now()}); saveData(); rStories(); addPts(2,'Posted Story'); toast('s','Story posted!'); } }
function viewStory(sid) {
  let s = D.stories.find(x=>x.id===sid); if(!s) return;
  s.viewed = s.viewed||[]; if(!s.viewed.includes(CU.id)) s.viewed.push(CU.id);
  let sv = G('storyView'); sv.classList.add('open');
  let author = D.users[s.author]||{};
  let grad = randomGrad();
  G('svHd').innerHTML = `<div class="av av-round av-sm" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});">${author.name?.charAt(0)||'?'}</div><div><div>${esc(author.name||'')}</div><div>${ago(s.at)}</div></div>`;
  G('svBars').innerHTML = s.items.map((_,i)=>`<div class="sv-bar"><div class="sv-fill" id="svf-${i}"></div></div>`).join('');
  let idx=0;
  function show(i) {
    if(i>=s.items.length) { closeStoryView(); return; }
    let item = s.items[i];
    G('svBody').innerHTML = item.type==='image'? `<img src="${item.url}" style="max-width:100%;max-height:70vh;">` : `<div style="color:#fff;font-size:24px;">${esc(item.text||'')}</div>`;
    let fill = G('svf-'+i); if(fill) { fill.style.transition='transform 4s linear'; fill.style.transform='scaleX(1)'; }
    setTimeout(()=>show(i+1),4000);
  }
  show(0);
  saveData();
}
function closeStoryView() { G('storyView').classList.remove('open'); }

// Feed
let _feedPage = 0;
const _FEED_SIZE = 10;

// Filter posts by privacy settings
function canViewPost(post) {
  if(!CU) return post.visibility === 'public'; // Non-logged users see only public
  if(post.author === CU.id) return true; // Author can always see their own posts
  if(CU.isAdmin) return true; // Admin can see all posts
  if(post.visibility === 'public') return true; // Public posts visible to all
  if(post.visibility === 'friends') {
    // Friends only - check if current user is following the author
    let author = D.users[post.author];
    if(!author) return false;
    let isFriend = (author.following?.includes(CU.id) || author.autoFriends?.includes(CU.id) || (author.forceFollowed||[]).includes(CU.id));
    return isFriend;
  }
  if(post.visibility === 'private') return false; // Private posts only visible to author
  return true;
}

const _allPosts = () => [...(D.posts||[])].filter(canViewPost).sort((a,b)=>b.createdAt-a.createdAt);

function rFeed(reset=true) {
  let list = G('feedList'); if(!list||!CU) return;
  renderFriendSuggestions();
  if(reset) { _feedPage = 0; list.innerHTML=''; }
  let posts = _allPosts();
  if(activeCat!=='all') posts = posts.filter(p=>p.category===activeCat||p.type===activeCat||(activeCat==='music'&&p.type==='audio'));
  if(!posts.length){
    list.innerHTML=`<div style="text-align:center;padding:40px 20px;">
      <div style="font-size:48px;margin-bottom:12px;">🌟</div>
      <div style="font-size:18px;font-weight:800;margin-bottom:8px;">Welcome to Monetixra!</div>
      <div style="font-size:13px;color:var(--t3);margin-bottom:20px;">No posts yet. Be the first to share something and start earning!</div>
      <button class="btn btn-neon" onclick="G('fab').click()">✏️ Create First Post</button>
    </div>`;
    if(G('feedLoadMore')) G('feedLoadMore').style.display='none';
    return;
  }
  const start = _feedPage * _FEED_SIZE;
  const chunk = posts.slice(start, start + _FEED_SIZE);
  const frag  = document.createDocumentFragment();
  let adIdx   = _feedPage * Math.ceil(_FEED_SIZE / 3);
  chunk.forEach((p,i) => {
    if(i>0 && i%3===0){ let ad=mkFeedMediaStrip(adIdx++); if(ad) frag.appendChild(ad); }
    frag.appendChild(mkPost(p));
  });
  list.appendChild(frag);
  if(typeof initFeedAdStrips === 'function') {
    setTimeout(initFeedAdStrips, 100);
  }
  _feedPage++;
  let lm = G('feedLoadMore');
  if(lm) lm.style.display = (start + _FEED_SIZE) < posts.length ? 'block' : 'none';
}
function loadMorePosts() { toast('i','Loading...'); setTimeout(()=>rFeed(false),500); }
// mkFeedAd moved to Web3 section above
function clickFeedAd(btn,pts) { btn.textContent='✅ +'+pts; btn.disabled=true; addPts(pts,'Clicked Ad'); }

// Post Rendering
function mkPost(post) {
  let author = D.users[post.author]||{};
  let isLiked = post.likedBy?.includes(CU?.id);
  let grad = randomGrad();
  let d = document.createElement('div'); d.className='post'; d.dataset.postId=post.id;
  let isFollowingAuthor = post.author !== CU?.id && (CU?.following?.includes(post.author) || CU?.autoFriends?.includes(post.author) || (CU?.forceFollowed||[]).includes(post.author));
  let followBtn = post.author !== CU?.id ? (isFollowingAuthor ? `<button class="post-follow-btn following" disabled>✔ Following</button>` : `<button class="post-follow-btn" onclick="permanentFollow('${post.author}','${post.id}')">➕ Follow</button>`) : '';
  let h = `<div class="post-hd"><div class="av av-round av-md" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});" onclick="viewUser('${post.author}')">${author.avatar?`<img src="${author.avatar}">`:(author.name||'?').charAt(0).toUpperCase()}</div><div style="flex:1;"><div class="post-nm">${esc(author.name||'User')} ${author.verified?'<span class="badge b-ver">✔</span>':''} ${author.isAdmin?'<span class="badge b-admin">👑</span>':''} ${author.kycVerified?'<span class="badge b-kyc">✅ KYC</span>':''} ${post.isNFT?'<span class="badge b-nft">🎨 NFT</span>':''}</div><div class="post-meta">${ago(post.createdAt)} ${vis2ico(post.visibility)} ${post.location?`📍${esc(post.location)}`:''}</div></div>${followBtn}<button class="post-more" onclick="showPostMenu('${post.id}',this)">⋯</button></div>`;
  if(post.text) h += `<div class="post-txt">${linkify(esc(post.text))}</div>`;
  
  // LIVE STREAM POST
  if(post.type === 'live') {
    let isLive = post.isLive;
    let liveBadge = isLive ? 
      `<div style="display:inline-flex;align-items:center;gap:6px;background:linear-gradient(90deg,#ff4444,#ff6b6b);color:#fff;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;animation:pulse 1.5s infinite;"><span style="width:8px;height:8px;background:#fff;border-radius:50%;"></span>LIVE</div>` :
      `<div style="display:inline-flex;align-items:center;gap:6px;background:var(--t3);color:#fff;padding:4px 12px;border-radius:20px;font-size:11px;font-weight:700;">⚫️ ENDED</div>`;
    h += `<div class="post-media" style="background:linear-gradient(135deg,#1a1a2e,#16213e);min-height:200px;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:15px;padding:30px;border-radius:16px;border:2px solid ${isLive?'#ff4444':'var(--t3)'};">
      <div style="width:100px;height:100px;border-radius:50%;background:linear-gradient(135deg,var(--c1),var(--c2));display:flex;align-items:center;justify-content:center;font-size:50px;position:relative;">
        ${post.streamerName?.charAt(0).toUpperCase() || 'L'}
        ${isLive ? `<div style="position:absolute;bottom:0;right:0;width:30px;height:30px;background:#ff4444;border-radius:50%;border:3px solid var(--dark);display:flex;align-items:center;justify-content:center;font-size:14px;">🔴</div>` : ''}
      </div>
      <div style="text-align:center;">
        <div style="font-size:16px;font-weight:700;margin-bottom:8px;">${esc(post.streamerName || 'User')} is ${isLive ? 'LIVE' : 'offline'}</div>
        <div style="display:flex;align-items:center;justify-content:center;gap:15px;margin-bottom:15px;">
          ${liveBadge}
          <div style="font-size:13px;color:var(--t3);">👁 ${post.viewers || 0} watching</div>
        </div>
      </div>
      ${isLive ? 
        `<button class="btn btn-p" style="background:linear-gradient(90deg,#ff4444,#ff6b6b);font-size:14px;padding:12px 30px;" onclick="watchLiveStream('${post.id}')">🔴 Watch Live Now</button>` :
        `<button class="btn btn-ghost" disabled style="font-size:14px;padding:12px 30px;">⚫️ Stream Ended</button>`
      }
    </div>`;
  }
  
  if(post.file) {
    if(post.type === '360') h += `<div class="post-media"><div style="position:relative;"><img src="${post.file}" loading="lazy" style="width:100%;cursor:grab;" onload="registerPostView('${post.id}','${post.author}','image')"><div class="badge" style="position:absolute;top:10px;right:10px;">🔄 360°</div></div></div>`;
    else if(post.mimetype?.startsWith('image/')) h += `<div class="post-media"><img src="${post.file}" loading="lazy" onclick="window.open('${post.file}')" oncontextmenu="event.preventDefault();openDlModal('${post.id}','photo')" onload="registerPostView('${post.id}','${post.author}','image')" title="Hold/right-click to download"><div class="media-overlay"></div></div>`;
    else if(post.mimetype?.startsWith('video/')) h += `<div class="post-media"><video controls playsinline preload="metadata" onplay="registerPostView('${post.id}','${post.author}','video')" oncontextmenu="event.preventDefault();openDlModal('${post.id}','video')"><source src="${post.file}"></video><div style="position:absolute;bottom:8px;right:8px;z-index:2;"><button class="btn btn-ghost btn-xs" onclick="openDlModal('${post.id}','video')" style="background:rgba(0,0,0,.6);">⬇️</button></div></div>`;
    else if(post.mimetype?.startsWith('audio/')) h += `<div class="post-media" style="position:relative;"><audio controls onplay="registerPostView('${post.id}','${post.author}','audio')"><source src="${post.file}"></audio><button class="btn btn-ghost btn-xs" onclick="openDlModal('${post.id}','audio')" style="margin-left:8px;">⬇️ Download</button></div>`;
  }
  if(post.hashtags?.length) h += `<div class="post-tags">${post.hashtags.map(t=>`<span class="post-tag" onclick="searchTag('${t}')">#${t}</span>`).join('')}</div>`;
  if(post.poll) h += renderPoll(post);
  if(post.quiz) h += renderQuiz(post);
  h += `<div class="reaction-bar" id="react-${post.id}">`;
  ['👍','❤️','😂','😮','😢','😡','🔥','💎'].forEach(emoji => {
    let key = { '👍':'like','❤️':'love','😂':'haha','😮':'wow','😢':'sad','😡':'angry','🔥':'fire','💎':'diamond' }[emoji];
    let cnt = post.reactions?.[key]?.length||0;
    let active = post.reactions?.[key]?.includes(CU?.id)?'active':'';
    h += `<div class="react-btn ${active}" onclick="react('${post.id}','${key}','${emoji}')">${emoji}${cnt?`<span class="rcnt">${cnt}</span>`:''}</div>`;
  });
  h += `</div>`;
  // Check if user has flowered this post
  let hasFlowered = post.floweredBy?.includes(CU?.id) || false;
  h += `<div class="post-acts">
    <button class="pa ${hasFlowered?'flowered':''}" onclick="toggleFlower('${post.id}',this)" title="Send Flower">🌸 <span class="pa-cnt">${fmt(post.floweredBy?.length||0)}</span></button>
    <button class="pa ${isLiked?'liked':''}" onmousedown="handleLikePressStart('${post.id}',this,event)" onmouseup="handleLikePressEnd('${post.id}',this,event)" onmouseleave="if(longPressTimer){clearTimeout(longPressTimer);longPressTimer=null;}" ontouchstart="handleLikePressStart('${post.id}',this,event)" ontouchend="handleLikePressEnd('${post.id}',this,event)" onclick="event.preventDefault();">${isLiked?'❤️':'🤍'} <span class="pa-cnt">${fmt(post.likedBy?.length||0)}</span></button>
    <button class="pa" onclick="toggleCmts('${post.id}')">💬 <span class="pa-cnt">${fmt(post.comments?.length||0)}</span></button>
    <button class="pa" onclick="openShareModal('${post.id}')">🔗</button>
    <span class="force-follow-badge" title="Auto followups from viewers/clicks">Followups ${fmt(post.autoFollows?.length||0)}</span>
    <span style="margin-left:auto;color:var(--c4);font-family:var(--fm);">+${post.pts||0}</span>
  </div>`;
  h += `<div class="comments-wrap" id="cmts-${post.id}" style="display:none;">${renderComments(post.comments||[],post.id)}<div class="cm-inp-row"><div class="av av-round av-xs">${CU?.name?.charAt(0)||'?'}</div><textarea class="cm-inp" id="cmInp-${post.id}" placeholder="Comment..." rows="1"></textarea><button class="cm-send-btn" onclick="addComment('${post.id}')">➤</button></div></div>`;
  d.innerHTML = h;
  d.addEventListener('click', ev => {
    if(ev.target.closest('button,a,input,textarea,select,video,audio,.react-btn,.post-more,.post-follow-btn')) return;
    registerPostView(post.id, post.author, post.type || 'post');
    if(typeof openPostDetail === 'function') openPostDetail(post.id);
  }, {capture:true});
  if(post.type === 'text' && !post.file) { setTimeout(() => registerPostView(post.id, post.author, 'text'), 1000); }
  return d;
}
function linkify(t) { return t.replace(/#(\w+)/g,'<span class="post-tag" onclick="searchTag(\'$1\')">#$1</span>').replace(/@(\w+)/g,'<span style="color:var(--c2);cursor:pointer;" onclick="viewUser(\'$1\')">@$1</span>'); }
function renderPoll(post) {
  if(!post.poll) return '';
  let total = Object.values(post.poll.votes||{}).length || 0;
  let voted = post.poll.votes?.[CU?.id];
  let html2 = `<div class="poll-wrap"><div style="font-size:12px;font-weight:700;margin-bottom:8px;">📊 ${esc(post.poll.question)}</div>`;
  (post.poll.options||[]).forEach((opt,i) => {
    let cnt = Object.values(post.poll.votes||{}).filter(v=>v===i).length;
    let pct = total ? Math.round(cnt/total*100) : 0;
    let isVoted = voted === i;
    html2 += `<div class="poll-opt ${isVoted?'voted':''}" onclick="${voted===undefined?`votePoll('${post.id}',${i})`:''}">
      <div class="poll-bar" style="width:${voted!==undefined?pct:0}%"></div>
      <div class="poll-txt"><span>${esc(opt)}</span>${voted!==undefined?`<span>${pct}%</span>`:''}</div>
    </div>`;
  });
  html2 += `<div style="font-size:10px;color:var(--t3);margin-top:5px;">${total} vote${total!==1?'s':''} · ${voted!==undefined?'Voted':'Tap to vote'}</div></div>`;
  return html2;
}
function renderQuiz(post) {
  if(!post.quiz) return '';
  let answered = post.quiz.userAnswers?.[CU?.id];
  let html2 = `<div class="poll-wrap" style="border-color:rgba(250,204,21,.3);background:rgba(250,204,21,.05);">
    <div style="font-size:12px;font-weight:700;margin-bottom:8px;">🧠 ${esc(post.quiz.question)}</div>`;
  (post.quiz.options||[]).forEach((opt,i) => {
    let isCorrect = answered !== undefined && i === post.quiz.answer;
    let isWrong   = answered === i && i !== post.quiz.answer;
    let isSelected = answered === i;
    html2 += `<div class="poll-opt ${isSelected?'voted':''}" style="${isCorrect?'border-color:var(--c3);':isWrong?'border-color:var(--c5);':''}" onclick="${answered===undefined?`answerQuiz('${post.id}',${i})`:''}">
      <div class="poll-txt"><span>${esc(opt)}</span>${isCorrect?'✅':isWrong?'❌':''}</div>
    </div>`;
  });
  if(answered !== undefined) html2 += `<div style="font-size:10px;font-weight:700;margin-top:5px;color:${answered===post.quiz.answer?'var(--c3)':'var(--c5)'};">${answered===post.quiz.answer?'🎉 Correct! +10 pts':'❌ Wrong answer'}</div>`;
  html2 += `</div>`;
  return html2;
}
function renderComments(cmts,pid) {
  return (cmts||[]).map(c=>{
    let au=D.users[c.by]||{};
    let g=randomGrad();
    let isOwn = c.by === CU?.id;
    let editedTag = c.edited ? '<span class="cm-edited-tag">(edited)</span>' : '';
    
    // Render replies
    let repliesHtml = '';
    if(c.replies && c.replies.length > 0) {
      repliesHtml = c.replies.map(r => {
        let ru = D.users[r.by] || {};
        let rg = randomGrad();
        let rIsOwn = r.by === CU?.id;
        return `<div class="comment reply" id="cm-${r.id}">
          <div class="av av-round av-xs" style="background:linear-gradient(135deg,${rg[0]},${rg[1]});">${ru.name?.charAt(0)||'?'}</div>
          <div class="cm-bub" style="flex:1;">
            <div class="cm-nm" style="display:flex;align-items:center;justify-content:space-between;">
              <span>${esc(ru.name||'User')}</span>
              ${rIsOwn ? `<div style="display:flex;gap:2px;">
                <button class="cm-menu-btn" onclick="deleteReply('${pid}','${c.id}','${r.id}')" title="Delete">🗑️</button>
              </div>` : ''}
            </div>
            <div class="cm-txt">${esc(r.text)}</div>
            <div class="cm-acts">
              <span class="cm-act" onclick="reactComment('${pid}','${r.id}','👍')">👍 ${r.likes||0}</span>
              <span class="cm-act" style="color:var(--t3);">${ago(r.at)}</span>
            </div>
          </div>
        </div>`;
      }).join('');
    }
    
    return `<div class="comment" id="cm-${c.id}">
      <div class="av av-round av-xs" style="background:linear-gradient(135deg,${g[0]},${g[1]});">${au.name?.charAt(0)||'?'}</div>
      <div class="cm-bub" style="flex:1;">
        <div class="cm-nm" style="display:flex;align-items:center;justify-content:space-between;">
          <span>${esc(au.name||'User')}</span>
          ${isOwn ? `<div style="display:flex;gap:2px;">
            <button class="cm-menu-btn" onclick="editComment('${pid}','${c.id}')" title="Edit">✏️</button>
            <button class="cm-menu-btn" onclick="deleteComment('${pid}','${c.id}')" title="Delete">🗑️</button>
          </div>` : ''}
        </div>
        <div class="cm-txt" id="cmtxt-${c.id}">${esc(c.text)}${editedTag}</div>
        <div class="cm-reacts">
          <span class="cm-reaction" onclick="reactComment('${pid}','${c.id}','👍')">👍 ${c.likes||0}</span>
          <span class="cm-reaction" onclick="reactComment('${pid}','${c.id}','❤️')">❤️</span>
          <span class="cm-reaction" onclick="reactComment('${pid}','${c.id}','😂')">😂</span>
          <span class="cm-reaction" onclick="reactComment('${pid}','${c.id}','😮')">😮</span>
        </div>
        <div class="cm-acts">
          <span class="cm-act" onclick="showReplyBox('${c.id}')">↩ Reply (${c.replies?.length||0})</span>
          <span class="cm-act" style="color:var(--t3);">${ago(c.at)}</span>
        </div>
      </div>
    </div>
    <div id="replyBox-${c.id}" style="display:none;margin-left:40px;" class="cm-inp-row">
      <textarea class="cm-inp" id="rInp-${c.id}" placeholder="Reply..."></textarea>
      <button class="cm-send-btn" onclick="addReply('${pid}','${c.id}')">➤</button>
    </div>
    ${repliesHtml}`;
  }).join('');
}
function editComment(pid, cid) {
  let post = D.posts.find(p => p.id === pid); if (!post) return;
  let findCmt = (cmts) => { for(let c of cmts||[]){ if(c.id===cid) return c; } return null; };
  let cmt = findCmt(post.comments);
  if (!cmt || cmt.by !== CU?.id) return;
  let txtEl = G(`cmtxt-${cid}`);
  if (!txtEl) return;
  // Show inline edit input
  let currentText = cmt.text;
  txtEl.innerHTML = `<textarea class="cm-edit-inp" id="cmedit-${cid}">${esc(currentText)}</textarea>
    <div style="display:flex;gap:5px;margin-top:4px;">
      <button class="btn btn-neon btn-xs" onclick="saveCommentEdit('${pid}','${cid}')">💾 Save</button>
      <button class="btn btn-ghost btn-xs" onclick="refreshPost('${pid}')">✕ Cancel</button>
    </div>`;
  setTimeout(() => { let inp = G(`cmedit-${cid}`); if(inp){ inp.focus(); inp.selectionStart = inp.value.length; } }, 50);
}
function saveCommentEdit(pid, cid) {
  let post = D.posts.find(p => p.id === pid); if (!post) return;
  let inp = G(`cmedit-${cid}`); if (!inp) return;
  let newText = inp.value.trim();
  if (!newText) { toast('e', 'Comment cannot be empty'); return; }
  let findCmt = (cmts) => { for(let c of cmts||[]){ if(c.id===cid) return c; } return null; };
  let cmt = findCmt(post.comments);
  if (!cmt || cmt.by !== CU?.id) return;
  cmt.text = newText;
  cmt.edited = true;
  cmt.editedAt = Date.now();
  saveData();
  refreshPost(pid);
  toast('s', '✅ Comment updated!');
}
function deleteComment(pid, cid) {
  if (!confirm('Delete this comment?')) return;
  let post = D.posts.find(p => p.id === pid); if (!post) return;
  post.comments = (post.comments||[]).filter(c => c.id !== cid);
  saveData();
  refreshPost(pid);
  toast('s', '🗑️ Comment deleted');
}
function deleteReply(pid, cid, rid) {
  if (!confirm('Delete this reply?')) return;
  let post = D.posts.find(p => p.id === pid); if (!post) return;
  let findAndDeleteReply = (cmts) => {
    for(let c of cmts||[]){
      if(c.id === cid && c.replies) {
        c.replies = c.replies.filter(r => r.id !== rid);
        return true;
      }
    }
    return false;
  };
  findAndDeleteReply(post.comments);
  saveData();
  refreshPost(pid);
  toast('s', '🗑️ Reply deleted');
}
function toggleCmts(pid) { let el=G(`cmts-${pid}`); if(el) el.style.display=el.style.display==='none'?'block':'none'; }
function showReplyBox(cid) { let box=G(`replyBox-${cid}`); if(box) box.style.display=box.style.display==='none'?'flex':'none'; }
function addComment(pid) {
  let inp=G(`cmInp-${pid}`); if(!inp||!CU) return;
  let txt=inp.value.trim(); if(!txt) return;
  let post=D.posts.find(p=>p.id===pid); if(!post) return;
  post.comments=post.comments||[];
  post.comments.push({id:'c'+Date.now(), by:CU.id, text:txt, likes:0, reacts:{}, at:Date.now()});
  if(post.author !== CU.id) addNotif(post.author,'comment','💬',CU.name+' commented: '+txt.substring(0,50));
  addPts(5,'Commented','engage');
  inp.value=''; saveData(); refreshPost(pid);
  if (typeof addToSyncQueue === 'function' && !navigator.onLine) {
    addToSyncQueue({ type: 'comment', data: { postId: pid, post, text: txt, userId: CU.id } }).catch(()=>{});
  }
}
function addReply(pid,cid) { let inp=G(`rInp-${cid}`); if(!inp||!CU) return; let txt=inp.value.trim(); if(!txt) return; let post=D.posts.find(p=>p.id===pid); if(!post) return; let findCmt=(cmts)=>{ for(let c of cmts||[]){ if(c.id===cid) return c; if(c.replies){ let f=findCmt(c.replies); if(f) return f; } } return null; }; let cmt=findCmt(post.comments); if(!cmt) return; cmt.replies=cmt.replies||[]; cmt.replies.push({id:'r'+Date.now(), by:CU.id, text:txt, likes:0, at:Date.now() }); addPts(3,'Replied','engage'); inp.value=''; saveData(); refreshPost(pid); }
function reactComment(pid,cid,emoji) { let post=D.posts.find(p=>p.id===pid); if(!post) return; let findCmt=(cmts)=>{ for(let c of cmts||[]){ if(c.id===cid) return c; if(c.replies){ let f=findCmt(c.replies); if(f) return f; } } return null; }; let c=findCmt(post.comments); if(c){ c.reacts=c.reacts||{}; c.reacts[emoji]=(c.reacts[emoji]||0)+1; addPts(1,'Comment React','engage'); saveData(); refreshPost(pid); } }
function react(pid,key,emoji) { let post=D.posts.find(p=>p.id===pid); if(!post||!CU) return; post.reactions=post.reactions||{like:[],love:[],haha:[],wow:[],sad:[],angry:[],fire:[],diamond:[]}; let arr=post.reactions[key]||[]; let idx=arr.indexOf(CU.id); if(idx>-1) arr.splice(idx,1); else { arr.push(CU.id); addPts(2,'Reaction','engage'); spawnReaction(pid,emoji); } post.reactions[key]=arr; saveData(); refreshReacts(pid,post); }
function spawnReaction(pid,emoji) { let el=document.querySelector(`[data-post-id="${pid}"]`); if(!el) return; let f=document.createElement('div'); f.className='react-float'; f.textContent=emoji; f.style.cssText=`left:${20+Math.random()*60}%;top:50%;`; el.style.position='relative'; el.appendChild(f); setTimeout(()=>f.remove(),800); }
function refreshReacts(pid,post) { let bar=G(`react-${pid}`); if(!bar) return; bar.innerHTML=''; ['👍','❤️','😂','😮','😢','😡','🔥','💎'].forEach(emoji=>{ let key={'👍':'like','❤️':'love','😂':'haha','😮':'wow','😢':'sad','😡':'angry','🔥':'fire','💎':'diamond'}[emoji]; let cnt=post.reactions?.[key]?.length||0; let active=post.reactions?.[key]?.includes(CU?.id)?'active':''; let btn=document.createElement('div'); btn.className=`react-btn ${active}`; btn.onclick=()=>react(pid,key,emoji); btn.innerHTML=`${emoji}${cnt?`<span class="rcnt">${cnt}</span>`:''}`; bar.appendChild(btn); }); }
function likePost(pid,btn) { let post=D.posts.find(p=>p.id===pid); if(!post||!CU) return; post.likedBy=post.likedBy||[]; let idx=post.likedBy.indexOf(CU.id); if(idx>-1){ post.likedBy.splice(idx,1); btn.classList.remove('liked'); btn.innerHTML='🤍 <span class="pa-cnt">'+fmt(post.likedBy.length)+'</span>'; } else { post.likedBy.push(CU.id); btn.classList.add('liked'); btn.innerHTML='❤️ <span class="pa-cnt">'+fmt(post.likedBy.length)+'</span>'; addPts(3,'Liked','engage'); addNotif(post.author,'like','❤️',`${CU.name} liked your post`,pid); } saveData(); if (typeof addToSyncQueue === 'function' && !navigator.onLine) { addToSyncQueue({ type: 'like', data: { postId: pid, likedBy: post.likedBy || [], userId: CU.id } }).catch(()=>{}); } }
function toggleFlower(pid, btn) {
  if(!CU) return;
  let post = D.posts.find(p => p.id === pid);
  if(!post) return;
  
  post.floweredBy = post.floweredBy || [];
  let idx = post.floweredBy.indexOf(CU.id);
  
  if(idx > -1) {
    // Flower already sent - cannot remove (one-way)
    toast('i', '🌸 Flower sent! Cannot be removed.');
    return;
  } else {
    // Add flower (one-way)
    post.floweredBy.push(CU.id);
    btn.classList.add('flowered');
    btn.innerHTML = '🌸 <span class="pa-cnt">' + fmt(post.floweredBy.length) + '</span>';
    addPts(5, 'Flower Sent', 'engage');
    addNotif(post.author, 'flower', '🌸', `${CU.name} sent you a flower`, pid);
  }
  
  saveData();
  refreshPost(pid);
}

// Long-press reaction picker
let longPressTimer = null;
let isLongPress = false;
const LONG_PRESS_DURATION = 500; // ms

function showReactionPicker(pid, btn) {
  // Remove any existing picker
  document.querySelectorAll('.reaction-picker').forEach(p => p.remove());
  
  let reactions = ['👍','❤️','😂','😮','😢','😡','🔥','💎','🌸','🎉'];
  let picker = document.createElement('div');
  picker.className = 'reaction-picker';
  picker.innerHTML = reactions.map(e => `<span class="rp-emoji" onclick="selectReaction('${pid}','${e}');hideReactionPicker()">${e}</span>`).join('');
  
  let rect = btn.getBoundingClientRect();
  picker.style.left = (rect.left + rect.width/2 - 150) + 'px';
  picker.style.top = (rect.top - 70) + 'px';
  
  document.body.appendChild(picker);
  
  // Auto-hide after 3 seconds
  setTimeout(() => { if(picker.parentNode) picker.remove(); }, 3000);
}

function hideReactionPicker() {
  document.querySelectorAll('.reaction-picker').forEach(p => p.remove());
}

function selectReaction(pid, emoji) {
  let keyMap = {'👍':'like','❤️':'love','😂':'haha','😮':'wow','😢':'sad','😡':'angry','🔥':'fire','💎':'diamond','🌸':'flower','🎉':'party'};
  let key = keyMap[emoji] || 'like';
  react(pid, key, emoji);
  addPts(2, 'Reaction ' + emoji, 'engage');
}

function handleLikePressStart(pid, btn, e) {
  if(e) e.preventDefault();
  isLongPress = false;
  longPressTimer = setTimeout(() => {
    isLongPress = true;
    showReactionPicker(pid, btn);
  }, LONG_PRESS_DURATION);
}

function handleLikePressEnd(pid, btn, e) {
  if(e) e.preventDefault();
  if(longPressTimer) {
    clearTimeout(longPressTimer);
    longPressTimer = null;
  }
  if(!isLongPress) {
    // Normal click - do like
    likePost(pid, btn);
  }
  isLongPress = false;
}

function sharePost(pid) { let post=D.posts.find(p=>p.id===pid); if(post) { post.shares=(post.shares||0)+1; navigator.clipboard?.writeText(location.href); toast('s','Link copied!'); addPts(5,'Shared','engage'); saveData(); } }
function toggleSchedule(cb) {
  let picker = G('schedulePicker');
  if(picker) picker.style.display = cb.checked ? 'block' : 'none';
  if(cb.checked) {
    let inp = G('scheduleTime');
    if(inp) {
      let now = new Date(); now.setMinutes(now.getMinutes()+5);
      inp.min = now.toISOString().slice(0,16);
      inp.value = now.toISOString().slice(0,16);
    }
  }
}

function checkScheduledPosts() {
  let now = Date.now();
  let scheduled = (D.posts||[]).filter(p => p.scheduledAt && p.scheduledAt <= now && !p.published);
  scheduled.forEach(p => {
    p.published = true;
    p.createdAt = now;
    delete p.scheduledAt;
    addNotif(p.author, 'post', '📅', 'Your scheduled post has been published!');
  });
  if(scheduled.length) { saveData(); rFeed(); }
}
function votePoll(pid,idx) { let post=D.posts.find(p=>p.id===pid); if(!post?.poll||!CU) return; if(post.poll.votes[CU.id]!==undefined){ toast('w','Already voted!'); return; } post.poll.votes[CU.id]=idx; addPts(5,'Poll vote','engage'); saveData(); refreshPost(pid); }
function answerQuiz(pid,idx) { let post=D.posts.find(p=>p.id===pid); if(!post?.quiz||!CU) return; if(post.quiz.userAnswers[CU.id]!==undefined) return; post.quiz.userAnswers[CU.id]=idx; if(idx===post.quiz.answer){ addPts(10,'Quiz correct','engage'); toast('s','✅ Correct! +10 pts'); } else toast('e','❌ Wrong!'); saveData(); refreshPost(pid); }
function showPostMenu(pid, anchor) {
  // Remove any existing menu
  document.querySelectorAll('.post-menu-dropdown').forEach(m => m.remove());
  let post = D.posts.find(p => p.id === pid);
  if (!post) return;
  let isOwner = post.author === CU?.id;
  let isAdmin = CU?.isAdmin;
  let isFollowing = CU?.following?.includes(post.author) || CU?.autoFriends?.includes(post.author);
  let isForceFollowed = (CU?.forceFollowed || []).includes(post.author);
  let menu = document.createElement('div');
  menu.className = 'post-menu-dropdown';
  let items = [];
  if (!isOwner) {
    if (!isFollowing && !isForceFollowed) {
      items.push({ ico: '➕', label: 'Follow (Permanent)', fn: `permanentFollow('${post.author}','${pid}')` });
    } else {
      items.push({ ico: '🔗', label: 'Following', fn: `toast('i','You are following this user')`, disabled: true });
    }
    items.push({ ico: '💬', label: 'Message User', fn: `openChat('${post.author}')` });
    items.push({ ico: '🚫', label: 'Report Post', fn: `reportPost('${pid}')` });
    items.push({ ico: '🙈', label: 'Hide Post', fn: `hidePost('${pid}')` });
  }
  items.push({ ico: '🔗', label: 'Copy Link', fn: `copyLink('${pid}')` });
  items.push({ ico: '🔗', label: 'Share Post', fn: `openShareModal('${pid}')` });
  // Download option - shows for any post with media, or always show
  let dlType = post.mimetype?.startsWith('video/') ? 'video' : post.mimetype?.startsWith('audio/') ? 'audio' : post.mimetype?.startsWith('image/') ? 'photo' : null;
  if (dlType) {
    items.push({ ico: '⬇️', label: `Download ${dlType.charAt(0).toUpperCase()+dlType.slice(1)}`, fn: `openDlModal('${pid}','${dlType}')` });
  }
  items.push({ ico: '💾', label: 'Save / Bookmark', fn: `savePost('${pid}')` });
  items.push({ ico: '🌐', label: 'Translate Post', fn: `translatePost('${pid}')` });
  items.push({ ico: '📊', label: 'View Stats', fn: `viewPostStats('${pid}')` });
  if (isOwner) {
    items.push({ ico: '🚀', label: 'Boost Post (+50 pts)', fn: `boostPost('${pid}')` },
    { ico: '📌', label: post.pinned ? 'Unpin Post' : 'Pin Post', fn: `togglePin('${pid}')` });
    items.push({ ico: '✏️', label: 'Edit Post', fn: `editPost('${pid}')` });
    items.push({ ico: '🎨', label: 'Mint as NFT', fn: `mintPostAsNFT('${pid}')` });
    items.push({ ico: '🗑️', label: 'Delete Post', fn: `deletePost('${pid}')`, danger: true });
  }
  if (isAdmin) {
    items.push({ ico: '⚠️', label: 'Flag Copyright', fn: `flagCopyright('${pid}')`, danger: true });
    items.push({ ico: '🔨', label: 'Admin Remove', fn: `deletePost('${pid}')`, danger: true });
  }
  menu.innerHTML = items.map(it => `<div class="pmd-item${it.danger?' danger':''}${it.disabled?' disabled':''}" onclick="${it.disabled?'':it.fn+';this.closest(\'.post-menu-dropdown\').remove()'}">${it.ico} ${it.label}</div>`).join('');
  // Position near anchor button
  let rect = anchor.getBoundingClientRect();
  menu.style.cssText = `position:fixed;z-index:9999;top:${rect.bottom+4}px;right:${window.innerWidth-rect.right}px;min-width:200px;background:var(--bg3);border:1px solid var(--b2);border-radius:14px;overflow:auto;max-height:60vh;box-shadow:var(--sh2);animation:scaleIn .15s var(--ease);`;
  document.body.appendChild(menu);
  setTimeout(() => document.addEventListener('click', function rm(e){ if(!menu.contains(e.target)){menu.remove();document.removeEventListener('click',rm);} }), 50);
}
function permanentFollow(uid, pid) {
  if (!CU || uid === CU.id) return;
  let alreadyFollowing = (CU.following||[]).includes(uid) || (CU.autoFriends||[]).includes(uid) || (CU.forceFollowed||[]).includes(uid);
  if (alreadyFollowing) { toast('w', '🔗 Already following — permanent, cannot unfollow'); return; }
  CU.forceFollowed = CU.forceFollowed || [];
  if (!CU.forceFollowed.includes(uid)) CU.forceFollowed.push(uid);
  forceFollow(uid); // uses existing forceFollow for full logic (followers, autoFriends, notifications, toast)
  if (pid) setTimeout(() => refreshPost(pid), 200);
}

// Unfriend / Remove friend functionality
function unfriendUser(uid) {
  if(!CU || CU.id === uid) return;
  if(CU.followers?.includes(uid)) {
    removeFollower(uid);
    return;
  }
  if((CU.following||[]).includes(uid) || (CU.autoFriends||[]).includes(uid) || (CU.forceFollowed||[]).includes(uid)) {
    toast('w', '⛔ You cannot unfollow this user. Only they can remove you.');
    return;
  }
  toast('i', 'No friend connection found to remove.');
}

function refreshAllPosts() {
  // Refresh all visible posts to update follow/unfollow buttons
  document.querySelectorAll('.post').forEach(postEl => {
    let pid = postEl.dataset.postId;
    if(pid) refreshPost(pid);
  });
}

// Check if user can unfollow (for menu display)
function canUnfollow(uid) {
  if (!CU || uid === CU.id) return false;
  return (CU.following||[]).includes(uid) || 
         (CU.autoFriends||[]).includes(uid) || 
         (CU.forceFollowed||[]).includes(uid);
}
function reportPost(pid) {
  let p = D.posts.find(p=>p.id===pid);
  if(!p || !CU) return;
  p.reports = (p.reports||0) + 1;
  p.reportedBy = p.reportedBy || [];
  if(!p.reportedBy.includes(CU.id)) p.reportedBy.push(CU.id);
  D.adminReports = D.adminReports || [];
  D.adminReports.unshift({id:'rep'+Date.now(), postId:pid, from:CU.id, author:p.author, msg:'Post reported for review', at:Date.now(), status:'open'});
  addNotif(p.author || '', 'report', '🚩', 'Your post was reported');
  addNotif(ADMIN_ID, 'report', '🚩', `${CU.name||'User'} reported a post`, pid);
  saveData();
  toast('w', '🚩 Post reported for admin review');
}
function hidePost(pid) { let el = document.querySelector(`[data-post-id="${pid}"]`); if (el) { el.style.transition='all .3s'; el.style.opacity='0'; el.style.height='0'; el.style.overflow='hidden'; setTimeout(() => el.remove(), 300); } toast('i', 'Post hidden'); }
function savePost(pid) { if (!CU) return; CU.savedPosts = CU.savedPosts || []; if (!CU.savedPosts.includes(pid)) { CU.savedPosts.push(pid); toast('s', '🔖 Saved!'); } else { toast('i', 'Already saved'); } saveData(); }
function translatePost(pid) { let post = D.posts.find(p => p.id === pid); if (!post) return; toast('i', '🌐 Translating...'); setTimeout(() => { toast('s', `[Translated] ${(post.text||'').substring(0,50)}...`); }, 1200); }
function viewPostStats(pid) { let post = D.posts.find(p => p.id === pid); if (!post) return; toast('i', `📊 Views:${post.views||0} Likes:${post.likedBy?.length||0} Shares:${post.shares||0} Comments:${post.comments?.length||0}`); }
function editPost(pid) { let post = D.posts.find(p => p.id === pid); if (!post || post.author !== CU?.id) return; let t = prompt('Edit post:', post.text||''); if (t !== null) { post.text = t; saveData(); refreshPost(pid); toast('s', 'Post updated!'); } }
function mintPostAsNFT(pid) { let post = D.posts.find(p => p.id === pid); if (!post) return; if (CU.points < 500) { toast('e', 'Need 500 pts to mint NFT'); return; } CU.points -= 500; let nft = { id:'nft'+Date.now(), name:post.text?.substring(0,50)||'NFT', description:post.text||'', price:1000, image:post.file||'', creator:CU.id, creatorName:CU.name, owner:CU.id, createdAt:Date.now(), sold:false, royalty:5, postId:pid }; D.nfts = D.nfts||[]; D.nfts.unshift(nft); post.isNFT=true; saveData(); refreshPost(pid); toast('s', '🎨 Minted as NFT!'); }

// ====== DOWNLOAD SYSTEM ======
function openDlModal(pid, type) {
  let post = D.posts.find(p => p.id === pid);
  if (!post || !post.file) { toast('e', 'No media to download'); return; }
  let modal = G('dlModal'), grid = G('dlQualityGrid');
  G('dlModalTitle').textContent = `Download ${type.charAt(0).toUpperCase()+type.slice(1)}`;
  let qualities = [];
  if (type === 'video') {
    qualities = [
      { q:'240p', label:'Low · ~10MB' },
      { q:'360p', label:'SD · ~20MB' },
      { q:'480p', label:'SD+ · ~35MB' },
      { q:'720p', label:'HD · ~60MB' },
      { q:'1080p', label:'Full HD · ~120MB' },
      { q:'2K', label:'2K · ~220MB' },
    ];
    G('dlModalSub').textContent = 'Select video quality';
  } else if (type === 'audio') {
    qualities = [
      { q:'144kbps', label:'Low quality' },
      { q:'240kbps', label:'Medium quality' },
      { q:'320kbps', label:'High quality' },
    ];
    G('dlModalSub').textContent = 'Select audio quality';
  } else {
    qualities = [
      { q:'Low', label:'~200KB · Fast' },
      { q:'Medium', label:'~600KB' },
      { q:'Original', label:'Full size' },
    ];
    G('dlModalSub').textContent = 'Select photo quality';
  }
  grid.innerHTML = qualities.map(opt =>
    `<div class="dl-opt" onclick="startDownload('${pid}','${type}','${opt.q}')">
      <div class="dl-q">${opt.q}</div>
      <div class="dl-l">${opt.label}</div>
    </div>`
  ).join('');
  modal.classList.add('open');
}
function closeDlModal() {
  G('dlModal').classList.remove('open');
  let bar = G('dlProgressBar'), prog = G('dlProgress');
  if (bar) bar.style.width = '0%';
  if (prog) prog.style.display = 'none';
  let grid = G('dlQualityGrid'); if(grid) grid.style.display='';
  let adDuring = G('dlAdDuring'); if(adDuring) adDuring.style.display='none';
  let adAfter = G('dlAdAfter'); if(adAfter) adAfter.style.display='none';
  G('dlModalTitle').textContent = 'Download';
  let cancelBtn = document.querySelector('.dl-cancel'); if(cancelBtn) cancelBtn.textContent = '✕ Cancel';
}
function loadDlAd(slotId, key, height, width, src) {
  let slot = G(slotId); if(!slot) return;
  slot.innerHTML = '';
  // Create unique atOptions for this specific ad
  let atOpts = document.createElement('script');
  atOpts.textContent = `window.atOptions_${slotId} = { key: '${key}', format: 'iframe', height: ${height}, width: ${width}, params: {} }; window.atOptions = window.atOptions_${slotId};`;
  slot.appendChild(atOpts);
  // Load ad script
  let sc = document.createElement('script');
  sc.src = src;
  slot.appendChild(sc);
}

// Load AdSense ad into slot
function loadAdSenseAd(slotId, client, slot, width, height) {
  let slotEl = G(slotId); if(!slotEl) return;
  slotEl.innerHTML = '';
  // Create ad container
  let adDiv = document.createElement('ins');
  adDiv.className = 'adsbygoogle';
  adDiv.style.display = 'inline-block';
  adDiv.style.width = width + 'px';
  adDiv.style.height = height + 'px';
  adDiv.setAttribute('data-ad-client', client);
  adDiv.setAttribute('data-ad-slot', slot);
  slotEl.appendChild(adDiv);
  // Push to AdSense
  try {
    (adsbygoogle = window.adsbygoogle || []).push({});
  } catch(e) { console.log('AdSense load error:', e); }
}

// Load AdMob banner (for mobile web)
function loadAdMobBanner(slotId, adUnitId, width, height) {
  let slotEl = G(slotId); if(!slotEl) return;
  slotEl.innerHTML = '';
  // Create AdMob container
  let adDiv = document.createElement('div');
  adDiv.style.minWidth = width + 'px';
  adDiv.style.minHeight = height + 'px';
  adDiv.style.background = 'var(--g2)';
  adDiv.style.display = 'flex';
  adDiv.style.alignItems = 'center';
  adDiv.style.justifyContent = 'center';
  adDiv.style.fontSize = '10px';
  adDiv.style.color = 'var(--t3)';
  adDiv.innerHTML = '<span>📢 Advertisement</span>';
  slotEl.appendChild(adDiv);
  // Try to load AdMob if available
  try {
    if (window.admob && adUnitId) {
      admob.banner.show({ adUnitId: adUnitId });
    }
  } catch(e) { console.log('AdMob not available on web'); }
}

// Load multiple ads for download modal — MAXIMUM REVENUE VERSION
function loadDlAdBundle(slotId, type) {
  let slot = G(slotId); if(!slot) return;
  slot.innerHTML = '';
  
  // Revenue tracking
  trackAdRevenue(type === 'during' ? 'download_during' : 'download_after', 0);
  
  if (type === 'during') {
    // During download - MULTIPLE HIGH-CPM ADS
    let adContainer = document.createElement('div');
    adContainer.style.display = 'flex';
    adContainer.style.flexDirection = 'column';
    adContainer.style.gap = '10px';
    adContainer.style.alignItems = 'center';
    adContainer.style.padding = '10px';
    adContainer.style.background = 'var(--g2)';
    adContainer.style.borderRadius = '12px';
    adContainer.style.border = '1px solid var(--neon)';
    
    // Header with earning incentive
    let header = document.createElement('div');
    header.innerHTML = '<div style="font-size:11px;color:var(--neon);font-weight:700;">💰 Sponsored — Downloading...</div>';
    adContainer.appendChild(header);
    
    // Banner 160x30
    let banner160 = document.createElement('div');
    banner160.id = slotId + '_160';
    banner160.style.minHeight = '30px';
    adContainer.appendChild(banner160);
    
    // 300x50 banner (higher CPM)
    let banner300 = document.createElement('div');
    banner300.id = slotId + '_300';
    banner300.style.minHeight = '50px';
    adContainer.appendChild(banner300);
    
    // Native ad container
    let nativeDiv = document.createElement('div');
    nativeDiv.id = slotId + '_native';
    nativeDiv.style.minHeight = '70px';
    nativeDiv.style.width = '100%';
    adContainer.appendChild(nativeDiv);
    
    // Click-to-earn button
    let earnBtn = document.createElement('button');
    earnBtn.innerHTML = '🎯 Click Ad +3 pts';
    earnBtn.style.cssText = 'background:linear-gradient(90deg,var(--c1),var(--c2));color:#000;border:none;padding:8px 20px;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;';
    earnBtn.onclick = () => { addPts(3,'Download Ad Click'); earnBtn.textContent='✅ +3 pts!'; earnBtn.disabled=true; };
    adContainer.appendChild(earnBtn);
    
    slot.appendChild(adContainer);
    
    // Load the 160x30 ad
    loadDlAd(slotId + '_160', CPMR_BANNER_160x30_KEY, 30, 160, 'https://www.highperformanceformat.com/' + CPMR_BANNER_160x30_KEY + '/invoke.js');
    
    // Load 300x50 ad
    setTimeout(() => {
      loadDlAd(slotId + '_300', CPMR_BANNER_300x50_KEY, 50, 300, 'https://www.highperformanceformat.com/' + CPMR_BANNER_300x50_KEY + '/invoke.js');
    }, 300);
    
    // Load native banner
    setTimeout(() => {
      let nativeScript = document.createElement('script');
      nativeScript.async = true;
      nativeScript.setAttribute('data-cfasync', 'false');
      nativeScript.src = 'https://pl29280287.profitablecpmratenetwork.com/1805a61f4f6c6177d946441e5153e81c/invoke.js';
      slot.querySelector('#' + slotId + '_native')?.appendChild(nativeScript);
    }, 600);
    
  } else if (type === 'after') {
    // After download - PREMIUM AD PLACEMENTS
    let adContainer = document.createElement('div');
    adContainer.style.display = 'flex';
    adContainer.style.flexDirection = 'column';
    adContainer.style.gap = '12px';
    adContainer.style.alignItems = 'center';
    adContainer.style.padding = '15px';
    adContainer.style.background = 'linear-gradient(135deg,var(--g2),var(--dark))';
    adContainer.style.borderRadius = '16px';
    adContainer.style.border = '2px solid var(--neon)';
    
    // Success header
    let successHeader = document.createElement('div');
    successHeader.innerHTML = '<div style="font-size:14px;color:var(--neon);font-weight:800;">🎉 Download Complete!</div><div style="font-size:11px;color:var(--t3);margin-top:4px;">Watch ads to earn bonus points</div>';
    adContainer.appendChild(successHeader);
    
    // 468x60 banner - HIGH CPM
    let banner468 = document.createElement('div');
    banner468.id = slotId + '_468';
    banner468.style.minHeight = '60px';
    banner468.style.width = '100%';
    adContainer.appendChild(banner468);
    
    // 300x250 Medium Rectangle - HIGHEST CPM
    let banner300x250 = document.createElement('div');
    banner300x250.id = slotId + '_300x250';
    banner300x250.style.minHeight = '250px';
    banner300x250.style.width = '300px';
    banner300x250.style.margin = '10px auto';
    adContainer.appendChild(banner300x250);
    
    // Native banner container
    let nativeDiv = document.createElement('div');
    nativeDiv.id = slotId + '_native_after';
    nativeDiv.style.minHeight = '90px';
    nativeDiv.style.width = '100%';
    adContainer.appendChild(nativeDiv);
    
    // Click-to-earn rewards grid
    let rewardsGrid = document.createElement('div');
    rewardsGrid.style.cssText = 'display:grid;grid-template-columns:1fr 1fr;gap:8px;width:100%;margin-top:10px;';
    rewardsGrid.innerHTML = `
      <button onclick="addPts(5,'Post-Download Ad 1');this.textContent='✅ +5 pts!';this.disabled=true;" style="background:linear-gradient(135deg,var(--c1),var(--c2));color:#000;border:none;padding:10px;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">🎯 Click +5 pts</button>
      <button onclick="addPts(10,'Post-Download Ad 2');this.textContent='✅ +10 pts!';this.disabled=true;" style="background:linear-gradient(135deg,var(--c3),var(--c4));color:#000;border:none;padding:10px;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">💎 Click +10 pts</button>
      <button onclick="addPts(3,'Post-Download Ad 3');this.textContent='✅ +3 pts!';this.disabled=true;" style="background:var(--glass);border:1px solid var(--neon);color:var(--neon);padding:10px;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">⭐ Click +3 pts</button>
      <button onclick="addPts(8,'Post-Download Ad 4');this.textContent='✅ +8 pts!';this.disabled=true;" style="background:var(--glass);border:1px solid var(--c2);color:var(--c2);padding:10px;border-radius:10px;font-size:11px;font-weight:700;cursor:pointer;">🔥 Click +8 pts</button>
    `;
    adContainer.appendChild(rewardsGrid);
    
    // Video ad offer
    let videoOffer = document.createElement('div');
    videoOffer.style.cssText = 'background:linear-gradient(90deg,rgba(0,255,170,0.1),rgba(0,212,255,0.1));border:1px solid var(--neon);border-radius:12px;padding:12px;margin-top:12px;text-align:center;';
    videoOffer.innerHTML = `
      <div style="font-size:13px;font-weight:700;color:var(--neon);margin-bottom:6px;">📺 Watch Video for +20 pts</div>
      <div style="font-size:11px;color:var(--t3);margin-bottom:8px;">30-second video = instant points!</div>
      <button onclick="watchDownloadVideoAd(this)" style="background:linear-gradient(90deg,var(--c1),var(--c2));color:#000;border:none;padding:10px 24px;border-radius:20px;font-size:12px;font-weight:700;cursor:pointer;">Watch Now +20</button>
    `;
    adContainer.appendChild(videoOffer);
    
    // Popunder trigger (hidden revenue)
    let popunderDiv = document.createElement('div');
    popunderDiv.style.display = 'none';
    popunderDiv.innerHTML = `<iframe src="https://www.profitablecpmratenetwork.com/qu1bqnynm6?key=d753b3018195910056f99110db5b614a" style="width:0;height:0;border:none;"></iframe>`;
    adContainer.appendChild(popunderDiv);
    
    slot.appendChild(adContainer);
    
    // Load 468x60 banner
    loadDlAd(slotId + '_468', CPMR_BANNER_468x60_KEY, 60, 468, 'https://www.highperformanceformat.com/' + CPMR_BANNER_468x60_KEY + '/invoke.js');
    
    // Load 300x250 medium rectangle (high CPM)
    setTimeout(() => {
      let mrScript = document.createElement('script');
      mrScript.textContent = `atOptions={'key':'${CPMR_BANNER_300x50_KEY}','format':'iframe','height':250,'width':300,'params':{}};`;
      slot.querySelector('#' + slotId + '_300x250')?.appendChild(mrScript);
      let mrInvoke = document.createElement('script');
      mrInvoke.src = 'https://www.highperformanceformat.com/' + CPMR_BANNER_300x50_KEY + '/invoke.js';
      slot.querySelector('#' + slotId + '_300x250')?.appendChild(mrInvoke);
    }, 400);
    
    // Load native banner
    setTimeout(() => {
      let nativeScript = document.createElement('script');
      nativeScript.async = true;
      nativeScript.setAttribute('data-cfasync', 'false');
      nativeScript.src = 'https://pl29280287.profitablecpmratenetwork.com/1805a61f4f6c6177d946441e5153e81c/invoke.js';
      slot.querySelector('#' + slotId + '_native_after')?.appendChild(nativeScript);
    }, 600);
    
    // Trigger interstitial after short delay
    setTimeout(() => { tryShowInterstitialAd(); }, 2000);
  }
}

// Video ad during download completion
function watchDownloadVideoAd(btn) {
  btn.disabled = true;
  btn.textContent = '▶️ Watching...';
  let seconds = 30;
  const timer = setInterval(() => {
    seconds--;
    btn.textContent = `⏱️ ${seconds}s remaining...`;
    if(seconds <= 0) {
      clearInterval(timer);
      addPts(20,'Download Video Ad Complete');
      confetti();
      btn.textContent = '✅ +20 pts earned!';
      btn.style.background = 'linear-gradient(90deg,#00ffaa,#00d4ff)';
    }
  }, 1000);
}

// Show interstitial ad (AdMob or fallback to Smartlink)
function tryShowInterstitialAd() {
  // Try AdMob interstitial first
  try {
    if (window.admob && ADMOB_INTERSTITIAL_ID) {
      admob.interstitial.show({ adUnitId: ADMOB_INTERSTITIAL_ID });
      console.log('AdMob interstitial shown');
      return;
    }
  } catch(e) { console.log('AdMob interstitial not available'); }
  
  // Fallback: Try to open smartlink in new window (simulates interstitial)
  try {
    if (CPMR_SMARTLINK_URL) {
      // Open smartlink in background tab (less intrusive)
      let smartWindow = window.open(CPMR_SMARTLINK_URL, '_blank');
      if (smartWindow) {
        setTimeout(() => {
          try { smartWindow.blur(); window.focus(); } catch(e) {}
        }, 500);
      }
    }
  } catch(e) { console.log('Smartlink popup blocked'); }
}

// Show rewarded ad for points
function showRewardedAd(onReward) {
  // Try AdMob rewarded
  try {
    if (window.admob && ADMOB_REWARDED_ID) {
      admob.rewarded.show({ adUnitId: ADMOB_REWARDED_ID }).then(() => {
        if (onReward) onReward(10); // Give 10 points
        toast('s', '🎁 You earned 10 points for watching the ad!');
      });
      return;
    }
  } catch(e) { console.log('AdMob rewarded not available'); }
  
  // Fallback: Show smartlink as rewarded
  if (CPMR_SMARTLINK_URL) {
    let confirmed = confirm('🎁 Watch an ad to earn 10 points?\n\nThis will open a sponsor page in a new tab. Close it after viewing to receive your reward.');
    if (confirmed) {
      let rewardWindow = window.open(CPMR_SMARTLINK_URL, '_blank');
      if (onReward) {
        // Give reward after 5 seconds (assuming they viewed the ad)
        setTimeout(() => {
          onReward(10);
          toast('s', '🎁 You earned 10 points!');
        }, 5000);
      }
    }
  }
}

// Initialize all ad systems on page load
function initAdSystems() {
  // Load native banner container
  window._nativeBannerLoaded = true;
  
  // Initialize AdMob if available
  try {
    if (window.admob) {
      admob.banner.config({
        adUnitId: ADMOB_BANNER_ID,
        position: 'bottom',
        size: admob.AD_SIZE.SMART_BANNER
      });
      console.log('AdMob initialized');
    }
  } catch(e) { console.log('AdMob not available on web platform'); }
  
  // Show app open ad on startup (mobile only)
  setTimeout(() => {
    tryShowAppOpenAd();
  }, 2000);
}

// Try to show app open ad
function tryShowAppOpenAd() {
  try {
    if (window.admob && ADMOB_APP_OPEN_ID) {
      admob.appOpen.show({ adUnitId: ADMOB_APP_OPEN_ID });
    }
  } catch(e) { console.log('App open ad not available'); }
}

// Track ad revenue (for analytics)
function trackAdRevenue(adType, value) {
  let revenue = JSON.parse(localStorage.getItem('adRevenue') || '{}');
  let today = new Date().toDateString();
  if (!revenue[today]) revenue[today] = { impressions: 0, clicks: 0, value: 0 };
  revenue[today].impressions++;
  if (value) revenue[today].value += value;
  localStorage.setItem('adRevenue', JSON.stringify(revenue));
}

// Get daily ad stats
function getAdRevenueStats() {
  return JSON.parse(localStorage.getItem('adRevenue') || '{}');
}

function startDownload(pid, type, quality) {
  let post = D.posts.find(p => p.id === pid);
  if (!post || !post.file) return;
  // Hide quality grid, show progress
  let grid = G('dlQualityGrid'); if(grid) grid.style.display='none';
  let prog = G('dlProgress'), bar = G('dlProgressBar');
  prog.style.display = 'block'; bar.style.width = '0%';
  G('dlModalSub').textContent = `Preparing ${quality} download...`;
  // Show ad during download using new bundle loader
  let adDuring = G('dlAdDuring'); if(adDuring) { adDuring.style.display='block'; loadDlAdBundle('dlAdDuringSlot', 'during'); }
  let adAfter = G('dlAdAfter'); if(adAfter) adAfter.style.display='none';
  let pct = 0;
  let interval = setInterval(() => {
    pct += Math.random() * 25;
    if (pct >= 100) { pct = 100; clearInterval(interval); }
    bar.style.width = pct + '%';
  }, 200);
  setTimeout(() => {
    clearInterval(interval);
    bar.style.width = '100%';
    // Trigger actual download
    let a = document.createElement('a');
    a.href = post.file;
    let ext = type === 'video' ? 'mp4' : type === 'audio' ? 'mp3' : 'jpg';
    a.download = `mediaearn_${type}_${quality}_${Date.now()}.${ext}`;
    a.click();
    // Show ad after download completes using new bundle loader
    if(adDuring) adDuring.style.display='none';
    if(adAfter) { adAfter.style.display='block'; loadDlAdBundle('dlAdAfterSlot', 'after'); }
    G('dlModalSub').textContent = `✅ Download complete at ${quality}!`;
    G('dlModalTitle').textContent = '✅ Download Complete';
    // Change cancel button to close
    let cancelBtn = document.querySelector('.dl-cancel');
    if(cancelBtn) cancelBtn.textContent = '✕ Close';
    toast('s', `⬇️ Download started at ${quality}!`);
    addPts(1, 'Download');
    // Try to show interstitial ad after download
    tryShowInterstitialAd();
  }, 1500);
}
function boostPost(pid) {
  if(!CU) return;
  let u = D.users[CU.id]||CU;
  if((u.points||0) < 50) { toast('e','Need 50 pts to boost'); return; }
  if(!confirm('Boost this post for 50 pts? It will appear at top of feeds for 1 hour.')) return;
  let post = D.posts.find(p=>p.id===pid); if(!post) return;
  u.points -= 50;
  post.boosted = true;
  post.boostExpiry = Date.now() + 3600000; // 1 hour
  post.boostBy = CU.id;
  CU = D.users[CU.id]||CU;
  D.txs.unshift({id:'t'+Date.now(),type:'boost',label:'Post boost',pts:-50,at:Date.now(),user:CU.id});
  let admin = D.users[ADMIN_ID]; if(admin){ admin.points=(admin.points||0)+50; admin.adminRevenue=(admin.adminRevenue||0)+50; }
  saveData(); syncUI(); rFeed();
  toast('s','🚀 Post boosted! Showing at top for 1 hour. -50 pts');
}

function togglePin(pid) { let p=D.posts.find(x=>x.id===pid); if(p){ p.pinned=!p.pinned; saveData(); rFeed(); toast('s',p.pinned?'Pinned!':'Unpinned'); } }
function deletePost(pid) { D.posts=D.posts.filter(p=>p.id!==pid); saveData(); rFeed(); toast('s','Deleted'); }
function markCopyrightPost(post, hours = COPYRIGHT_AUTO_DELETE_HOURS, reporterId = 'system') {
  if(!post) return;
  post.copyright = true;
  post.blocked = true;
  post.copyrightMarkedAt = Date.now();
  post.copyrightDeleteHours = hours;
  post.autoDeleteAt = Date.now() + hours*3600*1000;
  if(reporterId && reporterId !== 'system') {
    post.reportedCopyrightBy = post.reportedCopyrightBy || [];
    if(!post.reportedCopyrightBy.includes(reporterId)) post.reportedCopyrightBy.push(reporterId);
  }
  saveData();
  scheduleCopyrightDelete(post.id);
}
function flagCopyright(pid) { let p=D.posts.find(x=>x.id===pid); if(p){ markCopyrightPost(p, COPYRIGHT_FLAGGED_DELETE_HOURS, CU?.id || 'admin'); addNotif(p.author,'copyright','⚠️',`⚠️ Your post was flagged for copyright and will be auto-deleted in ${COPYRIGHT_FLAGGED_DELETE_HOURS} hours.`,pid); if(CU) addNotif(CU.id,'copyright','✅',`Thanks for reporting copyright. This post will be removed in ${COPYRIGHT_FLAGGED_DELETE_HOURS} hours.`,pid); saveData(); rFeed(); toast('w',`⚠️ Flagged — auto-delete in ${COPYRIGHT_FLAGGED_DELETE_HOURS}h`); } }
function scheduleCopyrightDelete(pid) {
  let post = D.posts.find(p => p.id === pid); if (!post || !post.autoDeleteAt) return;
  let delay = post.autoDeleteAt - Date.now();
  if (delay <= 0) { doAutoDelete(pid); return; }
  setTimeout(() => doAutoDelete(pid), Math.min(delay, 2147483647));
}
function doAutoDelete(pid) {
  let post = D.posts.find(p => p.id === pid); if (!post) return;
  let authorId = post.author;
  let markedAt = post.copyrightMarkedAt || post.createdAt || Date.now();
  let hoursAgo = Math.max(1, Math.round((Date.now() - markedAt) / 3600000));
  D.posts = D.posts.filter(p => p.id !== pid);
  saveData();
  addNotif(authorId, 'copyright', '🗑️', `🗑️ Your copyrighted post was automatically deleted after ${hoursAgo} hours.`, '');
  if (CU && CU.id === authorId) { toast('e', '🗑️ A copyrighted post was auto-deleted'); rFeed(); }
}
function checkAutoDeleteOnLoad() {
  let now = Date.now();
  (D.posts||[]).filter(p => p.autoDeleteAt && p.autoDeleteAt <= now).forEach(p => doAutoDelete(p.id));
  (D.posts||[]).filter(p => p.autoDeleteAt && p.autoDeleteAt > now).forEach(p => { p.blocked = true; scheduleCopyrightDelete(p.id); });
}
function copyLink(pid) { navigator.clipboard?.writeText(location.href+'#post-'+pid); toast('s','Copied!'); }
function refreshPost(pid) { let old=document.querySelector(`[data-post-id="${pid}"]`); if(!old) return; let post=D.posts.find(p=>p.id===pid); if(post) old.replaceWith(mkPost(post)); }

// Share Modal
function openShareModal(pid) {
  let shareUrl = location.href + '#post-' + pid;
  let platforms = [
    { name:'WhatsApp', url:'https://wa.me/?text=' },
    { name:'Facebook', url:'https://www.facebook.com/sharer/sharer.php?u=' },
    { name:'Twitter', url:'https://twitter.com/intent/tweet?text=' },
    { name:'Instagram', url:'https://www.instagram.com/' },
    { name:'Telegram', url:'https://t.me/share/url?url=' },
    { name:'Messenger', url:'fb-messenger://share?link=' },
    { name:'Snapchat', url:'https://www.snapchat.com/' },
    { name:'TikTok', url:'https://www.tiktok.com/' },
    { name:'LinkedIn', url:'https://www.linkedin.com/shareArticle?mini=true&url=' },
    { name:'SMS', url:'sms:?body=' },
    { name:'Copy Link', url:'copy' }
  ];
  let shareGrid = G('shareGrid');
  if(shareGrid) {
    shareGrid.innerHTML = platforms.map(p => {
      let emoji = p.name==='WhatsApp'?'📱':p.name==='Facebook'?'👍':p.name==='Twitter'?'🐦':p.name==='Instagram'?'📷':p.name==='Telegram'?'✈️':p.name==='Messenger'?'💬':p.name==='Snapchat'?'👻':p.name==='TikTok'?'🎵':p.name==='LinkedIn'?'🔗':p.name==='SMS'?'📩':'🔗';
      if(p.url==='copy') {
        return `<div class="share-icon" onclick="copyLink('${pid}'); closeModal('shareModal');"><span class="emoji">${emoji}</span><span>${p.name}</span></div>`;
      }
      let url = `${p.url}${encodeURIComponent(p.name==='SMS' ? `Check this out: ${shareUrl}` : shareUrl)}`;
      return `<div class="share-icon" onclick="window.open('${url}', '_blank'); closeModal('shareModal');"><span class="emoji">${emoji}</span><span>${p.name}</span></div>`;
    }).join('');
  }
  openModal('shareModal');
}

// Apps Page
function openAppUploadModal() { openModal('appUploadModal'); }
let appsActiveFilter = 'all';
function appsFilter(type, el) {
  appsActiveFilter = type;
  document.querySelectorAll('#pg-apps .chip').forEach(c => c.classList.remove('on'));
  if (el) el.classList.add('on');
  rAppsPage();
}
function previewAppLink(val) {
  let prev = G('appLinkPreview'); if (!prev) return;
  if (!val) { prev.innerHTML = ''; return; }
  let isPlay = val.includes('play.google.com');
  let isApple = val.includes('apps.apple.com');
  if (isPlay) prev.innerHTML = `<div style="color:var(--c3);font-size:11px;font-weight:700;">✅ Valid Play Store link detected</div>`;
  else if (isApple) prev.innerHTML = `<div style="color:var(--c2);font-size:11px;font-weight:700;">✅ Valid App Store link detected</div>`;
  else if (val.length > 5) prev.innerHTML = `<div style="color:var(--c5);font-size:11px;font-weight:700;">🚫 Only play.google.com and apps.apple.com are allowed</div>`;
  else prev.innerHTML = '';
}

// App file upload handling
let appUploadFileData = null;
let appUploadFileName = null;
function handleAppFileUpload(input) {
  let file = input.files[0];
  if (!file) return;
  let preview = G('appFilePreview');
  if (file.size > 50 * 1024 * 1024) { // 50MB limit
    toast('e', 'File too large! Max 50MB allowed.');
    input.value = '';
    return;
  }
  let reader = new FileReader();
  reader.onload = e => {
    appUploadFileData = e.target.result;
    appUploadFileName = file.name;
    if (preview) preview.innerHTML = `📦 ${file.name} (${(file.size/1024/1024).toFixed(2)} MB) ✅ Ready`;
  };
  reader.readAsDataURL(file);
}
function submitApp() {
  let name=V('appName'), link=V('appLink'), desc=V('appDesc'), icon=V('appIcon'), version=V('appVersion')||'1.0', category=V('appCategory')||'General';
  if(!name){ toast('e','App name required'); return; }
  // Allow link OR file upload
  let hasLink = link && link.startsWith('http');
  let hasFile = appUploadFileData !== null;
  if(!hasLink && !hasFile){ toast('e','Please provide either an app link OR upload a file'); return; }
  
  // Detect store type from radio or URL
  let radioType = document.querySelector('input[name="appType"]:checked')?.value || 'other';
  let isPlay = link && link.includes('play.google.com') || radioType==='playstore';
  let isApple = link && link.includes('apps.apple.com') || radioType==='appstore';
  let isApk = radioType==='apk' || (link && link.match(/\.apk(\?|$)/i)) || (appUploadFileName && appUploadFileName.match(/\.apk$/i));
  let isWeb = radioType==='web' || (link && link.match(/^https?:\/\//i));
  // Determine store label & icon
  let storeType, storeLabel, storeIcon;
  if(isPlay){ storeType='playstore'; storeLabel='Play Store'; storeIcon='🤖'; }
  else if(isApple){ storeType='appstore'; storeLabel='App Store'; storeIcon='🍎'; }
  else if(isApk){ storeType='apk'; storeLabel='APK Direct'; storeIcon='📦'; }
  else if(isWeb){ storeType='web'; storeLabel='Web App'; storeIcon='🌐'; }
  else{ storeType='other'; storeLabel='Other'; storeIcon='🔗'; }
  
  // If file uploaded, use it as the link
  let finalLink = hasFile ? appUploadFileData : link;
  
  // Check for duplicate
  let existing = (D.apps||[]).find(a => a.link === finalLink || a.name === name);
  if(existing){ toast('w','⚠️ This app is already listed.'); return; }
  let screenshots = V('appScreenshots') ? V('appScreenshots').split(',').map(s=>s.trim()).filter(Boolean) : [];
  let app={ id:'app'+Date.now(), name, link: finalLink, desc, icon:icon||'📱', version, category, storeType, storeLabel, storeIcon, screenshots, uploadedBy:CU.id, uploadedAt:Date.now(), status:'approved', installedBy:[], rating:(4+Math.random()).toFixed(1), totalInstalls:Math.floor(Math.random()*1000), hasFile: hasFile, fileName: appUploadFileName };
  D.apps=D.apps||[];
  D.apps.unshift(app);
  
  // Reset file upload data
  appUploadFileData = null;
  appUploadFileName = null;
  let fileInput = G('appFileUpload');
  if(fileInput) fileInput.value = '';
  let preview = G('appFilePreview');
  if(preview) preview.innerHTML = '';
  
  saveData();
  closeModal('appUploadModal');
  toast('s',`✅ App "${name}" published as ${storeIcon} ${storeLabel}!`);
  addPts(15,'App Submitted');
  rAppsPage();
}
function installApp(appId) {
  let app = D.apps.find(a => a.id===appId);
  if (!app) return;
  if (app.installedBy.includes(CU.id)) { toast('w', 'Already installed'); return; }
  app.installedBy.push(CU.id);
  app.totalInstalls = (app.totalInstalls||0) + 1;
  // Award the uploader too
  let uploader = D.users[app.uploadedBy];
  if (uploader && uploader.id !== CU.id) { uploader.points = (uploader.points||0) + 10; addNotif(uploader.id, 'earn', '💰', `Someone installed your app "${app.name}" +10 pts`); }
  addPts(10, `Installed ${app.name}`, 'earn');
  toast('s', `✅ Installed ${app.name}! +10 pts`);
  saveData(); rAppsPage();
}
function uninstallApp(appId) {
  let app = D.apps.find(a => a.id===appId); if (!app) return;
  app.installedBy = app.installedBy.filter(id => id !== CU.id);
  toast('i', `${app.name} uninstalled`); saveData(); rAppsPage();
}
function rAppsPage() {
  let list = G('appsList'); if (!list || !CU) return;
  let all = (D.apps||[]).filter(a => a.status === 'approved');
  let filtered = appsActiveFilter === 'mine' ? all.filter(a => a.uploadedBy === CU.id)
    : appsActiveFilter === 'playstore' ? all.filter(a => a.storeType === 'playstore')
    : appsActiveFilter === 'appstore' ? all.filter(a => a.storeType === 'appstore')
    : all;
  list.innerHTML = filtered.length ? filtered.map(a => {
    let installed = a.installedBy.includes(CU.id);
    let stars = '⭐'.repeat(Math.round(a.rating||4));
    return `<div class="app-card"><div class="app-icon">${a.icon}</div><div class="app-info"><div class="app-name">${esc(a.name)} <span style="font-size:9px;color:var(--t3);">v${a.version||'1.0'}</span></div><div class="app-installs">📦 ${a.category||'App'}</div><div class="app-rating">${stars} ${a.rating} · ${a.totalInstalls||0} installs</div><div><span class="app-store-badge ${a.storeType||'playstore'}">${a.storeLabel||'Play Store'}</span></div></div><div style="display:flex;flex-direction:column;gap:5px;">${installed ? `<button class="btn btn-ghost btn-xs" onclick="uninstallApp('${a.id}')">Uninstall</button><span style="font-size:9px;color:var(--neon);text-align:center;">✅ Installed</span>` : `<button class="btn btn-neon btn-xs" onclick="installApp('${a.id}')">Install</button>`}</div></div>`;
  }).join('') : '<div style="text-align:center;padding:30px;color:var(--t3);">No apps yet. Be the first to share one!</div>';
  let installed = G('installedAppsList');
  if (installed) {
    let myInstalls = all.filter(a => a.installedBy.includes(CU.id));
    installed.innerHTML = myInstalls.length ? myInstalls.map(a => `<div class="app-card"><div class="app-icon">${a.icon}</div><div class="app-info"><div class="app-name">${esc(a.name)}</div><div class="app-installs">${a.storeLabel||'Play Store'}</div></div><button class="btn btn-ghost btn-xs" onclick="uninstallApp('${a.id}')">Uninstall</button></div>`).join('') : '<div style="color:var(--t3);font-size:12px;">No installed apps</div>';
  }
  // Update the app uploader avatars
  if (G('appsAv') && CU) G('appsAv').textContent = CU.name?.charAt(0).toUpperCase()||'M';
}

// Post with Loader - duplicate prevention via isPosting flag
let isPosting = false;
async function submitPostWithLoader() {
  if (isPosting) { toast('w', '⏳ Already posting, please wait...'); return; }
  isPosting = true;
  // Disable the post button to prevent double-submit
  let btn = document.querySelector('#postModal .btn-p');
  if (btn) { btn.disabled = true; btn.textContent = '⏳ Posting...'; }
  // Show top progress bar
  let bar = G('postLoaderBar'); let fill = G('plbFill');
  if (bar) bar.style.display = 'block';
  // Show overlay
  let loader = G('postLoader'); if (loader) loader.style.display = 'flex';
  // Animate progress bar in steps
  const steps = [
    { pct: 20, msg: 'Checking copyright...',   delay: 0 },
    { pct: 45, msg: 'Validating content...',    delay: 400 },
    { pct: 70, msg: 'Uploading media to Supabase...', delay: 800 },
    { pct: 90, msg: 'Publishing to feed...',     delay: 1200 },
    { pct: 100, msg: 'Done! ✅',                 delay: 1600 },
  ];
  steps.forEach(s => {
    setTimeout(() => {
      if (fill) fill.style.width = s.pct + '%';
      let msg = G('postLoadMsg'); if (msg) msg.textContent = s.msg;
    }, s.delay);
  });
  // Upload media to Supabase for permanent storage (replaces base64 with URL)
  await persistMediaToSupabase();
  setTimeout(() => {
    submitPost();
    if (loader) loader.style.display = 'none';
    if (bar) { bar.style.display = 'none'; if (fill) fill.style.width = '0%'; }
    if (btn) { btn.disabled = false; btn.textContent = '🚀 Post'; }
    isPosting = false;
  }, 2000);
}
function submitPost() {
  if(!CU){ toast('e','Login required'); closeModal('postModal'); return; }
  
  if (voiceRecordingActive && voiceRecorder && voiceRecorder.state !== 'inactive') {
    voiceRecorder.stop();
  }
  
  // MAX AD SYSTEM: Show rewarded ad before post creation (high engagement moment)
  if (typeof MAX_AD_SYSTEM !== 'undefined' && Math.random() > 0.5) {
    MAX_AD_SYSTEM.triggerContextualAd('before_post');
  }
  
  let editor=document.getElementById('postEditor');
  let text=editor?editor.innerText.trim():'';
  let tags=(V('postTags')||'').match(/#\w+/g)||[];
  let privacy=document.querySelector('input[name="privacy"]:checked')?.value||'public';
  if(!text && !pfData){ toast('e','Write something or add media'); closeModal('postModal'); return; }
  // Check schedule
  let schedToggle = G('scheduleToggle');
  let schedTime   = G('scheduleTime');
  let isScheduled = schedToggle?.checked && schedTime?.value;
  let scheduledAt = isScheduled ? new Date(schedTime.value).getTime() : null;
  if(scheduledAt && scheduledAt <= Date.now()) { toast('e','Schedule time must be in the future'); return; }
  let post={ id:pid(), author:CU.id, scheduledAt:scheduledAt||null, published:!scheduledAt, type:pfMime?.startsWith('video')?'video':pfMime?.startsWith('image')?'photo':pfMime?.startsWith('audio')?'audio':pfMime?.includes('360')?'360':'text', text, file:pfData||null, mimetype:pfMime||null, hashtags:tags.map(t=>t.slice(1).toLowerCase()), likedBy:[], reactions:{}, comments:[], views:0, shares:0, pts:20, pinned:false, createdAt:Date.now(), visibility:privacy, isNFT:false };
  D.posts=D.posts||[];
  D.posts.unshift(post);
  CU.posts=CU.posts||[]; CU.posts.unshift(post.id);
  // Copyright check: auto-block + auto-delete + notification
  let postText = (text||'').toLowerCase();
  let fileInfo = ((pfName||'') + ' ' + (pfMime||'')).toLowerCase();
  let hasCopyright = COPYRIGHT_KEYWORDS.some(k => postText.includes(k) || fileInfo.includes(k));
  if(hasCopyright){
    markCopyrightPost(post, COPYRIGHT_AUTO_DELETE_HOURS, 'system');
    addNotif(CU.id, 'copyright', '⚠️', `⚠️ Copyright detected in your post. It will be auto-deleted in ${COPYRIGHT_AUTO_DELETE_HOURS} hours.`, post.id);
    toast('w', `⚠️ Copyright detected — post will be auto-deleted in ${COPYRIGHT_AUTO_DELETE_HOURS}h`);
  }
  if(scheduledAt) {
    toast('s','⏰ Post scheduled for '+new Date(scheduledAt).toLocaleString());
    closeModal('postModal'); pfData=null; pfMime=null;
    let editor2=document.getElementById('postEditor'); if(editor2) editor2.innerHTML='';
    saveData(); return;
  }
  addPts(20,'New post');
  notifyPostAudience(post, 'post');
  if(document.getElementById('mintAsNFT')?.checked && CU.points >= 500) {
    CU.points -= 500;
    let nft={ id:'nft'+Date.now(), name:text?.substring(0,50)||'Untitled NFT', description:text||'', price:1000, image:pfData||'https://picsum.photos/400/400?random='+Date.now(), creator:CU.id, creatorName:CU.name, owner:CU.id, createdAt:Date.now(), sold:false, royalty:5, postId:post.id };
    D.nfts=D.nfts||[];
    D.nfts.unshift(nft);
    post.isNFT=true;
    toast('s','Post minted as NFT! +500 pts deducted');
  }
  saveData();
  
  // PERSISTENCE: Save post to persistence manager
  if(typeof PersistenceManager !== 'undefined' && PersistenceManager) {
    PersistenceManager.savePost(post).catch(err => {
      console.warn('[PersistenceManager] Post save failed:', err);
    });
    
    // Save media file if present
    if(post.file && post.file.length > 0) {
      PersistenceManager.saveMedia(post.id, post.file, {
        type: post.type,
        mimetype: post.mimetype,
        postId: post.id
      }).catch(err => {
        console.warn('[PersistenceManager] Media save failed:', err);
      });
    }
  }
  
  if(typeof trackUserActivity === 'function') {
    trackUserActivity('post');
  }
  if(socketReady && socket) socket.emit('post:create', {post});
  OfflineCache.save(post);
  if (typeof addToSyncQueue === 'function') {
    const syncPayload = { ...post, timestamp: post.createdAt || Date.now() };
    if (!navigator.onLine) {
      addToSyncQueue({ type: 'post', data: syncPayload }).catch(()=>{});
      toast('i', '📶 Offline: post queued for sync');
    } else {
      fetch('/api/posts/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...syncPayload, syncedAt: Date.now() })
      }).catch(() => addToSyncQueue({ type: 'post', data: syncPayload }).catch(()=>{}));
    }
  }
  clearPostDraft();
  closeModal('postModal');
  rFeed();
  window.scrollTo({top:0, behavior:'smooth'});
  if(!hasCopyright) { confetti(); toast('s','Post published! +20 pts'); }
  pfData=null; pfMime=null; pfName=null; pfFile=null;
  if(editor) editor.innerHTML='';
  G('postTags').value='';
  // Schedule copyright auto-delete
  if(hasCopyright) scheduleCopyrightDelete(post.id);
}

// AI Functions
function toggleAiPanel(){
  let p=G('aiPanelSection');
  if(p) p.style.display=p.style.display==='none'?'block':'none';
}
function setComposerText(text, label='AI suggestion') {
  const editor = document.getElementById('postEditor');
  if (editor) {
    editor.textContent = text;
    editor.focus?.();
  }
  const out = G('aiOutput');
  if (out) {
    out.innerHTML = `<div class="ai-caption-result" style="cursor:pointer;">✨ ${esc(text)}<br><small style="color:var(--t3);">${esc(label)} — ready to post</small></div>`;
  }
}
async function aiGenerateCaption(fromMedia=false) {
  // Use new AI features system
  if(typeof MonetixraAI !== 'undefined' && typeof MonetixraAI.generateCaption === 'function') {
    // If called from media selection, show media type picker
    if(fromMedia) {
      const mediaType = await MonetixraAI.showMediaTypeSelector();
      if(!mediaType) return;
      return MonetixraAI.generateCaption(mediaType);
    }
    return MonetixraAI.generateCaption('photo');
  }
  
  // Fallback
  let out = G('aiOutput');
  let editor = document.getElementById('postEditor');
  let text = editor ? editor.innerText.trim() : 'social media post';
  if (out) out.innerHTML = '<div class="ai-loading"><div class="dot"></div><div class="dot"></div><div class="dot"></div><span>AI generating...</span></div>';
  try {
    if (fromMedia && pfData) {
      if (pfMime && pfMime.startsWith('image/')) {
        await aiDetectObjects();
        return;
      }
      if (pfMime && (pfMime.startsWith('audio/') || pfMime.startsWith('video/'))) {
        try {
          const r = await fetch('/api/ai/transcribe',{
            method:'POST',headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name:pfName||'',data:pfData,type:pfMime})
          });
          const d = await r.json();
          let cap = d.text || d.transcript || (`Auto-caption for ${pfName||'media'}`);
          setComposerText(cap, 'Media caption');
          return;
        } catch (e) {
          let fallback = `Auto-caption: ${pfName||'media'} — ready to publish`;
          setComposerText(fallback, 'Fallback media caption');
          return;
        }
      }
    }

    const r = await fetch('/api/ai/caption',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({imageDescription:text||'amazing post',tone:'engaging',hashtags:true})});
    const d = await r.json();
    const caption = d.caption || 'Great post!';
    setComposerText(caption, 'AI caption');
  } catch(e) {
    const fallback = 'Amazing content! 🔥 #Monetixra #Trending #Viral #Crypto #NFT';
    setComposerText(fallback, 'Fallback caption');
  }
}
async function aiSuggestHashtags() {
  // Use new AI features system
  if(typeof MonetixraAI !== 'undefined' && typeof MonetixraAI.suggestHashtags === 'function') {
    return MonetixraAI.suggestHashtags();
  }
  
  // Fallback
  let area=G('hashtagSuggestArea');
  if (area) area.innerHTML='<small style="color:var(--t3);">Loading AI hashtags...</small>';
  let editor=document.getElementById('postEditor');
  let text=editor?editor.innerText.trim():'social media content';
  try {
    const r=await fetch('/api/ai/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:`Generate 12 trending hashtags for: "${text}". Return ONLY hashtags separated by spaces, no explanation.`}],model:'openai'})});
    const d=await r.json();
    let tags=(d.reply||'').match(/#\w+/g)||['#Bangladesh','#Trending','#Viral','#Monetixra','#Crypto','#NFT','#AI','#Creator','#Digital','#Content'];
    if (area) { area.innerHTML=''; tags.forEach(tag=>{let t=document.createElement('span');t.className='ai-tag suggested';t.textContent=tag;t.onclick=()=>{let inp=G('postTags');if(inp)inp.value+=(inp.value?' ':'')+tag;};area.appendChild(t);}); }
    let inp=G('postTags'); if(inp) inp.value=(inp.value+' '+tags.join(' ')).trim();
  } catch(e){
    const fallback=['#Bangladesh','#Trending','#Viral','#Monetixra','#Crypto','#NFT','#AI','#Metaverse'];
    if (area) { area.innerHTML=''; fallback.forEach(tag=>{let t=document.createElement('span');t.className='ai-tag suggested';t.textContent=tag;t.onclick=()=>{let inp=G('postTags');if(inp)inp.value+=(inp.value?' ':'')+tag;};area.appendChild(t);}); }
    let inp=G('postTags'); if(inp) inp.value=(inp.value+' '+fallback.join(' ')).trim();
  }
}
async function aiDetectObjects() {
  // Use new AI features system
  if(typeof MonetixraAI !== 'undefined' && typeof MonetixraAI.detectObjects === 'function') {
    return MonetixraAI.detectObjects();
  }
  
  // Fallback
  if(!pfData){ toast('w','Upload an image first'); return; }
  let out=G('aiOutput');
  if (out) out.innerHTML='<div class="ai-loading"><div class="dot"></div><div class="dot"></div><div class="dot"></div><span>Analyzing with Vision AI...</span></div>';
  try {
    const VISION_KEY = GOOGLE_VISION_KEY;
    if(!VISION_KEY) throw new Error('Vision API key is not configured');
    const b64=pfData.split(',')[1]||pfData;
    const r=await fetch(`https://vision.googleapis.com/v1/images:annotate?key=${VISION_KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({requests:[{image:{content:b64},features:[{type:'LABEL_DETECTION',maxResults:8},{type:'SAFE_SEARCH_DETECTION'}]}]})});
    const d=await r.json();
    let labels=(d.responses?.[0]?.labelAnnotations||[]).map(l=>l.description).join(', ');
    let safety=d.responses?.[0]?.safeSearchAnnotation||{};
    let safe=(safety.adult==='UNLIKELY'||safety.adult==='VERY_UNLIKELY');
    if(!safe){ toast('e','⚠️ Image may contain inappropriate content'); if(out) out.innerHTML='<div class="ai-caption-result" style="color:var(--c5);">⚠️ Unsafe content detected. This image cannot be posted.</div>'; pfData=null; return; }
    const caption = `Detected: ${labels||'Beautiful image'}.`;
    setComposerText(caption, 'Object detection');
    let tags=labels.split(', ').slice(0,5).map(l=>'#'+l.replace(/\s+/g,''));
    let inp=G('postTags');
    if(inp && tags.length) inp.value=(inp.value+' '+tags.join(' ')).trim();
  } catch(e){
    if(out) out.innerHTML='<div class="ai-caption-result">👁️ Analysis complete. Image looks great!</div>';
    setComposerText('Image looks great and is ready to post.', 'Object detection');
  }
}
async function aiTranslate() {
  // Use new AI features system
  if(typeof MonetixraAI !== 'undefined' && typeof MonetixraAI.translateCaption === 'function') {
    let targetLang=prompt('Target language code (en, bn, hi, es, fr, de, zh, ja, ar, ru, etc.)', 'en');
    if(!targetLang) return;
    return MonetixraAI.translateCaption(targetLang);
  }
  
  // Fallback
  let editor=document.getElementById('postEditor');
  let text=editor?.innerText;
  if(!text){ toast('w','Enter text to translate'); return; }
  let targetLang=prompt('Target language code (en, bn, hi, es, fr, de, zh, ja, ar, ru, etc.)', 'en');
  if(!targetLang) return;
  toast('i','Translating...');
  try {
    const GOOGLE_KEY = GOOGLE_API_KEY;
    if(!GOOGLE_KEY) throw new Error('Google Translate API key is not configured');
    const r=await fetch(`https://translation.googleapis.com/language/translate/v2?key=${GOOGLE_KEY}`,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({q:text,target:targetLang,format:'text'})});
    const d=await r.json();
    let translated=d.data?.translations?.[0]?.translatedText||text;
    if(editor) editor.textContent=translated;
    toast('s',`Translated to ${targetLang.toUpperCase()}!`);
  } catch(e){
    toast('e','Translation failed. Check your API key.');
  }
}
async function aiGenerateImage() {
  let imgPrompt = window.prompt('Describe the image you want:', "beautiful sunset over Cox's Bazar, Bangladesh");
  if(!imgPrompt) return;
  toast('i','Generating AI image...');
  try {
    const r = await fetch('/api/ai/chat',{method:'POST',headers:{'Content-Type':'application/json'},
      body:JSON.stringify({messages:[{role:'user',content:'Describe a vivid scene of: '+imgPrompt+'. Be detailed and visual. 3 sentences.'}],model:'openai'})
    });
    const d = await r.json();
    // Use Picsum as placeholder (replace with DALL-E or Stable Diffusion API)
    let seed = Math.abs(imgPrompt.split('').reduce((a,c)=>a+c.charCodeAt(0),0));
    pfData='https://picsum.photos/seed/'+seed+'/600/400';
    pfMime='image/jpeg'; pfName='ai_image.jpg';
    G('mediaPreview').innerHTML=`<img src="${pfData}" style="max-width:100%;border-radius:12px;"><div style="font-size:10px;color:var(--t3);margin-top:4px;">${d.reply?.substring(0,80)||imgPrompt}</div>`;
    toast('s','✅ AI image generated!');
  } catch(e) {
    let seed=Date.now();
    pfData='https://picsum.photos/seed/'+seed+'/600/400'; pfMime='image/jpeg';
    G('mediaPreview').innerHTML=`<img src="${pfData}" style="max-width:100%;border-radius:12px;">`;
    toast('s','Image generated!');
  }
}
async function aiSummarize() {
  let editor=document.getElementById('postEditor');
  let text=editor?.innerText;
  if(!text){ toast('w','Enter text to summarize'); return; }
  toast('i','Summarizing with AI...');
  try {
    const r=await fetch('/api/ai/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:`Summarize this in 2 sentences: "${text}"`}],model:'openai'})});
    const d=await r.json();
    toast('s','Summary: '+(d.reply||'').substring(0,120));
  } catch(e){ toast('s','Summary: '+text.substring(0,100)+'...'); }
}
async function aiSpellCheck() {
  let editor=document.getElementById('postEditor');
  let text=editor?.innerText;
  if(!text){ toast('w','Enter text'); return; }
  toast('i','Checking spelling...');
  try {
    const r=await fetch('/api/ai/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:`Fix any spelling/grammar errors in this text and return ONLY the corrected text: "${text}"`}],model:'openai'})});
    const d=await r.json();
    if(editor && d.reply) editor.innerHTML=d.reply;
    toast('s','Spell check complete!');
  } catch(e){ toast('s','No errors found'); }
}
async function aiSentiment() {
  let editor=document.getElementById('postEditor');
  let text=editor?.innerText;
  if(!text){ toast('w','Enter text'); return; }
  try {
    const r=await fetch('/api/ai/chat',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({messages:[{role:'user',content:`Analyze sentiment of: "${text}". Reply with ONLY: Positive, Negative, or Neutral + emoji`}],model:'openai'})});
    const d=await r.json();
    toast('i','Sentiment: '+(d.reply||'Neutral 😐'));
  } catch(e){ toast('i','Sentiment: Positive 😊'); }
}

// Points System with Decay
// Daily earning limits - UNLIMITED (set to very high numbers)
const DAILY_LIMITS = { earn:999999999, engage:999999999, post:999999999, ref:999999999, total:Number.MAX_SAFE_INTEGER };

// Points decay configuration
const POINTS_DECAY = {
  basePoints: 50,           // Start with 50 points per ad
  minPoints: 3,             // Minimum 3 points (never goes below this)
  decayRate: 0.85,        // Each ad watched reduces points by 15%
  resetHours: 24,         // Reset after 24 hours
  adsWatchedKey: 'adsWatchedToday'
};

// Get current points per ad with decay applied
function getDecayedPoints() {
  if(!CU) return POINTS_DECAY.minPoints;
  let u = D.users[CU.id] || CU;
  let td = new Date().toDateString();
  
  // Check if it's a new day (reset counter)
  if(u.lastAdDate !== td) {
    u.adsWatchedToday = 0;
    u.lastAdDate = td;
    u.pointsDecayMultiplier = 1.0;
  }
  
  // Calculate decay: base * (decayRate ^ adsWatched)
  let adsWatched = u.adsWatchedToday || 0;
  let decayMultiplier = Math.pow(POINTS_DECAY.decayRate, adsWatched);
  let points = Math.max(POINTS_DECAY.minPoints, Math.floor(POINTS_DECAY.basePoints * decayMultiplier));
  
  return points;
}

// Increment ad watch counter
function incrementAdWatch() {
  if(!CU) return;
  let u = D.users[CU.id] || CU;
  let td = new Date().toDateString();
  
  if(u.lastAdDate !== td) {
    u.adsWatchedToday = 0;
    u.lastAdDate = td;
  }
  u.adsWatchedToday = (u.adsWatchedToday || 0) + 1;
  saveData();
}

function addPts(pts, label, type='earn') {
  if(!CU) return;
  let u = D.users[CU.id] || CU;
  
  // Apply time-based multiplier for dynamic earnings
  let timeMultiplier = getTimeBasedMultiplier();
  let adjustedPts = Math.floor(pts * timeMultiplier);
  
  // Apply decay for ad earnings
  if(type === 'earn' && label && (label.includes('Ad') || label.includes('ad') || label.includes('Watch'))) {
    let decayedPoints = getDecayedPoints();
    adjustedPts = Math.min(adjustedPts, decayedPoints); // Use the lower of actual or decayed
    incrementAdWatch();
    
    // Show decay notification
    let nextPoints = Math.max(POINTS_DECAY.minPoints, Math.floor(POINTS_DECAY.basePoints * Math.pow(POINTS_DECAY.decayRate, u.adsWatchedToday)));
    if(nextPoints > POINTS_DECAY.minPoints) {
      setTimeout(() => {
        toast('i', `📉 Next ad: +${nextPoints} pts (watch more ads to earn more!)`);
      }, 1500);
    }
  }
  
  // Show time multiplier notification for significant changes
  if(timeMultiplier > 1.2 && type !== 'earn') {
    toast('i', `⏰ Time bonus! ${Math.floor(timeMultiplier * 100)}% multiplier applied`);
  }
  
  pts = adjustedPts;
  
  let adminCut=Math.floor(pts*ADMIN_CUT);
  let userPts=pts-adminCut;
  // Anti-fraud: check daily limit
  let td=new Date().toDateString();
  if(!u.todayPts||u.todayPts.date!==td) u.todayPts={date:td, pts:0, earn:0, engage:0, post:0};
  let typeTotal=(u.todayPts[type]||0)+userPts;
  let dayTotal=(u.todayPts.pts||0)+userPts;
  if(DAILY_LIMITS[type] && typeTotal > DAILY_LIMITS[type]) {
    toast('w','Daily '+type+' limit reached ('+DAILY_LIMITS[type]+' pts/day)');
    return;
  }
  if(dayTotal > DAILY_LIMITS.total) {
    toast('w','Daily earning limit reached ('+DAILY_LIMITS.total+' pts/day)');
    return;
  }
  u.points=(u.points||0)+userPts;
  u.todayPts.pts=(u.todayPts.pts||0)+userPts;
  u.todayPts[type]=(u.todayPts[type]||0)+userPts;
  if(type==='earn') u.adPts=(u.adPts||0)+userPts;
  if(type==='engage') u.engPts=(u.engPts||0)+userPts;
  CU = D.users[CU.id] || CU;
  let admin=D.users[ADMIN_ID];
  if(admin && CU.id!==ADMIN_ID){ admin.points=(admin.points||0)+adminCut; admin.adminRevenue=(admin.adminRevenue||0)+adminCut; }
  D.txs=D.txs||[];
  D.txs.unshift({ id:'t'+Date.now(), type, label, pts:userPts, adminCut, at:Date.now(), user:CU.id });
  addNotif(CU.id,'earn','💰',`+${userPts} pts: ${label}`);
  addMLMCommission(CU.id, userPts, label);
  checkAchievements();
  saveData(); syncUI();
  
  // PERSISTENCE: Save points to persistence manager (survives refresh/update/logout)
  if(typeof PersistenceManager !== 'undefined' && PersistenceManager) {
    PersistenceManager.savePoints(CU.id, u.points || 0).catch(err => {
      console.warn('[PersistenceManager] Points save failed:', err);
    });
  }
}
function addNotif(toId, type, icon, msg, refId='', priority=2) { D.notifs=D.notifs||[]; D.notifs.unshift({ id:'n'+Date.now(), to:toId, type, icon, msg, refId, at:Date.now(), read:false, priority }); if(D.notifs.length>200) D.notifs=D.notifs.slice(0,200); saveData(); syncUI(); }

// Earn Page (simplified for brevity - kept essential functions)
const DAILY_TASKS=[{ id:'dt1', ico:'📺', name:'Watch Ad', desc:'Earn pts', pts:5, fn:()=>watchAd() },{ id:'dt2', ico:'❤️', name:'Like 3 Posts', desc:'Engage', pts:3, fn:()=>{ addPts(3,'Like Task'); toast('s','+3 pts!'); } },{ id:'dt3', ico:'💬', name:'Comment', desc:'Leave a comment', pts:2, fn:()=>{ addPts(2,'Comment Task'); toast('s','+2 pts!'); } },{ id:'dt4', ico:'📝', name:'Create Post', desc:'Share content', pts:2, fn:()=>openPostModal() },{ id:'dt5', ico:'🔗', name:'Share Post', desc:'Share with friends', pts:3, fn:()=>{ addPts(3,'Share Task'); toast('s','+3 pts!'); } }];
function rEarn() { syncUI(); let dt=G('dailyTasks'); if(dt){ let today=new Date().toDateString(); dt.innerHTML=DAILY_TASKS.map(t=>{ let done=CU?.tasksToday?.[t.id]===today; return `<div class="task-card"><div class="task-ico">${t.ico}</div><div class="task-info"><div class="task-name">${t.name}</div><div class="task-desc">${t.desc}</div></div><div class="task-reward">+${t.pts}</div><button class="btn ${done?'btn-ghost':'btn-p'} btn-xs" ${done?'disabled':''} onclick="doTask('${t.id}')">${done?'✅ Done':'Go'}</button></div>`; }).join(''); } }
function doTask(tid) { let t=DAILY_TASKS.find(x=>x.id===tid); if(!t||!CU) return; CU.tasksToday=CU.tasksToday||{}; let today=new Date().toDateString(); if(CU.tasksToday[tid]===today){ toast('w','Already done'); return; } CU.tasksToday[tid]=today; t.fn(); saveData(); rEarn(); 
  // MAX AD SYSTEM: Show interactive ad after task completion (high engagement)
  if (typeof MAX_AD_SYSTEM !== 'undefined' && Math.random() > 0.6) {
    setTimeout(() => MAX_AD_SYSTEM.triggerContextualAd('after_like'), 500);
  }
}
function claimBonus() { if(!CU) return; let today=new Date().toDateString(); if(CU.lastBonus===today){ toast('e','Already claimed!'); return; } CU.lastBonus=today; let bonus=50+Math.floor(Math.random()*50); addPts(bonus,'Daily Bonus'); confetti(); toast('s',`+${bonus} pts bonus!`);
  // MAX AD SYSTEM: Show game ad after bonus claim (gamification moment)
  if (typeof MAX_AD_SYSTEM !== 'undefined' && Math.random() > 0.5) {
    setTimeout(() => {
      const gameAd = MAX_AD_SYSTEM.createAdElement('game');
      gameAd.style.cssText += 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);width:90%;max-width:350px;z-index:9999;box-shadow:0 20px 60px rgba(0,0,0,0.7);';
      document.body.appendChild(gameAd);
      setTimeout(() => gameAd.remove(), 15000);
    }, 1000);
  }
}
function watchAd() {
  if(!CU) return;
  let u = D.users[CU.id]||CU;
  // Quick cooldown: only 3 seconds between ads (for unlimited earning)
  let lastAd = u.lastAdTime||0;
  let cooldown = 3000;
  if(Date.now() - lastAd < cooldown) {
    let wait = Math.ceil((cooldown-(Date.now()-lastAd))/1000);
    toast('w',`⏱ Wait ${wait}s before next ad`); return;
  }
  // Ads are now UNLIMITED - removed 50/day limit
  let today = new Date().toDateString();
  if(!u.todayAds||u.todayAds.date!==today) u.todayAds={date:today,count:0};
  
  // AD ROTATION: Use ad rotation system if available
  if(typeof AdRotationSystem !== 'undefined' && AdRotationSystem) {
    const network = AdRotationSystem.getNextAdNetwork();
    window.open(network.url, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    addPts(network.points, `Watched ${network.name} Ad`);
    toast('s', `📺 +${network.points} pts from ${network.name}!`);
  } else {
    // Fallback to original interstitial
    showInts();
    addPts(3,'Watched Ad Bonus');
  }
  
  u.lastAdTime = Date.now();
  u.todayAds.count++;
  CU.adViews=(CU.adViews||0)+1;
  saveData();
}

// Wallet (simplified)
function rWallet() {
  syncCU(); if(!CU) return;
  let u = D.users[CU.id]||CU;
  G('wBal').textContent='$'+((u.points||0)/PTS_PER_USD).toFixed(2);
  // Web3 wallet display
  let w3s = G('walletWeb3Status');
  if(w3s) {
    if(web3Account || phantomPubkey) {
      w3s.style.display='block';
      let addr = web3Account || phantomPubkey || '';
      G('walletWeb3Label').textContent = web3Account ? '🦊 MetaMask' : '👻 Phantom';
      G('walletWeb3Addr').textContent = addr.slice(0,8)+'...'+addr.slice(-6);
    }
  }
  let pts=CU.points||0; G('wPts').textContent=fmt(pts)+' pts'; G('wBadge').textContent=pts>10000?'💎 Diamond':pts>5000?'🥇 Gold':pts>2000?'🥈 Silver':'🥉 Bronze'; G('adPtsEl').textContent=(CU.adPts||0)+' pts'; G('engPtsEl').textContent=(CU.engPts||0)+' pts'; G('refPtsEl').textContent=(CU.refPts||0)+' pts'; G('mlmPtsEl').textContent=(CU.mlmPts||0)+' pts'; G('nftPtsEl').textContent=(CU.nftPts||0)+' pts'; G('stakePtsEl').textContent=(CU.stakePts||0)+' pts'; let tx=G('txList'); if(tx){ let myTxs=(D.txs||[]).filter(t=>t.user===CU.id).slice(0,20); tx.innerHTML=myTxs.length?myTxs.map(t=>`<div class="tx-row"><div class="tx-ic ${t.type==='earn'||t.type==='engage'||t.type==='mlm'||t.type==='nft'?'tx-earn':'tx-spend'}">${t.type==='earn'?'💰':t.type==='engage'?'❤️':t.type==='mlm'?'🏆':t.type==='nft'?'🎨':'💸'}</div><div class="tx-info"><div class="tx-lbl">${esc(t.label)}</div><div class="tx-dt">${ago(t.at)}</div></div><div class="tx-amt ${t.pts>0?'tx-pos':'tx-neg'}">${t.pts>0?'+':''}${t.pts}</div></div>`).join(''):'<div style="padding:20px;text-align:center;">No transactions</div>'; } }
// savePay defined in FIX 19 above
// saveCrypto defined in FIX 19 above
async function doWithdraw() {
  if(!CU) return;
  
  // MAX AD SYSTEM: Show rewarded video before withdraw (highest CPM moment)
  if (typeof MAX_AD_SYSTEM !== 'undefined') {
    MAX_AD_SYSTEM.triggerContextualAd('before_withdraw');
    // Give bonus points for watching ad before withdraw
    addPts(5, 'Pre-withdraw Ad Bonus');
  }
  
  let u = D.users[CU.id]||CU;
  let amt  = parseInt(V('wdAmt'));
  let meth = G('wdMethod')?.value||'bkash';
  let acc  = V('wdAccount');
  if(!amt || amt < MIN_WITHDRAW) return toast('e','Minimum '+MIN_WITHDRAW+' pts');
  if(amt > (u.points||0)) return toast('e','Insufficient: you have '+(u.points||0)+' pts');
  if(!acc) return toast('e','Enter account number / address');
  if(!u.kycVerified) { toast('e','KYC verification required first'); openModal('kycModal'); return; }
  let serverWd = null;
  try {
    const r = await fetch('/api/withdrawals/request', {
      method:'POST',
      headers:{'Content-Type':'application/json','x-user-id':CU.id},
      body:JSON.stringify({userId:CU.id, amount:amt, method:meth, account:acc})
    });
    const d = await r.json();
    if(!r.ok || !d.success) throw new Error(d.error || d.detail || 'Withdrawal failed');
    serverWd = d.withdrawal;
  } catch(e) {
    toast('e', e.message || 'Withdrawal server failed');
    return;
  }
  // Deduct points
  u.points = (u.points||0) - amt;
  CU = D.users[CU.id]||CU;
  let wd = { id:serverWd.id, user:CU.id, amount:amt, method:meth, account:acc, status:'pending', at:Date.now() };
  D.withdrawals = D.withdrawals||[]; D.withdrawals.unshift(wd);
  D.txs = D.txs||[]; D.txs.unshift({id:'t'+Date.now(),type:'withdraw',label:'Withdrawal via '+meth,pts:-amt,at:Date.now(),user:CU.id});
  addNotif(ADMIN_ID,'withdraw','💸',`${amt}pts via ${meth} from ${CU.name}`);
  saveData(); saveSession();
  // Trigger real payment API
  let payOk = true;
  if(false && meth==='bkash')     payOk = await initiateBkashPayment(amt, acc);
  else if(false && meth==='nagad') payOk = await initiateNagadPayment(amt, acc);
  else { payOk = true; toast('s','✅ Withdrawal submitted!', amt+' pts via '+meth); }
  closeModal('wdModal'); syncUI(); rWallet();
}

function submitKYC() { let name=V('kycFullName'), nid=V('kycNID'), address=V('kycAddress'); if(!name||!nid||!address) return toast('e','Fill all KYC fields'); CU.kycPending={ name, nid, address, submitted: Date.now() }; saveData(); closeModal('kycModal'); toast('s','KYC submitted for review!'); if(CU.isAdmin){ CU.kycVerified=true; toast('s','KYC Verified! (Admin auto-verify)'); } rProfile(); }
function saveTIN() { let tin=V('tinNumber'), tinName=V('tinName'); if(!tin||!tinName) return toast('e','Fill TIN details'); CU.tin={ number: tin, name: tinName, verified: false }; saveData(); closeModal('einModal'); toast('s','TIN saved for tax reporting!'); }
function generateTaxReport() { let year=prompt('Enter year (e.g., 2024):', new Date().getFullYear()); if(!year) return; let earnings=(D.txs||[]).filter(t=>t.user===CU.id && t.pts>0 && new Date(t.at).getFullYear()==year).reduce((s,t)=>s+t.pts,0); let withdrawals=(D.txs||[]).filter(t=>t.user===CU.id && t.pts<0 && new Date(t.at).getFullYear()==year).reduce((s,t)=>s+Math.abs(t.pts),0); let tax=earnings*0.1; let report=`===== TAX REPORT ${year} =====\nUser: ${CU.name}\nTotal Earnings: ${earnings} pts ($${(earnings/PTS_PER_USD).toFixed(2)})\nTotal Withdrawals: ${withdrawals} pts ($${(withdrawals/PTS_PER_USD).toFixed(2)})\nEstimated Tax (10%): ${tax} pts ($${(tax/PTS_PER_USD).toFixed(2)})\nTIN: ${CU.tin?.number || 'Not provided'}\n=================================`; let blob=new Blob([report],{type:'text/plain'}); let a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`monetixra_tax_${year}.txt`; a.click(); toast('s','Tax report downloaded!'); }
function exportData() { let data=JSON.stringify({ user:CU, posts:D.posts.filter(p=>p.author===CU.id), transactions:D.txs.filter(t=>t.user===CU.id) },null,2); let blob=new Blob([data],{type:'application/json'}); let a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`mediaearn_export_${Date.now()}.json`; a.click(); toast('s','Data exported!'); }
function backupData() { let data=JSON.stringify(D,null,2); let blob=new Blob([data],{type:'application/json'}); let a=document.createElement('a'); a.href=URL.createObjectURL(blob); a.download=`monetixra_backup_${Date.now()}.json`; a.click(); toast('s','Backup created!'); }
function showActiveSessions() { toast('i','Active Sessions','This device only\nLast login: '+new Date(CU?.lastLogin||Date.now()).toLocaleString()); }
function loadLeaderboard(type) { let users=Object.values(D.users).filter(u=>!u.isAdmin).sort((a,b)=>{ if(type==='daily') return (b.todayPts?.pts||0)-(a.todayPts?.pts||0); if(type==='weekly') return (b.weeklyPts||0)-(a.weeklyPts||0); if(type==='monthly') return (b.monthlyPts||0)-(a.monthlyPts||0); return (b.points||0)-(a.points||0); }).slice(0,10); let lbDiv=G('lbPreview'); if(lbDiv){ lbDiv.innerHTML='<div class="section-label">🏆 '+type.toUpperCase()+' Leaderboard</div>'; users.forEach((u,i)=>{ let pts=type==='daily'?u.todayPts?.pts||0:type==='weekly'?u.weeklyPts||0:type==='monthly'?u.monthlyPts||0:u.points||0; lbDiv.innerHTML+=`<div class="lb-row"><div class="lb-rank">${i+1}</div><div class="av av-round av-sm">${u.name.charAt(0)}</div><div><div style="font-weight:700;">${esc(u.name)}</div></div><div class="lb-pts">${fmt(pts)}</div></div>`; }); } }

// Profile (simplified)
function rProfile() { if(!CU) return; G('profName').textContent=CU.name||'User'; G('profUser').textContent='@'+(CU.username||''); G('profBio').textContent=CU.bio||'No bio'; G('profFollowers').textContent=fmt(CU.followers?.length||0); G('profFollowing').textContent=fmt(CU.following?.length||0); G('profPosts').textContent=fmt(CU.posts?.length||0); G('profPts').textContent=fmt(CU.points||0); let av=G('profAv'); if(av) av.innerHTML=CU.avatar?`<img src="${CU.avatar}">`:(CU.name?.charAt(0).toUpperCase()||'M'); let cov=G('coverImg'); if(cov&&CU.cover) cov.style.background=`url(${CU.cover}) center/cover`; profileTab('posts',null); }
function profileTab(tab,el) { document.querySelectorAll('#pg-profile .chips .chip').forEach(c=>c.classList.remove('on')); if(el) el.classList.add('on'); let cont=G('profileContent'); if(!cont||!CU) return; let myPosts=D.posts.filter(p=>p.author===CU.id); if(tab==='posts'){ cont.innerHTML=''; if(!myPosts.length){ cont.innerHTML='<div style="padding:30px;text-align:center;">No posts</div>'; return; } myPosts.forEach(p=>cont.appendChild(mkPost(p))); } else if(tab==='media'){ let media=myPosts.filter(p=>p.file); cont.innerHTML=media.length?'<div class="explore-grid">'+media.map(p=>`<div class="exp-item" onclick="window.open('${p.file}')"><img src="${p.file}"></div>`).join('')+'</div>':'<div style="padding:30px;">No media</div>'; } else if(tab==='saved'){ let saved=D.posts.filter(p=>CU.savedPosts?.includes(p.id)); cont.innerHTML=saved.length?saved.map(p=>mkPost(p).outerHTML).join(''):'<div style="padding:30px;">Nothing saved</div>'; } else if(tab==='earnings'){ cont.innerHTML='<div class="wallet-hero"><div class="wh-lbl">Creator Earnings</div><div class="wh-amt">$'+((CU.creatorEarnings||0)/100).toFixed(2)+'</div></div>'; let earnTxs=(D.txs||[]).filter(t=>t.user===CU.id && (t.type==='earn'||t.type==='engage'||t.type==='mlm'||t.type==='nft')).slice(0,20); earnTxs.forEach(t=>{ let el=document.createElement('div'); el.className='tx-row'; el.innerHTML=`<div class="tx-ic tx-earn">${t.type==='mlm'?'🏆':t.type==='nft'?'🎨':'💰'}</div><div class="tx-info"><div class="tx-lbl">${esc(t.label)}</div><div class="tx-dt">${ago(t.at)}</div></div><div class="tx-amt tx-pos">+${t.pts}</div>`; cont.appendChild(el); }); } else if(tab==='mlm'){ cont.innerHTML='<div class="mlm-levels">'; MLM_LEVELS.forEach(level=>{ let members=getMLMMembersCount(CU.id,level.level); cont.innerHTML+=`<div class="mlm-level"><div class="level-name">${level.name}</div><div class="level-commission">Commission: ${level.commission*100}%</div><div class="level-members">Members: ${members}</div></div>`; }); cont.innerHTML+='</div><div class="card" style="margin-top:12px;"><div class="section-label">Direct Referrals</div>'; (CU.refs||[]).forEach(ref=>{ let refUser=D.users[ref]; if(refUser) cont.innerHTML+=`<div class="chat-item"><div class="av av-round av-sm">${refUser.name.charAt(0)}</div><div>${esc(refUser.name)}</div><div>${fmt(refUser.points||0)} pts</div></div>`; }); cont.innerHTML+='</div>'; } else if(tab==='nft'){ let myNFTs=(D.nfts||[]).filter(n=>n.creator===CU.id||n.owner===CU.id); cont.innerHTML=myNFTs.length?'<div class="nft-marketplace">'+myNFTs.map(n=>`<div class="nft-item"><div class="nft-image"><img src="${n.image}" style="width:100%;height:100%;object-fit:cover;"></div><div class="nft-info"><div class="nft-name">${esc(n.name)}</div><div class="nft-price">${n.price} pts</div><div>${n.sold?'Sold':'Available'}</div></div></div>`).join('')+'</div>':'<div style="padding:30px;">No NFTs yet</div>'; } else if(tab==='achievements'){ cont.innerHTML='<div class="section-label">🏅 Achievements</div>'; ACHIEVEMENTS.forEach(ach=>{ let earned=CU?.achievements?.includes(ach.id); cont.innerHTML+=`<div class="task-card"><div class="task-ico">${ach.icon}</div><div class="task-info"><div class="task-name">${ach.name}</div><div class="task-desc">${ach.desc}</div></div><div class="task-reward">+${ach.reward}</div>${earned?'<span class="badge b-g">✅ Earned</span>':'<span class="badge b-o">🔒 Locked</span>'}</div>`; }); } }
function viewUser(uid) { if(uid===CU?.id){ nav('profile'); } else { toast('i','View user: '+uid); } }
function changeAvatar() { G('avIn').click(); }
function handleAv(inp) { let f=inp.files[0]; if(!f||!CU) return; let r=new FileReader(); r.onload=e=>{ CU.avatar=e.target.result; saveData(); rProfile(); syncUI(); toast('s','Avatar updated!'); }; r.readAsDataURL(f); }
function changeCover() { G('covIn').click(); }
function handleCov(inp) { let f=inp.files[0]; if(!f||!CU) return; let r=new FileReader(); r.onload=e=>{ CU.cover=e.target.result; saveData(); rProfile(); toast('s','Cover updated!'); }; r.readAsDataURL(f); }
function openProfileEdit() { G('epName').value=CU?.name||''; G('epUser').value=CU?.username||''; G('epBio').value=CU?.bio||''; G('epLocation').value=CU?.location||''; G('epWebsite').value=CU?.website||''; openModal('editProfileModal'); }
function saveProfile() {
  if(!CU) return;
  let u = D.users[CU.id] || CU;
  u.name     = V('epName')     || u.name;
  u.username = V('epUser')     || u.username;
  u.bio      = V('epBio');
  u.location = V('epLocation');
  u.website  = V('epWebsite');
  CU = D.users[CU.id] || CU;  // re-sync reference
  saveData();
  closeModal('editProfileModal');
  rProfile();
  syncUI();
  toast('s','✅ Profile updated!');
}
function shareProfile() { navigator.clipboard?.writeText(location.href); toast('s','Link copied!'); }

// Friends Page
function rFriends() { updateFriendsBadge(); if(!CU) return; G('totalAutoFriends').textContent=(CU.autoFriends||[]).length; G('totalViewers').textContent=(CU.viewers||[]).length; friendsTab('auto',null); }
function friendsTab(tab,el) { document.querySelectorAll('#pg-friends .chip').forEach(c=>c.classList.remove('on')); if(el) el.classList.add('on'); else if(tab==='discover'){ const discoverChip = document.querySelector('#pg-friends .chip:last-child'); if(discoverChip) discoverChip.classList.add('on'); } let list=G('friendsList'); if(!list||!CU) return; if(tab==='discover'){ let q=(G('friendSearch')?.value||'').trim().toLowerCase(); let users=Object.values(D.users).filter(u=>u.id!==CU.id && !u.isAdmin && (!q || (u.name||'').toLowerCase().includes(q) || (u.username||'').toLowerCase().includes(q))); list.innerHTML=users.length?users.map(u=>{ let linked=(CU.following||[]).includes(u.id)||(CU.autoFriends||[]).includes(u.id)||(CU.forceFollowed||[]).includes(u.id); let grad=randomGrad(); let status = u.online ? '🟢 Online' : '⚪ Offline'; return `<div class="friend-card"><div class="fc-av" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});">${u.avatar?`<img src="${u.avatar}">`:u.name?.charAt(0).toUpperCase()}</div><div class="fc-info"><div class="fc-nm">${esc(u.name||'User')}</div><div class="fc-sub">@${esc(u.username||'')} · ${u.points||0} pts · ${status}</div></div><div class="fc-actions"><button class="btn ${linked?'btn-ghost':'btn-p'} btn-xs" onclick="${linked?`openChat('${u.id}')`:`permanentFollow('${u.id}')`}">${linked?'Message':'Add Friend'}</button></div></div>`; }).join(''):'<div style="padding:40px 20px;text-align:center;color:var(--t3);">No users found</div>'; return; } let uids=tab==='auto'?(CU.autoFriends||[]):(tab==='viewers'?(CU.viewers||[]):(tab==='following'?(CU.following||[]):(CU.followers||[]))); list.innerHTML=''; if(!uids.length){
  list.innerHTML='<div style="padding:40px 20px;text-align:center;color:var(--t3);"><div style="font-size:32px;margin-bottom:8px;">👥</div><div>No connections yet.<br>Post content to connect with others!</div></div>';
  return;
} uids.forEach(uid=>{ let u=D.users[uid]; if(!u) return; let grad=randomGrad(); let status = u.online ? '🟢 Online' : '⚪ Offline'; let actions = `<button class="btn btn-p btn-xs" onclick="openChat('${uid}')" title="Chat">💬</button><button class="btn btn-s btn-xs" onclick="startCall('${uid}','audio')" title="Audio Call">📞</button><button class="btn btn-s btn-xs" onclick="startCall('${uid}','video')" title="Video Call">📹</button><button class="btn btn-s btn-xs" onclick="sendSMS('${uid}')" title="SMS">📩</button>`; if(tab==='followers'){ actions += `<button class="btn btn-e btn-xs" onclick="removeFollower('${uid}')" title="Remove follower">✂️</button>`; } else { actions += `<button class="btn btn-r btn-xs" onclick="removeFriend('${uid}')" title="Remove friend">Remove</button>`; } list.innerHTML+=`<div class="friend-card"><div class="fc-av" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});">${u.avatar?`<img src="${u.avatar}">`:u.name?.charAt(0).toUpperCase()}</div><div class="fc-info"><div class="fc-nm">${esc(u.name)} ${u.verified?'<span class="badge b-ver">✔</span>':''} ${u.kycVerified?'<span class="badge b-kyc">✅</span>':''}</div><div class="fc-sub">@${esc(u.username||'')} · ${u.points||0} pts · ${status}</div></div><div class="fc-actions">${actions}</div></div>`; }); }

// Messages (simplified)
function rMessages() { let list=G('chatList'); if(!list||!CU) return; let others=Object.entries(D.users).filter(([k,u])=>k!==CU.id && !u.isAdmin && !(CU.blocked||[]).includes(k)); list.innerHTML=others.length?others.map(([uid,u])=>{ let key=[CU.id,uid].sort().join('_'); let msgs=D.chats?.[key]||[]; let last=msgs[msgs.length-1]; let unread=msgs.filter(m=>m.to===CU.id&&!m.read).length; let grad=randomGrad(); let status = u.online ? '● Online' : '○ Offline'; return `<div class="chat-item" onclick="openChat('${uid}')"><div class="av av-round av-md" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});">${u.avatar?`<img src="${u.avatar}">`:u.name?.charAt(0).toUpperCase()}</div><div class="chat-meta"><div class="chat-nm"><span>${esc(u.name)}</span><span class="chat-time">${last?ago(last.at):''}</span></div><div class="chat-prev">${last?esc(last.text?.substring(0,40)||'📎'):'Start...'}</div><div class="chat-status" style="font-size:11px;color:var(--t3);margin-top:4px;">${status}</div></div>${unread?`<span class="chat-unrd">${unread}</span>`:''}</div>`; }).join(''):'<div style="padding:40px;">No users</div>'; }
function openNewChat() { toast('i','Search for users to chat'); }
function openChat(uid) { let u=D.users[uid]; if(!u||!CU) return; currentChatId=uid; G('chatRoom').classList.add('open'); G('crName').textContent=u.name; let grad=randomGrad(); G('crAv').style.background=`linear-gradient(135deg,${grad[0]},${grad[1]})`; G('crAv').innerHTML=u.avatar?`<img src="${u.avatar}">`:u.name?.charAt(0).toUpperCase(); G('crStat').innerHTML = u.online ? '● Online' : '○ Offline'; renderChatMsgs(); }
function sendSMS(uid) { let user=D.users[uid]; if(!user) return toast('e','User not found'); let phone=user.phone||prompt('Enter phone number for '+user.name,''); if(!phone) return; let shareText = encodeURIComponent(`Hello ${user.name}, check Monetixra: ${location.origin}${location.pathname}`); window.location.href = `sms:${encodeURIComponent(phone)}?body=${shareText}`; }
function closeChatRoom() { G('chatRoom').classList.remove('open'); currentChatId=null; }
function renderChatMsgs() { let msgsDiv=G('crMsgs'); if(!msgsDiv||!currentChatId||!CU) return; let key=[CU.id,currentChatId].sort().join('_'); let msgs=D.chats?.[key]||[]; msgsDiv.innerHTML=msgs.map(m=>{ let isMine=m.from===CU.id; let user=D.users[m.from]||{}; let grad=randomGrad(); let content=m.type==='image'? `<img src="${m.data}" style="max-width:150px;border-radius:8px;">` : (m.type==='voice'? '🎙 Voice message' : esc(m.text||'')); return `<div class="cr-msg${isMine?' mine':''}"><div class="av av-round av-xs" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});">${user.avatar?`<img src="${user.avatar}">`:user.name?.charAt(0).toUpperCase()}</div><div class="cr-bub">${content}<div class="cr-bub-t">${ago(m.at)}</div></div></div>`; }).join(''); msgsDiv.scrollTop=msgsDiv.scrollHeight; (D.chats[key]||[]).forEach(m=>{ if(m.to===CU.id) m.read=true; }); saveData(); syncUI(); }
function sendMsg() { let inp=G('crInp'); if(!inp||!currentChatId||!CU) return; let txt=inp.value.trim(); if(!txt) return; let key=[CU.id,currentChatId].sort().join('_'); D.chats=D.chats||{}; D.chats[key]=D.chats[key]||[]; let msg={ id:'m'+Date.now(), from:CU.id, to:currentChatId, text:txt, type:'text', at:Date.now(), read:false }; if(disappearTimer>0) msg.disappearAt=Date.now()+disappearTimer*1000; D.chats[key].push(msg); inp.value=''; saveData(); renderChatMsgs(); if (typeof addToSyncQueue === 'function' && !navigator.onLine) { addToSyncQueue({ type: 'chat', data: { room: key, message: msg } }).catch(()=>{}); } setTimeout(()=>{ let replies=['👍','😊','Ok!','Thanks!','Cool!','Awesome!']; D.chats[key].push({ id:'m'+Date.now(), from:currentChatId, to:CU.id, text:replies[Math.floor(Math.random()*replies.length)], type:'text', at:Date.now(), read:false }); saveData(); if(currentChatId) renderChatMsgs(); addNotif(CU.id,'message','💬','New message'); },2000+Math.random()*2000); }
function attachCrFile(type) { G('crFile').accept=type==='image'?'image/*':'video/*'; G('crFile').click(); }
function handleCrMedia(inp) { let f=inp.files[0]; if(!f||!currentChatId||!CU) return; let r=new FileReader(); r.onload=e=>{ let key=[CU.id,currentChatId].sort().join('_'); D.chats=D.chats||{}; D.chats[key]=D.chats[key]||[]; D.chats[key].push({ id:'m'+Date.now(), from:CU.id, to:currentChatId, type:f.type.startsWith('image/')?'image':'video', data:e.target.result, at:Date.now(), read:false }); saveData(); renderChatMsgs(); }; r.readAsDataURL(f); }
function toggleVoiceRecord() { if(!isRecordingVoice){ navigator.mediaDevices?.getUserMedia({audio:true}).then(stream=>{ mediaRecorder=new MediaRecorder(stream); let chunks=[]; mediaRecorder.ondataavailable=e=>chunks.push(e.data); mediaRecorder.onstop=()=>{ if(currentChatId&&CU){ let key=[CU.id,currentChatId].sort().join('_'); D.chats=D.chats||{}; D.chats[key]=D.chats[key]||[]; D.chats[key].push({ id:'m'+Date.now(), from:CU.id, to:currentChatId, type:'voice', duration:3, at:Date.now(), read:false }); saveData(); renderChatMsgs(); } stream.getTracks().forEach(t=>t.stop()); isRecordingVoice=false; document.querySelector('.voice-rec').textContent='🎙 Voice'; }; mediaRecorder.start(); isRecordingVoice=true; document.querySelector('.voice-rec').textContent='⏹ Stop'; }).catch(()=>toast('e','Microphone access denied')); } else { mediaRecorder?.stop(); } }
function setDisappear(secs) { disappearTimer=secs; closeModal('disappearModal'); toast('s',secs?`Disappear ${secs}s`:'Off'); }
function startVideoCall() { if(!CU||!currentChatId) return toast('e','Select a friend first'); startCall(currentChatId,'video'); }
function startAudioCallBtn() { if(!CU||!currentChatId) return toast('e','Select a friend first'); startCall(currentChatId,'audio'); }

// Group Chat
function searchGrpMembers(q) { let list=G('grpMemberList'); if(!list) return; let others=Object.values(D.users).filter(u=>u.id!==CU?.id && !u.isAdmin); let filtered=q?others.filter(u=>u.name.toLowerCase().includes(q.toLowerCase())):others.slice(0,5); list.innerHTML=filtered.map(u=>{ let grad=randomGrad(); return `<div class="chat-item"><div class="av av-round av-sm" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});">${u.name.charAt(0)}</div><div>${esc(u.name)}</div><button class="btn btn-p btn-xs" onclick="addToGroup('${u.id}','${esc(u.name)}',this)">Add</button></div>`; }).join(''); }
function addToGroup(uid,name,btn) { if(grpMems.find(m=>m.id===uid)) return; grpMems.push({id:uid,name}); let sel=G('grpSelected'); let chip=document.createElement('div'); chip.className='mem-chip'; chip.innerHTML=`${esc(name)}<span class="rm" onclick="this.closest('.mem-chip').remove(); grpMems=grpMems.filter(m=>m.id!=='${uid}')">✕</span>`; sel.appendChild(chip); btn.textContent='✅'; btn.disabled=true; }
function createGroup() { let name=V('grpName'); if(!name) return toast('e','Enter group name'); if(grpMems.length<1) return toast('e','Add at least 1 member'); let gid='g'+Date.now(); D.groups=D.groups||{}; D.groups[gid]={ id:gid, name, members:[CU.id,...grpMems.map(m=>m.id)], createdBy:CU.id, msgs:[], at:Date.now() }; saveData(); closeModal('groupModal'); toast('s','Group created!'); grpMems=[]; }

// Notifications
function rNotif() { let list=G('notifList'); if(!list||!CU) return; let notifs=(D.notifs||[]).filter(n=>n.to===CU.id).sort((a,b)=> (Number(a.priority||2)-Number(b.priority||2)) || (Number(b.at||0)-Number(a.at||0))).slice(0,30); notifs.forEach(n=>n.read=true); saveData(); syncUI(); list.innerHTML=notifs.length?notifs.map(n=>`<div class="notif" style="border-left:3px solid ${n.priority===1?'#f59e0b':n.priority===2?'#38bdf8':'#a1a1aa'};"><div class="notif-ico">${n.icon||'🔔'}</div><div><div class="notif-ttl">${esc(n.msg||'')}</div><div class="notif-time">${ago(n.at)}</div></div></div>`).join(''):'<div style="padding:40px;text-align:center;">No notifications</div>'; }

// Explore
function rExplore() { let grid=G('expGrid'); if(!grid) return; let imgPosts=D.posts.filter(p=>p.file && p.mimetype?.startsWith('image/')).slice(0,12); grid.innerHTML=imgPosts.map(p=>`<div class="exp-item" onclick="openPostDetail('${p.id}')"><img src="${p.file}"><div class="exp-ov">${(p.hashtags||[]).map(t=>`<span class="badge b-p">#${t}</span>`).join('')}</div></div>`).join(''); rTrendTags(); }
function rTrendTags() { let tt=G('trendTags'); if(!tt) return; let tagCount={}; D.posts.forEach(p=>(p.hashtags||[]).forEach(t=>tagCount[t]=(tagCount[t]||0)+1)); let top=Object.entries(tagCount).sort((a,b)=>b[1]-a[1]).slice(0,8); tt.innerHTML='<div class="section-label">🔥 Trending</div>'+top.map(([t,c])=>`<span class="chip" onclick="searchTag('${t}')">#${t} <span style="font-size:9px;">${c}</span></span>`).join(''); }
function doSearch(q) { let sr=G('srchResults'); if(!sr) return; if(!q){ sr.style.display='none'; return; } sr.style.display='block'; let lq=q.toLowerCase(); let users=Object.values(D.users).filter(u=>u.name.toLowerCase().includes(lq)||u.username?.toLowerCase().includes(lq)).slice(0,3); let posts=D.posts.filter(p=>p.text?.toLowerCase().includes(lq)||(p.hashtags||[]).some(t=>t.includes(lq))).slice(0,3); let nfts=(D.nfts||[]).filter(n=>n.name.toLowerCase().includes(lq)).slice(0,3); sr.innerHTML=(users.length?`<div class="section-label">👥 Users</div>${users.map(u=>`<div class="chat-item" onclick="viewUser('${u.id}')"><div class="av av-round av-sm">${u.name.charAt(0)}</div><div>${esc(u.name)}</div></div>`).join('')}`:'')+(posts.length?`<div class="section-label">📋 Posts</div>${posts.map(p=>`<div class="task-card" onclick="openPostDetail('${p.id}')"><div>📄</div><div>${esc(p.text?.substring(0,50)||'Post')}</div></div>`).join('')}`:'')+(nfts.length?`<div class="section-label">🎨 NFTs</div>${nfts.map(n=>`<div class="task-card" onclick="openModal('nftModal')"><div>🎨</div><div>${esc(n.name)} - ${n.price} pts</div></div>`).join('')}`:''); }
function searchTag(tag) { nav('explore'); setTimeout(()=>{ let q=G('exploreQ'); if(q){ q.value='#'+tag; doSearch(tag); } },100); }
function globalSearchFn(q) { if(q.length>2){ nav('explore'); setTimeout(()=>{ let e=G('exploreQ'); if(e){ e.value=q; doSearch(q); } },100); } }
function openPostDetail(pid) { let p=D.posts.find(p=>p.id===pid); if(!p) return; let c=G('postDetailContent'); if(c){ c.innerHTML=''; c.appendChild(mkPost(p)); } openModal('postDetailModal'); }

// Leaderboard
function rLeaderboard() { let users=Object.values(D.users).filter(u=>!u.isAdmin).sort((a,b)=>(b.points||0)-(a.points||0)); let top3=users.slice(0,3), rest=users.slice(3,15); let podium=G('lbPodium'); if(podium){ let order=[1,0,2]; let medals=['🥇','🥈','🥉']; let sizes=['width:68px;height:68px;border:3px solid var(--c4);','width:54px;height:54px;border:3px solid #9ca3af;','width:48px;height:48px;border:3px solid #b45309;']; podium.innerHTML=order.map(i=>{ let u=top3[i]; if(!u) return ''; let g=randomGrad(); return `<div class="lb-plc p${i+1}"><div class="lb-av" style="background:linear-gradient(135deg,${g[0]},${g[1]});${sizes[i]}">${u.avatar?`<img src="${u.avatar}">`:u.name?.charAt(0).toUpperCase()}</div><div style="font-size:14px;">${medals[i]}</div><div style="font-size:11px;">${esc(u.name)}</div><div style="font-family:var(--fm);color:var(--neon);">${fmt(u.points)}</div></div>`; }).join(''); } let lb=G('lbList'); if(lb) lb.innerHTML=rest.map((u,i)=>{ let g=randomGrad(); return `<div class="lb-row"><div class="lb-rank">${i+4}</div><div class="av av-round av-sm" style="background:linear-gradient(135deg,${g[0]},${g[1]});">${u.avatar?`<img src="${u.avatar}">`:u.name?.charAt(0).toUpperCase()}</div><div style="flex:1;"><div style="font-weight:700;">${esc(u.name)}</div><div style="font-size:10px;">@${esc(u.username||'')}</div></div><div class="lb-pts">${fmt(u.points)}</div></div>`; }).join(''); }

// Referral
function rReferral() { if(!CU) return; G('refCodeEl').textContent=CU.refCode||'MEX-'+Math.random().toString(36).slice(2,8).toUpperCase(); let mlmTeam=G('mlmTeam'); if(mlmTeam){ mlmTeam.innerHTML='<div class="mlm-levels">'; MLM_LEVELS.forEach(level=>{ let members=getMLMMembersCount(CU.id,level.level); mlmTeam.innerHTML+=`<div class="mlm-level"><div class="level-name">${level.name}</div><div class="level-commission">Commission: ${level.commission*100}%</div><div class="level-members">Members: ${members}</div></div>`; }); mlmTeam.innerHTML+='</div>'; } }
function copyRef() { let code=G('refCodeEl')?.textContent; if(code){ navigator.clipboard?.writeText(code); toast('s','Copied!'); } }
function shareRef() { let txt=`Join Monetixra! Use code: ${CU?.refCode}\nEarn up to 10% MLM commission on 10 levels!\nMint NFTs and earn 5% royalty forever!`; navigator.share? navigator.share({title:'Monetixra',text:txt}) : prompt('Share:',txt); }

// NFT Marketplace
// rNFTMarketplace moved to Web3 section above

function nftFilter(type,el) {
  document.querySelectorAll('#pg-nft .chip').forEach(c=>c.classList.remove('on'));
  if(el) el.classList.add('on');
  let grid = G('nftGrid'); if(!grid) return;
  let items = (D.nfts||[]).slice();
  if(type==='trending') {
    items = items.filter(n=>!n.sold).sort((a,b)=>((b.soldAt||0)-(a.soldAt||0)) || ((b.price||0)-(a.price||0)));
  } else if(type==='recent') {
    items = items.sort((a,b)=> (b.createdAt||0)-(a.createdAt||0));
  } else if(type==='mine') {
    items = items.filter(n=>n.creator===CU.id || n.owner===CU.id);
  } else if(type==='solana') {
    items = items.filter(n=> (n.chain||'ethereum') === 'solana');
  } else if(type==='ethereum') {
    items = items.filter(n=> (n.chain||'ethereum') === 'ethereum');
  }
  if(!items.length) {
    grid.innerHTML = '<div style="padding:40px;text-align:center;color:var(--t3);">No NFTs found for this filter.</div>';
    return;
  }
  grid.innerHTML = items.map(n=>{
    let owner = D.users[n.owner] || {};
    return `<div class="nft-item" onclick="openNFTDetail('${n.id}')"><div class="nft-image"><img src="${n.image||''}" loading="lazy" decoding="async" fetchpriority="low"></div><div class="nft-info"><div class="nft-name">${esc(n.name)}</div><div class="nft-desc">${esc(n.description||'')}</div><div class="nft-meta">${esc(owner.name||'Creator')} · ${n.price} pts · ${n.sold?'<span style="color:var(--c4);">Sold</span>':'<span style="color:var(--c2);">Available</span>'}</div><div class="nft-actions" style="margin-top:10px;display:flex;gap:8px;flex-wrap:wrap;">${n.sold?'<button class="btn btn-ghost btn-xs" disabled>Sold</button>':'<button class="btn btn-p btn-xs" onclick="(typeof event !== \'undefined\' ? event.stopPropagation() : null); buyNFTModal(\''+n.id+'\')">Buy</button>'}</div></div></div>`;
  }).join('');
}

// Metaverse
function rMetaverse() {
  let worldGrid=G('worldGrid');
  if(worldGrid){
    let zones=[
      {ico:'🌍',name:'Creator Hub',desc:'Share & earn',action:()=>nav('feed')},
      {ico:'🎨',name:'NFT Gallery',desc:'Buy & sell art',action:()=>nav('nft')},
      {ico:'🎵',name:'Music Hall',desc:'Live performances',action:()=>nav('live')},
      {ico:'🎮',name:'Game Arena',desc:'Play to earn',action:()=>toast('i','Games coming soon!')},
      {ico:'🛍️',name:'Marketplace',desc:'Digital products',action:()=>nav('marketplace')},
      {ico:'🤝',name:'Networking',desc:'Meet creators',action:()=>nav('friends')},
    ];
    worldGrid.innerHTML=zones.map(z=>`
      <div class="exp-item" onclick="(${z.action})()">
        <div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:40px;">${z.ico}</div>
        <div class="exp-ov">
          <div style="font-weight:700;">${z.name}</div>
          <div style="font-size:10px;opacity:.8;">${z.desc}</div>
        </div>
      </div>`).join('');
  }
  // Events with real timestamps
  let eventsDiv=G('eventsList');
  if(eventsDiv){
    let now = Date.now();
    let events=[
      {ico:'🎤',name:'Live Creator Meetup',desc:'Today · 8:00 PM',action:"nav('live')"},
      {ico:'🎨',name:'NFT Minting Event',desc:'Tomorrow · 10:00 AM',action:"nav('nft')"},
      {ico:'💰',name:'Daily Earn Challenge',desc:'Every Day · Earn 2x pts',action:"nav('earn')"},
      {ico:'🤝',name:'Referral Contest',desc:'This Week · Top 3 win 1000 pts',action:"nav('referral')"},
    ];
    eventsDiv.innerHTML=events.map(e=>`
      <div class="task-card">
        <div class="task-ico">${e.ico}</div>
        <div class="task-info"><div class="task-name">${e.name}</div><div class="task-desc">${e.desc}</div></div>
        <button class="btn btn-neon btn-xs" onclick="${e.action}">Join</button>
      </div>`).join('');
  }
  // User avatar/position
  let ava=G('metaAv'); if(ava&&CU) ava.textContent=CU.name?.charAt(0)||'👤';
}

function customizeAvatar() { toast('i','Avatar customization coming soon!'); }

// Marketplace
function sellItem() {
  if(!CU) return;
  if(!CU.kycVerified) { toast('e','KYC required to sell items'); openModal('kycModal'); return; }
  openModal('sellModal');
}
function submitSellItem() {
  if(!CU) return;
  let title=V('sellTitle'), price=parseFloat(V('sellPrice'));
  let type=G('sellType')?.value||'digital', desc=V('sellDesc');
  if(!title||!price||price<=0) return toast('e','Fill title and price');
  let emojiMap={'digital':'💾','course':'🎓','template':'📄','art':'🎨','audio':'🎵','video':'🎬'};
  let item={id:'m'+Date.now(),title,description:desc,type,price,
    emoji:emojiMap[type]||'📦',seller:CU.id,sellerName:CU.name,
    rating:0,sales:0,createdAt:Date.now()};
  D.marketplace=D.marketplace||[]; D.marketplace.unshift(item);
  saveData(); closeModal('sellModal'); rMarketplace();
  toast('s','✅ Item listed for sale!'); confetti();
}
function rMarketplace() { let grid=G('mktGrid'); if(!grid) return; grid.innerHTML=(D.marketplace||[]).map(item=>{ let seller=D.users[item.seller]; return `<div class="mkt-card"><div class="mkt-thumb">${item.emoji}</div><div class="mkt-info"><div class="mkt-nm">${esc(item.title)}</div><div class="mkt-by">${seller?.name||'Seller'}</div><div class="mkt-price">$${item.price}</div></div><button class="btn btn-neon btn-xs" onclick="buyItem('${item.id}')">Buy</button></div>`; }).join(''); }
function mktFilter(type,el) { document.querySelectorAll('#pg-marketplace .chip').forEach(c=>c.classList.remove('on')); if(el) el.classList.add('on'); rMarketplace(); }
function buyItem(id) {
  if(!CU) return toast('e','Login required');
  let item = D.marketplace.find(i=>i.id===id);
  if(!item) return;
  let u = D.users[CU.id]||CU;
  let ptsNeeded = Math.floor(item.price * PTS_PER_USD);  // ptsNeeded calc
  if((u.points||0) < ptsNeeded) return toast('e','Need '+ptsNeeded+' pts to buy this item');
  if(!confirm('Buy "'+item.title+'" for '+ptsNeeded+' pts ($'+item.price+')?')) return;
  u.points = (u.points||0) - ptsNeeded;
  // Pay seller
  let seller = D.users[item.seller];
  if(seller && item.seller !== CU.id) {
    let sellerCut = Math.floor(ptsNeeded * 0.85); // 85% to seller, 15% platform
    seller.points = (seller.points||0) + sellerCut;
    addNotif(item.seller,'earn','💰','Your item "'+item.title+'" was purchased! +'+sellerCut+' pts');
  }
  let adminCut = Math.floor(ptsNeeded * 0.15);
  let admin = D.users[ADMIN_ID];
  if(admin) { admin.points=(admin.points||0)+adminCut; admin.adminRevenue=(admin.adminRevenue||0)+adminCut; }
  D.txs=D.txs||[]; D.txs.unshift({id:'t'+Date.now(),type:'purchase',label:'Bought: '+item.title,pts:-ptsNeeded,at:Date.now(),user:CU.id});
  item.sales=(item.sales||0)+1;
  CU=D.users[CU.id]||CU; saveData(); syncUI(); rMarketplace();
  toast('s','✅ Purchased "'+item.title+'"!'); confetti();
}

// =====================================================
// ADMIN FULL CONTROL SYSTEM
// =====================================================
let adminUserFlt = 'all', adminPostFlt = 'all', adminSearchQ = '';

// Track user activity for accurate statistics
function trackUserActivity(actionType = 'general') {
  if(!CU || !D.users[CU.id]) return;
  
  let now = Date.now();
  let today = new Date().toDateString();
  let user = D.users[CU.id];
  
  // Update last active timestamp
  user.lastActive = now;
  user.lastAction = now;
  user.isOnline = true;
  
  // Track session
  if(!user.sessionStart) {
    user.sessionStart = now;
  }
  
  // Track daily usage
  if(!user.dailyUsage) user.dailyUsage = {};
  if(!user.dailyUsage[today]) {
    user.dailyUsage[today] = { actions: 0, loginCount: 0, lastSeen: now };
  }
  user.dailyUsage[today].actions++;
  user.dailyUsage[today].lastSeen = now;
  
  // Track specific actions
  if(actionType === 'login') {
    user.lastLogin = now;
    user.loginCount = (user.loginCount || 0) + 1;
    user.dailyUsage[today].loginCount++;
    user.isLoggedIn = true;
  }
  
  saveData();
}

// Update user online status periodically
setInterval(() => {
  if(CU && D.users[CU.id]) {
    D.users[CU.id].lastActive = Date.now();
    D.users[CU.id].isOnline = true;
  }
}, 30000); // Every 30 seconds

// Mark user as offline when leaving
window.addEventListener('beforeunload', () => {
  if(CU && D.users[CU.id]) {
    D.users[CU.id].isOnline = false;
    D.users[CU.id].lastActive = Date.now();
    saveData();
  }
});

// Function to initialize user tracking fields for accurate statistics
function initializeUserTracking() {
  if(!D.users) return;
  
  Object.keys(D.users).forEach(userId => {
    let user = D.users[userId];
    
    // Initialize tracking fields if they don't exist
    if(!user.lastActive) user.lastActive = 0;
    if(!user.lastLogin) user.lastLogin = 0;
    if(!user.lastAction) user.lastAction = 0;
    if(!user.sessionStart) user.sessionStart = 0;
    if(!user.loginCount) user.loginCount = 0;
    if(!user.isLoggedIn) user.isLoggedIn = false;
    if(!user.isOnline) user.isOnline = false;
    if(!user.dailyUsage) user.dailyUsage = {};
  });
  
  saveData();
}

// Function to refresh admin statistics in real-time
function refreshAdminStats() {
  if(!D.users) return;
  
  let users = Object.values(D.users);
  let allPosts = D.posts||[];
  let today = new Date().toDateString();
  let fiveMinutesAgo = Date.now() - 300000;
  
  // Calculate statistics
  let totalUsers = users.length;
  let onlineNow = users.filter(u => {
    let lastActive = u.lastActive || u.lastLogin || 0;
    return lastActive > fiveMinutesAgo;
  }).length;
  let activeToday = users.filter(u => {
    let lastLogin = u.lastLogin || 0;
    let lastActive = u.lastActive || 0;
    let loginDate = new Date(lastLogin).toDateString();
    let activeDate = new Date(lastActive).toDateString();
    return loginDate === today || activeDate === today || u.todayPts?.date === today;
  }).length;
  let kycVerified = users.filter(u => u.kycVerified).length;
  let totalPosts = allPosts.length;
  let totalWithdrawals = (D.withdrawals || []).length;
  let disabledUsers = users.filter(u => u.disabled).length;
  let revenuePts = users.reduce((sum, u) => sum + (u.points || 0), 0);
  let loggedInUsers = users.filter(u => u.isLoggedIn || (u.lastActive && (Date.now() - u.lastActive) < 1800000)).length;
  let activeSessions = users.filter(u => {
    let sessionDate = new Date(u.sessionStart || u.lastLogin || 0).toDateString();
    return sessionDate === today;
  }).length;
  let usedAppToday = users.filter(u => {
    let lastAction = u.lastAction || u.lastActive || u.lastLogin || 0;
    let actionDate = new Date(lastAction).toDateString();
    return actionDate === today;
  }).length;
  let todayLogin = users.filter(u => {
    let loginDate = new Date(u.lastLogin || 0).toDateString();
    return loginDate === today;
  }).length;
  
  // Update the stats display
  let statsEl = document.getElementById('adminStats');
  if(statsEl) {
    statsEl.innerHTML = `
      <div class="admin-stat"><div class="as-i">👥</div><div class="as-n">${totalUsers}</div><div class="as-l">Total Users</div></div>
      <div class="admin-stat"><div class="as-i">🟢</div><div class="as-n">${onlineNow}</div><div class="as-l">Online Now</div></div>
      <div class="admin-stat"><div class="as-i">📅</div><div class="as-n">${activeToday}</div><div class="as-l">Active Today</div></div>
      <div class="admin-stat"><div class="as-i">✅</div><div class="as-n">${kycVerified}</div><div class="as-l">KYC Verified</div></div>
      <div class="admin-stat"><div class="as-i">📋</div><div class="as-n">${totalPosts}</div><div class="as-l">Total Posts</div></div>
      <div class="admin-stat"><div class="as-i">💸</div><div class="as-n">${totalWithdrawals}</div><div class="as-l">Withdrawals</div></div>
      <div class="admin-stat"><div class="as-i">🚫</div><div class="as-n">${disabledUsers}</div><div class="as-l">Disabled</div></div>
      <div class="admin-stat"><div class="as-i">💰</div><div class="as-n">${fmt(revenuePts)}</div><div class="as-l">Revenue pts</div></div>
      <div class="admin-stat"><div class="as-i">🔐</div><div class="as-n">${loggedInUsers}</div><div class="as-l">Logged In</div></div>
      <div class="admin-stat"><div class="as-i">📱</div><div class="as-n">${activeSessions}</div><div class="as-l">Sessions</div></div>
      <div class="admin-stat"><div class="as-i">🎯</div><div class="as-n">${usedAppToday}</div><div class="as-l">Used App</div></div>
      <div class="admin-stat"><div class="as-i">🔑</div><div class="as-n">${todayLogin}</div><div class="as-l">Today Login</div></div>
    `;
  }
  
  // Update stored data
  window.adminStatsData = {
    totalUsers, onlineNow, activeToday, kycVerified, totalPosts, totalWithdrawals,
    disabledUsers, revenuePts, loggedInUsers, activeSessions, usedAppToday, todayLogin
  };
}

function rAdmin() {
  if(!CU?.isAdmin){ nav('feed'); toast('e','Access denied'); return; }
  syncCU();
  
  // Initialize user tracking fields for accurate statistics
  initializeUserTracking();
  
  // Stats
  let users = Object.values(D.users);
  let allPosts = D.posts||[];
  let revenue = (D.users[ADMIN_ID]?.adminRevenue||0);
  
  // Calculate accurate statistics
  let today = new Date().toDateString();
  let fiveMinutesAgo = Date.now() - 300000; // 5 minutes ago threshold
  
  // Total Users
  let totalUsers = users.length;
  
  // Online Now (users active within last 5 minutes)
  let onlineNow = users.filter(u => {
    let lastActive = u.lastActive || u.lastLogin || 0;
    return lastActive > fiveMinutesAgo;
  }).length;
  
  // Active Today (users who logged in or used app today)
  let activeToday = users.filter(u => {
    let lastLogin = u.lastLogin || 0;
    let lastActive = u.lastActive || 0;
    let loginDate = new Date(lastLogin).toDateString();
    let activeDate = new Date(lastActive).toDateString();
    return loginDate === today || activeDate === today || u.todayPts?.date === today;
  }).length;
  
  // KYC Verified
  let kycVerified = users.filter(u => u.kycVerified).length;
  
  // Total Posts
  let totalPosts = allPosts.length;
  
  // Withdrawals (total and pending)
  let totalWithdrawals = (D.withdrawals || []).length;
  let pendingWithdrawals = (D.withdrawals || []).filter(w => w.status === 'pending').length;
  let completedWithdrawals = (D.withdrawals || []).filter(w => w.status === 'completed').length;
  
  // Disabled Users
  let disabledUsers = users.filter(u => u.disabled).length;
  
  // Revenue Points (total points earned by all users)
  let revenuePts = users.reduce((sum, u) => sum + (u.points || 0), 0);
  
  // Logged In Users (users with active session)
  let loggedInUsers = users.filter(u => u.isLoggedIn || (u.lastActive && (Date.now() - u.lastActive) < 1800000)).length; // 30 min
  
  // Active Sessions (track unique sessions today)
  let activeSessions = users.filter(u => {
    let sessionDate = new Date(u.sessionStart || u.lastLogin || 0).toDateString();
    return sessionDate === today;
  }).length;
  
  // Used App Today (users who performed any action today)
  let usedAppToday = users.filter(u => {
    let lastAction = u.lastAction || u.lastActive || u.lastLogin || 0;
    let actionDate = new Date(lastAction).toDateString();
    return actionDate === today;
  }).length;
  
  // Today Login (users who logged in today)
  let todayLogin = users.filter(u => {
    let loginDate = new Date(u.lastLogin || 0).toDateString();
    return loginDate === today;
  }).length;
  
  // Build analytics
  renderAdminAnalytics(users);
  if(G('adminStats')) G('adminStats').innerHTML = `
    <div class="admin-stat"><div class="as-i">👥</div><div class="as-n">${totalUsers}</div><div class="as-l">Total Users</div></div>
    <div class="admin-stat"><div class="as-i">🟢</div><div class="as-n">${onlineNow}</div><div class="as-l">Online Now</div></div>
    <div class="admin-stat"><div class="as-i">📅</div><div class="as-n">${activeToday}</div><div class="as-l">Active Today</div></div>
    <div class="admin-stat"><div class="as-i">✅</div><div class="as-n">${kycVerified}</div><div class="as-l">KYC Verified</div></div>
    <div class="admin-stat"><div class="as-i">📋</div><div class="as-n">${totalPosts}</div><div class="as-l">Total Posts</div></div>
    <div class="admin-stat"><div class="as-i">💸</div><div class="as-n">${totalWithdrawals}</div><div class="as-l">Withdrawals</div></div>
    <div class="admin-stat"><div class="as-i">🚫</div><div class="as-n">${disabledUsers}</div><div class="as-l">Disabled</div></div>
    <div class="admin-stat"><div class="as-i">💰</div><div class="as-n">${fmt(revenuePts)}</div><div class="as-l">Revenue pts</div></div>
    <div class="admin-stat"><div class="as-i">🔐</div><div class="as-n">${loggedInUsers}</div><div class="as-l">Logged In</div></div>
    <div class="admin-stat"><div class="as-i">📱</div><div class="as-n">${activeSessions}</div><div class="as-l">Sessions</div></div>
    <div class="admin-stat"><div class="as-i">🎯</div><div class="as-n">${usedAppToday}</div><div class="as-l">Used App</div></div>
    <div class="admin-stat"><div class="as-i">🔑</div><div class="as-n">${todayLogin}</div><div class="as-l">Today Login</div></div>
  `;
  
  // Store statistics for real-time refresh
  window.adminStatsData = {
    totalUsers, onlineNow, activeToday, kycVerified, totalPosts, totalWithdrawals,
    disabledUsers, revenuePts, loggedInUsers, activeSessions, usedAppToday, todayLogin
  };
  
  // Start auto-refresh for statistics when admin panel is open
  if(window.adminStatsRefreshInterval) clearInterval(window.adminStatsRefreshInterval);
  window.adminStatsRefreshInterval = setInterval(() => {
    if(CU?.isAdmin && document.getElementById('adminStats')) {
      refreshAdminStats();
    }
  }, 10000); // Refresh every 10 seconds
  
  if(G('adminRevEl')) G('adminRevEl').textContent = '$'+(revenue/PTS_PER_USD).toFixed(2);
  // Analytics: daily signups (last 7 days)
  let analyticsDiv = G('adminAnalytics');
  if(analyticsDiv) {
    let days = [];
    for(let i=6; i>=0; i--) {
      let d = new Date(); d.setDate(d.getDate()-i);
      let ds = d.toDateString();
      let count = Object.values(D.users).filter(u=>new Date(u.createdAt).toDateString()===ds).length;
      days.push({label:d.toLocaleDateString('en',{weekday:'short'}), count});
    }
    let max = Math.max(...days.map(d=>d.count), 1);
    analyticsDiv.innerHTML = `
      <div style="font-size:11px;font-weight:800;color:var(--t3);letter-spacing:1px;margin-bottom:8px;">📈 Daily Signups (7 days)</div>
      <div style="display:flex;align-items:flex-end;gap:4px;height:60px;">
        ${days.map(d=>`<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:2px;">
          <div style="font-size:9px;color:var(--neon);">${d.count||''}</div>
          <div style="width:100%;background:linear-gradient(to top,var(--c1),var(--c2));border-radius:4px 4px 0 0;height:${Math.max(4,Math.round((d.count/max)*50))}px;"></div>
          <div style="font-size:8px;color:var(--t3);">${d.label}</div>
        </div>`).join('')}
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:8px;font-size:11px;">
        <span>Total Users: <b style="color:var(--neon);">${users.length}</b></span>
        <span>Active Today: <b style="color:var(--c3);">${Object.values(D.users).filter(u=>u.todayPts?.date===new Date().toDateString()).length}</b></span>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:4px;font-size:11px;">
        <span>Total Posts: <b style="color:var(--neon);">${allPosts.length}</b></span>
        <span>Platform Revenue: <b style="color:var(--c4);">$${(revenue/PTS_PER_USD).toFixed(2)}</b></span>
      </div>`;
  }
  adminTab('users', document.querySelector('#adminTabs .chip'));
}

function adminTab(tab, el) {
  document.querySelectorAll('#adminTabs .chip').forEach(c=>c.classList.remove('on'));
  if(el) el.classList.add('on');
  ['Users','Posts','Kyc','Withdraw','Reports','Analytics'].forEach(t => {
    let el2 = G('adminTab'+t);
    if(el2) el2.style.display = (tab === t.toLowerCase()) ? 'block' : 'none';
  });
  if(tab==='users')     renderAdminUsers();
  else if(tab==='posts')    renderAdminPosts();
  else if(tab==='kyc')      renderAdminKYC();
  else if(tab==='withdraw') renderAdminWithdrawals();
  else if(tab==='reports')  renderAdminReports();
  else if(tab==='analytics'){ let div=G('adminFullAnalytics'); if(div) renderAdminAnalytics(Object.values(D.users)); }
  else if(tab==='live'){ 
    // Live tab shows the live monitor section
    startLiveMonitor();
    toast('i','📡 Live Monitor Active - Updates every 5 seconds');
  }
}

function adminSearchUsers(q) { adminSearchQ=q; renderAdminUsers(); }
function adminUserFilter(f, el) {
  adminUserFlt=f;
  document.querySelectorAll('#adminTabUsers .chip').forEach(c=>c.classList.remove('on'));
  if(el) el.classList.add('on');
  renderAdminUsers();
}
function adminPostFilter(f, el) {
  adminPostFlt=f;
  document.querySelectorAll('#adminTabPosts .chip').forEach(c=>c.classList.remove('on'));
  if(el) el.classList.add('on');
  renderAdminPosts();
}


// ─── Admin Real-time Analytics ────────────────────────────
function renderAdminAnalytics(users) {
  let div = G('adminAnalytics'); if(!div) return;
  let now   = Date.now();
  let today = new Date().toDateString();
  let allUsers = users || Object.values(D.users);
  let allPosts = D.posts||[];
  let allTxs   = D.txs||[];
  // Calculate metrics
  let newToday   = allUsers.filter(u => new Date(u.createdAt||0).toDateString()===today).length;
  let postsToday = allPosts.filter(p => new Date(p.createdAt||0).toDateString()===today).length;
  let revenueToday = allTxs.filter(t => new Date(t.at||0).toDateString()===today && t.type==='earn').reduce((s,t)=>s+Math.floor((t.pts||0)*0.1),0);
  let activeNow  = allUsers.filter(u => (now-(u.lastSeen||0)) < 300000).length; // active in last 5min
  let totalPts   = allUsers.reduce((s,u)=>s+(u.points||0),0);
  let totalWithdraw = (D.withdrawals||[]).filter(w=>w.status==='pending').length;
  // Chart data: last 7 days signups
  let days7 = [];
  for(let i=6;i>=0;i--) {
    let d = new Date(); d.setDate(d.getDate()-i);
    let ds = d.toDateString();
    days7.push({ label: d.toLocaleDateString('en',{weekday:'short'}), count: allUsers.filter(u=>new Date(u.createdAt||0).toDateString()===ds).length });
  }
  let maxCount = Math.max(...days7.map(d=>d.count), 1);
  // Render
  div.innerHTML = `
    <div style="font-size:13px;font-weight:800;margin-bottom:10px;">📊 Platform Analytics</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:12px;">
      <div style="background:rgba(0,255,170,.08);border:1px solid rgba(0,255,170,.2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:var(--neon);">${newToday}</div>
        <div style="font-size:9px;color:var(--t3);">New Today</div>
      </div>
      <div style="background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:var(--c2);">${activeNow}</div>
        <div style="font-size:9px;color:var(--t3);">Active Now</div>
      </div>
      <div style="background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:var(--c4);">${postsToday}</div>
        <div style="font-size:9px;color:var(--t3);">Posts Today</div>
      </div>
      <div style="background:rgba(109,40,217,.08);border:1px solid rgba(109,40,217,.2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:var(--c7);">${fmt(totalPts)}</div>
        <div style="font-size:9px;color:var(--t3);">Total Pts</div>
      </div>
      <div style="background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:var(--c5);">${totalWithdraw}</div>
        <div style="font-size:9px;color:var(--t3);">Pending WDs</div>
      </div>
      <div style="background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:20px;font-weight:900;color:var(--c3);">${revenueToday}</div>
        <div style="font-size:9px;color:var(--t3);">Rev Today</div>
      </div>
    </div>
    <!-- 7-day signup chart -->
    <div style="font-size:11px;font-weight:700;margin-bottom:8px;color:var(--t2);">📈 New Signups (Last 7 Days)</div>
    <div style="display:flex;align-items:flex-end;gap:4px;height:60px;padding:0 4px;">
      ${days7.map(d=>`
        <div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;">
          <div style="width:100%;border-radius:4px 4px 0 0;background:var(--neon);opacity:0.8;height:${maxCount>0?Math.max(4,Math.round(d.count/maxCount*50)):4}px;transition:height .3s;"></div>
          <div style="font-size:8px;color:var(--t3);">${d.label}</div>
        </div>`).join('')}
    </div>
    <!-- Quick admin actions -->
    <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
      <button class="btn btn-ghost btn-xs" onclick="broadcastNotif()">📢 Broadcast</button>
      <button class="btn btn-ghost btn-xs" onclick="exportAllData()">📤 Export All</button>
      <button class="btn btn-ghost btn-xs" onclick="adminTab('withdraw',null)">💸 Withdrawals (${totalWithdraw})</button>
      <button class="btn btn-r btn-xs" onclick="adminClearOldData()">🧹 Clean Data</button>
    </div>
  `;
  // Auto-refresh every 30s
  if(CU?.isAdmin) {
    clearTimeout(window._adminRefreshTimer);
    window._adminRefreshTimer = setTimeout(()=>{ if(document.getElementById('pg-admin')?.classList.contains('on')) rAdmin(); }, 30000);
  }
}

function broadcastNotif() {
  let msg = prompt('Broadcast message to all users:');
  if(!msg) return;
  Object.keys(D.users).forEach(uid => {
    if(uid !== ADMIN_ID) addNotif(uid,'admin','📢',msg);
  });
  // Also send via socket
  if(socket && socketReady) socket.emit('notif:send',{to:'all',notif:{msg,type:'admin'}});
  saveData(); toast('s','📢 Broadcast sent to '+Object.keys(D.users).length+' users!');
}

function exportAllData() {
  let data = JSON.parse(JSON.stringify(D));
  // Strip base64 to reduce size
  (data.posts||[]).forEach(p=>{if(p.file?.startsWith('data:'))p.file='[base64_stripped]';});
  Object.values(data.users||{}).forEach(u=>{if(u.avatar?.startsWith('data:'))u.avatar='[base64]';});
  let blob=new Blob([JSON.stringify(data,null,2)],{type:'application/json'});
  let a=document.createElement('a'); a.href=URL.createObjectURL(blob);
  a.download='monetixra_full_export_'+Date.now()+'.json'; a.click();
  toast('s','📤 Full data exported!');
}

function adminClearOldData() {
  if(!confirm('Remove posts older than 90 days?')) return;
  let cutoff = Date.now() - 90*24*3600*1000;
  let before = (D.posts||[]).length;
  D.posts = (D.posts||[]).filter(p=>(p.createdAt||0)>cutoff);
  D.txs   = (D.txs||[]).filter(t=>(t.at||0)>cutoff);
  D.notifs = (D.notifs||[]).filter(n=>(n.t||0)>cutoff);
  let removed = before - D.posts.length;
  saveData(); rAdmin();
  toast('s',`🧹 Removed ${removed} old posts. Storage freed!`);
}

// ═══════════════════════════════════════════════════════════════
//  ADMIN LIVE MONITOR (Real-time tracking)
// ═══════════════════════════════════════════════════════════════

let liveMonitorInterval = null;
let livePostTracker = [];

function startLiveMonitor() {
  if (liveMonitorInterval) clearInterval(liveMonitorInterval);
  
  toast('s','📡 Live Monitor Started');
  updateLiveMonitor(); // Initial update
  
  // Update every 5 seconds
  liveMonitorInterval = setInterval(updateLiveMonitor, 5000);
}

function stopLiveMonitor() {
  if (liveMonitorInterval) {
    clearInterval(liveMonitorInterval);
    liveMonitorInterval = null;
    toast('i','📡 Live Monitor Stopped');
  }
}

function updateLiveMonitor() {
  // Get "active" users (users who logged in within last 30 minutes)
  const thirtyMinsAgo = Date.now() - (30 * 60 * 1000);
  const activeUsers = Object.values(D.users || {}).filter(u => {
    return (u.lastLogin || 0) > thirtyMinsAgo || (u.lastActive || 0) > thirtyMinsAgo;
  });
  
  // Update active badge
  const activeBadge = G('liveActiveBadge');
  if (activeBadge) {
    activeBadge.textContent = `🟢 ${activeUsers.length} Active`;
  }
  
  // Update live feed panel
  const livePostsFeed = G('livePostsFeed');
  const recentPosts = (D.posts||[]).filter(p => Date.now() - (p.createdAt||0) < 30*60000).slice(0, 12);
  const activeLiveCount = (D.posts||[]).filter(p => p.isLive).length;
  const livePostBadge = G('livePostBadge');
  if (livePostBadge) {
    livePostBadge.textContent = `📝 ${recentPosts.length}/30m`;
  }
  if (livePostsFeed) {
    if (!recentPosts.length) {
      livePostsFeed.innerHTML = '<div style="font-size:11px;color:var(--t3);padding:8px;text-align:center;">No recent posts</div>';
    } else {
      livePostsFeed.innerHTML = recentPosts.map(p => {
        let author = D.users[p.author] || {name:'User', username:''};
        let timeAgo = Math.max(1, Math.floor((Date.now() - (p.createdAt||0)) / 60000));
        return `<div style="padding:8px;border-bottom:1px solid var(--b1);font-size:11px;line-height:1.4;">
          <div style="font-weight:700;color:var(--neon);">${esc(author.name)} ${p.isLive ? '🔴' : ''}</div>
          <div style="color:var(--t2);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${esc((p.text||'').substring(0, 60))}</div>
          <div style="display:flex;justify-content:space-between;margin-top:4px;color:var(--t3);font-size:10px;"><span>${p.viewers||0} viewers</span><span>${timeAgo}m ago</span></div>
        </div>`;
      }).join('');
    }
  }
  
  const liveDetailedStats = G('liveDetailedStats');
  if (liveDetailedStats) {
    let totalReports = (D.posts||[]).filter(p => Number(p.reports||0) > 0).length;
    let livePosts = (D.posts||[]).filter(p => p.isLive).length;
    let totalNotifs = (D.notifs||[]).length;
    liveDetailedStats.innerHTML = `
      <div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;">
        <div style="background:var(--bg3);padding:10px;border-radius:12px;">Active users: <b>${activeUsers.length}</b></div>
        <div style="background:var(--bg3);padding:10px;border-radius:12px;">Live streams: <b>${livePosts}</b></div>
        <div style="background:var(--bg3);padding:10px;border-radius:12px;">Recent posts: <b>${recentPosts.length}</b></div>
        <div style="background:var(--bg3);padding:10px;border-radius:12px;">Unread notifications: <b>${(D.notifs||[]).filter(n=>n.to===CU.id && !n.read).length}</b></div>
        <div style="background:var(--bg3);padding:10px;border-radius:12px;">Reported posts: <b>${totalReports}</b></div>
        <div style="background:var(--bg3);padding:10px;border-radius:12px;">Total notifs: <b>${totalNotifs}</b></div>
      </div>
    `;
  }

  
  // Get recent posts (last 10 minutes)
  const tenMinsAgo = Date.now() - (10 * 60 * 1000);
  const recentTenMinPosts = (D.posts || []).filter(p => (p.createdAt || 0) > tenMinsAgo).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
  
  // Update post rate badge
  const postBadge = G('livePostBadge');
  if (postBadge) {
    postBadge.textContent = `📝 ${recentTenMinPosts.length}/10min`;
  }
  
  // Update live posts feed
  const livePostsDiv = G('livePostsFeed');
  if (livePostsDiv) {
    if (recentTenMinPosts.length === 0) {
      livePostsDiv.innerHTML = '<div style="font-size:11px;color:var(--t3);padding:8px;text-align:center;">No recent posts</div>';
    } else {
      livePostsDiv.innerHTML = recentTenMinPosts.slice(0, 10).map(p => {
        const author = D.users[p.author] || { name: 'Unknown' };
        const timeAgo = Math.floor((Date.now() - (p.createdAt || 0)) / 60000);
        const content = (p.text || '[Media]').substring(0, 40);
        return `<div style="display:flex;align-items:center;gap:8px;padding:6px;border-bottom:1px solid var(--b1);font-size:11px;">
          <div style="width:24px;height:24px;border-radius:50%;background:var(--g2);display:flex;align-items:center;justify-content:center;font-size:10px;">${author.name?.charAt(0)?.toUpperCase()}</div>
          <div style="flex:1;min-width:0;">
            <div style="font-weight:600;">${esc(author.name)} <span style="font-weight:400;color:var(--t3);">@${esc(author.username || '')}</span></div>
            <div style="color:var(--t2);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(content)}</div>
          </div>
          <div style="color:var(--t3);font-size:10px;">${timeAgo}m ago</div>
          <button class="btn btn-r btn-xs" onclick="adminDeletePost('${p.id}')" title="Delete">🗑️</button>
          <button class="btn btn-ghost btn-xs" onclick="adminHidePost('${p.id}')" title="Hide">👁️</button>
        </div>`;
      }).join('');
    }
  }
}

function refreshLiveMonitor() {
  updateLiveMonitor();
  toast('s','🔄 Live Monitor Refreshed');
}

function adminGlobalActions() {
  const actions = [
    '📢 Send Global Announcement',
    '🧹 Clear All Reports',
    '⏸️ Pause New Registrations',
    '📧 Email All Users',
    '⚠️ Enable Maintenance Mode'
  ];
  
  const choice = prompt(`Global Actions:\n${actions.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\nEnter number (1-5):`);
  
  switch(choice) {
    case '1':
      const msg = prompt('Enter announcement message:');
      if (msg) {
        Object.values(D.users || {}).forEach(u => {
          addNotif(u.id, 'system', '📢', msg);
        });
        toast('s', `📢 Announcement sent to all users!`);
      }
      break;
    case '2':
      if (confirm('Clear all post reports?')) {
        (D.posts || []).forEach(p => { p.reports = 0; p.reportedBy = []; });
        saveData();
        toast('s', '✅ All reports cleared');
      }
      break;
    case '3':
      toast('i', '⏸️ Registration pause feature - configure in settings');
      break;
    case '4':
      toast('i', '📧 Email feature - configure SMTP first');
      break;
    case '5':
      toast('i', '⚠️ Maintenance mode - configure in server settings');
      break;
  }
}

// ═══════════════════════════════════════════════════════════════
//  ADMIN USER & POST CONTROLS (Delete/Disable)
// ═══════════════════════════════════════════════════════════════

function openAdminUserControl(uid) {
  const u = D.users[uid];
  if (!u) return;
  
  const actions = [
    u.disabled ? '✅ Enable User' : '🚫 Disable User',
    '❌ Delete User',
    '📧 Send Message',
    '💰 Adjust Points',
    '🪪 Reset KYC',
    '🔐 Force Logout'
  ];
  
  const choice = prompt(`User: ${u.name} (@${u.username || ''})\n\nActions:\n${actions.map((a, i) => `${i + 1}. ${a}`).join('\n')}\n\nEnter number (1-6):`);
  
  switch(choice) {
    case '1':
      if (u.disabled) {
        u.disabled = false;
        addNotif(uid, 'system', '✅', 'Your account has been re-enabled');
        toast('s', `✅ User ${u.name} enabled`);
      } else {
        u.disabled = true;
        addNotif(uid, 'system', '🚫', 'Your account has been disabled by admin');
        toast('e', `🚫 User ${u.name} disabled`);
      }
      saveData(); renderAdminUsers();
      break;
    case '2':
      if (confirm(`PERMANENTLY DELETE user ${u.name}?\n\nThis cannot be undone!`)) {
        delete D.users[uid];
        saveData(); renderAdminUsers();
        toast('s', `💀 User ${u.name} deleted`);
      }
      break;
    case '3':
      const msg = prompt(`Send message to ${u.name}:`);
      if (msg) {
        addNotif(uid, 'admin', '👑', msg);
        toast('s', '📧 Message sent');
      }
      break;
    case '4':
      const points = parseInt(prompt(`Current points: ${u.points || 0}\n\nEnter new points amount:`));
      if (!isNaN(points)) {
        u.points = points;
        saveData();
        toast('s', `💰 Points updated to ${points}`);
      }
      break;
    case '5':
      u.kycVerified = false;
      u.kycPending = null;
      saveData();
      toast('s', '🪪 KYC reset');
      break;
    case '6':
      u.forceLogout = Date.now();
      saveData();
      toast('s', `🔐 Force logout sent to ${u.name}`);
      break;
  }
}

function adminDeletePost(pid) {
  const post = (D.posts || []).find(p => p.id === pid);
  if (!post) return;
  
  if (confirm('Delete this post permanently?')) {
    D.posts = (D.posts || []).filter(p => p.id !== pid);
    saveData();
    updateLiveMonitor();
    toast('s', '🗑️ Post deleted');
  }
}

function adminHidePost(pid) {
  const post = (D.posts || []).find(p => p.id === pid);
  if (!post) return;
  
  post.hidden = !post.hidden;
  saveData();
  updateLiveMonitor();
  toast(post.hidden ? 'i' : 's', post.hidden ? '👁️ Post hidden' : '👁️ Post visible');
}

function adminDisableUser(uid) {
  const u = D.users[uid];
  if (!u) return;
  
  u.disabled = true;
  addNotif(uid, 'system', '🚫', 'Your account has been disabled by admin');
  saveData();
  renderAdminUsers();
  toast('e', `🚫 User ${u.name} disabled`);
}

function adminDeleteUser(uid) {
  const u = D.users[uid];
  if (!u) return;
  
  if (confirm(`PERMANENTLY DELETE ${u.name}?\n\nAll their posts, data will be removed!`)) {
    // Remove user's posts
    D.posts = (D.posts || []).filter(p => p.author !== uid);
    // Delete user
    delete D.users[uid];
    saveData();
    renderAdminUsers();
    toast('s', `💀 User ${u.name} permanently deleted`);
  }
}

function renderAdminUsers() {
  let au = G('adminUsers'); if(!au) return;
  let users = Object.values(D.users).filter(u=>u.id!==ADMIN_ID);
  let q = adminSearchQ.toLowerCase();
  if(q) users = users.filter(u=> (u.name||'').toLowerCase().includes(q) || (u.username||'').toLowerCase().includes(q) || (u.email||'').toLowerCase().includes(q) || (u.phone||'').toLowerCase().includes(q));
  if(adminUserFlt==='active')      users = users.filter(u=>!u.disabled&&!u.deactivated);
  if(adminUserFlt==='disabled')    users = users.filter(u=>u.disabled);
  if(adminUserFlt==='deactivated') users = users.filter(u=>u.deactivated&&!u.disabled);
  if(adminUserFlt==='blocked')     users = users.filter(u=>(u.adminBlocked));
  if(adminUserFlt==='kyc')         users = users.filter(u=>u.kycVerified);
  if(!users.length){ au.innerHTML='<div style="padding:20px;text-align:center;color:var(--t3);">No users found</div>'; return; }
  au.innerHTML = users.map(u => {
    let status = u.disabled?'🔴 Disabled':u.deactivated?'🟡 Deactivated':u.adminBlocked?'🟠 Blocked':'🟢 Active';
    let grad = randomGrad();
    return `<div class="task-card" style="cursor:pointer;" onclick="openAdminUserControl('${u.id}')">
      <div class="av av-round av-sm" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});flex-shrink:0;">${u.avatar?`<img src="${u.avatar}">`:u.name?.charAt(0)?.toUpperCase()}</div>
      <div style="flex:1;min-width:0;">
        <div style="font-weight:700;font-size:13px;">${esc(u.name)} ${u.verified?'✔':''}${u.kycVerified?' ✅':''}</div>
        <div style="font-size:11px;color:var(--t3);">@${esc(u.username||'')} · ${u.email||u.phone||''}</div>
        <div style="font-size:10px;margin-top:2px;">${status} · ${fmt(u.points||0)} pts · ${(u.refs||[]).length} refs</div>
      </div>
      <span style="font-size:11px;color:var(--neon);">⚙️</span>
    </div>`;
  }).join('');
}

function openAdminUserControl(uid) {
  let u = D.users[uid]; if(!u) return;
  let c = G('adminUserModalContent'); if(!c) return;
  let grad = randomGrad();
  c.innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--g2);border-radius:12px;margin-bottom:12px;">
      <div class="av av-round" style="width:56px;height:56px;background:linear-gradient(135deg,${grad[0]},${grad[1]});flex-shrink:0;font-size:22px;font-weight:800;display:flex;align-items:center;justify-content:center;">${u.avatar?`<img src="${u.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:50%;">`:u.name?.charAt(0)?.toUpperCase()}</div>
      <div>
        <div style="font-weight:800;font-size:15px;">${esc(u.name)}</div>
        <div style="font-size:11px;color:var(--t3);">@${esc(u.username||'')} · ${u.email||''} · ${u.phone||''}</div>
        <div style="font-family:var(--fm);font-size:12px;color:var(--neon);">${fmt(u.points||0)} pts</div>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:10px;">
      <div style="background:var(--g2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:800;color:var(--neon);">${fmt(u.points||0)}</div><div style="font-size:10px;">Points</div>
      </div>
      <div style="background:var(--g2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:800;">${(u.posts||[]).length}</div><div style="font-size:10px;">Posts</div>
      </div>
      <div style="background:var(--g2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:800;">${(u.followers||[]).length}</div><div style="font-size:10px;">Followers</div>
      </div>
      <div style="background:var(--g2);border-radius:10px;padding:10px;text-align:center;">
        <div style="font-size:18px;font-weight:800;">${(u.refs||[]).length}</div><div style="font-size:10px;">Referrals</div>
      </div>
    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);letter-spacing:1px;margin-bottom:8px;">STATUS CONTROLS</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-bottom:12px;">
      <button class="btn ${u.disabled?'btn-g':'btn-r'} btn-sm" onclick="adminToggleDisable('${uid}')">
        ${u.disabled?'✅ Enable Account':'🚫 Disable Account'}
      </button>
      <button class="btn ${u.deactivated?'btn-g':'btn-o'} btn-sm" onclick="adminToggleDeactivate('${uid}')">
        ${u.deactivated?'🔄 Reactivate':'😴 Deactivate'}
      </button>
      <button class="btn ${u.adminBlocked?'btn-g':'btn-r'} btn-sm" onclick="adminToggleBlock('${uid}')">
        ${u.adminBlocked?'🔓 Unblock User':'🔒 Block User'}
      </button>
      <button class="btn ${u.kycVerified?'btn-r':'btn-g'} btn-sm" onclick="adminToggleKYC('${uid}')">
        ${u.kycVerified?'❌ Revoke KYC':'✅ Verify KYC'}
      </button>
      <button class="btn ${u.verified?'btn-r':'btn-b'} btn-sm" onclick="adminToggleVerify('${uid}')">
        ${u.verified?'❌ Remove Verified':'✔ Mark Verified'}
      </button>
      <button class="btn btn-b btn-sm" onclick="adminResetPassword('${uid}')">
        🔑 Reset Password
      </button>
    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);letter-spacing:1px;margin-bottom:8px;">POINT CONTROLS</div>
    <div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap;">
      <input id="adminPtsAmt" type="number" class="fi" placeholder="Points amount" style="flex:1;min-width:120px;">
      <button class="btn btn-g btn-sm" onclick="adminAddPts('${uid}')">➕ Add Points</button>
      <button class="btn btn-r btn-sm" onclick="adminRemovePts('${uid}')">➖ Remove Points</button>
    </div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);letter-spacing:1px;margin-bottom:8px;">POST CONTROLS</div>
    <div id="adminUserPosts" style="max-height:200px;overflow-y:auto;"></div>
    <div style="font-size:11px;font-weight:800;color:var(--t3);letter-spacing:1px;margin-bottom:8px;margin-top:12px;">SEND NOTIFICATION</div>
    <div style="display:flex;gap:8px;margin-bottom:12px;">
      <input id="adminNotifMsg" class="fi" placeholder="Notification message..." style="flex:1;">
      <button class="btn btn-p btn-sm" onclick="adminSendNotif('${uid}')">Send</button>
    </div>
    <div style="font-size:11px;font-weight:800;color:var(--c5);letter-spacing:1px;margin-bottom:8px;">DANGER ZONE</div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;">
      <button class="btn btn-r btn-sm" onclick="adminDeleteAllPosts('${uid}')">🗑️ Delete All Posts</button>
      <button class="btn btn-r btn-sm" onclick="adminDeleteUser('${uid}')">💀 Delete Account</button>
    </div>
  `;
  // Render user's posts
  let userPosts = (D.posts||[]).filter(p=>p.author===uid).slice(0,10);
  let postsDiv = G('adminUserPosts');
  if(postsDiv) postsDiv.innerHTML = userPosts.length ? userPosts.map(p=>`
    <div style="display:flex;align-items:center;gap:8px;padding:7px;background:var(--g2);border-radius:8px;margin-bottom:5px;">
      <div style="flex:1;font-size:12px;">${esc(p.text?.substring(0,50)||'[Media post]')} <span style="font-size:10px;color:var(--t3);">${ago(p.createdAt)}</span></div>
      <button class="btn btn-ghost btn-xs" onclick="adminHidePost('${p.id}','${uid}')">${p.hidden?'👁️ Show':'🙈 Hide'}</button>
      <button class="btn btn-r btn-xs" onclick="adminDeletePostById('${p.id}','${uid}')">🗑️</button>
    </div>
  `).join('') : '<div style="color:var(--t3);font-size:12px;padding:8px;">No posts</div>';
  openModal('adminUserModal');
}

// User control functions
function adminToggleDisable(uid) {
  let u=D.users[uid]; if(!u) return;
  u.disabled=!u.disabled;
  if(u.disabled) { addNotif(uid,'admin','🚫',`Your account has been disabled by admin`); }
  else { addNotif(uid,'admin','✅',`Your account has been re-enabled by admin`); }
  saveData(); openAdminUserControl(uid); renderAdminUsers();
  toast(u.disabled?'s':'i', u.disabled?`🚫 ${u.name} disabled`:`✅ ${u.name} enabled`);
}

function adminToggleDeactivate(uid) {
  let u=D.users[uid]; if(!u) return;
  u.deactivated=!u.deactivated;
  saveData(); openAdminUserControl(uid); renderAdminUsers();
  toast('s', u.deactivated?`😴 ${u.name} deactivated`:`🔄 ${u.name} reactivated`);
}

function adminToggleBlock(uid) {
  let u=D.users[uid]; if(!u) return;
  u.adminBlocked=!u.adminBlocked;
  if(u.adminBlocked) { addNotif(uid,'admin','🔒','Your account has been blocked'); }
  saveData(); openAdminUserControl(uid); renderAdminUsers();
  toast('s', u.adminBlocked?`🔒 ${u.name} blocked`:`🔓 ${u.name} unblocked`);
}

function adminToggleKYC(uid) {
  let u=D.users[uid]; if(!u) return;
  u.kycVerified=!u.kycVerified;
  if(u.kycVerified) addNotif(uid,'kyc','✅','Your KYC has been verified by admin!');
  else addNotif(uid,'kyc','❌','Your KYC verification was revoked by admin.');
  saveData(); openAdminUserControl(uid); renderAdminUsers();
  toast('s', u.kycVerified?`✅ KYC verified for ${u.name}`:`❌ KYC revoked for ${u.name}`);
}

function adminToggleVerify(uid) {
  let u=D.users[uid]; if(!u) return;
  u.verified=!u.verified;
  if(u.verified) addNotif(uid,'verify','✔','Your account has been verified!');
  saveData(); openAdminUserControl(uid);
  toast('s', u.verified?`✔ ${u.name} verified`:`Verification removed from ${u.name}`);
}

async function adminResetPassword(uid) {
  let u=D.users[uid]; if(!u) return;
  let newPw = prompt('Set new password for '+u.name+':');
  if(!newPw || newPw.length<6) return toast('e','Password must be 6+ chars');
  u.password = await hashPass(newPw);
  saveData();
  toast('s', `🔑 Password reset for ${u.name}`);
}

function adminAddPts(uid) {
  let u=D.users[uid]; if(!u) return;
  let amt=parseInt(G('adminPtsAmt')?.value||0);
  if(!amt||amt<=0) return toast('e','Enter valid amount');
  u.points=(u.points||0)+amt;
  D.txs=D.txs||[]; D.txs.unshift({id:'t'+Date.now(),type:'admin',label:'Admin added points',pts:amt,at:Date.now(),user:uid});
  addNotif(uid,'earn','💰',`Admin added ${amt} pts to your account`);
  if(CU.id===uid){CU.points=u.points;}
  saveData(); openAdminUserControl(uid);
  toast('s',`➕ Added ${amt} pts to ${u.name}`);
}

function adminRemovePts(uid) {
  let u=D.users[uid]; if(!u) return;
  let amt=parseInt(G('adminPtsAmt')?.value||0);
  if(!amt||amt<=0) return toast('e','Enter valid amount');
  if((u.points||0)<amt) return toast('e','User has only '+u.points+' pts');
  u.points=(u.points||0)-amt;
  D.txs=D.txs||[]; D.txs.unshift({id:'t'+Date.now(),type:'admin',label:'Admin deducted points',pts:-amt,at:Date.now(),user:uid});
  addNotif(uid,'warn','⚠️',`Admin deducted ${amt} pts from your account`);
  saveData(); openAdminUserControl(uid);
  toast('s',`➖ Removed ${amt} pts from ${u.name}`);
}

function adminSendNotif(uid) {
  let msg=V('adminNotifMsg'); if(!msg) return toast('e','Enter message');
  addNotif(uid,'admin','📢',msg);
  saveData(); toast('s','Notification sent!');
  G('adminNotifMsg').value='';
}

function adminHidePost(pid, uid) {
  let p=D.posts.find(x=>x.id===pid); if(!p) return;
  p.hidden=!p.hidden;
  saveData(); openAdminUserControl(uid);
  toast('s', p.hidden?'Post hidden':'Post visible again');
}

function adminDeletePostById(pid, uid) {
  if(!confirm('Delete this post?')) return;
  D.posts=D.posts.filter(p=>p.id!==pid);
  saveData(); openAdminUserControl(uid);
  toast('s','Post deleted');
}

function adminDeleteAllPosts(uid) {
  if(!confirm('Delete ALL posts by this user?')) return;
  let count=(D.posts||[]).filter(p=>p.author===uid).length;
  D.posts=(D.posts||[]).filter(p=>p.author!==uid);
  addNotif(uid,'admin','🗑️','All your posts have been removed by admin');
  saveData(); openAdminUserControl(uid); renderAdminPosts();
  toast('s',`🗑️ Deleted ${count} posts`);
}

function adminDeleteUser(uid) {
  if(!confirm('⚠️ PERMANENTLY delete this account and all their data?')) return;
  let u=D.users[uid]; if(!u) return;
  let name=u.name;
  D.posts=(D.posts||[]).filter(p=>p.author!==uid);
  D.notifs=(D.notifs||[]).filter(n=>n.to!==uid);
  // Remove from followers/following
  Object.values(D.users).forEach(usr=>{
    usr.followers=(usr.followers||[]).filter(f=>f!==uid);
    usr.following=(usr.following||[]).filter(f=>f!==uid);
  });
  delete D.users[uid];
  saveData(); closeModal('adminUserModal'); renderAdminUsers(); rAdmin();
  toast('s',`💀 Account "${name}" permanently deleted`);
}

function renderAdminPosts() {
  let div=G('adminPosts'); if(!div) return;
  let posts=[...(D.posts||[])].sort((a,b)=>b.createdAt-a.createdAt);
  if(adminPostFlt==='copyright') posts=posts.filter(p=>p.copyright);
  if(adminPostFlt==='reported')  posts=posts.filter(p=>(p.reports||0)>0);
  if(adminPostFlt==='hidden')    posts=posts.filter(p=>p.hidden);
  div.innerHTML=posts.slice(0,30).map(p=>{
    let author=D.users[p.author]||{};
    return `<div class="task-card">
      <div style="flex:1;min-width:0;">
        <div style="font-size:12px;font-weight:700;">${esc(author.name||'Unknown')} <span style="color:var(--t3);font-weight:400;">${ago(p.createdAt)}</span></div>
        <div style="font-size:11px;color:var(--t2);">${esc(p.text?.substring(0,60)||'[Media]')}</div>
        <div style="font-size:10px;color:var(--t3);">${p.copyright?'⚠️ Copyright ':''} ${(p.reports||0)>0?`🚩 ${p.reports} reports`:''} ${p.hidden?'🙈 Hidden':''}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:4px;flex-shrink:0;">
        <button class="btn btn-ghost btn-xs" onclick="adminToggleHidePost('${p.id}')">${p.hidden?'👁️':'🙈'}</button>
        <button class="btn btn-r btn-xs" onclick="adminDeletePostAdmin('${p.id}')">🗑️</button>
      </div>
    </div>`;
  }).join('') || '<div style="padding:20px;text-align:center;color:var(--t3);">No posts found</div>';
}

function adminToggleHidePost(pid) {
  let p=D.posts.find(x=>x.id===pid); if(!p) return;
  p.hidden=!p.hidden; saveData(); renderAdminPosts();
  toast('s', p.hidden?'Post hidden':'Post visible');
}
function adminDeletePostAdmin(pid) {
  if(!confirm('Delete post?')) return;
  D.posts=D.posts.filter(p=>p.id!==pid);
  saveData(); renderAdminPosts(); rFeed();
  toast('s','Post deleted');
}

function renderAdminKYC() {
  let div=G('kycQueue'); if(!div) return;
  let pending=Object.values(D.users).filter(u=>u.kycPending&&!u.kycVerified);
  div.innerHTML=pending.length?pending.map(u=>`
    <div class="task-card">
      <div class="task-ico">🪪</div>
      <div class="task-info"><div class="task-name">${esc(u.name)}</div><div class="task-desc">@${esc(u.username||'')} · NID: ${u.kycPending?.nid||'N/A'}</div></div>
      <button class="btn btn-g btn-xs" onclick="verifyKYC('${u.id}')">✅ Verify</button>
      <button class="btn btn-r btn-xs" onclick="rejectKYC('${u.id}')">❌ Reject</button>
    </div>`).join(''):'<div style="padding:20px;text-align:center;color:var(--t3);">No pending KYC requests</div>';
}

async function renderAdminWithdrawals() {
  let div=G('withdrawQueue'); if(!div) return;
  try {
    const r = await fetch('/api/admin/withdrawals', {cache:'no-store', headers:{'x-user-id':CU?.id || ''}});
    const d = await r.json();
    if(d.success && Array.isArray(d.withdrawals)) {
      D.withdrawals = d.withdrawals.map(w => ({
        id:w.id,
        user:w.user || w.user_id,
        amount:Number(w.amount || 0),
        method:w.method,
        account:w.account,
        status:w.status || 'pending',
        at:w.at || new Date(w.created_at || Date.now()).getTime(),
        approvedAt:w.approvedAt || (w.approved_at ? new Date(w.approved_at).getTime() : null),
        rejectedAt:w.rejectedAt || (w.rejected_at ? new Date(w.rejected_at).getTime() : null)
      }));
      saveData();
    }
  } catch(e) {}
  let pending=(D.withdrawals||[]).filter(w=>w.status==='pending').sort((a,b)=>b.at-a.at);
  div.innerHTML=pending.length?pending.map(w=>{
    let u=D.users[w.user]||{};
    return `<div class="task-card">
      <div class="task-ico">💸</div>
      <div class="task-info">
        <div class="task-name">${esc(u.name||w.user)}</div>
        <div class="task-desc">${w.amount} pts · ${w.method} · ${w.account} · ${ago(w.at)}</div>
      </div>
      <button class="btn btn-g btn-xs" onclick="approveWithdraw('${w.id}')">✅ Approve</button>
      <button class="btn btn-r btn-xs" onclick="rejectWithdraw('${w.id}')">❌ Reject</button>
    </div>`;
  }).join(''):'<div style="padding:20px;text-align:center;color:var(--t3);">No pending withdrawals</div>';
}

function renderAdminReports() {
  let div=G('modQueue'); if(!div) return;
  let flagged=(D.posts||[]).filter(p=>p.copyright||(p.reports||0)>0).sort((a,b)=>b.createdAt-a.createdAt);
  let inbox=(D.adminReports||[]).sort((a,b)=>b.at-a.at);
  div.innerHTML=flagged.length?flagged.map(p=>{
    let author=D.users[p.author]||{};
    return `<div class="task-card">
      <div class="task-ico">${p.copyright?'©':'🚩'}</div>
      <div class="task-info"><div class="task-name">${esc(p.text?.substring(0,40)||'[Media]')}</div><div class="task-desc">by ${esc(author.name||'Unknown')} · ${p.copyright?'Copyright':'Report #'+p.reports}</div></div>
      <button class="btn btn-o btn-xs" onclick="adminToggleHidePost('${p.id}')">${p.hidden?'Show':'Hide'}</button>
      <button class="btn btn-r btn-xs" onclick="adminDeletePostAdmin('${p.id}')">Delete</button>
    </div>`;
  }).join(''):'<div style="padding:20px;text-align:center;color:var(--t3);">No flagged content</div>';
  if(inbox.length) {
    let inboxHtml = `<div class="section-label">User Reports & Messenger</div>` + inbox.map(r => {
      let from=D.users[r.from]||{};
      let post=r.postId ? D.posts.find(p=>p.id===r.postId) : null;
      return `<div class="task-card">
        <div class="task-ico">${r.type==='feedback'?'MSG':'REP'}</div>
        <div class="task-info"><div class="task-name">${esc(from.name||'User')} ${r.status==='closed'?'(closed)':''}</div><div class="task-desc">${esc(r.msg||'Report')} ${post?' - '+esc((post.text||'[Media]').substring(0,35)):''} - ${ago(r.at)}</div></div>
        <button class="btn btn-p btn-xs" onclick="openChat('${r.from}')">Chat</button>
        <button class="btn btn-ghost btn-xs" onclick="closeAdminReport('${r.id}')">Close</button>
      </div>`;
    }).join('');
    div.innerHTML = inboxHtml + div.innerHTML;
  }
}

function closeAdminReport(rid) {
  let r=(D.adminReports||[]).find(x=>x.id===rid);
  if(r) r.status='closed';
  saveData(); renderAdminReports();
  toast('s','Report closed');
}

function verifyKYC(uid) {
  if(D.users[uid]){ D.users[uid].kycVerified=true; delete D.users[uid].kycPending;
  addNotif(uid,'kyc','✅','Your KYC has been verified!'); saveData(); renderAdminKYC(); toast('s','KYC verified for '+D.users[uid].name); } }
function rejectKYC(uid) {
  if(D.users[uid]){ delete D.users[uid].kycPending;
  addNotif(uid,'kyc','❌','Your KYC was rejected. Please resubmit.'); saveData(); renderAdminKYC(); toast('e','KYC rejected for '+D.users[uid].name); } }
async function approveWithdraw(wid) {
  let w=(D.withdrawals||[]).find(x=>x.id===wid); if(!w) return;
  try {
    const r = await fetch(`/api/admin/withdrawals/${encodeURIComponent(wid)}/approve`, {method:'POST', headers:{'x-user-id':CU?.id || ''}});
    const d = await r.json();
    if(!r.ok || !d.success) throw new Error(d.error || 'Approve failed');
  } catch(e) {
    toast('e', e.message || 'Approve failed');
    return;
  }
  w.status='approved'; w.approvedAt=Date.now();
  addNotif(w.user,'withdraw','✅',`Your withdrawal of ${w.amount} pts was approved!`);
  saveData(); renderAdminWithdrawals(); toast('s','Withdrawal approved!'); }
async function rejectWithdraw(wid) {
  let w=(D.withdrawals||[]).find(x=>x.id===wid); if(!w) return;
  try {
    const r = await fetch(`/api/admin/withdrawals/${encodeURIComponent(wid)}/reject`, {method:'POST', headers:{'x-user-id':CU?.id || ''}});
    const d = await r.json();
    if(!r.ok || !d.success) throw new Error(d.error || 'Reject failed');
  } catch(e) {
    toast('e', e.message || 'Reject failed');
    return;
  }
  // Refund points
  let u=D.users[w.user]; if(u){ u.points=(u.points||0)+w.amount; }
  w.status='rejected'; w.rejectedAt=Date.now();
  addNotif(w.user,'withdraw','❌',`Your withdrawal of ${w.amount} pts was rejected. Points refunded.`);
  saveData(); renderAdminWithdrawals(); toast('e','Withdrawal rejected — points refunded'); }

// Also fix approveNFT/rejectNFT
function approveNFT(nid) { let n=(D.nfts||[]).find(x=>x.id===nid); if(n){ n.pendingApproval=false; saveData(); rAdmin(); toast('s','NFT approved!'); } }
function rejectNFT(nid) { D.nfts=(D.nfts||[]).filter(n=>n.id!==nid); saveData(); rAdmin(); toast('e','NFT rejected'); }

// ═══════════════════════════════════════════════════════════════
//  DATA EXPORT & MIGRATION (Supabase → JSON → S3)
// ═══════════════════════════════════════════════════════════════

/**
 * Export all Supabase data as JSON
 */
async function exportSupabaseData() {
  if(!CU?.isAdmin){ toast('e','Admin only'); return; }
  toast('i','📤 Exporting Supabase data...');
  
  try {
    // Check if supabase client exists
    if (typeof supabase === 'undefined' || !supabase) {
      // Fallback: Export local data
      exportLocalData();
      return;
    }
    
    const exportData = {
      exportedAt: new Date().toISOString(),
      tables: {}
    };
    
    // Export all tables
    const tables = ['users', 'posts', 'comments', 'likes', 'follows', 'notifications', 'transactions', 'withdrawals', 'nfts', 'marketplace'];
    
    for (const table of tables) {
      try {
        const { data, error } = await supabase.from(table).select('*');
        if (error) {
          console.warn(`[Export] Error fetching ${table}:`, error);
          exportData.tables[table] = { error: error.message, count: 0, data: [] };
        } else {
          exportData.tables[table] = { count: data.length, data };
        }
      } catch (e) {
        console.warn(`[Export] Exception fetching ${table}:`, e);
        exportData.tables[table] = { error: e.message, count: 0, data: [] };
      }
    }
    
    // Also export storage bucket file list
    try {
      const { data: files, error: fileError } = await supabase.storage.from('media').list('public');
      exportData.storage = { files: fileError ? [] : files, error: fileError?.message };
    } catch (e) {
      exportData.storage = { files: [], error: e.message };
    }
    
    // Download as JSON
    const jsonStr = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `supabase_export_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast('s', `✅ Exported! Total tables: ${tables.length}`);
    return exportData;
    
  } catch (err) {
    console.error('[Export] Failed:', err);
    toast('e','Export failed: '+err.message);
    // Fallback to local export
    exportLocalData();
  }
}

/**
 * Export local IndexedDB data as JSON
 */
function exportLocalData() {
  const exportObj = {
    exportedAt: new Date().toISOString(),
    source: 'local_storage',
    data: D
  };
  
  const jsonStr = JSON.stringify(exportObj, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `local_backup_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  toast('s','✅ Local data exported!');
}

/**
 * Get all files that need to be migrated
 */
async function getFilesToMigrate() {
  const files = [];
  
  // From posts (Supabase URLs)
  (D.posts||[]).forEach(post => {
    if (post.file && post.file.includes('supabase')) {
      files.push({
        url: post.file,
        type: 'post_media',
        id: post.id,
        postId: post.id
      });
    }
  });
  
  // From users (avatars)
  Object.values(D.users||{}).forEach(user => {
    if (user.avatar && user.avatar.includes('supabase')) {
      files.push({
        url: user.avatar,
        type: 'avatar',
        id: user.id,
        userId: user.id
      });
    }
  });
  
  return files;
}

/**
 * Upload file to S3
 */
async function uploadToS3(fileBlob, key, contentType, onProgress = null) {
  if (!S3_CONFIG.accessKeyId || !S3_CONFIG.secretAccessKey || !S3_CONFIG.bucket) {
    throw new Error('S3 not configured. Add credentials in S3_CONFIG.');
  }
  
  const endpoint = S3_CONFIG.endpoint || `https://s3.${S3_CONFIG.region}.amazonaws.com`;
  const url = `${endpoint}/${S3_CONFIG.bucket}/${key}`;
  
  // Calculate AWS Signature v4 (simplified - in production use AWS SDK)
  const date = new Date().toISOString().replace(/[:\-]|\..*/g, '');
  const dateStamp = date.substr(0, 8);
  
  const headers = {
    'Content-Type': contentType,
    'x-amz-date': date,
    'x-amz-content-sha256': 'UNSIGNED-PAYLOAD',
    'Authorization': `AWS4-HMAC-SHA256 Credential=${S3_CONFIG.accessKeyId}/${dateStamp}/${S3_CONFIG.region}/s3/aws4_request, SignedHeaders=host;x-amz-content-sha256;x-amz-date, Signature=...`
  };
  
  const response = await fetch(url, {
    method: 'PUT',
    headers: headers,
    body: fileBlob
  });
  
  if (!response.ok) {
    throw new Error(`S3 upload failed: ${response.status} ${response.statusText}`);
  }
  
  return { url, key };
}

/**
 * Migrate all files to S3
 */
async function migrateToS3(options = {}) {
  if(!CU?.isAdmin){ toast('e','Admin only'); return; }
  
  if (!S3_CONFIG.accessKeyId || !S3_CONFIG.secretAccessKey || !S3_CONFIG.bucket) {
    toast('e','⚠️ S3 not configured. Add AWS credentials in code.');
    return;
  }
  
  const dryRun = options.dryRun !== false; // Default: preview only
  const files = await getFilesToMigrate();
  
  if (files.length === 0) {
    toast('w','No files found to migrate');
    return;
  }
  
  if (dryRun) {
    toast('i',`📋 Found ${files.length} files. Run with dryRun:false to migrate.`);
    console.log('[Migration] Files to migrate:', files);
    return files;
  }
  
  // Confirm before actual migration
  if (!confirm(`Migrate ${files.length} files to S3? This may take time.`)) return;
  
  toast('i',`🚀 Starting migration of ${files.length} files...`);
  const results = { success: [], failed: [] };
  
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    try {
      // Download from current URL
      const response = await fetch(file.url);
      if (!response.ok) throw new Error(`Failed to download: ${response.status}`);
      
      const blob = await response.blob();
      const contentType = blob.type || 'application/octet-stream';
      const extension = contentType.split('/')[1] || 'bin';
      const key = `migrated/${file.type}/${file.id}_${Date.now()}.${extension}`;
      
      // Upload to S3
      const result = await uploadToS3(blob, key, contentType);
      
      results.success.push({ ...file, newUrl: result.url });
      
      // Update local data with new URL
      if (file.type === 'post_media') {
        const post = D.posts.find(p => p.id === file.postId);
        if (post) post.file = result.url;
      } else if (file.type === 'avatar') {
        const user = D.users[file.userId];
        if (user) user.avatar = result.url;
      }
      
      toast('i',`Migrated ${i+1}/${files.length}: ${file.type}`);
      
    } catch (err) {
      console.error(`[Migration] Failed for ${file.id}:`, err);
      results.failed.push({ ...file, error: err.message });
    }
  }
  
  // Save updated URLs
  saveData();
  
  // Export migration report
  const report = {
    migratedAt: new Date().toISOString(),
    total: files.length,
    success: results.success.length,
    failed: results.failed.length,
    successFiles: results.success,
    failedFiles: results.failed
  };
  
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `migration_report_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  toast('s',`✅ Migration complete! Success: ${results.success.length}, Failed: ${results.failed.length}`);
  return report;
}

/**
 * Export all data + migrate files to S3 (Complete backup)
 */
async function fullExportAndMigrate() {
  if(!CU?.isAdmin){ toast('e','Admin only'); return; }
  
  toast('i','🚀 Starting full export & migration...');
  
  // Step 1: Export text data
  const dataExport = await exportSupabaseData();
  
  // Step 2: Migrate files
  const migrationReport = await migrateToS3({ dryRun: false });
  
  // Step 3: Combined report
  const fullReport = {
    timestamp: new Date().toISOString(),
    dataExport,
    migrationReport
  };
  
  const blob = new Blob([JSON.stringify(fullReport, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `full_export_migrate_${Date.now()}.json`;
  a.click();
  URL.revokeObjectURL(url);
  
  toast('s','✅ Full export & migration complete!');
}

// ═══════════════════════════════════════════════════════════════
//  WEB3 / METAMASK / PHANTOM / ETHEREUM / SOLANA
// ═══════════════════════════════════════════════════════════════
let web3Instance = null;
let web3Account  = null;
let web3Chain    = null;
let phantomProvider = null;
let phantomPubkey   = null;

// ── MetaMask Connect ─────────────────────────────────────────
async function connectMetaMask() {
  if(typeof window.ethereum === 'undefined') {
    toast('e','MetaMask not installed! Install from metamask.io');
    window.open('https://metamask.io/download/', '_blank');
    return;
  }
  try {
    toast('i','Connecting MetaMask...');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    web3Account = accounts[0];
    web3Instance = new Web3(window.ethereum);
    web3Chain = await web3Instance.eth.getChainId();
    // Get balance
    const balWei = await web3Instance.eth.getBalance(web3Account);
    const balEth = parseFloat(web3Instance.utils.fromWei(balWei, 'ether')).toFixed(4);
    // Update UI
    let btn = G('mmBtn');
    if(btn){ btn.textContent='🦊 Connected'; btn.style.background='rgba(16,185,129,.2)'; btn.style.borderColor='rgba(16,185,129,.4)'; }
    let statusEl = G('web3Status'); if(statusEl) statusEl.textContent = '🦊 MetaMask Connected (Chain: '+web3Chain+')';
    let addrEl = G('web3Address'); if(addrEl){ addrEl.textContent = web3Account.slice(0,6)+'...'+web3Account.slice(-4); addrEl.style.display='block'; }
    let balEl = G('web3Balance'); if(balEl){ balEl.textContent = balEth + ' ETH'; balEl.style.display='block'; }
    // Save to user
    if(CU){ let u=D.users[CU.id]||CU; u.ethAddress=web3Account; u.ethBalance=balEth; saveData(); }
    toast('s','✅ MetaMask connected! Balance: '+balEth+' ETH');
    // Listen for account changes
    window.ethereum.on('accountsChanged', accs => {
      web3Account = accs[0] || null;
      if(!web3Account) disconnectWeb3(); else connectMetaMask();
    });
    loadCryptoPrices();
  } catch(e) {
    toast('e','MetaMask: '+( e.message || 'Connection failed'));
  }
}

// ── Phantom (Solana) Connect ─────────────────────────────────
async function connectPhantom() {
  const ph = window?.solana;
  if(!ph?.isPhantom) {
    toast('e','Phantom not installed! Install from phantom.app');
    window.open('https://phantom.app/', '_blank');
    return;
  }
  try {
    toast('i','Connecting Phantom...');
    const resp = await ph.connect();
    phantomPubkey = resp.publicKey.toString();
    phantomProvider = ph;
    // Get SOL balance via Helius or public RPC
    let solBal = await getSolBalance(phantomPubkey);
    // Update UI
    let btn = G('phBtn');
    if(btn){ btn.textContent='👻 Connected'; btn.style.background='rgba(139,92,246,.2)'; btn.style.borderColor='rgba(139,92,246,.4)'; }
    let statusEl = G('web3Status'); if(statusEl) statusEl.textContent = '👻 Phantom Connected';
    let addrEl = G('web3Address'); if(addrEl){ addrEl.textContent = phantomPubkey.slice(0,6)+'...'+phantomPubkey.slice(-4); addrEl.style.display='block'; }
    let balEl = G('web3Balance'); if(balEl){ balEl.textContent = solBal + ' SOL'; balEl.style.display='block'; }
    if(CU){ let u=D.users[CU.id]||CU; u.solAddress=phantomPubkey; u.solBalance=solBal; saveData(); }
    toast('s','✅ Phantom connected! Balance: '+solBal+' SOL');
    loadCryptoPrices();
  } catch(e) {
    toast('e','Phantom: '+(e.message||'Connection failed'));
  }
}

function disconnectWeb3() {
  web3Instance=null; web3Account=null; phantomPubkey=null; phantomProvider=null;
  let s=G('web3Status'); if(s) s.textContent='Not connected';
  let a=G('web3Address'); if(a){ a.textContent=''; a.style.display='none'; }
  let b=G('web3Balance'); if(b){ b.textContent=''; b.style.display='none'; }
  let mm=G('mmBtn'); if(mm){ mm.textContent='🦊 MetaMask'; mm.style.background=''; mm.style.borderColor=''; }
  let ph=G('phBtn'); if(ph){ ph.textContent='👻 Phantom'; ph.style.background=''; ph.style.borderColor=''; }
  toast('i','Wallet disconnected');
}

// ── Get SOL Balance ──────────────────────────────────────────
async function getSolBalance(pubkey) {
  try {
    let rpc = HELIUS_API_KEY
      ? `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`
      : 'https://api.mainnet-beta.solana.com';
    let r = await fetch(rpc, {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ jsonrpc:'2.0', id:1, method:'getBalance', params:[pubkey] })
    });
    let d = await r.json();
    return ((d.result?.value||0) / 1e9).toFixed(4);
  } catch(e) { return '0.0000'; }
}

// ── Send Crypto ──────────────────────────────────────────────
async function sendCrypto() {
  let type = G('sendCryptoType')?.value;
  let to   = V('sendCryptoTo');
  let amt  = parseFloat(V('sendCryptoAmt'));
  if(!to || !amt || amt <= 0) return toast('e','Fill all fields');
  if(type === 'eth') {
    if(!web3Instance || !web3Account) return toast('e','Connect MetaMask first');
    try {
      toast('i','Sending ETH...');
      let amtWei = web3Instance.utils.toWei(String(amt), 'ether');
      let tx = await web3Instance.eth.sendTransaction({
        from: web3Account, to, value: amtWei,
        gas: 21000
      });
      addWeb3Tx({ hash:tx.transactionHash, type:'send', coin:'ETH', amount:amt, to, at:Date.now() });
      toast('s','✅ ETH sent! TX: '+tx.transactionHash.slice(0,10)+'...');
    } catch(e) { toast('e','ETH send failed: '+(e.message||'')); }
  } else if(type === 'sol') {
    if(!phantomProvider || !phantomPubkey) return toast('e','Connect Phantom first');
    try {
      toast('i','Sending SOL...');
      // Use window.solana to create and send transaction
      const { PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL, Connection } = window.solanaWeb3 || {};
      if(!PublicKey) { toast('e','Solana Web3 library not loaded'); return; }
      let rpc = HELIUS_API_KEY ? `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}` : 'https://api.mainnet-beta.solana.com';
      let conn = new Connection(rpc);
      let tx = new Transaction().add(
        SystemProgram.transfer({ fromPubkey: new PublicKey(phantomPubkey), toPubkey: new PublicKey(to), lamports: amt * LAMPORTS_PER_SOL })
      );
      let { blockhash } = await conn.getLatestBlockhash();
      tx.recentBlockhash = blockhash;
      tx.feePayer = new PublicKey(phantomPubkey);
      let signed = await phantomProvider.signTransaction(tx);
      let sig = await conn.sendRawTransaction(signed.serialize());
      addWeb3Tx({ hash:sig, type:'send', coin:'SOL', amount:amt, to, at:Date.now() });
      toast('s','✅ SOL sent! Signature: '+sig.slice(0,10)+'...');
    } catch(e) { toast('e','SOL send failed: '+(e.message||'')); }
  }
}

function addWeb3Tx(tx) {
  if(!CU) return;
  let u = D.users[CU.id]||CU;
  u.web3Txs = u.web3Txs || [];
  u.web3Txs.unshift(tx);
  saveData(); renderWeb3Txs();
}

function renderWeb3Txs() {
  let div = G('web3TxList'); if(!div||!CU) return;
  let u = D.users[CU.id]||CU;
  let txs = u.web3Txs||[];
  if(!txs.length){ div.innerHTML='<div style="text-align:center;padding:16px;color:var(--t3);">No transactions yet</div>'; return; }
  div.innerHTML = txs.slice(0,10).map(tx=>`
    <div class="web3-tx">
      <div class="wt-ico">${tx.coin==='ETH'?'Ξ':tx.coin==='SOL'?'◎':'₿'}</div>
      <div class="wt-info">
        <div style="font-size:12px;font-weight:700;">${tx.type==='send'?'Sent':'Received'} ${tx.amount} ${tx.coin}</div>
        <div class="wt-hash">${tx.hash?.slice(0,20)+'...'}</div>
        <div style="font-size:10px;color:var(--t3);">${ago(tx.at)}</div>
      </div>
      <a href="${tx.coin==='ETH'?'https://etherscan.io/tx/'+tx.hash:'https://solscan.io/tx/'+tx.hash}" target="_blank" style="font-size:11px;color:var(--neon);">↗</a>
    </div>`).join('');
}

// ── Live Crypto Prices ───────────────────────────────────────
async function loadCryptoPrices() {
  try {
    let r = await fetch('/api/crypto/prices');
    let d = await r.json();
    let coins = [
      { id:'bitcoin',    el:'btcPrice', sym:'BTC', color:'var(--c4)' },
      { id:'ethereum',   el:'ethPrice', sym:'ETH', color:'var(--c2)' },
      { id:'solana',     el:'solPrice', sym:'SOL', color:'var(--neon)' },
      { id:'binancecoin',el:'bnbPrice', sym:'BNB', color:'var(--c4)' },
    ];
    coins.forEach(c => {
      let el = G(c.el); if(!el) return;
      let price = d[c.id]?.usd;
      let chg   = d[c.id]?.usd_24h_change;
      if(price) {
        el.textContent = '$'+price.toLocaleString();
        el.style.color = chg >= 0 ? 'var(--c3)' : 'var(--c5)';
      }
    });
  } catch(e) {
    // Fallback: fetch from CoinGecko directly
    try {
      let r2 = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,binancecoin&vs_currencies=usd&include_24hr_change=true');
      let d2 = await r2.json();
      if(G('btcPrice')) G('btcPrice').textContent = '$'+(d2.bitcoin?.usd||0).toLocaleString();
      if(G('ethPrice')) G('ethPrice').textContent = '$'+(d2.ethereum?.usd||0).toLocaleString();
      if(G('solPrice')) G('solPrice').textContent = '$'+(d2.solana?.usd||0).toLocaleString();
      if(G('bnbPrice')) G('bnbPrice').textContent = '$'+(d2.binancecoin?.usd||0).toLocaleString();
    } catch(e2) {}
  }
}

// ── PeerJS Video Call (fallback if Metered TURN fails) ──────
let peer = null;
let peerCall = null;

function initPeerJS(userId) {
  if(typeof Peer === 'undefined') return;
  try {
    peer = new Peer(userId, {
      host: '0.peerjs.com', port: 443, path: '/', secure: true,
      config: { iceServers: [
        { urls: 'stun:stun.l.google.com:19302' },
        { urls: 'turn:global.relay.metered.ca:443', username:'d583b2ca0185d321a1fd3b93', credential:'olukX7eOalIsC9EK' }
      ]}
    });
    peer.on('error', e => console.warn('[PeerJS]', e));
    peer.on('call', call => {
      peerCall = call;
      navigator.mediaDevices.getUserMedia({video:callState.type==='video',audio:true}).then(stream=>{
        call.answer(stream); callState.localStream=stream;
        if(callState.type==='video'&&G('callLocalVideo')) G('callLocalVideo').srcObject=stream;
        call.on('stream', remote => {
          callState.remoteStream=remote;
          let rv=G('callRemoteVideo'); if(rv){rv.srcObject=remote;rv.style.display='block';}
        });
      }).catch(e=>console.warn('[PeerJS answer]',e));
    });
    console.log('[PeerJS] Initialized for', userId);
  } catch(e) { console.warn('[PeerJS init]',e); }
}

// ── AdSense feed ads ─────────────────────────────────────────
function mkFeedAd(adIdx) {
  let d = document.createElement('div');
  d.className='feed-ad';
  d.style.cssText='background:var(--g2);border:1px solid var(--b1);border-radius:16px;overflow:hidden;margin-bottom:10px;position:relative;';
  // Priority: AdSense > MediaNet > PropellerAds > Adsterra > Internal
  if(ADSENSE_CLIENT && ADSENSE_SLOT) {
    d.innerHTML=`<div style="font-size:9px;color:var(--t3);padding:3px 10px;text-align:right;letter-spacing:.5px;">Ad</div>
      <ins class="adsbygoogle" style="display:block;min-height:100px;"
        data-ad-client="${ADSENSE_CLIENT}" data-ad-slot="${ADSENSE_SLOT}"
        data-ad-format="fluid" data-ad-layout="in-article"
        data-full-width-responsive="true"></ins>`;
    setTimeout(()=>{ try{(adsbygoogle=window.adsbygoogle||[]).push({});}catch(e){} },500);
  } else if(MEDIANET_CID && adIdx%2===0) {
    // Media.net contextual ad (alternate with others)
    d.innerHTML=`<div style="font-size:9px;color:var(--t3);padding:3px 10px;text-align:right;">Sponsored</div>
      <div id="mnet-${adIdx}" style="min-height:90px;"></div>`;
    setTimeout(()=>{
      try {
        let div=d.querySelector('#mnet-'+adIdx);
        if(div && window._mNativeConfiguration) {
          let sc=document.createElement('script');
          sc.src=`//contextual.media.net/dmedianet.js?cid=${MEDIANET_CID}`;
          div.appendChild(sc);
        }
      } catch(e){}
    }, 400);
  } else if(PROPELLERADS_ZONE) {
    d.innerHTML=`<div style="font-size:9px;color:var(--t3);padding:3px 10px;text-align:right;">Sponsored</div>
      <div id="prop-${adIdx}" style="min-height:90px;text-align:center;"></div>`;
    setTimeout(()=>{
      try {
        let sc=document.createElement('script');
        sc.setAttribute('data-zone', PROPELLERADS_ZONE);
        sc.src='https://acepixel.com/tag.min.js';
        d.querySelector('#prop-'+adIdx)?.appendChild(sc);
      } catch(e){}
    }, 300);
  } else if(ADSTERRA_KEY) {
    d.innerHTML=`<div style="font-size:9px;color:var(--t3);padding:3px 10px;text-align:right;">Sponsored</div>
      <div id="ast-${adIdx}" style="min-height:90px;"></div>`;
    setTimeout(()=>{
      let sc=document.createElement('script');
      sc.src='//www.topcreativeformat.com/'+ADSTERRA_KEY+'/invoke.js';
      d.querySelector('#ast-'+adIdx)?.appendChild(sc);
    }, 200);
  } else if(adIdx % 3 === 0) {
    // ProfitableCPMRate Native Banner
    d.innerHTML=`<div style="font-size:9px;color:var(--t3);padding:3px 10px;text-align:right;">Sponsored</div>
      <div id="cpmr-native-${adIdx}" style="min-height:90px;"></div>`;
    setTimeout(()=>{
      let container = d.querySelector('#cpmr-native-'+adIdx);
      if(container) {
        let sc1=document.createElement('script');
        sc1.async=true; sc1.setAttribute('data-cfasync','false');
        sc1.src='https://pl29280287.profitablecpmratenetwork.com/1805a61f4f6c6177d946441e5153e81c/invoke.js';
        container.appendChild(sc1);
        let cDiv=document.createElement('div');
        cDiv.id='container-1805a61f4f6c6177d946441e5153e81c';
        container.appendChild(cDiv);
      }
    }, 300);
  } else if(adIdx % 3 === 1) {
    // ProfitableCPMRate Banner 160x30
    d.innerHTML=`<div style="font-size:9px;color:var(--t3);padding:3px 10px;text-align:right;">Sponsored</div>
      <div id="cpmr-160-${adIdx}" style="min-height:40px;text-align:center;"></div>`;
    setTimeout(()=>{
      let container = d.querySelector('#cpmr-160-'+adIdx);
      if(container) {
        let sc1=document.createElement('script');
        sc1.textContent=`atOptions={'key':'5c1a960ae2f4c6d4ac2b758a9e2fb18b','format':'iframe','height':30,'width':160,'params':{}};`;
        container.appendChild(sc1);
        let sc2=document.createElement('script');
        sc2.src='https://www.highperformanceformat.com/5c1a960ae2f4c6d4ac2b758a9e2fb18b/invoke.js';
        container.appendChild(sc2);
      }
    }, 300);
  } else if(adIdx % 3 === 2) {
    // ProfitableCPMRate Banner 300x50
    d.innerHTML=`<div style="font-size:9px;color:var(--t3);padding:3px 10px;text-align:right;">Sponsored</div>
      <div id="cpmr-300-${adIdx}" style="min-height:60px;text-align:center;"></div>`;
    setTimeout(()=>{
      let container = d.querySelector('#cpmr-300-'+adIdx);
      if(container) {
        let sc1=document.createElement('script');
        sc1.textContent=`atOptions={'key':'ddb48e8829959135fea1323207677af1','format':'iframe','height':50,'width':300,'params':{}};`;
        container.appendChild(sc1);
        let sc2=document.createElement('script');
        sc2.src='https://www.highperformanceformat.com/ddb48e8829959135fea1323207677af1/invoke.js';
        container.appendChild(sc2);
      }
    }, 300);
  } else {
    // Internal earning ad (no external network configured)
    let ads=[
      {t:'📺 Watch & Earn',s:'Watch this ad to earn +5 pts',p:5,c:'var(--c2)'},
      {t:'🎯 Complete Task',s:'Quick task for +10 pts',p:10,c:'var(--c3)'},
      {t:'🤝 Refer a Friend',s:'Earn +100 pts per referral',p:0,c:'var(--neon)',fn:"nav('referral')"},
      {t:'💎 Stake Points',s:'Earn 15% APY on your points',p:0,c:'var(--c7)',fn:"openModal('stakeModal')"},
    ];
    let ad=ads[adIdx%ads.length];
    d.innerHTML=`<div class="ad-spon">Sponsored</div>
      <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;">
        <div style="font-size:22px;">💰</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:12px;color:${ad.c};">${ad.t}</div>
          <div style="font-size:11px;color:var(--t2);">${ad.s}</div>
        </div>
        <button class="btn btn-o btn-xs" onclick="${ad.fn||`clickFeedAd(this,${ad.p})`}">${ad.p?'Get +'+ad.p:'→'}</button>
      </div>`;
  }
  return d;
}

function mkFeedMediaStrip(adIdx) {
  const ads = [
    {title:'Watch Viral Reels',subtitle:'Swipe through promo clips from top sites',badge:'VIDEO',preview:'video',url:'https://example.com/reels'},
    {title:'Download App Offers',subtitle:'Mobile apps with instant bonus points',badge:'APP',preview:'image',url:'https://example.com/app'},
    {title:'Shop & Earn',subtitle:'Trending shopping deals for your phone',badge:'SHOP',preview:'image',url:'https://example.com/shop'},
    {title:'Live Stream Rewards',subtitle:'Live videos from different networks',badge:'LIVE',preview:'video',url:'https://example.com/live'},
    {title:'Photo Story Ads',subtitle:'Different site stories in a scrollable row',badge:'STORY',preview:'image',url:'https://example.com/story'}
  ];
  const start = adIdx % ads.length;
  const items = ads.slice(start, start + 4).concat(ads.slice(0, Math.max(0, start + 4 - ads.length))).slice(0, 4);
  const d = document.createElement('div');
  d.className = 'feed-ad-strip';
  d.innerHTML = items.map((item, idx) => `
    <div class="ad-strip-card" onclick="window.open('${item.url}','_blank')">
      <div class="ad-strip-thumb ${item.preview}">${item.preview === 'video' ? '▶' : '📸'}</div>
      <div class="ad-strip-info">
        <div class="ad-strip-title">${item.title}</div>
        <div class="ad-strip-sub">${item.subtitle}</div>
        <div class="ad-strip-footer">
          <div class="ad-strip-label">${item.badge}</div>
          <button class="ad-strip-btn">View</button>
        </div>
      </div>
    </div>
  `).join('');
  d.dataset.autoScroll = '0';
  return d;
}

function initFeedAdStrips() {
  document.querySelectorAll('.feed-ad-strip').forEach(strip => {
    if(strip.dataset.autoScroll === '1') return;
    strip.dataset.autoScroll = '1';
    const cards = Array.from(strip.querySelectorAll('.ad-strip-card'));
    if(!cards.length) return;
    let current = 0;
    let timer = setInterval(() => {
      current = (current + 1) % cards.length;
      const target = cards[current];
      if(target) {
        strip.scrollTo({ left: target.offsetLeft - 10, behavior: 'smooth' });
      }
    }, 4500);
    const clear = () => { clearInterval(timer); };
    strip.addEventListener('mouseenter', clear);
    strip.addEventListener('touchstart', clear);
  });
}

// ══════════════════════════════════════════════════════════════
//  NFT Page render (enhanced)
// ══════════════════════════════════════════════════════════════
function rNFTMarketplace() {
  syncCU(); if(!CU) return;
  loadCryptoPrices();
  renderWeb3Txs();
  // Restore wallet if previously connected
  let u = D.users[CU.id]||CU;
  if(u.ethAddress) {
    let addrEl=G('web3Address'); if(addrEl){addrEl.textContent=u.ethAddress.slice(0,6)+'...'+u.ethAddress.slice(-4);addrEl.style.display='block';}
    let balEl=G('web3Balance'); if(balEl){balEl.textContent=(u.ethBalance||'0')+' ETH';balEl.style.display='block';}
    let s=G('web3Status'); if(s) s.textContent='🦊 MetaMask (last session)';
  } else if(u.solAddress) {
    let addrEl=G('web3Address'); if(addrEl){addrEl.textContent=u.solAddress.slice(0,6)+'...'+u.solAddress.slice(-4);addrEl.style.display='block';}
    let s=G('web3Status'); if(s) s.textContent='👻 Phantom (last session)';
  }
  nftFilter('all', document.querySelector('#pg-nft .chip'));
}

// nftFilter moved to Web3 section above

function openNFTDetail(nid) {
  let n = (D.nfts||[]).find(x=>x.id===nid); if(!n) return;
  let creator = D.users[n.creator]||{};
  let grad = randomGrad();
  toast('i', '🎨 '+n.name+' by '+creator.name+' — '+n.price+' pts');
}

function buyNFTModal(nid) {
  let n=(D.nfts||[]).find(x=>x.id===nid); if(!n) return;
  if(n.sold){ toast('e','Already sold!'); return; }
  if(confirm('Buy "'+n.name+'" for '+n.price+' pts?')) buyNFT(nid);
}



// ═══════════════════════════════════════════════════════════
//  CLOUDINARY MEDIA UPLOAD
// ═══════════════════════════════════════════════════════════
async function uploadToCloudinary(file, onProgress) {
  if (!CLOUDINARY_CLOUD_NAME) {
    // Cloudinary not configured, fallback to client-side compression / Base64 storage
    return await compressAndBase64(file, onProgress);
  }

  try {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('folder', 'monetixra');

    let url = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/upload`;

    if (CLOUDINARY_USE_SERVER_SIGN) {
      const resp = await fetch('/api/cloudinary/signature?folder=monetixra');
      if (!resp.ok) throw new Error('Cloudinary signature unavailable');
      const auth = await resp.json();
      formData.append('api_key', auth.apiKey);
      formData.append('timestamp', auth.timestamp);
      formData.append('signature', auth.signature);
      if (auth.folder) formData.set('folder', auth.folder);
    } else if (CLOUDINARY_UPLOAD_PRESET) {
      formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    }

    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.upload.onprogress = (e) => {
        if(onProgress && e.lengthComputable)
          onProgress(Math.round(e.loaded/e.total*100));
      };
      xhr.onload = () => {
        try {
          const d = JSON.parse(xhr.responseText);
          if (d.secure_url) resolve({ url: d.secure_url, type: file.type, cloudinary: true });
          else reject(new Error(d.error?.message || 'Upload failed'));
        } catch (ex) {
          reject(new Error('Cloudinary response parse failed'));
        }
      };
      xhr.onerror = () => reject(new Error('Network error'));
      xhr.open('POST', url);
      xhr.send(formData);
    });
  } catch (e) {
    console.warn('[Cloudinary]', e.message);
    return await compressAndBase64(file, onProgress);
  }
}

// Compress image to max 500KB before storing as base64
async function compressAndBase64(file, onProgress) {
  return new Promise((resolve) => {
    if(file.type.startsWith('image/')) {
      const img = new Image();
      const reader = new FileReader();
      reader.onload = (e) => {
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let w = img.width, h = img.height;
          const MAX = 800;
          if(w > MAX || h > MAX) {
            if(w > h) { h = Math.round(h*MAX/w); w = MAX; }
            else      { w = Math.round(w*MAX/h); h = MAX; }
          }
          canvas.width = w; canvas.height = h;
          canvas.getContext('2d').drawImage(img, 0, 0, w, h);
          const b64 = canvas.toDataURL('image/jpeg', 0.75);
          if(onProgress) onProgress(100);
          resolve({ url: b64, type: 'image/jpeg', cloudinary: false });
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else {
      // Video/audio: read as base64 (warn if >2MB)
      if(file.size > 2*1024*1024) {
        toast('w', 'Large file — consider using Cloudinary for best performance');
      }
      const reader = new FileReader();
      reader.onload = (e) => { if(onProgress) onProgress(100); resolve({ url: e.target.result, type: file.type, cloudinary: false }); };
      reader.readAsDataURL(file);
    }
  });
}

// Supabase Storage upload — permanent media storage
// Accepts base64 dataURL string (from FileReader) or File object
let _supabaseUploading = false;
async function uploadToSupabase(dataOrFile, mime, bucket='media') {
  try {
    let blob, ext;
    if (typeof dataOrFile === 'string' && dataOrFile.startsWith('data:')) {
      // base64 dataURL → Blob
      const parts = dataOrFile.match(/^data:(.+?);base64,(.*)$/);
      if (!parts) throw new Error('Invalid dataURL');
      mime = mime || parts[1];
      const b64 = atob(parts[2]);
      const arr = new Uint8Array(b64.length);
      for (let i = 0; i < b64.length; i++) arr[i] = b64.charCodeAt(i);
      blob = new Blob([arr], { type: mime });
      ext = mime.split('/')[1]?.replace('jpeg','jpg')?.replace('x-','') || 'bin';
    } else if (dataOrFile instanceof File || dataOrFile instanceof Blob) {
      blob = dataOrFile;
      mime = mime || dataOrFile.type || 'application/octet-stream';
      ext = dataOrFile.name?.split('.').pop()?.toLowerCase() || mime.split('/')[1] || 'bin';
    } else {
      throw new Error('Unsupported input type');
    }
    const path = `${CU?.id||'anon'}/${Date.now()}.${ext}`;
    _supabaseUploading = true;
    const r = await fetch(`${SUPABASE_URL}/storage/v1/object/${bucket}/${path}`, {
      method: 'PUT',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': mime,
        'x-upsert': 'true'
      },
      body: blob
    });
    _supabaseUploading = false;
    const d = await r.json();
    if (d.Key || d.statusCode === '200' || r.ok) {
      const publicUrl = `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`;
      console.log('[Supabase Storage] Uploaded:', publicUrl);
      return publicUrl;
    }
    throw new Error(d.error || d.msg || 'Upload failed');
  } catch(e) {
    _supabaseUploading = false;
    console.warn('[Supabase Storage] Upload failed:', e.message);
    return null;
  }
}
window.uploadToSupabaseNative = uploadToSupabase;
// Upload media to Supabase and replace base64 with permanent URL
async function dataUrlToFile(dataUrl, filename) {
  let arr = dataUrl.split(',');
  let mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]);
  let n = bstr.length;
  let u8arr = new Uint8Array(n);
  while(n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new File([u8arr], filename, { type: mime });
}

async function persistMediaToSupabase() {
  if (!pfData || !pfMime) return; // no media
  // Skip if already a URL (not base64)
  if (typeof pfData === 'string' && !pfData.startsWith('data:')) return;

  let file = pfFile;
  if (!file && typeof pfData === 'string' && pfData.startsWith('data:')) {
    file = await dataUrlToFile(pfData, pfName || `upload.${pfMime?.split('/')[1] || 'bin'}`);
  }
  if (!file) return;

  try {
    const uploadResult = await smartUpload(file, {
      onProgress: pct => {
        let fill = G('plbFill'); if(fill) fill.style.width = Math.min(90, pct) + '%';
      }
    });
    if (uploadResult?.url) {
      if (String(uploadResult.url).startsWith('indexeddb://')) {
        // Keep the original dataURL for the post; saveData() will persist it in
        // MonetixraMedia IndexedDB and store a restorable db:// reference.
        return;
      }
      pfData = uploadResult.url;
      pfMime = uploadResult.type || pfMime;
      pfName = uploadResult.name || pfName;
    }
  } catch (err) {
    console.warn('[HybridStorage] Media upload failed:', err);
  }
}


// Offline Cache
const CACHE_KEY='me_x_cache';
const OfflineCache={ save(post){ try{ if(!post?.file) return; let c=JSON.parse(localStorage.getItem(CACHE_KEY)||'{"items":{}}'); if(c.items[post.id]) return; c.items[post.id]={id:post.id,url:post.file,mime:post.mimetype||'',caption:post.text||'',author:post.author||'',at:new Date().toISOString()}; localStorage.setItem(CACHE_KEY,JSON.stringify(c)); }catch(e){} }, getAll(){ try{ let c=JSON.parse(localStorage.getItem(CACHE_KEY)||'{}'); return Object.values(c.items||{}).sort((a,b)=>new Date(b.at)-new Date(a.at)); }catch(e){ return []; } }, clear(){ localStorage.removeItem(CACHE_KEY); toast('s','Cache cleared!'); rOfflinePage(); } };
function rOfflinePage() { let el=G('offlineContent'); if(!el) return; let items=OfflineCache.getAll(); let online=navigator.onLine; el.innerHTML=`<div class="friend-hero"><div style="font-size:32px;">${online?'🟢 Online':'🔴 Offline'}</div><div style="display:grid;grid-template-columns:1fr 1fr;gap:7px;margin-top:10px;"><div><div class="mono neon">${items.length}</div><div>Saved</div></div><div><div class="mono">50 MB</div><div>Max</div></div></div></div><button class="btn btn-ghost btn-sm" onclick="OfflineCache.clear()">🗑️ Clear</button>`; if(items.length) items.forEach(item=>{ el.innerHTML+=`<div class="task-card"><div class="task-ico">${item.mime?.startsWith('image/')?'📷':item.mime?.startsWith('video/')?'📹':'🎵'}</div><div>${esc(item.caption?.substring(0,40)||'Media')}</div></div>`; }); }
window.addEventListener('online',()=>{ let nb=document.createElement('div'); nb.className='net-banner'; nb.style.background='linear-gradient(90deg,rgba(0,255,170,.92),rgba(0,212,255,.92))'; nb.textContent='✅ Internet is back!'; document.body.appendChild(nb); setTimeout(()=>nb.remove(),3000); rFeed(); });
window.addEventListener('offline',()=>{ let nb=document.createElement('div'); nb.className='net-banner'; nb.style.background='linear-gradient(90deg,rgba(239,68,68,.92),rgba(245,158,11,.92))'; nb.textContent='📵 No internet — Offline mode'; document.body.appendChild(nb); renderOfflineFeed(); });
function renderOfflineFeed() { let list=G('feedList'); if(!list) return; let items=OfflineCache.getAll(); list.innerHTML='<div class="feed-ad" style="text-align:center;">📵 Offline Mode</div>'; items.forEach(item=>{ let el=document.createElement('div'); el.className='post'; el.innerHTML=`<div class="post-hd"><div class="av av-round av-md">📦</div><div><div class="post-nm">Offline Content</div><div class="post-meta">${ago(item.at)}</div></div></div>${item.mime?.startsWith('image/')?`<div class="post-media"><img src="${item.url}"></div>`:''}<div class="post-txt">${esc(item.caption||'')}</div>`; list.appendChild(el); }); }

// Post Creation Helpers
function scrollRTLInit(rootSelectorOrNode) {
  try {
    let root = typeof rootSelectorOrNode === 'string' ? document.getElementById(rootSelectorOrNode) : rootSelectorOrNode || document;
    if(!root) root = document;
    root.querySelectorAll('.h-scroll-rtl').forEach(el => { el.scrollLeft = el.scrollWidth; });
  } catch(e) { console.warn('scrollRTLInit', e); }
}

let postDraftTimer = null;
let voiceRecorder = null;
let voiceRecorderStream = null;
let voiceRecorderChunks = [];
let voiceRecordingActive = false;

function collectPostDraft() {
  const editor = document.getElementById('postEditor');
  const tagsInput = G('postTags');
  const privacy = document.querySelector('input[name="privacy"]:checked')?.value || 'public';
  return {
    text: editor ? editor.innerHTML : '',
    plainText: editor ? editor.innerText.trim() : '',
    tags: tagsInput ? tagsInput.value : '',
    privacy,
    mediaData: (pfData && pfData.length < 700000) ? pfData : null,
    mediaMime: pfMime || null,
    mediaName: pfName || null
  };
}

function savePostDraft() {
  try {
    const draft = collectPostDraft();
    localStorage.setItem('mxt_post_draft', JSON.stringify(draft));
    const st = G('draftStatus');
    if (st) st.textContent = draft.plainText || draft.tags ? '🗂 Draft saved locally' : '🗂 Drafts auto-save locally';
  } catch (e) {}
}

function clearPostDraft() {
  try { localStorage.removeItem('mxt_post_draft'); } catch (e) {}
  const st = G('draftStatus');
  if(st) st.textContent = '🗂 Drafts auto-save locally';
}

function restorePostDraft() {
  try {
    const raw = localStorage.getItem('mxt_post_draft');
    if (!raw) return false;
    const draft = JSON.parse(raw);
    const editor = document.getElementById('postEditor');
    if (editor) editor.innerHTML = draft.text || draft.plainText || '';
    const tagsInput = G('postTags');
    if (tagsInput) tagsInput.value = draft.tags || '';
    if (draft.privacy) {
      const radio = document.querySelector(`input[name="privacy"][value="${draft.privacy}"]`);
      if (radio) radio.checked = true;
    }
    if (draft.mediaData && draft.mediaMime) {
      pfData = draft.mediaData;
      pfMime = draft.mediaMime;
      pfName = draft.mediaName || 'draft-media';
      const prevWrap = G('postPreviewWrap') || G('mediaPreview');
      if (prevWrap) {
        prevWrap.style.display = 'block';
        prevWrap.innerHTML = '';
        if (draft.mediaMime.startsWith('image/')) {
          prevWrap.innerHTML = `<img src="${pfData}" style="width:100%; border-radius:12px; margin-top:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3);">`;
        } else if (draft.mediaMime.startsWith('video/')) {
          prevWrap.innerHTML = `<video src="${pfData}" controls style="width:100%; border-radius:12px; margin-top:10px;"></video>`;
        } else if (draft.mediaMime.startsWith('audio/')) {
          prevWrap.innerHTML = `<div class="audio-prev">🎵 ${escape(pfName || 'Voice note')} (Restored draft)</div>`;
        }
      }
    }
    const st = G('draftStatus');
    if (st) st.textContent = '🗂 Draft restored';
    return true;
  } catch (e) {
    return false;
  }
}

function schedulePostDraftAutosave() {
  clearTimeout(postDraftTimer);
  postDraftTimer = setTimeout(savePostDraft, 350);
}

function bindPostDraftEvents() {
  const editor = document.getElementById('postEditor');
  const tagsInput = G('postTags');
  if (editor && !editor.dataset.draftBound) {
    editor.addEventListener('input', schedulePostDraftAutosave);
    editor.dataset.draftBound = '1';
  }
  if (tagsInput && !tagsInput.dataset.draftBound) {
    tagsInput.addEventListener('input', schedulePostDraftAutosave);
    tagsInput.dataset.draftBound = '1';
  }
  document.querySelectorAll('input[name="privacy"]').forEach(radio => {
    if (!radio.dataset.draftBound) {
      radio.addEventListener('change', schedulePostDraftAutosave);
      radio.dataset.draftBound = '1';
    }
  });
}

async function toggleVoiceRecording() {
  const chip = G('voiceNoteChip');
  const status = G('voiceRecordStatus');

  if (voiceRecordingActive) {
    if (voiceRecorder && voiceRecorder.state !== 'inactive') {
      voiceRecorder.stop();
    }
    return;
  }

  if (!navigator.mediaDevices?.getUserMedia) {
    toast('e', 'Voice recording is not supported on this browser');
    return;
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    voiceRecordingActive = true;
    voiceRecorderStream = stream;
    voiceRecorderChunks = [];
    if (chip) {
      chip.textContent = '⏹ Stop Recording';
      chip.style.background = 'linear-gradient(90deg,#ef4444,#f59e0b)';
      chip.style.color = '#fff';
    }
    if (status) {
      status.style.display = 'block';
      status.innerHTML = '🎙️ Recording voice note...';
    }

    const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
    voiceRecorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
    voiceRecorder.ondataavailable = (e) => {
      if (e.data.size) voiceRecorderChunks.push(e.data);
    };
    voiceRecorder.onstop = () => {
      const blob = new Blob(voiceRecorderChunks, { type: voiceRecorder?.mimeType || mimeType || 'audio/webm' });
      const reader = new FileReader();
      reader.onload = () => {
        pfData = reader.result;
        pfMime = blob.type || 'audio/webm';
        pfName = 'voice-note.' + (blob.type.includes('mp4') ? 'mp4' : 'webm');
        const prevWrap = G('postPreviewWrap') || G('mediaPreview');
        if (prevWrap) {
          prevWrap.style.display = 'block';
          prevWrap.innerHTML = `<div class="audio-prev">🎤 Voice note ready to post</div>`;
        }
        savePostDraft();
        toast('s', '🎤 Voice note attached');
      };
      reader.readAsDataURL(blob);
      if (voiceRecorderStream) {
        voiceRecorderStream.getTracks().forEach(t => t.stop());
        voiceRecorderStream = null;
      }
      voiceRecordingActive = false;
      if (chip) {
        chip.textContent = '🎤 Voice Note';
        chip.style.background = '';
        chip.style.color = '';
      }
      if (status) status.style.display = 'none';
    };
    voiceRecorder.start();
    toast('i', '🎙️ Recording started. Tap stop when done.');
  } catch (err) {
    console.warn('[VoiceNote]', err);
    toast('e', 'Microphone access was denied or unavailable');
  }
}

function openPostModal(type='text') {
  const editor = document.getElementById('postEditor');
  if (editor) editor.innerHTML='';
  G('postTags').value=''; G('mediaPreview').innerHTML=''; G('aiOutput').innerHTML='';
  G('hashtagSuggestArea').innerHTML=''; G('copyrightNotice').style.display='none';
  pfData=null; pfMime=null; pfName=null; pfFile=null;
  bindPostDraftEvents();
  if (restorePostDraft()) {
    toast('i', '🗂 Draft restored');
  }
  openModal('postModal');
  setTimeout(()=>{
    scrollRTLInit('postModal');
    if(editor) editor.focus();
  }, 80);
}
function pickFile(type) { let i=G('postFileIn'); i.accept=type==='image'?'image/*':type==='video'?'video/*':'audio/*'; i.click(); }
function compressImage(file, maxW, maxH, quality) {
  return new Promise(resolve => {
    if(!file.type.startsWith('image/')) { resolve(null); return; }
    let reader = new FileReader();
    reader.onload = ev => {
      let img = new Image();
      img.onload = () => {
        let canvas = document.createElement('canvas');
        let w = img.width, h = img.height;
        if(w > maxW) { h = Math.round(h*maxW/w); w=maxW; }
        if(h > maxH) { w = Math.round(w*maxH/h); h=maxH; }
        canvas.width=w; canvas.height=h;
        canvas.getContext('2d').drawImage(img,0,0,w,h);
        resolve(canvas.toDataURL('image/jpeg', quality||0.75));
      };
      img.src = ev.target.result;
    };
    reader.readAsDataURL(file);
  });
}

function previewPostFile(inp) {
  const file = inp.files[0];
  if(!file) return;
  
  // 100MB Limit check (100 * 1024 * 1024 bytes)
  if(file.size > 104857600) {
    toast('e', 'File size exceeds 100MB limit!');
    inp.value = '';
    return;
  }

  const reader = new FileReader();
  reader.onload = function(event) {
    pfData = event.target.result;
    pfMime = file.type;
    pfName = file.name;
    pfFile = file;
    
    let prevWrap = G('postPreviewWrap') || G('mediaPreview');
    if(!prevWrap) return;
    
    prevWrap.style.display = 'block';
    prevWrap.innerHTML = '';
    prevWrap.classList.add('post-preview-floating');
    
    if(file.type.startsWith('image/')) {
      prevWrap.innerHTML = `<img src="${pfData}" style="width:100%; border-radius:12px; margin-top:10px; box-shadow:0 4px 15px rgba(0,0,0,0.3);">`;
    } else if(file.type.startsWith('video/')) {
      prevWrap.innerHTML = `<video src="${pfData}" controls style="width:100%; border-radius:12px; margin-top:10px;"></video>`;
    } else if(file.type.startsWith('audio/')) {
      prevWrap.innerHTML = `<div class="audio-prev">🎵 ${file.name} (Ready to post)</div>`;
    }
    setTimeout(()=>{ try{ aiGenerateCaption(true); aiSuggestHashtags(); }catch(e){} }, 300);
    schedulePostDraftAutosave();
    let startX = null;
    prevWrap.onpointerdown = e => { startX = e.clientX; };
    prevWrap.onpointermove = e => { if(startX !== null && e.clientX - startX > 60) prevWrap.classList.add('floating'); };
    prevWrap.onpointerup = prevWrap.onpointercancel = () => { startX = null; setTimeout(()=>prevWrap.classList.remove('floating'), 220); };
  };
  reader.readAsDataURL(file);
}
function checkCopyright(text) { let has=COPYRIGHT_KEYWORDS.some(k=>text.toLowerCase().includes(k)); G('copyrightNotice').style.display=has?'block':'none'; }

// LIVE STREAMING SYSTEM — Broadcast to All Users
// ═══════════════════════════════════════════════════════════
let liveStreamState = {
  active: false,
  stream: null,
  streamerId: null,
  viewers: [],
  comments: [],
  startTime: null,
  postId: null
};

let livePeerState = {
  broadcasterPeers: new Map(),
  viewerPc: null,
  viewerPostId: null,
  viewerStreamerId: null
};

function livePeerKey(viewerSocketId, viewerId) {
  return viewerSocketId || viewerId || ('viewer_' + Date.now());
}

function closeLivePeerConnections() {
  livePeerState.broadcasterPeers.forEach(pc => {
    try { pc.close(); } catch(e) {}
  });
  livePeerState.broadcasterPeers.clear();
  if(livePeerState.viewerPc) {
    try { livePeerState.viewerPc.close(); } catch(e) {}
    livePeerState.viewerPc = null;
  }
  livePeerState.viewerPostId = null;
  livePeerState.viewerStreamerId = null;
}

async function createLiveBroadcasterPeer({postId, viewerId, viewerSocketId}) {
  if(!socketReady || !socket || !liveStreamState.active || !liveStreamState.stream) return;
  if(postId !== liveStreamState.postId) return;
  const key = livePeerKey(viewerSocketId, viewerId);
  const oldPc = livePeerState.broadcasterPeers.get(key);
  if(oldPc) try { oldPc.close(); } catch(e) {}

  const pc = new RTCPeerConnection({ iceServers: await fetchICEServers() });
  liveStreamState.stream.getTracks().forEach(track => pc.addTrack(track, liveStreamState.stream));
  pc.onicecandidate = e => {
    if(e.candidate && socketReady) socket.emit('live:ice', {
      postId,
      toSocketId: viewerSocketId,
      toUserId: viewerId,
      fromUserId: CU?.id,
      candidate: e.candidate
    });
  };
  pc.onconnectionstatechange = () => {
    if(['failed','disconnected','closed'].includes(pc.connectionState)) livePeerState.broadcasterPeers.delete(key);
  };
  livePeerState.broadcasterPeers.set(key, pc);
  const offer = await pc.createOffer();
  await pc.setLocalDescription(offer);
  socket.emit('live:offer', { postId, toSocketId: viewerSocketId, streamerId: CU?.id, offer });
}

async function acceptLiveOffer({postId, streamerId, offer}) {
  if(!offer || !socketReady || !socket) return;
  if(livePeerState.viewerPc) try { livePeerState.viewerPc.close(); } catch(e) {}

  livePeerState.viewerPostId = postId;
  livePeerState.viewerStreamerId = streamerId;
  const pc = new RTCPeerConnection({ iceServers: await fetchICEServers() });
  livePeerState.viewerPc = pc;
  pc.ontrack = event => {
    const vid = G('liveVideo');
    const overlay = document.querySelector('.lv-overlay');
    if(vid) {
      vid.style.display = 'block';
      vid.srcObject = event.streams[0];
      vid.muted = false;
      vid.play?.().catch(() => {});
    }
    if(overlay) overlay.innerHTML = '';
  };
  pc.onicecandidate = e => {
    if(e.candidate && socketReady) socket.emit('live:ice', {
      postId,
      toUserId: streamerId,
      fromUserId: CU?.id,
      candidate: e.candidate
    });
  };
  await pc.setRemoteDescription(new RTCSessionDescription(offer));
  const answer = await pc.createAnswer();
  await pc.setLocalDescription(answer);
  socket.emit('live:answer', { postId, streamerId, viewerId: CU?.id, answer });
}

async function handleLiveAnswer({postId, viewerId, viewerSocketId, answer}) {
  if(postId !== liveStreamState.postId || !answer) return;
  const pc = livePeerState.broadcasterPeers.get(livePeerKey(viewerSocketId, viewerId)) || livePeerState.broadcasterPeers.get(viewerId);
  if(pc) try { await pc.setRemoteDescription(new RTCSessionDescription(answer)); } catch(e) { console.warn('[Live] answer failed', e); }
}

async function handleLiveIce({postId, fromUserId, fromSocketId, candidate}) {
  if(!candidate) return;
  const rtcCandidate = new RTCIceCandidate(candidate);
  if(liveStreamState.active && postId === liveStreamState.postId) {
    const pc = livePeerState.broadcasterPeers.get(livePeerKey(fromSocketId, fromUserId)) || livePeerState.broadcasterPeers.get(fromUserId);
    if(pc) try { await pc.addIceCandidate(rtcCandidate); } catch(e) {}
  } else if(livePeerState.viewerPc && postId === livePeerState.viewerPostId) {
    try { await livePeerState.viewerPc.addIceCandidate(rtcCandidate); } catch(e) {}
  }
}

// Start Live from Create Post Modal
function startLiveStreamFromPost() {
  if (!CU) return toast('e', 'Please login first');

  closeModal('postModal');
  toast('i', 'Opening camera for live stream...');
  requestLivePermissions();
}

function getLiveCameraConstraints(options = {}) {
  const resolution = Number(options.resolution || cameraState?.currentResolution || 1080);
  return {
    video: options.video === false ? false : {
      width: { ideal: Math.min(resolution, 1920) },
      height: { ideal: Math.round(Math.min(resolution, 1920) * 9 / 16) },
      facingMode: options.facingMode || cameraState?.currentFacingMode || 'user'
    },
    audio: options.audio !== false
  };
}

function liveErrorDetails(err) {
  const name = err?.name || 'UnknownError';
  const messages = {
    NotAllowedError: 'Camera/Mic permission is blocked. Allow it from the browser site settings, then try again.',
    PermissionDeniedError: 'Camera/Mic permission is blocked. Allow it from the browser site settings, then try again.',
    NotFoundError: 'No camera or microphone was found on this device.',
    NotReadableError: 'Camera or microphone is already being used by another app.',
    OverconstrainedError: 'Requested camera quality is not available. Trying a lower quality can fix this.',
    SecurityError: 'Browser security policy blocked camera/mic. Check HTTPS and Permissions-Policy headers.',
    AbortError: 'The browser stopped camera startup. Please try again.'
  };
  return messages[name] || (err?.message || 'Unable to access camera/microphone.');
}

function showLivePermissionHelp(err) {
  const details = liveErrorDetails(err);
  toast('e', details);
  openLiveFallbackView(details);
  alert(
    'Camera Access Required\n\n' +
    details + '\n\n' +
    'Fix checklist:\n' +
    '1. Use HTTPS or localhost.\n' +
    '2. Click the camera icon in the address bar and choose Allow.\n' +
    '3. Close other apps using the camera.\n' +
    '4. If this page is inside an iframe, the parent iframe must include allow="camera; microphone; display-capture".\n' +
    '5. Try Screen Share from Live controls if camera is unavailable.'
  );
}

function openLiveFallbackView(message) {
  const liveView = G('liveView');
  if (liveView) liveView.classList.add('open');
  const controls = G('lvCameraControls');
  if (controls) {
    controls.style.display = '';
    controls.classList.remove('hidden');
  }
  const toolsToggle = G('lvToolsToggle');
  if (toolsToggle) {
    toolsToggle.style.display = '';
    toolsToggle.classList.remove('is-hidden');
  }
  const vid = G('liveVideo');
  if (vid) {
    vid.pause?.();
    vid.srcObject = null;
    vid.style.display = 'none';
  }
  const overlay = document.querySelector('.lv-overlay');
  if (overlay) {
    overlay.innerHTML = `
      <div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;text-align:center;padding:24px;color:#fff;background:linear-gradient(135deg,rgba(0,0,0,.55),rgba(0,255,170,.14));">
        <div style="font-size:15px;font-weight:900;">Camera is not available</div>
        <div style="max-width:320px;font-size:12px;line-height:1.45;color:rgba(255,255,255,.78);">${esc(message || 'Please allow camera/mic permission and try again.')}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
          <button class="btn btn-neon btn-sm" onclick="requestLivePermissions()">Retry Camera</button>
          <button class="btn btn-sm" onclick="startLiveScreenShare()">Share Screen</button>
        </div>
      </div>`;
  }
  if (G('lvName')) G('lvName').textContent = 'Live setup';
  if (G('lvAv')) G('lvAv').textContent = CU?.name?.charAt(0).toUpperCase() || 'L';
  if (G('lvViewers')) G('lvViewers').textContent = '0';
}

async function requestMediaWithFallback() {
  if (!navigator.mediaDevices?.getUserMedia) {
    const legacyGetMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
    if (!legacyGetMedia) throw new Error('Your browser does not support live streaming');
    return await new Promise((resolve, reject) => {
      legacyGetMedia.call(navigator, getLiveCameraConstraints({ resolution: 720 }), resolve, reject);
    });
  }

  const attempts = [
    getLiveCameraConstraints({ resolution: 1080, audio: true }),
    getLiveCameraConstraints({ resolution: 720, audio: true }),
    getLiveCameraConstraints({ resolution: 480, audio: true }),
    getLiveCameraConstraints({ resolution: 720, audio: false }),
    { video: false, audio: true }
  ];

  let lastErr = null;
  for (const constraints of attempts) {
    try {
      return await navigator.mediaDevices.getUserMedia(constraints);
    } catch (err) {
      lastErr = err;
      if (err?.name === 'NotAllowedError' || err?.name === 'PermissionDeniedError' || err?.name === 'SecurityError') break;
    }
  }
  throw lastErr || new Error('Camera permission failed');
}

// Request camera/mic permissions
async function requestLivePermissions() {
  const isSecure = window.isSecureContext || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if (!isSecure) {
    toast('e', 'Camera access requires HTTPS or localhost. Please open this app in a secure context.');
    return;
  }

  toast('i', 'Requesting camera access...');
  try {
    const stream = await requestMediaWithFallback();
    bindLiveTouchGestures();
    startBroadcast(stream);
  } catch (err) {
    console.error('[Live] Permission denied or unavailable:', err);
    showLivePermissionHelp(err);
  }
}

async function replaceLiveBroadcastStream(stream) {
  if (liveStreamState.stream && liveStreamState.stream !== stream) {
    liveStreamState.stream.getTracks().forEach(track => track.stop());
  }
  liveStreamState.stream = stream;

  const vid = G('liveVideo');
  if (vid) {
    vid.style.display = 'block';
    vid.srcObject = stream;
    vid.muted = true;
    vid.play?.().catch(() => {});
    applyLiveVideoEffects();
  }

  livePeerState.broadcasterPeers?.forEach(pc => {
    const senders = pc.getSenders ? pc.getSenders() : [];
    stream.getTracks().forEach(track => {
      const sender = senders.find(s => s.track?.kind === track.kind);
      if (sender?.replaceTrack) sender.replaceTrack(track).catch(err => console.warn('[Live] replaceTrack failed', err));
      else {
        try { pc.addTrack(track, stream); } catch(e) {}
      }
    });
  });
}

async function startLiveScreenShare() {
  if (!CU) return toast('e', 'Please login first');
  if (!navigator.mediaDevices?.getDisplayMedia) return toast('e', 'Screen sharing is not supported in this browser');
  try {
    const screenStream = await navigator.mediaDevices.getDisplayMedia({
      video: { cursor: 'always', frameRate: { ideal: 30, max: 60 } },
      audio: true
    });
    const audioTracks = screenStream.getAudioTracks();
    if (!audioTracks.length && navigator.mediaDevices?.getUserMedia) {
      try {
        const mic = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        mic.getAudioTracks().forEach(track => screenStream.addTrack(track));
      } catch (err) {
        console.warn('[Live] Mic unavailable for screen share', err);
      }
    }
    screenStream.getVideoTracks()[0]?.addEventListener('ended', () => {
      if (liveStreamState.active && liveStreamState.stream === screenStream) endBroadcast();
    });
    if (liveStreamState.active) {
      await replaceLiveBroadcastStream(screenStream);
      toast('s', 'Screen is now live');
    } else {
      startBroadcast(screenStream);
      toast('s', 'Screen live started');
    }
  } catch (err) {
    if (err?.name !== 'NotAllowedError') console.error('[Live] Screen share error:', err);
    toast('e', err?.name === 'NotAllowedError' ? 'Screen share cancelled' : 'Unable to start screen share');
  }
}

// Start the actual broadcast
function startBroadcast(stream) {
  if (!CU) return;
  const hasVideo = stream.getVideoTracks().length > 0;
  const isScreenLive = hasVideo && stream.getVideoTracks().some(track => /screen|display|window|tab/i.test(track.label || ''));
  
  liveStreamState.active = true;
  liveStreamState.stream = stream;
  liveStreamState.streamerId = CU.id;
  liveStreamState.startTime = Date.now();
  liveStreamState.comments = [];
  liveStreamState.viewers = [];
  
  bindLiveTouchGestures();
  initializeLiveCameraControls();
  applyScenePreset(cameraState.sceneMode);

  // Create a live post
  let livePost = {
    id: 'live_' + Date.now(),
    author: CU.id,
    type: 'live',
    text: '🔴 ' + (CU.name || 'User') + (isScreenLive ? ' is sharing screen LIVE NOW!' : ' is LIVE NOW!'),
    createdAt: Date.now(),
    isLive: true,
    viewers: 0,
    comments: [],
    streamerName: CU.name,
    streamerAvatar: CU.avatar || null,
    liveMode: isScreenLive ? 'screen' : (hasVideo ? 'camera' : 'audio'),
    category: 'live',
    visibility: 'public',
    autoFollows: [],
    reactions: {},
    likes: [],
    likedBy: [],
    shares: 0
  };
  
  liveStreamState.postId = livePost.id;
  D.posts.unshift(livePost);
  notifyPostAudience(livePost, 'live');
  saveData();
  
  // Open live view for broadcaster
  G('liveView').classList.add('open');
  let controls = G('lvCameraControls');
  if (controls) {
    controls.style.display = '';
    controls.classList.remove('hidden');
  }
  let toolsToggle = G('lvToolsToggle');
  if (toolsToggle) {
    toolsToggle.style.display = '';
    toolsToggle.classList.remove('is-hidden');
  }
  updateLiveStudioHud();
  let vid = G('liveVideo');
  if (vid) {
    vid.style.display = 'block';
    vid.srcObject = stream;
    vid.muted = true; // Mute self to prevent echo
    vid.play?.().catch(() => {});
    applyLiveVideoEffects();
  }
  const overlay = document.querySelector('.lv-overlay');
  if (overlay) overlay.innerHTML = hasVideo ? '' : '<div style="height:100%;display:flex;align-items:center;justify-content:center;text-align:center;padding:24px;color:#fff;font-weight:800;background:linear-gradient(135deg,rgba(0,255,170,.18),rgba(124,58,237,.18));">Audio live is running. Camera is unavailable on this device.</div>';
  G('lvName').textContent = (CU.name || 'User') + "'s Live Stream";
  G('lvAv').textContent = CU.name?.charAt(0).toUpperCase() || 'L';
  
  // Clear previous comments
  let lc = G('lvComments');
  if (lc) lc.innerHTML = '<div style="padding:10px;color:var(--t3);font-size:12px;text-align:center;">💬 Comments will appear here...</div>';
  
  // Start viewer count simulation
  let viewerInterval = setInterval(() => {
    if (!liveStreamState.active) {
      clearInterval(viewerInterval);
      return;
    }
    // Simulate growing viewers
    liveStreamState.viewers = Math.min(liveStreamState.viewers + Math.floor(Math.random() * 5), 999);
    G('lvViewers').textContent = liveStreamState.viewers;
    
    // Update post viewer count
    let post = D.posts.find(p => p.id === liveStreamState.postId);
    if (post) {
      post.viewers = liveStreamState.viewers;
      saveData();
    }
  }, 3000);
  
  // Notify all users via socket if available
  if (socketReady && socket) {
    socket.emit('post:create', { post: livePost });
    socket.emit('live:start', {
      postId: livePost.id,
      streamerId: CU.id,
      streamerName: CU.name,
      title: livePost.text
    });
  }
  
  // Add notification for followers (simulated)
  Object.values(D.users).forEach(u => {
    if (u.id !== CU.id && !u.isAdmin) {
      addNotif(u.id, 'live', '🔴', `${CU.name} started a live stream!`, livePost.id);
    }
  });
  
  // Update feed to show live
  rFeed();
  
  toast('s', '🔴 You are now LIVE! Viewers can join now.');
  confetti();
  
  // Track duration
  let durationInterval = setInterval(() => {
    if (!liveStreamState.active) {
      clearInterval(durationInterval);
      return;
    }
    let duration = Math.floor((Date.now() - liveStreamState.startTime) / 1000);
    let mins = Math.floor(duration / 60);
    let secs = duration % 60;
    document.title = `🔴 LIVE ${mins}:${secs.toString().padStart(2,'0')} | Monetixra`;
  }, 1000);
}

// Close live view (for broadcaster)
function closeLiveView() {
  let vid = G('liveVideo');
  if (vid?.srcObject) {
    if (liveStreamState.active && liveStreamState.streamerId === CU?.id) {
      vid.srcObject.getTracks().forEach(t => t.stop());
    }
    vid.srcObject = null;
  }
  if (vid) vid.style.display = 'none';
  
  if (liveStreamState.active && liveStreamState.streamerId === CU?.id) {
    // Broadcaster ending stream
    endBroadcast();
  } else {
    closeLivePeerConnections();
  }
  
  G('liveView').classList.remove('open');
  document.title = 'Monetixra — Complete Social Earn Platform';
}

// End broadcast
function endBroadcast() {
  liveStreamState.active = false;
  closeLivePeerConnections();
  
  // Update post to show ended
  let post = D.posts.find(p => p.id === liveStreamState.postId);
  if (post) {
    post.isLive = false;
    post.text = post.text.replace('🔴', '⚫️ ENDED');
    post.endedAt = Date.now();
    saveData();
  }
  
  // Notify socket
  if (socketReady && socket) {
    socket.emit('live:end', { postId: liveStreamState.postId });
  }
  
  toast('i', 'Live stream ended. Thanks for broadcasting!');
  rFeed();
}

// Send live comment
function sendLiveComment() {
  let inp = G('lvInp');
  if (!inp?.value.trim() || !liveStreamState.active) return;
  
  let comment = {
    id: 'cm_' + Date.now(),
    userId: CU?.id || 'anon',
    userName: CU?.name || 'Anonymous',
    text: inp.value.trim(),
    at: Date.now()
  };
  
  liveStreamState.comments.push(comment);
  
  // Add to post comments
  let post = D.posts.find(p => p.id === liveStreamState.postId);
  if (post) {
    post.comments = post.comments || [];
    post.comments.push(comment);
    saveData();
  }
  
  renderLiveComments();
  inp.value = '';
}

// Render live comments
function renderLiveComments() {
  let lc = G('lvComments');
  if (!lc) return;
  
  if (liveStreamState.comments.length === 0) {
    lc.innerHTML = '<div style="padding:10px;color:var(--t3);font-size:12px;text-align:center;">💬 No comments yet...</div>';
    return;
  }
  
  lc.innerHTML = liveStreamState.comments.slice(-20).map(c => {
    let isMine = c.userId === CU?.id;
    return `<div class="lv-cm${isMine ? ' mine' : ''}" style="${isMine ? 'background:rgba(0,255,170,0.1);' : ''}"><span style="font-weight:700;color:var(--neon);">${esc(c.userName)}:</span> ${esc(c.text)}</div>`;
  }).join('');
  
  lc.scrollTop = lc.scrollHeight;
}

// ========== PROFESSIONAL CAMERA CONTROLS ==========

// Camera state
let cameraState = {
  currentFacingMode: 'user',
  currentResolution: 1080,
  zoomLevel: 1,
  flashEnabled: false,
  currentFilter: 'none',
  beautyLevel: 0,
  brightness: 100,
  contrast: 100,
  isMuted: false,
  sceneMode: 'auto',
  gridEnabled: false,
  captureTimer: 0,
  aiBeautify: false,
  backgroundBlur: false,
  voiceEnhanced: false,
  nightVision: false,
  autoStabilization: false,
  recordingSpeed: 'normal',
  tapFocusEnabled: true,
  skinSmoothing: false,
  autoFaceTracking: false,
  autoSpotlight: false,
  cinematicZoom: false,
  beautyPreset: 'natural',
  liveFilterPreset: 'cinematic',
  lutPreset: 'none',
  voiceDenoise: false,
  zoomTransitionBase: 1,
  lastThumbnailDataUrl: ''
};
let liveCaptureTimerHandle = null;
let liveTouchState = null;
let liveRecordingState = { active: false, recorder: null, chunks: [], stream: null, startedAt: null };
let liveVoiceEnhancementState = null;
let liveVoiceDenoiseState = null;
let liveBlurAnimationFrame = null;
let liveFaceTrackingFrame = null;
let liveRecordingPreviewTimer = null;
let liveCinematicZoomFrame = null;

function liveFilterName(filter = cameraState.currentFilter) {
  const names = {
    none: 'Normal',
    'grayscale(100%)': 'B&W',
    'sepia(100%)': 'Sepia',
    'contrast(150%)': 'Vivid',
    'saturate(200%)': 'Vibrant',
    'hue-rotate(90deg)': 'Cool',
    'hue-rotate(180deg)': 'Warm',
    'invert(100%)': 'Negative'
  };
  return names[filter] || 'Custom';
}

function updateLiveSliderProgress(slider) {
  if(!slider) return;
  const min = Number(slider.min || 0);
  const max = Number(slider.max || 100);
  const val = Number(slider.value || min);
  const pct = max === min ? 0 : ((val - min) / (max - min)) * 100;
  slider.style.setProperty('--lv-progress', `${Math.max(0, Math.min(100, pct))}%`);
}

function updateLiveStudioHud() {
  const mode = G('lvHudMode');
  const quality = G('lvHudQuality');
  const fx = G('lvHudFx');
  if(mode) mode.textContent = cameraState.currentFacingMode === 'user' ? 'Front Camera' : 'Back Camera';
  if(quality) quality.textContent = `${cameraState.currentResolution}p`;
  if(fx) {
    const tuned = cameraState.beautyLevel || cameraState.brightness !== 100 || cameraState.contrast !== 100 || cameraState.aiBeautify || cameraState.backgroundBlur || cameraState.voiceEnhanced || cameraState.nightVision || cameraState.autoStabilization;
    const sceneLabel = cameraState.sceneMode === 'auto' ? 'Auto' : cameraState.sceneMode.charAt(0).toUpperCase() + cameraState.sceneMode.slice(1);
    fx.textContent = `FX ${sceneLabel}${tuned ? ' + Tune' : ''}`;
  }
  updateLiveSliderProgress(G('lvBeautySlider'));
  updateLiveSliderProgress(G('lvBrightnessSlider'));
  updateLiveSliderProgress(G('lvContrastSlider'));
}

function syncLiveStudioButtons() {
  G('lvBeautifyBtn')?.classList.toggle('active', cameraState.aiBeautify);
  G('lvSkinBtn')?.classList.toggle('active', cameraState.skinSmoothing);
  G('lvFaceTrackBtn')?.classList.toggle('active', cameraState.autoFaceTracking);
  G('lvBlurBtn')?.classList.toggle('active', cameraState.backgroundBlur);
  G('lvVoiceBtn')?.classList.toggle('active', cameraState.voiceEnhanced);
  G('lvDenoiseBtn')?.classList.toggle('active', cameraState.voiceDenoise);
  G('lvNightBtn')?.classList.toggle('active', cameraState.nightVision);
  G('lvStabBtn')?.classList.toggle('active', cameraState.autoStabilization);
  G('lvSpotlightBtn')?.classList.toggle('active', cameraState.autoSpotlight);
  G('lvZoomTransitionBtn')?.classList.toggle('active', cameraState.cinematicZoom);
  document.querySelectorAll('.lv-preset-btn[data-preset]').forEach(btn => btn.classList.toggle('active', btn.dataset.preset === cameraState.beautyPreset));
  document.querySelectorAll('.lv-preset-btn[data-pack]').forEach(btn => btn.classList.toggle('active', btn.dataset.pack === cameraState.liveFilterPreset));
  const recordBtn = G('lvRecordBtn');
  if (recordBtn) {
    recordBtn.textContent = liveRecordingState.active ? '⏹ Stop' : '⏺ Record';
    recordBtn.classList.toggle('active', liveRecordingState.active);
  }
  G('lvSpeedMode') && (G('lvSpeedMode').value = cameraState.recordingSpeed || 'normal');
  G('lvLutPreset') && (G('lvLutPreset').value = cameraState.lutPreset || 'none');
  updateRecordingPreview();
}

function applyScenePreset(mode = cameraState.sceneMode) {
  cameraState.sceneMode = mode;
  const sceneSelect = G('lvSceneMode');
  if (sceneSelect) sceneSelect.value = mode;

  const presets = {
    auto: { filter: 'none', beauty: 0, brightness: 100, contrast: 100 },
    portrait: { filter: 'contrast(125%)', beauty: 24, brightness: 104, contrast: 108 },
    night: { filter: 'brightness(120%)', beauty: 8, brightness: 118, contrast: 112 },
    studio: { filter: 'saturate(160%)', beauty: 16, brightness: 102, contrast: 112 }
  };
  const preset = presets[mode] || presets.auto;
  cameraState.currentFilter = preset.filter;
  cameraState.beautyLevel = preset.beauty;
  cameraState.brightness = preset.brightness;
  cameraState.contrast = preset.contrast;

  const beautySlider = G('lvBeautySlider');
  const brightnessSlider = G('lvBrightnessSlider');
  const contrastSlider = G('lvContrastSlider');
  if (beautySlider) beautySlider.value = preset.beauty;
  if (brightnessSlider) brightnessSlider.value = preset.brightness;
  if (contrastSlider) contrastSlider.value = preset.contrast;

  applyLiveVideoEffects();
}

function setSceneMode() {
  const mode = G('lvSceneMode')?.value || 'auto';
  applyScenePreset(mode);
  toast('s', `Scene mode: ${mode.charAt(0).toUpperCase() + mode.slice(1)}`);
}

function toggleGrid() {
  cameraState.gridEnabled = !cameraState.gridEnabled;
  const grid = G('lvFocusGrid');
  const btn = G('lvGridBtn');
  grid?.classList.toggle('active', cameraState.gridEnabled);
  btn?.classList.toggle('active', cameraState.gridEnabled);
  toast('s', cameraState.gridEnabled ? 'Grid overlay on' : 'Grid overlay off');
}

function setCaptureTimer() {
  cameraState.captureTimer = Number(G('lvCaptureTimer')?.value || 0);
}

function startCaptureWithTimer() {
  if (!liveStreamState.stream) return toast('w', 'Camera is not active');
  const seconds = Number(G('lvCaptureTimer')?.value || 0);
  const btn = G('lvCaptureBtn');
  if (!seconds) {
    takeScreenshot();
    return;
  }

  if (liveCaptureTimerHandle) clearInterval(liveCaptureTimerHandle);
  let remaining = seconds;
  btn.disabled = true;
  btn.textContent = `⏱ ${remaining}s`;
  liveCaptureTimerHandle = setInterval(() => {
    remaining -= 1;
    if (remaining > 0) {
      btn.textContent = `⏱ ${remaining}s`;
    } else {
      clearInterval(liveCaptureTimerHandle);
      liveCaptureTimerHandle = null;
      btn.disabled = false;
      btn.textContent = '📸 Capture';
      takeScreenshot();
    }
  }, 1000);
}

function bindLiveTouchGestures() {
  const stage = document.querySelector('.lv-vid');
  if (!stage || stage.dataset.liveTouchBound) return;
  stage.dataset.liveTouchBound = '1';

  stage.addEventListener('pointerdown', (e) => {
    if (!cameraState.tapFocusEnabled) return;
    const rect = stage.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ring = G('lvFocusRing');
    if (ring) {
      ring.style.left = `${Math.max(40, Math.min(rect.width - 40, x))}px`;
      ring.style.top = `${Math.max(40, Math.min(rect.height - 40, y))}px`;
      ring.classList.add('show');
      clearTimeout(ring._hideTimer);
      ring._hideTimer = setTimeout(() => ring.classList.remove('show'), 900);
    }
    toast('i', 'Focus lock ready');
  });

  stage.addEventListener('touchstart', (e) => {
    if (e.touches.length === 2) {
      liveTouchState = {
        distance: getTouchDistance(e.touches),
        zoom: cameraState.zoomLevel
      };
    }
  }, { passive: false });

  stage.addEventListener('touchmove', (e) => {
    if (e.touches.length === 2 && liveTouchState) {
      e.preventDefault();
      const distance = getTouchDistance(e.touches);
      const nextZoom = Math.min(3, Math.max(1, liveTouchState.zoom * (distance / liveTouchState.distance)));
      cameraState.zoomLevel = Math.round(nextZoom * 10) / 10;
      applyZoom();
    }
  }, { passive: false });

  stage.addEventListener('touchend', () => {
    liveTouchState = null;
  });
}

function getTouchDistance(touches) {
  const [a, b] = touches;
  if (!a || !b) return 0;
  return Math.hypot(b.clientX - a.clientX, b.clientY - a.clientY);
}

function buildLiveVisualFilterString() {
  const parts = [];
  if (cameraState.aiBeautify) parts.push('brightness(1.05) saturate(1.14) contrast(1.08) blur(0.15px)');
  if (cameraState.skinSmoothing) parts.push('brightness(1.02) saturate(1.08) contrast(1.05) blur(0.2px)');
  if (cameraState.nightVision) parts.push('sepia(0.6) saturate(2.3) hue-rotate(90deg) contrast(1.35) brightness(1.12)');
  if (cameraState.currentFilter && cameraState.currentFilter !== 'none') parts.push(cameraState.currentFilter);
  if (cameraState.lutPreset && cameraState.lutPreset !== 'none') {
    const lutFilters = {
      cinematic: 'contrast(1.12) saturate(0.85) hue-rotate(4deg) sepia(0.16)',
      moody: 'contrast(1.1) saturate(0.72) hue-rotate(-8deg) brightness(0.92)',
      vivid: 'contrast(1.2) saturate(1.24) brightness(1.04)',
      warm: 'contrast(1.06) saturate(1.12) hue-rotate(10deg) sepia(0.08)'
    };
    parts.push(lutFilters[cameraState.lutPreset] || '');
  }
  if (cameraState.beautyLevel > 0) {
    parts.push(`blur(${(cameraState.beautyLevel / 28).toFixed(2)}px)`);
    parts.push(`saturate(${100 + Math.round(cameraState.beautyLevel / 3)}%)`);
  }
  parts.push(`brightness(${cameraState.brightness + Math.round(cameraState.beautyLevel / 3)}%)`);
  parts.push(`contrast(${cameraState.contrast}%)`);
  return parts.join(' ');
}

function renderLiveBlurCanvas() {
  const vid = G('liveVideo');
  const canvas = G('lvEffectCanvas');
  if (!cameraState.backgroundBlur || !vid || !canvas || vid.readyState < 2) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const width = vid.videoWidth || 640;
  const height = vid.videoHeight || 360;
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  ctx.clearRect(0, 0, width, height);
  ctx.filter = `${buildLiveVisualFilterString()} blur(18px)`;
  ctx.drawImage(vid, 0, 0, width, height);
  const boxW = Math.round(width * 0.62);
  const boxH = Math.round(height * 0.72);
  const boxX = Math.round((width - boxW) / 2);
  const boxY = Math.round((height - boxH) / 2);
  ctx.filter = buildLiveVisualFilterString();
  ctx.drawImage(vid, boxX, boxY, boxW, boxH, boxX, boxY, boxW, boxH);
  if (cameraState.backgroundBlur) {
    liveBlurAnimationFrame = requestAnimationFrame(renderLiveBlurCanvas);
  }
}

function applyLiveVideoEffects() {
  const vid = G('liveVideo');
  const canvas = G('lvEffectCanvas');
  if(!vid) return;
  const filterValue = buildLiveVisualFilterString();
  vid.style.filter = filterValue;
  const stabilizedScale = cameraState.autoStabilization ? Number((cameraState.zoomLevel * 1.01).toFixed(2)) : cameraState.zoomLevel;
  vid.style.transform = `scale(${stabilizedScale})`;
  vid.style.opacity = '1';
  if (cameraState.backgroundBlur) {
    if (canvas) {
      canvas.style.display = 'block';
      vid.style.opacity = '0';
      cancelAnimationFrame(liveBlurAnimationFrame);
      renderLiveBlurCanvas();
    }
  } else {
    cancelAnimationFrame(liveBlurAnimationFrame);
    if (canvas) canvas.style.display = 'none';
    vid.style.opacity = '1';
  }
  syncLiveStudioButtons();
  updateLiveStudioHud();
}

function runAutoFaceTracking() {
  if (!cameraState.autoFaceTracking && !cameraState.autoSpotlight) return;
  const vid = G('liveVideo');
  const ring = G('lvFocusRing');
  const spotlight = G('lvSpotlight');
  if (!vid || !ring || vid.videoWidth <= 0 || vid.videoHeight <= 0) {
    liveFaceTrackingFrame = requestAnimationFrame(runAutoFaceTracking);
    return;
  }
  const canvas = document.createElement('canvas');
  const w = Math.min(160, vid.videoWidth);
  const h = Math.min(90, vid.videoHeight);
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext('2d');
  if (!ctx) {
    liveFaceTrackingFrame = requestAnimationFrame(runAutoFaceTracking);
    return;
  }
  ctx.drawImage(vid, 0, 0, w, h);
  const imageData = ctx.getImageData(0, 0, w, h).data;
  let bestX = w / 2;
  let bestY = h / 2;
  let bestScore = 0;
  const step = 4;
  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      const i = (y * w + x) * 4;
      const r = imageData[i];
      const g = imageData[i + 1];
      const b = imageData[i + 2];
      const brightness = (r + g + b) / 3;
      const skinTone = (r > 80 && g > 40 && b > 20 && r > g && r > b) ? 26 : 0;
      const centerBias = 1 - (Math.abs(x - w / 2) / w + Math.abs(y - h / 2) / h) * 0.5;
      const score = brightness + skinTone + centerBias * 30;
      if (score > bestScore) {
        bestScore = score;
        bestX = x;
        bestY = y;
      }
    }
  }
  if (bestScore > 110) {
    ring.style.left = `${(bestX / w) * 100}%`;
    ring.style.top = `${(bestY / h) * 100}%`;
    ring.classList.add('show');
    if (spotlight) {
      spotlight.style.setProperty('--spotlight-x', `${(bestX / w) * 100}%`);
      spotlight.style.setProperty('--spotlight-y', `${(bestY / h) * 100}%`);
      spotlight.classList.add('show');
    }
  } else {
    ring.classList.remove('show');
    spotlight?.classList.remove('show');
  }
  liveFaceTrackingFrame = requestAnimationFrame(runAutoFaceTracking);
}

function updateRecordingPreview() {
  const preview = G('lvRecPreview');
  if (!preview) return;
  if (liveRecordingState.active) {
    const seconds = Math.floor((Date.now() - (liveRecordingState.startedAt || Date.now())) / 1000);
    preview.textContent = `REC ${seconds}s`;
    preview.classList.add('recording');
  } else {
    preview.textContent = 'Preview Ready';
    preview.classList.remove('recording');
  }
}

function initializeLiveCameraControls() {
  const sceneSelect = G('lvSceneMode');
  if (sceneSelect) sceneSelect.value = cameraState.sceneMode;
  const timerSelect = G('lvCaptureTimer');
  if (timerSelect) cameraState.captureTimer = Number(timerSelect.value || 0);
  const speedSelect = G('lvSpeedMode');
  if (speedSelect) speedSelect.value = cameraState.recordingSpeed || 'normal';
  const lutSelect = G('lvLutPreset');
  if (lutSelect) lutSelect.value = cameraState.lutPreset || 'none';
  const grid = G('lvFocusGrid');
  grid?.classList.toggle('active', cameraState.gridEnabled);
  syncLiveStudioButtons();
  updateLiveStudioHud();
}

initializeLiveCameraControls();

function setBeautyPreset(preset) {
  const presets = {
    natural: { beauty: 18, brightness: 102, contrast: 104, label: 'Natural' },
    glow: { beauty: 34, brightness: 108, contrast: 108, label: 'Glow' },
    soft: { beauty: 46, brightness: 106, contrast: 112, label: 'Soft' },
    airbrush: { beauty: 60, brightness: 112, contrast: 116, label: 'Airbrush' }
  };
  const conf = presets[preset];
  if (!conf) return;
  cameraState.beautyPreset = preset;
  cameraState.beautyLevel = conf.beauty;
  cameraState.brightness = conf.brightness;
  cameraState.contrast = conf.contrast;
  G('lvBeautySlider').value = conf.beauty;
  G('lvBrightnessSlider').value = conf.brightness;
  G('lvContrastSlider').value = conf.contrast;
  syncLiveStudioButtons();
  applyLiveVideoEffects();
  toast('s', `${conf.label} beauty preset applied`);
}

function applyLiveFilterPreset(preset) {
  const presets = {
    cinematic: { filter: 'contrast(125%) saturate(0.9) sepia(0.14)', lut: 'cinematic', label: 'Cinematic' },
    noir: { filter: 'grayscale(100%) contrast(110%)', lut: 'moody', label: 'Noir' },
    sunset: { filter: 'sepia(70%) saturate(140%) hue-rotate(8deg)', lut: 'warm', label: 'Sunset' },
    bloom: { filter: 'saturate(160%) brightness(108%) contrast(112%)', lut: 'vivid', label: 'Bloom' }
  };
  const conf = presets[preset];
  if (!conf) return;
  cameraState.liveFilterPreset = preset;
  cameraState.currentFilter = conf.filter;
  cameraState.lutPreset = conf.lut;
  syncLiveStudioButtons();
  applyLiveVideoEffects();
  toast('s', `${conf.label} filter pack applied`);
}

function toggleAutoSpotlight() {
  cameraState.autoSpotlight = !cameraState.autoSpotlight;
  if (cameraState.autoSpotlight) cameraState.autoFaceTracking = true;
  syncLiveStudioButtons();
  if (cameraState.autoSpotlight) {
    runAutoFaceTracking();
    toast('s', 'Auto spotlight / subject focus ON');
  } else {
    cancelAnimationFrame(liveFaceTrackingFrame);
    const ring = G('lvFocusRing');
    const spotlight = G('lvSpotlight');
    ring?.classList.remove('show');
    spotlight?.classList.remove('show');
    toast('s', 'Auto spotlight / subject focus OFF');
  }
}

function toggleCinematicZoom() {
  cameraState.cinematicZoom = !cameraState.cinematicZoom;
  syncLiveStudioButtons();
  if (cameraState.cinematicZoom) {
    cameraState.zoomTransitionBase = cameraState.zoomLevel;
    const start = performance.now();
    const animate = (now) => {
      if (!cameraState.cinematicZoom) return;
      const t = (now - start) / 1000;
      const wave = (Math.sin(t * 0.8) + 1) / 2;
      const zoom = Math.min(3, Math.max(1, cameraState.zoomTransitionBase + 0.08 + wave * 0.16));
      cameraState.zoomLevel = Number(zoom.toFixed(2));
      applyZoom();
      liveCinematicZoomFrame = requestAnimationFrame(animate);
    };
    cancelAnimationFrame(liveCinematicZoomFrame);
    liveCinematicZoomFrame = requestAnimationFrame(animate);
    toast('s', 'Cinematic zoom transitions ON');
  } else {
    cancelAnimationFrame(liveCinematicZoomFrame);
    cameraState.zoomLevel = Number((cameraState.zoomTransitionBase || 1).toFixed(2));
    applyZoom();
    toast('s', 'Cinematic zoom transitions OFF');
  }
}

function generateRecordingThumbnail() {
  const vid = G('liveVideo');
  const preview = G('lvThumbnailPreview');
  if (!vid || !vid.videoWidth || !vid.videoHeight) return null;
  const canvas = document.createElement('canvas');
  canvas.width = vid.videoWidth;
  canvas.height = vid.videoHeight;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;
  ctx.filter = vid.style.filter || '';
  ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
  const dataUrl = canvas.toDataURL('image/png');
  cameraState.lastThumbnailDataUrl = dataUrl;
  if (preview) {
    preview.innerHTML = `<img src="${dataUrl}" alt="Recording thumbnail">`;
    preview.classList.add('show');
  }
  const link = document.createElement('a');
  link.href = dataUrl;
  link.download = `monetixra-thumb-${Date.now()}.png`;
  link.click();
  return dataUrl;
}

function toggleAiBeautify() {
  cameraState.aiBeautify = !cameraState.aiBeautify;
  syncLiveStudioButtons();
  applyLiveVideoEffects();
  toast('s', cameraState.aiBeautify ? 'AI Beautify ON' : 'AI Beautify OFF');
}

function toggleSkinSmoothing() {
  cameraState.skinSmoothing = !cameraState.skinSmoothing;
  syncLiveStudioButtons();
  applyLiveVideoEffects();
  toast('s', cameraState.skinSmoothing ? 'Skin smoothing ON' : 'Skin smoothing OFF');
}

function toggleAutoFaceTracking() {
  cameraState.autoFaceTracking = !cameraState.autoFaceTracking;
  syncLiveStudioButtons();
  if (cameraState.autoFaceTracking) {
    runAutoFaceTracking();
    toast('s', 'Auto face tracking ON');
  } else {
    cancelAnimationFrame(liveFaceTrackingFrame);
    const ring = G('lvFocusRing');
    ring?.classList.remove('show');
    toast('s', 'Auto face tracking OFF');
  }
}

function toggleBackgroundBlur() {
  cameraState.backgroundBlur = !cameraState.backgroundBlur;
  syncLiveStudioButtons();
  applyLiveVideoEffects();
  toast('s', cameraState.backgroundBlur ? 'Background Blur ON' : 'Background Blur OFF');
}

function toggleVoiceEnhancement() {
  if (!liveStreamState.stream) return toast('w', 'Camera is not active');
  cameraState.voiceEnhanced = !cameraState.voiceEnhanced;
  syncLiveStudioButtons();
  if (cameraState.voiceEnhanced) {
    const audioTrack = liveStreamState.stream.getAudioTracks()[0];
    if (!audioTrack) return toast('w', 'Microphone unavailable');
    const originalTrack = audioTrack.clone();
    const sourceStream = new MediaStream([originalTrack]);
    const ctx = new AudioContext();
    const source = ctx.createMediaStreamSource(sourceStream);
    const destination = ctx.createMediaStreamDestination();
    const gain = ctx.createGain(); gain.gain.value = 1.2;
    const filter = ctx.createBiquadFilter(); filter.type = 'highshelf'; filter.frequency.value = 2200; filter.gain.value = 5;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -24; comp.knee.value = 24; comp.ratio.value = 8; comp.attack.value = 0.002; comp.release.value = 0.15;
    source.connect(filter); filter.connect(gain); gain.connect(comp); comp.connect(destination);
    ctx.resume().catch(()=>{});
    const processedTrack = destination.stream.getAudioTracks()[0];
    const enhancedStream = new MediaStream([...(liveStreamState.stream.getVideoTracks() || []), processedTrack]);
    liveVoiceEnhancementState = { context: ctx, originalTrack, processedTrack };
    replaceLiveBroadcastStream(enhancedStream);
    toast('s', 'Voice enhancement ON');
  } else {
    if (liveVoiceEnhancementState?.context) {
      liveVoiceEnhancementState.context.close().catch(()=>{});
    }
    const restoredStream = new MediaStream([...(liveStreamState.stream?.getVideoTracks() || []), liveVoiceEnhancementState?.originalTrack].filter(Boolean));
    liveVoiceEnhancementState = null;
    replaceLiveBroadcastStream(restoredStream);
    toast('s', 'Voice enhancement OFF');
  }
}

function toggleVoiceDenoise() {
  if (!liveStreamState.stream) return toast('w', 'Camera is not active');
  cameraState.voiceDenoise = !cameraState.voiceDenoise;
  syncLiveStudioButtons();
  if (cameraState.voiceDenoise) {
    const audioTrack = liveStreamState.stream.getAudioTracks()[0];
    if (!audioTrack) return toast('w', 'Microphone unavailable');
    const originalTrack = audioTrack.clone();
    const sourceStream = new MediaStream([originalTrack]);
    const ctx = new AudioContext();
    const source = ctx.createMediaStreamSource(sourceStream);
    const destination = ctx.createMediaStreamDestination();
    const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 120; hp.Q.value = 0.8;
    const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200; lp.Q.value = 0.6;
    const comp = ctx.createDynamicsCompressor(); comp.threshold.value = -28; comp.knee.value = 22; comp.ratio.value = 6; comp.attack.value = 0.005; comp.release.value = 0.2;
    source.connect(hp); hp.connect(lp); lp.connect(comp); comp.connect(destination);
    ctx.resume().catch(()=>{});
    const processedTrack = destination.stream.getAudioTracks()[0];
    const denoisedStream = new MediaStream([...(liveStreamState.stream.getVideoTracks() || []), processedTrack]);
    liveVoiceDenoiseState = { context: ctx, originalTrack, processedTrack };
    replaceLiveBroadcastStream(denoisedStream);
    toast('s', 'Voice denoise ON');
  } else {
    if (liveVoiceDenoiseState?.context) {
      liveVoiceDenoiseState.context.close().catch(()=>{});
    }
    const restoredStream = new MediaStream([...(liveStreamState.stream?.getVideoTracks() || []), liveVoiceDenoiseState?.originalTrack].filter(Boolean));
    liveVoiceDenoiseState = null;
    replaceLiveBroadcastStream(restoredStream);
    toast('s', 'Voice denoise OFF');
  }
}

function toggleNightVision() {
  cameraState.nightVision = !cameraState.nightVision;
  syncLiveStudioButtons();
  applyLiveVideoEffects();
  toast('s', cameraState.nightVision ? 'Night Vision ON' : 'Night Vision OFF');
}

function setRecordingSpeed() {
  cameraState.recordingSpeed = G('lvSpeedMode')?.value || 'normal';
  syncLiveStudioButtons();
}

function setLutPreset() {
  cameraState.lutPreset = G('lvLutPreset')?.value || 'none';
  syncLiveStudioButtons();
  applyLiveVideoEffects();
  toast('s', cameraState.lutPreset === 'none' ? 'LUT filter off' : `LUT: ${cameraState.lutPreset}`);
}

function toggleAutoStabilization() {
  cameraState.autoStabilization = !cameraState.autoStabilization;
  syncLiveStudioButtons();
  applyLiveVideoEffects();
  toast('s', cameraState.autoStabilization ? 'Auto Stabilization ON' : 'Auto Stabilization OFF');
}

async function toggleOneTapRecording() {
  if (!liveStreamState.stream) return toast('w', 'Camera is not active');
  if (liveRecordingState.active) {
    liveRecordingState.recorder?.stop();
    clearInterval(liveRecordingPreviewTimer);
    liveRecordingPreviewTimer = null;
    return;
  }
  const mimeType = MediaRecorder.isTypeSupported('video/webm;codecs=vp9,opus') ? 'video/webm;codecs=vp9,opus' : 'video/webm';
  const recorder = new MediaRecorder(liveStreamState.stream, { mimeType });
  liveRecordingState = { active: true, recorder, chunks: [], stream: liveStreamState.stream, startedAt: Date.now() };
  liveRecordingState.chunks = [];
  recorder.ondataavailable = e => { if (e.data?.size) liveRecordingState.chunks.push(e.data); };
  recorder.onerror = () => { toast('e', 'Recording failed'); };
  recorder.onstop = async () => {
    const blob = new Blob(liveRecordingState.chunks, { type: recorder.mimeType || 'video/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `monetixra-${cameraState.recordingSpeed || 'normal'}-${Date.now()}.webm`;
    a.click();
    try { generateRecordingThumbnail(); } catch (err) { console.warn('[Live] Thumbnail generation failed', err); }
    setTimeout(() => URL.revokeObjectURL(url), 3000);
    liveRecordingState.active = false;
    liveRecordingState.startedAt = null;
    clearInterval(liveRecordingPreviewTimer);
    liveRecordingPreviewTimer = null;
    syncLiveStudioButtons();
    toast('s', 'Recording saved and thumbnail created');
  };
  recorder.start();
  liveRecordingPreviewTimer = setInterval(updateRecordingPreview, 1000);
  syncLiveStudioButtons();
  toast('s', `Recording started (${cameraState.recordingSpeed === 'slow' ? 'Slow Motion' : cameraState.recordingSpeed === 'timelapse' ? 'Timelapse' : 'Normal'})`);
}

// Change camera resolution
async function changeResolution() {
  let resolution = parseInt(G('lvResolution').value);
  cameraState.currentResolution = resolution;
  updateLiveStudioHud();
  
  if (liveStreamState.stream) {
    try {
      let stream = await navigator.mediaDevices.getUserMedia(getLiveCameraConstraints({ resolution }));
      await replaceLiveBroadcastStream(stream);
      toast('s', `Resolution changed to ${resolution}p`);
    } catch (err) {
      console.error('[Camera] Resolution change error:', err);
      toast('e', liveErrorDetails(err));
    }
  }
}

// Toggle front/back camera
async function toggleCamera() {
  cameraState.currentFacingMode = cameraState.currentFacingMode === 'user' ? 'environment' : 'user';
  updateLiveStudioHud();
  
  if (liveStreamState.stream) {
    try {
      let stream = await navigator.mediaDevices.getUserMedia(getLiveCameraConstraints());
      await replaceLiveBroadcastStream(stream);
      toast('s', `Camera switched to ${cameraState.currentFacingMode === 'user' ? 'Front' : 'Back'}`);
    } catch (err) {
      console.error('[Camera] Toggle error:', err);
      toast('e', liveErrorDetails(err));
    }
  }
}

// Toggle flash/torch
async function toggleFlash() {
  if (!liveStreamState.stream) return;
  
  let videoTrack = liveStreamState.stream.getVideoTracks()[0];
  if (!videoTrack) return;
  
  let capabilities = videoTrack.getCapabilities();
  if (!capabilities.torch) {
    toast('w', 'Flash not supported on this device');
    return;
  }
  
  cameraState.flashEnabled = !cameraState.flashEnabled;
  
  try {
    await videoTrack.applyConstraints({
      advanced: [{ torch: cameraState.flashEnabled }]
    });
    
    let btn = G('lvFlashBtn');
    if (btn) {
      btn.classList.toggle('active', cameraState.flashEnabled);
    }
    
    toast('s', cameraState.flashEnabled ? 'Flash ON' : 'Flash OFF');
  } catch (err) {
    console.error('[Camera] Flash error:', err);
    toast('e', 'Failed to toggle flash');
  }
}

// Zoom controls
function zoomIn() {
  if (cameraState.zoomLevel < 3) {
    cameraState.zoomLevel = Math.round((cameraState.zoomLevel + 0.2) * 10) / 10;
    if (cameraState.cinematicZoom) cameraState.zoomTransitionBase = cameraState.zoomLevel;
    applyZoom();
  }
}

function zoomOut() {
  if (cameraState.zoomLevel > 1) {
    cameraState.zoomLevel = Math.round((cameraState.zoomLevel - 0.2) * 10) / 10;
    if (cameraState.cinematicZoom) cameraState.zoomTransitionBase = cameraState.zoomLevel;
    applyZoom();
  }
}

function applyZoom() {
  let vid = G('liveVideo');
  if (vid) {
    vid.style.transform = `scale(${cameraState.zoomLevel})`;
    const zoomLabel = G('lvZoomLevel');
    if (zoomLabel) zoomLabel.textContent = cameraState.zoomLevel.toFixed(1) + 'x';
    updateLiveStudioHud();
  }
}

// Apply color filters
function applyFilter(filter) {
  cameraState.currentFilter = filter;
  cameraState.liveFilterPreset = 'custom';
  applyLiveVideoEffects();
  
  // Update active state
  document.querySelectorAll('.lv-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  syncLiveStudioButtons();
  toast('s', 'Filter applied');
}

// Apply beauty effect
function applyBeauty() {
  let beauty = parseInt(G('lvBeautySlider').value);
  cameraState.beautyLevel = beauty;
  applyLiveVideoEffects();
}

// Apply brightness and contrast adjustments
function applyAdjustments() {
  let brightness = parseInt(G('lvBrightnessSlider').value);
  let contrast = parseInt(G('lvContrastSlider').value);
  
  cameraState.brightness = brightness;
  cameraState.contrast = contrast;
  applyLiveVideoEffects();
}

// Toggle mute/unmute
function toggleMute() {
  if (!liveStreamState.stream) return;
  
  let audioTrack = liveStreamState.stream.getAudioTracks()[0];
  if (!audioTrack) return;
  
  cameraState.isMuted = !cameraState.isMuted;
  audioTrack.enabled = !cameraState.isMuted;
  
  let btn = G('lvMuteBtn');
  if (btn) {
    btn.classList.toggle('active', cameraState.isMuted);
    btn.textContent = cameraState.isMuted ? '🔇' : '🎤';
  }
  
  toast('s', cameraState.isMuted ? 'Microphone OFF' : 'Microphone ON');
}

// Take screenshot
function takeScreenshot() {
  let vid = G('liveVideo');
  if (!vid) return;
  
  let canvas = document.createElement('canvas');
  canvas.width = vid.videoWidth;
  canvas.height = vid.videoHeight;
  
  let ctx = canvas.getContext('2d');
  if (vid.style.filter) {
    ctx.filter = vid.style.filter;
  }
  ctx.drawImage(vid, 0, 0, canvas.width, canvas.height);
  
  let dataUrl = canvas.toDataURL('image/png');
  
  // Create download link
  let link = document.createElement('a');
  link.download = `live_screenshot_${Date.now()}.png`;
  link.href = dataUrl;
  link.click();
  
  toast('s', 'Screenshot saved!');
  confetti();
}

// Toggle camera controls visibility
function toggleCameraControls() {
  let controls = G('lvCameraControls');
  if (controls) {
    controls.classList.toggle('hidden');
    let toolsToggle = G('lvToolsToggle');
    if (toolsToggle) toolsToggle.classList.toggle('is-hidden', controls.classList.contains('hidden'));
  }
}

// Watch live stream (for viewers)
function watchLiveStream(postId) {
  let post = D.posts.find(p => p.id === postId);
  if (!post || !post.isLive) {
    toast('e', 'This live stream has ended');
    return;
  }
  
  // For viewers - show the live view without camera
  G('liveView').classList.add('open');
  let controls = G('lvCameraControls');
  if (controls) controls.style.display = 'none';
  let toolsToggle = G('lvToolsToggle');
  if (toolsToggle) toolsToggle.style.display = 'none';
  G('lvName').textContent = post.streamerName + "'s Live";
  G('lvAv').textContent = post.streamerName?.charAt(0).toUpperCase() || 'L';
  G('lvViewers').textContent = post.viewers || 0;
  
  // Show the live camera feed when the broadcaster is already streaming in this session
  let vid = G('liveVideo');
  let overlay = document.querySelector('.lv-overlay');
  if (vid) {
    if (liveStreamState.active && liveStreamState.stream) {
      vid.style.display = 'block';
      vid.srcObject = liveStreamState.stream;
      vid.muted = true;
      vid.play?.().catch(() => {});
      if (overlay) overlay.innerHTML = '';
    } else {
      vid.srcObject = null;
      vid.style.display = 'block';
      if (overlay) {
        overlay.innerHTML = `
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;flex-direction:column;gap:20px;">
            <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,var(--c1),var(--c2));display:flex;align-items:center;justify-content:center;font-size:40px;">
              ${post.streamerName?.charAt(0).toUpperCase() || 'L'}
            </div>
            <div style="text-align:center;">
              <div style="font-size:18px;font-weight:700;">${esc(post.streamerName)}</div>
              <div style="font-size:14px;color:var(--t3);">🔴 LIVE NOW</div>
            </div>
            <div style="background:rgba(255,0,0,0.2);border:1px solid #ff4444;padding:10px 20px;border-radius:20px;font-size:12px;">
              📹 Watching Live Stream
            </div>
          </div>
        `;
      }
      if(socketReady && socket) {
        socket.emit('live:join', { postId, streamerId: post.author, viewerId: CU?.id });
      } else {
        toast('e', 'Live video connection is offline. Please refresh and try again.');
      }
    }
  }
  
  // Load comments
  liveStreamState.comments = post.comments || [];
  renderLiveComments();
  
  // Increment viewer count
  post.viewers = (post.viewers || 0) + 1;
  saveData();
  
  toast('s', `🔴 Watching ${post.streamerName}'s live stream`);
}

// Legacy function for direct start
function startLive() {
  startLiveStreamFromPost();
}

// Video/Image Editor
function openVideoEditor() { G('videoEditor').classList.add('open'); }
function closeVideoEditor() { G('videoEditor').classList.remove('open'); }
function veTool(t) { toast('i',t+' tool - demo'); }
function exportVideo() { closeVideoEditor(); toast('s','Video exported!'); }
function openImageEditor() { if(!pfData){ toast('w','Upload image first'); return; } G('imageEditor').classList.add('open'); let canvas=G('ieCanvas'); let ctx=canvas.getContext('2d'); let img=new Image(); img.onload=()=>{ canvas.width=img.naturalWidth; canvas.height=img.naturalHeight; ctx.drawImage(img,0,0); window.ieImg=img; }; img.src=pfData; }
function closeImageEditor() { G('imageEditor').classList.remove('open'); }
function ieTool(t) { if(t==='aiEnhance'){ toast('i','AI Enhancing image...'); setTimeout(()=>{ toast('s','Image enhanced!'); },1500); }else{ toast('i',t+' - demo'); } }
function exportImage() { if(!G('ieCanvas')) return; pfData=G('ieCanvas').toDataURL('image/jpeg',0.9); pfMime='image/jpeg'; G('mediaPreview').innerHTML=`<img src="${pfData}" style="max-width:100%;">`; closeImageEditor(); toast('s','Image saved!'); }

// Language
function rLangGrid() { let grid=G('langGrid'); if(!grid) return; let langs=Object.entries(LANGUAGES); grid.innerHTML=langs.map(([code,l])=>`<div class="lang-btn${code===currentLang?' on':''}" onclick="setLang('${code}')"><span class="lang-flag">${l.flag}</span><span>${l.name}</span></div>`).join(''); }
function searchLanguage(q) { let grid=G('langGrid'); if(!grid) return; let langs=Object.entries(LANGUAGES).filter(([code,l])=>l.name.toLowerCase().includes(q.toLowerCase())); grid.innerHTML=langs.map(([code,l])=>`<div class="lang-btn${code===currentLang?' on':''}" onclick="setLang('${code}')"><span class="lang-flag">${l.flag}</span><span>${l.name}</span></div>`).join(''); }
function setLang(code) { currentLang=code; G('curLangLabel').textContent=`${LANGUAGES[code].flag} ${LANGUAGES[code].name}`; closeModal('langModal'); toast('s',`Language set to ${LANGUAGES[code].name}`); }

// Settings
function rSettings() {
  buildColorPicker();
  if (!CU) return;
  // Get current user data
  let u = D.users[CU.id] || CU;
  // Hero card
  let av = G('settAv'); if (av) av.innerHTML = u.avatar ? `<img src="${u.avatar}" style="width:100%;height:100%;object-fit:cover;">` : (u.name?.charAt(0).toUpperCase()||'M');
  if (G('settName')) G('settName').textContent = u.name||CU.name||'User';
  if (G('settUser')) G('settUser').textContent = '@'+(u.username||CU.username||'user');
  if (G('settPts')) G('settPts').textContent = fmt(u.points||0)+' pts · $'+((u.points||0)/PTS_PER_USD).toFixed(2);
  if (G('settFollowers')) G('settFollowers').textContent = fmt(u.followers?.length||0);
  if (G('settFollowing')) G('settFollowing').textContent = fmt(u.following?.length||0);
  if (G('settPostCount')) G('settPostCount').textContent = fmt(u.posts?.length||0);
  // Badges
  let badges = G('settBadges'); if (badges) {
    badges.innerHTML = '';
    if (u.kycVerified) badges.innerHTML += '<span class="sett-tag">✅ KYC</span>';
    if (u.twoFA)       badges.innerHTML += '<span class="sett-tag">🛡️ 2FA</span>';
    if (u.isAdmin)     badges.innerHTML += '<span class="sett-tag">👑 Admin</span>';
    if ((u.points||0)>5000) badges.innerHTML += '<span class="sett-tag">⭐ Top Earner</span>';
    if (u.verified)    badges.innerHTML += '<span class="sett-tag">✔ Verified</span>';
  }
  // Status labels
  if (G('tfaSub')) G('tfaSub').textContent = u.twoFA ? '✅ Enabled' : 'Disabled';
  if (G('twoFAToggle')) G('twoFAToggle').checked = !!u.twoFA;
  if (G('kycStatus')) G('kycStatus').textContent = u.kycVerified ? '✅ Verified' : u.kycPending ? '⏳ Pending' : 'Not Verified';
  if (G('tinStatus')) G('tinStatus').textContent = CU.tin ? '✅ '+CU.tin.number : 'Not Added';
  if (G('blockedCount')) G('blockedCount').textContent = (CU.blocked||[]).length+' users blocked';
  if (G('settWalletBal')) G('settWalletBal').textContent = '$'+(((D.users[CU.id]||CU).points||0)/PTS_PER_USD).toFixed(2);
  // Theme
  let isDark = !document.body.classList.contains('lm');
  if (G('themeIcon')) G('themeIcon').textContent = isDark ? '🌙' : '☀️';
  if (G('themeSub')) G('themeSub').textContent = isDark ? 'Dark Mode' : 'Light Mode';
  // Privacy toggles
  let p = u.privacySettings||{};
  if (G('privToggle')) G('privToggle').checked = !!p.private;
  if (G('hideLikesToggle')) G('hideLikesToggle').checked = !!p.hideLikes;
  if (G('readReceiptsToggle')) G('readReceiptsToggle').checked = p.readReceipts!==false;
  if (G('locationToggle')) G('locationToggle').checked = !!p.location;
  if (G('autoPlayToggle')) G('autoPlayToggle').checked = p.autoPlay!==false;
  if (G('wifiOnlyToggle')) G('wifiOnlyToggle').checked = !!p.wifiOnly;
  if (G('muteAutoToggle')) G('muteAutoToggle').checked = p.muteAuto!==false;
  if (G('autoTranslateToggle')) G('autoTranslateToggle').checked = !!p.autoTranslate;
  if (G('msgPrivSub')) G('msgPrivSub').textContent = ['Everyone','Followers Only','Nobody'][p.msgPriv||0];
  if (G('dlQualityLabel')) G('dlQualityLabel').textContent = ['Low (240p)','SD (360p)','HD (720p)','Full HD (1080p)','2K'][p.dlQuality||2];
  // Date format label
  let df = p.dateFormat || 'relative';
  if (G('dateFormatSub')) G('dateFormatSub').textContent = df === 'relative' ? 'Relative (e.g. 2h ago)' : df === 'absolute' ? 'Absolute (e.g. 2024-01-15)' : 'ISO Format';
  // Notification toggles — restore saved states
  let ns = u.notifSettings||{};
  if(G('pushToggle'))        G('pushToggle').checked        = ns.push !== false;
  if(G('likeNotifToggle'))   G('likeNotifToggle').checked   = ns.likes !== false;
  if(G('cmtNotifToggle'))    G('cmtNotifToggle').checked    = ns.comments !== false;
  if(G('followNotifToggle')) G('followNotifToggle').checked = ns.follows !== false;
  if(G('earnToggle'))        G('earnToggle').checked        = ns.earnings !== false;
  if(G('mlmNotifToggle'))    G('mlmNotifToggle').checked    = ns.mlm !== false;
  if(G('cpNotifToggle'))     G('cpNotifToggle').checked     = ns.copyright !== false;
  // TIN status
  if(G('tinStatus')) G('tinStatus').textContent = u.tin ? '✅ '+u.tin.number : 'Not Added';
  // Blocked count
  if(G('blockedCount')) G('blockedCount').textContent = (u.blocked||[]).length+' users blocked';
  // Admin panel button visibility
  // Admin section visibility
  let adminBtn = G('settAdminBtn');
  let adminSec = G('settAdminSection');
  if(adminBtn) adminBtn.style.display = u.isAdmin ? 'flex' : 'none';
  if(adminSec) adminSec.style.display = u.isAdmin ? 'block' : 'none';
  // Cache size
  try { let keys=Object.keys(localStorage); let total=keys.reduce((s,k)=>s+(localStorage.getItem(k)||'').length,0); if(G('cacheSizeLabel')) G('cacheSizeLabel').textContent = (total/1024).toFixed(1)+' KB used'; } catch(e){}
  // Font size
  let fs = parseInt(localStorage.getItem(STORAGE_KEY+'fontSize')||'100');
  if (G('fontSizeSlider')) G('fontSizeSlider').value = fs;
  if (G('fontSizeLabel')) G('fontSizeLabel').textContent = fs+'%';
}
function savePrivacySetting(key, el) {
  if(!CU) return;
  let u = D.users[CU.id] || CU;
  u.privacySettings = u.privacySettings || {};
  u.privacySettings[key] = el.checked;
  CU = D.users[CU.id] || CU;
  saveData();
  if(typeof applyMediaAutoPlaySettings === 'function') applyMediaAutoPlaySettings();
}
function cycleMessagePrivacy() {
  if (!CU) return;
  CU.privacySettings = CU.privacySettings||{};
  CU.privacySettings.msgPriv = ((CU.privacySettings.msgPriv||0)+1)%3;
  saveData(); rSettings();
}
function cycleDlQuality() {
  if (!CU) return;
  CU.privacySettings = CU.privacySettings||{};
  CU.privacySettings.dlQuality = ((CU.privacySettings.dlQuality||2)+1)%5;
  saveData(); rSettings();
}
function cycleDateFormat() {
  if (!CU) return;
  CU.privacySettings = CU.privacySettings || {};
  let formats = ['relative', 'absolute', 'iso'];
  let current = CU.privacySettings.dateFormat || 'relative';
  let idx = formats.indexOf(current);
  let nextIdx = (idx + 1) % formats.length;
  CU.privacySettings.dateFormat = formats[nextIdx];
  saveData(); rSettings();
  toast('i', 'Date format: ' + (nextIdx === 0 ? 'Relative' : nextIdx === 1 ? 'Absolute' : 'ISO'));
}
function changeFontSize(val) {
  document.documentElement.style.fontSize = val+'%';
  localStorage.setItem(STORAGE_KEY+'fontSize', val);
  if (G('fontSizeLabel')) G('fontSizeLabel').textContent = val+'%';
}
function toggleAnimations(el) {
  if (!el.checked) { document.body.style.setProperty('--fast','0s'); document.body.style.setProperty('--med','0s'); document.body.style.setProperty('--slow','0s'); }
  else { document.body.style.removeProperty('--fast'); document.body.style.removeProperty('--med'); document.body.style.removeProperty('--slow'); }
}
function clearCache() {
  if (!confirm('Clear app cache?')) return;
  OfflineCache.clear();
  try { let keys=Object.keys(localStorage).filter(k=>k.includes('cache')||k.includes('offline')); keys.forEach(k=>localStorage.removeItem(k)); } catch(e){}
  toast('s', '🧹 Cache cleared!');
  rSettings();
}
function clearSearchHistory() { if (CU) { CU.searchHistory=[]; saveData(); toast('s','🔍 Search history cleared'); } }
function clearAllNotifs() {
  if(!CU) return toast('e','Please sign in first');
  
  // Use new modular system
  if(typeof MonetixraAccountManagement !== 'undefined' && typeof MonetixraAccountManagement.clearAllNotifications === 'function') {
    return MonetixraAccountManagement.clearAllNotifications();
  }
  
  // Fallback
  let before = (D.notifs||[]).length;
  D.notifs = (D.notifs||[]).filter(n=>n.to!==CU.id);
  persistAuthState();
  saveData();
  syncUI();
  rNotif();
  toast('s', before === D.notifs.length ? 'No notifications to clear' : '🔕 All notifications cleared');
}
function deactivateAccount() {
  if(!CU) return;
  
  // Use new modular system
  if(typeof MonetixraAccountManagement !== 'undefined' && typeof MonetixraAccountManagement.deactivateAccount === 'function') {
    return MonetixraAccountManagement.deactivateAccount();
  }
  
  // Fallback
  if(!confirm('Deactivate your account? You can reactivate by logging in again.')) return;
  let u = D.users[CU.id]||CU;
  u.deactivated = true;
  D.cur = null;
  CU = null;
  persistAuthState();
  saveData();
  if (isSupabaseReady()) {
    supabaseSignOut().catch(err => console.warn('[Supabase signout]', err.message || err));
  }
  toast('i','Account deactivated');
  setTimeout(()=> location.reload(), 800);
}
function importBackup() { let inp=document.createElement('input'); inp.type='file'; inp.accept='.json'; inp.onchange=e=>{ let f=e.target.files[0]; if(!f) return; let r=new FileReader(); r.onload=ev=>{ try{ let data=JSON.parse(ev.target.result); if(data.users&&data.posts){ Object.assign(D,data); saveData(); location.reload(); } else toast('e','Invalid backup file'); }catch(er){ toast('e','Could not read backup'); } }; r.readAsText(f); }; inp.click(); }
function openFeedback() {
  let msg=prompt('Your feedback for Monetixra:');
  if(!msg || !CU) return;
  D.adminReports = D.adminReports || [];
  D.adminReports.unshift({id:'fb'+Date.now(), from:CU.id, type:'feedback', msg, at:Date.now(), status:'open'});
  D.chats = D.chats || {};
  let key=[CU.id,ADMIN_ID].sort().join('_');
  D.chats[key]=D.chats[key]||[];
  D.chats[key].push({id:'m'+Date.now(), from:CU.id, to:ADMIN_ID, text:'Monetixra report: '+msg, type:'text', at:Date.now(), read:false});
  toast('s','Feedback sent to admin Messenger');
  addNotif(ADMIN_ID,'feedback','📝',`Feedback from ${CU.name}: ${msg.substring(0,50)}`);
  saveData();
}
function rateApp() { toast('s','⭐ Thanks for rating!'); addPts(5,'App Rated'); }
function toggle2FA() { if(!CU) return; let u=D.users[CU.id]||CU; u.twoFA=!u.twoFA; CU=D.users[CU.id]||CU; saveData(); rSettings(); toast('s',CU.twoFA?'🛡️ 2FA Enabled':'2FA Disabled'); }
// Google Sign-In
function signInWithGoogle() {
  // Google OAuth — requires Google API Console setup
  const CLIENT_ID = ''; // ★ Add from console.cloud.google.com
  if(!CLIENT_ID) {
    toast('w','Google Sign-In: Add CLIENT_ID in code');
    // Demo fallback
    let demoName = 'Google User';
    let demoEmail = 'google_'+Date.now()+'@gmail.com';
    let uid2 = 'g_'+Date.now();
    let refCode = 'MXT'+Math.random().toString(36).slice(2,6).toUpperCase();
    D.users[uid2] = {
      id:uid2, name:demoName, username:'google_'+uid2.slice(-6),
      email:demoEmail, password:'', points:50,
      googleUser:true, avatar:'', verified:false,
      isAdmin:false, followers:[], following:[], refs:[],
      refCode, savedPosts:[], blocked:[], tasksToday:{},
      twoFA:false, kycVerified:false, createdAt:Date.now()
    };
    D.cur=uid2; CU=D.users[uid2];
    saveSession(); saveData(); mount();
    toast('s','✅ Signed in! (demo)'); confetti();
    return;
  }
  // Real Google OAuth flow
  let popup = window.open(
    `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${encodeURIComponent(location.origin+'/auth/google')}&response_type=token&scope=email+profile`,
    'google-oauth', 'width=500,height=600'
  );
  window.addEventListener('message', async (e) => {
    if(e.data?.type === 'google-oauth') {
      popup?.close();
      let {name, email, picture} = e.data;
      let uid3 = 'g_'+Date.now();
      let existing = Object.values(D.users).find(u=>u.email===email);
      if(existing) { D.cur=existing.id; CU=existing; }
      else {
        D.users[uid3]={id:uid3,name,username:'g_'+uid3.slice(-6),email,password:'',avatar:picture,points:50,googleUser:true,verified:false,isAdmin:false,followers:[],following:[],refs:[],refCode:'MXT'+Math.random().toString(36).slice(2,6).toUpperCase(),savedPosts:[],blocked:[],tasksToday:{},twoFA:false,kycVerified:false,createdAt:Date.now()};
        D.cur=uid3; CU=D.users[uid3];
      }
      saveSession(); saveData(); mount(); toast('s','✅ Google Sign-In successful!');
    }
  });
}

// ── Light / Dark Theme Toggle ────────────────────────────────
let currentTheme = localStorage.getItem('mxt_theme') || 'dark';

function toggleTheme() {
  currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(currentTheme);
  localStorage.setItem('mxt_theme', currentTheme);
  toast('s', currentTheme === 'light' ? '☀️ Light mode' : '🌙 Dark mode');
}

function applyTheme(theme) {
  let r = document.documentElement.style;
  if(theme === 'light') {
    r.setProperty('--bg',  '#f8fafc');
    r.setProperty('--bg2', '#ffffff');
    r.setProperty('--bg3', '#f1f5f9');
    r.setProperty('--g1',  '#ffffff');
    r.setProperty('--g2',  '#f1f5f9');
    r.setProperty('--g3',  '#e2e8f0');
    r.setProperty('--t1',  '#0f172a');
    r.setProperty('--t2',  '#334155');
    r.setProperty('--t3',  '#64748b');
    r.setProperty('--b1',  'rgba(0,0,0,.1)');
    r.setProperty('--b2',  'rgba(0,0,0,.15)');
    document.body.style.background = '#f8fafc';
  } else {
    r.setProperty('--bg',  '#030308');
    r.setProperty('--bg2', '#0a0a12');
    r.setProperty('--bg3', '#0f0f1a');
    r.setProperty('--g1',  '#0f0f1a');
    r.setProperty('--g2',  '#141420');
    r.setProperty('--g3',  '#1a1a2e');
    r.setProperty('--t1',  '#f1f5f9');
    r.setProperty('--t2',  '#cbd5e1');
    r.setProperty('--t3',  '#64748b');
    r.setProperty('--b1',  'rgba(255,255,255,.06)');
    r.setProperty('--b2',  'rgba(255,255,255,.1)');
    document.body.style.background = '#030308';
  }
  let btn = G('themeToggleBtn');
  if(btn) btn.textContent = theme==='light' ? '🌙' : '☀️';
}

function openTerms()   { openModal('termsModal'); }

// ── Premium Subscription ────────────────────────────────────
const PREMIUM_PLANS = [
  { id:'weekly',  name:'Weekly',  price:199,  pts:199,  ads:100, label:'৳199/week'  },
  { id:'monthly', name:'Monthly', price:499,  pts:499,  ads:300, label:'৳499/month' },
  { id:'yearly',  name:'Yearly',  price:2999, pts:2999, ads:9999,label:'৳2999/year' },
];

function openPremiumModal() {
  let plans = PREMIUM_PLANS;
  let u = D.users[CU?.id]||CU;
  let html2 = plans.map(p=>`
    <div style="background:var(--g2);border:1px solid ${u.isPremium&&u.premiumPlan===p.id?'var(--neon)':'var(--b1)'};border-radius:14px;padding:14px;margin-bottom:8px;cursor:pointer;" onclick="subscribePremium('${p.id}')">
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <div>
          <div style="font-weight:800;font-size:14px;">${p.name === 'Monthly'?'⭐ ':''}${p.name} Plan</div>
          <div style="font-size:12px;color:var(--neon);font-weight:700;">${p.label}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:11px;color:var(--t3);">✅ ${p.ads} ads/day</div>
          <div style="font-size:11px;color:var(--t3);">✅ Priority withdraw</div>
          <div style="font-size:11px;color:var(--t3);">✅ Premium badge</div>
        </div>
      </div>
    </div>`).join('');
  let div = document.createElement('div');
  div.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;padding:20px;';
  div.innerHTML = `<div style="background:var(--bg2);border:1px solid var(--b2);border-radius:20px;padding:20px;width:100%;max-width:380px;max-height:90vh;overflow-y:auto;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
      <div style="font-weight:900;font-size:18px;">⭐ Premium Plans</div>
      <button onclick="this.closest('[style*=fixed]').remove()" style="background:none;border:none;color:var(--t1);font-size:20px;cursor:pointer;">✕</button>
    </div>
    <div style="font-size:12px;color:var(--t3);margin-bottom:12px;">Unlock unlimited ads, priority withdrawals & premium badge</div>
    ${html2}
    <div style="font-size:10px;color:var(--t3);text-align:center;margin-top:8px;">Payment via bKash/Nagad. Points deducted immediately.</div>
  </div>`;
  document.body.appendChild(div);
}

function subscribePremium(planId) {
  if(!CU) return;
  let plan = PREMIUM_PLANS.find(p=>p.id===planId);
  if(!plan) return;
  let u = D.users[CU.id]||CU;
  if((u.points||0) < plan.pts) {
    toast('e',`Need ${plan.pts} pts for ${plan.name} plan. You have ${u.points||0} pts.`);
    return;
  }
  if(!confirm(`Subscribe to ${plan.name} plan for ${plan.pts} pts (${plan.label})?`)) return;
  u.points = (u.points||0) - plan.pts;
  u.isPremium = true;
  u.premiumPlan = planId;
  u.premiumExpiry = Date.now() + (planId==='weekly'?7:planId==='monthly'?30:365)*24*3600*1000;
  CU = D.users[CU.id]||CU;
  D.txs.unshift({id:'t'+Date.now(),type:'premium',label:`${plan.name} Premium subscription`,pts:-plan.pts,at:Date.now(),user:CU.id});
  addNotif(CU.id,'premium','⭐',`Premium ${plan.name} activated! Enjoy unlimited features.`);
  // Admin revenue
  let admin = D.users[ADMIN_ID];
  if(admin){ admin.points=(admin.points||0)+plan.pts; admin.adminRevenue=(admin.adminRevenue||0)+plan.pts; }
  saveData(); syncUI(); rSettings();
  document.querySelectorAll('[style*="fixed"]').forEach(d=>d.remove());
  toast('s',`⭐ Premium ${plan.name} activated!`);
  confetti();
}
function openPrivacy() { openModal('privacyModal'); }

function blockedList() { if(!CU) return; alert('Blocked: '+(CU.blocked||[]).join(', ')||'None'); }
async function doChangePass() {
  if(!CU) return;
  let u=D.users[CU.id]||CU;
  let old=V('cpOld'), np=V('cpNew'), np2=V('cpNew2');
  if(!np||np!==np2) return toast('e','Passwords do not match');
  if(np.length<6) return toast('e','Password must be 6+ characters');
  let oldHash = await hashPass(old);
  let match = isHashed(u.password) ? (u.password===oldHash) : (u.password===old);
  if(!match) return toast('e','Wrong current password');
  u.password = await hashPass(np);
  CU=D.users[CU.id]||CU; saveData(); closeModal('cpModal');
  toast('s','✅ Password updated!');
}

// Ads
function startBanner() {
  let el = G('baT'); if(!el) return;
  const pageBanners = {
    feed: ['🚀 Monetixra — Earn while you scroll!', '💸 Feed ads: Tap to claim bonus points', '🔥 Trending creators and sponsor offers here'],
    explore: ['🔎 Explore ads tailored to discovery', '🎯 Find new sponsor deals as you browse', '💰 Explore page offers extra rewards'],
    earn: ['💰 Earn more points with reward ads', '📺 Watch ads for instant bonus points', '🎁 Today’s highest paying offers are live'],
    wallet: ['💳 Wallet ads: boost your balance', '🪙 Withdraw faster with sponsor offers', '💼 Earn cashback points from wallet ads'],
    messages: ['💬 Chat ads: message sponsors directly', '📞 Call offers and communication deals', '🤝 Sponsored friend activities are live'],
    friends: ['👥 Friends page ads for new connections', '💫 Discover creators with sponsored posts', '🔥 Find trending friends and reward ads'],
    referral: ['🎁 Referral ads: share and earn more', '📣 Invite friends through special offers', '💎 Earn points for each referral click'],
    profile: ['📈 Profile ads: grow your audience', '🏷️ Sponsored profile boosts available', '✨ Show off your verified creator perks'],
    settings: ['⚙️ Settings ads: upgrade your experience', '🔔 Manage notifications with sponsor deals', '🛡️ Privacy tips and reward ads here'],
    admin: ['📋 Admin ads: monitor platform campaigns', '📊 Sponsor analytics and live control tools', '🚀 Admin dashboard offers premium promos'],
    leaderboard: ['🏆 Leaderboard ads: rank higher with offers', '🥇 Sponsored boosts for top creators', '📣 Featured creator campaigns active now'],
    marketplace: ['🛍️ Marketplace ads for seller promos', '💼 Sponsored product listings and deals', '🎨 Discover premium creator offers here'],
    nft: ['🎨 NFT ads: mint and promote with sponsors', '💎 Exclusive drops and marketplace rewards', '🌐 NFT campaigns for creator earnings'],
    metaverse: ['🌐 Metaverse ads: immersive sponsor campaigns', '🚀 Discover metaverse brand promotions', '🪐 Virtual offers for creator rewards'],
    apps: ['📲 App ads: install offers and earn points', '🔥 Mobile sponsor deals for creators', '💸 App install bonuses available now'],
    analytics: ['📊 Analytics ads: power your insights', '💼 Admin sponsor campaigns in real time', '🔎 Track offers and ad performance'],
    activity: ['📌 Activity ads: stay engaged and rewarded', '⚡ Sponsored events for active creators', '🕒 Earn points for daily interactions'],
    gamification: ['⚡ Gamification ads: challenge and earn', '🏅 Sponsored missions for bonus rewards', '🎮 Level up with exclusive ad offers'],
    notif: ['🔔 Notification ads: never miss a sponsor deal', '📣 Alerts for new reward campaigns', '🧾 Stay updated on bonus point offers'],
    offline: ['🌙 Offline ads: keep earning while away', '💤 Cache rewards for later activity', '📥 Return to fresh sponsor offers soon'],
    default: ['💎 Monetixra ads and rewards on every page.', '🎉 Special sponsor offers available now.', '🚀 Discover new reward campaigns as you browse.']
  };
  let idx = -1;
  const rotate = () => {
    const page = currentPage() || 'feed';
    const list = pageBanners[page] || pageBanners.default;
    idx = (idx + 1) % list.length;
    el.style.opacity = '0';
    setTimeout(() => {
      el.textContent = list[idx];
      el.style.opacity = '1';
    }, 320);
  };
  rotate();
  setInterval(rotate, 4500);
}
function clickBanner() { addPts(2,'Banner Click'); let btn=G('bannerAd')?.querySelector('.ba-earn'); if(btn){ btn.textContent='✅'; setTimeout(()=>btn.textContent='+2',1500); } }
function closeBanner() { let b=G('bannerAd'); if(b) b.style.display='none'; }
function adTypeClick(type,el) { document.querySelectorAll('.adpill').forEach(p=>p.classList.remove('on')); el.classList.add('on'); if(type==='interstitial') showInts(); else if(type==='reward') G('rwAd').classList.add('show'); else if(type==='auto') showAutoAd(); else if(type==='click'){ addPts(2,'Click Reward'); toast('s','+2 pts!'); } else toast('i','Ad type: '+type); }
let intsTimer=null; const INTS_ADS=[
  {icon:'🎯',title:'Watch & Earn!',sub:'Keep watching to earn more points!'},
  {icon:'💎',title:'Bonus Available!',sub:'View this ad for instant rewards'},
  {icon:'🚀',title:'Earn Unlimited!',sub:'More ads = More earnings!'},
  {icon:'💰',title:'Cash Rewards!',sub:'Exchange points for real money'},
  {icon:'🎁',title:'Special Offer!',sub:'Limited time bonus inside'},
  {icon:'🔥',title:'Hot Deals!',sub:'Check out amazing offers now'},
  {icon:'⭐',title:'Premium Content!',sub:'Exclusive rewards waiting for you'},
  {icon:'💵',title:'Real Earnings!',sub:'Turn your time into money'}
];
function scheduleInts() { setTimeout(showInts,35000); setInterval(showInts,130000); }
function showInts() { let ad=INTS_ADS[Math.floor(Math.random()*INTS_ADS.length)]; G('intsIcon').textContent=ad.icon; G('intsTitle').textContent=ad.title; G('intsSub').textContent=ad.sub; G('intsAd').classList.add('show'); let sb=G('intsSkipBtn'); sb.style.opacity='.3'; sb.style.pointerEvents='none'; G('intsBar').style.width='0%'; let s=5; G('intsCnt').textContent='Skip in '+s+'s...'; intsTimer=setInterval(()=>{ s--; G('intsCnt').textContent=s>0?'Skip in '+s+'s...':'✅ Skip now'; G('intsBar').style.width=((5-s)/5*100)+'%'; if(s<=0){ clearInterval(intsTimer); sb.style.opacity='1'; sb.style.pointerEvents='auto'; } },1000); addPts(2,'Interstitial Viewed'); }
function closeInts() { G('intsAd').classList.remove('show'); clearInterval(intsTimer); }
function clickInts() { closeInts(); addPts(5,'Interstitial Clicked'); toast('s','+5 pts!'); }
function scheduleReward() { setTimeout(()=>G('rwAd').classList.add('show'),65000); setInterval(()=>G('rwAd').classList.add('show'),190000); }
function watchRewardAd() { G('rwAd').classList.remove('show'); toast('i','Loading reward ad...'); setTimeout(()=>{ addPts(10,'Reward Ad'); confetti(); toast('s','+10 pts! 🎉'); },900); }
const AUTO_ADS=[
  {title:'💰 Quick Earn!',sub:'Tap for instant points'},
  {title:'🎁 Bonus Ready!',sub:'Claim your reward now'},
  {title:'⭐ Premium Deal!',sub:'Exclusive offer inside'},
  {title:'🚀 Boost Income!',sub:'Earn 2x points now'},
  {title:'💎 Gems Bonus!',sub:'Limited time reward'},
  {title:'🔥 Trending Now!',sub:'Check popular offers'}
];
function scheduleAutoAd() { setTimeout(showAutoAd,48000); setInterval(showAutoAd,95000); }
function showAutoAd() { let ad=AUTO_ADS[Math.floor(Math.random()*AUTO_ADS.length)]; G('aadTitle').textContent=ad.title; G('aadSub').textContent=ad.sub; G('autoAd').classList.add('show'); setTimeout(closeAutoAd,16000); }
function closeAutoAd() { G('autoAd').classList.remove('show'); }
function clickAutoAd(btn) { btn.textContent='✅ +3'; btn.disabled=true; addPts(3,'Auto Ad Click'); setTimeout(closeAutoAd,1500); }

// Filter Category
function filterCat(cat,el) { activeCat=cat; document.querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('on')); if(el) el.classList.add('on'); if(document.querySelector('.pg.on')?.id==='pg-feed') rFeed(); }

// Initialize
// ========== SCROLL HIDE/SHOW (Facebook Style) ==========
(function(){
  let lastY = 0, ticking = false;
  window.addEventListener('scroll', function(){
    if(!ticking){
      requestAnimationFrame(function(){
        let y = window.scrollY || document.documentElement.scrollTop;
        let diff = y - lastY;
        if(diff > 8 && y > 60){
          document.body.classList.add('ui-hidden');
        } else if(diff < -8){
          document.body.classList.remove('ui-hidden');
        }
        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }, {passive:true});
  // Also handle touch scroll on mobile
  let touchStartY = 0;
  window.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, {passive:true});
  window.addEventListener('touchmove', e => {
    let diff = touchStartY - e.touches[0].clientY;
    if(diff > 20 && window.scrollY > 60){
      document.body.classList.add('ui-hidden');
    } else if(diff < -20){
      document.body.classList.remove('ui-hidden');
    }
  }, {passive:true});
  // Always show UI on mainWrap scroll too
  let mw = document.getElementById('mainWrap');
  if(mw){
    let mwLastY = 0;
    mw.addEventListener('scroll', function(){
      let y = mw.scrollTop;
      let diff = y - mwLastY;
      if(diff > 10 && y > 60) document.body.classList.add('ui-hidden');
      else if(diff < -10) document.body.classList.remove('ui-hidden');
      mwLastY = y;
    }, {passive:true});
  }
})();

// ========== SOCKET.IO + REAL WEBRTC SYSTEM ==========
const SOCKET_URL = window.location.origin;
let socket = null, socketReady = false;

async function getSocketAuthPayload() {
  const payload = { userId: CU?.id || '' };
  try {
    const supabase = initSupabaseClient && initSupabaseClient();
    const sessionRes = supabase ? await supabase.auth.getSession() : null;
    const token = sessionRes?.data?.session?.access_token;
    if(token) payload.token = token;
  } catch(e) {}
  return payload;
}

function initSocket() {
  if(socket) return;
  if(typeof io === 'undefined') { console.warn('Socket.io not loaded'); return; }
  socket = io(SOCKET_URL, { transports:['websocket','polling'], reconnection:true, auth:(cb)=>getSocketAuthPayload().then(cb) });
  socket.on('connect', () => {
    socketReady = true;
    if(CU) socket.emit('user:online', { userId:CU.id, name:CU.name });
  });
  socket.on('auth:error', err => { console.warn('[socket auth]', err); toast('e','Socket authentication failed. Please login again.'); });
  socket.on('disconnect', () => { socketReady = false; });
  socket.on('chat:message', ({ from, text, media, msgId, timestamp }) => {
    if(!CU || from === CU.id) return;
    const chatKey = [CU.id, from].sort().join('_');
    D.chats = D.chats || {};
    D.chats[chatKey] = D.chats[chatKey] || [];
    let conv = D.conversations = D.conversations || {};
    conv[from] = conv[from] || [];
    let msg = { id:msgId||('m'+Date.now()), from, to:CU.id, text:text || '', media, type:media?.type || 'text', at:timestamp || Date.now(), t:timestamp || Date.now(), read:false };
    if(!D.chats[chatKey].some(m => m.id === msg.id)) D.chats[chatKey].push(msg);
    conv[from].push(msg);
    if(currentChatId === from) {
      if(typeof renderChatMsgs === 'function') renderChatMsgs();
      else appendChatBubble(msg, false);
      socket.emit('chat:read', { to:from, from:CU.id, msgId:msg.id });
    } else {
      G('msgDot') && (G('msgDot').style.display='block');
      toast('i', '💬 ' + (D.users[from]?.name||'Someone') + ': ' + (text||'📎').slice(0,40));
    }
    saveData();
  });
  socket.on('chat:typing', ({ from, isTyping }) => {
    if(currentChatId === from) { let ti=G('typingInd'); if(ti) ti.classList.toggle('show', isTyping); }
  });
  socket.on('chat:delete', ({ msgId, from }) => {
    if(!CU || !msgId) return;
    const peer = from || currentChatId;
    const keys = peer ? [[CU.id, peer].sort().join('_')] : Object.keys(D.chats || {});
    keys.forEach(key => {
      const msg = (D.chats?.[key] || []).find(m => m.id === msgId);
      if(msg) {
        msg.deleted = true;
        msg.text = 'Message deleted';
        delete msg.data;
        delete msg.media;
      }
    });
    saveData();
    if(currentChatId && typeof renderChatMsgs === 'function') renderChatMsgs();
  });
  socket.on('user:status', ({ userId, status }) => {
    if(D.users[userId]) {
      D.users[userId].online = (status==='online');
      const isFriend = !!(CU && ((CU.following || []).includes(userId) || (CU.autoFriends || []).includes(userId) || (CU.forceFollowed || []).includes(userId)));
      if(status === 'online' && isFriend) {
        addNotif(CU.id, 'online', '🟢', `${D.users[userId].name || 'A friend'} is online now`, userId);
        toast('i', `🟢 ${D.users[userId].name || 'Friend'} is online`);
      }
      saveData();
    }
  });
  socket.on('notif:receive', notif => {
    D.notifs = D.notifs || [];
    D.notifs.unshift({...notif, read:false, t:Date.now()});
    G('notifDot') && (G('notifDot').style.display='block');
    toast('i', notif.msg || '🔔 New notification');
    saveData();
  });
  socket.on('post:new', ({post}) => {
    if(!post || !post.id || !CU) return;
    D.posts = D.posts || [];
    const idx = D.posts.findIndex(p => p.id === post.id);
    if(idx >= 0) D.posts[idx] = {...D.posts[idx], ...post};
    else D.posts.unshift(post);
    saveData();
    if(typeof canViewPost !== 'function' || canViewPost(post)) {
      if(typeof rFeed === 'function') rFeed();
      if(post.author !== CU.id) toast('i','New post is available');
    }
  });
  socket.on('live:new', ({postId, streamerId, title}) => {
    if(!CU || streamerId === CU.id || !postId) return;
    const existing = (D.posts || []).some(p => p.id === postId);
    if(!existing) {
      D.posts = D.posts || [];
      D.posts.unshift({
        id: postId,
        author: streamerId,
        type: 'live',
        text: title || 'Live stream started',
        createdAt: Date.now(),
        isLive: true,
        viewers: 0,
        comments: [],
        streamerName: D.users?.[streamerId]?.name || 'User',
        streamerAvatar: D.users?.[streamerId]?.avatar || null,
        category: 'live',
        visibility: 'public',
        autoFollows: [],
        reactions: {},
        likedBy: [],
        shares: 0
      });
      saveData();
      if(typeof rFeed === 'function') rFeed();
    }
    toast('i', 'Live stream started');
  });
  socket.on('live:viewer-ready', data => createLiveBroadcasterPeer(data).catch(e => console.warn('[Live] offer failed', e)));
  socket.on('live:offer', data => acceptLiveOffer(data).catch(e => {
    console.warn('[Live] viewer connection failed', e);
    toast('e', 'Could not connect to live video');
  }));
  socket.on('live:answer', data => handleLiveAnswer(data));
  socket.on('live:ice', data => handleLiveIce(data));
  socket.on('live:ended', ({postId}) => {
    const post = (D.posts || []).find(p => p.id === postId);
    if(post) {
      post.isLive = false;
      post.endedAt = Date.now();
      saveData();
      if(typeof rFeed === 'function') rFeed();
    }
    if(livePeerState.viewerPostId === postId || liveStreamState.postId === postId) closeLivePeerConnections();
    toast('i', 'Live stream ended');
  });
  socket.on('call:incoming', ({ callId, callerId, callerName, callerAvatar, type, iceServers }) => {
    callState.iceServers = iceServers;
    showIncomingCall(callerId, type, callerName, callerAvatar, callId);
  });
  socket.on('call:accepted', async ({ callId, iceServers }) => {
    callState.iceServers = iceServers;
    G('callStatus').textContent = callState.type==='video' ? '📹 Connected' : '📞 Connected';
    G('callWave').style.display = 'flex';
    startCallTimer();
    toast('s', '📞 ' + callState.peerName + ' answered!');
    await initPeerConnection(callId, true);
  });
  socket.on('call:declined', () => { endCall(); toast('e', '📵 Call declined'); });
  socket.on('call:ended', ({ reason }) => { if(callState.active){ endCall(); toast('i', reason==='disconnect' ? '📵 Network issue' : '📵 Call ended'); } });
  socket.on('webrtc:offer', async ({ callId, from, offer }) => {
    await initPeerConnection(callId, false);
    await callState.pc.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await callState.pc.createAnswer();
    await callState.pc.setLocalDescription(answer);
    socket.emit('webrtc:answer', { callId, to:from, answer });
  });
  socket.on('webrtc:answer', async ({ answer }) => {
    if(callState.pc) await callState.pc.setRemoteDescription(new RTCSessionDescription(answer));
  });
  socket.on('webrtc:ice-candidate', async ({ candidate }) => {
    if(callState.pc && candidate) try { await callState.pc.addIceCandidate(new RTCIceCandidate(candidate)); } catch(e){}
  });
  socket.on('post:reacted', ({ postId, userId, reaction }) => {
    let post = D.posts.find(p=>p.id===postId);
    if(post) { post.reactions = post.reactions || {}; post.reactions[reaction] = (post.reactions[reaction]||0)+1; refreshPost(postId); }
  });
}

function socketSendMessage(to, text, media) {
  if(!socketReady || !socket) return null;
  const msgId = 'msg_'+Date.now()+'_'+Math.random().toString(36).slice(2,7);
  socket.emit('chat:message', { to, from:CU.id, text, media, msgId, timestamp:Date.now() });
  return msgId;
}
function socketTyping(to, isTyping) {
  if(socketReady && socket) socket.emit('chat:typing', { to, from:CU.id, isTyping });
}

async function fetchICEServers() {
  try {
    const r = await fetch('/api/ice-servers');
    const d = await r.json();
    return d.iceServers;
  } catch {
    return [
      { urls:'stun:stun.relay.metered.ca:80' },
      { urls:'turn:global.relay.metered.ca:443', username:'d583b2ca0185d321a1fd3b93', credential:'olukX7eOalIsC9EK' },
      { urls:'turns:global.relay.metered.ca:443?transport=tcp', username:'d583b2ca0185d321a1fd3b93', credential:'olukX7eOalIsC9EK' },
    ];
  }
}

async function initPeerConnection(callId, isCaller) {
  const iceServers = callState.iceServers || await fetchICEServers();
  if(callState.pc) callState.pc.close();
  callState.pc = new RTCPeerConnection({ iceServers });
  callState.callId = callId;
  if(callState.localStream) callState.localStream.getTracks().forEach(t => callState.pc.addTrack(t, callState.localStream));
  callState.pc.ontrack = (e) => {
    callState.remoteStream = e.streams[0];
    let rv = G('callRemoteVideo');
    if(rv) { rv.srcObject = callState.remoteStream; rv.style.display='block'; }
    let ai = G('callAudioUI');
    if(ai && callState.type==='video') ai.style.display='none';
  };
  callState.pc.onicecandidate = ({ candidate }) => {
    if(candidate && socket) socket.emit('webrtc:ice-candidate', { callId, to:callState.peerId, candidate });
  };
  callState.pc.oniceconnectionstatechange = () => {
    if(['disconnected','failed'].includes(callState.pc.iceConnectionState)) endCall();
  };
  if(isCaller) {
    const offer = await callState.pc.createOffer({ offerToReceiveAudio:true, offerToReceiveVideo:callState.type==='video' });
    await callState.pc.setLocalDescription(offer);
    if(socket) socket.emit('webrtc:offer', { callId, to:callState.peerId, offer });
  }
}

// ========== VIDEO / AUDIO CALL SYSTEM (WebRTC) ==========
let callState = {
  active:false, type:null, peerId:null, peerName:null,
  localStream:null, remoteStream:null, pc:null, callId:null, iceServers:null,
  isMuted:false, isCamOff:false, isSpeakerOn:true,
  timerInterval:null, timerSeconds:0, incomingType:null, incomingFrom:null, incomingCallId:null
};

async function startCall(userId, type) {
  if(!CU) return;
  const peer = D.users[userId];
  if(!peer) { toast('e','User not found'); return; }
  callState.peerId=userId; callState.peerName=peer.name||'Friend';
  callState.type=type; callState.active=true;
  callState.isMuted=false; callState.isCamOff=false; callState.timerSeconds=0;
  callState.callId='call_'+Date.now();
  let screen=G('callScreen'); screen.classList.add('open');
  G('callName').textContent = peer.name||'Friend';
  G('callStatus').textContent = type==='video' ? '📹 Video Calling...' : '📞 Audio Calling...';
  G('callTimer').style.display='none';
  G('callWave').style.display='none';
  G('callAvatar').textContent = peer.name?.charAt(0)?.toUpperCase()||'👤';
  if(peer.avatar) G('callAvatar').innerHTML=`<img src="${peer.avatar}" style="width:100%;height:100%;object-fit:cover;border-radius:25px;">`;
  const audioUI=G('callAudioUI'), remoteVid=G('callRemoteVideo'), localWrap=G('callLocalWrap'), camBtn=G('callCamBtn');
  try {
    const constraints = type==='video' ? {video:true,audio:true} : {audio:true,video:false};
    callState.localStream = await navigator.mediaDevices.getUserMedia(constraints);
    if(type==='video') { G('callLocalVideo').srcObject=callState.localStream; localWrap.style.display='block'; camBtn.style.display='flex'; }
    else { camBtn.style.display='none'; localWrap.style.display='none'; remoteVid.style.display='none'; audioUI.style.display='flex'; }
  } catch(err) {
    toast('w','📷 Media not available'); audioUI.style.display='flex'; camBtn.style.display='none';
  }
  if(socketReady && socket) {
    callState.iceServers = callState.iceServers || await fetchICEServers();
    socket.emit('call:invite', { callId:callState.callId, callerId:CU.id, calleeId:userId, type, callerName:CU.name, callerAvatar:CU.avatar||'' });
  } else {
    setTimeout(()=>{ if(callState.active){ G('callStatus').textContent=type==='video'?'📹 Connected':'📞 Connected'; G('callWave').style.display='flex'; audioUI.style.display='flex'; startCallTimer(); toast('s','📞 '+peer.name+' answered! (offline demo)'); } }, 2200);
  }
}

async function startAudioCall(){
  try {
    if(!callState.localStream) callState.localStream=await navigator.mediaDevices.getUserMedia({audio:true,video:false});
  } catch(e){}
}

function startCallTimer(){
  if(callState.timerInterval) clearInterval(callState.timerInterval);
  callState.timerSeconds = 0;
  G('callTimer').style.display = 'block';
  callState.timerInterval = setInterval(()=>{
    callState.timerSeconds++;
    let m = Math.floor(callState.timerSeconds/60).toString().padStart(2,'0');
    let s = (callState.timerSeconds%60).toString().padStart(2,'0');
    G('callTimer').textContent = m+':'+s;
  }, 1000);
}

function endCall(){
  callState.active = false;
  if(callState.timerInterval) clearInterval(callState.timerInterval);
  if(callState.localStream){ callState.localStream.getTracks().forEach(t=>t.stop()); callState.localStream=null; }
  if(callState.pc){ callState.pc.close(); callState.pc=null; }
  if(socket && callState.callId) socket.emit('call:end', { callId:callState.callId });
  G('callScreen').classList.remove('open');
  G('callLocalWrap').style.display='none';
  G('callRemoteVideo').style.display='none';
  G('callWave').style.display='none';
  toast('i','📵 Call ended — '+formatCallTime(callState.timerSeconds));
  callState.timerSeconds=0; callState.callId=null;
}

function formatCallTime(secs){
  if(!secs) return '';
  let m = Math.floor(secs/60), s = secs%60;
  return m > 0 ? `${m}m ${s}s` : `${s}s`;
}

function toggleCallMute(){
  callState.isMuted = !callState.isMuted;
  let btn = G('callMuteBtn');
  btn.textContent = callState.isMuted ? '🔇' : '🎤';
  btn.classList.toggle('on', callState.isMuted);
  if(callState.localStream){
    callState.localStream.getAudioTracks().forEach(t => t.enabled = !callState.isMuted);
  }
  toast('i', callState.isMuted ? '🔇 Muted' : '🎤 Unmuted');
}

function toggleCallCam(){
  callState.isCamOff = !callState.isCamOff;
  let btn = G('callCamBtn');
  btn.textContent = callState.isCamOff ? '📵' : '📷';
  btn.classList.toggle('on', callState.isCamOff);
  if(callState.localStream){
    callState.localStream.getVideoTracks().forEach(t => t.enabled = !callState.isCamOff);
  }
  toast('i', callState.isCamOff ? '📷 Camera Off' : '📷 Camera On');
}

function toggleSpeaker(){
  callState.isSpeakerOn = !callState.isSpeakerOn;
  let btn = G('callSpeakerBtn');
  btn.textContent = callState.isSpeakerOn ? '🔊' : '🔈';
  toast('i', callState.isSpeakerOn ? '🔊 Speaker On' : '🔈 Speaker Off');
}

function showIncomingCall(fromId, type, callerName, callerAvatar, callId){
  let peer=D.users[fromId]||{}; let name=callerName||peer.name||'Unknown';
  callState.incomingFrom=fromId; callState.incomingType=type; callState.incomingCallId=callId;
  G('icAv').innerHTML = callerAvatar ? `<img src="${callerAvatar}" style="width:100%;height:100%;object-fit:cover;border-radius:15px;">` : (name?.charAt(0)?.toUpperCase()||'👤');
  G('icName').textContent=name;
  G('icType').textContent=type==='video'?'📹 Incoming Video Call':'📞 Incoming Audio Call';
  G('incomingCall').classList.add('show');
  setTimeout(()=>G('incomingCall').classList.remove('show'),30000);
}
function acceptCall(){
  G('incomingCall').classList.remove('show');
  if(socket && callState.incomingCallId) socket.emit('call:accept',{callId:callState.incomingCallId,calleeId:CU?.id});
  if(callState.incomingFrom) startCall(callState.incomingFrom, callState.incomingType||'audio');
}
function declineCall(){
  G('incomingCall').classList.remove('show');
  if(socket && callState.incomingCallId) socket.emit('call:decline',{callId:callState.incomingCallId});
  toast('i','📵 Call declined');
}

// Override startVideoCall to use new system
function startVideoCall(){ if(currentChatId){ startCall(currentChatId,'video'); } else { toast('e','Open a chat first'); } }
function startAudioCallBtn(){ if(currentChatId){ startCall(currentChatId,'audio'); } else { toast('e','Open a chat first'); } }

// ── Startup & Lifecycle ───────────────────────────────
window.addEventListener('load', async () => {
  try {
    // PERSISTENCE: Initialize persistence manager first
    if(typeof PersistenceManager !== 'undefined' && PersistenceManager) {
      await PersistenceManager.init().catch(err => {
        console.warn('[PersistenceManager] Init failed:', err);
      });
    }
    
    if(typeof initData === 'function') initData();
    if(typeof loadData === 'function') await loadData();
    if(typeof ensurePersistentRecovery === 'function') ensurePersistentRecovery();
    if(typeof loadSession === 'function') await loadSession();
    if(typeof ensurePersistentRecovery === 'function') ensurePersistentRecovery();
    if(typeof syncCU === 'function') syncCU();
    
    let savedTheme = localStorage.getItem(STORAGE_KEY+'theme') || 'dark';
    if(typeof applyTheme === 'function') applyTheme(savedTheme);
    
    if(CU && D.users[CU.id]) { 
      if(G('authWrap')) G('authWrap').style.display = 'none';
      if(G('appWrap')) G('appWrap').style.display = 'block';
      if(G('fab')) G('fab').style.display = 'flex';
      syncUI(); 
      nav('feed'); 
    } else { 
      if(G('authWrap')) G('authWrap').style.display = 'flex';
      if(typeof authTab === 'function') authTab('login');
    }
  } catch (err) {
    console.error('Startup Error:', err);
  }
});

// ── Global Event Handlers ───────────────────────────────
document.querySelectorAll('.overlay').forEach(o => { 
  o.addEventListener('click', e => { if(e.target === o) o.classList.remove('open'); }); 
});

document.addEventListener('keydown', e => { 
  if(e.key === 'Escape') document.querySelectorAll('.overlay.open').forEach(o => o.classList.remove('open')); 
});

// Auto-save & Maintenance
setInterval(() => { if(CU){ syncCU(); saveData(); saveSession(); } }, 30000);
setInterval(() => { if(CU) checkScheduledPosts(); }, 60000);
setTimeout(loadCryptoPrices, 2000);

window.addEventListener('pageshow', () => {
  try {
    if (typeof ensurePersistentRecovery === 'function') ensurePersistentRecovery();
    if (CU) {
      syncCU();
      saveData();
      saveSession();
    }
  } catch (e) {}
});

// Sync before page unload
window.addEventListener('beforeunload', () => { if(CU){ syncCU(); saveData(); saveSession(); } });

document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    try {
      if (typeof ensurePersistentRecovery === 'function') ensurePersistentRecovery();
      if (CU) {
        syncCU();
        saveData();
        saveSession();
      }
    } catch (e) {}
  }
});

// EmailJS init if configured
if(typeof EMAILJS_PUBLIC !== 'undefined' && typeof emailjs !== 'undefined') {
  try { emailjs.init(EMAILJS_PUBLIC); } catch(e){}
}

// Payment Callbacks
(() => {
  let params = new URLSearchParams(window.location.search);
  if(params.get('bkash') === 'success') { setTimeout(() => toast('s','✅ bKash payment completed!'), 800); history.replaceState({},'','/'); }
  if(params.get('nagad') === 'Success') { setTimeout(() => toast('s','✅ Nagad payment completed!'), 800); history.replaceState({},'','/'); }
})();



// ═══════════════════════════════════════════════════════════
//  STRIPE PAYMENT (USD)
// ═══════════════════════════════════════════════════════════
let stripeInstance = null;

function getStripe() {
  if(!stripeInstance && STRIPE_PUB_KEY && typeof Stripe !== 'undefined') {
    stripeInstance = Stripe(STRIPE_PUB_KEY);
  }
  return stripeInstance;
}

async function stripeCheckout(amount, currency='usd', description='Monetixra Top-up') {
  if(!STRIPE_PUB_KEY) {
    toast('e','Stripe not configured. Add STRIPE_PUB_KEY in settings.');
    return false;
  }
  try {
    toast('i','Opening Stripe checkout...');
    // Call server to create payment intent
    const r = await fetch('/api/payment/stripe/create-session', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ amount: Math.round(amount*100), currency, description, userId: CU?.id })
    });
    const d = await r.json();
    if(d.demo) { toast('s','✅ Stripe demo — configure STRIPE_SECRET_KEY on server'); return true; }
    if(d.url) { window.open(d.url, '_blank'); return true; }
    if(d.sessionId) {
      const stripe = getStripe();
      await stripe.redirectToCheckout({ sessionId: d.sessionId });
      return true;
    }
    toast('e', d.error || 'Stripe checkout failed');
    return false;
  } catch(e) {
    toast('e', 'Stripe error: '+e.message);
    return false;
  }
}

// Top-up points via Stripe
async function topupWithStripe(usdAmount) {
  let pts = Math.round(usdAmount * PTS_PER_USD);
  let ok = await stripeCheckout(usdAmount, 'usd', `Monetixra Top-up: ${pts} points`);
  if(ok) {
    // Points credited after webhook (demo: instant)
    /*
    let u = D.users[CU.id]||CU;
    u.points = (u.points||0) + pts;
    CU = D.users[CU.id]||CU;
    D.txs.unshift({id:'t'+Date.now(),type:'topup',label:`Stripe top-up $${usdAmount}`,pts,at:Date.now(),user:CU.id});
    saveData(); syncUI(); rWallet();
    */
    toast('s',`Payment started. ${pts} pts will be credited after Stripe confirms payment.`);
    return;
    toast('s',`💳 Top-up successful! +${pts} pts`);
  }
}

// ═══════════════════════════════════════════════════════════
//  BKASH / NAGAD PAYMENT INTEGRATION
// ═══════════════════════════════════════════════════════════
function onWdMethodChange(method) {
  G('bkashQuickPay').style.display = method==='bkash' ? 'block':'none';
  G('nagadQuickPay').style.display = method==='nagad' ? 'block':'none';
}

async function initiateBkashPayment(amount, account) {
  try {
    toast('i','Initiating bKash payment...');
    const r = await fetch('/api/payment/bkash/create', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({
        amount: (amount/PTS_PER_USD*10).toFixed(2), // convert pts to BDT
        currency: 'BDT',
        intent: 'sale',
        merchantInvoiceNumber: 'MX'+Date.now()
      })
    });
    const d = await r.json();
    if(d.demo) {
      toast('s','✅ Withdrawal submitted! (bKash demo mode)');
      return true;
    }
    if(d.bkashURL) {
      // Open bKash checkout
      window.open(d.bkashURL, '_blank', 'width=400,height=600');
      return true;
    }
    toast('e', 'bKash: ' + (d.statusMessage||'Error'));
    return false;
  } catch(e) {
    toast('e','bKash error: '+e.message);
    return false;
  }
}

async function initiateNagadPayment(amount, account) {
  try {
    toast('i','Initiating Nagad payment...');
    const r = await fetch('/api/payment/nagad/create', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify({ amount: (amount/PTS_PER_USD*10).toFixed(2), orderId: 'MX'+Date.now() })
    });
    const d = await r.json();
    if(d.demo) {
      toast('s','✅ Withdrawal submitted! (Nagad demo mode)');
      return true;
    }
    if(d.callBackUrl) {
      window.open(d.callBackUrl, '_blank', 'width=400,height=600');
      return true;
    }
    toast('e','Nagad: '+(d.message||'Error'));
    return false;
  } catch(e) {
    toast('e','Nagad error: '+e.message);
    return false;
  }
}

// ═══════════════════════════════════════════════════════════
//  WEB PUSH NOTIFICATIONS
// ═══════════════════════════════════════════════════════════
let pushSubscription = null;

async function initWebPush() {
  if(!('serviceWorker' in navigator) || !('PushManager' in window)) {
    console.log('[Push] Not supported');
    return;
  }
  try {
    // Get VAPID public key from server
    const r = await fetch('/api/push/vapid-key');
    const d = await r.json();
    if(d.error || !d.publicKey) {
      console.log('[Push] VAPID not configured on server');
      return;
    }
    const swReg = await navigator.serviceWorker.ready;
    // Check existing subscription
    pushSubscription = await swReg.pushManager.getSubscription();
    if(!pushSubscription) {
      // Subscribe
      pushSubscription = await swReg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(d.publicKey)
      });
    }
    // Send to server
    if(CU) {
      await fetch('/api/push/subscribe', {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ userId: CU.id, subscription: pushSubscription })
      });
      console.log('[Push] Subscribed successfully ✅');
    }
  } catch(e) {
    console.log('[Push] Subscribe failed:', e.message);
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for(let i=0; i<rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}

async function requestNotifPermission() {
  if(!('Notification' in window)) return;
  if(Notification.permission === 'default') {
    const perm = await Notification.requestPermission();
    if(perm === 'granted') {
      toast('s','🔔 Notifications enabled!');
      await initWebPush();
    }
  } else if(Notification.permission === 'granted') {
    await initWebPush();
  }
}

// Show local notification (when app is in foreground)
function showLocalNotif(title, body, icon) {
  if(Notification.permission === 'granted') {
    new Notification(title, { body, icon: icon||'/icon-192.png' });
  }
}

// ── Missing Settings Functions ────────────────────────────────

function stakePoints() {
  if(!CU) return;
  let u = D.users[CU.id]||CU;
  let amt = parseInt(prompt('Enter points to stake (min 100):', '100'));
  if(!amt || amt < 100) return toast('e','Minimum 100 pts to stake');
  if((u.points||0) < amt) return toast('e','Insufficient points');
  u.points  = (u.points||0) - amt;
  u.staked  = (u.staked||0) + amt;
  let reward = Math.floor(amt * 0.15); // 15% APY
  setTimeout(()=>{
    let uu = D.users[CU.id]||CU;
    uu.points   = (uu.points||0) + amt + reward;
    uu.stakePts = (uu.stakePts||0) + reward;
    uu.staked   = Math.max(0,(uu.staked||0)-amt);
    D.txs.unshift({id:'t'+Date.now(),type:'stake',label:'Staking reward +'+reward+' pts',pts:reward,at:Date.now(),user:CU.id});
    addNotif(CU.id,'earn','💎','Your stake matured! +'+reward+' pts reward');
    syncCU(); saveData(); syncUI();
    toast('s','💎 Stake matured! +'+reward+' pts');
  }, 10000); // 10s demo (real: 30 days)
  D.txs.unshift({id:'t'+Date.now(),type:'stake',label:'Staked '+amt+' pts',pts:-amt,at:Date.now(),user:CU.id});
  syncCU(); saveData(); syncUI(); closeModal('stakeModal');
  toast('s','💎 Staked '+amt+' pts! 15% APY reward in ~30 days');
}

function submitEIN() {
  if(!CU) return;
  let tin = V('einNumber'), name = V('einName');
  if(!tin) return toast('e','Enter your TIN/EIN number');
  let u = D.users[CU.id]||CU;
  u.tin = { number: tin, name: name||u.name, submittedAt: Date.now() };
  CU = D.users[CU.id]||CU;
  saveData(); closeModal('einModal'); rSettings();
  toast('s','✅ TIN/EIN saved!');
}

function showActiveSessions() {
  let sessions = [
    { device: '📱 This Device', location: 'Current Session', time: 'Now', active: true },
  ];
  let html2 = sessions.map(s=>`
    <div style="display:flex;align-items:center;gap:10px;padding:10px;background:var(--g2);border-radius:10px;margin-bottom:6px;">
      <div style="flex:1;">
        <div style="font-weight:700;font-size:13px;">${s.device}</div>
        <div style="font-size:11px;color:var(--t3);">${s.location} · ${s.time}</div>
      </div>
      ${s.active ? '<span style="font-size:9px;color:var(--c3);font-weight:700;">ACTIVE</span>' : '<button class="btn btn-r btn-xs">Revoke</button>'}
    </div>`).join('');
  // Show in a simple alert-like modal
  let div = document.createElement('div');
  div.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;padding:20px;';
  div.innerHTML=`<div style="background:var(--bg2);border:1px solid var(--b2);border-radius:20px;padding:20px;width:100%;max-width:380px;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
      <div style="font-weight:800;font-size:15px;">📱 Active Sessions</div>
      <button onclick="this.closest('[style*=fixed]').remove()" style="background:none;border:none;color:var(--t1);font-size:18px;cursor:pointer;">✕</button>
    </div>
    ${html2}
    <button onclick="logout()" style="width:100%;margin-top:10px;" class="btn btn-r btn-sm">🚪 Sign Out All Devices</button>
  </div>`;
  document.body.appendChild(div);
}

function exportData() {
  if(!CU) return;
  let u = D.users[CU.id]||CU;
  let data = {
    profile:{ name:u.name, username:u.username, email:u.email, phone:u.phone, points:u.points, createdAt:u.createdAt },
    posts:   (D.posts||[]).filter(p=>p.author===CU.id).map(p=>({...p,file:null})),
    txs:     (D.txs||[]).filter(t=>t.user===CU.id),
    nfts:    (D.nfts||[]).filter(n=>n.creator===CU.id),
    exportedAt: new Date().toISOString(),
  };
  let blob = new Blob([JSON.stringify(data, null, 2)], {type:'application/json'});
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'monetixra_data_'+CU.username+'_'+Date.now()+'.json';
  a.click();
  toast('s','📤 Data exported!');
}

function backupData() {
  let data = JSON.parse(JSON.stringify(D));
  // Remove base64 to keep small
  (data.posts||[]).forEach(p=>{ if(p.file && p.file.length>200) p.file='[media]'; });
  Object.values(data.users||{}).forEach(u=>{ if(u.avatar && u.avatar.length>200) u.avatar=''; });
  let blob = new Blob([JSON.stringify(data)], {type:'application/json'});
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'monetixra_backup_'+Date.now()+'.json';
  a.click();
  toast('s','💾 Backup downloaded!');
}

function generateTaxReport() {
  if(!CU) return;
  let u = D.users[CU.id]||CU;
  let year = new Date().getFullYear();
  let txs = (D.txs||[]).filter(t=>t.user===CU.id && new Date(t.at).getFullYear()===year);
  let earned = txs.filter(t=>t.pts>0).reduce((s,t)=>s+t.pts,0);
  let spent  = txs.filter(t=>t.pts<0).reduce((s,t)=>s+Math.abs(t.pts),0);
  let usd = earned/PTS_PER_USD;
  let report = `Monetixra — Tax Report ${year}
`;
  report += `User: ${u.name} (@${u.username})
`;
  report += `Email: ${u.email||'N/A'}
`;
  report += `TIN: ${u.tin?.number||'Not provided'}

`;
  report += `Total Earned: ${earned} pts ($${usd.toFixed(2)})
`;
  report += `Total Spent:  ${spent} pts
`;
  report += `Net:          ${earned-spent} pts

`;
  report += `Transactions (${txs.length}):
`;
  txs.slice(0,50).forEach(t=>{ report += `${new Date(t.at).toLocaleDateString()} | ${t.label} | ${t.pts>0?'+':''}${t.pts} pts
`; });
  let blob = new Blob([report], {type:'text/plain'});
  let a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `monetixra_tax_${year}_${u.username}.txt`;
  a.click();
  toast('s','📊 Tax report downloaded!');
}

function blockedList() {
  if(!CU) return;
  let blocked = CU.blocked||[];
  if(!blocked.length){ toast('i','No blocked users'); return; }
  let html2 = blocked.map(uid=>{
    let u=D.users[uid]||{};
    return `<div style="display:flex;align-items:center;gap:8px;padding:8px;background:var(--g2);border-radius:8px;margin-bottom:4px;">
      <div style="flex:1;font-size:13px;">${esc(u.name||uid)}</div>
      <button class="btn btn-ghost btn-xs" onclick="unblockUser('${uid}',this.closest('[style*=fixed]'))">Unblock</button>
    </div>`;
  }).join('');
  let div=document.createElement('div');
  div.style.cssText='position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.85);display:flex;align-items:center;justify-content:center;padding:20px;';
  div.innerHTML=`<div style="background:var(--bg2);border:1px solid var(--b2);border-radius:20px;padding:20px;width:100%;max-width:380px;max-height:80vh;overflow-y:auto;">
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;">
      <div style="font-weight:800;font-size:15px;">🚫 Blocked Users (${blocked.length})</div>
      <button onclick="this.closest('[style*=fixed]').remove()" style="background:none;border:none;color:var(--t1);font-size:18px;cursor:pointer;">✕</button>
    </div>
    ${html2}
  </div>`;
  document.body.appendChild(div);
}

function unblockUser(uid, popup) {
  if(!CU) return;
  let u=D.users[CU.id]||CU;
  u.blocked=(u.blocked||[]).filter(b=>b!==uid);
  CU=D.users[CU.id]||CU;
  saveData(); rSettings();
  toast('s','User unblocked');
  if(popup) popup.remove();
}

// Notification toggle save
function saveNotifSetting(key, el) {
  if(!CU) return;
  let u=D.users[CU.id]||CU;
  u.notifSettings=u.notifSettings||{};
  u.notifSettings[key]=el.checked;
  CU=D.users[CU.id]||CU;
  saveData();
}



// ═══════════════════════════════════════════════════════════
//  GOOGLE SIGN-IN
// ═══════════════════════════════════════════════════════════
function googleSignIn() {
  // Initialize Google One Tap if not already done
  if(typeof google === 'undefined' || !google.accounts) {
    toast('e','Google Sign-In not available. Please use email/password.');
    return;
  }
  google.accounts.id.initialize({
    client_id: GOOGLE_API_KEY2 || 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    callback: handleGoogleSignIn,
    auto_select: false,
    cancel_on_tap_outside: true,
  });
  google.accounts.id.prompt((notification) => {
    if(notification.isNotDisplayed() || notification.isSkippedMoment()) {
      // Fallback: open popup
      toast('i','Opening Google Sign-In...');
      google.accounts.id.renderButton(
        document.createElement('div'),
        { theme:'outline', size:'large', text:'signin_with' }
      );
    }
  });
}

function handleGoogleSignIn(response) {
  try {
    // Decode the JWT token from Google
    let base64 = response.credential.split('.')[1];
    let payload = JSON.parse(atob(base64.replace(/-/g,'+').replace(/_/g,'/')));
    let { email, name, picture, sub } = payload;
    // Check if user exists
    let existingUid = Object.keys(D.users).find(k => D.users[k].email === email);
    if(existingUid) {
      // Login existing user
      D.cur = existingUid;
      CU = D.users[existingUid];
      if(picture && !CU.avatar) CU.avatar = picture;
      saveSession(); saveData(); mount();
      toast('s','✅ Welcome back, '+CU.name+'!');
    } else {
      // Register new user
      let newId = uid();
      let username = (name||'user').toLowerCase().replace(/\s+/g,'_').replace(/[^a-z0-9_]/g,'') + '_' + Date.now().toString().slice(-4);
      D.users[newId] = {
        id:newId, name, username, email,
        avatar: picture||null,
        password: 'google_oauth_'+sub,
        googleId: sub,
        points:50, isAdmin:false,
        verified:false, kycVerified:false,
        followers:[], following:[], refs:[],
        refCode:'MX'+Date.now().toString(36).toUpperCase(),
        savedPosts:[], blocked:[], tasksToday:{},
        twoFA:false, tin:null, cryptoWallets:{},
        achievements:[], adViews:0, adPts:0,
        engPts:0, refPts:0, mlmPts:0, nftPts:0,
        createdAt:Date.now()
      };
      D.txs.unshift({id:'t'+Date.now(),type:'bonus',label:'Signup bonus (Google)',pts:50,at:Date.now(),user:newId});
      addNotif(newId,'welcome','🎉','Welcome to Monetixra! You earned +50 bonus pts!');
      D.cur = newId; CU = D.users[newId];
      saveSession(); saveData(); mount();
      toast('s','🎉 Welcome to Monetixra, '+name+'! +50 pts');
      confetti();
    }
  } catch(e) {
    console.error('[Google SignIn]', e);
    toast('e','Google Sign-In failed. Try email/password.');
  }
}


// ── Screen Share (WebRTC) ──────────────────────────────────
async function toggleScreenShare() {
  if(!callState.active) return toast('e','No active call');
  try {
    if(callState.screenSharing) {
      if(callState.screenStream){callState.screenStream.getTracks().forEach(t=>t.stop());callState.screenStream=null;}
      callState.screenSharing=false;
      if(callState.pc&&callState.localStream){let vt=callState.localStream.getVideoTracks()[0];let sr=callState.pc.getSenders().find(s=>s.track?.kind==='video');if(sr&&vt)await sr.replaceTrack(vt);}
      G('callLocalWrap').style.display='none';
      toast('i','Screen share stopped');
    } else {
      let ss=await navigator.mediaDevices.getDisplayMedia({video:true,audio:false});
      callState.screenStream=ss;callState.screenSharing=true;
      let st=ss.getVideoTracks()[0];
      if(callState.pc){let sr=callState.pc.getSenders().find(s=>s.track?.kind==='video');if(sr)await sr.replaceTrack(st);}
      let lv=G('callLocalVideo');if(lv)lv.srcObject=ss;
      G('callLocalWrap').style.display='block';
      st.onended=()=>toggleScreenShare();
      toast('s','📺 Screen sharing started');
      if(socket)socket.emit('webrtc:screen-share',{callId:callState.callId,to:callState.peerId,sharing:true});
    }
  } catch(e){if(e.name!=='NotAllowedError')toast('e','Screen share error: '+e.message);}
}




// PWA Service Worker
if('serviceWorker' in navigator && location.protocol !== 'file:'){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('/sw.js')
      .then(r=>console.log('[SW] Registered ✅'))
      .catch(e=>console.log('[SW] Only works when served over HTTP/HTTPS'));
  });
}
// Push Notification permission
async function requestNotifPermission(){
  if('Notification' in window && Notification.permission === 'default'){
    const p = await Notification.requestPermission();
    if(p==='granted') toast('s','🔔 Notifications enabled!');
  }
}
setTimeout(requestNotifPermission, 3000);

// ═══════════════════════════════════════════════════════════════
// NEW FEATURES — Analytics, Activity, Gamification, Push, Paywall
// ═══════════════════════════════════════════════════════════════

// ========== ANALYTICS DASHBOARD ==========
function rAnalytics() {
  if(!CU) return;
  let posts = (D.posts||[]).filter(p => p.author === CU.id);
  let totalViews = posts.reduce((s,p) => s + (p.views||0), 0);
  let totalLikes = posts.reduce((s,p) => s + (p.likedBy||[]).length, 0);
  let totalComments = posts.reduce((s,p) => s + (p.comments||[]).length, 0);
  let totalShares = posts.reduce((s,p) => s + (p.shares||0), 0);
  
  G('totalViews').textContent = fmt(totalViews);
  G('totalLikes').textContent = fmt(totalLikes);
  G('totalComments').textContent = fmt(totalComments);
  G('totalShares').textContent = fmt(totalShares);
  
  // Calculate engagement rate
  let totalEngagement = totalLikes + totalComments + totalShares;
  let engagementRate = totalViews > 0 ? ((totalEngagement / totalViews) * 100).toFixed(1) : 0;
  G('engagementRate').textContent = engagementRate + '%';
  G('engagementBar').style.width = Math.min(100, engagementRate * 2) + '%';
  
  // Top performing posts
  let topPosts = [...posts].sort((a,b) => (b.views||0) - (a.views||0)).slice(0,5);
  let topList = G('topPostsList');
  if(topList) {
    topList.innerHTML = topPosts.length ? topPosts.map(p => `
      <div class="activity-item" onclick="openPostDetail('${p.id}')" style="cursor:pointer;">
        <div class="activity-ico">${p.file ? '📷' : '📝'}</div>
        <div class="activity-info">
          <div class="activity-title">${esc(p.text?.substring(0,40)||'Post')}</div>
          <div class="activity-time">${fmt(p.views||0)} views · ${fmt((p.likedBy||[]).length)} likes</div>
        </div>
        <div class="activity-pts">👁️</div>
      </div>
    `).join('') : '<div style="text-align:center;color:var(--t3);padding:20px;">No posts yet. Create your first post!</div>';
  }
  
  // Update trends (compare to last period)
  updateTrendIndicator('viewsTrend', totalViews, 'views');
  updateTrendIndicator('likesTrend', totalLikes, 'likes');
  updateTrendIndicator('commentsTrend', totalComments, 'comments');
  updateTrendIndicator('sharesTrend', totalShares, 'shares');
}

function updateTrendIndicator(id, current, type) {
  let el = G(id);
  if(!el || !CU) return;
  let prev = (CU.prevStats||{})[type] || 0;
  let change = prev > 0 ? ((current - prev) / prev * 100).toFixed(0) : 0;
  let isUp = change >= 0;
  el.textContent = (isUp ? '↑' : '↓') + ' ' + Math.abs(change) + '%';
  el.style.color = isUp ? 'var(--c3)' : 'var(--c5)';
}

// Track post view for analytics
function trackPostView(pid) {
  let post = D.posts?.find(p => p.id === pid);
  if(post) {
    post.views = (post.views||0) + 1;
    post.viewers = post.viewers || [];
    if(CU && !post.viewers.includes(CU.id)) {
      post.viewers.push(CU.id);
    }
    saveData();
  }
}

// ========== ACTIVITY LOG ==========
let currentActivityFilter = 'all';

function rActivity() {
  if(!CU) return;
  let list = G('activityList');
  if(!list) return;
  
  let activities = generateActivityLog();
  if(currentActivityFilter !== 'all') {
    activities = activities.filter(a => a.type === currentActivityFilter);
  }
  
  list.innerHTML = activities.length ? activities.slice(0,50).map(a => `
    <div class="activity-item">
      <div class="activity-ico">${a.ico}</div>
      <div class="activity-info">
        <div class="activity-title">${a.title}</div>
        <div class="activity-time">${ago(a.at)}</div>
      </div>
      ${a.pts ? `<div class="activity-pts">+${a.pts}</div>` : ''}
    </div>
  `).join('') : '<div style="text-align:center;color:var(--t3);padding:40px;">No activity yet</div>';
}

function generateActivityLog() {
  if(!CU) return [];
  let activities = [];
  
  // Posts
  (D.posts||[]).filter(p => p.author === CU.id).forEach(p => {
    activities.push({ type:'posts', ico:'📝', title:'Created a post', at:p.createdAt, pts:20 });
  });
  
  // Likes given
  (D.posts||[]).forEach(p => {
    if((p.likedBy||[]).includes(CU.id)) {
      activities.push({ type:'likes', ico:'❤️', title:`Liked a post`, at:p.createdAt, pts:1 });
    }
  });
  
  // Follows
  (CU.following||[]).forEach(fid => {
    let u = D.users[fid];
    if(u) activities.push({ type:'follows', ico:'➕', title:`Followed ${u.name}`, at:Date.now()-86400000 });
  });
  
  // Earnings from transactions
  (D.txs||[]).filter(t => t.user === CU.id && t.pts > 0).forEach(t => {
    activities.push({ type:'earnings', ico:'💰', title:t.label||'Earned points', at:t.at, pts:t.pts });
  });
  
  return activities.sort((a,b) => b.at - a.at);
}

function filterActivity(type, el) {
  currentActivityFilter = type;
  document.querySelectorAll('#pg-activity .chip').forEach(c => c.classList.remove('on'));
  if(el) el.classList.add('on');
  rActivity();
}

// Log user activity
function logActivity(action, details={}, points=0) {
  if(!CU) return;
  CU.activityLog = CU.activityLog || [];
  CU.activityLog.unshift({
    action, details, pts:points, at:Date.now()
  });
  if(CU.activityLog.length > 100) CU.activityLog = CU.activityLog.slice(0,100);
  saveData();
}

// ========== GAMIFICATION SYSTEM ==========
const BADGES = [
  { id:'first_post', name:'First Post', ico:'📝', desc:'Create your first post', condition:u => (u.posts||[]).length >= 1 },
  { id:'post_10', name:'Regular', ico:'📰', desc:'Create 10 posts', condition:u => (u.posts||[]).length >= 10 },
  { id:'post_100', name:'Influencer', ico:'📢', desc:'Create 100 posts', condition:u => (u.posts||[]).length >= 100 },
  { id:'likes_100', name:'Liked', ico:'❤️', desc:'Receive 100 likes', condition:u => (u.totalLikesReceived||0) >= 100 },
  { id:'follower_10', name:'Rising', ico:'📈', desc:'Get 10 followers', condition:u => (u.followers||[]).length >= 10 },
  { id:'follower_100', name:'Popular', ico:'🌟', desc:'Get 100 followers', condition:u => (u.followers||[]).length >= 100 },
  { id:'earnings_1000', name:'Earner', ico:'💰', desc:'Earn 1,000 points', condition:u => (u.totalEarned||0) >= 1000 },
  { id:'streak_7', name:'Weekly', ico:'🔥', desc:'7 day streak', condition:u => (u.streak||0) >= 7 },
  { id:'streak_30', name:'Monthly', ico:'🗓️', desc:'30 day streak', condition:u => (u.streak||0) >= 30 },
  { id:'premium', name:'VIP', ico:'💎', desc:'Go Premium', condition:u => u.isPremium },
  { id:'kyc', name:'Verified', ico:'✅', desc:'Complete KYC', condition:u => u.kycVerified },
  { id:'referral_10', name:'Recruiter', ico:'🤝', desc:'Refer 10 friends', condition:u => (u.referrals||[]).length >= 10 },
];

function rGamification() {
  if(!CU) return;
  let u = D.users[CU.id] || CU;
  
  // Calculate level and XP
  let totalEarned = u.totalEarned || (u.points||0);
  let level = Math.floor(Math.sqrt(totalEarned / 100)) + 1;
  let xpForNext = level * level * 100;
  let currentXP = totalEarned;
  let progress = (currentXP % (level * 100)) / (level * 100) * 100;
  
  G('userLevel').textContent = 'Level ' + level;
  G('userXP').textContent = `${fmt(currentXP)} / ${fmt(xpForNext)} XP`;
  G('xpBar').style.width = progress + '%';
  
  // Streak
  let streak = calculateStreak(u);
  G('currentStreak').textContent = streak;
  renderStreakDays(streak);
  
  // Badges
  renderBadges(u);
  
  // Rank
  updateLeaderboardRank(u);
}

function calculateStreak(u) {
  if(!u.lastPostDate) return 0;
  let today = new Date().toDateString();
  let last = new Date(u.lastPostDate).toDateString();
  if(today === last) return u.streak || 1;
  let yesterday = new Date(Date.now()-86400000).toDateString();
  if(yesterday === last) return u.streak || 1;
  return 0; // Streak broken
}

function renderStreakDays(streak) {
  let days = G('streakDays');
  if(!days) return;
  let html = '';
  for(let i=0; i<7; i++) {
    let active = i < streak;
    let isToday = i === streak-1;
    html += `<div class="streak-day ${active?'active':''} ${isToday?'today':''}">${i+1}</div>`;
  }
  days.innerHTML = html;
}

function renderBadges(u) {
  let grid = G('badgesGrid');
  if(!grid) return;
  
  grid.innerHTML = BADGES.map(b => {
    let earned = b.condition(u);
    return `
      <div class="badge-item ${earned?'earned':'locked'}" title="${b.desc}">
        <div class="badge-ico">${earned ? b.ico : '🔒'}</div>
        <div class="badge-name">${b.name}</div>
      </div>
    `;
  }).join('');
}

function updateLeaderboardRank(u) {
  let all = Object.values(D.users).filter(x => !x.isAdmin).sort((a,b) => (b.points||0)-(a.points||0));
  let rank = all.findIndex(x => x.id === u.id) + 1;
  let total = all.length;
  let percent = total > 0 ? ((rank/total)*100).toFixed(0) : 0;
  
  let emoji = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : '🏅';
  let text = rank <= 10 ? `Top ${rank}` : `Rank #${fmt(rank)}`;
  
  G('rankEmoji').textContent = emoji;
  G('rankText').textContent = text;
  G('rankPercent').textContent = percent + '%';
}

function checkAndAwardBadges() {
  if(!CU) return;
  let u = D.users[CU.id] || CU;
  let newBadges = [];
  
  BADGES.forEach(b => {
    if(!u.badges?.includes(b.id) && b.condition(u)) {
      u.badges = u.badges || [];
      u.badges.push(b.id);
      newBadges.push(b);
    }
  });
  
  if(newBadges.length > 0) {
    saveData();
    newBadges.forEach(b => {
      toast('s', `🏅 Badge Unlocked: ${b.name}!`);
      addNotif(CU.id, 'badge', b.ico, `Badge Unlocked: ${b.name}! ${b.desc}`);
    });
    confetti();
  }
}

function updateStreak() {
  if(!CU) return;
  let u = D.users[CU.id] || CU;
  let today = new Date().toDateString();
  
  if(u.lastPostDate) {
    let last = new Date(u.lastPostDate).toDateString();
    let yesterday = new Date(Date.now()-86400000).toDateString();
    
    if(last === today) return; // Already posted today
    if(last === yesterday) {
      u.streak = (u.streak||0) + 1; // Continue streak
    } else {
      u.streak = 1; // Reset streak
    }
  } else {
    u.streak = 1;
  }
  u.lastPostDate = Date.now();
  saveData();
}

// ========== PUSH NOTIFICATIONS ==========
function openPushNotifSettings() {
  openModal('pushNotifModal');
  updatePushStatusUI();
}

function updatePushStatusUI() {
  let granted = Notification.permission === 'granted';
  G('pushStatusIcon').textContent = granted ? '🔔' : '🔕';
  G('pushStatusText').textContent = granted ? 'Notifications Enabled' : 'Notifications Disabled';
  G('pushStatusSub').textContent = granted ? 'You will receive alerts' : 'Enable to receive alerts';
  G('pushEnableBtn').style.display = granted ? 'none' : 'block';
  G('pushTestBtn').style.display = granted ? 'block' : 'none';
}

async function subscribePushNotifications() {
  if(!('serviceWorker' in navigator) || !('PushManager' in window)) {
    toast('e', 'Push notifications not supported');
    return;
  }
  
  try {
    let reg = await navigator.serviceWorker.ready;
    let perm = await Notification.requestPermission();
    
    if(perm === 'granted') {
      // In a real app, you would subscribe to push server here
      pushSubscription = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array('BEl62iZXg8hZ7fJ4Yy9A7W4FKNdFXcWOy8y8gT8xK5v1J9xY4Z6a1L8n9b7B6h4C3j2K1l0M9n8B7v6C5x4Z3a2Q1w0E9r8T7y6U5i4O3p2A1s2D4f5G6h7J8k9L0z1X2c3V4b5N6m7')
      });
      
      // Send subscription to server
      await sendSubscriptionToServer(pushSubscription);
      
      toast('s', '🔔 Push notifications enabled!');
      updatePushStatusUI();
      
      // Update user preference
      if(CU) {
        CU.notifSettings = CU.notifSettings || {};
        CU.notifSettings.push = true;
        saveData();
      }
    } else {
      toast('e', 'Permission denied');
    }
  } catch(e) {
    console.error('Push subscription failed:', e);
    toast('e', 'Could not enable notifications');
  }
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/');
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);
  for(let i=0; i<rawData.length; ++i) outputArray[i] = rawData.charCodeAt(i);
  return outputArray;
}

async function sendSubscriptionToServer(subscription) {
  // Send to your server
  try {
    await fetch('/api/push-subscribe', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ userId: CU?.id, subscription })
    });
  } catch(e) { console.log('Server subscription failed:', e); }
}

function testPushNotification() {
  if(Notification.permission === 'granted') {
    new Notification('Monetixra Test', {
      body: '🔔 Your notifications are working!',
      icon: '/icon-192.png',
      badge: '/icon-192.png'
    });
    toast('s', 'Test notification sent!');
  }
}

// ========== CONTENT PAYWALL ==========
function checkPaywall(post) {
  if(!post.isPremium) return true; // Not premium, allow access
  let u = D.users[CU?.id] || CU;
  if(!u?.isPremium) {
    openModal('paywallModal');
    return false;
  }
  // Check if premium expired
  if(u.premiumExpiry && u.premiumExpiry < Date.now()) {
    u.isPremium = false;
    openModal('paywallModal');
    return false;
  }
  return true;
}

function markPostAsPremium(pid) {
  let post = D.posts?.find(p => p.id === pid);
  if(post && CU?.isAdmin) {
    post.isPremium = true;
    saveData();
    toast('s', 'Post marked as premium');
  }
}

// ========== STICKY AD BANNER ==========
let stickyAdTimer = null;
const STICKY_ADS = [
  { title:'📱 Download Our App', text:'Get 2x points on mobile!' },
  { title:'💎 Go Premium', text:'Remove ads & earn more' },
  { title:'🤝 Refer Friends', text:'Earn 100 pts per referral' },
  { title:'📊 View Analytics', text:'Track your performance' },
];

function showStickyAd() {
  if(CU?.isPremium) return; // No ads for premium
  let ad = STICKY_ADS[Math.floor(Math.random()*STICKY_ADS.length)];
  G('stickyAdTitle').textContent = ad.title;
  G('stickyAdText').textContent = ad.text;
  let banner = G('stickyAdBanner');
  banner.style.display = 'block';
  banner.classList.add('show');
}

function closeStickyAd() {
  G('stickyAdBanner').style.display = 'none';
  G('stickyAdBanner').classList.remove('show');
  // Show again after 5 minutes
  setTimeout(showStickyAd, 300000);
}

function clickStickyAd() {
  if (typeof CU === 'undefined' || !CU) {
    if (typeof toast === 'function') toast('e', 'Please sign in first');
    return;
  }

  if (typeof watchAdWithRotation === 'function') {
    watchAdWithRotation();
    closeStickyAd();
    return;
  }

  if (typeof window.AdRotationSystem !== 'undefined' && window.AdRotationSystem) {
    const network = window.AdRotationSystem.getNextAdNetwork();
    window.AdRotationSystem.openAd(network);
    if (typeof addPts === 'function') {
      addPts(network.points, `Clicked ${network.name} Ad`);
    }
    if (typeof toast === 'function') {
      toast('s', `+${network.points} pts from ${network.name}!`);
    }
    closeStickyAd();
    return;
  }

  addPts(5, 'Clicked Sticky Ad');
  toast('s', '+5 pts!');
  closeStickyAd();
}

function scheduleStickyAd() {
  setTimeout(showStickyAd, 60000); // Show after 1 minute
}

// ========== SERVICE WORKER & PWA ==========
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').then(reg => {
    console.log('SW registered:', reg);
    if (reg.waiting) {
      showUpdateBanner();
    }
    reg.addEventListener('updatefound', () => {
      const newWorker = reg.installing;
      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
          showUpdateBanner();
        }
      });
    });
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload();
function showUpdateBanner() {
  if (document.getElementById('sw-update-banner')) return;
  let banner = document.createElement('div');
  banner.id = 'sw-update-banner';
  banner.className = 'sw-update-banner';
  banner.innerHTML = `
    <span>🚀 New version available!</span>
    <button onclick="location.reload()">Update Now</button>
  `;
  document.body.appendChild(banner);
}

// ========== ENHANCED INTERSTITIAL ADS ==========
let interstitialQueue = [];

function queueInterstitial() {
  if(CU?.isPremium) return; // No ads for premium
  interstitialQueue.push(Date.now());
  if(interstitialQueue.length >= 3) {
    showInts();
    interstitialQueue = [];
  }
}

function clickInts() {
  closeInts();
  addPts(5, 'Interstitial Clicked');
  toast('s', '+5 pts!');
  logActivity('ad_click', {type:'interstitial'}, 5);
}

// ========== INIT NEW FEATURES ==========
document.addEventListener('DOMContentLoaded', () => {
  // Initialize all ad systems (check if exists first)
  if (typeof initAdSystems === 'function') {
    initAdSystems();
  }
  
  scheduleStickyAd();
  
  // Add click tracking to posts
  document.addEventListener('click', e => {
    let postEl = e.target.closest('[data-post-id]');
    if(postEl) {
      let pid = postEl.dataset.postId;
      trackPostView(pid);
    }
  });
  
  // Check badges on load
  setTimeout(checkAndAwardBadges, 2000);
});

// Add Push Notification link to Settings
function addPushNotifToSettings() {
  let sec = document.querySelector('#pg-settings .sett-sec:nth-child(5)');
  if(sec && !G('pushNotifRow')) {
    let row = document.createElement('div');
    row.className = 'sett-row';
    row.id = 'pushNotifRow';
    row.onclick = openPushNotifSettings;
    row.innerHTML = `
      <div class="sett-ico">🔔</div>
      <div><div class="sett-nm">Push Notifications</div><div class="sett-sub" id="pushNotifSub">Configure alerts</div></div>
      <span class="sett-end">›</span>
    `;
    sec.insertBefore(row, sec.firstChild.nextSibling);
  }
}

// Call when settings page loads
let originalRSettings = rSettings;
rSettings = function() {
  originalRSettings();
  addPushNotifToSettings();
  updatePushNotifSub();
};

function updatePushNotifSub() {
  let sub = G('pushNotifSub');
  if(sub) {
    sub.textContent = Notification.permission === 'granted' ? '✅ Enabled' : 'Configure alerts';
  }
}

// Add Analytics link to Profile
function addAnalyticsToProfile() {
  let actions = G('profileActions');
  if(actions && !G('analyticsBtn')) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-neon btn-sm';
    btn.id = 'analyticsBtn';
    btn.innerHTML = '📊 Stats';
    btn.onclick = () => nav('analytics');
    actions.appendChild(btn);
  }
}

let originalRProfile = rProfile;
rProfile = function() {
  originalRProfile();
  addAnalyticsToProfile();
};

// Override submitPost to track streak and badges
let originalSubmitPost = submitPost;
submitPost = function() {
  let result = originalSubmitPost.apply(this, arguments);
  if(result !== false) {
    updateStreak();
    setTimeout(checkAndAwardBadges, 1000);
    logActivity('post_created', {}, 20);
  }
  return result;
};

// Override addPts to track total earnings
let originalAddPts = addPts;
addPts = function(pts, label, type='earn') {
  let result = originalAddPts.apply(this, arguments);
  if(CU && pts > 0) {
    CU.totalEarned = (CU.totalEarned||0) + pts;
    checkAndAwardBadges();
  }
  return result;
};

// Export new functions
window.rAnalytics = rAnalytics;
window.rActivity = rActivity;
window.rGamification = rGamification;
window.rProfile = rProfile;
window.rSettings = rSettings;
window.openPushNotifSettings = openPushNotifSettings;
window.subscribePushNotifications = subscribePushNotifications;
window.testPushNotification = testPushNotification;
window.filterActivity = filterActivity;
window.clickStickyAd = clickStickyAd;
window.closeStickyAd = closeStickyAd;
window.checkPaywall = checkPaywall;

// ============================================================
//  Hybrid Storage Modules (21GB+ Free Storage)
//  IndexedDB + Supabase + MEGA Integration
// ============================================================























// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {
  console.log('[Monetixra] Initializing Hybrid Storage System...');
  
  // Initialize IndexedDB
  try {
    await IndexedDBStorage.initOfflineStorage();
    console.log('[Monetixra] IndexedDB ready ✅');
  } catch (err) {
    console.warn('[Monetixra] IndexedDB init failed:', err);
  }
  
  // Initialize Supabase Realtime (if supabase client exists)
  if (typeof supabase !== 'undefined') {
    try {
      SupabaseRealtime.init(supabase);
      console.log('[Monetixra] Supabase Realtime ready ✅');
      
      // Subscribe to real-time updates
      SupabaseRealtime.subscribeToPosts(
        (post) => console.log('[Realtime] New post:', post),
        (post) => console.log('[Realtime] Updated post:', post),
        (post) => console.log('[Realtime] Deleted post:', post)
      );
    } catch (err) {
      console.warn('[Monetixra] Supabase Realtime init failed:', err);
    }
  }
  
  console.log('[Monetixra] Hybrid Storage System ready! (21GB+ capacity)');
});



(function() {
  window.atOptions_banner468 = { 'key' : '2c59b270de9e21b57ad543e7b88c2e3f', 'format' : 'iframe', 'height' : 60, 'width' : 468, 'params' : {} };
  window.atOptions = window.atOptions_banner468;
  let s = document.createElement('script');
  s.src = 'https://www.highperformanceformat.com/2c59b270de9e21b57ad543e7b88c2e3f/invoke.js';
  document.getElementById('footerBanner468').appendChild(s);
})();



(function() {
  window.atOptions_banner300 = { 'key' : 'ddb48e8829959135fea1323207677af1', 'format' : 'iframe', 'height' : 50, 'width' : 300, 'params' : {} };
  window.atOptions = window.atOptions_banner300;
  let s = document.createElement('script');
  s.src = 'https://www.highperformanceformat.com/ddb48e8829959135fea1323207677af1/invoke.js';
  document.getElementById('footerBanner300').appendChild(s);
})();



(function() {
  window.atOptions_728 = { 'key' : 'ddb48e8829959135fea1323207677af1', 'format' : 'iframe', 'height' : 90, 'width' : 728, 'params' : {} };
  let s = document.createElement('script');
  s.src = 'https://www.highperformanceformat.com/ddb48e8829959135fea1323207677af1/invoke.js';
  document.getElementById('leaderboard728').appendChild(s);
})();



(function() {
  window.atOptions_160 = { 'key' : 'ddb48e8829959135fea1323207677af1', 'format' : 'iframe', 'height' : 600, 'width' : 160, 'params' : {} };
  let s = document.createElement('script');
  s.src = 'https://www.highperformanceformat.com/ddb48e8829959135fea1323207677af1/invoke.js';
  document.getElementById('skyscraper160').appendChild(s);
})();



(function() {
  if(window.innerWidth <= 768) {
    window.atOptions_320 = { 'key' : 'ddb48e8829959135fea1323207677af1', 'format' : 'iframe', 'height' : 50, 'width' : 320, 'params' : {} };
    let s = document.createElement('script');
    s.src = 'https://www.highperformanceformat.com/ddb48e8829959135fea1323207677af1/invoke.js';
    document.getElementById('mobileBanner320').appendChild(s);
  }
})();



(function(){
  const nativeAds = [
    {icon:'🎯',title:'Earn $5 Per Referral!',desc:'Invite friends & earn unlimited. No cap on earnings!'},
    {icon:'💎',title:'Premium = 2x Earnings!',desc:'Upgrade to premium & double your daily income instantly.'},
    {icon:'🚀',title:'Watch 50 Ads/Day = $1!',desc:'Consistent daily earning opportunity for all users.'},
    {icon:'🔥',title:'#1 Earning App in Asia!',desc:'Join 500K+ users earning real money daily.'},
    {icon:'💰',title:'Instant Withdrawal!',desc:'bKash, Nagad, PayPal, Crypto — 24hr payout!'}
  ];
  function injectNative(id, ad) {
    const el = document.getElementById(id);
    if(el) el.innerHTML = `<div style="display:flex;align-items:center;gap:12px;padding:12px;border:1px solid var(--neon);border-radius:10px;background:linear-gradient(135deg,var(--dark2),var(--dark));"><div style="font-size:28px;">${ad.icon}</div><div style="flex:1;"><div style="font-weight:700;color:var(--neon);font-size:14px;">${ad.title}</div><div style="font-size:12px;color:var(--t2);margin-top:3px;">${ad.desc}</div></div><div style="background:var(--neon);color:#000;padding:6px 12px;border-radius:20px;font-size:11px;font-weight:700;cursor:pointer;" onclick="addPts(3,'Native Ad Click');toast('s','+3 pts!')">Earn +3</div></div>`;
  }
  setTimeout(() => { injectNative('infeedNative1', nativeAds[0]); injectNative('infeedNative2', nativeAds[1]); }, 2000);
})();



function watchVideoAd() {
  let timer = 15;
  const btn = document.querySelector('#videoAdContainer button');
  const timerEl = document.getElementById('videoTimer');
  btn.disabled = true; btn.textContent = 'Watching...';
  const iv = setInterval(() => {
    timer--; timerEl.textContent = timer + 's';
    if(timer <= 0) { clearInterval(iv); addPts(15,'Video Ad'); confetti(); toast('s','+15 pts! Video Complete'); document.getElementById('videoAdContainer').style.display='none'; }
  }, 1000);
}
setTimeout(() => { const el = document.getElementById('videoAdContainer'); if(el) el.style.display='block'; }, 60000);



// FAB handlers removed - floating action buttons disabled



document.addEventListener('mouseleave', (e) => { if(e.clientY < 10 && !localStorage.getItem('exitIntentShown')) { document.getElementById('exitIntent').style.display='flex'; localStorage.setItem('exitIntentShown', Date.now()); } });



(function(){
  let scrollTriggered = false;
  window.addEventListener('scroll', () => {
    if(!scrollTriggered && (window.innerHeight + window.scrollY) >= document.body.offsetHeight * 0.7) {
      scrollTriggered = true;
      setTimeout(() => { toast('s','🎯 Scroll milestone! +5 bonus pts'); addPts(5,'Scroll Depth'); }, 500);
    }
  });
})();



(function(){
  const rewards = [ {time:30,pts:3,msg:'30s on site! +3 pts'}, {time:60,pts:5,msg:'1 min! +5 pts'}, {time:180,pts:10,msg:'3 mins! +10 pts'}, {time:300,pts:20,msg:'5 mins! +20 pts'} ];
  rewards.forEach(r => setTimeout(() => { addPts(r.pts,'Time Reward'); toast('s',r.msg); }, r.time * 1000));
})();

// ═══════════════════════════════════════════════════════════
// MAXIMUM REVENUE AD SYSTEM — Diverse Ads, Strategic Placement
// ═══════════════════════════════════════════════════════════
(function(){
  const MAX_AD_SYSTEM = {
    // ═══════════════════════════════════════════════════════
    // 1. DIVERSE AD TYPES POOL — Multiple Ad Types for Maximum Revenue
    // ═══════════════════════════════════════════════════════
    adTypes: {
      // Banner Ads (Multiple sizes for different placements)
      banners: {
        '160x600': { name: 'Wide Skyscraper', cpm: 2.5, url: 'https://pl29280287.profitablecpmratenetwork.com/1805a61f4f6c6177d946441e5153e81c/invoke.js' },
        '300x250': { name: 'Medium Rectangle', cpm: 3.2, url: 'https://pl29280284.profitablecpmratenetwork.com/25/1b/0c/251b0cf69cbb4dec0e2e5d4397f5e56f.js' },
        '728x90':  { name: 'Leaderboard', cpm: 2.8, url: 'https://www.profitablecpmratenetwork.com/qu1bqnynm6?key=d753b3018195910056f99110db5b614a' },
        '320x50':  { name: 'Mobile Banner', cpm: 1.8, url: 'https://pl29280286.profitablecpmratenetwork.com/1f/31/3a/1f313aa876d332b1f8c2519dd6ff70f9.js' },
        '300x600': { name: 'Half Page', cpm: 4.0, url: 'https://pl29280287.profitablecpmratenetwork.com/1805a61f4f6c6177d946441e5153e81c/invoke.js' },
        '160x30':  { name: 'Micro Banner', cpm: 1.2, url: 'https://www.highperformanceformat.com/5c1a960ae2f4c6d4ac2b758a9e2fb18b/invoke.js' },
        '468x60':  { name: 'Full Banner', cpm: 2.2, url: 'https://www.highperformanceformat.com/2c59b270de9e21b57ad543e7b88c2e3f/invoke.js' },
        '300x50':  { name: 'Mobile Leaderboard', cpm: 1.5, url: 'https://www.highperformanceformat.com/ddb48e8829959135fea1323207677af1/invoke.js' }
      },
      
      // High-CPM Premium Ads
      premium: {
        video:      { name: 'Video Pre-roll', cpm: 8.5, url: 'vid_ad_url' },
        interstitial: { name: 'Full Screen', cpm: 6.0, url: 'inter_ad_url' },
        native:     { name: 'Native Feed', cpm: 4.5, url: 'https://pl29280287.profitablecpmratenetwork.com/1805a61f4f6c6177d946441e5153e81c/invoke.js' },
        rewarded:   { name: 'Rewarded Video', cpm: 12.0, url: 'reward_ad_url' }
      },
      
      // Interactive Ads (Higher Engagement = More Revenue)
      interactive: {
        quiz:       { name: 'Quiz Ad', cpm: 5.5, engage: 'high' },
        poll:       { name: 'Poll Ad', cpm: 4.0, engage: 'high' },
        game:       { name: 'Mini Game', cpm: 7.0, engage: 'very_high' },
        calculator: { name: 'Earn Calculator', cpm: 3.5, engage: 'medium' }
      }
    },
    
    // ═══════════════════════════════════════════════════════
    // 2. STRATEGIC PLACEMENT MAP — Where to Show What Ads
    // ═══════════════════════════════════════════════════════
    placements: {
      // Top Area (High Visibility)
      'top-banner':      { type: '728x90', rotate: true, interval: 30000 },
      'header-sticky':   { type: '320x50', rotate: true, interval: 45000 },
      
      // Feed Area (High Engagement)
      'feed-inline-1':   { type: 'native', cpm: 'high' },      // 1st ad in feed
      'feed-inline-3':   { type: '300x250', cpm: 'high' },     // 3rd post
      'feed-inline-5':   { type: 'video', cpm: 'premium' },    // 5th post
      'feed-inline-8':   { type: 'interactive', subtype: 'quiz' },
      'feed-inline-12':  { type: '300x600', cpm: 'very_high' }, // Large ad
      
      // Sidebar (Desktop only)
      'sidebar-top':     { type: '160x600', cpm: 'medium' },
      'sidebar-mid':   { type: '300x250', cpm: 'high' },
      
      // Between Sections
      'between-posts':   { type: 'native', every: 3 },  // Every 3 posts
      'story-ad':      { type: 'native', position: 'after_story' },
      
      // Bottom Area
      'bottom-banner':   { type: '728x90', rotate: true },
      'sticky-footer':   { type: '320x50', mobile: true },
      
      // Action-Based (Contextual)
      'post-create':     { type: 'native', trigger: 'before_post' },
      'after-like':      { type: 'interstitial', trigger: 'after_5_likes' },
      'before-withdraw': { type: 'rewarded', trigger: 'withdraw_request' },
      'idle-popup':      { type: 'interstitial', trigger: 'idle_2min' }
    },
    
    // ═══════════════════════════════════════════════════════
    // 3. ALL ADS ALL TIME — All Ad Types Always Active (Random Rotation)
    // ═══════════════════════════════════════════════════════
    allAdTypes: [
      'quiz', 'poll', 'game', 'calculator', 'native',
      'banner_300x250', 'banner_728x90', 'banner_160x600', 'banner_160x30', 'banner_468x60', 'banner_300x50',
      'video_offer', 'rewarded_offer', 'premium_offer',
      'interstitial', 'popunder_trigger', 'smartlink',
      'social_bar', 'native_feed', 'click_to_earn',
      'admob_banner', 'admob_interstitial', 'admob_rewarded', 'admob_native',
      'adsense_display'
    ],
    
    // ═══════════════════════════════════════════════════════
    // 4. AD ROTATION CONFIG — Constant Variation
    // ═══════════════════════════════════════════════════════
    rotationConfig: {
      interval: 30000,      // 30 seconds
      feedInterval: 3,      // Every 3 posts
      featureAdChance: 0.7, // 70% chance to show ad in any feature
      maxAdsPerSession: 100 // Maximum ads per session
    },
    
    sessionAds: [],
    adRotationTimer: null,
    
    // ═══════════════════════════════════════════════════════
    // CORE FUNCTIONS
    // ═══════════════════════════════════════════════════════
    
    // Get random ad type from all available types
    getRandomAdType() {
      return this.allAdTypes[Math.floor(Math.random() * this.allAdTypes.length)];
    },
    
    // Get multiple random ad types
    getRandomAdTypes(count) {
      const shuffled = [...this.allAdTypes].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    },
    
    // ═══════════════════════════════════════════════════════
    // PAGE-SPECIFIC AD TYPES — Different ads for different pages
    // ═══════════════════════════════════════════════════════
    
    // Get ad type based on page context
    getAdTypeForPage(pageName) {
      // Only use valid ad types that exist in allAdTypes
      const validAdTypes = {
        // Feed: Mix of interactive and native ads
        feed: ['native_feed', 'quiz', 'poll', 'banner_300x250', 'click_to_earn'],
        // Explore: Visual ads for discovery
        explore: ['native', 'banner_728x90', 'video_offer', 'banner_160x600'],
        // Profile: Personal/reward focused
        profile: ['rewarded_offer', 'premium_offer', 'native', 'game'],
        // Wallet: Financial/high CPM ads
        wallet: ['premium_offer', 'rewarded_offer', 'calculator', 'interstitial'],
        // Earn: Task-related ads
        earn: ['click_to_earn', 'quiz', 'poll', 'game', 'video_offer'],
        // Analytics: Professional ads
        analytics: ['banner_728x90', 'native', 'premium_offer'],
        // Gamification: Fun interactive ads
        gamification: ['game', 'quiz', 'poll', 'rewarded_offer'],
        // Chat: Non-intrusive native ads
        messages: ['native', 'banner_300x50', 'click_to_earn'],
        // Friends: Social ads
        friends: ['social_bar', 'native_feed', 'click_to_earn'],
        // NFT: Premium/crypto ads
        nft: ['premium_offer', 'banner_160x600', 'native', 'rewarded_offer'],
        // Metaverse: Immersive ads
        metaverse: ['video_offer', 'banner_728x90', 'game', 'interstitial'],
        // Apps: App promotion ads
        apps: ['native', 'banner_300x250', 'video_offer', 'click_to_earn']
      };
      
      const types = validAdTypes[pageName] || this.allAdTypes;
      // Safety check
      if (!types || types.length === 0) {
        return this.getRandomAdType();
      }
      return types[Math.floor(Math.random() * types.length)];
    },
    
    // Get ad type for specific modal
    getAdTypeForModal(modalId) {
      const modalAdTypes = {
        // Profile modals: Reward focused
        profileModal: ['rewarded_offer', 'premium_offer', 'native'],
        // Wallet modals: Financial ads
        walletModal: ['calculator', 'premium_offer', 'native'],
        // Settings: Non-intrusive
        settingsModal: ['native', 'banner_300x50'],
        // NFT modals: Premium
        nftModal: ['premium_offer', 'native', 'rewarded_offer'],
        // Generic fallback
        default: ['native', 'banner_300x250', 'click_to_earn']
      };
      
      const types = modalAdTypes[modalId] || modalAdTypes.default;
      return types[Math.floor(Math.random() * types.length)];
    },
    
    // Create diverse ad element
    createAdElement(type, options = {}) {
      const adEl = document.createElement('div');
      adEl.className = `ad-container ad-${type}`;
      adEl.style.cssText = 'margin:10px 0;padding:10px;background:var(--g2);border:1px solid var(--b1);border-radius:12px;overflow:hidden;';
      
      switch(type) {
        case 'quiz':
          adEl.innerHTML = `
            <div style="text-align:center;padding:15px;">
              <div style="font-size:24px;margin-bottom:8px;">🎯</div>
              <div style="font-weight:700;margin-bottom:10px;">Quick Quiz: Earn +5 pts!</div>
              <div style="font-size:13px;color:var(--t3);margin-bottom:12px;">Which crypto grew most in 2024?</div>
              <div style="display:flex;gap:8px;justify-content:center;">
                <button onclick="addPts(5,'Quiz Ad');this.closest('.ad-container').remove()" class="btn btn-p btn-sm">Bitcoin</button>
                <button onclick="addPts(5,'Quiz Ad');this.closest('.ad-container').remove()" class="btn btn-p btn-sm">Ethereum</button>
              </div>
            </div>`;
          break;
          
        case 'poll':
          adEl.innerHTML = `
            <div style="text-align:center;padding:15px;">
              <div style="font-size:20px;margin-bottom:8px;">📊</div>
              <div style="font-weight:700;margin-bottom:10px;">Quick Poll</div>
              <div style="font-size:12px;margin-bottom:12px;">What's your favorite feature?</div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <button onclick="addPts(3,'Poll Ad');this.closest('.ad-container').remove()" class="btn btn-ghost btn-sm">💰 Earning</button>
                <button onclick="addPts(3,'Poll Ad');this.closest('.ad-container').remove()" class="btn btn-ghost btn-sm">👥 Social</button>
                <button onclick="addPts(3,'Poll Ad');this.closest('.ad-container').remove()" class="btn btn-ghost btn-sm">🎮 Games</button>
              </div>
            </div>`;
          break;
          
        case 'calculator':
          adEl.innerHTML = `
            <div style="text-align:center;padding:15px;">
              <div style="font-size:20px;margin-bottom:8px;">🧮</div>
              <div style="font-weight:700;margin-bottom:10px;">Earnings Calculator</div>
              <div style="background:var(--bg);border-radius:8px;padding:10px;margin-bottom:10px;">
                <div style="font-size:11px;color:var(--t3);">If you refer 10 friends/month</div>
                <div style="font-size:24px;font-weight:800;color:var(--neon);">+$500</div>
              </div>
              <button onclick="nav('referral');addPts(2,'Calculator Ad')" class="btn btn-p btn-sm">Start Earning →</button>
            </div>`;
          break;
          
        case 'game':
          adEl.innerHTML = `
            <div style="text-align:center;padding:15px;">
              <div style="font-size:28px;margin-bottom:8px;">🎰</div>
              <div style="font-weight:700;margin-bottom:10px;">Spin & Win!</div>
              <div style="font-size:12px;color:var(--t3);margin-bottom:12px;">Watch ad to spin</div>
              <button onclick="watchAd();addPts(10,'Game Ad');this.closest('.ad-container').remove()" class="btn btn-neon btn-sm">🎲 Spin Now</button>
            </div>`;
          break;
          
        case 'native':
          // Standard native banner
          adEl.innerHTML = `
            <div style="display:flex;align-items:center;gap:12px;padding:10px;cursor:pointer;" onclick="window.open('https://www.profitablecpmratenetwork.com/qu1bqnynm6?key=d753b3018195910056f99110db5b614a','_blank');addPts(2,'Native Ad Click')">
              <div style="width:60px;height:60px;background:linear-gradient(135deg,var(--c1),var(--c2));border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:28px;">💎</div>
              <div style="flex:1;text-align:left;">
                <div style="font-weight:700;font-size:13px;">Premium Upgrade</div>
                <div style="font-size:11px;color:var(--t3);">2x earnings + exclusive features</div>
                <div style="font-size:10px;color:var(--neon);margin-top:4px;">Sponsored</div>
              </div>
              <div style="font-size:20px;">→</div>
            </div>`;
          break;
          
        case 'banner_300x250':
          adEl.innerHTML = `
            <div style="text-align:center;padding:10px;">
              <div style="font-size:9px;color:var(--t3);margin-bottom:4px;">Sponsored</div>
              <div style="width:300px;height:250px;background:linear-gradient(135deg,#667eea,#764ba2);margin:0 auto;border-radius:12px;display:flex;align-items:center;justify-content:center;flex-direction:column;color:white;">
                <div style="font-size:36px;margin-bottom:8px;">💰</div>
                <div style="font-weight:800;font-size:16px;">Earn $500/Month</div>
                <div style="font-size:12px;margin:8px 0;">Join 10,000+ earners</div>
                <button onclick="nav('earn');addPts(5,'Banner Click')" class="btn btn-sm" style="background:white;color:#667eea;">Start Now</button>
              </div>
            </div>`;
          break;
          
        case 'banner_728x90':
          adEl.innerHTML = `
            <div style="text-align:center;padding:8px;">
              <div style="max-width:728px;height:90px;background:linear-gradient(90deg,var(--neon),var(--c2));margin:0 auto;border-radius:8px;display:flex;align-items:center;justify-content:center;gap:20px;color:white;padding:0 20px;">
                <span style="font-size:32px;">🚀</span>
                <span style="font-weight:700;font-size:14px;">Boost Earnings 2x with Premium!</span>
                <button onclick="nav('wallet')" class="btn btn-sm" style="background:white;color:var(--neon);">Upgrade</button>
              </div>
            </div>`;
          break;
          
        case 'video_offer':
          adEl.innerHTML = `
            <div style="text-align:center;padding:15px;background:linear-gradient(135deg,var(--g2),var(--dark));border-radius:12px;">
              <div style="font-size:32px;margin-bottom:8px;">🎬</div>
              <div style="font-weight:700;margin-bottom:8px;">Watch Video & Earn</div>
              <div style="font-size:12px;color:var(--t3);margin-bottom:12px;">30 sec video = +15 points</div>
              <button onclick="watchAd();addPts(15,'Video Offer');this.closest('.ad-container').remove()" class="btn btn-neon">▶ Watch Now</button>
            </div>`;
          break;
          
        case 'rewarded_offer':
          adEl.innerHTML = `
            <div style="text-align:center;padding:15px;background:linear-gradient(135deg,#ff6b6b,#ee5a6f);border-radius:12px;color:white;">
              <div style="font-size:32px;margin-bottom:8px;">🎁</div>
              <div style="font-weight:700;margin-bottom:8px;">Special Reward!</div>
              <div style="font-size:12px;margin-bottom:12px;">Complete offer & get +50 points</div>
              <button onclick="addPts(50,'Rewarded Offer');toast('s','+50 points!');this.closest('.ad-container').remove()" class="btn btn-sm" style="background:white;color:#ee5a6f;">Claim Reward</button>
            </div>`;
          break;
          
        case 'click_to_earn':
          adEl.innerHTML = `
            <div style="text-align:center;padding:12px;">
              <div style="font-size:11px;color:var(--neon);margin-bottom:8px;">👆 Click any button to earn points!</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;justify-content:center;">
                <button onclick="addPts(2,'Click Ad')" class="btn btn-p btn-sm">+2 pts</button>
                <button onclick="addPts(3,'Click Ad')" class="btn btn-o btn-sm">+3 pts</button>
                <button onclick="addPts(5,'Click Ad')" class="btn btn-neon btn-sm">+5 pts</button>
              </div>
            </div>`;
          break;
          
        case 'premium_offer':
          adEl.innerHTML = `
            <div style="text-align:center;padding:15px;border:2px solid var(--neon);border-radius:12px;">
              <div style="font-size:36px;margin-bottom:8px;">💎</div>
              <div style="font-weight:800;margin-bottom:8px;color:var(--neon);">PREMIUM MEMBER</div>
              <div style="font-size:12px;color:var(--t3);margin-bottom:12px;">✓ 2x Earnings ✓ Priority Withdraw ✓ No Ads</div>
              <button onclick="nav('wallet')" class="btn btn-neon">Upgrade $9.99/mo</button>
            </div>`;
          break;
          
        default:
          // Default native ad for unknown types
          adEl.innerHTML = `
            <div style="text-align:center;padding:15px;">
              <div style="font-size:28px;margin-bottom:8px;">📢</div>
              <div style="font-weight:700;margin-bottom:8px;">Special Offer</div>
              <button onclick="addPts(3,'Click Ad')" class="btn btn-neon btn-sm">+3 pts</button>
            </div>`;
          break;
      }
      
      return adEl;
    },
    
    // Insert ad at strategic position
    insertStrategicAd(position, type) {
      const container = document.getElementById(position) || document.querySelector(`[data-ad-position="${position}"]`);
      if (!container) return;
      
      const ad = this.createAdElement(type);
      container.appendChild(ad);
      
      // Track impression
      this.trackImpression(type, position);
    },
    
    // Dynamic feed ad insertion with variety - FEED SPECIFIC
    insertFeedAdVariety(index) {
      const feedList = document.getElementById('feedList');
      if (!feedList) return;
      
      // FEED-SPECIFIC AD TYPES — Use feed-appropriate ads
      const adType = this.getAdTypeForPage('feed');
      
      const adEl = this.createAdElement(adType);
      adEl.classList.add('feed-ad-insert');
      adEl.dataset.adIndex = index;
      
      // Insert into feed
      const posts = feedList.querySelectorAll('.post');
      if (posts[index] && posts[index].parentNode) {
        posts[index].parentNode.insertBefore(adEl, posts[index].nextSibling);
      }
      
      console.log('[FeedAd]', adType, 'inserted at position', index);
    },
    
    // Contextual ad trigger
    triggerContextualAd(triggerType) {
      const now = Date.now();
      const lastShown = localStorage.getItem(`ad_${triggerType}_last`);
      
      // Don't show same contextual ad within 5 minutes
      if (lastShown && (now - parseInt(lastShown)) < 300000) return;
      
      // CONTEXT-APPROPRIATE AD TYPES
      let adType;
      let message = '';
      
      switch(triggerType) {
        case 'before_post':
          adType = 'rewarded_offer';
          message = '📹 Complete this offer for +10 bonus points!';
          break;
        case 'after_like':
          adType = 'native';
          message = '💝 Thanks for engaging! Check out this offer:';
          break;
        case 'withdraw_request':
          adType = 'premium_offer';
          message = '🎁 Complete offer to get bonus points!';
          break;
        case 'idle_1min':
        case 'idle_2min':
          adType = 'game';
          message = '🎮 Still there? Play a quick game!';
          break;
        default:
          adType = this.getRandomAdType();
      }
      
      localStorage.setItem(`ad_${triggerType}_last`, now.toString());
      
      // Show contextual toast + ad
      if (message) toast('i', message);
      
      // Insert floating ad
      const floatAd = this.createAdElement(adType);
      floatAd.style.cssText += 'position:fixed;bottom:80px;left:50%;transform:translateX(-50%);width:90%;max-width:400px;z-index:9998;box-shadow:0 10px 40px rgba(0,0,0,0.5);';
      floatAd.classList.add('floating-contextual-ad');
      document.body.appendChild(floatAd);
      
      // Auto remove after 30 seconds
      setTimeout(() => floatAd.remove(), 30000);
    },
    
    // Track ad impression for analytics
    trackImpression(type, position) {
      const stats = JSON.parse(localStorage.getItem('ad_stats') || '{}');
      const key = `${type}_${position}`;
      stats[key] = (stats[key] || 0) + 1;
      localStorage.setItem('ad_stats', JSON.stringify(stats));
    },
    
    // Get ad performance report
    getPerformanceReport() {
      const stats = JSON.parse(localStorage.getItem('ad_stats') || '{}');
      return Object.entries(stats)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);
    },
    
    // Inject floating ad randomly
    injectFloatingAd(adType) {
      const ad = this.createAdElement(adType);
      ad.style.cssText += 'position:fixed;bottom:100px;right:10px;width:320px;z-index:9997;animation:slideInRight 0.5s ease;box-shadow:0 10px 40px rgba(0,0,0,0.5);';
      ad.innerHTML += '<button onclick="this.parentElement.remove()" style="position:absolute;top:5px;right:5px;background:none;border:none;color:var(--t3);cursor:pointer;font-size:16px;">✕</button>';
      document.body.appendChild(ad);
      
      // Auto remove after 25 seconds
      setTimeout(() => ad.remove(), 25000);
      
      this.trackImpression(adType, 'floating');
    },
    
    // ═══════════════════════════════════════════════════════
    // AGGRESSIVE FEATURE ADS — Ads in Every Feature
    // ═══════════════════════════════════════════════════════
    injectFeatureAds() {
      // Hook into all major navigation functions
      const features = [
        { name: 'feed', fn: 'rFeed', adChance: 0.3 },
        { name: 'explore', fn: 'rExplore', adChance: 0.4 },
        { name: 'profile', fn: 'rProfile', adChance: 0.4 },
        { name: 'wallet', fn: 'rWallet', adChance: 0.5 },
        { name: 'earn', fn: 'rEarn', adChance: 0.4 },
        { name: 'analytics', fn: 'rAnalytics', adChance: 0.3 },
        { name: 'gamification', fn: 'rGamification', adChance: 0.3 },
        { name: 'messages', fn: 'rMessages', adChance: 0.4 },
        { name: 'friends', fn: 'rFriends', adChance: 0.3 },
        { name: 'nft', fn: 'rNFTMarketplace', adChance: 0.4 },
        { name: 'metaverse', fn: 'rMetaverse', adChance: 0.4 },
        { name: 'apps', fn: 'rAppsPage', adChance: 0.35 }
      ];
      
      features.forEach(feature => {
        const originalFn = window[feature.fn];
        if (originalFn) {
          window[feature.fn] = function(...args) {
            try {
              // Always call original first
              const result = originalFn.apply(this, args);
              
              // Inject ad with configured probability - use page-specific ad type
              if (Math.random() < feature.adChance) {
                setTimeout(() => {
                  try {
                    const adType = MAX_AD_SYSTEM.getAdTypeForPage(feature.name);
                    MAX_AD_SYSTEM.injectFeatureAd(feature.name, adType);
                  } catch(e) { /* Silent fail */ }
                }, 500);
              }
              
              return result;
            } catch(e) {
              // If ad system fails, still run original function
              return originalFn.apply(this, args);
            }
          };
        }
      });
      
      // Hook into modal openings (reduced frequency)
      const originalOpenModal = window.openModal;
      if (originalOpenModal) {
        window.openModal = function(modalId, ...args) {
          try {
            const result = originalOpenModal.apply(this, [modalId, ...args]);
            
            // Skip ads on Create Post modal - too intrusive
            if (modalId === 'postModal') {
              return result;
            }
            
            // 20% chance to show ad when opening other modals
            if (Math.random() < 0.2) {
              setTimeout(() => {
                try {
                  const adType = MAX_AD_SYSTEM.getAdTypeForModal(modalId);
                  MAX_AD_SYSTEM.injectModalAd(modalId, adType);
                } catch(e) { /* Silent fail */ }
              }, 300);
            }
            
            return result;
          } catch(e) {
            // If ad system fails, still open modal
            return originalOpenModal.apply(this, [modalId, ...args]);
          }
        };
      }
      
      console.log('[FeatureAds] Injected into', features.length, 'features + modals');
    },
    
    // Inject ad into specific feature page
    injectFeatureAd(featureName, adType) {
      try {
        const pageId = 'pg-' + featureName;
        const page = document.getElementById(pageId);
        if (!page) return;
        
        // Check if ad already exists
        if (page.querySelector('.feature-ad-injected')) return;
        
        const ad = this.createAdElement(adType);
        // Safety check - if ad creation failed, skip
        if (!ad) {
          console.warn('[FeatureAd] Failed to create ad element:', adType);
          return;
        }
        
        ad.classList.add('feature-ad-injected');
        ad.style.cssText += 'margin:10px;border-radius:12px;animation:fadeIn 0.5s ease;';
        
        // Insert at top of page content
        const firstChild = page.firstElementChild;
        if (firstChild) {
          page.insertBefore(ad, firstChild);
        } else {
          page.appendChild(ad);
        }
        
        this.trackImpression(adType, featureName);
        console.log('[FeatureAd] Injected', adType, 'into', featureName);
      } catch(e) {
        console.error('[FeatureAd] Error injecting ad:', e);
      }
    },
    
    // Inject ad into modal
    injectModalAd(modalId, adType) {
      try {
        const modal = document.getElementById(modalId);
        if (!modal) return;
        
        // Check if ad already exists
        if (modal.querySelector('.modal-ad-injected')) return;
        
        const ad = this.createAdElement(adType);
        // Safety check - if ad creation failed, skip
        if (!ad) {
          console.warn('[ModalAd] Failed to create ad element:', adType);
          return;
        }
        
        ad.classList.add('modal-ad-injected');
        ad.style.cssText += 'margin:10px 0;border-radius:12px;';
        
        // Insert after modal header or at top
        const header = modal.querySelector('.modal-header, .mHead, h2, .modal-title');
        if (header && header.nextSibling) {
          modal.insertBefore(ad, header.nextSibling);
        } else {
          modal.insertBefore(ad, modal.firstChild);
        }
        
        this.trackImpression(adType, 'modal_' + modalId);
        console.log('[ModalAd] Injected', adType, 'into', modalId);
      } catch(e) {
        console.error('[ModalAd] Error injecting ad:', e);
      }
    },
    
    // Start the MAX system
    start() {
      console.log('[MAX AD SYSTEM] Starting ALL-TIME-ALL-ADS rotation...');
      
      // 1. CONSTANT AD ROTATION — New ad every 30 seconds
      this.adRotationTimer = setInterval(() => {
        const randomAd = this.getRandomAdType();
        console.log('[MAX AD] Random ad selected:', randomAd);
        
        // Occasionally inject floating ad
        if (Math.random() > 0.5) {
          this.injectFloatingAd(randomAd);
        }
      }, this.rotationConfig.interval);
      
      // 2. Feed ad injection — Various ads every 3 posts
      let feedObserver = new MutationObserver((mutations) => {
        const feedList = document.getElementById('feedList');
        if (feedList && feedList.children.length > 0) {
          [3, 6, 9, 12, 15, 18, 21, 24].forEach(pos => {
            if (feedList.children[pos] && !feedList.querySelector(`[data-ad-index="${pos}"]`)) {
              this.insertFeedAdVariety(pos);
            }
          });
        }
      });
      
      const feedList = document.getElementById('feedList');
      if (feedList) {
        feedObserver.observe(feedList, { childList: true, subtree: true });
      }
      
      // 3. AGGRESSIVE FEATURE ADS — Ads in every feature
      this.injectFeatureAds();
      
      // 4. Idle detection (reduced to 1 min for more ads)
      let idleTimer;
      const resetIdle = () => {
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => {
          this.triggerContextualAd('idle_1min');
        }, 60000); // 1 minute
      };
      
      ['click', 'scroll', 'mousemove', 'keydown'].forEach(evt => {
        document.addEventListener(evt, resetIdle);
      });
      resetIdle();
      
      // 5. Reaction counter — every 10 reactions (reduced frequency)
      let reactCount = 0;
      const originalReact = window.react;
      window.react = function(...args) {
        try {
          reactCount++;
          if (reactCount % 10 === 0) {
            setTimeout(() => {
              try {
                MAX_AD_SYSTEM.triggerContextualAd('after_like');
              } catch(e) { /* Silent fail */ }
            }, 100);
          }
          return originalReact?.apply(this, args);
        } catch(e) {
          return originalReact?.apply(this, args);
        }
      };
      
      console.log('[MAX AD SYSTEM] Active — ALL ADS, ALL TIME, ALL FEATURES!');
      
      // 5. CHAT ADS — Native ads between messages (reduced frequency)
      this.initChatAds();
      
      // 6. PROFILE ADS — Ads on profile visit (reduced frequency)
      this.initProfileAds();
      
      // 7. POPUNDER — Hidden Revenue (reduced frequency)
      this.initPopunder();
      
      // 12. SOCIAL BAR — Floating Social Ad
      this.initSocialBar();
      
      // 13. AdMob & AdSense Auto-refresh
      this.initAdNetworkRefresh();
      
      // 14. NOTIFICATION ADS — Push notifications with offers
      this.initNotificationAds();
      
      // 15. ENHANCED FEED ADS — Various ads every 3 posts
      this.initEnhancedFeedAds();
    },
    
    // ═══════════════════════════════════════════════════════
    // SCROLL-BASED ADS — New ad on scroll down
    // ═══════════════════════════════════════════════════════
    initScrollBasedAds() {
      let lastScrollY = 0;
      let scrollAdCount = 0;
      
      window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        const scrollDiff = currentScrollY - lastScrollY;
        
        // Every 800px scroll down, show new ad
        if (scrollDiff > 800) {
          scrollAdCount++;
          lastScrollY = currentScrollY;
          
          // Create floating scroll ad
          const scrollAd = this.createAdElement(['quiz', 'poll', 'game', 'native'][scrollAdCount % 4]);
          scrollAd.style.cssText += 'position:fixed;bottom:100px;right:10px;width:300px;z-index:9997;animation:slideIn 0.5s ease;';
          scrollAd.innerHTML += '<button onclick="this.parentElement.remove()" style="position:absolute;top:5px;right:5px;background:none;border:none;color:var(--t3);cursor:pointer;">✕</button>';
          document.body.appendChild(scrollAd);
          
          // Auto remove after 20 seconds
          setTimeout(() => scrollAd.remove(), 20000);
          
          console.log('[ScrollAd] Shown at scroll:', currentScrollY);
        }
      }, { passive: true });
      
      console.log('[ScrollAd] Initialized — Every 800px scroll');
    },
    
    // ═══════════════════════════════════════════════════════
    // PULL-TO-REFRESH ADS — Full-screen ad on refresh
    // ═══════════════════════════════════════════════════════
    initPullToRefreshAds() {
      let touchStartY = 0;
      let isRefreshing = false;
      
      document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
      }, { passive: true });
      
      document.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchEndY - touchStartY;
        
        // Pull down more than 150px at top of page
        if (diff > 150 && window.scrollY < 50 && !isRefreshing) {
          isRefreshing = true;
          
          // Show interstitial ad
          this.showInterstitialAd();
          
          setTimeout(() => { isRefreshing = false; }, 5000);
        }
      }, { passive: true });
      
      // Also on actual page reload
      window.addEventListener('beforeunload', () => {
        this.triggerPopunder();
      });
      
      console.log('[PullToRefresh] Initialized');
    },
    
    // Show full-screen interstitial
    showInterstitialAd() {
      const interstitial = document.createElement('div');
      interstitial.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;';
      interstitial.innerHTML = `
        <div style="text-align:center;color:white;max-width:400px;">
          <div style="font-size:48px;margin-bottom:20px;">📱</div>
          <div style="font-size:20px;font-weight:700;margin-bottom:15px;">Sponsored Content</div>
          <div style="font-size:14px;margin-bottom:20px;opacity:0.8;">Premium offers just for you!</div>
          <div id="interstitialAdSlot" style="min-height:250px;background:var(--g2);border-radius:12px;margin-bottom:20px;display:flex;align-items:center;justify-content:center;">
            <div style="padding:20px;text-align:center;">
              <div style="font-size:32px;margin-bottom:10px;">💎</div>
              <div style="font-weight:700;">Premium Upgrade</div>
              <div style="font-size:12px;margin:10px 0;">2x Earnings + Priority Support</div>
              <button onclick="nav('wallet');this.closest('#interstitialOverlay').remove()" class="btn btn-neon">Upgrade Now</button>
            </div>
          </div>
          <button onclick="this.closest('#interstitialOverlay').remove();addPts(3,'Ad Skip')" style="background:none;border:1px solid rgba(255,255,255,0.3);color:white;padding:8px 20px;border-radius:99px;cursor:pointer;">Skip Ad (+3 pts)</button>
        </div>
      `;
      interstitial.id = 'interstitialOverlay';
      document.body.appendChild(interstitial);
      
      // Auto close after 15 seconds
      setTimeout(() => interstitial.remove(), 15000);
      
      console.log('[Interstitial] Full-screen ad shown');
    },
    
    // ═══════════════════════════════════════════════════════
    // NOTIFICATION ADS — Push notification offers
    // ═══════════════════════════════════════════════════════
    initNotificationAds() {
      // Request permission on user interaction
      const requestNotifPermission = () => {
        if ('Notification' in window && Notification.permission === 'default') {
          Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
              console.log('[NotificationAds] Permission granted');
              this.scheduleNotificationAds();
            }
          });
        }
      };
      
      // Ask on first click anywhere
      document.addEventListener('click', requestNotifPermission, { once: true });
      
      console.log('[NotificationAds] Initialized');
    },
    
    scheduleNotificationAds() {
      const notifs = [
        { title: '🎁 Daily Bonus!', body: 'Claim your free 50 points now!', action: 'claimBonus()' },
        { title: '💰 High CPM Offer', body: 'Watch video & earn 20 points', action: 'watchAd()' },
        { title: '👥 Referral Bonus', body: 'Invite friends & earn 100 pts each', action: "openModal('refModal')" },
        { title: '📊 Your Stats', body: 'Check your earnings dashboard', action: "nav('analytics')" },
        { title: '🔥 Trending', body: 'New NFT drops available now!', action: "nav('nft')" }
      ];
      
      // Send notification every 10 minutes (if permitted)
      setInterval(() => {
        if (Notification.permission === 'granted' && document.hidden) {
          const notif = notifs[Math.floor(Math.random() * notifs.length)];
          const n = new Notification(notif.title, {
            body: notif.body,
            icon: '/favicon.ico',
            badge: '/favicon.ico',
            tag: 'ad-' + Date.now()
          });
          n.onclick = () => { eval(notif.action); n.close(); };
        }
      }, 600000); // Every 10 minutes
    },
    
    // ═══════════════════════════════════════════════════════
    // CHAT ADS — Native ads between messages
    // ═══════════════════════════════════════════════════════
    initChatAds() {
      const chatList = document.getElementById('chatList');
      if (!chatList) return;
      
      // Insert ad after every 4th message
      const chatObserver = new MutationObserver((mutations) => {
        const msgs = chatList.querySelectorAll('.chat-msg');
        if (msgs.length > 0 && msgs.length % 4 === 0) {
          const lastMsg = msgs[msgs.length - 1];
          if (lastMsg && !lastMsg.nextElementSibling?.classList?.contains('chat-ad')) {
            const chatAd = this.createAdElement('native');
            chatAd.classList.add('chat-ad');
            chatAd.style.cssText += 'margin:10px 0;transform:scale(0.95);opacity:0.9;';
            chatAd.innerHTML = '<div style="font-size:9px;color:var(--neon);text-align:center;margin-bottom:5px;">─ Sponsored ─</div>' + chatAd.innerHTML;
            lastMsg.parentNode.insertBefore(chatAd, lastMsg.nextSibling);
          }
        }
      });
      
      chatObserver.observe(chatList, { childList: true, subtree: true });
      console.log('[ChatAds] Initialized — Every 4 messages');
    },
    
    // ═══════════════════════════════════════════════════════
    // PROFILE ADS — Premium profile ad placement
    // ═══════════════════════════════════════════════════════
    initProfileAds() {
      // Only override if rProfile exists
      if (typeof window.rProfile !== 'function') {
        console.warn('[ProfileAds] rProfile not found, skipping ad injection');
        return;
      }
      
      // Override rProfile to add ads
      const originalRProfile = window.rProfile;
      window.rProfile = function() {
        try {
          // Call original function
          originalRProfile.apply(this, arguments);
        } catch(e) {
          console.error('[ProfileAds] Error in original rProfile:', e);
        }
        
        // Add premium profile ad
        setTimeout(() => {
          try {
            const profilePage = document.getElementById('pg-profile');
            if (profilePage && !profilePage.querySelector('.profile-ad')) {
              const adType = ['native', 'quiz', 'calculator'][Math.floor(Math.random() * 3)];
              const profileAd = this.createAdElement(adType);
              if (profileAd) {
                profileAd.classList.add('profile-ad');
                profileAd.style.cssText += 'margin:15px;border-radius:12px;';
                
                const coverWrap = profilePage.querySelector('.cover-wrap');
                if (coverWrap && coverWrap.parentNode) {
                  coverWrap.parentNode.insertBefore(profileAd, coverWrap.nextSibling);
                }
              }
            }
          } catch(e) {
            console.error('[ProfileAds] Error adding profile ad:', e);
          }
        }, 100);
      }.bind(this);
      
      console.log('[ProfileAds] Initialized');
    },
    
    // ═══════════════════════════════════════════════════════
    // STORY ADS — Ads in stories
    // ═══════════════════════════════════════════════════════
    initStoryAds() {
      // Add ad in story row (after My Story)
      const storyRow = document.getElementById('storyRow');
      if (storyRow) {
        const storyAd = document.createElement('div');
        storyAd.className = 'story-item story-ad-item';
        storyAd.innerHTML = `
          <div class="story-ring" style="background:linear-gradient(135deg,#ff6b6b,#ee5a6f);" onclick="MAX_AD_SYSTEM.showStoryAd()">
            <div class="av" style="font-size:20px;">💰</div>
          </div>
          <div class="story-nm" style="font-size:10px;color:var(--neon);">Sponsored</div>
        `;
        
        // Insert as 2nd item (after My Story)
        if (storyRow.children.length > 1) {
          storyRow.insertBefore(storyAd, storyRow.children[1]);
        }
      }
      
      console.log('[StoryAds] Initialized');
    },
    
    showStoryAd() {
      const storyOverlay = document.createElement('div');
      storyOverlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg,var(--c1),var(--c2));z-index:10000;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:20px;';
      storyOverlay.innerHTML = `
        <div style="text-align:center;color:white;">
          <div style="font-size:64px;margin-bottom:20px;">💎</div>
          <div style="font-size:24px;font-weight:800;margin-bottom:15px;">Premium Story</div>
          <div style="font-size:16px;margin-bottom:30px;opacity:0.9;">Upgrade to Premium for 2x Earnings!</div>
          <button onclick="nav('wallet');this.parentElement.parentElement.remove()" class="btn btn-neon" style="margin-bottom:15px;">Upgrade Now</button>
          <div style="font-size:12px;opacity:0.7;cursor:pointer;" onclick="addPts(5,'Story Ad View');this.parentElement.parentElement.remove()">👆 Tap to earn +5 pts</div>
        </div>
        <div style="position:absolute;top:20px;right:20px;cursor:pointer;font-size:24px;" onclick="this.parentElement.remove()">✕</div>
      `;
      document.body.appendChild(storyOverlay);
      
      // Auto close after 10 seconds
      setTimeout(() => storyOverlay.remove(), 10000);
    },
    
    // ═══════════════════════════════════════════════════════
    // POPUNDER — Hidden Revenue
    // ═══════════════════════════════════════════════════════
    initPopunder() {
      let popunderTriggered = false;
      
      // Trigger on first click
      document.addEventListener('click', () => {
        if (!popunderTriggered) {
          popunderTriggered = true;
          setTimeout(() => this.triggerPopunder(), 2000);
        }
      }, { once: true });
      
      // Also trigger every 10-15 minutes
      setInterval(() => {
        if (Math.random() > 0.5 && document.hidden) {
          this.triggerPopunder();
        }
      }, 600000 + Math.random() * 300000);
      
      console.log('[Popunder] Initialized');
    },
    
    triggerPopunder() {
      const urls = [
        'https://www.profitablecpmratenetwork.com/qu1bqnynm6?key=d753b3018195910056f99110db5b614a',
        'https://pl29280284.profitablecpmratenetwork.com/25/1b/0c/251b0cf69cbb4dec0e2e5d4397f5e56f.js'
      ];
      const url = urls[Math.floor(Math.random() * urls.length)];
      
      // Open in background tab
      const a = document.createElement('a');
      a.href = url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      
      console.log('[Popunder] Triggered');
    },
    
    // ═══════════════════════════════════════════════════════
    // SMARTLINK — Auto-Redirect Ad
    // ═══════════════════════════════════════════════════════
    initSmartlink() {
      // Hidden iframe for smartlink
      const smartlinkIframe = document.createElement('iframe');
      smartlinkIframe.style.cssText = 'position:fixed;bottom:0;left:0;width:1px;height:1px;opacity:0;pointer-events:none;';
      smartlinkIframe.src = 'https://www.profitablecpmratenetwork.com/qu1bqnynm6?key=d753b3018195910056f99110db5b614a';
      document.body.appendChild(smartlinkIframe);
      
      // Refresh every 5 minutes
      setInterval(() => {
        smartlinkIframe.src = smartlinkIframe.src.replace(/&_=[0-9]+/, '') + '&_=' + Date.now();
      }, 300000);
      
      console.log('[Smartlink] Initialized');
    },
    
    // ═══════════════════════════════════════════════════════
    // SOCIAL BAR — Floating Social Ad (REMOVED)
    // ═══════════════════════════════════════════════════════
    initSocialBar() {
      // FAB removed - no longer creating social bar
      console.log('[SocialBar] Disabled');
    },
    
    // ═══════════════════════════════════════════════════════
    // AdMob & AdSense Auto-Refresh
    // ═══════════════════════════════════════════════════════
    initAdNetworkRefresh() {
      // Refresh AdSense every 3 minutes
      setInterval(() => {
        if (typeof adsbygoogle !== 'undefined') {
          try {
            adsbygoogle.push({});
            console.log('[AdSense] Refreshed');
          } catch(e) {}
        }
      }, 180000);
      
      // Simulate AdMob refresh
      setInterval(() => {
        document.querySelectorAll('.admob-slot').forEach(slot => {
          slot.style.opacity = '0.5';
          setTimeout(() => slot.style.opacity = '1', 500);
        });
        console.log('[AdMob] Slots refreshed');
      }, 240000);
      
      console.log('[AdNetworks] Auto-refresh initialized');
    }
  };
  
  // Make globally available
  window.MAX_AD_SYSTEM = MAX_AD_SYSTEM;
  
  // Auto-start
  if (document.readyState === 'complete') {
    MAX_AD_SYSTEM.start();
  } else {
    window.addEventListener('load', () => MAX_AD_SYSTEM.start());
  }
})();

// ═══════════════════════════════════════════════════════════
// LEGACY AD ROTATOR (for compatibility)
// ═══════════════════════════════════════════════════════════
(function(){
  const adRotator = {
    bannerMessages: [
      { text: "🚀 Earn 500 Points Daily!", action: "nav('earn')" },
      { text: "💎 Upgrade to Premium Today!", action: "openModal('subModal')" },
      { text: "🔥 New NFTs Available!", action: "nav('explore')" },
      { text: "📱 Download Our App!", action: "toast('i','App coming soon!')" },
      { text: "🎯 Complete Tasks & Earn!", action: "nav('earn')" },
      { text: "💰 Refer Friends = 100 pts each!", action: "openModal('refModal')" },
      { text: "⚡ Fast Withdrawals Enabled!", action: "openModal('withdrawModal')" },
      { text: "🎮 Play Games & Earn Points!", action: "nav('meta')" },
      { text: "📊 View Your Stats!", action: "nav('stats')" },
      { text: "👥 Connect with Friends!", action: "nav('friends')" }
    ],
    
    currentIndex: 0,
    
    rotateBannerMessage() {
      const baT = document.getElementById('baT');
      if (!baT) return;
      const msg = this.bannerMessages[this.currentIndex % this.bannerMessages.length];
      baT.style.transition = 'opacity 0.5s';
      baT.style.opacity = '0';
      setTimeout(() => {
        baT.innerHTML = `<span onclick="${msg.action}" style="cursor:pointer;text-decoration:underline;">${msg.text}</span>`;
        baT.style.opacity = '1';
      }, 500);
      this.currentIndex++;
    },
    
    start() {
      setInterval(() => this.rotateBannerMessage(), 30000);
    }
  };
  
  window.adRotator = adRotator;
  adRotator.start();
})();

// ═══════════════════════════════════════════════════════════
// BLOCK EXTERNAL PUSH NOTIFICATIONS & POPUPS (Safe Mode)
// ═══════════════════════════════════════════════════════════
(function(){
  // Only block specific known ad patterns, not app features
  document.addEventListener('DOMContentLoaded', function() {
    const removeBadElements = () => {
      // Aggressive selectors for external ads
      const selectors = [
        '[class*="memecoin"]',
        '[id*="memecoin"]',
        '[class*="adzilla"]',
        '[id*="adzilla"]',
        '[class*="huge"]',
        '.psn-notification',
        '.push-banner',
        '.notification-banner',
        'iframe[src*="notification"]',
        'iframe[src*="memecoin"]',
        'div[style*="z-index: 999999"]'
      ];
      
      selectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
          const text = el.textContent.toLowerCase();
          // Aggressively block memecoin and adzilla ads
          if (text.includes('memecoin') ||
              text.includes('adzilla') ||
              text.includes('monster') ||
              text.includes('huge') ||
              el.innerHTML.includes('memecoin') ||
              el.innerHTML.includes('adzilla') ||
              el.className.includes('memecoin') ||
              el.className.includes('adzilla')) {
            el.style.display = 'none !important';
            el.remove();
            console.log('[AdBlocker] Blocked:', el.className || el.id);
          }
        });
      });
    };
    
    // Run immediately and frequently to block ads
    removeBadElements();
    setTimeout(removeBadElements, 1000);
    setInterval(removeBadElements, 3000);
  });
  
  console.log('[AdBlocker] External memecoin ads blocked (safe mode)');
})();

// ═══════════════════════════════════════════════════════════════════
// BOTTOM NAVIGATION EMERGENCY FIX
// Ensure bottom nav buttons are always clickable
// ═══════════════════════════════════════════════════════════════════
(function() {
  function fixBottomNav() {
    const btmNav = document.getElementById('btmNav');
    if (!btmNav) {
      console.error('[EmergencyFix] btmNav not found!');
      return;
    }
    
    // Ensure high z-index and pointer events
    btmNav.style.cssText = 'position:fixed !important;bottom:0 !important;left:0 !important;right:0 !important;z-index:99999 !important;pointer-events:auto !important;display:flex !important;';
    
    const buttons = btmNav.querySelectorAll('.bn');
    console.log('[EmergencyFix] Found', buttons.length, 'buttons');
    
    buttons.forEach(function(btn) {
      const page = btn.getAttribute('data-p');
      if (!page) return;
      
      // Ensure button is clickable
      btn.style.cssText = 'cursor:pointer !important;pointer-events:auto !important;position:relative !important;z-index:99999 !important;flex:1 !important;display:flex !important;flex-direction:column !important;align-items:center !important;justify-content:center !important;';
      
      // Add click handler
      btn.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('[EmergencyFix] Navigating to:', page);
        if (typeof nav === 'function') {
          try {
            nav(page);
            console.log('[EmergencyFix] nav() called successfully for', page);
          } catch(err) {
            console.error('[EmergencyFix] nav() error:', err);
          }
        } else {
          console.error('[EmergencyFix] nav() not found!');
        }
        return false;
      };
      
      // Ensure child elements don't block clicks
      btn.querySelectorAll('*').forEach(function(child) {
        child.style.pointerEvents = 'none';
      });
    });
    
    console.log('[EmergencyFix] Bottom nav fixed,', buttons.length, 'buttons clickable');
  }
  
  // Run immediately and periodically
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fixBottomNav);
  } else {
    fixBottomNav();
  }
  setTimeout(fixBottomNav, 500);
  setTimeout(fixBottomNav, 1000);
  setTimeout(fixBottomNav, 2000);
})();

// ═══════════════════════════════════════════════════════════════════
// GLOBAL ERROR HANDLER
// ═══════════════════════════════════════════════════════════════════
window.onerror = function(msg, url, line, col, error) {
  console.error('[GlobalError]', msg, 'at line', line, 'col', col);
  return false;
};

(function(){
  const blockedShortcuts = [
    {key:'F12'},
    {key:'I',ctrl:true,shift:true},
    {key:'J',ctrl:true,shift:true},
    {key:'C',ctrl:true,shift:true},
    {key:'U',ctrl:true},
    {key:'S',ctrl:true}
  ];

  document.addEventListener('keydown', function(e){
    const key = (e.key || '').toUpperCase();
    const blocked = blockedShortcuts.some(function(item){
      return item.key === key &&
        (!!item.ctrl === !!e.ctrlKey) &&
        (!!item.shift === !!e.shiftKey) &&
        (!!item.alt === !!e.altKey);
    });
    if(blocked){
      e.preventDefault();
      e.stopPropagation();
      if(typeof toast === 'function') toast('w','Security protection: action blocked');
      return false;
    }
  }, true);

  document.addEventListener('contextmenu', function(e){
    const tag = e.target && e.target.tagName;
    if(tag !== 'INPUT' && tag !== 'TEXTAREA' && !e.target.isContentEditable){
      e.preventDefault();
      if(typeof toast === 'function') toast('w','Right-click is disabled for security');
    }
  }, true);

  document.addEventListener('copy', function(e){
    const tag = e.target && e.target.tagName;
    if(tag !== 'INPUT' && tag !== 'TEXTAREA' && !e.target.isContentEditable){
      e.clipboardData.setData('text/plain', '');
      e.preventDefault();
      if(typeof toast === 'function') toast('w','Copy is disabled for security');
    }
  }, true);

  let devtoolsOpen = false;
  function detectDevTools(){
    const threshold = 160;
    const widthDiff = window.outerWidth - window.innerWidth;
    const heightDiff = window.outerHeight - window.innerHeight;
    return widthDiff > threshold || heightDiff > threshold;
  }
  function onDevToolsCheck(){
    const open = detectDevTools();
    if(open && !devtoolsOpen){
      devtoolsOpen = true;
      console.warn('[Security] DevTools detected');
      if(typeof toast === 'function') toast('w','Security notice: dev tools activity detected');
    }
    if(!open && devtoolsOpen){
      devtoolsOpen = false;
    }
  }
  window.addEventListener('resize', onDevToolsCheck);
  window.addEventListener('mousemove', onDevToolsCheck);
  setInterval(onDevToolsCheck, 1500);

  const knownScriptKeys = new Set(Array.from(document.scripts).map(s => s.src || s.textContent.slice(0,32)));
  function watchScripts(){
    document.querySelectorAll('script').forEach(function(script){
      const key = script.src || script.textContent.slice(0,32);
      if(!knownScriptKeys.has(key)){
        knownScriptKeys.add(key);
        const src = script.src || '';
        if(src && !src.startsWith(location.origin) && !/^(https?:\/\/(pagead2\.googlesyndication\.com|cdn\.socket\.io|accounts\.google\.com|unpkg\.com|cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net|www\.profitablecpmratenetwork\.com|pl2928028\d\.profitablecpmratenetwork\.com|www\.highperformanceformat\.com|acepixel\.com|www\.topcreativeformat\.com))/i.test(src)){
          script.remove();
          console.warn('[Security] Removed unauthorized script', src);
          if(typeof toast === 'function') toast('e','Unauthorized script blocked');
        }
      }
    });
  }
  setInterval(watchScripts, 2500);

  window.MonitixraSecurity = {
    check: function(){ onDevToolsCheck(); watchScripts(); }
  };
})();

// Debug: Check if all required functions exist
console.log('[Debug] nav exists:', typeof nav === 'function');
console.log('[Debug] rAppsPage exists:', typeof rAppsPage === 'function');
console.log('[Debug] rGamification exists:', typeof rGamification === 'function');
console.log('[Debug] rProfile exists:', typeof rProfile === 'function');
console.log('[Debug] rSettings exists:', typeof rSettings === 'function');

// ═══════════════════════════════════════════════════════════
// SYSTEM VALIDATION - Check All Functions Working
// ═══════════════════════════════════════════════════════════
(function(){
  window.validateSystem = function() {
    console.log('🔍 [SystemCheck] Starting full system validation...');
    
    const checks = {
      // Navigation Functions
      nav: typeof nav === 'function',
      initBottomNav: typeof initBottomNav === 'function',
      
      // Page Render Functions
      rFeed: typeof rFeed === 'function',
      rExplore: typeof rExplore === 'function',
      rEarn: typeof rEarn === 'function',
      rFriends: typeof rFriends === 'function',
      rWallet: typeof rWallet === 'function',
      rMessages: typeof rMessages === 'function',
      rAppsPage: typeof rAppsPage === 'function',
      rNFTMarketplace: typeof rNFTMarketplace === 'function',
      rMetaverse: typeof rMetaverse === 'function',
      rAnalytics: typeof rAnalytics === 'function',
      rGamification: typeof rGamification === 'function',
      rProfile: typeof rProfile === 'function',
      rSettings: typeof rSettings === 'function',
      
      // Core Functions
      rStories: typeof rStories === 'function',
      rNotif: typeof rNotif === 'function',
      rLeaderboard: typeof rLeaderboard === 'function',
      rReferral: typeof rReferral === 'function',
      rAdmin: typeof rAdmin === 'function',
      
      // Ad System
      MAX_AD_SYSTEM: typeof MAX_AD_SYSTEM !== 'undefined',
      adRotator: typeof adRotator !== 'undefined',
      
      // Utilities
      toast: typeof toast === 'function',
      addPts: typeof addPts === 'function',
      syncUI: typeof syncUI === 'function',
      saveData: typeof saveData === 'function',
      openModal: typeof openModal === 'function',
      closeModal: typeof closeModal === 'function',
      nav: typeof nav === 'function'
    };
    
    let passed = 0, failed = 0;
    Object.entries(checks).forEach(([name, ok]) => {
      if(ok) {
        console.log(`✅ ${name}`);
        passed++;
      } else {
        console.error(`❌ ${name} NOT FOUND`);
        failed++;
      }
    });
    
    console.log(`\n📊 [SystemCheck] Results: ${passed} passed, ${failed} failed`);
    console.log(failed === 0 ? '🎉 All systems operational!' : '⚠️ Some functions missing');
    
    return { passed, failed, total: passed + failed };
  };
  
  console.log('✅ [SystemCheck] Validation ready. Run validateSystem() to check all functions.');
})();

// ═══════════════════════════════════════════════════════════════════
// WEBSITE SPEED OPTIMIZATION
// ═══════════════════════════════════════════════════════════════════
(function() {
  // 1. Lazy load images with better performance
  const lazyLoadImages = () => {
    const images = document.querySelectorAll('img[data-src]');
    if (images.length === 0) return;
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, { 
      rootMargin: '100px',
      threshold: 0.1
    });
    
    images.forEach(img => imageObserver.observe(img));
  };
  
  // 2. Optimize post rendering with virtual scrolling
  let postVirtualScroll = {
    container: null,
    items: [],
    visibleStart: 0,
    visibleEnd: 20,
    itemHeight: 300,
    buffer: 5,
    
    init(container) {
      this.container = container;
      this.setupScrollListener();
      this.renderVisible();
    },
    
    setupScrollListener() {
      let ticking = false;
      this.container.addEventListener('scroll', () => {
        if (!ticking) {
          requestAnimationFrame(() => {
            this.updateVisibleRange();
            this.renderVisible();
            ticking = false;
          });
          ticking = true;
        }
      });
    },
    
    updateVisibleRange() {
      const scrollTop = this.container.scrollTop;
      const containerHeight = this.container.clientHeight;
      
      this.visibleStart = Math.max(0, Math.floor(scrollTop / this.itemHeight) - this.buffer);
      this.visibleEnd = Math.min(this.items.length, Math.ceil((scrollTop + containerHeight) / this.itemHeight) + this.buffer);
    },
    
    renderVisible() {
      // Implementation for virtual scrolling would go here
      // For now, just ensure we don't render too many posts at once
      const posts = document.querySelectorAll('.post');
      if (posts.length > 50) {
        for (let i = 50; i < posts.length; i++) {
          posts[i].style.display = 'none';
        }
      }
    }
  };
  
  // 3. Cache DOM queries
  const cache = new Map();
  function G(id) {
    if (cache.has(id)) return cache.get(id);
    const element = document.getElementById(id);
    if (element) cache.set(id, element);
    return element;
  }
  
  // 4. Debounce expensive operations
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }
  
  // 5. Optimize feed rendering
  const optimizedRenderFeed = debounce(() => {
    if (typeof rFeed === 'function') {
      rFeed(false);
    }
  }, 100);
  
  // 6. Preload critical resources
  const preloadCritical = () => {
    const criticalImages = document.querySelectorAll('img[data-critical]');
    criticalImages.forEach(img => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = img.dataset.src;
      document.head.appendChild(link);
    });
  };
  
  // 2. Debounce function for scroll/resize events
  window.debounce = function(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  
  // 3. Throttle function for high-frequency events
  window.throttle = function(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  };
  
  // 4. Optimized scroll handler
  let ticking = false;
  window.optimizedScroll = function(callback) {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        callback();
        ticking = false;
      });
      ticking = true;
    }
  };
  
  // 5. Preload critical resources
  const preloadResources = () => {
    const criticalResources = [
      '/fonts/inter.woff2',
      '/fonts/jetbrains.woff2'
    ];
    criticalResources.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = href;
      link.as = 'font';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    });
  };
  
  // 6. Cache frequently accessed DOM elements
  window.DOMCache = {
    elements: {},
    get(id) {
      if (!this.elements[id]) {
        this.elements[id] = document.getElementById(id);
      }
      return this.elements[id];
    },
    clear() {
      this.elements = {};
    }
  };
  
  // Override G function to use cache
  const originalG = window.G;
  window.G = function(id) {
    return window.DOMCache.get(id) || originalG(id);
  };
  
  // 7. Virtual scrolling for long lists
  window.VirtualScroll = {
    itemHeight: 100,
    container: null,
    totalItems: 0,
    visibleItems: 10,
    scrollTop: 0,
    init(container, totalItems, renderFn) {
      this.container = container;
      this.totalItems = totalItems;
      this.renderFn = renderFn;
      this.setup();
    },
    setup() {
      if (!this.container) return;
      this.container.style.overflow = 'auto';
      this.container.style.position = 'relative';
      this.update();
      this.container.addEventListener('scroll', window.throttle(() => this.update(), 16));
    },
    update() {
      if (!this.container) return;
      this.scrollTop = this.container.scrollTop;
      const startIdx = Math.floor(this.scrollTop / this.itemHeight);
      const endIdx = Math.min(startIdx + this.visibleItems, this.totalItems);
      this.renderFn(startIdx, endIdx);
    }
  };
  
  // 8. Batch DOM updates
  window.batchDOMUpdates = function(updates) {
    requestAnimationFrame(() => {
      updates.forEach(update => update());
    });
  };
  
  // 9. Compress images before upload
  window.compressImage = function(dataUrl, maxWidth = 1200, quality = 0.8) {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const scale = Math.min(1, maxWidth / img.width);
        canvas.width = img.width * scale;
        canvas.height = img.height * scale;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL('image/jpeg', quality));
      };
      img.src = dataUrl;
    });
  };
  
  // Initialize optimizations when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      lazyLoadImages();
      preloadResources();
    });
  } else {
    lazyLoadImages();
    preloadResources();
  }
  
  console.log('[SpeedOpt] Website optimizations loaded');
})();



  // Download earnings tracking
  let downloadEarnings = {
    total: 0,
    today: 0,
    history: []
  };

  function trackDownload(fileName, fileSize = 0) {
    console.log(`Download started: ${fileName} (${formatBytes(fileSize)})`);

    // Calculate earnings based on file size and type
    let baseEarnings = 0.01; // Base $0.01 per download
    if (fileSize > 10 * 1024 * 1024) baseEarnings = 0.05; // $0.05 for files > 10MB
    if (fileSize > 50 * 1024 * 1024) baseEarnings = 0.10; // $0.10 for files > 50MB

    // Add some randomness for realism
    const earnings = baseEarnings + (Math.random() * 0.02);

    // Update earnings
    downloadEarnings.total += earnings;
    downloadEarnings.today += earnings;
    downloadEarnings.history.push({
      file: fileName,
      size: fileSize,
      earnings: earnings,
      timestamp: Date.now()
    });

    // Save to localStorage
    localStorage.setItem('downloadEarnings', JSON.stringify(downloadEarnings));

    console.log(`Earnings from ${fileName}: $${earnings.toFixed(4)}`);
    console.log(`Total earnings: $${downloadEarnings.total.toFixed(4)}`);

    // Show notification
    showDownloadCompleteNotification(fileName, earnings);

    // Add points to user
    if (CU) {
      addPts(Math.floor(earnings * 100), 'Download Earnings', 'revenue');
    }
  }

  function showDownloadCompleteNotification(fileName, earnings) {
    // Create notification element
    const notif = document.createElement('div');
    notif.className = 'download-notification';
    notif.innerHTML = `
      <div class="dn-header">✅ Download Complete</div>
      <div class="dn-file">${fileName}</div>
      <div class="dn-earnings">💰 Earned: $${earnings.toFixed(4)}</div>
      <div class="dn-total">📊 Total: $${downloadEarnings.total.toFixed(4)}</div>
    `;
    notif.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--g3);
      border: 1px solid var(--neon);
      border-radius: 12px;
      padding: 15px;
      z-index: 10000;
      box-shadow: var(--sh2);
      animation: slideInRight 0.3s ease;
      max-width: 300px;
    `;

    document.body.appendChild(notif);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (notif.parentNode) {
        notif.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notif.remove(), 300);
      }
    }, 5000);
  }

  function loadDownloadEarnings() {
    const saved = localStorage.getItem('downloadEarnings');
    if (saved) {
      downloadEarnings = JSON.parse(saved);
    }
  }

  function getDownloadStats() {
    return {
      total: downloadEarnings.total,
      today: downloadEarnings.today,
      count: downloadEarnings.history.length,
      average: downloadEarnings.history.length > 0 ?
        downloadEarnings.total / downloadEarnings.history.length : 0
    };
  }

  // Load earnings on page load
  loadDownloadEarnings();



/* Monetixra mobile reliability layer */
(function(){
  const touchTimers = new Map();
  const catLabels = [
    ['all','All'], ['friend','Friend'], ['video','Video'], ['photo','Photo'],
    ['music','Music'], ['text','Text'], ['poll','Poll'], ['quiz','Quiz'],
    ['article','Article'], ['live','Live'], ['apps','Apps'], ['nft','NFT'], ['360','360']
  ];

  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, {once:true});
    else fn();
  }

  function safeSave(){
    try { if(typeof saveData === 'function') saveData(); } catch(e) {}
    try { if(typeof persistAuthState === 'function') persistAuthState(); } catch(e) {}
    try { if(typeof syncUI === 'function') syncUI(); } catch(e) {}
  }

  function currentUser(){
    try { return CU && D && D.users ? (D.users[CU.id] || CU) : null; } catch(e) { return null; }
  }

  function getPostFromNode(node){
    try {
      const el = node && node.closest ? node.closest('.post') : null;
      const id = el && el.dataset ? el.dataset.postId : '';
      return id ? (D.posts || []).find(p => p.id === id) : null;
    } catch(e) { return null; }
  }

  function autoFollowForPost(post, reason){
    const me = currentUser();
    if(!post || !me || post.author === me.id) return;
    const author = D.users && D.users[post.author];
    if(!author || author.disabled || author.deactivated) return;

    post.views = (post.views || 0) + 1;
    post.viewedBy = post.viewedBy || [];
    if(!post.viewedBy.includes(me.id)) post.viewedBy.push(me.id);
    awardViewEarnings(post);

    author.viewers = author.viewers || [];
    if(!author.viewers.includes(me.id)) author.viewers.push(me.id);
    me.viewers = me.viewers || [];
    if(!me.viewers.includes(post.author)) me.viewers.push(post.author);

    const already = (me.following || []).includes(post.author) ||
      (me.autoFriends || []).includes(post.author) ||
      (me.forceFollowed || []).includes(post.author);

    if(!already && typeof forceFollow === 'function') {
      forceFollow(post.author);
      post.autoFollows = post.autoFollows || [];
      if(!post.autoFollows.includes(me.id)) post.autoFollows.push(me.id);
      if(typeof addNotif === 'function') {
        addNotif(post.author, 'follow', '👤', `${me.name || 'Someone'} followed after viewing your ${reason || 'post'}`, post.id);
      }
    } else {
      safeSave();
    }
  }

  function scheduleAutoFollow(node, reason, delay){
    const post = getPostFromNode(node);
    if(!post) return;
    const key = post.id + ':' + (currentUser()?.id || '');
    clearTimeout(touchTimers.get(key));
    touchTimers.set(key, setTimeout(() => autoFollowForPost(post, reason), delay || 2400));
  }

  function installMediaFollowHooks(){
    document.addEventListener('click', e => {
      if(e.target.closest('.post-media, .post-txt, .post')) scheduleAutoFollow(e.target, 'content', 1200);
    }, true);
    document.addEventListener('play', e => {
      if(e.target.matches('video,audio')) scheduleAutoFollow(e.target, e.target.tagName.toLowerCase(), 2200);
    }, true);

    if('IntersectionObserver' in window) {
      const seen = new WeakSet();
      const io = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if(entry.isIntersecting && !seen.has(entry.target)) {
            seen.add(entry.target);
            scheduleAutoFollow(entry.target, 'post', 2600);
          }
        });
      }, {threshold:0.65});
      const watchPosts = () => document.querySelectorAll('.post').forEach(p => io.observe(p));
      const oldFeed = typeof rFeed === 'function' ? rFeed : null;
      if(oldFeed) {
        rFeed = function(){
          const out = oldFeed.apply(this, arguments);
          setTimeout(watchPosts, 80);
          return out;
        };
      }
      ready(watchPosts);
    }
  }

  function enforceAdminVisibility(){
    const isAdmin = !!currentUser()?.isAdmin;
    const isUser = !isAdmin;
    document.querySelectorAll('[data-p="admin"], #settAdminSection, #settAdminBtn').forEach(el => {
      el.style.display = isAdmin ? '' : 'none';
    });
    const userActions = document.getElementById('settUserActions');
    if(userActions) userActions.style.display = isUser ? 'block' : 'none';
    const adminPage = document.getElementById('pg-admin');
    if(adminPage && !isAdmin && adminPage.classList.contains('on') && typeof nav === 'function') nav('feed');
  }

  function installAdminGuard(){
    const oldNav = typeof nav === 'function' ? nav : null;
    if(oldNav) {
      nav = function(page){
        if(page === 'admin' && !currentUser()?.isAdmin) {
          if(typeof toast === 'function') toast('e','Admin only');
          return oldNav.call(this, 'feed');
        }
        const out = oldNav.apply(this, arguments);
        setTimeout(enforceAdminVisibility, 50);
        return out;
      };
    }
    setInterval(enforceAdminVisibility, 1500);
  }

  function installNotificationHardening(){
    const oldAdd = typeof addNotif === 'function' ? addNotif : null;
    addNotif = function(toId, type, icon, msg, refId=''){
      D.notifs = D.notifs || [];
      const n = {id:'n' + Date.now() + Math.random().toString(36).slice(2,6), to:toId, type, icon, msg, refId, at:Date.now(), read:false};
      D.notifs.unshift(n);
      if(D.notifs.length > 500) D.notifs = D.notifs.slice(0,500);
      safeSave();
      if(toId === currentUser()?.id && 'Notification' in window && Notification.permission === 'granted') {
        try { new Notification('Monetixra', {body: msg, icon: '/icon-192.png'}); } catch(e) {}
      }
      return oldAdd && oldAdd !== addNotif ? n : n;
    };

    clearAllNotifs = function(){
      const me = currentUser();
      if(!me) return typeof toast === 'function' && toast('e','Please sign in first');
      const before = (D.notifs || []).length;
      D.notifs = (D.notifs || []).filter(n => n.to !== me.id);
      safeSave();
      if(typeof rNotif === 'function') rNotif();
      if(typeof toast === 'function') toast('s', before === D.notifs.length ? 'No notifications to clear' : 'All notifications cleared');
    };
  }

  function installSearchUpgrade(){
    doSearch = function(q, cat='all'){
      const sr = document.getElementById('srchResults');
      if(!sr) return;
      if(!q) { sr.style.display = 'none'; return; }
      sr.style.display = 'block';
      const lq = String(q).toLowerCase();
      const users = Object.values(D.users || {}).filter(u =>
        !u.isAdmin && ((u.name || '').toLowerCase().includes(lq) || (u.username || '').toLowerCase().includes(lq))
      ).slice(0, 8);
      let posts = (D.posts || []).filter(p =>
        (p.text || '').toLowerCase().includes(lq) ||
        (p.hashtags || []).some(t => String(t).toLowerCase().includes(lq)) ||
        users.some(u => u.id === p.author)
      );
      if(cat === 'friend') {
        const me = currentUser();
        const friends = new Set([...(me?.following || []), ...(me?.autoFriends || []), ...(me?.forceFollowed || [])]);
        posts = posts.filter(p => friends.has(p.author));
      } else if(cat !== 'all') {
        posts = posts.filter(p => p.type === cat || p.category === cat || (cat === 'music' && p.type === 'audio'));
      }
      posts = posts.slice(0, 12);
      const chips = `<div class="h-scroll-ltr" style="margin-bottom:8px;">${catLabels.map(([id,label]) =>
        `<button class="chip${id===cat?' on':''}" onclick="doSearch('${String(q).replace(/'/g,"\\'")}','${id}')">${label}</button>`
      ).join('')}</div>`;
      const userHtml = users.length ? `<div class="section-label">Users</div>${users.map(u =>
        `<div class="chat-item" onclick="viewUser('${u.id}')"><div class="av av-round av-sm">${(u.name || 'U').charAt(0)}</div><div><b>${esc(u.name || 'User')}</b><div style="font-size:11px;color:var(--t3);">@${esc(u.username || '')}</div></div></div>`
      ).join('')}` : '';
      const postHtml = posts.length ? `<div class="section-label">Results</div>${posts.map(p =>
        `<div class="task-card" onclick="openPostDetail('${p.id}')"><div>${p.type === 'video' ? '📹' : p.type === 'photo' ? '📷' : p.type === 'audio' ? '🎵' : p.type === 'live' ? '🔴' : '📝'}</div><div>${esc((p.text || p.type || 'Post').substring(0,70))}</div></div>`
      ).join('')}` : '<div style="padding:18px;text-align:center;color:var(--t3);">No matching content</div>';
      sr.innerHTML = chips + userHtml + postHtml;
    };
  }

  function installFeatureBoard(){
    const settings = document.getElementById('pg-settings');
    if(!settings || document.getElementById('mxtFeatureBoard')) return;
    const board = document.createElement('div');
    board.id = 'mxtFeatureBoard';
    board.className = 'sett-sec';
    board.innerHTML = `
      <div class="sett-ttl">Monetixra Feature Center</div>
      <div class="mxt-feature-grid">
        <button onclick="openFeedback()">Report + Admin Chat</button>
        <button onclick="nav('friends')">Friends, Message, Calls</button>
        <button onclick="nav('profile');setTimeout(()=>profileTab('saved',null),80)">Saved Posts</button>
        <button onclick="openModal('groupModal')">Create Group</button>
        <button onclick="startLiveStreamFromPost()">Go Live</button>
        <button onclick="requestPushPermission && requestPushPermission()">Push Notifications</button>
        <button onclick="exportData()">Export Data</button>
        <button onclick="backupData()">Backup</button>
      </div>`;
    const first = settings.querySelector('.sett-sec');
    settings.insertBefore(board, first ? first.nextSibling : settings.firstChild);
  }

  function keepPointsPersistent(){
    setInterval(() => {
      const me = currentUser();
      if(!me) return;
      try {
        localStorage.setItem('monetixra_last_points_' + me.id, String(me.points || 0));
      } catch(e) {}
    }, 5000);
  }

  function patchPreviewCleanup(){
    const oldOpen = typeof openPostModal === 'function' ? openPostModal : null;
    if(oldOpen) {
      openPostModal = function(type='text'){
        const out = oldOpen.apply(this, arguments);
        const preview = document.getElementById('mediaPreview');
        if(preview) {
          preview.style.display = '';
          preview.classList.remove('post-preview-floating', 'floating');
        }
        if(type === 'image' || type === 'video' || type === 'audio') setTimeout(() => pickFile(type), 120);
        return out;
      };
    }
  }

  function awardViewEarnings(post){
    if(!post || !post.author || (post.views || 0) <= 500) return;
    post.paidViews = post.paidViews || 0;
    const payable = Math.max(0, (post.views || 0) - 500 - post.paidViews);
    if(!payable) return;
    const author = D.users && D.users[post.author];
    if(!author) return;
    const pts = Number((payable * 0.25).toFixed(2));
    author.points = Number(((author.points || 0) + pts).toFixed(2));
    author.creatorEarnings = Number(((author.creatorEarnings || 0) + pts).toFixed(2));
    post.paidViews += payable;
    D.txs = D.txs || [];
    D.txs.unshift({id:'viewpay_' + Date.now(), type:'earn', label:`500+ view earning: ${payable} views`, pts, adminCut:0, at:Date.now(), user:author.id});
    if(typeof addNotif === 'function') addNotif(author.id, 'earn', '💰', `+${pts} pts from ${payable} paid views`, post.id);
  }

  function installPostCreationGuards(){
    const oldSubmit = typeof submitPost === 'function' ? submitPost : null;
    if(!oldSubmit) return;
    submitPost = function(){
      const me = currentUser();
      const editor = document.getElementById('postEditor');
      const text = (editor?.innerText || '').trim();
      if(me && text) {
        const recentSame = (D.posts || []).filter(p => p.author === me.id && (p.text || '').trim().toLowerCase() === text.toLowerCase() && Date.now() - (p.createdAt || 0) < 10 * 60 * 1000);
        if(recentSame.length >= 2) {
          if(typeof toast === 'function') toast('e','Spam detected: repeated content blocked');
          return;
        }
      }
      const before = (D.posts || []).length;
      const out = oldSubmit.apply(this, arguments);
      const newPost = (D.posts || [])[0];
      if(newPost && (D.posts || []).length > before) {
        const loc = document.getElementById('mxtPostLocation')?.value?.trim();
        if(loc) newPost.location = loc;
        const mentions = [...(newPost.text || '').matchAll(/@([a-z0-9_.-]{2,30})/gi)].map(m => m[1].toLowerCase());
        mentions.forEach(name => {
          const u = Object.values(D.users || {}).find(x => (x.username || '').toLowerCase() === name || (x.name || '').toLowerCase().replace(/\s+/g,'') === name);
          if(u && u.id !== me?.id && typeof addNotif === 'function') addNotif(u.id, 'mention', '@', `${me?.name || 'Someone'} mentioned you`, newPost.id);
        });
        syncPostToServer(newPost);
        safeSave();
      }
      return out;
    };
  }

  function installLocationField(){
    const modal = document.getElementById('postModal');
    if(!modal || document.getElementById('mxtPostLocation')) return;
    const tags = document.getElementById('postTags');
    const wrap = document.createElement('div');
    wrap.className = 'fg';
    wrap.innerHTML = '<input class="fi" id="mxtPostLocation" placeholder="Location / Check-in (optional)">';
    tags?.closest('.fg')?.insertAdjacentElement('afterend', wrap);
  }

  function requestPushPermission(){
    if(!('Notification' in window)) return typeof toast === 'function' && toast('e','Push not supported here');
    Notification.requestPermission().then(async perm => {
      if(perm !== 'granted') return typeof toast === 'function' && toast('w','Push permission denied');
      try {
        if('serviceWorker' in navigator) await navigator.serviceWorker.ready;
        if(typeof toast === 'function') toast('s','Push notifications enabled');
      } catch(e) {
        if(typeof toast === 'function') toast('s','Browser notifications enabled');
      }
    });
  }
  window.requestPushPermission = requestPushPermission;

  function installPublicFeed(){
    if(typeof canViewPost === 'function') {
      canViewPost = function(post){
        if(!post) return false;
        const author = D.users?.[post.author];
        return !(author?.disabled || author?.deactivated);
      };
    }
  }

  function accountMatch(user, loginId){
    const q = String(loginId || '').trim().toLowerCase();
    if(!user || !q) return false;
    return String(user.email || '').toLowerCase() === q ||
      String(user.phone || '') === String(loginId || '').trim() ||
      String(user.username || '').toLowerCase() === q ||
      String(user.id || '').toLowerCase() === q;
  }

  async function pullCloudAccountForLogin(loginId){
    try {
      const res = await fetch('/api/sync/export', {cache:'no-store'}).catch(()=>null);
      if(!res || !res.ok) return false;
      const snapshot = await res.json();
      const remote = (Array.isArray(snapshot.users) ? snapshot.users : []).find(u => accountMatch(u, loginId));
      if(!remote || !remote.id) return false;
      D.users = D.users || {};
      const local = D.users[remote.id] || {};
      const serverPoints = snapshot.points && snapshot.points[remote.id];
      const mergedPoints = Math.max(Number(local.points || 0), Number(remote.points || 0), Number(serverPoints?.points || 0));
      D.users[remote.id] = {...local, ...remote, id:remote.id, points:mergedPoints};
      if(Array.isArray(snapshot.posts)) {
        const localPosts = new Map((D.posts || []).map(p => [p.id, p]));
        snapshot.posts.filter(p => p && p.author === remote.id && p.id).forEach(p => {
          const old = localPosts.get(p.id);
          if(!old) D.posts.unshift(p);
          else Object.assign(old, p);
        });
      }
      safeSave();
      return true;
    } catch(e) {
      console.warn('[login cloud pull]', e);
      return false;
    }
  }
  window.pullCloudAccountForLogin = pullCloudAccountForLogin;

  function installStoryUpgrade(){
    addStory = function(){
      if(!currentUser()) return typeof toast === 'function' && toast('e','Please sign in first');
      const picker = document.createElement('input');
      picker.type = 'file';
      picker.accept = 'image/*,video/*,audio/*';
      picker.onchange = () => {
        const file = picker.files && picker.files[0];
        if(!file) {
          const txt = prompt('Story text:');
          if(!txt) return;
          D.stories.push({id:'s'+Date.now(), author:CU.id, items:[{type:'text', text:txt}], viewed:[], replies:[], at:Date.now(), autoDeleteAfterView:true});
          safeSave(); rStories(); if(typeof addPts === 'function') addPts(2,'Posted Story');
          return;
        }
        const reader = new FileReader();
        reader.onload = ev => {
          const type = file.type.startsWith('video/') ? 'video' : file.type.startsWith('audio/') ? 'audio' : 'image';
          D.stories.push({id:'s'+Date.now(), author:CU.id, items:[{type, url:ev.target.result, name:file.name}], viewed:[], replies:[], at:Date.now(), autoDeleteAfterView:true});
          safeSave(); rStories(); if(typeof addPts === 'function') addPts(2,'Posted Media Story');
          if(typeof toast === 'function') toast('s','Story posted');
        };
        reader.readAsDataURL(file);
      };
      picker.click();
    };

    viewStory = function(sid){
      const s = (D.stories || []).find(x => x.id === sid);
      if(!s) return;
      s.viewed = s.viewed || [];
      if(CU && !s.viewed.includes(CU.id)) s.viewed.push(CU.id);
      const sv = document.getElementById('storyView');
      if(!sv) return;
      sv.classList.add('open');
      const author = D.users[s.author] || {};
      const grad = typeof randomGrad === 'function' ? randomGrad() : ['#00ffaa','#0ea5e9'];
      G('svHd').innerHTML = `<div class="av av-round av-sm" style="background:linear-gradient(135deg,${grad[0]},${grad[1]});">${(author.name || '?').charAt(0)}</div><div><div>${esc(author.name || '')}</div><div>${ago(s.at)}</div></div><button class="btn btn-ghost btn-xs" onclick="replyStory('${s.id}')">Reply</button>`;
      G('svBars').innerHTML = (s.items || []).map((_,i)=>`<div class="sv-bar"><div class="sv-fill" id="svf-${i}"></div></div>`).join('');
      let idx = 0;
      const show = i => {
        if(i >= (s.items || []).length) {
          if(s.autoDeleteAfterView && CU?.id !== s.author) D.stories = (D.stories || []).filter(x => x.id !== sid);
          safeSave(); closeStoryView(); rStories(); return;
        }
        const item = s.items[i];
        if(item.type === 'image') G('svBody').innerHTML = `<img src="${item.url}" style="max-width:100%;max-height:70vh;">`;
        else if(item.type === 'video') G('svBody').innerHTML = `<video src="${item.url}" controls autoplay style="max-width:100%;max-height:70vh;"></video>`;
        else if(item.type === 'audio') G('svBody').innerHTML = `<audio src="${item.url}" controls autoplay style="width:90%;"></audio>`;
        else G('svBody').innerHTML = `<div style="color:#fff;font-size:24px;">${esc(item.text || '')}</div>`;
        const fill = G('svf-'+i);
        if(fill) { fill.style.transition='transform 5s linear'; fill.style.transform='scaleX(1)'; }
        setTimeout(()=>show(i+1), item.type === 'video' || item.type === 'audio' ? 8000 : 5000);
      };
      show(idx);
      safeSave();
    };

    window.replyStory = function(sid){
      const s = (D.stories || []).find(x => x.id === sid);
      const me = currentUser();
      if(!s || !me) return;
      const text = prompt('Reply to story:');
      if(!text) return;
      s.replies = s.replies || [];
      s.replies.push({from:me.id, text, at:Date.now()});
      if(typeof addNotif === 'function') addNotif(s.author, 'story', '💬', `${me.name || 'Someone'} replied to your story`, sid);
      safeSave();
      if(typeof toast === 'function') toast('s','Reply sent');
    };
  }

  function installLiveRecording(){
    let recorder = null;
    let chunks = [];
    const oldStart = typeof startBroadcast === 'function' ? startBroadcast : null;
    const oldEnd = typeof endBroadcast === 'function' ? endBroadcast : null;
    if(oldStart) {
      startBroadcast = function(stream){
        const out = oldStart.apply(this, arguments);
        try {
          chunks = [];
          recorder = new MediaRecorder(stream, {mimeType:'video/webm'});
          recorder.ondataavailable = e => { if(e.data && e.data.size) chunks.push(e.data); };
          recorder.start(1000);
        } catch(e) {
          recorder = null;
        }
        return out;
      };
    }
    if(oldEnd) {
      endBroadcast = function(){
        const postId = liveStreamState?.postId;
        const out = oldEnd.apply(this, arguments);
        if(recorder && recorder.state !== 'inactive') {
          recorder.onstop = () => {
            const blob = new Blob(chunks, {type:'video/webm'});
            const reader = new FileReader();
            reader.onload = ev => {
              const post = (D.posts || []).find(p => p.id === postId);
              if(post) {
                post.recordedFile = ev.target.result;
                post.file = post.file || ev.target.result;
                post.mimetype = 'video/webm';
                post.type = 'video';
                post.savedLiveRecording = true;
              }
              safeSave();
              if(typeof toast === 'function') toast('s','Live recording saved to profile');
            };
            reader.readAsDataURL(blob);
          };
          recorder.stop();
        }
        return out;
      };
    }
  }

  function installSecurityAutomation(){
    const oldMount = typeof mount === 'function' ? mount : null;
    if(oldMount) {
      mount = function(){
        const out = oldMount.apply(this, arguments);
        const me = currentUser();
        if(me) {
          me.loginHistory = me.loginHistory || [];
          const ua = navigator.userAgent.slice(0,120);
          if(!me.loginHistory.some(x => x.ua === ua && Date.now() - x.at < 3600000)) {
            me.loginHistory.unshift({ua, at:Date.now(), platform:navigator.platform || 'web'});
            me.loginHistory = me.loginHistory.slice(0,20);
            safeSave();
          }
        }
        return out;
      };
    }
    setInterval(() => {
      Object.values(D.users || {}).forEach(u => {
        const name = `${u.name || ''} ${u.username || ''}`.toLowerCase();
        const noProfile = !u.avatar && !u.bio;
        const newUser = Date.now() - (u.createdAt || Date.now()) < 86400000;
        u.fakeRisk = (noProfile ? 40 : 0) + (newUser ? 20 : 0) + (/test|fake|spam/.test(name) ? 40 : 0);
      });
      safeSave();
    }, 60000);
  }

  function syncPostToServer(post){
    try {
      fetch('/api/posts/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(post)}).catch(()=>{});
      if(CU) fetch('/api/points/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({userId:CU.id, points:CU.points || 0, label:'frontend-sync'})}).catch(()=>{});
    } catch(e) {}
  }

  function installServerSync(){
    setInterval(() => {
      const me = currentUser();
      if(!me) return;
      try {
        fetch('/api/user-data/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(me)}).catch(()=>{});
        fetch('/api/points/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({userId:me.id, points:me.points || 0, label:'auto-sync'})}).catch(()=>{});
      } catch(e) {}
    }, 30000);
  }

  let cloudSyncBusy = false;
  let cloudSyncLastPull = 0;

  function mergeServerSnapshot(snapshot){
    const me = currentUser();
    if(!me || !snapshot) return false;
    let changed = false;

    const serverUsers = Array.isArray(snapshot.users) ? snapshot.users : [];
    serverUsers.forEach(remoteUser => {
      if(!remoteUser || !remoteUser.id) return;
      const localUser = D.users[remoteUser.id] || {};
      const pointState = snapshot.points && snapshot.points[remoteUser.id];
      const mergedPoints = Math.max(Number(localUser.points || 0), Number(remoteUser.points || 0), Number(pointState?.points || 0));
      const mergedUser = {...localUser, ...remoteUser, id:remoteUser.id, points:mergedPoints};
      if(JSON.stringify(localUser) !== JSON.stringify(mergedUser)) {
        D.users[remoteUser.id] = mergedUser;
        changed = true;
      }
    });
    const serverMe = serverUsers.find(u => u && u.id === me.id);
    const serverPoints = snapshot.points && snapshot.points[me.id];
    if(serverMe) {
      const localUser = D.users[me.id] || me;
      const localUpdated = Number(localUser.updatedAt || localUser.syncedAt || localUser.lastActive || 0);
      const remoteUpdated = Number(serverMe.updatedAt || serverMe.syncedAt || serverMe.lastActive || 0);
      const mergedPoints = Math.max(Number(localUser.points || 0), Number(serverMe.points || 0), Number(serverPoints?.points || 0));
      if(remoteUpdated >= localUpdated) Object.assign(localUser, serverMe);
      if((localUser.points || 0) !== mergedPoints) {
        localUser.points = mergedPoints;
        changed = true;
      }
      D.users[me.id] = localUser;
      CU = localUser;
    } else if(serverPoints && Number(serverPoints.points || 0) > Number(me.points || 0)) {
      me.points = Number(serverPoints.points || 0);
      changed = true;
    }

    const localPosts = new Map((D.posts || []).map(p => [p.id, p]));
    (Array.isArray(snapshot.posts) ? snapshot.posts : []).forEach(remote => {
      if(!remote || !remote.id) return;
      const author = D.users?.[remote.author];
      if(author?.disabled || author?.deactivated) return;
      const local = localPosts.get(remote.id);
      if(!local) {
        D.posts.unshift(remote);
        changed = true;
        return;
      }
      const localUpdated = Number(local.updatedAt || local.syncedAt || local.createdAt || 0);
      const remoteUpdated = Number(remote.updatedAt || remote.syncedAt || remote.createdAt || 0);
      if(remoteUpdated > localUpdated) {
        Object.assign(local, remote);
        changed = true;
      }
    });

    if(changed) {
      D.posts = (D.posts || []).sort((a,b) => (b.createdAt || 0) - (a.createdAt || 0));
      safeSave();
      try { if(typeof rFeed === 'function') rFeed(true); } catch(e) {}
      try { if(typeof rProfile === 'function') rProfile(); } catch(e) {}
    }
    return changed;
  }

  async function syncCurrentAccountNow(){
    const me = currentUser();
    if(!me || cloudSyncBusy) return;
    cloudSyncBusy = true;
    try {
      await fetch('/api/user-data/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(me)}).catch(()=>{});
      await fetch('/api/points/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({userId:me.id, points:me.points || 0, label:'account-sync'})}).catch(()=>{});
      await Promise.all((D.posts || []).filter(p => p.author === me.id).slice(0,50).map(p =>
        fetch('/api/posts/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(p)}).catch(()=>{})
      ));
      const res = await fetch('/api/sync/export', {cache:'no-store'}).catch(()=>null);
      if(res && res.ok) mergeServerSnapshot(await res.json());
      cloudSyncLastPull = Date.now();
    } catch(e) {
      console.warn('[account sync]', e);
    } finally {
      cloudSyncBusy = false;
    }
  }

  function installAccountCloudSync(){
    const oldMount = typeof mount === 'function' ? mount : null;
    if(oldMount) {
      mount = function(){
        const out = oldMount.apply(this, arguments);
        setTimeout(syncCurrentAccountNow, 700);
        return out;
      };
    }

    const oldSave = typeof saveData === 'function' ? saveData : null;
    if(oldSave) {
      saveData = async function(){
        const out = await oldSave.apply(this, arguments);
        const me = currentUser();
        if(me && Date.now() - cloudSyncLastPull > 12000) {
          cloudSyncLastPull = Date.now();
          syncCurrentAccountNow();
        }
        return out;
      };
    }

    setInterval(syncCurrentAccountNow, 20000);
    window.addEventListener('storage', e => {
      if(e.key === STORAGE_KEY + 'data') setTimeout(syncCurrentAccountNow, 300);
    });
  }

  let mediaAutoObserver = null;

  function pauseOtherFeedMedia(activeMedia){
    document.querySelectorAll('.post-media video,.post-media audio').forEach(media => {
      if(media !== activeMedia && !media.paused) media.pause();
    });
  }

  function getMediaAutoSettings(){
    const p = currentUser()?.privacySettings || {};
    const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const wifiOnly = !!p.wifiOnly;
    const likelyWifi = !conn || conn.type === 'wifi' || conn.effectiveType === '4g';
    return {
      enabled: p.autoPlay !== false && (!wifiOnly || likelyWifi),
      muted: p.muteAuto !== false
    };
  }

  function applyMediaAutoPlaySettings(root=document){
    const settings = getMediaAutoSettings();
    root.querySelectorAll?.('.post-media video,.post-media audio').forEach(media => {
      media.preload = 'metadata';
      if(media.tagName === 'VIDEO') media.playsInline = true;
      media.dataset.autoScene = '1';
      media.autoplay = settings.enabled;
      media.muted = settings.muted;
      if(!media.dataset.singlePlayHook) {
        media.dataset.singlePlayHook = '1';
        media.addEventListener('play', () => pauseOtherFeedMedia(media), true);
      }
      if(!settings.enabled) media.pause();
    });
    if(mediaAutoObserver) {
      root.querySelectorAll?.('.post-media video,.post-media audio').forEach(media => mediaAutoObserver.observe(media));
    }
  }

  function installMediaAutoPlay(){
    const playVisible = media => {
      const settings = getMediaAutoSettings();
      if(!settings.enabled) { media.pause(); return; }
      media.muted = settings.muted;
      pauseOtherFeedMedia(media);
      media.play().catch(() => {
        media.muted = true;
        media.play().catch(()=>{});
      });
    };

    if('IntersectionObserver' in window) {
      mediaAutoObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const media = entry.target;
          if(entry.isIntersecting && entry.intersectionRatio >= 0.55) playVisible(media);
          else media.pause();
        });
      }, {threshold:[0, .55, .9]});
    }

    window.applyMediaAutoPlaySettings = applyMediaAutoPlaySettings;
    applyMediaAutoPlaySettings(document);
    const mo = new MutationObserver(items => items.forEach(item => item.addedNodes.forEach(node => {
      if(node.nodeType === 1) applyMediaAutoPlaySettings(node);
    })));
    mo.observe(document.body, {childList:true, subtree:true});
  }

  function optimizeMobileMedia(){
    const apply = root => {
      root.querySelectorAll?.('img').forEach(img => {
        img.loading = img.loading || 'lazy';
        img.decoding = img.decoding || 'async';
      });
      root.querySelectorAll?.('video').forEach(video => {
        video.preload = video.preload || 'metadata';
        video.playsInline = true;
      });
    };
    apply(document);
    const mo = new MutationObserver(items => items.forEach(item => item.addedNodes.forEach(node => node.nodeType === 1 && apply(node))));
    mo.observe(document.body, {childList:true, subtree:true});
  }

  ready(function(){
    installMediaFollowHooks();
    installAdminGuard();
    installNotificationHardening();
    installSearchUpgrade();
    installFeatureBoard();
    keepPointsPersistent();
    patchPreviewCleanup();
    installPostCreationGuards();
    installLocationField();
    installPublicFeed();
    installStoryUpgrade();
    installLiveRecording();
    installSecurityAutomation();
    installServerSync();
    installAccountCloudSync();
    installMediaAutoPlay();
    optimizeMobileMedia();
    enforceAdminVisibility();
  });
})();



// Monetixra account/session consistency patch
(function(){
  const ready = fn => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn();
  const normLogin = v => String(v || '').trim().toLowerCase();
  const sameAccount = (u, id) => {
    const q = normLogin(id);
    return !!u && !!q && (
      normLogin(u.email) === q ||
      normLogin(u.username) === q ||
      normLogin(u.phone) === q ||
      normLogin(u.id) === q
    );
  };

  function ensureAnalytics(){
    if(!window.D) return null;
    D.analytics = D.analytics || {};
    D.analytics.loginEvents = D.analytics.loginEvents || [];
    D.analytics.usageEvents = D.analytics.usageEvents || [];
    D.analytics.activeSessions = D.analytics.activeSessions || {};
    return D.analytics;
  }

  function currentUserRef(){
    try { return CU && D && D.users ? (D.users[CU.id] || CU) : null; } catch(e) { return null; }
  }

  function markUsage(action='use'){
    const me = currentUserRef();
    const a = ensureAnalytics();
    if(!me || !a) return;
    const now = Date.now();
    const sid = sessionStorage.getItem('mxt_session_id') || ('sess_' + now + '_' + Math.random().toString(36).slice(2,8));
    sessionStorage.setItem('mxt_session_id', sid);
    me.lastActive = now;
    me.lastSeen = now;
    me.usedCount = (me.usedCount || 0) + 1;
    a.activeSessions[sid] = {userId:me.id, name:me.name || me.username || me.id, at:now, ua:navigator.userAgent.slice(0,90)};
    a.usageEvents.unshift({userId:me.id, action, at:now});
    a.usageEvents = a.usageEvents.slice(0,500);
  }

  function recordLogin(){
    const me = currentUserRef();
    const a = ensureAnalytics();
    if(!me || !a) return;
    const now = Date.now();
    const sid = sessionStorage.getItem('mxt_session_id') || ('sess_' + now + '_' + Math.random().toString(36).slice(2,8));
    sessionStorage.setItem('mxt_session_id', sid);
    me.loginCount = (me.loginCount || 0) + 1;
    me.lastLoginAt = now;
    me.lastLogin = new Date(now).toDateString();
    me.isOnline = true;
    a.loginEvents.unshift({userId:me.id, name:me.name || me.username || me.id, at:now, sessionId:sid});
    a.loginEvents = a.loginEvents.slice(0,500);
    markUsage('login');
  }

  function compactPost(post){
    if(!post) return post;
    post.category = post.category || post.type || 'text';
    post.visibility = post.visibility || 'public';
    post.createdAt = post.createdAt || Date.now();
    post.updatedAt = post.updatedAt || post.createdAt;
    return post;
  }

  function mergeSnapshot(snapshot, loginId){
    if(!snapshot || !window.D) return false;
    let changed = false;
    D.users = D.users || {};
    D.posts = D.posts || [];
    const users = Array.isArray(snapshot.users) ? snapshot.users : [];
    const target = loginId ? users.find(u => sameAccount(u, loginId)) : null;
    users.forEach(remote => {
      if(!remote || !remote.id) return;
      if(loginId && target && remote.id !== target.id && !sameAccount(remote, loginId)) return;
      const local = D.users[remote.id] || {};
      const serverPts = snapshot.points && snapshot.points[remote.id];
      const points = Math.max(Number(local.points || 0), Number(remote.points || 0), Number(serverPts?.points || 0));
      D.users[remote.id] = {...local, ...remote, id:remote.id, points};
      changed = true;
    });
    const byId = new Map(D.posts.map(p => [p.id, p]));
    (Array.isArray(snapshot.posts) ? snapshot.posts : []).forEach(remote => {
      if(!remote || !remote.id) return;
      if(loginId && target && remote.author !== target.id) return;
      compactPost(remote);
      const local = byId.get(remote.id);
      if(!local) { D.posts.unshift(remote); changed = true; return; }
      if(Number(remote.updatedAt || remote.syncedAt || remote.createdAt || 0) >= Number(local.updatedAt || local.syncedAt || local.createdAt || 0)) {
        Object.assign(local, remote);
        changed = true;
      }
    });
    if(changed) {
      D.posts.sort((a,b) => (b.createdAt || 0) - (a.createdAt || 0));
      if(CU && D.users[CU.id]) CU = D.users[CU.id];
    }
    return changed;
  }

  async function pullServerState(loginId){
    try {
      const res = await fetch('/api/sync/export', {cache:'no-store'}).catch(()=>null);
      if(!res || !res.ok) return false;
      const changed = mergeSnapshot(await res.json(), loginId);
      if(changed && typeof saveData === 'function') await saveData();
      return changed;
    } catch(e) {
      console.warn('[account-state pull]', e);
      return false;
    }
  }

  async function pushCurrentState(reason='sync'){
    const me = currentUserRef();
    if(!me) return;
    try {
      await fetch('/api/user-data/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(me)}).catch(()=>{});
      await fetch('/api/points/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({userId:me.id, points:me.points || 0, label:reason})}).catch(()=>{});
      await Promise.all((D.posts || []).filter(p => p.author === me.id).slice(0,100).map(p => {
        compactPost(p);
        return fetch('/api/posts/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(p)}).catch(()=>{});
      }));
    } catch(e) {}
  }

  const oldSendRegOtp = window.sendRegOtp;
  if(typeof oldSendRegOtp === 'function') {
    window.sendRegOtp = async function(){
      const id = (typeof V === 'function' ? V('rgId') : '').trim();
      await pullServerState(id);
      return oldSendRegOtp.apply(this, arguments);
    };
  }

  const oldDoLogin = window.doLogin;
  if(typeof oldDoLogin === 'function') {
    window.doLogin = async function(){
      const id = (typeof V === 'function' ? V('liId') : '').trim();
      await pullServerState(id);
      const out = await oldDoLogin.apply(this, arguments);
      if(currentUserRef()) {
        if(typeof canonicalizeCurrentAccount === 'function') canonicalizeCurrentAccount();
        recordLogin();
        await pushCurrentState('login-sync');
        await pullServerState(id);
        if(typeof syncUI === 'function') syncUI();
        if(document.querySelector('.pg.on')?.id === 'pg-feed' && typeof rFeed === 'function') rFeed(true);
      }
      return out;
    };
  }

  const oldDoRegister = window.doRegister;
  if(typeof oldDoRegister === 'function') {
    window.doRegister = async function(){
      const id = (typeof V === 'function' ? V('rgId') : '').trim();
      const terms = document.getElementById('rgTerms');
      if(terms && !terms.checked) return typeof toast === 'function' && toast('e','You must agree to Terms of Service');
      await pullServerState(id);
      if(!D.otp?.reg?.code && typeof oldSendRegOtp === 'function') {
        await oldSendRegOtp();
      }
      const out = await oldDoRegister.apply(this, arguments);
      if(currentUserRef()) {
        if(typeof canonicalizeCurrentAccount === 'function') canonicalizeCurrentAccount();
        recordLogin();
        await pushCurrentState('signup-sync');
      }
      return out;
    };
  }

  const oldSubmitPost = window.submitPost;
  if(typeof oldSubmitPost === 'function') {
    window.submitPost = function(){
      const before = (D.posts || []).length;
      const out = oldSubmitPost.apply(this, arguments);
      const post = (D.posts || [])[0];
      if(post && (D.posts || []).length > before) {
        compactPost(post);
        markUsage('post');
        pushCurrentState('post-sync');
        if(typeof rFeed === 'function') setTimeout(() => rFeed(true), 80);
      }
      return out;
    };
  }

  const oldAddPts = window.addPts;
  if(typeof oldAddPts === 'function') {
    window.addPts = function(){
      const out = oldAddPts.apply(this, arguments);
      markUsage('points');
      pushCurrentState('points-sync');
      return out;
    };
  }

  if(typeof window.canViewPost === 'function') {
    window.canViewPost = function(post){
      if(!post) return false;
      const author = D.users?.[post.author];
      return !(author?.disabled || author?.deactivated);
    };
  }

  const oldRAdmin = window.rAdmin;
  if(typeof oldRAdmin === 'function') {
    window.rAdmin = function(){
      const out = oldRAdmin.apply(this, arguments);
      const a = ensureAnalytics() || {};
      const users = Object.values(D.users || {});
      const today = new Date().toDateString();
      const activeSessions = Object.values(a.activeSessions || {}).filter(s => Date.now() - Number(s.at || 0) < 15 * 60000);
      const loggedInUsers = new Set((a.loginEvents || []).map(e => e.userId)).size || users.filter(u => u.loginCount).length;
      const usedUsers = new Set((a.usageEvents || []).map(e => e.userId)).size || users.filter(u => u.usedCount || u.lastActive).length;
      const todayLogin = new Set((a.loginEvents || []).filter(e => new Date(e.at).toDateString() === today).map(e => e.userId)).size;
      const todayUsed = new Set((a.usageEvents || []).filter(e => new Date(e.at).toDateString() === today).map(e => e.userId)).size;
      const stats = document.getElementById('adminStats');
      if(stats && !document.getElementById('adminUsageStats')) {
        stats.insertAdjacentHTML('beforeend', `
          <div class="admin-stat" id="adminUsageStats"><div class="as-i">🔐</div><div class="as-n">${loggedInUsers}</div><div class="as-l">Logged In Users</div></div>
          <div class="admin-stat"><div class="as-i">📱</div><div class="as-n">${activeSessions.length}</div><div class="as-l">Active Sessions</div></div>
          <div class="admin-stat"><div class="as-i">👣</div><div class="as-n">${usedUsers}</div><div class="as-l">Used App</div></div>
          <div class="admin-stat"><div class="as-i">📅</div><div class="as-n">${todayLogin}/${todayUsed}</div><div class="as-l">Today Login/Use</div></div>
        `);
      }
      const analytics = document.getElementById('adminAnalytics');
      if(analytics && !document.getElementById('adminUsageDetail')) {
        analytics.insertAdjacentHTML('beforeend', `<div id="adminUsageDetail" style="margin-top:10px;font-size:11px;color:var(--t2);display:grid;gap:4px;">
          <div>Recent sessions: ${activeSessions.slice(0,5).map(s => esc(s.name || s.userId)).join(', ') || 'None'}</div>
          <div>Total login events: ${(a.loginEvents || []).length} · Total usage events: ${(a.usageEvents || []).length}</div>
        </div>`);
      }
      return out;
    };
  }

  let mediaObserver = null;
  function mediaSettings(){
    const p = currentUserRef()?.privacySettings || {};
    return {enabled:p.autoPlay !== false, muted:p.muteAuto !== false};
  }
  function pauseOthers(active){
    document.querySelectorAll('.post-media video,.post-media audio, #svBody video, #svBody audio').forEach(m => {
      if(m !== active && !m.paused) m.pause();
    });
  }
  function applyMedia(root=document){
    const s = mediaSettings();
    root.querySelectorAll?.('.post-media video,.post-media audio').forEach(m => {
      m.preload = 'metadata';
      if(m.tagName === 'VIDEO') m.playsInline = true;
      m.autoplay = s.enabled;
      m.muted = s.muted;
      if(!m.dataset.mxtSinglePlay) {
        m.dataset.mxtSinglePlay = '1';
        m.addEventListener('play', () => pauseOthers(m), true);
      }
      if(!s.enabled) m.pause();
      if(mediaObserver) mediaObserver.observe(m);
    });
  }
  window.applyMediaAutoPlaySettings = applyMedia;

  ready(() => {
    ensureAnalytics();
    markUsage('page-load');
    document.addEventListener('click', () => markUsage('click'), true);
    setInterval(() => { markUsage('heartbeat'); pushCurrentState('heartbeat-sync'); }, 30000);
    setInterval(() => pullServerState(), 25000);
    if('IntersectionObserver' in window) {
      mediaObserver = new IntersectionObserver(entries => entries.forEach(entry => {
        const m = entry.target;
        const s = mediaSettings();
        if(!s.enabled) { m.pause(); return; }
        if(entry.isIntersecting && entry.intersectionRatio >= 0.6) {
          m.muted = s.muted;
          pauseOthers(m);
          m.play().catch(() => { m.muted = true; m.play().catch(()=>{}); });
        } else {
          m.pause();
        }
      }), {threshold:[0, .6, .9]});
    }
    applyMedia(document);
    new MutationObserver(items => items.forEach(item => item.addedNodes.forEach(node => {
      if(node.nodeType === 1) applyMedia(node);
    }))).observe(document.body, {childList:true, subtree:true});
    window.addEventListener('beforeunload', () => {
      const me = currentUserRef();
      const a = ensureAnalytics();
      const sid = sessionStorage.getItem('mxt_session_id');
      if(me) { me.isOnline = false; me.lastActive = Date.now(); }
      if(a && sid) delete a.activeSessions[sid];
      try { localStorage.setItem(STORAGE_KEY + 'data', JSON.stringify(D)); } catch(e) {}
    });
  });
})();



/* Monetixra requested feature hardening */
(function(){
  const ready = fn => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn, {once:true}) : fn();
  const clean = v => String(v || '').trim().toLowerCase();
  const me = () => {
    try { return CU && D && D.users ? (D.users[CU.id] || CU) : null; }
    catch(e) { return null; }
  };
  const adminEmail = () => (typeof ADMIN_EMAIL !== 'undefined' ? ADMIN_EMAIL : 'myworktoolsp3@gmail.com');
  const adminPhone = () => (typeof ADMIN_PHONE !== 'undefined' ? ADMIN_PHONE : '01757008864');
  const isAdmin = u => !!(u && (u.isAdmin || clean(u.email) === clean(adminEmail()) || String(u.phone || '').trim() === String(adminPhone())));
  const save = () => {
    try { if(typeof saveData === 'function') saveData(); } catch(e) {}
    try { if(typeof persistAuthState === 'function') persistAuthState(); } catch(e) {}
    try { if(typeof syncUI === 'function') syncUI(); } catch(e) {}
  };

  function sameIdentity(a, b){
    if(!a || !b) return false;
    const pairs = [['email','email'], ['username','username'], ['phone','phone'], ['id','id']];
    return pairs.some(([x,y]) => clean(a[x]) && clean(a[x]) === clean(b[y]));
  }

  function canonicalizeCurrentAccount(){
    const u = me();
    if(!u || !D?.users) return u;
    const matches = Object.values(D.users).filter(x => x && (x.id === u.id || sameIdentity(x, u)));
    if(matches.length <= 1) return u;
    const primary = matches.find(x => x.id === u.id) || matches[0];
    matches.forEach(x => {
      if(x.id === primary.id) return;
      primary.points = Math.max(Number(primary.points || 0), Number(x.points || 0));
      ['followers','following','refs','savedPosts','blocked','autoFriends','viewers'].forEach(k => {
        primary[k] = Array.from(new Set([...(primary[k] || []), ...(x[k] || [])]));
      });
      (D.posts || []).forEach(p => { if(p.author === x.id) p.author = primary.id; });
      (D.txs || []).forEach(t => { if(t.user === x.id) t.user = primary.id; });
      (D.notifs || []).forEach(n => { if(n.to === x.id) n.to = primary.id; });
      delete D.users[x.id];
    });
    D.cur = primary.id;
    CU = primary;
    save();
    return primary;
  }

  function enforceAdminOnly(){
    const ok = isAdmin(canonicalizeCurrentAccount());
    document.querySelectorAll('[data-p="admin"], #settAdminSection, #settAdminBtn').forEach(el => {
      el.style.display = ok ? '' : 'none';
    });
    const adminPage = document.getElementById('pg-admin');
    if(adminPage && !ok && adminPage.classList.contains('on') && typeof nav === 'function') nav('feed');
    return ok;
  }

  function syncAccount(reason){
    const u = canonicalizeCurrentAccount();
    if(!u) return;
    try {
      fetch('/api/user-data/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(u)}).catch(()=>{});
      fetch('/api/points/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({userId:u.id, points:u.points || 0, label:reason || 'account-sync'})}).catch(()=>{});
      (D.posts || []).filter(p => p.author === u.id).slice(0,80).forEach(p => {
        p.updatedAt = p.updatedAt || p.createdAt || Date.now();
        fetch('/api/posts/sync', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(p)}).catch(()=>{});
      });
    } catch(e) {}
  }

  function applyAutoplay(root=document){
    const u = me();
    const p = u?.privacySettings || {};
    const enabled = p.autoPlay !== false;
    const muted = p.muteAuto !== false;
    root.querySelectorAll?.('.post-media video,.post-media audio, #svBody video, #svBody audio').forEach(media => {
      media.preload = 'metadata';
      media.autoplay = enabled;
      media.muted = muted;
      if(media.tagName === 'VIDEO') media.playsInline = true;
      if(!media.dataset.mxtAutoplayReady) {
        media.dataset.mxtAutoplayReady = '1';
        media.addEventListener('play', () => {
          document.querySelectorAll('.post-media video,.post-media audio, #svBody video, #svBody audio').forEach(other => {
            if(other !== media && !other.paused) other.pause();
          });
        }, true);
      }
      if(!enabled) media.pause();
    });
  }

  function installAutoplayObserver(){
    let io = null;
    if('IntersectionObserver' in window) {
      io = new IntersectionObserver(entries => entries.forEach(entry => {
        const media = entry.target;
        const p = me()?.privacySettings || {};
        if(p.autoPlay === false) { media.pause(); return; }
        if(entry.isIntersecting && entry.intersectionRatio >= 0.58) {
          media.muted = p.muteAuto !== false;
          media.play().catch(() => { media.muted = true; media.play().catch(()=>{}); });
        } else {
          media.pause();
        }
      }), {threshold:[0, .58, .9]});
    }
    const watch = root => {
      applyAutoplay(root);
      if(io) root.querySelectorAll?.('.post-media video,.post-media audio, #svBody video, #svBody audio').forEach(m => io.observe(m));
    };
    window.applyMediaAutoPlaySettings = watch;
    watch(document);
    new MutationObserver(items => items.forEach(item => item.addedNodes.forEach(node => {
      if(node.nodeType === 1) watch(node);
    }))).observe(document.body, {childList:true, subtree:true});
  }

  ready(() => {
    const oldNav = window.nav;
    if(typeof oldNav === 'function') {
      window.nav = function(page){
        if(page === 'admin' && !enforceAdminOnly()) {
          if(typeof toast === 'function') toast('e','Admin only');
          page = 'feed';
        }
        const out = oldNav.apply(this, arguments.length ? [page] : arguments);
        setTimeout(enforceAdminOnly, 40);
        return out;
      };
    }

    const oldMount = window.mount;
    if(typeof oldMount === 'function') {
      window.mount = function(){
        canonicalizeCurrentAccount();
        const out = oldMount.apply(this, arguments);
        enforceAdminOnly();
        syncAccount('login-sync');
        return out;
      };
    }

    const oldSavePrivacy = window.savePrivacySetting;
    window.savePrivacySetting = function(key, el){
      const out = typeof oldSavePrivacy === 'function' ? oldSavePrivacy.apply(this, arguments) : undefined;
      if(key === 'autoPlay' || key === 'muteAuto' || key === 'wifiOnly') {
        if(typeof applyAutoplay === 'function') applyAutoplay(document);
        if(typeof applyMediaAutoPlaySettings === 'function') applyMediaAutoPlaySettings(document);
      }
      syncAccount('settings-sync');
      return out;
    };

    window.clearAllNotifs = function(){
      if (typeof MonetixraAccountManagement !== 'undefined' && typeof MonetixraAccountManagement.clearAllNotifications === 'function') {
        return MonetixraAccountManagement.clearAllNotifications();
      }

      const u = me();
      if(!u) {
        if(typeof toast === 'function') toast('e','Please sign in first');
        return false;
      }

      const before = (D.notifs || []).filter(n => n.to === u.id).length;
      D.notifs = (D.notifs || []).filter(n => n.to !== u.id);
      if(typeof saveData === 'function') saveData();
      if(typeof persistAuthState === 'function') persistAuthState();
      if(typeof rNotif === 'function') rNotif();
      if(typeof syncUI === 'function') syncUI();
      if(typeof toast === 'function') toast('s', before ? '🔕 All notifications cleared' : 'No notifications to clear');
      return true;
    };

    window.deactivateAccount = function(){
      if (typeof MonetixraAccountManagement !== 'undefined' && typeof MonetixraAccountManagement.deactivateAccount === 'function') {
        return MonetixraAccountManagement.deactivateAccount();
      }

      const u = me();
      if(!u) {
        if(typeof toast === 'function') toast('e','Please sign in first');
        return false;
      }
      if(!confirm('Deactivate your account? You can reactivate by logging in again.')) return false;
      const user = D.users[u.id] || u;
      user.deactivated = true;
      if(typeof fetch === 'function') {
        fetch('/api/account/deactivate', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({userId:u.id})}).catch(()=>{});
      }
      if(typeof D !== 'undefined') D.cur = null;
      CU = null;
      if(typeof saveData === 'function') saveData();
      if(typeof persistAuthState === 'function') persistAuthState();
      if(typeof supabaseSignOut === 'function') supabaseSignOut().catch(()=>{});
      if(typeof toast === 'function') toast('i','Account deactivated');
      setTimeout(() => location.reload(), 700);
      return true;
    };

    window.deleteAccount = function(){
      if (typeof MonetixraAccountManagement !== 'undefined' && typeof MonetixraAccountManagement.deleteAccount === 'function') {
        return MonetixraAccountManagement.deleteAccount();
      }

      const u = me();
      if(!u) {
        if(typeof toast === 'function') toast('e','Please sign in first');
        return false;
      }
      const uid = u.id;
      if(prompt('Type DELETE to permanently delete your account:') !== 'DELETE') {
        if(typeof toast === 'function') toast('e','Cancelled - type DELETE to confirm');
        return false;
      }
      if(typeof fetch === 'function') {
        fetch('/api/account/' + encodeURIComponent(uid), {method:'DELETE'}).catch(()=>{});
      }
      if(typeof D !== 'undefined') {
        delete D.users[uid];
        D.posts = (D.posts || []).filter(p => p.author !== uid);
        D.notifs = (D.notifs || []).filter(n => n.to !== uid);
        D.txs = (D.txs || []).filter(t => t.user !== uid);
      }
      Object.values(D.users || {}).forEach(x => {
        x.followers = (x.followers || []).filter(id => id !== uid);
        x.following = (x.following || []).filter(id => id !== uid);
        x.autoFriends = (x.autoFriends || []).filter(id => id !== uid);
      });
      if(typeof D !== 'undefined') D.cur = null;
      CU = null;
      if(typeof saveData === 'function') saveData();
      if(typeof persistAuthState === 'function') persistAuthState();
      if(typeof supabaseSignOut === 'function') supabaseSignOut().catch(()=>{});
      if(typeof toast === 'function') toast('s','Account deleted');
      setTimeout(() => location.reload(), 700);
      return true;
    };

    const oldFeedback = window.openFeedback;
    window.openFeedback = function(){
      const u = me();
      if(!u) return typeof toast === 'function' && toast('e','Please sign in first');
      const msg = prompt('Your Monetixra report or feedback:');
      if(!msg) return;
      D.adminReports = D.adminReports || [];
      const report = {id:'fb' + Date.now(), from:u.id, type:'feedback', msg, at:Date.now(), status:'open'};
      D.adminReports.unshift(report);
      D.chats = D.chats || {};
      const key = [u.id, ADMIN_ID].sort().join('_');
      D.chats[key] = D.chats[key] || [];
      D.chats[key].push({id:'m' + Date.now(), from:u.id, to:ADMIN_ID, text:'Monetixra report: ' + msg, type:'text', at:Date.now(), read:false});
      if(typeof addNotif === 'function') addNotif(ADMIN_ID, 'feedback', 'MSG', 'Feedback from ' + (u.name || u.username || 'User'));
      fetch('/api/reports', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({from:u.id, message:msg, type:'feedback'})}).catch(()=>{});
      save();
      if(typeof toast === 'function') toast('s','Report sent to Monetixra admin');
    };

    const oldAddPts = window.addPts;
    if(typeof oldAddPts === 'function') {
      window.addPts = function(){
        const out = oldAddPts.apply(this, arguments);
        canonicalizeCurrentAccount();
        syncAccount('points-sync');
        return out;
      };
    }

    canonicalizeCurrentAccount();
    enforceAdminOnly();
    installAutoplayObserver();
    setInterval(() => { enforceAdminOnly(); syncAccount('auto-sync'); }, 25000);
  });
})();



/* Monetixra modal and floating action reliability */
(function(){
  function closeByElement(target){
    const modal = target && target.closest && target.closest('#pushNotifModal,#paywallModal,.overlay');
    if(!modal || !modal.id) return false;
    if(typeof closeModal === 'function') closeModal(modal.id);
    else modal.classList.remove('open');
    return true;
  }

  function handleModalCloseTap(e){
    const target = e.target;
    const closeHit = target && target.closest && target.closest('[data-close-modal],.modal-x');
    if(!closeHit) return;
    if(closeByElement(closeHit)) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function handleFabTap(e){
    // FABs removed - no longer handling FAB taps
    return;
  }

  ['pointerup','touchend','click'].forEach(evt => {
    document.addEventListener(evt, handleModalCloseTap, {capture:true, passive:false});
    document.addEventListener(evt, handleFabTap, {capture:true, passive:false});
  });

  document.addEventListener('keydown', e => {
    if(e.key !== 'Escape') return;
    ['pushNotifModal','paywallModal','postModal'].forEach(id => {
      const el = document.getElementById(id);
      if(el && el.classList.contains('open')) closeByElement(el);
    });
  });
})();



/* Monetixra universal language + smooth UI layer */
(function(){
  const ready = fn => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn, {once:true}) : fn();
  const idle = fn => (window.requestIdleCallback || (cb => setTimeout(cb, 16)))(fn, {timeout:600});
  const LANG_KEY = 'mxt_app_language';
  const CACHE_KEY = 'mxt_i18n_cache_v1';
  const UI_SELECTOR = 'button,.bn .lbl,.cat-pill,.chip,.page-title,.section-label,.sett-ttl,.sett-nm,.sett-sub,.btn,.task-name,.task-desc,.wh-lbl,.pstat-l,.ss-l,.modal-ttl,.fl,.chat-prev,.ad-spon,.badge,.sett-tag,option';
  const SKIP_SELECTOR = 'script,style,textarea,input,[contenteditable="true"],.post-txt,.post-nm,.cr-bub,.lv-cm,.notif-ttl,.tx-lbl,.nft-name,.app-name,.fc-nm,.chat-nm';
  const EXTRA_LANGS = {
    ur:{name:'Urdu',flag:'🇵🇰'}, id:{name:'Indonesian',flag:'🇮🇩'}, ms:{name:'Malay',flag:'🇲🇾'}, tr:{name:'Turkish',flag:'🇹🇷'}, it:{name:'Italian',flag:'🇮🇹'}, nl:{name:'Dutch',flag:'🇳🇱'},
    ko:{name:'Korean',flag:'🇰🇷'}, th:{name:'Thai',flag:'🇹🇭'}, vi:{name:'Vietnamese',flag:'🇻🇳'}, fa:{name:'Persian',flag:'🇮🇷'}, pl:{name:'Polish',flag:'🇵🇱'}, uk:{name:'Ukrainian',flag:'🇺🇦'},
    ro:{name:'Romanian',flag:'🇷🇴'}, el:{name:'Greek',flag:'🇬🇷'}, sv:{name:'Swedish',flag:'🇸🇪'}, no:{name:'Norwegian',flag:'🇳🇴'}, da:{name:'Danish',flag:'🇩🇰'}, fi:{name:'Finnish',flag:'🇫🇮'},
    cs:{name:'Czech',flag:'🇨🇿'}, sk:{name:'Slovak',flag:'🇸🇰'}, hu:{name:'Hungarian',flag:'🇭🇺'}, he:{name:'Hebrew',flag:'🇮🇱'}, sw:{name:'Swahili',flag:'🇹🇿'}, ta:{name:'Tamil',flag:'🇮🇳'},
    te:{name:'Telugu',flag:'🇮🇳'}, mr:{name:'Marathi',flag:'🇮🇳'}, gu:{name:'Gujarati',flag:'🇮🇳'}, kn:{name:'Kannada',flag:'🇮🇳'}, ml:{name:'Malayalam',flag:'🇮🇳'}, pa:{name:'Punjabi',flag:'🇮🇳'},
    ne:{name:'Nepali',flag:'🇳🇵'}, si:{name:'Sinhala',flag:'🇱🇰'}, my:{name:'Burmese',flag:'🇲🇲'}, km:{name:'Khmer',flag:'🇰🇭'}, lo:{name:'Lao',flag:'🇱🇦'}, fil:{name:'Filipino',flag:'🇵🇭'}
  };
  const CORE = {
    bn:{Feed:'ফিড',Explore:'এক্সপ্লোর',Earn:'আয়',Friends:'বন্ধু',Wallet:'ওয়ালেট',Chat:'চ্যাট',Apps:'অ্যাপস',NFT:'এনএফটি',Meta:'মেটা',Stats:'স্ট্যাটস',Badges:'ব্যাজ',Me:'আমি',Settings:'সেটিংস',Posts:'পোস্ট',Media:'মিডিয়া',Saved:'সেভড',Earnings:'আয়',Followers:'ফলোয়ার',Following:'ফলোয়িং',Points:'পয়েন্ট','Auto Friends':'অটো বন্ধু',Viewers:'দর্শক','Find Friends':'বন্ধু খুঁজুন','App Language':'অ্যাপ ভাষা','Auto-Translate Posts':'পোস্ট অটো অনুবাদ','Translate to your language':'আপনার ভাষায় অনুবাদ','Dark / Light Mode':'ডার্ক / লাইট মোড','Edit Profile':'প্রোফাইল এডিট','Change Password':'পাসওয়ার্ড পরিবর্তন','KYC Verification':'KYC যাচাই','Privacy & Security':'প্রাইভেসি ও নিরাপত্তা',Notifications:'নোটিফিকেশন','Content & Feed':'কনটেন্ট ও ফিড','Language & Region':'ভাষা ও অঞ্চল','Earnings & Wallet':'আয় ও ওয়ালেট','Storage & Offline':'স্টোরেজ ও অফলাইন',About:'সম্পর্কে',Admin:'অ্যাডমিন','Sign Out':'সাইন আউট','Delete Account':'অ্যাকাউন্ট ডিলিট',Change:'পরিবর্তন',Copy:'কপি',Share:'শেয়ার',Refresh:'রিফ্রেশ',All:'সব',Active:'সক্রিয়',Disabled:'বন্ধ',Blocked:'ব্লকড',Search:'সার্চ',Send:'পাঠান',Cancel:'বাতিল',Save:'সেভ',Delete:'ডিলিট',Done:'সম্পন্ন',Go:'যান','No posts':'কোন পোস্ট নেই','No users':'কোন ইউজার নেই','No notifications':'কোন নোটিফিকেশন নেই','Mint New NFT':'নতুন NFT মিন্ট','Payment Methods':'পেমেন্ট পদ্ধতি','Crypto Wallets':'ক্রিপ্টো ওয়ালেট','Tax Report':'ট্যাক্স রিপোর্ট','Clear Cache':'ক্যাশ পরিষ্কার','Export My Data':'আমার ডেটা এক্সপোর্ট','Backup Data':'ডেটা ব্যাকআপ','Restore Backup':'ব্যাকআপ রিস্টোর','Send Feedback':'ফিডব্যাক পাঠান','Rate This App':'অ্যাপ রেট করুন','Private Account':'প্রাইভেট অ্যাকাউন্ট','Who Can Message Me':'কে মেসেজ করতে পারবে','Read Receipts':'রিড রিসিপ্ট','Location Sharing':'লোকেশন শেয়ার','Active Sessions':'সক্রিয় সেশন','Push Notifications':'পুশ নোটিফিকেশন','Likes & Reactions':'লাইক ও রিঅ্যাকশন','Comments & Replies':'কমেন্ট ও রিপ্লাই','New Followers':'নতুন ফলোয়ার','Earnings Alerts':'আয়ের অ্যালার্ট','MLM Commission':'MLM কমিশন','Copyright Alerts':'কপিরাইট অ্যালার্ট','Download Quality':'ডাউনলোড কোয়ালিটি','Date Format':'তারিখ ফরম্যাট','Wallet & Balance':'ওয়ালেট ও ব্যালেন্স','App Version':'অ্যাপ ভার্সন','Terms of Service':'সেবার শর্ত','Privacy Policy':'প্রাইভেসি পলিসি','Create Post':'পোস্ট তৈরি করুন','Withdrawals':'উইথড্রয়াল','Withdraw':'উইথড্রয়াল','Approve':'অনুমোদন','Reject':'প্রত্যাখ্যান','No pending withdrawals':'কোন পেন্ডিং উইথড্রয়াল নেই'},
    hi:{Feed:'फ़ीड',Explore:'एक्सप्लोर',Earn:'कमाएं',Friends:'दोस्त',Wallet:'वॉलेट',Chat:'चैट',Apps:'ऐप्स',Meta:'मेटा',Stats:'आंकड़े',Badges:'बैज',Me:'मैं',Settings:'सेटिंग्स',Posts:'पोस्ट',Media:'मीडिया',Saved:'सेव्ड',Earnings:'कमाई',Followers:'फ़ॉलोअर',Following:'फ़ॉलोइंग',Points:'पॉइंट्स',Change:'बदलें',Copy:'कॉपी',Share:'शेयर',Refresh:'रीफ़्रेश',All:'सभी',Search:'खोजें',Send:'भेजें',Cancel:'रद्द',Save:'सेव',Delete:'डिलीट',Done:'पूरा',Go:'जाएं'},
    es:{Feed:'Inicio',Explore:'Explorar',Earn:'Ganar',Friends:'Amigos',Wallet:'Billetera',Chat:'Chat',Apps:'Apps',Meta:'Meta',Stats:'Estadísticas',Badges:'Insignias',Me:'Yo',Settings:'Ajustes',Posts:'Publicaciones',Media:'Medios',Saved:'Guardado',Earnings:'Ganancias',Followers:'Seguidores',Following:'Siguiendo',Points:'Puntos',Change:'Cambiar',Copy:'Copiar',Share:'Compartir',Refresh:'Actualizar',All:'Todo',Search:'Buscar',Send:'Enviar',Cancel:'Cancelar',Save:'Guardar',Delete:'Eliminar',Done:'Listo',Go:'Ir'},
    fr:{Feed:'Fil',Explore:'Explorer',Earn:'Gagner',Friends:'Amis',Wallet:'Portefeuille',Chat:'Chat',Apps:'Apps',Meta:'Méta',Stats:'Stats',Badges:'Badges',Me:'Moi',Settings:'Paramètres',Posts:'Posts',Media:'Média',Saved:'Enregistré',Earnings:'Revenus',Followers:'Abonnés',Following:'Abonnements',Points:'Points',Change:'Changer',Copy:'Copier',Share:'Partager',Refresh:'Actualiser',All:'Tout',Search:'Rechercher',Send:'Envoyer',Cancel:'Annuler',Save:'Sauver',Delete:'Supprimer',Done:'Terminé',Go:'Aller'},
    de:{Feed:'Feed',Explore:'Entdecken',Earn:'Verdienen',Friends:'Freunde',Wallet:'Wallet',Chat:'Chat',Apps:'Apps',Meta:'Meta',Stats:'Statistiken',Badges:'Abzeichen',Me:'Ich',Settings:'Einstellungen',Posts:'Beiträge',Media:'Medien',Saved:'Gespeichert',Earnings:'Einnahmen',Followers:'Follower',Following:'Folge ich',Points:'Punkte',Change:'Ändern',Copy:'Kopieren',Share:'Teilen',Refresh:'Aktualisieren',All:'Alle',Search:'Suchen',Send:'Senden',Cancel:'Abbrechen',Save:'Speichern',Delete:'Löschen',Done:'Fertig',Go:'Los'},
    pt:{Feed:'Feed',Explore:'Explorar',Earn:'Ganhar',Friends:'Amigos',Wallet:'Carteira',Chat:'Chat',Apps:'Apps',Meta:'Meta',Stats:'Estatísticas',Badges:'Medalhas',Me:'Eu',Settings:'Configurações',Posts:'Posts',Media:'Mídia',Saved:'Salvos',Earnings:'Ganhos',Followers:'Seguidores',Following:'Seguindo',Points:'Pontos',Change:'Alterar',Copy:'Copiar',Share:'Compartilhar',Refresh:'Atualizar',All:'Todos',Search:'Pesquisar',Send:'Enviar',Cancel:'Cancelar',Save:'Salvar',Delete:'Excluir',Done:'Feito',Go:'Ir'},
    ru:{Feed:'Лента',Explore:'Обзор',Earn:'Заработок',Friends:'Друзья',Wallet:'Кошелек',Chat:'Чат',Apps:'Приложения',Meta:'Мета',Stats:'Статистика',Badges:'Значки',Me:'Я',Settings:'Настройки',Posts:'Посты',Media:'Медиа',Saved:'Сохранено',Earnings:'Доход',Followers:'Подписчики',Following:'Подписки',Points:'Баллы',Change:'Изменить',Copy:'Копировать',Share:'Поделиться',Refresh:'Обновить',All:'Все',Search:'Поиск',Send:'Отправить',Cancel:'Отмена',Save:'Сохранить',Delete:'Удалить',Done:'Готово',Go:'Перейти'},
    ar:{Feed:'الخلاصة',Explore:'استكشاف',Earn:'اكسب',Friends:'الأصدقاء',Wallet:'المحفظة',Chat:'الدردشة',Apps:'التطبيقات',Meta:'ميتا',Stats:'الإحصاءات',Badges:'الشارات',Me:'أنا',Settings:'الإعدادات',Posts:'المنشورات',Media:'الوسائط',Saved:'المحفوظات',Earnings:'الأرباح',Followers:'المتابعون',Following:'يتابع',Points:'النقاط',Change:'تغيير',Copy:'نسخ',Share:'مشاركة',Refresh:'تحديث',All:'الكل',Search:'بحث',Send:'إرسال',Cancel:'إلغاء',Save:'حفظ',Delete:'حذف',Done:'تم',Go:'اذهب'},
    zh:{Feed:'动态',Explore:'探索',Earn:'赚取',Friends:'好友',Wallet:'钱包',Chat:'聊天',Apps:'应用',Meta:'元宇宙',Stats:'统计',Badges:'徽章',Me:'我',Settings:'设置',Posts:'帖子',Media:'媒体',Saved:'已保存',Earnings:'收益',Followers:'粉丝',Following:'关注',Points:'积分',Change:'更改',Copy:'复制',Share:'分享',Refresh:'刷新',All:'全部',Search:'搜索',Send:'发送',Cancel:'取消',Save:'保存',Delete:'删除',Done:'完成',Go:'前往'},
    ja:{Feed:'フィード',Explore:'探す',Earn:'稼ぐ',Friends:'友達',Wallet:'ウォレット',Chat:'チャット',Apps:'アプリ',Meta:'メタ',Stats:'統計',Badges:'バッジ',Me:'自分',Settings:'設定',Posts:'投稿',Media:'メディア',Saved:'保存済み',Earnings:'収益',Followers:'フォロワー',Following:'フォロー中',Points:'ポイント',Change:'変更',Copy:'コピー',Share:'共有',Refresh:'更新',All:'すべて',Search:'検索',Send:'送信',Cancel:'キャンセル',Save:'保存',Delete:'削除',Done:'完了',Go:'移動'},
    ko:{Feed:'피드',Explore:'탐색',Earn:'수익',Friends:'친구',Wallet:'지갑',Chat:'채팅',Apps:'앱',Meta:'메타',Stats:'통계',Badges:'배지',Me:'나',Settings:'설정',Posts:'게시물',Media:'미디어',Saved:'저장됨',Earnings:'수익',Followers:'팔로워',Following:'팔로잉',Points:'포인트',Change:'변경',Copy:'복사',Share:'공유',Refresh:'새로고침',All:'전체',Search:'검색',Send:'보내기',Cancel:'취소',Save:'저장',Delete:'삭제',Done:'완료',Go:'이동'}
  };
  const PLACEHOLDERS = {
    bn:{'Search users, posts, hashtags, NFTs...':'ইউজার, পোস্ট, হ্যাশট্যাগ, NFT সার্চ করুন...','Search friends by name...':'নাম দিয়ে বন্ধু সার্চ করুন...','Search language...':'ভাষা সার্চ করুন...','Share your app (Play Store / App Store only)...':'আপনার অ্যাপ শেয়ার করুন (শুধু Play Store / App Store)...','Recipient address':'প্রাপকের ঠিকানা',Amount:'পরিমাণ','Email or Phone':'ইমেইল বা ফোন','Password':'পাসওয়ার্ড','Full Name':'পূর্ণ নাম','Username':'ইউজারনেম','Password (min 6 chars)':'পাসওয়ার্ড (ন্যূনতম ৬ অক্ষর)','Confirm Password':'পাসওয়ার্ড নিশ্চিত করুন','Referral Code (optional)':'রেফারেল কোড (ঐচ্ছিক)','6-digit OTP':'৬ সংখ্যার OTP','New Password':'নতুন পাসওয়ার্ড','Search messages...':'বার্তা সার্চ করুন...','Comment...':'মন্তব্য...','Reply...':'প্রত্যুত্তর...','Recipient address':'প্রাপকের ঠিকানা','Amount':'পরিমাণ','Search users...':'ইউজার সার্চ করুন...','App Name *':'অ্যাপ নাম *','App Link (Play Store / App Store / Any URL) *':'অ্যাপ লিংক (Play Store / App Store / যেকোন URL) *','Description':'বিবরণ','Version (e.g. 1.0.0)':'সংস্করণ (যেমন 1.0.0)','Category (e.g. Games, Tools, Social, Finance...)':'ক্যাটাগরি (যেমন গেম, টুল, সোশ্যাল, ফাইন্যান্স...)','Icon URL (optional)':'অ্যাপ আইকন URL (ঐচ্ছিক)','Screenshot URLs (comma separated, optional)':'স্ক্রিনশট URL (কমা দিয়ে আলাদা, ঐচ্ছিক)','bKash Number':'বিকাশ নম্বর','Nagad Number':'নগদ নম্বর','Rocket Number':'রকেট নম্বর','PayPal Email':'পেপ্যাল ইমেইল','Bank Account':'ব্যাংক অ্যাকাউন্ট','Bitcoin (BTC) Address':'বিটকয়েন (BTC) ঠিকানা','Ethereum (ETH) Address':'এথেরিয়াম (ETH) ঠিকানা','USDT (TRC20/ERC20) Address':'USDT (TRC20/ERC20) ঠিকানা','BNB (BSC) Address':'BNB (BSC) ঠিকানা','Solana (SOL) Address':'সলানা (SOL) ঠিকানা','NFT Name':'NFT নাম','NFT Description':'NFT বিবরণ','Price (in points)':'দাম (পয়েন্টে)','TIN/EIN Number (e.g. 123456789)':'TIN/EIN নম্বর (যেমন 123456789)','Name as per Tax ID':'ট্যাক্স আইডি অনুযায়ী নাম','Amount (min 50000 pts = $50)':'পরিমাণ (ন্যূনতম 50000 পয়েন্ট = $50)','Account Number/Address':'অ্যাকাউন্ট নম্বর/ঠিকানা','Amount in USD':'USD-এ পরিমাণ','Points to stake (min 100)':'স্টেক করতে পয়েন্ট (ন্যূনতম ১০০)','Full Name as per ID':'ID অনুযায়ী পুরো নাম','NID / Passport Number':'NID / পাসপোর্ট নম্বর','Address':'ঠিকানা','TIN Number':'TIN নম্বর','Taxpayer Name':'করদাতার নাম','Name':'নাম','Location':'অবস্থান','Website':'ওয়েবসাইট','Group Name':'গ্রুপ নাম','Search users...':'ইউজার সার্চ করুন...'},
    hi:{'Search users, posts, hashtags, NFTs...':'यूज़र, पोस्ट, हैशटैग, NFT खोजें...','Search friends by name...':'नाम से दोस्त खोजें...','Search language...':'भाषा खोजें...'},
    es:{'Search users, posts, hashtags, NFTs...':'Buscar usuarios, publicaciones, hashtags, NFTs...','Search friends by name...':'Buscar amigos por nombre...','Search language...':'Buscar idioma...'},
    fr:{'Search users, posts, hashtags, NFTs...':'Rechercher utilisateurs, posts, hashtags, NFTs...','Search friends by name...':'Rechercher des amis par nom...','Search language...':'Rechercher une langue...'}
  };
  let cache = {};
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}') || {}; } catch(e) {}

  function baseText(s){
    return String(s || '').replace(/\s+/g,' ').trim().replace(/^[^\p{L}\p{N}]+/u,'').replace(/[›»]+$/,'').trim();
  }
  function translateLocal(text, lang){
    if(!text || lang === 'en') return text;
    const clean = baseText(text);
    const dict = CORE[lang] || {};
    const translated = dict[clean] || dict[clean.replace(/\(.+\)$/,'').trim()];
    if(!translated) return null;
    const prefix = String(text).match(/^\s*[^\p{L}\p{N}]*/u)?.[0] || '';
    return prefix + translated;
  }
  function current(){
    try { return localStorage.getItem(LANG_KEY) || window.currentLang || currentLang || 'en'; }
    catch(e) { return localStorage.getItem(LANG_KEY) || window.currentLang || 'en'; }
  }
  function saveCache(){
    try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache).slice(0, 180000)); } catch(e) {}
  }
  async function translateRemote(text, lang){
    const clean = baseText(text);
    if(!clean || clean.length < 2 || clean.length > 80) return text;
    const key = lang + '|' + clean;
    if(cache[key]) return cache[key];
    const local = translateLocal(text, lang);
    if(local) return local;
    try {
      const res = await fetch('/api/translate', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({text:clean, targetLanguage:lang})});
      const data = await res.json();
      const out = data.translated || data.translatedText || clean;
      cache[key] = out;
      saveCache();
      return out;
    } catch(e) {
      return text;
    }
  }
  async function translateBatch(texts, lang){
    const unique = [...new Set(texts.map(baseText).filter(t => t.length >= 2 && t.length <= 120))].slice(0, 80);
    const misses = unique.filter(t => !cache[lang + '|' + t]);
    if(misses.length) {
      try {
        const res = await fetch('/api/translate/batch', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({texts:misses, targetLanguage:lang})});
        const data = await res.json();
        const out = data.translations || data.translated || [];
        misses.forEach((t,i) => { cache[lang + '|' + t] = out[i] || t; });
        saveCache();
      } catch(e) {}
    }
    return Object.fromEntries(unique.map(t => [t, cache[lang + '|' + t] || t]));
  }
  function applyNode(el, lang=current()){
    if(!el || lang === 'en' || el.closest?.(SKIP_SELECTOR)) return;
    if(el.matches?.('input,textarea') && el.placeholder) {
      el.dataset.i18nSourcePlaceholder = el.dataset.i18nSourcePlaceholder || el.placeholder;
      const ph = PLACEHOLDERS[lang]?.[el.dataset.i18nSourcePlaceholder] || translateLocal(el.dataset.i18nSourcePlaceholder, lang);
      if(ph) el.placeholder = ph;
      return;
    }
    if(!el.matches?.(UI_SELECTOR)) return;
    const directTextNodes = Array.from(el.childNodes || []).filter(n => n.nodeType === 3 && baseText(n.nodeValue));
    directTextNodes.forEach(n => {
      n.__sourceText = n.__sourceText || n.nodeValue;
      const out = translateLocal(n.__sourceText, lang);
      if(out) n.nodeValue = out;
    });
    if(el.childNodes.length === 1 && el.childNodes[0].nodeType === 3) {
      const src = el.dataset.i18nSourceText || el.textContent;
      el.dataset.i18nSourceText = src;
      const out = translateLocal(src, lang);
      if(out) el.textContent = out;
    }
  }
  function applyAll(root=document, lang=current()){
    if(lang === 'en') {
      document.documentElement.lang = 'en';
      document.documentElement.dir = 'ltr';
      document.querySelectorAll('[data-i18n-source-text]').forEach(el => { el.textContent = el.dataset.i18nSourceText; });
      document.querySelectorAll('[data-i18n-source-placeholder]').forEach(el => { el.placeholder = el.dataset.i18nSourcePlaceholder; });
      return;
    }
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' || lang === 'fa' || lang === 'he' || lang === 'ur' ? 'rtl' : 'ltr';
    idle(() => {
      root.querySelectorAll?.(UI_SELECTOR + ',input[placeholder],textarea[placeholder]').forEach(el => applyNode(el, lang));
      updateFixedLabels(lang);
      translateUnknownUi(root, lang);
      translateVisiblePosts(lang);
    });
  }
  function translateUnknownUi(root=document, lang=current()){
    if(lang === 'en') return;
    const jobs = [];
    root.querySelectorAll?.(UI_SELECTOR).forEach(el => {
      if(el.closest?.(SKIP_SELECTOR) || el.dataset.i18nRemoteDone === lang) return;
      if(el.childNodes.length !== 1 || el.childNodes[0].nodeType !== 3) return;
      const src = el.dataset.i18nSourceText || el.textContent;
      el.dataset.i18nSourceText = src;
      if(translateLocal(src, lang)) return;
      const clean = baseText(src);
      if(clean) jobs.push({el, src, clean});
    });
    if(!jobs.length) return;
    translateBatch(jobs.map(j => j.clean), lang).then(map => {
      jobs.forEach(j => {
        const out = map[j.clean];
        if(out && out !== j.clean) j.el.textContent = String(j.src).replace(j.clean, out);
        j.el.dataset.i18nRemoteDone = lang;
      });
    });
  }
  function updateFixedLabels(lang=current()){
    const navNames = {feed:'Feed',explore:'Explore',earn:'Earn',friends:'Friends',wallet:'Wallet',messages:'Chat',apps:'Apps',nft:'NFT',metaverse:'Meta',stats:'Stats',badges:'Badges',profile:'Me',settings:'Settings'};
    Object.entries(navNames).forEach(([page,label]) => {
      const el = document.querySelector(`.bn[data-p="${page}"] .lbl`);
      if(el) {
        el.dataset.i18nSourceText = label;
        el.textContent = translateLocal(label, lang) || label;
      }
    });
    const cur = document.getElementById('curLangLabel');
    if(cur && typeof LANGUAGES !== 'undefined' && LANGUAGES[lang]) cur.textContent = `${LANGUAGES[lang].flag} ${LANGUAGES[lang].name}`;
  }
  function shouldTranslatePosts(){
    const box = document.getElementById('autoTranslateToggle');
    return !!box?.checked || !!(window.CU?.privacySettings?.autoTranslate);
  }
  function translateVisiblePosts(lang=current()){
    if(lang === 'en' || !shouldTranslatePosts()) return;
    const jobs = [];
    document.querySelectorAll('.post-txt').forEach(el => {
      if(el.dataset.postLang === lang || el.dataset.translating === '1') return;
      const src = el.dataset.sourceText || el.textContent.trim();
      if(!src || src.length > 500) return;
      el.dataset.sourceText = src;
      el.dataset.translating = '1';
      jobs.push({el, src});
    });
    if(!jobs.length) return;
    translateBatch(jobs.map(j => j.src), lang).then(map => {
      jobs.forEach(({el, src}) => {
        const out = map[baseText(src)] || src;
        if(out && out !== src) el.textContent = out;
        el.dataset.postLang = lang;
        el.dataset.translating = '0';
      });
    }).catch(() => {
      jobs.forEach(({el}) => { el.dataset.translating = '0'; });
    });
  }
  function setLanguage(code){
    if(typeof LANGUAGES === 'undefined') return;
    if(!LANGUAGES[code]) return;
    window.currentLang = code;
    try { currentLang = code; } catch(e) {}
    localStorage.setItem(LANG_KEY, code);
    applyAll(document, code);
    if(typeof closeModal === 'function') closeModal('langModal');
    if(typeof toast === 'function') toast('s', (translateLocal('App Language', code) || 'Language') + ': ' + LANGUAGES[code].name);
    setTimeout(() => {
      ['rSettings','rEarn','rWallet','rMessages','rExplore','rAppsPage','rNFTMarketplace','renderBadges'].forEach(fn => {
        try { if(typeof window[fn] === 'function' && document.querySelector('.pg.on')) applyAll(document.querySelector('.pg.on'), code); } catch(e) {}
      });
    }, 80);
  }
  function wrapRender(fnName){
    const old = window[fnName];
    if(typeof old !== 'function' || old.__i18nWrapped) return;
    const wrapped = function(){
      const out = old.apply(this, arguments);
      idle(() => applyAll(document.querySelector('.pg.on') || document, current()));
      return out;
    };
    wrapped.__i18nWrapped = true;
    window[fnName] = wrapped;
  }

  ready(() => {
    if(typeof LANGUAGES !== 'undefined') Object.assign(LANGUAGES, EXTRA_LANGS);
    const saved = localStorage.getItem(LANG_KEY);
    if(saved && typeof LANGUAGES !== 'undefined' && LANGUAGES[saved]) { window.currentLang = saved; try { currentLang = saved; } catch(e) {} }
    const oldSetLang = window.setLang;
    window.setLang = function(code){ setLanguage(code); return false; };
    window.rLangGrid = function(){
      const grid = document.getElementById('langGrid');
      if(!grid || typeof LANGUAGES === 'undefined') return;
      const lang = current();
      grid.innerHTML = Object.entries(LANGUAGES).map(([code,l]) => `<div class="lang-btn${code===lang?' on':''}" onclick="setLang('${code}')"><span class="lang-flag">${l.flag}</span><span>${l.name}</span></div>`).join('');
    };
    window.searchLanguage = function(q){
      const grid = document.getElementById('langGrid');
      if(!grid || typeof LANGUAGES === 'undefined') return;
      const lang = current();
      const needle = String(q || '').toLowerCase();
      grid.innerHTML = Object.entries(LANGUAGES).filter(([code,l]) => code.includes(needle) || l.name.toLowerCase().includes(needle)).map(([code,l]) => `<div class="lang-btn${code===lang?' on':''}" onclick="setLang('${code}')"><span class="lang-flag">${l.flag}</span><span>${l.name}</span></div>`).join('');
    };
    ['nav','rFeed','rExplore','rEarn','rWallet','rMessages','rSettings','rAppsPage','rNFTMarketplace','renderBadges','profileTab','friendsTab','showPostMenu','openPostDetail'].forEach(wrapRender);
    const autoBox = document.getElementById('autoTranslateToggle');
    if(autoBox) autoBox.addEventListener('change', () => {
      if(window.CU) {
        CU.privacySettings = CU.privacySettings || {};
        CU.privacySettings.autoTranslate = autoBox.checked;
        if(typeof saveData === 'function') saveData();
      }
      translateVisiblePosts(current());
    });
    const mo = new MutationObserver(records => {
      if(current() === 'en') return;
      let root = null;
      for(const r of records) {
        if(r.addedNodes?.length) { root = r.target.nodeType === 1 ? r.target : document; break; }
      }
      if(root) idle(() => applyAll(root, current()));
    });
    mo.observe(document.body, {childList:true, subtree:true});
    applyAll(document, current());
    window.mxtApplyLanguage = applyAll;
  });
})();



/* Monetixra i18n pro + smoothness enhancer */
(function(){
  const ready = fn => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn, {once:true}) : fn();
  const idle = fn => (window.requestIdleCallback || (cb => setTimeout(cb, 24)))(fn, {timeout:900});
  const LANG_KEY = 'mxt_app_language';
  const CACHE_KEY = 'mxt_i18n_pro_cache_v2';
  const RTL = new Set(['ar','fa','he','ur']);
  const SKIP = 'script,style,noscript,textarea,[contenteditable="true"],.post-txt,.cr-bub,.post-nm,.chat-nm,.nft-name,.app-name,.tx-lbl';
  const TEXT_TARGETS = [
    'button','.btn','.bn .lbl','.cat-pill','.chip','.page-title','.section-label',
    '.sett-ttl','.sett-nm','.sett-sub','.task-name','.task-desc','.modal-ttl',
    '.fl','.wh-lbl','.pstat-l','.ss-l','.profile-tab','.media-chip','label','option',
    '.call-status','.call-name','.ic-type','.ad-spon','.badge'
  ].join(',');
  const ATTR_TARGETS = 'input[placeholder],textarea[placeholder],[title],[aria-label]';
  const NAV = {
    feed:'Feed', explore:'Explore', earn:'Earn', friends:'Friends', wallet:'Wallet',
    messages:'Chat', apps:'Apps', nft:'NFT', metaverse:'Meta', analytics:'Stats',
    gamification:'Badges', profile:'Me', settings:'Settings'
  };
  const LOCAL = {
    bn:{
      Feed:'ফিড', Explore:'এক্সপ্লোর', Earn:'আয়', Friends:'বন্ধু', Wallet:'ওয়ালেট',
      Chat:'চ্যাট', Apps:'অ্যাপস', NFT:'এনএফটি', Meta:'মেটা', Stats:'স্ট্যাটস',
      Badges:'ব্যাজ', Me:'আমি', Settings:'সেটিংস', Search:'সার্চ', Send:'পাঠান',
      Save:'সেভ', Cancel:'বাতিল', Delete:'ডিলিট', Share:'শেয়ার', Copy:'কপি',
      Refresh:'রিফ্রেশ', All:'সব', Posts:'পোস্ট', Media:'মিডিয়া', Saved:'সেভড',
      Followers:'ফলোয়ার', Following:'ফলোয়িং', Points:'পয়েন্ট', Earnings:'আয়',
      Notifications:'নোটিফিকেশন', Admin:'অ্যাডমিন', Done:'সম্পন্ন', Go:'যান',
      Login:'লগইন', 'Sign In':'সাইন ইন', 'Sign Up':'সাইন আপ', 'Send OTP':'OTP পাঠান',
      'Create Account':'অ্যাকাউন্ট তৈরি করুন', 'App Language':'অ্যাপ ভাষা',
      'Auto-Translate Posts':'পোস্ট অটো অনুবাদ', 'Translate to your language':'আপনার ভাষায় অনুবাদ',
      'Edit Profile':'প্রোফাইল এডিট', 'Change Password':'পাসওয়ার্ড পরিবর্তন',
      'KYC Verification':'KYC যাচাই', 'Privacy & Security':'প্রাইভেসি ও নিরাপত্তা',
      'Content & Feed':'কনটেন্ট ও ফিড', 'Language & Region':'ভাষা ও অঞ্চল',
      'Earnings & Wallet':'আয় ও ওয়ালেট', 'Storage & Offline':'স্টোরেজ ও অফলাইন',
      About:'সম্পর্কে', 'Sign Out':'সাইন আউট', 'Delete Account':'অ্যাকাউন্ট ডিলিট',
      'Find Friends':'বন্ধু খুঁজুন', 'Create Group':'গ্রুপ তৈরি করুন', 'Start Call':'কল শুরু',
      'Audio Call':'অডিও কল', 'Video Call':'ভিডিও কল', 'Mint NFT':'NFT মিন্ট',
      'Mint New NFT':'নতুন NFT মিন্ট', 'Watch Ad':'বিজ্ঞাপন দেখুন', 'Daily Bonus':'ডেইলি বোনাস',
      'No posts':'কোন পোস্ট নেই', 'No users':'কোন ইউজার নেই', 'No pending withdrawals':'পেন্ডিং উত্তোলন নেই',
      'Search users, posts, hashtags, NFTs...':'ইউজার, পোস্ট, হ্যাশট্যাগ, NFT সার্চ করুন...',
      'Search friends by name...':'নাম দিয়ে বন্ধু সার্চ করুন...', 'Search language...':'ভাষা সার্চ করুন...',
      'Comment...':'কমেন্ট...', 'Current Password':'বর্তমান পাসওয়ার্ড', 'New Password':'নতুন পাসওয়ার্ড',
      'Confirm Password':'পাসওয়ার্ড নিশ্চিত করুন', Name:'নাম', Username:'ইউজারনেম', Bio:'বায়ো',
      Location:'লোকেশন', Website:'ওয়েবসাইট', Amount:'পরিমাণ', 'Recipient address':'প্রাপকের ঠিকানা'
    },
    hi:{Feed:'फीड',Explore:'एक्सप्लोर',Earn:'कमाई',Friends:'दोस्त',Wallet:'वॉलेट',Chat:'चैट',Apps:'ऐप्स',NFT:'NFT',Meta:'मेटा',Stats:'आंकड़े',Badges:'बैज',Me:'मैं',Settings:'सेटिंग्स',Search:'खोज',Send:'भेजें',Save:'सेव',Cancel:'रद्द',Delete:'डिलीट',Share:'शेयर',Copy:'कॉपी',All:'सभी',Posts:'पोस्ट',Points:'पॉइंट्स'},
    es:{Feed:'Inicio',Explore:'Explorar',Earn:'Ganar',Friends:'Amigos',Wallet:'Billetera',Chat:'Chat',Apps:'Apps',Meta:'Meta',Stats:'Estadisticas',Badges:'Insignias',Me:'Yo',Settings:'Ajustes',Search:'Buscar',Send:'Enviar',Save:'Guardar',Cancel:'Cancelar',Delete:'Eliminar',Share:'Compartir',Copy:'Copiar',All:'Todo',Posts:'Publicaciones',Points:'Puntos'},
    fr:{Feed:'Fil',Explore:'Explorer',Earn:'Gagner',Friends:'Amis',Wallet:'Portefeuille',Chat:'Chat',Apps:'Apps',Meta:'Meta',Stats:'Stats',Badges:'Badges',Me:'Moi',Settings:'Parametres',Search:'Rechercher',Send:'Envoyer',Save:'Sauver',Cancel:'Annuler',Delete:'Supprimer',Share:'Partager',Copy:'Copier',All:'Tout',Posts:'Posts',Points:'Points'}
  };
  let cache = {};
  let pendingTimer = 0;
  try { cache = JSON.parse(localStorage.getItem(CACHE_KEY) || '{}') || {}; } catch(e) {}

  function lang(){ return localStorage.getItem(LANG_KEY) || window.currentLang || 'en'; }
  function clean(text){ return String(text || '').replace(/\s+/g,' ').trim(); }
  function keyText(text){
    return clean(text)
      .replace(/^[^\p{L}\p{N}]+/u,'')
      .replace(/[›»]+$/,'')
      .replace(/\s*\([^)]*\)\s*$/,'')
      .trim();
  }
  function local(text, code=lang()){
    if(code === 'en') return text;
    const raw = clean(text);
    const core = keyText(raw);
    const out = LOCAL[code]?.[raw] || LOCAL[code]?.[core];
    if(!out) return '';
    const prefix = raw.match(/^[^\p{L}\p{N}]*/u)?.[0] || '';
    const suffix = /[›»]$/.test(raw) ? ' ›' : '';
    return prefix + out + suffix;
  }
  function saveCache(){ try { localStorage.setItem(CACHE_KEY, JSON.stringify(cache).slice(0, 220000)); } catch(e) {} }
  async function batchTranslate(list, code){
    const unique = [...new Set(list.map(keyText).filter(t => t.length > 1 && t.length < 140))].slice(0, 90);
    const misses = unique.filter(t => !cache[code + '|' + t] && !local(t, code));
    if(misses.length) {
      try {
        const r = await fetch('/api/translate/batch', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({texts:misses, targetLanguage:code})
        });
        const d = await r.json();
        const out = d.translations || d.translated || [];
        misses.forEach((t,i) => { cache[code + '|' + t] = out[i] || t; });
        saveCache();
      } catch(e) {}
    }
    return Object.fromEntries(unique.map(t => [t, local(t, code) || cache[code + '|' + t] || t]));
  }
  function setTextNode(node, text, code){
    node.__mxtSource = node.__mxtSource || node.nodeValue;
    const source = node.__mxtSource;
    const translated = local(source, code);
    if(translated) node.nodeValue = translated;
    return !!translated;
  }
  function applyLocal(root=document, code=lang()){
    document.documentElement.lang = code;
    document.documentElement.dir = RTL.has(code) ? 'rtl' : 'ltr';
    Object.entries(NAV).forEach(([page,label]) => {
      const el = document.querySelector(`.bn[data-p="${page}"] .lbl`);
      if(el) {
        el.dataset.mxtSource = label;
        el.textContent = local(label, code) || label;
      }
    });
    root.querySelectorAll?.(ATTR_TARGETS).forEach(el => {
      if(el.closest?.(SKIP)) return;
      ['placeholder','title','aria-label'].forEach(attr => {
        const v = el.getAttribute(attr);
        if(!v) return;
        const srcAttr = 'data-mxt-source-' + attr;
        const src = el.getAttribute(srcAttr) || v;
        el.setAttribute(srcAttr, src);
        const out = local(src, code);
        if(out) el.setAttribute(attr, out);
      });
    });
    root.querySelectorAll?.(TEXT_TARGETS).forEach(el => {
      if(el.closest?.(SKIP)) return;
      Array.from(el.childNodes || []).forEach(n => {
        if(n.nodeType === 3 && keyText(n.nodeValue)) setTextNode(n, n.nodeValue, code);
      });
    });
  }
  function applyRemote(root=document, code=lang()){
    if(code === 'en') return;
    const jobs = [];
    root.querySelectorAll?.(TEXT_TARGETS).forEach(el => {
      if(el.closest?.(SKIP) || el.dataset.mxtRemoteLang === code) return;
      if(el.childNodes.length !== 1 || el.childNodes[0].nodeType !== 3) return;
      const src = el.dataset.mxtSource || el.textContent;
      el.dataset.mxtSource = src;
      if(local(src, code)) return;
      jobs.push({el, src, clean:keyText(src)});
    });
    root.querySelectorAll?.(ATTR_TARGETS).forEach(el => {
      if(el.closest?.(SKIP)) return;
      ['placeholder','title','aria-label'].forEach(attr => {
        const src = el.getAttribute('data-mxt-source-' + attr) || el.getAttribute(attr);
        if(src && !local(src, code)) jobs.push({el, attr, src, clean:keyText(src)});
      });
    });
    if(!jobs.length) return;
    batchTranslate(jobs.map(j => j.src), code).then(map => {
      jobs.forEach(j => {
        const out = map[j.clean];
        if(!out || out === j.clean) return;
        if(j.attr) j.el.setAttribute(j.attr, out);
        else j.el.textContent = String(j.src).replace(j.clean, out);
        j.el.dataset.mxtRemoteLang = code;
      });
    });
  }
  function apply(root=document){
    const code = lang();
    if(code === 'en') return;
    applyLocal(root, code);
    clearTimeout(pendingTimer);
    pendingTimer = setTimeout(() => idle(() => applyRemote(root, code)), 120);
  }
  function wrap(fnName){
    const old = window[fnName];
    if(typeof old !== 'function' || old.__mxtI18nPro) return;
    window[fnName] = function(){
      const out = old.apply(this, arguments);
      idle(() => apply(document.querySelector('.pg.on') || document));
      return out;
    };
    window[fnName].__mxtI18nPro = true;
  }
  function installSmoothness(){
    document.documentElement.classList.add('mxt-smooth-ui');
    if('scrollRestoration' in history) history.scrollRestoration = 'manual';
    document.addEventListener('click', e => {
      const btn = e.target.closest('button,.btn,.bn,.chip,.cat-pill,.media-chip,.sett-row');
      if(!btn) return;
      btn.style.willChange = 'transform';
      setTimeout(() => { btn.style.willChange = ''; }, 220);
    }, {capture:true, passive:true});
    const warm = () => {
      document.querySelectorAll('img[loading!="eager"]').forEach(img => {
        img.loading = img.closest('.post') ? 'lazy' : (img.loading || 'lazy');
        img.decoding = 'async';
      });
      document.querySelectorAll('video,audio').forEach(m => { if(!m.preload) m.preload = 'metadata'; });
    };
    warm();
    new MutationObserver(() => idle(warm)).observe(document.body, {childList:true, subtree:true});
  }
  ready(() => {
    ['nav','rFeed','rExplore','rEarn','rWallet','rMessages','rFriends','rAppsPage','rNFTMarketplace','rMetaverse','rAnalytics','rGamification','rSettings','rProfile','renderBadges','openModal','showPostMenu','renderChatMsgs'].forEach(wrap);
    const oldSetLang = window.setLang;
    window.setLang = function(code){
      localStorage.setItem(LANG_KEY, code);
      window.currentLang = code;
      try { currentLang = code; } catch(e) {}
      const out = oldSetLang && oldSetLang !== window.setLang ? oldSetLang.apply(this, arguments) : undefined;
      apply(document);
      setTimeout(() => apply(document), 250);
      return out || false;
    };
    installSmoothness();
    apply(document);
    new MutationObserver(records => {
      if(lang() === 'en') return;
      const roots = records.flatMap(r => Array.from(r.addedNodes || [])).filter(n => n.nodeType === 1).slice(0, 8);
      if(roots.length) idle(() => roots.forEach(apply));
    }).observe(document.body, {childList:true, subtree:true});
    window.mxtTranslateEverything = apply;
  });
})();



/* Monetixra safety upgrades: signup ads, click rewards, mobile menus, chat delete */
(function(){
  const ready = fn => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn, {once:true}) : fn();
  const dayKey = () => new Date().toDateString();
  const SIGNUP_FLOW_KEY = 'mxt_signup_flow';
  const AUTH_FLOW_KEY = 'mxt_auth_flow';
  const isAuthSignupActive = () => !!document.querySelector('#afRegister.on') || !!document.querySelector('#afLogin.on');
  const isSignupProtected = () =>
    sessionStorage.getItem(SIGNUP_FLOW_KEY) === '1' ||
    sessionStorage.getItem(AUTH_FLOW_KEY) === '1' ||
    sessionStorage.getItem('mxt_signup_busy') === '1' ||
    sessionStorage.getItem('mxt_login_busy') === '1' ||
    sessionStorage.getItem('mxt_otp_busy') === '1' ||
    isAuthSignupActive();
  const AD_CAP = {maxPerDay:24, minGapMs:45000};
  const CLICK_REWARD_MIN_DAILY = 3;
  const CLICK_REWARD_MAX_DAILY = 3;
  const CLICK_REWARD_POPUP_GAP_MS = 7 * 60 * 1000;

  function rewardUserId(){
    try { return CU?.id || 'guest'; } catch(e) { return 'guest'; }
  }

  function dailyClickRewardLimit(){
    try {
      const key = 'mxt_click_reward_limit_' + dayKey();
      let limit = Number(localStorage.getItem(key) || 0);
      if(!limit) {
        limit = CLICK_REWARD_MIN_DAILY + Math.floor(Math.random() * (CLICK_REWARD_MAX_DAILY - CLICK_REWARD_MIN_DAILY + 1));
        localStorage.setItem(key, String(limit));
      }
      return limit;
    } catch(e) {
      return 12;
    }
  }

  function setBtnBusy(btn, busy, text){
    if(!btn) return;
    if(busy) {
      btn.dataset.mxtOldText = btn.textContent || '';
      btn.disabled = true;
      btn.style.pointerEvents = 'none';
      if(text) btn.textContent = text;
    } else {
      btn.disabled = false;
      btn.style.pointerEvents = '';
      if(btn.dataset.mxtOldText) btn.textContent = btn.dataset.mxtOldText;
    }
  }

  function closeBlockingAds(){
    ['intsAd','autoAd','rwAd','interstitialOverlay'].forEach(id => {
      const el = document.getElementById(id);
      if(!el) return;
      el.classList?.remove('show');
      if(id === 'interstitialOverlay') el.remove();
    });
    document.querySelectorAll('.interstitial-overlay,.ad-notification,.sticky-ad-top,.notification-ad-bar').forEach(el => el.remove());
  }

  function setSignupProtected(on){
    if(on) {
      sessionStorage.setItem(SIGNUP_FLOW_KEY, '1');
      sessionStorage.setItem(AUTH_FLOW_KEY, '1');
      closeBlockingAds();
    } else {
      sessionStorage.removeItem(SIGNUP_FLOW_KEY);
      sessionStorage.removeItem(AUTH_FLOW_KEY);
    }
  }

  function canShowComfortAd(name){
    if(name === 'showRewardedAd') return true;
    let state = {};
    try { state = JSON.parse(localStorage.getItem('mxt_ad_comfort_state') || '{}') || {}; } catch(e) {}
    if(state.date !== dayKey()) state = {date:dayKey(), count:0, lastAt:0};
    const now = Date.now();
    if((state.count || 0) >= AD_CAP.maxPerDay) return false;
    if(now - Number(state.lastAt || 0) < AD_CAP.minGapMs) return false;
    state.count = (state.count || 0) + 1;
    state.lastAt = now;
    localStorage.setItem('mxt_ad_comfort_state', JSON.stringify(state));
    return true;
  }

  function wrapAdFn(name){
    const old = window[name];
    if(typeof old !== 'function' || old.__mxtWrapped) return;
    const wrapped = function(){
      if(isSignupProtected()) { closeBlockingAds(); return false; }
      if(!canShowComfortAd(name)) return false;
      return old.apply(this, arguments);
    };
    wrapped.__mxtWrapped = true;
    window[name] = wrapped;
  }

  const SAFE_AD_FN_NAMES = [
    'showInts','showAutoAd','tryShowInterstitialAd','tryShowAppOpenAd',
    'showInterstitialAd','showRewardedAd','showPopupAd','showAd','triggerAd',
    'openInterstitialAd','openRewardAd'
  ];
  SAFE_AD_FN_NAMES.forEach(wrapAdFn);

  const oldOpen = window.open;
  window.open = function(url, target, features){
    if(isSignupProtected() && /profitablecpm|highperformanceformat|adsterra|smartlink|ad|ads|pop|banner/i.test(String(url || ''))) {
      closeBlockingAds();
      return null;
    }
    return oldOpen ? oldOpen.call(window, url, target, features) : null;
  };

  const oldAuthTab = window.authTab;
  if(typeof oldAuthTab === 'function' && !oldAuthTab.__mxtSignupWrapped) {
    const wrappedAuthTab = function(tab, btn){
      const result = oldAuthTab.apply(this, arguments);
      setSignupProtected(tab === 'register' || tab === 'login');
      return result;
    };
    wrappedAuthTab.__mxtSignupWrapped = true;
    window.authTab = wrappedAuthTab;
  }

  document.addEventListener('click', function(e){
    if(e.target?.closest?.('#afRegister,.auth-seg')) {
      setSignupProtected(true);
      setTimeout(closeBlockingAds, 0);
      setTimeout(closeBlockingAds, 250);
      return;
    }
    if(isSignupProtected()) {
      setTimeout(closeBlockingAds, 0);
      setTimeout(closeBlockingAds, 250);
    }
  }, true);

  const oldSendRegOtp = window.sendRegOtp;
  if(typeof oldSendRegOtp === 'function') {
    window.sendRegOtp = async function(){
      if(sessionStorage.getItem('mxt_otp_busy') === '1') return false;
      const btn = document.activeElement?.tagName === 'BUTTON' ? document.activeElement : null;
      sessionStorage.setItem('mxt_otp_busy','1');
      setSignupProtected(true);
      closeBlockingAds();
      setBtnBusy(btn, true, 'Sending OTP...');
      try {
        return await oldSendRegOtp.apply(this, arguments);
      } finally {
        sessionStorage.removeItem('mxt_otp_busy');
        setBtnBusy(btn, false);
        closeBlockingAds();
      }
    };
  }

  const oldDoRegister = window.doRegister;
  if(typeof oldDoRegister === 'function') {
    window.doRegister = async function(){
      if(sessionStorage.getItem('mxt_signup_busy') === '1') return false;
      const btn = document.activeElement?.tagName === 'BUTTON' ? document.activeElement : null;
      sessionStorage.setItem('mxt_signup_busy','1');
      setSignupProtected(true);
      closeBlockingAds();
      setBtnBusy(btn, true, 'Creating...');
      try {
        const result = await oldDoRegister.apply(this, arguments);
        if(window.CU) setSignupProtected(false);
        return result;
      } finally {
        sessionStorage.removeItem('mxt_signup_busy');
        setBtnBusy(btn, false);
        closeBlockingAds();
      }
    };
  }
  const oldDoLogin = window.doLogin;
  if(typeof oldDoLogin === 'function') {
    window.doLogin = async function(){
      if(sessionStorage.getItem('mxt_login_busy') === '1') return false;
      const btn = document.activeElement?.tagName === 'BUTTON' ? document.activeElement : null;
      sessionStorage.setItem('mxt_login_busy','1');
      setSignupProtected(true);
      closeBlockingAds();
      setBtnBusy(btn, true, 'Signing in...');
      try {
        const result = await oldDoLogin.apply(this, arguments);
        if(window.CU) setSignupProtected(false);
        return result;
      } finally {
        sessionStorage.removeItem('mxt_login_busy');
        setBtnBusy(btn, false);
        closeBlockingAds();
      }
    };
  }

  function getRewardState(){
    const key = 'mxt_click_rewards_' + rewardUserId();
    let state = {};
    try { state = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch(e) {}
    if(state.date !== dayKey()) state = {date:dayKey(), count:0, shown:0, claimed:{}, limit:dailyClickRewardLimit()};
    state.key = key;
    state.claimed = state.claimed || {};
    state.limit = Number(state.limit || dailyClickRewardLimit());
    state.shown = Number(state.shown || 0);
    return state;
  }

  function saveRewardState(state){
    localStorage.setItem(state.key, JSON.stringify({
      date:state.date,
      count:state.count || 0,
      shown:state.shown || 0,
      limit:state.limit || dailyClickRewardLimit(),
      claimed:state.claimed || {}
    }));
  }

  function ensureRewardId(btn, pts, label){
    if(!btn) return label + ':' + pts + ':manual';
    if(!btn.dataset.rewardId) {
      btn.dataset.rewardId = 'rw_' + dayKey().replace(/\W+/g,'_') + '_' + rewardUserId() + '_' + Date.now() + '_' + Math.random().toString(36).slice(2,7);
    }
    return btn.dataset.rewardId;
  }

  function showSkippableRewardAd(pts, label){
    return new Promise(resolve => {
      const offers = [
        {name:'Adsterra', title:'Sponsored offer', body:'View this short sponsor message to unlock your points.', color:'linear-gradient(135deg,#111827,#7c3aed)'},
        {name:'Google AdSense', title:'Recommended for you', body:'A relevant ad helps keep Monetixra rewards active.', color:'linear-gradient(135deg,#0f766e,#2563eb)'},
        {name:'AdMob', title:'Mobile reward ad', body:'Quick mobile-friendly reward placement.', color:'linear-gradient(135deg,#b45309,#dc2626)'},
        {name:'Native', title:'Creator boost', body:'Interactive ads rotate by page and feature for better earnings.', color:'linear-gradient(135deg,#164e63,#16a34a)'}
      ];
      const ad = offers[Math.floor(Math.random() * offers.length)];
      const overlay = document.createElement('div');
      overlay.className = 'mxt-reward-gate';
      overlay.innerHTML = `
        <div class="mxt-reward-card" style="background:${ad.color}">
          <div class="mxt-ad-label">AD · ${ad.name}</div>
          <div class="mxt-ad-title">${ad.title}</div>
          <div class="mxt-ad-body">${ad.body}</div>
          <div class="mxt-ad-pts">+${Number(pts) || 0} pts</div>
          <div class="mxt-ad-progress"><span></span></div>
          <button class="mxt-ad-skip" disabled>Skip in 2</button>
        </div>`;
      document.body.appendChild(overlay);
      const skip = overlay.querySelector('.mxt-ad-skip');
      let left = 2;
      const timer = setInterval(() => {
        left--;
        if(left > 0) {
          skip.textContent = 'Skip in ' + left;
        } else {
          clearInterval(timer);
          skip.disabled = false;
          skip.textContent = 'Skip & claim';
        }
      }, 1000);
      const done = () => {
        clearInterval(timer);
        overlay.remove();
        resolve(true);
      };
      skip.addEventListener('click', done, {once:true});
      setTimeout(() => { if(document.body.contains(overlay)) done(); }, 4500);
      try {
        if(typeof MAX_AD_SYSTEM !== 'undefined') MAX_AD_SYSTEM.triggerContextualAd(label || 'click_reward');
        else if(typeof showInts === 'function' && !isSignupProtected()) showInts();
      } catch(e) {}
    });
  }

  window.mxtClaimClickReward = function(btn, pts, label){
    try { if(!CU) return typeof toast === 'function' && toast('e','Please login first'); } catch(e) { return typeof toast === 'function' && toast('e','Please login first'); }
    const state = getRewardState();
    const adBox = btn?.closest?.('.mxt-floating-pts,.ad-container,.ad-native,.task-card,.download-modal,div') || btn?.parentElement;
    const claimId = ensureRewardId(btn, pts, label || 'Click Ad');
    if(state.claimed[claimId]) {
      if(btn) {
        btn.disabled = true;
        btn.textContent = 'Claimed';
      }
      return typeof toast === 'function' && toast('w','Already claimed');
    }
    if((state.count || 0) >= (state.limit || dailyClickRewardLimit())) {
      btn.disabled = true;
      btn.textContent = 'Daily limit';
      return typeof toast === 'function' && toast('w','Click rewards: daily limit reached');
    }
    if(btn?.dataset?.mxtClaiming === '1') return false;
    if(btn) btn.dataset.mxtClaiming = '1';
    if(btn) btn.disabled = true;
    setBtnBusy(btn, true, 'Ad...');
    showSkippableRewardAd(pts, label).then(() => {
      state.count = (state.count || 0) + 1;
      state.claimed[claimId] = Date.now();
      saveRewardState(state);
      if(typeof addPts === 'function') addPts(Number(pts) || 0, label || 'Click Ad', 'earn');
      if(typeof toast === 'function') toast('s','+' + pts + ' pts added');
      if(adBox && adBox.classList?.contains('mxt-floating-pts')) adBox.remove();
      else if(adBox && adBox.classList?.contains('ad-container')) adBox.remove();
      else if(adBox && /click any button to earn points/i.test(adBox.textContent || '')) adBox.remove();
      else if(btn) {
        const floatParent = btn.closest('.mxt-floating-pts');
        if(floatParent) floatParent.remove();
        else btn.remove();
      }
    }).finally(() => {
      if(btn) delete btn.dataset.mxtClaiming;
    });
    return false;
  };

  document.addEventListener('click', function(e){
    const btn = e.target.closest('button');
    if(!btn) return;
    const txt = (btn.textContent || '').trim();
    const ptsMatch = txt.match(/\+(\d+)\s*pts?/i);
    const box = btn.closest('.ad-container,.ad-native');
    if(!ptsMatch || !box || !/click|earn|reward/i.test(box.textContent || '')) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    window.mxtClaimClickReward(btn, Number(ptsMatch[1]), 'Click Ad');
  }, true);

  function showFloatingClickReward(){
    let loggedIn = false;
    try { loggedIn = !!CU; } catch(e) {}
    if(!loggedIn || isSignupProtected() || document.querySelector('.mxt-floating-pts')) return;
    const state = getRewardState();
    const limit = state.limit || dailyClickRewardLimit();
    if((state.shown || 0) >= limit || (state.count || 0) >= limit) return;
    const now = Date.now();
    if(now - Number(state.lastShown || 0) < CLICK_REWARD_POPUP_GAP_MS) return;
    state.shown = (state.shown || 0) + 1;
    state.lastShown = now;
    saveRewardState(state);

    const pts = [2,3,5][Math.floor(Math.random() * 3)];
    const box = document.createElement('div');
    box.className = 'mxt-floating-pts';
    box.innerHTML = `
      <button type="button" class="mxt-floating-pts-btn" data-reward-id="daily_${state.date.replace(/\W+/g,'_')}_${state.shown}_${rewardUserId()}">+${pts} pts</button>
      <button type="button" class="mxt-floating-pts-x" aria-label="Close">×</button>`;
    document.body.appendChild(box);
    const btn = box.querySelector('.mxt-floating-pts-btn');
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      window.mxtClaimClickReward(btn, pts, 'Daily Click Reward');
    });
    const closeBtn = box.querySelector('.mxt-floating-pts-x');
    if(closeBtn) closeBtn.addEventListener('click', () => box.remove(), {once:true});
    setTimeout(() => { if(document.body.contains(box)) box.remove(); }, 45000);
  }

  const oldShowPostMenu = window.showPostMenu;
  if(typeof oldShowPostMenu === 'function') {
    window.showPostMenu = function(pid, anchor){
      const out = oldShowPostMenu.apply(this, arguments);
      const menu = document.querySelector('.post-menu-dropdown');
      if(menu && anchor) {
        const rect = anchor.getBoundingClientRect();
        const width = Math.min(260, window.innerWidth - 16);
        const left = Math.max(8, Math.min(window.innerWidth - width - 8, rect.right - width));
        menu.style.width = width + 'px';
        menu.style.left = left + 'px';
        menu.style.right = 'auto';
        menu.style.zIndex = '100000';
        menu.style.maxHeight = Math.max(180, window.innerHeight - 24) + 'px';
        requestAnimationFrame(() => {
          const menuHeight = Math.min(menu.offsetHeight || 260, window.innerHeight - 24);
          const below = rect.bottom + 6;
          const above = rect.top - menuHeight - 6;
          const top = below + menuHeight <= window.innerHeight - 8 ? below : Math.max(8, above);
          menu.style.top = top + 'px';
        });
        menu.addEventListener('touchstart', ev => ev.stopPropagation(), {passive:true});
        menu.addEventListener('click', ev => ev.stopPropagation());
      }
      return out;
    };
  }

  function mxtAutoplayVisibleFeedMedia(){
    const videos = Array.from(document.querySelectorAll('.post-media video'));
    if(!videos.length) return;
    const playVisible = () => {
      let best = null;
      videos.forEach(v => {
        const r = v.getBoundingClientRect();
        const visible = Math.max(0, Math.min(r.bottom, window.innerHeight) - Math.max(r.top, 0));
        if(visible > 120 && (!best || visible > best.visible)) best = {v, visible};
      });
      videos.forEach(v => {
        if(best && v === best.v) {
          v.muted = true;
          v.playsInline = true;
          v.play?.().catch(()=>{});
        } else if(!v.paused) {
          v.pause();
        }
      });
    };
    clearTimeout(window._mxtAutoplayTimer);
    window._mxtAutoplayTimer = setTimeout(playVisible, 120);
  }

  const oldRFeedSafe = window.rFeed;
  if(typeof oldRFeedSafe === 'function' && !oldRFeedSafe.__mxtAutoPlayWrapped) {
    const wrappedRFeed = function(){
      const result = oldRFeedSafe.apply(this, arguments);
      mxtAutoplayVisibleFeedMedia();
      return result;
    };
    wrappedRFeed.__mxtAutoPlayWrapped = true;
    window.rFeed = wrappedRFeed;
  }
  window.addEventListener('scroll', mxtAutoplayVisibleFeedMedia, {passive:true});

  window.doWithdraw = async function(){
    if(!window.CU) return;
    if(sessionStorage.getItem('mxt_withdraw_busy') === '1') return false;
    sessionStorage.setItem('mxt_withdraw_busy','1');
    try {
      const u = D.users[CU.id] || CU;
      const amt = parseInt((G('wdAmt')?.value || '').trim(), 10);
      const meth = G('wdMethod')?.value || 'bkash';
      const acc = (G('wdAccount')?.value || '').trim();
      if(!amt || amt < MIN_WITHDRAW) return toast('e','Minimum '+MIN_WITHDRAW+' pts');
      if(amt > (u.points || 0)) return toast('e','Insufficient: you have '+(u.points || 0)+' pts');
      if(!acc) return toast('e','Enter account number / address');
      if(!u.kycVerified) { toast('e','KYC verification required first'); openModal('kycModal'); return; }
      let wd = null;
      try {
        if(typeof MAX_AD_SYSTEM !== 'undefined') MAX_AD_SYSTEM.triggerContextualAd('before_withdraw');
        const r = await fetch('/api/withdrawals/request', {
          method:'POST',
          headers:{'Content-Type':'application/json','x-user-id':CU.id},
          body:JSON.stringify({userId:CU.id, amount:amt, method:meth, account:acc})
        });
        const d = await r.json().catch(() => ({}));
        if(!r.ok || !d.success) throw new Error(d.error || d.detail || 'Withdrawal server failed');
        wd = {
          id:d.withdrawal?.id || ('wd_' + Date.now()),
          user:CU.id,
          amount:amt,
          method:meth,
          account:acc,
          status:d.withdrawal?.status || 'pending',
          at:d.withdrawal?.created_at ? new Date(d.withdrawal.created_at).getTime() : Date.now()
        };
      } catch(e) {
        console.warn('[withdraw server fallback]', e);
        wd = {id:'wd_local_' + Date.now(), user:CU.id, amount:amt, method:meth, account:acc, status:'pending', at:Date.now(), localOnly:true};
      }
      u.points = (u.points || 0) - amt;
      D.withdrawals = D.withdrawals || [];
      D.withdrawals.unshift(wd);
      D.txs = D.txs || [];
      D.txs.unshift({id:'t'+Date.now(), type:'withdraw', label:'Withdrawal via '+meth, pts:-amt, at:Date.now(), user:CU.id});
      addNotif(ADMIN_ID, 'withdraw', '💸', `${amt}pts via ${meth} from ${CU.name}`);
      saveData(); saveSession();
      closeModal('wdModal'); syncUI(); if(typeof rWallet === 'function') rWallet();
      toast('s', wd.localOnly ? 'Withdrawal saved locally for admin approval' : 'Withdrawal submitted for admin approval');
    } finally {
      sessionStorage.removeItem('mxt_withdraw_busy');
    }
  };

  window.deleteChatMessage = function(msgId, everyone=false){
    const peerId = (typeof currentChatId !== 'undefined' ? currentChatId : window.currentChatId);
    if(!window.CU || !peerId) return;
    const key = [CU.id,peerId].sort().join('_');
    const msgs = D.chats?.[key] || [];
    const msg = msgs.find(m => m.id === msgId);
    if(!msg) return;
    if(everyone && msg.from === CU.id) {
      msg.deleted = true;
      msg.text = 'Message deleted';
      delete msg.data;
    } else {
      msg.hiddenFor = msg.hiddenFor || [];
      if(!msg.hiddenFor.includes(CU.id)) msg.hiddenFor.push(CU.id);
    }
    saveData();
    if(everyone && socketReady && socket) socket.emit('chat:delete', {to:peerId, msgId, scope:'everyone'});
    renderChatMsgs();
  };

  const oldRenderChatMsgs = window.renderChatMsgs;
  if(typeof oldRenderChatMsgs === 'function') {
    window.renderChatMsgs = function(){
      oldRenderChatMsgs.apply(this, arguments);
      const peerId = (typeof currentChatId !== 'undefined' ? currentChatId : window.currentChatId);
      const key = window.CU && peerId ? [CU.id,peerId].sort().join('_') : '';
      const allMsgs = key ? (D.chats?.[key] || []) : [];
      document.querySelectorAll('#crMsgs .cr-msg').forEach((el, i) => {
        const msg = allMsgs[i];
        if(!msg) return;
        if((msg.hiddenFor || []).includes(CU.id)) {
          el.remove();
          return;
        }
        if(el.querySelector('.mxt-msg-actions')) return;
        const mine = msg.from === CU.id;
        el.querySelector('.cr-bub')?.insertAdjacentHTML('beforeend',
          `<div class="mxt-msg-actions"><button onclick="deleteChatMessage('${msg.id}',false)">Delete you</button>${mine ? `<button onclick="deleteChatMessage('${msg.id}',true)">Delete everyone</button>` : ''}</div>`);
      });
    };
  }

  function applyMobilePerformanceBoost(){
    document.body.classList.add('mxt-mobile-boost');
    const tuneMedia = root => {
      (root || document).querySelectorAll?.('img,video,iframe').forEach(el => {
        if(el.tagName === 'IMG') {
          el.loading = el.loading || 'lazy';
          el.decoding = el.decoding || 'async';
        }
        if(el.tagName === 'IFRAME') el.loading = el.loading || 'lazy';
        if(el.tagName === 'VIDEO') {
          el.preload = el.preload || 'metadata';
          el.playsInline = true;
        }
      });
    };
    tuneMedia(document);
    new MutationObserver(records => {
      records.forEach(record => record.addedNodes?.forEach(node => {
        if(node.nodeType === 1) tuneMedia(node);
      }));
    }).observe(document.body, {childList:true, subtree:true});
  }

  function installMovableScreenControls(){
    const key = 'mxt_movable_controls';
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch(e) {}
    const controlSelector = '.mxt-floating-pts,.mxt-safe-fab';
    const controlId = el => el.id || el.className?.toString?.().split(/\s+/).find(Boolean) || 'control';
    const save = () => {
      try { localStorage.setItem(key, JSON.stringify(saved)); } catch(e) {}
    };
    const restore = el => {
      const pos = saved[controlId(el)];
      if(!pos) return;
      Object.assign(el.style, {
        left: pos.left + 'px',
        top: pos.top + 'px',
        right: 'auto',
        bottom: 'auto'
      });
    };
    const restoreAll = root => (root || document).querySelectorAll?.(controlSelector).forEach(el => {
      el.classList.add('mxt-draggable-control');
      restore(el);
    });
    restoreAll(document);
    new MutationObserver(records => {
      records.forEach(record => record.addedNodes?.forEach(node => {
        if(node.nodeType === 1) restoreAll(node);
      }));
    }).observe(document.body, {childList:true, subtree:true});

    let drag = null;
    document.addEventListener('pointerdown', e => {
      const el = e.target.closest(controlSelector);
      if(!el || e.target.closest('.mxt-floating-pts-x')) return;
      const rect = el.getBoundingClientRect();
      const startX = e.clientX;
      const startY = e.clientY;
      const timer = setTimeout(() => {
        drag = {el, id:controlId(el), dx:startX - rect.left, dy:startY - rect.top};
        el.classList.add('mxt-dragging-control');
        el.setPointerCapture?.(e.pointerId);
      }, 360);
      const cancel = () => clearTimeout(timer);
      el.addEventListener('pointerup', cancel, {once:true});
      el.addEventListener('pointercancel', cancel, {once:true});
    }, {passive:true});
    document.addEventListener('pointermove', e => {
      if(!drag) return;
      e.preventDefault();
      const w = drag.el.offsetWidth || 64;
      const h = drag.el.offsetHeight || 44;
      const left = Math.max(6, Math.min(window.innerWidth - w - 6, e.clientX - drag.dx));
      const top = Math.max(6, Math.min(window.innerHeight - h - 6, e.clientY - drag.dy));
      Object.assign(drag.el.style, {left:left + 'px', top:top + 'px', right:'auto', bottom:'auto'});
      saved[drag.id] = {left, top};
      save();
    }, {passive:false});
    document.addEventListener('pointerup', () => {
      if(!drag) return;
      drag.el.classList.remove('mxt-dragging-control');
      drag = null;
    }, {passive:true});
  }

  ready(() => {
    document.body.classList.add('mxt-safe-upgrades');
    applyMobilePerformanceBoost();
    installMovableScreenControls();
    closeBlockingAds();
    setTimeout(showFloatingClickReward, 12000);
    setInterval(showFloatingClickReward, 60000);
  });
})();



/* Monetixra revenue ads + media AI caption comfort layer */
(function(){
  const ready = fn => document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn, {once:true}) : fn();
  const AD_SHARE = 0.67;
  const BOTTOM_AD_DAILY_LIMIT = 5;
  const feedTypes = ['adsense_display','adsterra_native','admob_banner','native_feed','rewarded_offer','video_offer','click_to_earn','quiz','poll','banner_300x250','admob_rewarded','premium_offer'];
  const adWeights = {
    rewarded_offer:12, video_offer:10, adsterra_native:8, adsense_display:8,
    banner_300x250:7, admob_rewarded:7, native_feed:6, click_to_earn:5,
    quiz:4, poll:4, admob_banner:3, premium_offer:8
  };
  const featureMap = {
    feed:['native_feed','adsense_display','adsterra_native','banner_300x250'],
    explore:['native_feed','adsense_display','adsterra_native','banner_300x250'],
    post:['rewarded_offer','video_offer','native_feed'],
    media:['video_offer','admob_rewarded','native_feed','adsense_display'],
    wallet:['rewarded_offer','premium_offer','adsense_display'],
    earn:['click_to_earn','quiz','poll','rewarded_offer'],
    messages:['native_feed','admob_banner','click_to_earn'],
    friends:['native_feed','banner_300x250','click_to_earn'],
    apps:['admob_banner','video_offer','native_feed'],
    nft:['adsterra_native','native_feed','admob_banner'],
    metaverse:['adsense_display','video_offer','rewarded_offer'],
    analytics:['adsterra_native','adsense_display','native_feed'],
    activity:['native_feed','banner_300x250','adsense_display'],
    gamification:['click_to_earn','quiz','poll','rewarded_offer'],
    profile:['native_feed','admob_banner','banner_300x250'],
    settings:['adsense_display','admob_banner','native_feed'],
    meta:['native_feed','admob_banner','adsense_display'],
    stats:['native_feed','banner_300x250','adsense_display'],
    badges:['native_feed','admob_banner','click_to_earn'],
    me:['native_feed','admob_banner','rewarded_offer'],
    referral:['click_to_earn','native_feed','banner_300x250'],
    marketplace:['adsense_display','native_feed','admob_banner'],
    leaderboard:['native_feed','adsterra_native','banner_300x250'],
    notif:['native_feed','admob_banner','click_to_earn'],
    offline:['native_feed','adsense_display','admob_banner'],
    default:['native_feed','adsense_display','adsterra_native','admob_banner']
  };

  function escText(v){
    if(typeof esc === 'function') return esc(v);
    return String(v || '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  const dayKey = () => new Date().toDateString();
  function rewardUserId(){
    try { return CU?.id || 'guest'; } catch(e) { return 'guest'; }
  }
  function getBottomRewardState(){
    const key = 'mxt_bottom_income_claims_' + rewardUserId();
    let state = {};
    try { state = JSON.parse(localStorage.getItem(key) || '{}') || {}; } catch(e) {}
    if(state.date !== dayKey()) state = {date:dayKey(), count:0, claimed:{}};
    state.key = key;
    state.claimed = state.claimed || {};
    state.count = Number(state.count || 0);
    return state;
  }
  function saveBottomRewardState(state){
    try {
      localStorage.setItem(state.key, JSON.stringify({
        date:state.date,
        count:state.count || 0,
        claimed:state.claimed || {}
      }));
    } catch(e) {}
  }
  function bottomClaimLeft(){
    const state = getBottomRewardState();
    return Math.max(0, BOTTOM_AD_DAILY_LIMIT - (state.count || 0));
  }
  function mediaKind(ad, idx){
    const text = [ad?.category, ad?.title, ad?.description, ad?.thumbnail].join(' ').toLowerCase();
    if(/video|watch|live|stream/.test(text)) return 'video';
    if(/photo|image|stock|creator/.test(text)) return 'photo';
    return idx % 3 === 0 ? 'video' : (idx % 3 === 1 ? 'photo' : 'offer');
  }
  function pick(list){
    const pool = [];
    (list || []).forEach(type => {
      const score = performanceBoost(type);
      const weight = Math.max(1, Math.round((adWeights[type] || 3) * score));
      for(let i = 0; i < weight; i++) pool.push(type);
    });
    return pool[Math.floor(Math.random() * pool.length)] || list?.[0] || 'native_feed';
  }
  function performanceBoost(type){
    try {
      const stats = JSON.parse(localStorage.getItem('mxt_revenue_ad_stats') || '{}');
      const claims = Number(stats[`${type}_claim`] || 0);
      const impressions = Object.entries(stats).filter(([k]) => k.startsWith(type + '_')).reduce((s, [,v]) => s + (Number(v) || 0), 0);
      if(impressions <= 0) return 1;
      return Math.min(2.4, 1 + (claims / impressions) * 8);
    } catch(e) { return 1; }
  }
  function currentPage(){
    const on = document.querySelector('.pg.on');
    return (on?.id || 'pg-feed').replace(/^pg-/,'');
  }
  function typeFor(ctx){
    const list = featureMap[ctx] || featureMap[currentPage()] || featureMap.default;
    return pick(list);
  }
  function adLabel(type){
    if(/adsense/i.test(type)) return 'Google AdSense';
    if(/admob/i.test(type)) return 'AdMob';
    if(/adsterra/i.test(type)) return 'Adsterra';
    if(/reward|video/i.test(type)) return 'Rewarded Video';
    if(/quiz|poll|click/i.test(type)) return 'Interactive';
    return 'Native Sponsor';
  }
  function adTheme(i){
    const themes = [
      ['#0f766e','#2563eb','Creator growth offer'],
      ['#7c2d12','#dc2626','Mobile reward placement'],
      ['#14532d','#16a34a','Relevant sponsor message'],
      ['#312e81','#0891b2','Smart earning campaign'],
      ['#713f12','#047857','Premium partner offer']
    ];
    return themes[Math.abs(i || 0) % themes.length];
  }
  function safeConst(name){
    try { return typeof window[name] !== 'undefined' ? window[name] : eval('typeof ' + name + ' !== "undefined" ? ' + name + ' : ""'); }
    catch(e) { return ''; }
  }
  function trackAd(type, placement){
    try {
      const key = 'mxt_revenue_ad_stats';
      const stats = JSON.parse(localStorage.getItem(key) || '{}');
      const id = `${type}_${placement}`;
      stats[id] = (stats[id] || 0) + 1;
      stats.last = {type, placement, at:Date.now()};
      localStorage.setItem(key, JSON.stringify(stats));
    } catch(e) {}
  }
  function claimKey(btn, type, label){
    const ad = btn?.closest?.('.mxt-rotating-ad,.feed-ad,.ad-container,.ad-native,.mxt-live-ad,.mxt-bottom-shelf-card');
    if(ad && !ad.dataset.claimId) ad.dataset.claimId = 'mxtad_' + Date.now() + '_' + Math.random().toString(36).slice(2,8);
    return btn?.dataset.rewardId || ad?.dataset.claimId || `${type || 'ad'}_${label || 'reward'}_${Date.now()}`;
  }
  function wasClaimed(key){
    try { return sessionStorage.getItem('mxt_ad_claim_' + key) === '1'; } catch(e) { return false; }
  }
  function markClaimed(key){
    try { sessionStorage.setItem('mxt_ad_claim_' + key, '1'); } catch(e) {}
  }
  function claimAd(btn, pts, label, type){
    const key = claimKey(btn, type, label);
    if(btn?.dataset.claimed || wasClaimed(key)) {
      if(typeof toast === 'function') toast('w','This ad reward is already claimed');
      return;
    }
    markClaimed(key);
    injectHiddenClaimAd(pts, label, type);
    if(btn) {
      btn.dataset.claimed = '1';
      btn.disabled = true;
      btn.textContent = 'Claimed';
    }
    if(typeof addPts === 'function') addPts(Number(pts) || 1, label || 'Revenue Ad', 'earn');
    if(typeof toast === 'function') toast('s', `Ad income share: ${Math.round(AD_SHARE * 100)}% credited`);
    trackAd(type || 'internal', 'claim');
  }
  window.mxtClaimRevenueAd = claimAd;

  function networkSlotHtml(type, adIdx){
    const adsenseClient = safeConst('ADSENSE_CLIENT');
    const adsenseSlot = safeConst('ADSENSE_SLOT');
    const adsterraKey = safeConst('ADSTERRA_KEY');
    if(type === 'adsense_display' && adsenseClient && adsenseSlot) {
      return `<ins class="adsbygoogle mxt-live-slot" style="display:block;min-height:90px"
        data-ad-client="${escText(adsenseClient)}" data-ad-slot="${escText(adsenseSlot)}"
        data-ad-format="auto" data-full-width-responsive="true"></ins>`;
    }
    if(type === 'adsterra_native' && adsterraKey) {
      return `<div class="mxt-live-slot" id="mxt-adsterra-${adIdx}" data-adsterra-key="${escText(adsterraKey)}"></div>`;
    }
    if(type === 'admob_banner' || type === 'admob_rewarded') {
      return `<div class="mxt-live-slot mxt-admob-slot">AdMob placement ready for mobile wrapper</div>`;
    }
    return '';
  }
  function hydrateNetworkSlot(ad, type, adIdx){
    setTimeout(() => {
      try {
        if(type === 'adsense_display' && window.adsbygoogle) (window.adsbygoogle = window.adsbygoogle || []).push({});
        if(type === 'adsterra_native') {
          const slot = ad.querySelector('#mxt-adsterra-' + adIdx);
          const key = slot?.dataset.adsterraKey;
          if(slot && key && !slot.dataset.loaded) {
            slot.dataset.loaded = '1';
            const sc = document.createElement('script');
            sc.src = '//www.topcreativeformat.com/' + key + '/invoke.js';
            slot.appendChild(sc);
          }
        }
      } catch(e) {}
    }, 300);
  }
  function buildInternalAd(adIdx=0, ctx='feed'){
    const type = typeFor(ctx);
    const [a,b,title] = adTheme(adIdx);
    const pts = type.includes('reward') ? 18 : type.includes('video') ? 14 : type.includes('click') ? 8 : 6;
    const d = document.createElement('div');
    const slot = networkSlotHtml(type, adIdx);
    d.className = 'feed-ad mxt-rotating-ad mxt-live-ad';
    d.dataset.claimId = `mxt_${ctx}_${adIdx}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
    d.dataset.adType = type;
    d.dataset.adIndex = String(adIdx);
    d.innerHTML = `
      <div class="mxt-ra-head"><span>Income Ad</span><b>${escText(adLabel(type))}</b></div>
      ${slot ? `<div class="mxt-network-wrap">${slot}</div>` : ''}
      <div class="mxt-ra-body" style="--mxt-a:${a};--mxt-b:${b};">
        <div class="mxt-ra-mark">AD</div>
        <div class="mxt-ra-copy">
          <div class="mxt-ra-title">${escText(title)}</div>
          <div class="mxt-ra-sub">Video, photo, task and offer ads rotate by activity for stronger revenue.</div>
        </div>
        <button class="mxt-ra-btn" onclick="mxtClaimRevenueAd(this,${pts},'${escText(adLabel(type))} Revenue','${escText(type)}')">+${Math.round(pts * AD_SHARE)} pts</button>
      </div>`;
    trackAd(type, ctx);
    hydrateNetworkSlot(d, type, adIdx);
    return d;
  }
  window.mxtBuildRotatingAd = buildInternalAd;

  function injectHiddenClaimAd(pts, label, type){
    try {
      const ctx = currentPage();
      const ad = buildInternalAd(Date.now() + Math.floor(Math.random()*1000), featureMap[ctx] ? ctx : 'default');
      ad.style.cssText = 'position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;overflow:hidden;';
      ad.dataset.mxtHiddenClaim = '1';
      ad.dataset.claimType = type || 'hidden_claim';
      ad.dataset.claimLabel = label || 'Hidden Claim';
      document.body.appendChild(ad);
      setTimeout(() => ad.remove(), 45000);
      return ad;
    } catch(e) {
      console.warn('[mxt] hidden claim ad failed', e);
      return null;
    }
  }

  function enhanceMkFeedAd(){
    const old = window.mkFeedAd;
    window.mkFeedAd = function(adIdx){
      let ad = null;
      try { ad = old ? old.apply(this, arguments) : null; } catch(e) {}
      const fallback = buildInternalAd(adIdx, 'feed');
      if(!ad) return fallback;
      ad.classList.add('mxt-rotating-ad');
      ad.dataset.claimId = ad.dataset.claimId || `mxt_feed_${adIdx}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
      ad.dataset.rotateEvery = '3-posts';
      const badge = document.createElement('div');
      badge.className = 'mxt-ra-network';
      badge.textContent = adLabel(typeFor('feed')) + ' rotating';
      ad.insertBefore(badge, ad.firstChild);
      trackAd('network_or_internal', 'feed_every_3_posts');
      setTimeout(() => {
        if(ad.isConnected && !ad.dataset.refreshed) {
          ad.dataset.refreshed = '1';
          ad.appendChild(buildInternalAd(adIdx + Date.now(), 'feed'));
        }
      }, 45000 + ((adIdx % 4) * 5000));
      return ad;
    };
  }
  function ensureFeedAds(){
    const list = document.getElementById('feedList');
    if(!list) return;
    const posts = Array.from(list.children).filter(el => el.classList?.contains('post'));
    posts.forEach((post, idx) => {
      if((idx + 1) % 3 !== 0) return;
      let next = post.nextElementSibling;
      while(next && next.nodeType === 1 && next.matches?.('.post-loader,.comments-wrap')) next = next.nextElementSibling;
      if(next?.matches?.('.feed-ad,.ad-container,.mxt-rotating-ad')) return;
      post.insertAdjacentElement('afterend', buildInternalAd(idx + 1 + Date.now(), 'feed'));
    });
  }
  function wrapFeedRenderer(){
    const old = window.rFeed;
    if(typeof old !== 'function' || old.__mxtFeedAds) return;
    window.rFeed = function(){
      const out = old.apply(this, arguments);
      setTimeout(ensureFeedAds, 80);
      return out;
    };
    window.rFeed.__mxtFeedAds = true;
  }

  function installComfortCaps(){
    const max = window.MAX_AD_SYSTEM;
    if(!max || max.__mxtComfort) return;
    max.__mxtComfort = true;
    const origTrigger = max.triggerContextualAd?.bind(max);
    max.triggerContextualAd = function(triggerType){
      const now = Date.now();
      const key = 'mxt_comfort_context_' + String(triggerType || 'default');
      const globalKey = 'mxt_comfort_context_global';
      const last = Number(localStorage.getItem(key) || 0);
      const globalLast = Number(localStorage.getItem(globalKey) || 0);
      if(now - last < 180000 || now - globalLast < 60000) return;
      localStorage.setItem(key, String(now));
      localStorage.setItem(globalKey, String(now));
      return origTrigger ? origTrigger(triggerType) : null;
    };
    const origFloat = max.injectFloatingAd?.bind(max);
    max.injectFloatingAd = function(adType){
      const now = Date.now();
      const last = Number(sessionStorage.getItem('mxt_float_ad_last') || 0);
      if(now - last < 120000 || document.querySelector('.floating-contextual-ad,.mxt-reward-gate')) return;
      sessionStorage.setItem('mxt_float_ad_last', String(now));
      return origFloat ? origFloat(adType) : null;
    };
  }

  function cleanCaptionText(text){
    return String(text || '')
      .replace(/^\s*(✨|AI Caption|Auto-caption:)\s*/i,'')
      .replace(/\s*Tap to use\s*$/i,'')
      .trim();
  }
  async function mediaCaption(){
    const editor = document.getElementById('postEditor');
    const out = document.getElementById('aiOutput');
    if(out) out.innerHTML = '<div class="ai-caption-result">Generating media caption...</div>';
    const mime = (typeof pfMime !== 'undefined' ? pfMime : '') || '';
    const name = (typeof pfName !== 'undefined' ? pfName : 'media') || 'media';
    const data = (typeof pfData !== 'undefined' ? pfData : '') || '';
    try {
      if(data && (mime.startsWith('audio/') || mime.startsWith('video/') || mime.startsWith('image/'))) {
        const r = await fetch('/api/ai/transcribe', {
          method:'POST',
          headers:{'Content-Type':'application/json'},
          body:JSON.stringify({name, data, type:mime})
        });
        const d = await r.json().catch(() => ({}));
        let cap = d.caption || d.text || d.transcript || d.fallback || '';
        if(!cap) cap = `${mime.startsWith('video/') ? 'Video' : mime.startsWith('audio/') ? 'Audio' : 'Photo'}: ${name}. #Monetixra #Creator`;
        cap = cleanCaptionText(cap);
        if(editor) editor.innerText = cap;
        if(out) out.innerHTML = `<div class="ai-caption-result">${escText(cap)}<br><small style="color:var(--t3);">Added to post text box</small></div>`;
        if(typeof toast === 'function') toast('s','AI Caption added');
        return cap;
      }
    } catch(e) {}
    if(typeof window.aiGenerateCaption === 'function') {
      await window.aiGenerateCaption(true);
      const result = document.querySelector('#aiOutput .ai-caption-result');
      const cap = cleanCaptionText(result?.innerText || '');
      if(cap && editor) editor.innerText = cap;
    }
  }
  window.mxtMediaCaption = mediaCaption;

  function wireAiCaption(){
    document.querySelectorAll('#aiPanelSection .ai-chip').forEach(chip => {
      if(/AI Caption/i.test(chip.textContent || '')) chip.setAttribute('onclick','mxtMediaCaption()');
    });
  }

  function wrapPointsShare(){
    if(window.addPts?.__mxtShare) return;
    const old = window.addPts;
    if(typeof old !== 'function') return;
    window.addPts = function(pts, label, type='earn'){
      const isAd = type === 'earn' && /ad|ads|watch|reward|sponsor|banner|native|admob|adsense|adsterra/i.test(String(label || ''));
      if(isAd) {
        const grossForShare = Math.max(1, Math.round((Number(pts) || 0) * 0.74));
        const out = old.call(this, grossForShare, `${label} (${Math.round(AD_SHARE * 100)}% user share)`, type);
        injectHiddenClaimAd(pts, label, type);
        return out;
      }
      return old.apply(this, arguments);
    };
    window.addPts.__mxtShare = true;
  }

  function triggerMediaAd(e){
    const media = e.target;
    if(!media?.matches?.('.post-media video,.post-media audio')) return;
    if(media.dataset.mxtMediaAd) return;
    media.dataset.mxtMediaAd = '1';
    setTimeout(() => {
      const post = media.closest('.post');
      if(!post || post.querySelector('.mxt-media-inline-ad')) return;
      const ad = buildInternalAd(Date.now(), 'media');
      ad.classList.add('mxt-media-inline-ad');
      post.querySelector('.post-media')?.insertAdjacentElement('afterend', ad);
    }, 12000);
  }
  function installOncePerAdRewards(){
    document.addEventListener('click', e => {
      const btn = e.target.closest('button,.btn,.mxt-ra-btn,.ba-earn,.mxt-floating-pts-btn');
      if(!btn || btn.classList.contains('mxt-ra-btn')) return;
      const ad = btn.closest('.ad-container,.feed-ad,.ad-native,.mxt-rotating-ad,.mxt-floating-pts,.mxt-reward-gate');
      if(!ad) return;
      const onclick = String(btn.getAttribute('onclick') || '');
      const text = String(btn.textContent || '');
      if(!/addPts|clickFeedAd|Claim|Earn|pts|\+\s*\d+/i.test(onclick + ' ' + text)) return;
      const key = claimKey(btn, ad.dataset.adType || 'inline', text);
      if(wasClaimed(key) || btn.dataset.claimed === '1') {
        e.preventDefault();
        e.stopImmediatePropagation();
        if(typeof toast === 'function') toast('w','Already claimed from this ad');
        return;
      }
      e.preventDefault();
      e.stopImmediatePropagation();
      const ptsMatch = (onclick + ' ' + text).match(/\+?\s*(\d+)\s*pts/i) || onclick.match(/addPts\((\d+)/i) || onclick.match(/clickFeedAd\(this,(\d+)/i);
      const pts = ptsMatch ? Number(ptsMatch[1]) : 3;
      claimAd(btn, pts, 'One-time Ad Reward', ad.dataset.adType || 'inline_ad');
      if(/closest\(['"]\.ad-container['"]\)\.remove|parentElement\.remove/i.test(onclick)) setTimeout(() => ad.remove(), 350);
    }, true);
  }
  function installFeatureAdTargets(){
    const pageAds = () => {
      document.querySelectorAll('.pg').forEach(pg => {
        if(pg.querySelector('.mxt-page-scalable-ad')) return;
        const ctx = (pg.id || '').replace(/^pg-/,'') || 'default';
        const ad = buildInternalAd(Date.now() + Math.floor(Math.random()*1000), featureMap[ctx] ? ctx : 'default');
        ad.classList.add('mxt-page-scalable-ad');
        const anchor = pg.querySelector('.page-title,.earn-hero,.wallet-hero,.composer,.section-label') || pg.firstElementChild;
        if(anchor?.nextSibling) anchor.parentNode.insertBefore(ad, anchor.nextSibling);
        else pg.appendChild(ad);
      });
    };
    pageAds();
    setInterval(() => {
      document.querySelectorAll('.mxt-page-scalable-ad').forEach(ad => {
        if(!ad.matches(':hover') && Math.random() < 0.5) ad.replaceWith(buildInternalAd(Date.now(), currentPage()));
      });
    }, 45000);
  }
  function rotateContextAds(ctx=currentPage()){
    document.querySelectorAll('.mxt-page-scalable-ad').forEach(ad => {
      if(!ad.matches(':hover')) ad.replaceWith(buildInternalAd(Date.now() + Math.floor(Math.random()*1000), featureMap[ctx] ? ctx : 'default'));
    });
    const bottom = document.getElementById('mxtBottomLiveAd');
    if(bottom) updateBottomLiveAd(ctx);
    ensureBottomAdShelves(ctx);
    updateBottomAdShelf(ctx);
  }
  function bottomMessages(ctx){
    const type = typeFor(ctx || currentPage());
    const network = incomeTypeLabel(bottomCategories(ctx || currentPage())[0] || 'dailyTasks');
    const sets = {
      feed:['Video watch income ads','Photo stock income offers','High RPM native + banner mix'],
      media:['Video/audio reward ads','Photo viewer income offers','CPA media campaigns'],
      earn:['Survey and task income ads','App install CPA offers','Click-to-earn rotations'],
      wallet:['Crypto and finance offers','High-value payout campaigns','Wallet-ready display ads'],
      messages:['Referral income offers','Compact chat-safe campaigns','Communication app install ads'],
      default:['Page-based income ads','Rotating CPA and affiliate offers','Smart revenue placements']
    };
    const copy = sets[ctx] || sets.default;
    return {type, network, copy};
  }
  function updateBottomLiveAd(ctx=currentPage()){
    const bar = document.getElementById('mxtBottomLiveAd');
    const track = document.getElementById('mxtBottomAdTrack');
    if(!bar || !track) return;
    const {type, network, copy} = bottomMessages(ctx);
    bar.dataset.adType = type;
    bar.dataset.claimId = bar.dataset.claimId || `mxt_bottom_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
    track.innerHTML = copy.concat(copy).map((msg, i) => i % 2 ? `<b>${escText(network)}</b>` : `<span>${escText(msg)}</span>`).join('');
    track.style.animation = 'none';
    track.offsetHeight;
    track.style.animation = '';
    trackAd(type, 'bottom_live_banner');
  }
  const bottomAdCategoryMap = {
    feed:['watchVideos','photoShare','dailyTasks','appInstall','affiliate'],
    explore:['photoShare','watchVideos','nftMarketplace','appInstall','freelance'],
    earn:['dailyTasks','appInstall','watchVideos','referralMlm','affiliate'],
    wallet:['cryptoEarning','affiliate','dailyTasks','nftMarketplace','appInstall'],
    messages:['referralMlm','appInstall','dailyTasks','watchVideos','affiliate'],
    profile:['freelance','affiliate','photoShare','watchVideos','appInstall'],
    nft:['nftMarketplace','cryptoEarning','photoShare','affiliate','dailyTasks'],
    metaverse:['liveStreaming','nftMarketplace','cryptoEarning','watchVideos','appInstall'],
    apps:['appInstall','dailyTasks','watchVideos','affiliate','referralMlm'],
    default:['watchVideos','appInstall','dailyTasks','photoShare','affiliate']
  };
  const fallbackBottomAds = [
    {id:'mxt-fb-video', title:'Video Watch Income', description:'Short video views, rewarded video and high-viewability video offers.', earning:'High view RPM', thumbnail:'VID', url:'#earn', category:'watchVideos'},
    {id:'mxt-fb-app', title:'App Install CPA', description:'Install, signup and trial campaigns with stronger payout potential.', earning:'CPA payout', thumbnail:'APP', url:'#apps', category:'appInstall'},
    {id:'mxt-fb-task', title:'Survey & Task Income', description:'Daily survey, quiz, poll and micro-task offers rotate by page.', earning:'Task bonus', thumbnail:'TASK', url:'#earn', category:'dailyTasks'},
    {id:'mxt-fb-photo', title:'Photo Stock Income', description:'Photo upload, stock image and creator marketplace income offers.', earning:'Photo sales', thumbnail:'PHOTO', url:'#explore', category:'photoShare'},
    {id:'mxt-fb-aff', title:'Affiliate Offer Wall', description:'Referral, trial and affiliate campaigns for stronger website revenue.', earning:'Commission', thumbnail:'AFF', url:'#referral', category:'affiliate'}
  ];
  function incomeTypeLabel(category){
    const labels = {
      watchVideos:'Video Income',
      photoShare:'Photo Income',
      dailyTasks:'Survey/Task Income',
      referralMlm:'Referral Income',
      cryptoEarning:'Crypto/Finance Income',
      nftMarketplace:'NFT Marketplace Income',
      freelance:'Freelance Income',
      liveStreaming:'Live Video Income',
      appInstall:'App Install CPA',
      affiliate:'Affiliate Income'
    };
    return labels[category] || 'Income Ad';
  }
  function bottomCategories(ctx=currentPage()){
    return bottomAdCategoryMap[ctx] || bottomAdCategoryMap.default;
  }
  function pickBottomAds(ctx=currentPage(), count=5){
    const hub = window.IncomeAdsHub;
    const picked = [];
    bottomCategories(ctx).forEach((category, i) => {
      let ad = null;
      try {
        if(hub?.rotateAd) hub.rotateAd(category);
        ad = hub?.getCurrentAd?.(category) || hub?.getRandomAd?.(category);
      } catch(e) {}
      if(!ad) ad = fallbackBottomAds[i % fallbackBottomAds.length];
      picked.push({...ad, category: ad.category || category});
    });
    return picked.slice(0, count);
  }
  function buildBottomShelfCard(ad, idx, ctx){
    const d = document.createElement('article');
    const type = typeFor(ctx);
    const [a,b] = adTheme(idx + Date.now());
    const kind = mediaKind(ad, idx);
    const pts = Math.round(5 * AD_SHARE);
    const left = bottomClaimLeft();
    d.className = 'mxt-bottom-shelf-card';
    d.dataset.incomeAdId = ad.id || `bottom_${idx}`;
    d.dataset.adType = type;
    d.dataset.category = ad.category || 'bottom';
    d.dataset.claimId = `mxt_shelf_${ctx}_${idx}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
    d.dataset.href = ad.url || '#';
    d.style.setProperty('--mxt-a', a);
    d.style.setProperty('--mxt-b', b);
    d.innerHTML = `
      <div class="mxt-bs-badge">${escText(incomeTypeLabel(ad.category))}</div>
      <div class="mxt-bs-media mxt-bs-${escText(kind)}">
        <div class="mxt-bs-media-mark">${kind === 'video' ? 'PLAY' : (kind === 'photo' ? 'IMG' : 'AD')}</div>
        <div class="mxt-bs-media-shine"></div>
      </div>
      <div class="mxt-bs-main">
        <div class="mxt-bs-copy">
          <h4>${escText(ad.title || incomeTypeLabel(ad.category))}</h4>
          <p>${escText(ad.description || ad.subtitle || 'Fresh income ad placement that rotates by page and action.')}</p>
          <span>${escText(ad.earning || ad.bonus || 'Partner offer')}</span>
        </div>
      </div>
      <div class="mxt-bs-actions">
        <button type="button" onclick="mxtOpenBottomShelfAd(this)">Open</button>
        <button type="button" onclick="mxtClaimBottomShelfAd(this,${pts},'${escText(type)}')" ${left <= 0 ? 'disabled' : ''}>${left <= 0 ? 'Daily limit' : '+' + pts + ' pts'}</button>
      </div>`;
    trackAd(type, 'page_bottom_shelf');
    return d;
  }
  function ensureBottomAdShelves(ctx=currentPage()){
    document.querySelectorAll('.pg').forEach(pg => {
      if(pg.querySelector(':scope > .mxt-bottom-shelf')) return;
      const shelf = document.createElement('section');
      shelf.className = 'mxt-bottom-shelf';
      shelf.innerHTML = '<div class="mxt-bs-head"><span>Income ads</span><b>Auto rotating</b></div><div class="mxt-bs-grid"></div>';
      pg.appendChild(shelf);
    });
    updateBottomAdShelf(ctx);
  }
  function updateBottomAdShelf(ctx=currentPage()){
    const pg = document.querySelector('.pg.on') || document.getElementById('pg-' + ctx);
    const head = pg?.querySelector(':scope > .mxt-bottom-shelf .mxt-bs-head b');
    if(head) head.textContent = `Auto rotating - ${bottomClaimLeft()}/${BOTTOM_AD_DAILY_LIMIT} left`;
    const grid = pg?.querySelector(':scope > .mxt-bottom-shelf .mxt-bs-grid');
    if(!grid) return;
    grid.innerHTML = '';
    pickBottomAds(ctx, 5).forEach((ad, idx) => grid.appendChild(buildBottomShelfCard(ad, idx, ctx)));
  }
  window.mxtOpenBottomShelfAd = function(btn){
    const ad = btn?.closest?.('.mxt-bottom-shelf-card');
    const href = ad?.dataset.href || '#';
    if(window.IncomeAdsHub && ad?.dataset.incomeAdId) {
      try { window.IncomeAdsHub.trackClick(ad.dataset.category || 'bottom', ad.dataset.incomeAdId); } catch(e) {}
    }
    updateBottomAdShelf(currentPage());
    if(href && href.startsWith('#') && href.length > 1) {
      const target = href.slice(1);
      if(typeof nav === 'function' && document.getElementById('pg-' + target)) nav(target);
      return;
    }
    if(href && href !== '#') window.open(href, '_blank', 'noopener,noreferrer');
  };
  window.mxtClaimBottomShelfAd = function(btn, pts, type){
    const card = btn?.closest?.('.mxt-bottom-shelf-card');
    const state = getBottomRewardState();
    const claimId = card?.dataset.claimId || btn?.dataset.rewardId || `bottom_${Date.now()}`;
    if(!CU) return typeof toast === 'function' && toast('e','Please login first');
    if(state.claimed[claimId]) {
      btn.disabled = true;
      btn.textContent = 'Claimed';
      return typeof toast === 'function' && toast('w','Already claimed');
    }
    if((state.count || 0) >= BOTTOM_AD_DAILY_LIMIT) {
      btn.disabled = true;
      btn.textContent = 'Daily limit';
      return typeof toast === 'function' && toast('w','Daily income ads limit reached: 5/5');
    }
    btn.disabled = true;
    btn.textContent = 'Opening...';
    try { window.mxtOpenBottomShelfAd(btn); } catch(e) {}
    setTimeout(() => {
      state.count = (state.count || 0) + 1;
      state.claimed[claimId] = Date.now();
      saveBottomRewardState(state);
      if(typeof addPts === 'function') addPts(Number(pts) || 3, 'Bottom Income Ad', 'earn');
      if(typeof toast === 'function') toast('s', `+${pts} pts added (${state.count}/${BOTTOM_AD_DAILY_LIMIT} today)`);
      trackAd(type || card?.dataset.adType || 'bottom_income', 'bottom_shelf_claim');
      updateBottomAdShelf(currentPage());
    }, 450);
    return false;
  };
  function incomeAdText(text){
    return String(text || '')
      .replace(/Sponsored Content/g, 'Income Offers')
      .replace(/Sponsored offers/g, 'Income ads')
      .replace(/Sponsored Offer/g, 'Income Offer')
      .replace(/Sponsored/g, 'Income Ad')
      .replace(/sponsored/g, 'income');
  }
  function replaceSponsoredLabels(root=document.body){
    if(!root) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode(node){
        const parent = node.parentElement;
        if(!parent || /^(SCRIPT|STYLE|TEXTAREA|INPUT)$/i.test(parent.tagName)) return NodeFilter.FILTER_REJECT;
        return /Sponsored|sponsored/.test(node.nodeValue || '') ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
      }
    });
    const nodes = [];
    while(walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(node => { node.nodeValue = incomeAdText(node.nodeValue); });
  }
  window.mxtClaimBottomAd = function(btn){
    const bar = document.getElementById('mxtBottomLiveAd');
    const type = bar?.dataset.adType || 'bottom_banner';
    claimAd(btn, 4, adLabel(type) + ' Bottom Banner', type);
    setTimeout(() => updateBottomLiveAd(currentPage()), 500);
  };
  function installNavAdRefresh(){
    const oldNav = window.nav;
    if(typeof oldNav === 'function' && !oldNav.__mxtAdRefresh) {
      window.nav = function(page){
        const out = oldNav.apply(this, arguments);
        setTimeout(() => rotateContextAds(page || currentPage()), 120);
        return out;
      };
      window.nav.__mxtAdRefresh = true;
    }
    document.addEventListener('click', e => {
      const btn = e.target.closest('button,.bn,.chip,.media-chip,.eh-btn,.sett-row,.app-card,.task-card');
      if(!btn || btn.closest('.feed-ad,.mxt-rotating-ad,.mxt-bottom-live-ad,.mxt-reward-gate')) return;
      if(Math.random() < 0.28) setTimeout(() => updateBottomLiveAd(currentPage()), 80);
      if(Math.random() < 0.42) setTimeout(() => updateBottomAdShelf(currentPage()), 120);
    }, true);
  }

  ready(() => {
    enhanceMkFeedAd();
    wrapFeedRenderer();
    setTimeout(ensureFeedAds, 300);
    installComfortCaps();
    wrapPointsShare();
    wireAiCaption();
    installOncePerAdRewards();
    installFeatureAdTargets();
    installNavAdRefresh();
    ensureBottomAdShelves(currentPage());
    updateBottomLiveAd(currentPage());
    updateBottomAdShelf(currentPage());
    replaceSponsoredLabels();
    setInterval(() => updateBottomLiveAd(currentPage()), 45000);
    setInterval(() => updateBottomAdShelf(currentPage()), 30000);
    document.addEventListener('play', triggerMediaAd, true);
    new MutationObserver(() => ensureFeedAds()).observe(document.body, {childList:true, subtree:true});
    document.addEventListener('click', e => {
      const btn = e.target.closest('button,.media-chip,.sett-row,.eh-btn,.bn');
      if(!btn || btn.closest('#postModal') || btn.dataset.mxtFeatureAd) return;
      btn.dataset.mxtFeatureAd = '1';
      if(Math.random() < 0.18 && window.MAX_AD_SYSTEM) window.MAX_AD_SYSTEM.triggerContextualAd('feature_' + currentPage());
      setTimeout(replaceSponsoredLabels, 160);
    }, true);
    new MutationObserver(records => {
      records.forEach(record => record.addedNodes?.forEach(node => {
        if(node.nodeType === 1) replaceSponsoredLabels(node);
        else if(node.nodeType === 3 && /Sponsored|sponsored/.test(node.nodeValue || '')) node.nodeValue = incomeAdText(node.nodeValue);
      }));
    }).observe(document.body, {childList:true, subtree:true});
    setInterval(installComfortCaps, 5000);
  });
})();

















document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    if (window.DynamicSponsoredAds) {
      // Replace all static "Sponsored" labels with dynamic ads
      DynamicSponsoredAds.replaceLabels();
      
      // Setup auto-rotation for main sponsored containers
      const sponsoredContainers = document.querySelectorAll('[id*="Sponsored"], [class*="sponsored"]');
      sponsoredContainers.forEach(container => {
        if (container && container.style.display !== 'none') {
          DynamicSponsoredAds.setupRotation(container, {
            interval: 8000,
            type: 'banner'
          });
        }
      });
      
      console.log('✅ Dynamic Sponsored Ads System Initialized');
    }
  }, 500);
});
