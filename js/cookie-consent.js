/* Consent-gated analytics and advertising for Ménage Bo-Bien. */
(function () {
  "use strict";

  var CONSENT_KEY = "bobien_privacy_consent_v1";
  var CONSENT_TTL = 180 * 24 * 60 * 60 * 1000;
  var META_PIXEL_ID = "2657905034660164";
  var GA_MEASUREMENT_ID = "G-NYYSJWBWSX";
  var policyPath = window.location.pathname.indexOf("/blog/") === 0
    ? "../politique-confidentialite.html"
    : "politique-confidentialite.html";
  var consent = readConsent();

  function getLanguage() {
    try {
      var stored = window.localStorage.getItem("language");
      if (stored === "fr" || stored === "en") return stored;
    } catch (error) {}
    return document.documentElement.lang === "en" ? "en" : "fr";
  }

  function readConsent() {
    try {
      var stored = JSON.parse(window.localStorage.getItem(CONSENT_KEY) || "null");
      if (!stored || stored.version !== 1 || typeof stored.analytics !== "boolean" ||
          typeof stored.marketing !== "boolean" || typeof stored.updatedAt !== "number" ||
          Date.now() - stored.updatedAt > CONSENT_TTL || Date.now() < stored.updatedAt) {
        return null;
      }
      return stored;
    } catch (error) {
      return null;
    }
  }

  function saveConsent(analytics, marketing) {
    consent = {
      version: 1,
      necessary: true,
      analytics: Boolean(analytics),
      marketing: Boolean(marketing),
      updatedAt: Date.now()
    };
    try {
      window.localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    } catch (error) {}
    applyConsent();
    return consent;
  }

  function applyConsent() {
    if (!consent) return;
    if (consent.analytics) {
      loadGoogleAnalytics();
    } else {
      denyGoogleAnalytics();
      clearCookies(/^_ga(?:_|$)|^_gid$|^_gat/);
    }
    if (consent.marketing) {
      loadMetaPixel();
    } else {
      clearCookies(/^_fbp$|^_fbc$/);
    }
  }

  function loadGoogleAnalytics() {
    if (window.__bobienGoogleAnalyticsLoaded) return;
    window.__bobienGoogleAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("consent", "default", {
      analytics_storage: "denied",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID);
    var googleScript = document.createElement("script");
    googleScript.async = true;
    googleScript.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_MEASUREMENT_ID);
    googleScript.dataset.bobienConsent = "analytics";
    document.head.appendChild(googleScript);
  }

  function denyGoogleAnalytics() {
    if (typeof window.gtag === "function" && window.__bobienGoogleAnalyticsLoaded) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
        ad_storage: "denied",
        ad_user_data: "denied",
        ad_personalization: "denied"
      });
    }
  }

  function loadMetaPixel() {
    if (window.__bobienMetaPixelLoaded) return;
    window.__bobienMetaPixelLoaded = true;
    (function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = true;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = true;
      t.src = v;
      t.dataset.bobienConsent = "marketing";
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", META_PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function clearCookies(namePattern) {
    var names = document.cookie.split(";").map(function (cookie) {
      return cookie.trim().split("=")[0];
    }).filter(function (name) {
      return name && namePattern.test(name);
    });
    var host = window.location.hostname;
    var parts = host.split(".");
    var baseDomain = parts.length > 2 ? parts.slice(-2).join(".") : host;
    names.forEach(function (name) {
      document.cookie = name + "=; Max-Age=0; path=/";
      document.cookie = name + "=; Max-Age=0; path=/; domain=." + baseDomain;
    });
  }

  function applyLanguage(root) {
    var language = getLanguage();
    (root || document).querySelectorAll("[data-ct-fr][data-ct-en]").forEach(function (node) {
      var value = node.getAttribute("data-ct-" + language);
      if (value !== null) node.textContent = value;
    });
    var closeButton = document.getElementById("bobien-consent-close");
    if (closeButton) {
      closeButton.setAttribute("aria-label", language === "fr" ? "Fermer les préférences" : "Close preferences");
    }
    var manager = document.getElementById("bobien-consent-settings");
    if (manager) {
      manager.setAttribute("aria-label", language === "fr" ? "Ouvrir les préférences de confidentialité" : "Open privacy preferences");
    }
  }

  function mountUI() {
    var root = document.createElement("div");
    root.id = "bobien-consent-root";
    root.dataset.promptOpen = consent ? "false" : "true";
    root.innerHTML =
      '<button type="button" id="bobien-consent-settings" class="bobien-consent-settings" data-ct-fr="Préférences témoins" data-ct-en="Cookie settings">Préférences témoins</button>' +
      '<section id="bobien-consent-banner" class="bobien-consent-banner" role="region" aria-labelledby="bobien-consent-title" ' + (consent ? "hidden" : "") + '>' +
        '<div class="bobien-consent-banner__copy">' +
          '<h2 id="bobien-consent-title" data-ct-fr="Votre vie privée compte" data-ct-en="Your privacy matters">Votre vie privée compte</h2>' +
          '<p data-ct-fr="Les témoins nécessaires mémorisent vos choix. Avec votre accord, Google Analytics mesure l’audience et le Pixel Meta mesure les résultats publicitaires. Ces services peuvent traiter des données de navigation hors du Québec. Refuser est aussi simple qu’accepter." data-ct-en="Necessary storage remembers your choices. With your permission, Google Analytics measures audience activity and the Meta Pixel measures advertising results. These services may process browsing data outside Quebec. Refusing is as easy as accepting.">Les témoins nécessaires mémorisent vos choix. Avec votre accord, Google Analytics mesure l’audience et le Pixel Meta mesure les résultats publicitaires. Ces services peuvent traiter des données de navigation hors du Québec. Refuser est aussi simple qu’accepter.</p>' +
          '<a href="' + policyPath + '"><span data-ct-fr="Lire la politique de confidentialité" data-ct-en="Read the privacy notice">Lire la politique de confidentialité</span></a>' +
        '</div>' +
        '<div class="bobien-consent-banner__actions">' +
          '<button type="button" id="bobien-consent-reject" data-ct-fr="Tout refuser" data-ct-en="Reject optional">Tout refuser</button>' +
          '<button type="button" id="bobien-consent-accept" class="bobien-consent-primary" data-ct-fr="Tout accepter" data-ct-en="Accept all">Tout accepter</button>' +
          '<button type="button" id="bobien-consent-manage" data-ct-fr="Gérer mes choix" data-ct-en="Manage choices">Gérer mes choix</button>' +
        '</div>' +
      '</section>' +
      '<div id="bobien-consent-dialog" class="bobien-consent-dialog" hidden>' +
        '<div class="bobien-consent-dialog__backdrop" data-close-dialog></div>' +
        '<section class="bobien-consent-dialog__panel" role="dialog" aria-modal="true" aria-labelledby="bobien-consent-dialog-title" tabindex="-1">' +
          '<button type="button" id="bobien-consent-close" class="bobien-consent-dialog__close" data-close-dialog data-ct-fr="×" data-ct-en="×" aria-label="Fermer les préférences">×</button>' +
          '<h2 id="bobien-consent-dialog-title" data-ct-fr="Gérer les témoins facultatifs" data-ct-en="Manage optional cookies">Gérer les témoins facultatifs</h2>' +
          '<p data-ct-fr="Choisissez séparément les catégories facultatives. Aucune n’est activée par défaut. Vous pouvez retirer votre accord en tout temps avec le bouton Préférences témoins." data-ct-en="Choose each optional category separately. None is enabled by default. You can withdraw your consent at any time using the Cookie settings button.">Choisissez séparément les catégories facultatives. Aucune n’est activée par défaut. Vous pouvez retirer votre accord en tout temps avec le bouton Préférences témoins.</p>' +
          '<div class="bobien-consent-required"><strong data-ct-fr="Témoins nécessaires — toujours actifs" data-ct-en="Necessary storage — always active">Témoins nécessaires — toujours actifs</strong><small data-ct-fr="Ils mémorisent votre langue et votre choix de confidentialité." data-ct-en="They remember your language and privacy choice.">Ils mémorisent votre langue et votre choix de confidentialité.</small></div>' +
          '<div class="bobien-consent-choice"><input type="checkbox" id="bobien-consent-analytics"><label for="bobien-consent-analytics"><strong data-ct-fr="Mesure d’audience" data-ct-en="Audience measurement">Mesure d’audience</strong><small data-ct-fr="Autoriser Google Analytics à mesurer la fréquentation du site." data-ct-en="Allow Google Analytics to measure website traffic.">Autoriser Google Analytics à mesurer la fréquentation du site.</small></label></div>' +
          '<div class="bobien-consent-choice"><input type="checkbox" id="bobien-consent-marketing"><label for="bobien-consent-marketing"><strong data-ct-fr="Publicité et mesure des campagnes" data-ct-en="Advertising and campaign measurement">Publicité et mesure des campagnes</strong><small data-ct-fr="Autoriser le Pixel Meta à mesurer les interactions publicitaires. Le Pixel ne se charge pas et aucun événement Meta n’est envoyé sans votre accord." data-ct-en="Allow the Meta Pixel to measure advertising interactions. The Pixel does not load and no Meta event is sent without your consent.">Autoriser le Pixel Meta à mesurer les interactions publicitaires. Le Pixel ne se charge pas et aucun événement Meta n’est envoyé sans votre accord.</small></label></div>' +
          '<p><a href="' + policyPath + '"><span data-ct-fr="Politique de confidentialité" data-ct-en="Privacy notice">Politique de confidentialité</span></a> · <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer"><span data-ct-fr="Confidentialité Google" data-ct-en="Google privacy">Confidentialité Google</span></a> · <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer"><span data-ct-fr="Confidentialité Meta" data-ct-en="Meta privacy">Confidentialité Meta</span></a></p>' +
          '<div class="bobien-consent-dialog__actions">' +
            '<button type="button" id="bobien-consent-dialog-reject" data-ct-fr="Tout refuser" data-ct-en="Reject optional">Tout refuser</button>' +
            '<button type="button" id="bobien-consent-save" class="bobien-consent-primary" data-ct-fr="Enregistrer mes choix" data-ct-en="Save my choices">Enregistrer mes choix</button>' +
          '</div>' +
        '</section>' +
      '</div>';
    document.body.appendChild(root);

    var banner = document.getElementById("bobien-consent-banner");
    var dialog = document.getElementById("bobien-consent-dialog");
    var panel = dialog.querySelector(".bobien-consent-dialog__panel");
    var analyticsToggle = document.getElementById("bobien-consent-analytics");
    var marketingToggle = document.getElementById("bobien-consent-marketing");
    var managerButton = document.getElementById("bobien-consent-settings");

    function openDialog() {
      analyticsToggle.checked = Boolean(consent && consent.analytics);
      marketingToggle.checked = Boolean(consent && consent.marketing);
      dialog.hidden = false;
      window.requestAnimationFrame(function () { panel.focus(); });
    }

    function closeDialog() {
      dialog.hidden = true;
      managerButton.focus();
    }

    function saveChoices(analytics, marketing) {
      saveConsent(analytics, marketing);
      banner.hidden = true;
      dialog.hidden = true;
      root.dataset.promptOpen = "false";
      managerButton.focus();
    }

    managerButton.addEventListener("click", openDialog);
    document.getElementById("bobien-consent-manage").addEventListener("click", openDialog);
    document.getElementById("bobien-consent-accept").addEventListener("click", function () {
      saveChoices(true, true);
    });
    document.getElementById("bobien-consent-reject").addEventListener("click", function () {
      saveChoices(false, false);
    });
    document.getElementById("bobien-consent-dialog-reject").addEventListener("click", function () {
      saveChoices(false, false);
    });
    document.getElementById("bobien-consent-save").addEventListener("click", function () {
      saveChoices(analyticsToggle.checked, marketingToggle.checked);
    });
    dialog.querySelectorAll("[data-close-dialog]").forEach(function (element) {
      element.addEventListener("click", closeDialog);
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && !dialog.hidden) closeDialog();
    });

    var languageToggle = document.getElementById("privacyLanguageToggle");
    if (languageToggle) {
      languageToggle.addEventListener("click", function () {
        var next = getLanguage() === "fr" ? "en" : "fr";
        try { window.localStorage.setItem("language", next); } catch (error) {}
        document.documentElement.lang = next;
        languageToggle.textContent = next === "fr" ? "EN" : "FR";
        applyLanguage(root);
      });
      languageToggle.textContent = getLanguage() === "fr" ? "EN" : "FR";
    }
    applyLanguage(root);
    if (consent) applyConsent();

    var observer = new MutationObserver(function (changes) {
      if (changes.some(function (change) { return change.attributeName === "lang"; })) applyLanguage(root);
    });
    observer.observe(document.documentElement, {attributes: true, attributeFilter: ["lang"]});
  }

  if (document.body) {
    mountUI();
  } else {
    document.addEventListener("DOMContentLoaded", mountUI, {once: true});
  }
})();
