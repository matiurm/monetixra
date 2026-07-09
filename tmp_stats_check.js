function trackUserActivity(actionType = 'general') {
  if(!CU || !D.users[CU.id]) return;
  
  let now = Date.now();
  let today = new Date().toDateString();
  let user = D.users[CU.id];
  
  // Update last active timestamp
  user.lastActive = now;
  user.lastAction = now;
  user.lastSeen = now;
  user.isOnline = true;
  user.isLoggedIn = true;
  
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
    user.lastLoginDate = today;
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
    if(!user.lastSeen) user.lastSeen = 0;
    if(!user.lastLoginDate) user.lastLoginDate = '';
  });
  
  saveData();
}

function getLiveTimestamp(value) {
  if(value === null || value === undefined || value === '') return 0;
  if(typeof value === 'number' && Number.isFinite(value)) return value;
  if(typeof value === 'string') {
    const trimmed = value.trim();
    if(/^\d+$/.test(trimmed)) return Number(trimmed);
    const parsed = Date.parse(trimmed);
    return Number.isNaN(parsed) ? 0 : parsed;
  }
  return 0;
}

function buildAdminStatsSnapshot() {
  if(!D?.users) return {
    totalUsers: 0,
    onlineNow: 0,
    activeToday: 0,
    kycVerified: 0,
    totalPosts: 0,
    totalWithdrawals: 0,
    disabledUsers: 0,
    revenuePts: 0,
    loggedInUsers: 0,
    activeSessions: 0,
    usedAppToday: 0,
    todayLogin: 0
  };

  const users = Object.values(D.users);
  const posts = D.posts || [];
  const withdrawals = D.withdrawals || [];
  const txs = D.txs || [];
  const now = Date.now();
  const today = new Date().toDateString();
  const todayStart = new Date().setHours(0,0,0,0);
  const fiveMinutesAgo = now - 300000;
  const thirtyMinutesAgo = now - 1800000;

  const totalUsers = users.length;
  const onlineNow = users.filter(u => u.isOnline || getLiveTimestamp(u.lastActive || u.lastAction || u.lastLogin) > fiveMinutesAgo).length;
  const activeToday = users.filter(u => {
    const lastAction = getLiveTimestamp(u.lastAction || u.lastActive || u.lastLogin);
    const lastLogin = getLiveTimestamp(u.lastLogin);
    const dailyLastSeen = getLiveTimestamp(u.dailyUsage?.[today]?.lastSeen);
    return Math.max(lastAction, lastLogin, dailyLastSeen) >= todayStart;
  }).length;
  const kycVerified = users.filter(u => u.kycVerified).length;
  const totalPosts = posts.length;
  const totalWithdrawals = withdrawals.length;
  const disabledUsers = users.filter(u => u.disabled).length;
  const revenuePts = txs.reduce((sum, tx) => {
    const pts = Number(tx?.pts || 0);
    return pts > 0 ? sum + pts : sum;
  }, 0) + Number(D.users[ADMIN_ID]?.adminRevenue || 0);
  const loggedInUsers = users.filter(u => u.isLoggedIn || u.isOnline || getLiveTimestamp(u.lastActive || u.lastAction || u.lastLogin) > thirtyMinutesAgo).length;
  const activeSessions = users.filter(u => getLiveTimestamp(u.sessionStart || u.lastLogin) >= todayStart).length;
  const usedAppToday = users.filter(u => {
    const lastAction = getLiveTimestamp(u.lastAction || u.lastActive || u.lastLogin);
    const dailyLastSeen = getLiveTimestamp(u.dailyUsage?.[today]?.lastSeen);
    return Math.max(lastAction, dailyLastSeen) >= todayStart;
  }).length;
  const todayLogin = users.filter(u => getLiveTimestamp(u.lastLogin) >= todayStart).length;

  return {
    totalUsers,
    onlineNow,
    activeToday,
    kycVerified,
    totalPosts,
    totalWithdrawals,
    disabledUsers,
    revenuePts,
    loggedInUsers,
    activeSessions,
    usedAppToday,
    todayLogin
  };
}

// Function to refresh admin statistics in real-time
function refreshAdminStats() {
  if(!D.users) return;
  
  const stats = buildAdminStatsSnapshot();
  const { totalUsers, onlineNow, activeToday, kycVerified, totalPosts, totalWithdrawals, disabledUsers, revenuePts, loggedInUsers, activeSessions, usedAppToday, todayLogin } = stats;
  
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
      <div class="admin-stat" style="grid-column:1 / -1;font-size:10px;color:var(--t3);padding-top:4px;">🧠 Live metrics synced from real login, activity and transaction events.</div>
    `;
  }
  
  // Update stored data
  window.adminStatsData = stats;
}

