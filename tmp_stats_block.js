// Function to initialize user tracking fields for accurate statistics
function initializeUserTracking() {
  if(!D.users) return;
  D.analytics = D.analytics || {};
  D.analytics.loginEvents = D.analytics.loginEvents || [];
  D.analytics.usageEvents = D.analytics.usageEvents || [];
  D.analytics.activeSessions = D.analytics.activeSessions || {};
  
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
  const analytics = D.analytics || {};
  const loginEvents = Array.isArray(analytics.loginEvents) ? analytics.loginEvents : [];
  const usageEvents = Array.isArray(analytics.usageEvents) ? analytics.usageEvents : [];
  const activeSessionEntries = Object.values(analytics.activeSessions || {});
  const now = Date.now();
  const today = new Date(now).toDateString();
  const todayStart = new Date(now).setHours(0,0,0,0);
  const fiveMinutesAgo = now - 300000;
  const thirtyMinutesAgo = now - 1800000;

  const activeSessionUsers = new Set(activeSessionEntries.filter(s => getLiveTimestamp(s.at) > fiveMinutesAgo).map(s => s.userId).filter(Boolean));
  const onlineNow = users.filter(u => {
    const lastSeen = getLiveTimestamp(u.lastActive || u.lastAction || u.lastLogin || u.lastSeen);
    return u.isOnline || u.isLoggedIn || activeSessionUsers.has(u.id) || lastSeen > fiveMinutesAgo;
  }).length;
  const activeToday = users.filter(u => {
    const lastAction = getLiveTimestamp(u.lastAction || u.lastActive || u.lastLogin || u.lastSeen);
    const dailyLastSeen = getLiveTimestamp(u.dailyUsage?.[today]?.lastSeen || u.dailyUsage?.[today]?.lastAction);
    const lastLogin = getLiveTimestamp(u.lastLogin || u.lastLoginAt);
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
  const loggedInUsers = users.filter(u => {
    const lastSeen = getLiveTimestamp(u.lastActive || u.lastAction || u.lastLogin || u.lastSeen);
    return u.isLoggedIn || u.isOnline || activeSessionUsers.has(u.id) || lastSeen > thirtyMinutesAgo;
  }).length;
  const activeSessions = activeSessionEntries.filter(s => getLiveTimestamp(s.at) > fiveMinutesAgo).length;
  const usedAppToday = new Set([
    ...usageEvents.filter(e => getLiveTimestamp(e.at) >= todayStart).map(e => e.userId),
    ...users.filter(u => {
      const lastAction = getLiveTimestamp(u.lastAction || u.lastActive || u.lastLogin || u.lastSeen);
      const dailyLastSeen = getLiveTimestamp(u.dailyUsage?.[today]?.lastSeen || u.dailyUsage?.[today]?.lastAction);
      return Math.max(lastAction, dailyLastSeen) >= todayStart;
    }).map(u => u.id)
  ].filter(Boolean)).size;
  const todayLogin = new Set([
    ...loginEvents.filter(e => getLiveTimestamp(e.at) >= todayStart).map(e => e.userId),
    ...users.filter(u => getLiveTimestamp(u.lastLogin || u.lastLoginAt) >= todayStart).map(u => u.id)
  ].filter(Boolean)).size;

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

