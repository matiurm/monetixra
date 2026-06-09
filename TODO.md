# TODO — Monetixra: OTP/Ad/Posts/Live/Chat/Withdraw/Admin hardening

## Step 1 — Repo understanding (done)
- Located key function stubs in `index.html`: `sendRegOtp`, `doRegister`, `showRewardedAd`, `clickInts`, `clickAutoAd`, `watchRewardAd`, `startLiveStreamFromPost`, `sendMsg`, `withdraw`, `adminTab`, `adminGlobalActions`, `submitPostWithLoader`.

## Step 2 — Add claim/once-only guard utilities (core)
- Add shared helpers inside `index.html` for:
  - Ad claim once-only (rewarded/interstitial/auto/bottom live)
  - OTP usage once-only
  - Withdraw submit once-only
  - Prevent double-click/double-submit for post submit

## Step 3 — OTP flow hardening
- Update `sendRegOtp` / `doRegister`:
  - Mark OTP as used after successful registration
  - Prevent concurrent `doRegister` calls via lock

## Step 4 — Reward ad flow hardening
- Update `showRewardedAd`, `clickInts`, `watchRewardAd`, `clickAutoAd`:
  - Ensure points are granted only once per ad instance
  - Add a stable `adClaimKey` per opened modal instance

## Step 5 — Post actions + three-dots menu
- Update `submitPostWithLoader` and post menu dropdown handlers:
  - Ensure reward logic is once-only
  - Ensure menu actions are permission-checked (owner/admin)

## Step 6 — Live streaming + live comments
- Update `startLiveStreamFromPost` + `sendLiveComment`:
  - Add throttle to comment sending
  - Prevent duplicate viewer count increments if any

## Step 7 — Chat send + delete
- Update `sendMsg`:
  - Throttle spam messages
- Update delete handlers:
  - “delete for you” vs “delete for everyone” permission checks

## Step 8 — Withdraw flow + admin approvals
- Update `withdraw` submit:
  - once-only and status transition
- Update admin withdraw queue rendering & approve/reject:
  - admin-only guard
  - consistent status updates

## Step 9 — Test plan (smoke)
- Reward ads: multi-click must not increase points more than once
- Signup: double-submit must not create multiple accounts
- Post submit: multi-click does not duplicate posts/points
- Live/chat: basic click paths; delete permission sanity
- Withdraw: multiple submit blocked; admin approve/reject works

## Step 10 — Final verification
- Manual runtime checks in browser console for guard keys and status transitions

