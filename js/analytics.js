/**
 * OCM Outreach — GA4 Analytics Tracking
 *
 * Provides consent-aware, debug-friendly event tracking for the
 * community partner digital toolkit.  All public methods live on
 * the global `window.OCMAnalytics` object.
 *
 * Usage:
 *   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
 *   <script src="js/analytics.js"></script>
 */

(function () {
  'use strict';

  // ---------------------------------------------------------------------------
  // Configuration
  // ---------------------------------------------------------------------------

  var MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 Measurement ID

  // ---------------------------------------------------------------------------
  // Helpers
  // ---------------------------------------------------------------------------

  /** Return a short random session ID (12 hex chars). */
  function generateSessionId() {
    return Math.random().toString(36).substring(2, 8) +
           Math.random().toString(36).substring(2, 8);
  }

  /** Read a value from sessionStorage (safe wrapper). */
  function ssGet(key) {
    try { return sessionStorage.getItem(key); } catch (_) { return null; }
  }

  /** Write a value to sessionStorage (safe wrapper). */
  function ssSet(key, val) {
    try { sessionStorage.setItem(key, val); } catch (_) { /* noop */ }
  }

  // ---------------------------------------------------------------------------
  // Debug mode — enabled with ?debug=true in the URL
  // ---------------------------------------------------------------------------

  var DEBUG = /[?&]debug=true/i.test(window.location.search);

  // ---------------------------------------------------------------------------
  // Session ID — persisted per browser tab session
  // ---------------------------------------------------------------------------

  var sessionId = ssGet('ocm_session_id');
  if (!sessionId) {
    sessionId = generateSessionId();
    ssSet('ocm_session_id', sessionId);
  }

  // ---------------------------------------------------------------------------
  // UTM parameter capture — stored once per session
  // ---------------------------------------------------------------------------

  var UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign'];

  function captureUtmParams() {
    var params = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach(function (key) {
      var val = params.get(key);
      if (val) { ssSet(key, val); }
    });
  }

  function getUtmParams() {
    var obj = {};
    UTM_KEYS.forEach(function (key) {
      var val = ssGet(key);
      if (val) { obj[key] = val; }
    });
    return obj;
  }

  captureUtmParams();

  // ---------------------------------------------------------------------------
  // GA4 gtag bootstrap
  // ---------------------------------------------------------------------------

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', MEASUREMENT_ID, { send_page_view: false });

  // ---------------------------------------------------------------------------
  // Consent management
  // ---------------------------------------------------------------------------

  var consentGranted = false;
  var eventQueue = [];

  /** Check localStorage for a previously stored consent decision. */
  function loadConsentState() {
    try {
      var stored = localStorage.getItem('ga_consent');
      if (stored === 'true') { consentGranted = true; }
    } catch (_) { /* noop */ }
  }

  loadConsentState();

  /** Flush any queued events that were recorded before consent. */
  function flushQueue() {
    while (eventQueue.length) {
      var entry = eventQueue.shift();
      gtag('event', entry.name, entry.params);
    }
  }

  // ---------------------------------------------------------------------------
  // Core event dispatcher
  // ---------------------------------------------------------------------------

  /**
   * Send (or queue) a GA4 event.
   * Every event automatically includes session ID and UTM parameters.
   */
  function sendEvent(eventName, extraParams) {
    var params = Object.assign(
      { session_id: sessionId },
      getUtmParams(),
      extraParams || {}
    );

    if (DEBUG) {
      console.log('[OCMAnalytics]', eventName, params);
    }

    if (consentGranted) {
      gtag('event', eventName, params);
    } else {
      eventQueue.push({ name: eventName, params: params });
    }
  }

  // ---------------------------------------------------------------------------
  // Public tracking functions
  // ---------------------------------------------------------------------------

  /** Fire a page_view event (call once on load). */
  function trackPageView() {
    sendEvent('page_view', {
      page_location: window.location.href,
      page_title: document.title,
      referrer: document.referrer || '(direct)',
      user_language: navigator.language || navigator.userLanguage || 'unknown'
    });
  }

  /** Track a single asset download click. */
  function trackAssetDownload(assetName, assetCategory, language) {
    sendEvent('asset_download', {
      asset_name: assetName,
      asset_category: assetCategory,
      language: language
    });
  }

  /** Track when a video begins playing. */
  function trackVideoPlay(videoName) {
    sendEvent('video_play', {
      video_name: videoName
    });
  }

  /** Track a language toggle interaction. */
  function trackLanguageToggle(fromLang, toLang) {
    sendEvent('language_toggle', {
      from_language: fromLang,
      to_language: toLang
    });
  }

  /** Track a content section entering the viewport. */
  function trackSectionView(sectionName) {
    sendEvent('section_view', {
      section_name: sectionName
    });
  }

  /** Track a bulk download action. */
  function trackBulkDownload(category, language, assetCount) {
    sendEvent('bulk_download', {
      asset_category: category,
      language: language,
      asset_count: assetCount
    });
  }

  // ---------------------------------------------------------------------------
  // Consent API
  // ---------------------------------------------------------------------------

  /**
   * Grant or revoke analytics consent.
   * When granted, any queued events are flushed immediately.
   */
  function setConsent(granted) {
    consentGranted = !!granted;
    try {
      localStorage.setItem('ga_consent', consentGranted.toString());
    } catch (_) { /* noop */ }

    if (consentGranted) { flushQueue(); }
  }

  // ---------------------------------------------------------------------------
  // Expose public API on window.OCMAnalytics
  // ---------------------------------------------------------------------------

  window.OCMAnalytics = {
    trackPageView: trackPageView,
    trackAssetDownload: trackAssetDownload,
    trackVideoPlay: trackVideoPlay,
    trackLanguageToggle: trackLanguageToggle,
    trackSectionView: trackSectionView,
    trackBulkDownload: trackBulkDownload,
    setConsent: setConsent
  };

  // ---------------------------------------------------------------------------
  // Auto-fire page view on load
  // ---------------------------------------------------------------------------

  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    trackPageView();
  } else {
    window.addEventListener('DOMContentLoaded', trackPageView);
  }
})();
