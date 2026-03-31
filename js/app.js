/* ============================================================
   OCM "Education Before Participation" Digital Partner Toolkit
   Main Application – app.js
   ============================================================ */

const i18n = {
  en: {
    nav_commercial: "Commercial",
    nav_pamphlet: "Pamphlet",
    nav_social: "Social Media",
    nav_videos: "Videos",
    nav_cards: "Trading Cards",
    nav_workshops: "Workshops",
    nav_at_a_glance: "At-A-Glance",

    hero_title: "Education Before Participation",
    hero_subtitle: "Digital Partner Toolkit",
    hero_description:
      "Access and download official OCM collateral to share with your community. All materials are available in English and Spanish.",
    hero_cta: "Explore Toolkit",

    section_commercial_title: "LA County Way Commercial",
    section_commercial_desc:
      "Share the official OCM commercial with your community through social media, email, or at events and gatherings.",

    section_pamphlet_title: "CannaFacts Pamphlet",
    section_pamphlet_desc:
      "Your quick guide to cannabis regulations in LA County. Covers the history of cannabis in the US, know-the-law essentials, social equity programs, and OCM's guiding principles of Education, Protection, and Empowerment.",

    section_social_title: "Social Media Templates",
    section_social_desc:
      "Ready-to-post graphics optimized for Instagram, Facebook, and Twitter. Download, customize with your organization's branding, and share.",

    section_highlights_title: "Operator Highlight Videos",
    section_highlights_desc:
      "Eight 30-second spotlight videos featuring licensed cannabis operators in LA County sharing their stories and commitment to the community.",

    section_trading_title: "Meet the Operators",
    section_trading_desc:
      "Collectible-style trading cards featuring eleven licensed cannabis operators in LA County. Share digitally or print for community events and educational sessions.",

    section_at_a_glance_title: "All Workshops At-A-Glance",
    section_at_a_glance_desc:
      "A comprehensive overview flier listing all available workshops, dates, and registration information in one convenient document.",

    section_workshops_title: "Masterclass & Workshop Fliers",
    section_workshops_desc:
      "Individual fliers for each of our eight Cannabis Social Equity masterclasses and workshops. Download and share to promote upcoming events in your community. RSVP at LACountyCannabisEd.org",

    btn_download: "Download",
    btn_download_all: "Download All",
    btn_download_en: "Download English",
    btn_download_es: "Download Spanish",
    btn_watch: "Watch Video",
    btn_share: "Share",
    btn_close: "Close",

    footer_title: "Office of Cannabis Management",
    footer_desc:
      "LA County Consumer & Business Affairs",
    footer_contact: "Contact Us",
    footer_partner: "Become a Partner",
    footer_rights: "All Rights Reserved",
    footer_toolkit:
      "Education Before Participation Partner Toolkit",

    video_duration: "0:30",
    card_flip_hint: "Click to flip",
    operator_prefix: "Operator",
    workshop_prefix: "Workshop",

    operator_1: "Jason McKnight",
    operator_2: "Rhavin McSweaney",
    operator_3: "Maisha Bahati",
    operator_4: "Angie Macaraeg",
    operator_5: "Christopher Martinez",
    operator_6: "Madison Shockley III",
    operator_7: "Luis Rivera",
    operator_8: "Victoria Basso",
    operator_9: "Sakara Barnes",
    operator_10: "Ramon Garcia & Nina Parks",
    operator_11: "Tianna Woodruff",

    workshop_1: "Retail & Testing Masterclass",
    workshop_2: "Distribution & Manufacturing Masterclass",
    workshop_3: "Microbiz & Cultivation Masterclass",
    workshop_4: "Retail & Delivery Masterclass",
    workshop_5: "Retail+Delivery & Testing Masterclass",
    workshop_6: "Cannabis Worker Voices Panel",
    workshop_7: "Retail & Farmer Masterclass",
    workshop_8: "Meet the Professionals: Speed Learning Lab",

    // Additional UI strings
    nav_campaign: "Campaign",
    section_campaign_title: "Cannabis Equity Workshop Series",
    section_campaign_desc: "Explore the complete outreach campaign overview. This interactive flipbook provides partners with everything you need to know about the initiative, goals, and how to get involved.",
    btn_view_fullscreen: "View Full Screen",

    hero_badge: "LA County",
    hero_cta_explore: "Explore Toolkit",
    hero_cta_watch: "Watch Commercial",
    video_coming_soon: "Video Coming Soon",

    pamphlet_card_title: "CannaFacts: Quick Guide to Cannabis Regulations",
    pamphlet_card_desc: "A comprehensive pamphlet from the Office of Cannabis Management covering cannabis history, know-the-law guidelines (adult use, medical use, outdoor & vehicle use), social equity programs, and OCM's mission to Educate, Protect, and Empower LA County communities.",

    at_a_glance_card_title: "All Workshops Overview",
    at_a_glance_card_desc: "A complete listing of all available workshops with dates, topics, and registration details.",

    social_template_1_title: "Instagram Story",
    social_template_1_desc: "Vertical format for Instagram Stories",
    social_template_2_title: "Facebook Post",
    social_template_2_desc: "Square format for Facebook feed",
    social_template_3_title: "Twitter Header",
    social_template_3_desc: "Wide format for Twitter banner",
    social_template_4_title: "Instagram Post",
    social_template_4_desc: "Square format for Instagram feed",
    social_template_5_title: "Facebook Cover",
    social_template_5_desc: "Wide format for Facebook cover photo",
    social_template_6_title: "LinkedIn Post",
    social_template_6_desc: "Professional format for LinkedIn feed",

    operator_highlight_label: "Operator Highlight",

    workshop_1_desc: "April 30 | 3-5PM — Christopher Martinez (Sensi) on dispensary operations & Angie Macaraeg (Encore Labs) on cannabis testing.",
    workshop_2_desc: "May 2 | 7-9PM — Ramon Garcia & Nina Parks (Equity Trade Certification) on distribution & Tiana Woodruff (Queen Mary) on manufacturing.",
    workshop_3_desc: "May 21 | 7-9PM — Victoria Basso (Luna Caregivers) on microbusiness licensing & Sakara Barnes (Mother Exotic Flower) on cultivation.",
    workshop_4_desc: "May 28 | 7-9PM — Madison Shockley III (Cadre) on retail operations & Luis Rivera (Bonafide Delivery) on licensed delivery.",
    workshop_5_desc: "June 4 | 7-9PM — Maisha Bahati (Crystal Nugs) on retail & delivery & Angie Macaraeg (Encore Labs) on cannabis testing.",
    workshop_6_desc: "June 13 | 3-5PM — Interactive career pathways panel with real stories from cannabis workers, workforce pathways, and live Q&A.",
    workshop_7_desc: "June 18 | 3-5PM — Rhavin McSweaney (Dope Sugar) on retail operations & Jason McKnight (Green Label RX) on cultivation.",
    workshop_8_desc: "June 27 | 3-5PM — Speed learning lab covering legal, security, operations, HR, marketing, compliance, finance, and business development.",

    category_retail: "Retail",
    category_testing: "Testing",
    category_cultivation: "Cultivation",
    category_workshop: "Workshop",
    category_delivery: "Delivery",

    social_coming_soon: "Social media templates for Instagram, Facebook, and more are being finalized. Check back soon for ready-to-post graphics.",

    footer_resources: "Resources",
    footer_connect: "Connect",
  },

  es: {
    nav_commercial: "Comercial",
    nav_pamphlet: "Folleto",
    nav_social: "Redes Sociales",
    nav_videos: "Videos",
    nav_cards: "Tarjetas",
    nav_workshops: "Talleres",
    nav_at_a_glance: "Vista General",

    hero_title: "Educaci\u00f3n Antes de Participaci\u00f3n",
    hero_subtitle: "Kit Digital para Socios",
    hero_description:
      "Acceda y descargue material oficial de OCM para compartir con su comunidad. Todos los materiales est\u00e1n disponibles en ingl\u00e9s y espa\u00f1ol.",
    hero_cta: "Explorar el Kit",

    section_commercial_title: "Comercial LA County Way",
    section_commercial_desc:
      "Comparta el comercial oficial de OCM con su comunidad a trav\u00e9s de redes sociales, correo electr\u00f3nico o en eventos y reuniones.",

    section_pamphlet_title: "Folleto CannaFacts",
    section_pamphlet_desc:
      "Su gu\u00eda r\u00e1pida sobre las regulaciones del cannabis en el Condado de LA. Cubre la historia del cannabis en EE.UU., lo esencial sobre la ley, programas de equidad social y los principios de OCM: Educaci\u00f3n, Protecci\u00f3n y Empoderamiento.",

    section_social_title: "Plantillas para Redes Sociales",
    section_social_desc:
      "Gr\u00e1ficos listos para publicar optimizados para Instagram, Facebook y Twitter. Descargue, personalice con la marca de su organizaci\u00f3n y comparta.",

    section_highlights_title: "Videos Destacados de Operadores",
    section_highlights_desc:
      "Ocho videos de 30 segundos presentando operadores de cannabis licenciados en el Condado de LA compartiendo sus historias y compromiso con la comunidad.",

    section_trading_title: "Conoce a los Operadores",
    section_trading_desc:
      "Tarjetas coleccionables con once operadores de cannabis licenciados en el Condado de LA. Comparta digitalmente o imprima para eventos comunitarios y sesiones educativas.",

    section_at_a_glance_title: "Vista General de Todos los Talleres",
    section_at_a_glance_desc:
      "Un folleto de vista general que enumera todos los talleres disponibles, fechas e informaci\u00f3n de registro en un solo documento conveniente.",

    section_workshops_title: "Folletos de Clases Magistrales y Talleres",
    section_workshops_desc:
      "Folletos individuales para cada una de nuestras ocho clases magistrales y talleres de Equidad Social del Cannabis. Descargue y comparta para promover los pr\u00f3ximos eventos en su comunidad. Reg\u00edstrese en LACountyCannabisEd.org",

    btn_download: "Descargar",
    btn_download_all: "Descargar Todo",
    btn_download_en: "Descargar en Ingl\u00e9s",
    btn_download_es: "Descargar en Espa\u00f1ol",
    btn_watch: "Ver Video",
    btn_share: "Compartir",
    btn_close: "Cerrar",

    footer_title: "Oficina de Gesti\u00f3n del Cannabis",
    footer_desc:
      "Asuntos del Consumidor y Negocios del Condado de LA",
    footer_contact: "Cont\u00e1ctenos",
    footer_partner: "Convi\u00e9rtase en Socio",
    footer_rights: "Todos los Derechos Reservados",
    footer_toolkit:
      "Kit de Socios Educaci\u00f3n Antes de Participaci\u00f3n",

    video_duration: "0:30",
    card_flip_hint: "Clic para voltear",
    operator_prefix: "Operador",
    workshop_prefix: "Taller",

    operator_1: "Jason McKnight",
    operator_2: "Rhavin McSweaney",
    operator_3: "Maisha Bahati",
    operator_4: "Angie Macaraeg",
    operator_5: "Christopher Martinez",
    operator_6: "Madison Shockley III",
    operator_7: "Luis Rivera",
    operator_8: "Victoria Basso",
    operator_9: "Sakara Barnes",
    operator_10: "Ramon Garcia & Nina Parks",
    operator_11: "Tianna Woodruff",

    workshop_1: "Clase Magistral: Venta y Pruebas",
    workshop_2: "Clase Magistral: Distribuci\u00f3n y Manufactura",
    workshop_3: "Clase Magistral: Micronegocio y Cultivo",
    workshop_4: "Clase Magistral: Venta y Entrega",
    workshop_5: "Clase Magistral: Venta+Entrega y Pruebas",
    workshop_6: "Panel: Voces de Trabajadores del Cannabis",
    workshop_7: "Clase Magistral: Venta y Agricultor",
    workshop_8: "Conoce a los Profesionales: Lab de Aprendizaje",

    // Additional UI strings
    nav_campaign: "Campa\u00f1a",
    section_campaign_title: "Serie de Talleres de Equidad del Cannabis",
    section_campaign_desc: "Explore la visi\u00f3n general completa de la campa\u00f1a de alcance comunitario. Este libro interactivo proporciona a los socios todo lo que necesitan saber sobre la iniciativa, los objetivos y c\u00f3mo participar.",
    btn_view_fullscreen: "Ver Pantalla Completa",

    hero_badge: "Condado de LA",
    hero_cta_explore: "Explorar el Kit",
    hero_cta_watch: "Ver Comercial",
    video_coming_soon: "Video Pr\u00f3ximamente",

    pamphlet_card_title: "CannaFacts: Gu\u00eda R\u00e1pida de Regulaciones del Cannabis",
    pamphlet_card_desc: "Un folleto completo de la Oficina de Gesti\u00f3n del Cannabis que cubre la historia del cannabis, gu\u00edas sobre la ley (uso adulto, uso m\u00e9dico, uso al aire libre y en veh\u00edculos), programas de equidad social y la misi\u00f3n de OCM de Educar, Proteger y Empoderar a las comunidades del Condado de LA.",

    at_a_glance_card_title: "Vista General de Talleres",
    at_a_glance_card_desc: "Una lista completa de todos los talleres disponibles con fechas, temas y detalles de registro.",

    social_template_1_title: "Historia de Instagram",
    social_template_1_desc: "Formato vertical para Historias de Instagram",
    social_template_2_title: "Publicaci\u00f3n de Facebook",
    social_template_2_desc: "Formato cuadrado para el feed de Facebook",
    social_template_3_title: "Encabezado de Twitter",
    social_template_3_desc: "Formato ancho para banner de Twitter",
    social_template_4_title: "Publicaci\u00f3n de Instagram",
    social_template_4_desc: "Formato cuadrado para el feed de Instagram",
    social_template_5_title: "Portada de Facebook",
    social_template_5_desc: "Formato ancho para foto de portada de Facebook",
    social_template_6_title: "Publicaci\u00f3n de LinkedIn",
    social_template_6_desc: "Formato profesional para el feed de LinkedIn",

    operator_highlight_label: "Destacado del Operador",

    workshop_1_desc: "Abril 30 | 3-5PM — Christopher Martinez (Sensi) sobre operaciones de dispensarios y Angie Macaraeg (Encore Labs) sobre pruebas de cannabis.",
    workshop_2_desc: "Mayo 2 | 7-9PM — Ramon Garcia & Nina Parks (Equity Trade Certification) sobre distribuci\u00f3n y Tiana Woodruff (Queen Mary) sobre manufactura.",
    workshop_3_desc: "Mayo 21 | 7-9PM — Victoria Basso (Luna Caregivers) sobre licencias de micronegocio y Sakara Barnes (Mother Exotic Flower) sobre cultivo.",
    workshop_4_desc: "Mayo 28 | 7-9PM — Madison Shockley III (Cadre) sobre operaciones de venta y Luis Rivera (Bonafide Delivery) sobre entrega con licencia.",
    workshop_5_desc: "Junio 4 | 7-9PM — Maisha Bahati (Crystal Nugs) sobre venta y entrega y Angie Macaraeg (Encore Labs) sobre pruebas de cannabis.",
    workshop_6_desc: "Junio 13 | 3-5PM — Panel interactivo de trayectorias profesionales con historias reales de trabajadores del cannabis y preguntas en vivo.",
    workshop_7_desc: "Junio 18 | 3-5PM — Rhavin McSweaney (Dope Sugar) sobre operaciones de venta y Jason McKnight (Green Label RX) sobre cultivo.",
    workshop_8_desc: "Junio 27 | 3-5PM — Laboratorio de aprendizaje cubriendo legal, seguridad, operaciones, RRHH, marketing, cumplimiento, finanzas y desarrollo de negocios.",

    category_retail: "Venta",
    category_testing: "Pruebas",
    category_cultivation: "Cultivo",
    category_workshop: "Taller",
    category_delivery: "Entrega",

    social_coming_soon: "Las plantillas para redes sociales de Instagram, Facebook y m\u00e1s est\u00e1n siendo finalizadas. Vuelva pronto para gr\u00e1ficos listos para publicar.",

    footer_resources: "Recursos",
    footer_connect: "Conectar",
  },
};

/* ----------------------------------------------------------
   State
   ---------------------------------------------------------- */
let currentLang = "en";

/* ----------------------------------------------------------
   Helpers
   ---------------------------------------------------------- */
function analytics(method, ...args) {
  if (window.OCMAnalytics && typeof window.OCMAnalytics[method] === "function") {
    window.OCMAnalytics[method](...args);
  }
}

function scrollToElement(el, offset = 0) {
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "smooth" });
}

function getNavHeight() {
  const nav = document.querySelector(".navbar");
  return nav ? nav.offsetHeight : 70;
}

/* ----------------------------------------------------------
   1. Language Toggle
   ---------------------------------------------------------- */
function applyLanguage(lang) {
  currentLang = lang;
  document.documentElement.setAttribute("lang", lang);
  localStorage.setItem("ocm_lang", lang);

  // Update text content for all i18n elements
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Swap download link paths between /en/ and /es/
  const otherLang = lang === "en" ? "es" : "en";
  document.querySelectorAll("[data-download]").forEach((el) => {
    if (el.hasAttribute("data-lang-fixed")) return;
    const href = el.getAttribute("href");
    if (href) {
      el.setAttribute(
        "href",
        href.replace(`/${otherLang}/`, `/${lang}/`)
      );
    }
  });

  // Update active state on toggle buttons
  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

function initLanguageToggle() {
  const saved = localStorage.getItem("ocm_lang");
  applyLanguage(saved && i18n[saved] ? saved : "en");

  document.querySelectorAll(".lang-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang");
      if (lang && lang !== currentLang) {
        applyLanguage(lang);
        analytics("trackLanguageToggle");
      }
    });
  });
}

/* ----------------------------------------------------------
   2. Scroll Animations (IntersectionObserver)
   ---------------------------------------------------------- */
function initScrollAnimations() {
  const elements = document.querySelectorAll(".animate-on-scroll");
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Stagger grid children
          const children = entry.target.querySelectorAll(
            ".grid > *, .card-grid > *, .carousel-track > *"
          );
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * 0.1}s`;
          });

          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ----------------------------------------------------------
   3. Sticky Navigation & Active Section Highlight
   ---------------------------------------------------------- */
function initStickyNav() {
  const navbar = document.querySelector(".navbar");
  if (!navbar) return;

  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);
  }, { passive: true });

  // Active section tracking
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link[href^='#']");
  if (!sections.length || !navLinks.length) return;

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${id}`
            );
          });
          updateScrollDots(id);
        }
      });
    },
    { threshold: 0.3, rootMargin: "-20% 0px -50% 0px" }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

/* ----------------------------------------------------------
   4. Trading Card Flip
   ---------------------------------------------------------- */
function initTradingCards() {
  document.querySelectorAll(".trading-card").forEach((card) => {
    card.addEventListener("click", () => {
      const inner = card.querySelector(".trading-card-inner");
      if (inner) {
        inner.classList.toggle("flipped");
      }
    });
  });
}

/* ----------------------------------------------------------
   5. Video Modal
   ---------------------------------------------------------- */
function initVideoModal() {
  const modal = document.querySelector(".video-modal");
  if (!modal) return;

  const modalContent = modal.querySelector(".video-modal-content");
  const closeBtn = modal.querySelector(".video-modal-close");

  function openModal(videoSrc, videoTitle) {
    if (modalContent) {
      modalContent.innerHTML = `
        <button class="video-modal-close" aria-label="Close">&times;</button>
        <div class="video-embed">
          <iframe src="${videoSrc}" allowfullscreen title="${videoTitle || "Video"}"></iframe>
        </div>
      `;
      // Re-bind close button inside new content
      const newClose = modalContent.querySelector(".video-modal-close");
      if (newClose) newClose.addEventListener("click", closeModal);
    }
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    analytics("trackVideoPlay", videoTitle);
  }

  function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    if (modalContent) modalContent.innerHTML = "";
  }

  // Open on video card click
  document.querySelectorAll(".video-card").forEach((card) => {
    card.addEventListener("click", () => {
      const src = card.getAttribute("data-video-src");
      const title = card.getAttribute("data-video-title") || "";
      if (src) openModal(src, title);
    });
  });

  // Close on overlay click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Close on existing close button
  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeModal();
    }
  });
}

/* ----------------------------------------------------------
   6. Download Tracking
   ---------------------------------------------------------- */
function initDownloadTracking() {
  document.querySelectorAll(".btn-download").forEach((btn) => {
    btn.addEventListener("click", () => {
      const assetName = btn.getAttribute("data-asset-name") || "unknown";
      const assetCategory = btn.getAttribute("data-asset-category") || "general";

      analytics("trackAssetDownload", assetName, assetCategory);

      // Brief checkmark animation
      const originalText = btn.textContent;
      btn.classList.add("downloaded");
      btn.textContent = "\u2713";
      setTimeout(() => {
        btn.classList.remove("downloaded");
        // Restore translated text
        const key = btn.getAttribute("data-i18n");
        btn.textContent = key && i18n[currentLang][key]
          ? i18n[currentLang][key]
          : originalText;
      }, 1200);
    });
  });
}

/* ----------------------------------------------------------
   7. Smooth Scroll Navigation
   ---------------------------------------------------------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href").slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      e.preventDefault();
      scrollToElement(target, getNavHeight());

      // Close mobile nav if open
      const mobileMenu = document.querySelector(".nav-links");
      if (mobileMenu) mobileMenu.classList.remove("open");
    });
  });
}

/* ----------------------------------------------------------
   8. Scroll Progress Dots
   ---------------------------------------------------------- */
function updateScrollDots(activeSectionId) {
  document.querySelectorAll(".scroll-progress-dot").forEach((dot) => {
    dot.classList.toggle(
      "active",
      dot.getAttribute("data-section") === activeSectionId
    );
  });
}

function initScrollDots() {
  document.querySelectorAll(".scroll-progress-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      const sectionId = dot.getAttribute("data-section");
      const section = document.getElementById(sectionId);
      if (section) scrollToElement(section, getNavHeight());
    });
  });
}

/* ----------------------------------------------------------
   9. Hero Scroll CTA
   ---------------------------------------------------------- */
function initHeroCTA() {
  const cta = document.querySelector(".hero-cta-btn");
  if (!cta) return;

  cta.addEventListener("click", (e) => {
    e.preventDefault();
    const firstSection = document.querySelector("main section");
    if (firstSection) scrollToElement(firstSection, getNavHeight());
  });
}

/* ----------------------------------------------------------
   10. Social Media Carousel
   ---------------------------------------------------------- */
function initCarousels() {
  document.querySelectorAll(".carousel").forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    if (!track) return;

    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;

    // Mouse drag
    track.addEventListener("mousedown", (e) => {
      isDown = true;
      track.classList.add("grabbing");
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });

    track.addEventListener("mouseleave", () => {
      isDown = false;
      track.classList.remove("grabbing");
    });

    track.addEventListener("mouseup", () => {
      isDown = false;
      track.classList.remove("grabbing");
    });

    track.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    });

    // Touch drag
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    }, { passive: true });

    track.addEventListener("touchmove", (e) => {
      const x = e.touches[0].pageX - track.offsetLeft;
      const walk = (x - startX) * 1.5;
      track.scrollLeft = scrollLeft - walk;
    }, { passive: true });

    // Arrow buttons
    const prevBtn = carousel.querySelector(".carousel-prev");
    const nextBtn = carousel.querySelector(".carousel-next");
    const scrollAmount = 320;

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        track.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    }
  });
}

/* ----------------------------------------------------------
   11. Mobile Navigation Toggle
   ---------------------------------------------------------- */
function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector("ul.nav-links");
  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    links.classList.toggle("open");
  });

  // Close on link click
  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      toggle.classList.remove("active");
      links.classList.remove("open");
    });
  });
}

/* ----------------------------------------------------------
   12. Social Share, Print, Invite, Text
   ---------------------------------------------------------- */
function shareToSocial(platform, url, text) {
  var encodedUrl = encodeURIComponent(url || window.location.href);
  var encodedText = encodeURIComponent(text || "Check out the OCM Education Before Participation toolkit!");
  var shareUrls = {
    facebook: "https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl + "&quote=" + encodedText,
    twitter: "https://twitter.com/intent/tweet?url=" + encodedUrl + "&text=" + encodedText,
    instagram: "https://www.instagram.com/",
    tiktok: "https://www.tiktok.com/"
  };
  if (shareUrls[platform]) {
    window.open(shareUrls[platform], "_blank", "width=600,height=500,noopener");
  }
  analytics("trackAssetDownload", "share-" + platform, "social-share");
}

function shareViaText(text, url) {
  var body = encodeURIComponent((text || "Check this out!") + " " + (url || window.location.href));
  window.open("sms:?&body=" + body);
  analytics("trackAssetDownload", "share-text", "social-share");
}

function printAsset(imageUrl, title) {
  var w = window.open("", "_blank");
  if (w) {
    w.document.write(
      "<html><head><title>" + (title || "Print") + "</title>" +
      "<style>body{margin:0;display:flex;justify-content:center;align-items:center;min-height:100vh;background:#fff;}img{max-width:100%;max-height:95vh;object-fit:contain;}</style>" +
      "</head><body><img src='" + imageUrl + "' onload='setTimeout(function(){window.print()},300)'></body></html>"
    );
    w.document.close();
  }
  analytics("trackAssetDownload", "print-" + (title || "asset"), "print");
}

function inviteFriend(subject, body, url) {
  var fullBody = (body || "I wanted to share this with you from the OCM Education Before Participation initiative.") +
    "\n\n" + (url || window.location.href) +
    "\n\nRSVP at LACountyCannabisEd.org";
  window.location.href = "mailto:?subject=" + encodeURIComponent(subject || "OCM Cannabis Education Workshop") +
    "&body=" + encodeURIComponent(fullBody);
  analytics("trackAssetDownload", "invite-friend", "email-invite");
}

function copyLink(url, btn) {
  var textToCopy = url || window.location.href;
  navigator.clipboard.writeText(textToCopy).then(function() {
    if (btn) {
      var orig = btn.getAttribute("data-tooltip");
      btn.setAttribute("data-tooltip", "Copied!");
      btn.style.background = "#34C759";
      btn.style.color = "white";
      setTimeout(function() {
        btn.setAttribute("data-tooltip", orig);
        btn.style.background = "";
        btn.style.color = "";
      }, 1500);
    }
  });
  analytics("trackAssetDownload", "copy-link", "share");
}

/* ----------------------------------------------------------
   13. Image Lightbox
   ---------------------------------------------------------- */
function initLightbox() {
  var overlay = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var closeBtn = overlay ? overlay.querySelector(".lightbox-close") : null;
  if (!overlay || !lbImg) return;

  // Click workshop flier images to enlarge
  document.querySelectorAll(".workshop-card .card-image img, .featured-card-image img").forEach(function(img) {
    img.addEventListener("click", function() {
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      overlay.classList.add("active");
    });
  });

  // Trading card fronts — long press or double-tap to enlarge (single click still flips)
  document.querySelectorAll(".trading-card-front img").forEach(function(img) {
    img.addEventListener("dblclick", function(e) {
      e.stopPropagation();
      lbImg.src = img.src;
      lbImg.alt = img.alt;
      overlay.classList.add("active");
    });
    img.style.cursor = "pointer";
    img.title = "Double-click to enlarge";
  });

  // Close on overlay click, close button, or Escape
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay || e.target === closeBtn) {
      overlay.classList.remove("active");
    }
  });
  if (closeBtn) {
    closeBtn.addEventListener("click", function() {
      overlay.classList.remove("active");
    });
  }
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") overlay.classList.remove("active");
  });
}

/* ----------------------------------------------------------
   14. Video Overlay Player
   ---------------------------------------------------------- */
function openVideoOverlay(url) {
  var overlay = document.getElementById("video-overlay");
  var iframe = document.getElementById("video-overlay-iframe");
  if (!overlay || !iframe) return;

  // Convert any youtube.com/shorts/ID or youtu.be/ID to clean embed URL
  var embedUrl = url;
  var shortsMatch = url.match(/youtube\.com\/shorts\/([a-zA-Z0-9_-]+)/);
  var youtubeMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([a-zA-Z0-9_-]+)/);
  if (shortsMatch) {
    embedUrl = "https://www.youtube.com/embed/" + shortsMatch[1] + "?autoplay=1&rel=0";
  } else if (youtubeMatch) {
    embedUrl = "https://www.youtube.com/embed/" + youtubeMatch[1] + "?autoplay=1&rel=0";
  }

  iframe.src = embedUrl;
  overlay.classList.add("active");
}

function initVideoOverlay() {
  var overlay = document.getElementById("video-overlay");
  var iframe = document.getElementById("video-overlay-iframe");
  var closeBtn = document.getElementById("video-overlay-close");
  if (!overlay) return;

  function closeOverlay() {
    overlay.classList.remove("active");
    if (iframe) iframe.src = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeOverlay);
  overlay.addEventListener("click", function(e) {
    if (e.target === overlay) closeOverlay();
  });
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && overlay.classList.contains("active")) closeOverlay();
  });

  // Convert video card links to use overlay
  document.querySelectorAll(".video-card[href*='f.io']").forEach(function(card) {
    var url = card.getAttribute("href");
    card.addEventListener("click", function(e) {
      e.preventDefault();
      openVideoOverlay(url);
    });
  });
}

window.openVideoOverlay = openVideoOverlay;
window.shareToSocial = shareToSocial;
window.shareViaText = shareViaText;
window.printAsset = printAsset;
window.inviteFriend = inviteFriend;
window.copyLink = copyLink;

/* ----------------------------------------------------------
   Initialization
   ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  initLanguageToggle();
  initScrollAnimations();
  initStickyNav();
  initTradingCards();
  initVideoModal();
  initDownloadTracking();
  initSmoothScroll();
  initScrollDots();
  initHeroCTA();
  initCarousels();
  initMobileNav();
  initLightbox();
  initVideoOverlay();
});
