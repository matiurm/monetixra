/**
 * Facebook-like Friend Features for Monetixra
 * - Find friends
 * - Friend requests
 * - Active friends
 * - Friend actions: message, audio call, video call
 * - Suggested people and friend hub
 */
(function () {
  'use strict';

  const ready = fn =>
    document.readyState === 'loading'
      ? document.addEventListener('DOMContentLoaded', fn, { once: true })
      : fn();

  const baseChatRoom = () => {
    if (typeof window.openChat === 'function') return window.openChat.bind(window);
    if (typeof window.openChatRoom === 'function') return window.openChatRoom.bind(window);
    return null;
  };
  const baseAudioCall = () => {
    if (typeof window.startCall === 'function') return (userId) => window.startCall(userId, 'audio');
    if (typeof window.startAudioCallBtn === 'function') return window.startAudioCallBtn.bind(window);
    if (typeof window.startAudioCall === 'function') return window.startAudioCall.bind(window);
    return null;
  };
  const baseVideoCall = () => {
    if (typeof window.startCall === 'function') return (userId) => window.startCall(userId, 'video');
    if (typeof window.startVideoCall === 'function') return window.startVideoCall.bind(window);
    return null;
  };

  const css = `
    .friend-hub-card{background:linear-gradient(135deg,rgba(0,255,170,.08),rgba(14,165,233,.06));border:1px solid rgba(0,255,170,.18);border-radius:var(--r3);padding:16px;margin-bottom:14px;box-shadow:0 16px 40px rgba(0,0,0,.12);}
    .friend-hub-top{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:14px;}
    .friend-hub-title{font-weight:900;font-size:18px;color:var(--t1);line-height:1.15;}
    .friend-hub-sub{font-size:12px;color:var(--t3);margin-top:5px;line-height:1.45;}
    .friend-hub-pills{display:flex;gap:8px;flex-wrap:wrap;justify-content:flex-end}
    .friend-hub-pill{display:inline-flex;align-items:center;gap:6px;padding:7px 10px;border-radius:999px;background:rgba(255,255,255,.04);border:1px solid var(--b1);color:var(--t2);font-size:11px;font-weight:800}
    .friend-hub-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px;margin-top:14px}
    .friend-hub-actions button{padding:10px 12px;border-radius:var(--r4);font-size:12px;font-weight:800;cursor:pointer;transition:all .18s;border:none}
    .friend-hub-actions .primary{background:linear-gradient(135deg,var(--c1),var(--c2));color:#fff}
    .friend-hub-actions .secondary{background:var(--g3);color:var(--t1);border:1px solid var(--b1)}
    .friend-hub-actions button:hover{transform:translateY(-1px)}
    .friend-discover-wrap{margin-top:14px}
    .friend-discover-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
    .friend-discover-title{font-weight:850;font-size:13px;color:var(--t1)}
    .friend-discover-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:10px}
    .friend-discover-card{background:var(--g2);border:1px solid var(--b1);border-radius:16px;padding:12px;display:flex;gap:10px;align-items:center;transition:all .18s;box-shadow:0 10px 24px rgba(0,0,0,.08)}
    .friend-discover-card:hover{border-color:rgba(0,255,170,.2);transform:translateY(-1px)}
    .friend-discover-av{width:46px;height:46px;border-radius:50%;overflow:hidden;background:linear-gradient(135deg,var(--c1),var(--neon));display:flex;align-items:center;justify-content:center;font-weight:900;color:#fff;flex-shrink:0;position:relative}
    .friend-discover-av img{width:100%;height:100%;object-fit:cover}
    .friend-discover-meta{flex:1;min-width:0}
    .friend-discover-name{font-weight:800;font-size:13px;color:var(--t1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .friend-discover-sub{font-size:11px;color:var(--t3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .friend-discover-btn{padding:8px 11px;border-radius:12px;background:linear-gradient(135deg,var(--c1),var(--c2));color:#fff;font-size:11px;font-weight:800;border:none;cursor:pointer;flex-shrink:0}
    .friend-discover-btn.pending{background:var(--g3);color:var(--t3);border:1px solid var(--b1)}
    .friend-discover-btn.friends{background:rgba(16,185,129,.14);color:var(--c3);border:1px solid rgba(16,185,129,.22)}
    .friend-online-dot{position:absolute;right:3px;bottom:3px;width:12px;height:12px;border-radius:50%;border:2px solid var(--bg);background:#10b981;box-shadow:0 0 0 3px rgba(16,185,129,.12)}
    .friend-request-card{background:var(--g2);border:1px solid var(--b1);border-radius:var(--r2);padding:14px;margin-bottom:10px;display:flex;align-items:center;gap:12px;animation:slideUp .3s var(--ease)}
    .friend-request-avatar{width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--c1),var(--neon));display:flex;align-items:center;justify-content:center;font-size:22px;font-weight:800;color:#fff;flex-shrink:0;overflow:hidden}
    .friend-request-avatar img{width:100%;height:100%;object-fit:cover}
    .friend-request-info{flex:1;min-width:0}
    .friend-request-name{font-weight:700;font-size:14px;color:var(--t1)}
    .friend-request-mutual{font-size:11px;color:var(--t3);margin-top:2px}
    .friend-request-actions{display:flex;gap:8px;flex-shrink:0}
    .friend-request-btn{padding:8px 16px;border-radius:var(--r4);font-size:12px;font-weight:700;cursor:pointer;transition:all .18s;border:none}
    .friend-request-btn.accept{background:linear-gradient(135deg,var(--c1),var(--c2));color:#fff}
    .friend-request-btn.accept:hover{opacity:.85;transform:scale(1.05)}
    .friend-request-btn.decline{background:var(--g3);color:var(--t2);border:1px solid var(--b1)}
    .friend-request-btn.decline:hover{background:var(--g4)}
    .active-friends-section{background:linear-gradient(135deg,rgba(0,255,170,.08),rgba(0,212,255,.06));border:1px solid rgba(0,255,170,.2);border-radius:var(--r3);padding:16px;margin-bottom:14px}
    .active-friends-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px}
    .active-friends-title{font-weight:800;font-size:14px;color:var(--neon)}
    .active-friends-count{font-size:11px;color:var(--t3);background:rgba(0,255,170,.1);padding:4px 10px;border-radius:99px}
    .active-friends-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(60px,1fr));gap:12px}
    .active-friend-item{display:flex;flex-direction:column;align-items:center;gap:6px;cursor:pointer;transition:transform .18s}
    .active-friend-item:hover{transform:scale(1.05)}
    .active-friend-card{background:var(--g2);border:1px solid var(--b1);border-radius:16px;padding:10px;display:flex;flex-direction:column;gap:8px;min-height:168px;box-shadow:0 10px 24px rgba(0,0,0,.08)}
    .active-friend-card:hover{border-color:rgba(0,255,170,.2)}
    .active-friend-avatar{width:52px;height:52px;border-radius:50%;background:linear-gradient(135deg,var(--c1),var(--neon));display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:800;color:#fff;position:relative;overflow:hidden;margin:0 auto}
    .active-friend-avatar img{width:100%;height:100%;object-fit:cover}
    .active-friend-online{position:absolute;bottom:2px;right:2px;width:14px;height:14px;background:#10b981;border:2px solid var(--bg);border-radius:50%}
    .active-friend-name{font-size:11px;font-weight:700;color:var(--t1);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
    .active-friend-meta{font-size:10px;color:var(--t3);text-align:center;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .active-friend-actions{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:4px;margin-top:auto}
    .active-friend-actions button,.quick-group-actions button,.group-room-actions button{border:none;border-radius:10px;padding:7px 0;font-size:9px;font-weight:800;cursor:pointer;transition:all .18s;line-height:1.15}
    .active-friend-actions button:hover,.quick-group-actions button:hover,.group-room-actions button:hover{transform:translateY(-1px)}
    .af-msg{background:rgba(0,212,255,.15);color:var(--c2);border:1px solid rgba(0,212,255,.25)}
    .af-audio{background:rgba(16,185,129,.15);color:var(--c3);border:1px solid rgba(16,185,129,.25)}
    .af-video{background:rgba(239,68,68,.15);color:var(--c5);border:1px solid rgba(239,68,68,.25)}
    .af-group{background:rgba(109,40,217,.15);color:#c4b5fd;border:1px solid rgba(109,40,217,.25)}
    .af-groupchat{background:rgba(124,58,237,.16);color:#ddd6fe;border:1px solid rgba(124,58,237,.3)}
    .af-groupcall{background:rgba(168,85,247,.16);color:#e9d5ff;border:1px solid rgba(168,85,247,.3)}
    .find-friends-hero{background:linear-gradient(135deg,rgba(109,40,217,.12),rgba(0,255,170,.06));border:1px solid rgba(109,40,217,.2);border-radius:var(--r3);padding:20px;margin-bottom:14px;text-align:center}
    .find-friends-search{position:relative;margin-bottom:12px}
    .find-friends-search input{width:100%;background:var(--g2);border:1px solid var(--b1);border-radius:var(--r4);padding:12px 16px 12px 44px;color:var(--t1);font-size:14px;outline:none;transition:all .18s}
    .find-friends-search input:focus{border-color:var(--neon);box-shadow:0 0 0 3px rgba(0,255,170,.08)}
    .find-friends-search-icon{position:absolute;left:14px;top:50%;transform:translateY(-50%);font-size:16px;color:var(--t3)}
    .find-friends-suggestions{margin-top:14px}
    .find-friends-suggestion{background:var(--g2);border:1px solid var(--b1);border-radius:var(--r2);padding:12px;margin-bottom:8px;display:flex;align-items:center;gap:12px;transition:all .18s}
    .find-friends-suggestion:hover{background:var(--g3);border-color:var(--b2)}
    .find-friends-suggestion-avatar{width:48px;height:48px;border-radius:50%;background:linear-gradient(135deg,var(--c1),var(--neon));display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:800;color:#fff;flex-shrink:0;overflow:hidden;position:relative}
    .find-friends-suggestion-avatar img{width:100%;height:100%;object-fit:cover}
    .find-friends-suggestion-info{flex:1;min-width:0}
    .find-friends-suggestion-name{font-weight:700;font-size:13px;color:var(--t1)}
    .find-friends-suggestion-details{font-size:11px;color:var(--t3);margin-top:2px}
    .find-friends-suggestion-btn{background:linear-gradient(135deg,var(--c1),var(--c2));border:none;border-radius:var(--r4);padding:8px 14px;font-size:11px;font-weight:700;color:#fff;cursor:pointer;transition:all .18s;flex-shrink:0}
    .find-friends-suggestion-btn:hover{opacity:.85;transform:scale(1.05)}
    .find-friends-suggestion-btn.pending{background:var(--g3);color:var(--t3);border:1px solid var(--b1)}
    .friend-action-buttons{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}
    .friend-action-btn{padding:8px 12px;border-radius:var(--r4);font-size:11px;font-weight:700;cursor:pointer;transition:all .18s;border:none;display:flex;align-items:center;gap:4px}
    .friend-action-btn.message{background:rgba(0,212,255,.15);color:var(--c2);border:1px solid rgba(0,212,255,.3)}
    .friend-action-btn.message:hover{background:rgba(0,212,255,.25)}
    .friend-action-btn.call{background:rgba(16,185,129,.15);color:var(--c3);border:1px solid rgba(16,185,129,.3)}
    .friend-action-btn.call:hover{background:rgba(16,185,129,.25)}
    .friend-action-btn.video{background:rgba(239,68,68,.15);color:var(--c5);border:1px solid rgba(239,68,68,.3)}
    .friend-action-btn.video:hover{background:rgba(239,68,68,.25)}
    .friend-action-btn.groupchat{background:rgba(124,58,237,.16);color:#ddd6fe;border:1px solid rgba(124,58,237,.3)}
    .friend-action-btn.groupchat:hover{background:rgba(124,58,237,.24)}
    .friend-action-btn.groupcall{background:rgba(168,85,247,.16);color:#e9d5ff;border:1px solid rgba(168,85,247,.3)}
    .friend-action-btn.groupcall:hover{background:rgba(168,85,247,.24)}
    .quick-group-panel{margin:12px 0 14px;padding:14px;border:1px solid rgba(109,40,217,.22);border-radius:18px;background:linear-gradient(135deg,rgba(109,40,217,.12),rgba(0,212,255,.06));}
    .quick-group-head{display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px}
    .quick-group-title{font-weight:900;color:var(--t1);font-size:14px}
    .quick-group-sub{font-size:11px;color:var(--t3);margin-top:3px;line-height:1.4}
    .quick-group-chips{display:flex;flex-wrap:wrap;gap:7px;margin:10px 0}
    .quick-group-chip{display:inline-flex;align-items:center;gap:6px;padding:7px 10px;border-radius:999px;background:var(--g2);border:1px solid var(--b1);color:var(--t2);font-size:11px;font-weight:800;cursor:pointer}
    .quick-group-chip.on{background:linear-gradient(135deg,var(--c1),var(--c2));border-color:transparent;color:#fff}
    .quick-group-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    .quick-group-actions button{padding:10px 12px;border-radius:14px}
    .group-room-overlay{position:fixed;inset:0;z-index:130000;background:rgba(0,0,0,.62);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:16px}
    .group-room-overlay.show{display:flex}
    .group-room-card{width:min(560px,100%);border:1px solid rgba(255,255,255,.18);border-radius:20px;background:linear-gradient(180deg,rgba(9,12,20,.98),rgba(3,3,8,.98));box-shadow:0 24px 80px rgba(0,0,0,.5);padding:16px}
    .group-room-hd{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:12px}
    .group-room-title{font-size:18px;font-weight:900;color:#fff}
    .group-room-sub{font-size:12px;color:rgba(255,255,255,.72);margin-top:4px;line-height:1.45}
    .group-room-list{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;margin:14px 0}
    .group-room-member{display:flex;align-items:center;gap:8px;padding:10px;border:1px solid rgba(255,255,255,.1);border-radius:14px;background:rgba(255,255,255,.04)}
    .group-room-av{width:34px;height:34px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--c1),var(--neon));color:#fff;font-weight:900;overflow:hidden;flex-shrink:0}
    .group-room-av img{width:100%;height:100%;object-fit:cover}
    .group-room-meta{min-width:0;flex:1}
    .group-room-name{font-size:12px;font-weight:800;color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .group-room-tag{font-size:10px;color:rgba(255,255,255,.66);margin-top:2px}
    .group-room-actions{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px}
    .group-room-actions .primary{background:linear-gradient(135deg,var(--c1),var(--c2));color:#fff}
    .group-room-actions .secondary{background:rgba(255,255,255,.08);color:#fff;border:1px solid rgba(255,255,255,.12)}
    .friend-request-badge{position:absolute;top:-4px;right:-4px;background:var(--c5);color:#fff;font-size:10px;font-weight:700;padding:2px 6px;border-radius:99px;min-width:18px;text-align:center;animation:pulse 1.5s infinite}
    @media (max-width:520px){
      .active-friend-actions{grid-template-columns:repeat(2,minmax(0,1fr));}
      .active-friend-card{min-height:auto;}
      .friend-action-buttons{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));}
    }
  `;

  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  function ensureStore() {
    if (!window.D) window.D = { users: {}, friendRequests: [] };
    if (!window.D.users) window.D.users = {};
    if (!window.D.friendRequests) window.D.friendRequests = [];
    if (!window.D.socialHub) window.D.socialHub = {};
    if (!window.D.socialHub.quickGroupIds) window.D.socialHub.quickGroupIds = [];
    if (!window.D.socialHub.groupCallRoom) window.D.socialHub.groupCallRoom = null;
  }

  function me() {
    ensureStore();
    return window.CU ? (window.D.users[window.CU.id] || window.CU) : null;
  }

  function friendIds() {
    const user = me();
    return new Set([...(user?.friends || [])]);
  }

  function isActiveUser(user) {
    if (!user) return false;
    const fiveMinutesAgo = Date.now() - (5 * 60 * 1000);
    return !!(user.isOnline || (user.lastActive && user.lastActive > fiveMinutesAgo));
  }

  function activeFriends() {
    return currentFriends().filter(isActiveUser);
  }

  function currentFriends() {
    const user = me();
    if (!user) return [];
    return (user.friends || []).map(id => window.D.users[id]).filter(Boolean);
  }

  function pendingCount() {
    if (!window.CU) return 0;
    return window.D.friendRequests.filter(r => r.to === window.CU.id && r.status === 'pending').length;
  }

  function mutualFriendsCount(userId) {
    const other = window.D.users[userId];
    const mine = me();
    if (!other || !mine) return 0;
    const mineFriends = new Set(mine.friends || []);
    return (other.friends || []).filter(id => mineFriends.has(id)).length;
  }

  function quickGroupIds() {
    ensureStore();
    const ids = window.D.socialHub.quickGroupIds || [];
    return Array.from(new Set(ids)).filter(Boolean);
  }

  function setQuickGroupIds(ids) {
    ensureStore();
    window.D.socialHub.quickGroupIds = Array.from(new Set((ids || []).filter(Boolean)));
  }

  function quickGroupUsers() {
    return quickGroupIds().map(id => window.D.users[id]).filter(Boolean);
  }

  function syncGroupDraft(users) {
    const picked = (users || []).filter(Boolean);
    try {
      window.grpMems = picked.map(u => ({ id: u.id, name: u.name || 'User' }));
    } catch (e) {}
    if (typeof grpMems !== 'undefined') {
      grpMems = picked.map(u => ({ id: u.id, name: u.name || 'User' }));
    }
    const selected = document.getElementById('grpSelected');
    if (selected) {
      selected.innerHTML = picked.map(u => `
        <div class="mem-chip">${u.name || 'User'}<span class="rm" onclick="this.closest('.mem-chip').remove(); window.removeQuickGroupMember('${u.id}')">✕</span></div>
      `).join('');
    }
  }

  function addFriendRequestBadge() {
    const btn = document.querySelector('[data-p="friends"]');
    if (!btn) return;
    let badge = btn.querySelector('.friend-request-badge');
    if (!badge) {
      badge = document.createElement('span');
      badge.className = 'friend-request-badge';
      badge.id = 'friendRequestBadge';
      badge.style.display = 'none';
      btn.style.position = 'relative';
      btn.appendChild(badge);
    }
    updateFriendRequestBadge();
  }

  function updateFriendRequestBadge() {
    const badge = document.getElementById('friendRequestBadge');
    if (!badge || !window.CU) return;
    const count = pendingCount();
    badge.textContent = String(count);
    badge.style.display = count > 0 ? 'block' : 'none';
  }

  function sendFriendRequest(toUserId) {
    ensureStore();
    if (!window.CU || !toUserId) return;
    const existing = window.D.friendRequests.find(r =>
      (r.from === window.CU.id && r.to === toUserId) ||
      (r.from === toUserId && r.to === window.CU.id)
    );
    if (existing) {
      if (typeof toast === 'function') toast('w', 'Friend request already exists');
      return;
    }

    const request = {
      id: 'fr_' + Date.now(),
      from: window.CU.id,
      to: toUserId,
      status: 'pending',
      createdAt: Date.now()
    };
    window.D.friendRequests.push(request);

    if (typeof addNotif === 'function') {
      addNotif(toUserId, 'friend', '👋', `${window.CU.name || 'Someone'} sent you a friend request`);
    }
    if (typeof saveData === 'function') saveData();
    if (typeof toast === 'function') toast('s', 'Friend request sent');
    updateFriendRequestBadge();
    renderFriendRequests();
    renderFriendDiscover();
    return request;
  }

  function acceptFriendRequest(requestId) {
    ensureStore();
    if (!window.CU) return;
    const request = window.D.friendRequests.find(r => r.id === requestId);
    if (!request || request.to !== window.CU.id) return;

    request.status = 'accepted';
    request.acceptedAt = Date.now();

    const fromUser = window.D.users[request.from];
    const toUser = window.D.users[request.to];
    if (fromUser && toUser) {
      fromUser.friends = fromUser.friends || [];
      toUser.friends = toUser.friends || [];
      if (!fromUser.friends.includes(request.to)) fromUser.friends.push(request.to);
      if (!toUser.friends.includes(request.from)) toUser.friends.push(request.from);
    }

    if (typeof addNotif === 'function') {
      addNotif(request.from, 'friend', '✅', `${window.CU.name || 'Someone'} accepted your friend request`);
    }
    if (typeof saveData === 'function') saveData();
    if (typeof toast === 'function') toast('s', 'Friend request accepted');
    updateFriendRequestBadge();
    renderFriendRequests();
    renderActiveFriends();
    renderFriendDiscover();
    renderFriendHub();
  }

  function declineFriendRequest(requestId) {
    ensureStore();
    if (!window.CU) return;
    const request = window.D.friendRequests.find(r => r.id === requestId);
    if (!request || request.to !== window.CU.id) return;

    request.status = 'declined';
    request.declinedAt = Date.now();
    if (typeof saveData === 'function') saveData();
    if (typeof toast === 'function') toast('i', 'Friend request declined');
    updateFriendRequestBadge();
    renderFriendRequests();
    renderFriendDiscover();
  }

  function renderFriendRequests() {
    const container = document.getElementById('friendRequestsContainer');
    if (!container || !window.CU) return;

    const pending = window.D.friendRequests.filter(r => r.to === window.CU.id && r.status === 'pending');
    if (!pending.length) {
      container.innerHTML = '<div style="text-align:center;padding:20px;color:var(--t3);">No pending friend requests</div>';
      return;
    }

    container.innerHTML = pending.map(request => {
      const fromUser = window.D.users[request.from];
      if (!fromUser) return '';
      const mutual = mutualFriendsCount(request.from);
      return `
        <div class="friend-request-card">
          <div class="friend-request-avatar">
            ${fromUser.avatar ? `<img src="${fromUser.avatar}">` : (fromUser.name?.charAt(0).toUpperCase() || '?')}
          </div>
          <div class="friend-request-info">
            <div class="friend-request-name">${fromUser.name || 'User'}</div>
            <div class="friend-request-mutual">${mutual} mutual friends</div>
          </div>
          <div class="friend-request-actions">
            <button class="friend-request-btn accept" onclick="window.acceptFriendRequest('${request.id}')">Accept</button>
            <button class="friend-request-btn decline" onclick="window.declineFriendRequest('${request.id}')">Decline</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderActiveFriends() {
    const grid = document.getElementById('activeFriendsGrid');
    const count = document.getElementById('activeFriendsCount');
    if (!grid || !count) return;

    const list = activeFriends();
    count.textContent = `${list.length} online`;

    if (!list.length) {
      grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:20px;color:var(--t3);">No friends online</div>';
      return;
    }

    grid.innerHTML = list.map(friend => {
      const selected = quickGroupIds().includes(friend.id);
      return `
        <div class="active-friend-card${selected ? ' on' : ''}">
          <div class="active-friend-avatar" onclick="window.openFriendChat('${friend.id}')">
            ${friend.avatar ? `<img src="${friend.avatar}">` : (friend.name?.charAt(0).toUpperCase() || '?')}
            <div class="active-friend-online"></div>
          </div>
          <div class="active-friend-name">${(friend.name || 'User').split(' ')[0]}</div>
          <div class="active-friend-meta">${friend.username ? '@' + friend.username : 'Active friend'}</div>
          <div class="active-friend-actions">
            <button class="af-msg" onclick="event.stopPropagation();window.openFriendChat('${friend.id}')">Message</button>
            <button class="af-audio" onclick="event.stopPropagation();window.openFriendAudioCall('${friend.id}')">Audio</button>
            <button class="af-video" onclick="event.stopPropagation();window.openFriendVideoCall('${friend.id}')">Video</button>
            <button class="af-groupchat" onclick="event.stopPropagation();window.openFriendGroupChat('${friend.id}')">Group Chat</button>
            <button class="af-groupcall" onclick="event.stopPropagation();window.openFriendGroupCall('${friend.id}')">Group Call</button>
          </div>
        </div>
      `;
    }).join('');
  }

  function renderQuickGroupPanel() {
    const panel = document.getElementById('quickGroupPanel');
    if (!panel) return;
    const selected = quickGroupUsers();
    const active = activeFriends();
    const activeIds = new Set(active.map(u => u.id));
    const chips = active.map(user => {
      const on = quickGroupIds().includes(user.id);
      return `
        <button type="button" class="quick-group-chip${on ? ' on' : ''}" onclick="window.toggleQuickGroupMember('${user.id}')">
          ${user.avatar ? `<span style="width:16px;height:16px;border-radius:50%;overflow:hidden;display:inline-flex;flex:0 0 auto;"><img src="${user.avatar}" style="width:100%;height:100%;object-fit:cover"></span>` : ''}
          <span>${user.name || 'User'}</span>
        </button>
      `;
    }).join('');

    panel.innerHTML = `
      <div class="quick-group-head">
        <div>
          <div class="quick-group-title">Quick Group</div>
          <div class="quick-group-sub">Select two or more active friends, then open a group chat or group call room.</div>
        </div>
        <div class="friend-hub-pills" style="justify-content:flex-end">
          <span class="friend-hub-pill">✅ ${selected.length} Selected</span>
          <span class="friend-hub-pill">🟢 ${active.length} Active</span>
        </div>
      </div>
      <div class="quick-group-chips">
        ${chips || '<div style="font-size:11px;color:var(--t3)">No active friends online right now.</div>'}
      </div>
      <div class="quick-group-actions">
        <button class="primary" onclick="window.startQuickGroupChat()">Group Chat</button>
        <button class="secondary" onclick="window.startQuickGroupCall()">Group Call</button>
        <button class="secondary" onclick="window.selectAllActiveFriends()">Select All Active</button>
        <button class="secondary" onclick="window.clearQuickGroupSelection()">Clear Selection</button>
      </div>
    `;
  }

  function ensureGroupCallRoom() {
    let overlay = document.getElementById('groupCallRoom');
    if (overlay) return overlay;

    overlay = document.createElement('div');
    overlay.id = 'groupCallRoom';
    overlay.className = 'group-room-overlay';
    overlay.innerHTML = `
      <div class="group-room-card">
        <div class="group-room-hd">
          <div>
            <div class="group-room-title">Group Call Room</div>
            <div class="group-room-sub" id="groupCallRoomSub">Choose active friends, then launch a shared call room.</div>
          </div>
          <button type="button" class="friend-request-btn decline" onclick="window.closeGroupCallRoom()">✕</button>
        </div>
        <div class="group-room-list" id="groupCallRoomList"></div>
        <div class="group-room-actions">
          <button class="primary" onclick="window.launchGroupCallRoom()">Launch Room</button>
          <button class="secondary" onclick="window.startQuickGroupChat()">Open Group Chat</button>
          <button class="secondary" onclick="window.clearQuickGroupSelection()">Clear Selection</button>
          <button class="secondary" onclick="window.closeGroupCallRoom()">Close</button>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    return overlay;
  }

  function closeGroupCallRoom() {
    const overlay = document.getElementById('groupCallRoom');
    if (overlay) overlay.classList.remove('show');
  }

  function renderGroupCallRoom() {
    const overlay = ensureGroupCallRoom();
    const list = overlay.querySelector('#groupCallRoomList');
    const sub = overlay.querySelector('#groupCallRoomSub');
    const users = quickGroupUsers();
    if (sub) {
      sub.textContent = users.length
        ? `${users.length} participants selected. This room coordinates a shared call experience with active friends.`
        : 'Choose active friends, then launch a shared call room.';
    }
    if (!list) return;
    if (!users.length) {
      list.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:16px;color:rgba(255,255,255,.68);">No participants selected</div>';
      return;
    }
    list.innerHTML = users.map(user => `
      <div class="group-room-member">
        <div class="group-room-av">${user.avatar ? `<img src="${user.avatar}">` : (user.name?.charAt(0).toUpperCase() || '?')}</div>
        <div class="group-room-meta">
          <div class="group-room-name">${user.name || 'User'}</div>
          <div class="group-room-tag">${user.username ? '@' + user.username : 'Active friend'}</div>
        </div>
      </div>
    `).join('');
  }

  function openGroupCallRoom() {
    renderGroupCallRoom();
    const overlay = ensureGroupCallRoom();
    overlay.classList.add('show');
  }

  function launchGroupCallRoom() {
    const users = quickGroupUsers();
    if (users.length < 2) {
      if (typeof toast === 'function') toast('w', 'Select at least 2 active friends for a group call');
      return;
    }

    ensureStore();
    const roomId = 'gc_' + Date.now();
    const meUser = me();
    window.D.socialHub.groupCallRoom = {
      id: roomId,
      title: `${meUser?.name || 'Group'} Call`,
      members: [window.CU.id, ...users.map(u => u.id)],
      createdAt: Date.now(),
      status: 'ready'
    };
    window.D.groups = window.D.groups || {};
    window.D.groups[roomId] = {
      id: roomId,
      name: `${meUser?.name || 'Group'} Call`,
      members: [window.CU.id, ...users.map(u => u.id)],
      createdBy: window.CU.id,
      msgs: [],
      at: Date.now(),
      mode: 'call'
    };
    if (typeof saveData === 'function') saveData();
    renderGroupCallRoom();
    if (typeof toast === 'function') toast('s', `Group call room ready for ${users.length} friends`);
  }

  function startQuickGroupChat() {
    const users = quickGroupUsers();
    if (users.length < 2) {
      if (typeof toast === 'function') toast('w', 'Select at least 2 active friends for a group chat');
      return;
    }
    ensureStore();
    const members = users.map(u => ({ id: u.id, name: u.name || 'User' }));
    try { grpMems = members; } catch (e) {}
    window.grpMems = members;
    const selected = document.getElementById('grpSelected');
    if (selected) {
      selected.innerHTML = users.map(u => `
        <div class="mem-chip">${u.name || 'User'}<span class="rm" onclick="this.closest('.mem-chip').remove(); window.removeQuickGroupMember('${u.id}')">✕</span></div>
      `).join('');
    }
    const groupName = document.getElementById('grpName');
    if (groupName && !groupName.value.trim()) {
      groupName.value = `${users.slice(0, 3).map(u => (u.name || 'User').split(' ')[0]).join(', ')} Group`;
    }
    if (typeof openModal === 'function') openModal('groupModal');
    if (typeof toast === 'function') toast('i', 'Group chat prepared');
  }

  function startQuickGroupChat() {
    const users = quickGroupUsers();
    if (users.length < 2) {
      if (typeof toast === 'function') toast('w', 'Select at least 2 active friends for a group chat');
      return;
    }
    ensureStore();
    syncGroupDraft(users);
    const groupName = document.getElementById('grpName');
    if (groupName && !groupName.value.trim()) {
      groupName.value = `${users.slice(0, 3).map(u => (u.name || 'User').split(' ')[0]).join(', ')} Group`;
    }
    if (typeof openModal === 'function') openModal('groupModal');
    if (typeof toast === 'function') toast('i', 'Group chat prepared');
  }

  function removeQuickGroupMember(uid) {
    setQuickGroupIds(quickGroupIds().filter(id => id !== uid));
    renderQuickGroupPanel();
  }

  function toggleQuickGroupMember(uid) {
    const ids = new Set(quickGroupIds());
    if (ids.has(uid)) ids.delete(uid);
    else ids.add(uid);
    setQuickGroupIds(Array.from(ids));
    renderQuickGroupPanel();
    renderActiveFriends();
    renderGroupCallRoom();
  }

  function selectAllActiveFriends() {
    setQuickGroupIds(activeFriends().map(u => u.id));
    renderQuickGroupPanel();
    renderActiveFriends();
    renderGroupCallRoom();
  }

  function clearQuickGroupSelection() {
    setQuickGroupIds([]);
    renderQuickGroupPanel();
    renderActiveFriends();
    renderGroupCallRoom();
  }

  function renderFriendDiscover() {
    const list = document.getElementById('friendDiscoverList');
    if (!list) return;

    const mine = me();
    const myFriends = friendIds();
    const pending = new Set(
      window.D.friendRequests.flatMap(r => {
        if (r.status !== 'pending') return [];
        if (window.CU && r.from === window.CU.id) return [r.to];
        if (window.CU && r.to === window.CU.id) return [r.from];
        return [];
      })
    );

    const suggestions = Object.values(window.D.users || {})
      .filter(user => user && user.id && (!window.CU || user.id !== window.CU.id) && !user.isAdmin)
      .sort((a, b) => {
        const score = u => (isActiveUser(u) ? 10 : 0) + mutualFriendsCount(u.id) * 3;
        return score(b) - score(a);
      })
      .slice(0, 8);

    if (!suggestions.length) {
      list.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:18px;color:var(--t3);">No people to suggest right now</div>';
      return;
    }

    list.innerHTML = suggestions.map(user => {
      const status = myFriends.has(user.id) ? 'friends' : (pending.has(user.id) ? 'pending' : 'add');
      const button = status === 'friends'
        ? '<button class="friend-discover-btn friends" disabled>Friends</button>'
        : status === 'pending'
          ? '<button class="friend-discover-btn pending" disabled>Pending</button>'
          : `<button class="friend-discover-btn" onclick="window.sendFriendRequest('${user.id}')">Add Friend</button>`;
      const subtitle = `@${user.username || 'user'}${mutualFriendsCount(user.id) ? ` • ${mutualFriendsCount(user.id)} mutual` : ''}${isActiveUser(user) ? ' • Active now' : ''}`;
      return `
        <div class="friend-discover-card">
          <div class="friend-discover-av">
            ${user.avatar ? `<img src="${user.avatar}">` : (user.name?.charAt(0).toUpperCase() || '?')}
            ${isActiveUser(user) ? '<div class="friend-online-dot"></div>' : ''}
          </div>
          <div class="friend-discover-meta">
            <div class="friend-discover-name">${user.name || 'User'}</div>
            <div class="friend-discover-sub">${subtitle}</div>
          </div>
          ${button}
        </div>
      `;
    }).join('');
  }

  function ensureFriendsPage() {
    const page = document.getElementById('pg-friends');
    if (!page) return false;

    if (!page.querySelector('.friend-hub-card')) {
      const hub = document.createElement('div');
      hub.className = 'friend-hub-card';
      hub.id = 'friendHubCard';
      hub.innerHTML = `
        <div class="friend-hub-top">
          <div>
            <div class="friend-hub-title">Social Hub</div>
            <div class="friend-hub-sub">Find people, confirm requests, see who is active, and jump into chat or calls fast.</div>
          </div>
          <div class="friend-hub-pills">
            <span class="friend-hub-pill">👥 ${currentFriends().length} Friends</span>
            <span class="friend-hub-pill">🟢 ${activeFriends().length} Active</span>
            <span class="friend-hub-pill">📩 ${pendingCount()} Requests</span>
          </div>
        </div>
        <div class="friend-hub-actions">
          <button class="primary" onclick="document.getElementById('findFriendsInput')?.focus()">Find Friends</button>
          <button class="secondary" onclick="window.renderActiveFriends && window.renderActiveFriends()">Refresh Active</button>
          <button class="secondary" onclick="window.renderFriendRequests && window.renderFriendRequests()">Refresh Requests</button>
          <button class="secondary" onclick="window.renderFriendDiscover && window.renderFriendDiscover()">Discover People</button>
        </div>
        <div class="friend-discover-wrap">
          <div class="friend-discover-head">
            <div class="friend-discover-title">Suggested people</div>
            <div style="font-size:11px;color:var(--t3);">Based on activity and mutual friends</div>
          </div>
          <div class="friend-discover-list" id="friendDiscoverList"></div>
        </div>
      `;
      page.insertBefore(hub, page.firstChild);
    }

    if (!page.querySelector('.active-friends-section')) {
      const active = document.createElement('div');
      active.className = 'active-friends-section';
      active.id = 'activeFriendsSection';
      active.innerHTML = `
        <div class="active-friends-header">
          <div class="active-friends-title">Active Friends</div>
          <div class="active-friends-count" id="activeFriendsCount">0 online</div>
        </div>
        <div class="active-friends-grid" id="activeFriendsGrid"></div>
      `;
      const reference = page.querySelector('.friend-hub-card')?.nextSibling || page.firstChild;
      page.insertBefore(active, reference);
    }

    if (!page.querySelector('#quickGroupPanel')) {
      const quick = document.createElement('div');
      quick.className = 'quick-group-panel';
      quick.id = 'quickGroupPanel';
      const anchor = page.querySelector('.active-friends-section') || page.firstChild;
      page.insertBefore(quick, anchor.nextSibling || null);
    }

    if (!page.querySelector('.find-friends-hero')) {
      const findHero = document.createElement('div');
      findHero.className = 'find-friends-hero';
      findHero.innerHTML = `
        <div style="font-size:32px;margin-bottom:8px;">Search</div>
        <div style="font-family:var(--fd);font-size:16px;font-weight:800;">Find Friends</div>
        <div style="font-size:12px;color:var(--t3);margin-bottom:12px;">Search by name or username</div>
        <div class="find-friends-search">
          <span class="find-friends-search-icon">🔍</span>
          <input type="text" id="findFriendsInput" placeholder="Search friends..." oninput="window.searchFriends(this.value)">
        </div>
        <div class="find-friends-suggestions" id="findFriendsSuggestions">
          <div style="font-size:11px;color:var(--t3);text-align:center;">Start typing to search...</div>
        </div>
      `;
      page.appendChild(findHero);
    }

    if (!page.querySelector('#friendRequestsSection')) {
      const section = document.createElement('div');
      section.id = 'friendRequestsSection';
      section.innerHTML = `
        <div class="section-label">Friend Requests</div>
        <div id="friendRequestsContainer"></div>
      `;
      const anchor = page.querySelector('.active-friends-section') || page.firstChild;
      page.insertBefore(section, anchor.nextSibling || null);
    }

    renderFriendHub();
    renderActiveFriends();
    renderQuickGroupPanel();
    renderFriendRequests();
    renderFriendDiscover();
    return true;
  }

  function searchFriends(query) {
    const suggestions = document.getElementById('findFriendsSuggestions');
    if (!suggestions) return;

    const text = String(query || '').trim().toLowerCase();
    if (text.length < 2) {
      suggestions.innerHTML = '<div style="font-size:11px;color:var(--t3);text-align:center;">Start typing to search...</div>';
      return;
    }

    const results = Object.values(window.D.users || {})
      .filter(user => {
        if (!user || user.id === window.CU?.id) return false;
        const name = String(user.name || '').toLowerCase();
        const username = String(user.username || '').toLowerCase();
        return name.includes(text) || username.includes(text);
      })
      .slice(0, 10);

    if (!results.length) {
      suggestions.innerHTML = '<div style="font-size:11px;color:var(--t3);text-align:center;">No results found</div>';
      return;
    }

    const mineFriends = friendIds();
    suggestions.innerHTML = results.map(user => {
      const hasPending = window.D.friendRequests.some(r =>
        (r.from === window.CU?.id && r.to === user.id && r.status === 'pending') ||
        (r.from === user.id && r.to === window.CU?.id && r.status === 'pending')
      );
      const isFriend = mineFriends.has(user.id);
      const activeTag = isActiveUser(user) ? ' • Active now' : '';
      let buttonHtml = '';
      if (isFriend) buttonHtml = '<button class="find-friends-suggestion-btn" disabled>Friends</button>';
      else if (hasPending) buttonHtml = '<button class="find-friends-suggestion-btn pending">Pending</button>';
      else buttonHtml = `<button class="find-friends-suggestion-btn" onclick="window.sendFriendRequest('${user.id}')">Add Friend</button>`;

      return `
        <div class="find-friends-suggestion">
          <div class="find-friends-suggestion-avatar">
            ${user.avatar ? `<img src="${user.avatar}">` : (user.name?.charAt(0).toUpperCase() || '?')}
            ${isActiveUser(user) ? '<div class="friend-online-dot"></div>' : ''}
          </div>
          <div class="find-friends-suggestion-info">
            <div class="find-friends-suggestion-name">${user.name || 'User'}</div>
            <div class="find-friends-suggestion-details">@${user.username || 'user'}${activeTag}</div>
          </div>
          ${buttonHtml}
        </div>
      `;
    }).join('');
  }

  function openFriendChat(userId) {
    const user = window.D.users[userId];
    if (!user) return;
    window.currentChatId = userId;
    const openRoom = baseChatRoom();
    if (openRoom) {
      openRoom(userId);
      return;
    }
    if (typeof nav === 'function') nav('messages');
    if (typeof toast === 'function') toast('i', `Chat with ${user.name || 'friend'}`);
  }

  function openFriendAudioCall(userId) {
    const user = window.D.users[userId];
    if (!user) return;
    window.currentChatId = userId;
    const openRoom = baseChatRoom();
    if (openRoom) openRoom(userId);
    const call = baseAudioCall();
    if (call) {
      call(userId);
      return;
    }
    if (typeof toast === 'function') toast('i', `Calling ${user.name || 'friend'}...`);
  }

  function openFriendVideoCall(userId) {
    const user = window.D.users[userId];
    if (!user) return;
    window.currentChatId = userId;
    const openRoom = baseChatRoom();
    if (openRoom) openRoom(userId);
    const call = baseVideoCall();
    if (call) {
      call(userId);
      return;
    }
    if (typeof toast === 'function') toast('i', `Video calling ${user.name || 'friend'}...`);
  }

  function prepareGroupAction(userId, mode) {
    const user = window.D.users[userId];
    if (!user) return;

    const ids = new Set(quickGroupIds());
    ids.add(userId);
    setQuickGroupIds(Array.from(ids));

    const selectedUsers = quickGroupUsers();
    renderQuickGroupPanel();
    renderActiveFriends();
    renderGroupCallRoom();
    syncGroupDraft(selectedUsers);

    if (mode === 'chat') {
      if (typeof openModal === 'function') openModal('groupModal');
      if (typeof searchGrpMembers === 'function') searchGrpMembers('');
      if (typeof toast === 'function') {
        toast('i', selectedUsers.length >= 2
          ? 'Group chat ready'
          : `Added ${user.name || 'friend'} to group chat. Add at least one more active friend.`);
      }
      return;
    }

    openGroupCallRoom();
    if (typeof toast === 'function') {
      toast('i', selectedUsers.length >= 2
        ? 'Group call room ready'
        : `Added ${user.name || 'friend'} to group call. Add at least one more active friend.`);
    }
  }

  function openFriendGroupChat(userId) {
    prepareGroupAction(userId, 'chat');
  }

  function openFriendGroupCall(userId) {
    prepareGroupAction(userId, 'call');
  }

  function prepareGroupInvite(userId, mode) {
    if (mode === 'call') {
      openFriendGroupCall(userId);
      return;
    }
    openFriendGroupChat(userId);
  }

  function addFriendActionButtons() {
    const observer = new MutationObserver(() => {
      document.querySelectorAll('.user-card, .friend-card').forEach(card => {
        if (card.querySelector('.friend-action-buttons')) return;
        const userId = card.dataset.userId;
        if (!userId || userId === window.CU?.id) return;
        const wrap = document.createElement('div');
        wrap.className = 'friend-action-buttons';
        wrap.innerHTML = `
          <button class="friend-action-btn message" onclick="window.openFriendChat('${userId}')">Message</button>
          <button class="friend-action-btn call" onclick="window.openFriendAudioCall('${userId}')">Audio</button>
          <button class="friend-action-btn video" onclick="window.openFriendVideoCall('${userId}')">Video</button>
          <button class="friend-action-btn groupchat" onclick="window.openFriendGroupChat('${userId}')">Group Chat</button>
          <button class="friend-action-btn groupcall" onclick="window.openFriendGroupCall('${userId}')">Group Call</button>
        `;
        card.appendChild(wrap);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  function wireSocialActivity() {
    const stampActive = () => {
      const user = me();
      if (!user) return;
      user.isOnline = true;
      user.lastActive = Date.now();
      if (typeof saveData === 'function') saveData();
    };

    stampActive();
    document.addEventListener('mousemove', stampActive, { passive: true });
    document.addEventListener('keydown', stampActive, { passive: true });
    document.addEventListener('touchstart', stampActive, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') stampActive();
    });

    setInterval(() => {
      stampActive();
      renderActiveFriends();
      renderFriendDiscover();
      renderFriendHub();
      updateFriendRequestBadge();
      ensureFriendsPage();
    }, 30000);
  }

  function renderFriendHub() {
    const hubPills = document.querySelectorAll('#friendHubCard .friend-hub-pill');
    if (!hubPills.length) return;
    hubPills[0].textContent = `👥 ${currentFriends().length} Friends`;
    hubPills[1].textContent = `🟢 ${activeFriends().length} Active`;
    hubPills[2].textContent = `📩 ${pendingCount()} Requests`;
  }

  function init() {
    ensureStore();
    addFriendRequestBadge();
    ensureFriendsPage();
    addFriendActionButtons();
    wireSocialActivity();
  }

  window.sendFriendRequest = sendFriendRequest;
  window.acceptFriendRequest = acceptFriendRequest;
  window.declineFriendRequest = declineFriendRequest;
  window.searchFriends = searchFriends;
  window.openFriendChat = openFriendChat;
  window.openFriendAudioCall = openFriendAudioCall;
  window.openFriendVideoCall = openFriendVideoCall;
  window.openFriendGroupChat = openFriendGroupChat;
  window.openFriendGroupCall = openFriendGroupCall;
  window.prepareGroupInvite = prepareGroupInvite;
  window.renderFriendRequests = renderFriendRequests;
  window.renderActiveFriends = renderActiveFriends;
  window.renderQuickGroupPanel = renderQuickGroupPanel;
  window.renderFriendDiscover = renderFriendDiscover;
  window.renderFriendHub = renderFriendHub;
  window.updateFriendRequestBadge = updateFriendRequestBadge;
  window.toggleQuickGroupMember = toggleQuickGroupMember;
  window.selectAllActiveFriends = selectAllActiveFriends;
  window.clearQuickGroupSelection = clearQuickGroupSelection;
  window.startQuickGroupChat = startQuickGroupChat;
  window.startQuickGroupCall = openGroupCallRoom;
  window.openGroupCallRoom = openGroupCallRoom;
  window.launchGroupCallRoom = launchGroupCallRoom;
  window.closeGroupCallRoom = closeGroupCallRoom;
  window.removeQuickGroupMember = removeQuickGroupMember;

  ready(init);
})();
