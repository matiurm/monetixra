function dismissOfferElement(trigger) {
  const gate = trigger?.closest?.('.mxt-reward-gate');
  if(gate) { gate.remove(); return true; }
  const overlay = trigger?.closest?.('#rwAd,#autoAd,#intsAd,#interstitialOverlay');
  if(overlay) {
    overlay.classList?.remove('show');
    if(overlay.id === 'interstitialOverlay') overlay.remove();
    else if(overlay.id === 'rwAd' || overlay.id === 'autoAd' || overlay.id === 'intsAd') overlay.style.display = 'none';
    return true;
  }
  const box = trigger?.closest?.('.ad-container,.ad-native,.feed-ad,.mxt-rotating-ad,.mxt-bottom-live-ad,.mxt-floating-pts,.mxt-reward-card,.rewarded-ad-container,.ad-wrapper');
  if(box) { box.remove(); return true; }
  return false;
}
