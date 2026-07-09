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

