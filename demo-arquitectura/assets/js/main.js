(function () {
  "use strict";

  var DATA_URL = "config/datos-sector.json";
  var data = null;

  function getByPath(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc == null ? acc : acc[key];
    }, obj);
  }

  function applyDataFields() {
    if (!data) return;
    document.querySelectorAll("[data-field]").forEach(function (el) {
      var value = getByPath(data, el.getAttribute("data-field"));
      if (value != null) el.textContent = value;
    });

    var wa = data.datos_contacto_placeholder && data.datos_contacto_placeholder.whatsapp;
    if (wa) {
      var waLink = document.getElementById("waLink");
      if (waLink) {
        var digits = wa.replace(/[^0-9]/g, "");
        waLink.href = "https://wa.me/" + digits + "?text=" + encodeURIComponent("Hola, me gustaría cotizar un proyecto.");
      }
    }

    document.querySelectorAll("[data-cta]").forEach(function (el) {
      if (el.textContent && !el.dataset.ctaSet) {
        el.dataset.ctaSet = "1";
        if (el.classList.contains("btn") && !el.dataset.keepText) el.textContent = data.cta_principal;
      }
    });
  }

  function buildHeroSlides() {
    var wrap = document.getElementById("heroSlides");
    var dots = document.getElementById("heroDots");
    if (!wrap || !data || !data.hero_imagenes) return;
    var imgs = data.hero_imagenes;
    imgs.forEach(function (src, i) {
      var s = document.createElement("div");
      s.className = "slide" + (i === 0 ? " active" : "");
      s.style.backgroundImage = "url('" + src + "')";
      wrap.appendChild(s);

      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-label", "Imagen " + (i + 1));
      if (i === 0) b.classList.add("active");
      b.addEventListener("click", function () { goTo(i); });
      dots.appendChild(b);
    });
    startSlideshow(imgs.length);
  }

  var current = 0;
  var timer = null;
  function startSlideshow(total) {
    if (total <= 1) return;
    timer = setInterval(function () { goTo((current + 1) % total); }, 6000);
  }
  function goTo(i) {
    var slides = document.querySelectorAll(".slide");
    var dots = document.querySelectorAll("#heroDots button");
    if (!slides.length) return;
    slides[current].classList.remove("active");
    if (dots[current]) dots[current].classList.remove("active");
    current = i;
    slides[current].classList.add("active");
    if (dots[current]) dots[current].classList.add("active");
  }

  function buildServices() {
    var grid = document.querySelector("[data-services]");
    if (!grid || !data) return;

    var icons = [
      '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 40 L24 12 L40 40"/><path d="M16 40 L24 28 L32 40"/><path d="M8 40 L40 40"/></svg>',
      '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="8" y="10" width="32" height="28" rx="1"/><path d="M8 22 L40 22"/><path d="M22 10 L22 38"/></svg>',
      '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 38 L10 18 L24 8 L38 18 L38 38"/><path d="M20 38 L20 26 L28 26 L28 38"/></svg>',
      '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="24" cy="24" r="14"/><path d="M24 10 L24 38 M10 24 L38 24"/></svg>',
      '<svg viewBox="0 0 48 48" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 38 L12 16 L24 10 L36 16 L36 38"/><path d="M12 38 L36 38"/><path d="M18 38 L18 24 L30 24 L30 38"/></svg>'
    ];

    var descriptions = [
      "Vivienda unifamiliar y multifamiliar con propuesta arquitectónica integral, materiales y memoria de obra.",
      "Locales, oficinas y retail con diseño orientado a experiencia, flujo y rentabilidad del espacio.",
      "Intervención de espacios existentes con diagnóstico previo, propuesta y dirección de obra.",
      "Acompañamiento técnico, levantamiento y supervisión para que lo construido cumpla el diseño.",
      "Diseño interior con selección de mobiliario, iluminación y paleta de materiales coherente."
    ];

    data.servicios.forEach(function (s, i) {
      var card = document.createElement("article");
      card.className = "card reveal";
      card.innerHTML =
        '<span class="card-icon">' + (icons[i % icons.length]) + "</span>" +
        '<h3 class="card-title">' + s + "</h3>" +
        '<p class="card-body">' + (descriptions[i % descriptions.length] || "") + "</p>" +
        '<span class="card-index">0' + (i + 1) + " / " + (data.servicios.length < 10 ? "0" : "") + data.servicios.length + "</span>";
      grid.appendChild(card);
    });
  }

  function buildQuotes() {
    var wrap = document.getElementById("quotes");
    if (!wrap) return;
    var items = [
      { text: "El estudio nos entregó planos claros y un cronograma real. La obra salió sin sobresaltos.", who: "Cliente residencial", tag: "Casa familiar" },
      { text: "Pasamos de cotizar por WhatsApp a tener un documento técnico. La diferencia se nota.", who: "Cliente comercial", tag: "Local retail" },
      { text: "Acompañaron cada fase, desde el brief hasta la entrega. Profesionalismo de principio a fin.", who: "Cliente reforma", tag: "Remodelación" }
    ];
    items.forEach(function (q) {
      var el = document.createElement("blockquote");
      el.className = "quote reveal";
      el.innerHTML =
        '<p class="quote-text">' + q.text + "</p>" +
        '<footer class="quote-author"><strong>' + q.who + "</strong> — " + q.tag + "</footer>";
      wrap.appendChild(el);
    });
  }

  function setupHeader() {
    var header = document.getElementById("header");
    var toggle = document.getElementById("navToggle");
    var nav = document.querySelector(".nav");
    window.addEventListener("scroll", function () {
      if (window.scrollY > 30) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    }, { passive: true });
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setupReveal() {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal, .band-head, .problem-text, .problem-card, .cta-text, .cta-form").forEach(function (el) {
      el.classList.add("reveal");
      io.observe(el);
    });
  }

  function setupForm() {
    var form = document.getElementById("contactForm");
    var note = document.getElementById("formNote");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      if (!name || !email) {
        note.textContent = "Completa nombre y email para continuar.";
        note.className = "form-note err";
        return;
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        note.textContent = "Revisa el correo, parece incompleto.";
        note.className = "form-note err";
        return;
      }
      note.textContent = "Gracias, " + name + ". Hemos recibido tu solicitud y te contactaremos pronto.";
      note.className = "form-note ok";
      form.reset();
    });
  }

  function init() {
    fetch(DATA_URL)
      .then(function (r) { return r.json(); })
      .then(function (d) {
        data = d;
        applyDataFields();
        buildHeroSlides();
        buildServices();
        buildQuotes();
        setupReveal();
      })
      .catch(function () {
        buildQuotes();
        setupReveal();
      });
    setupHeader();
    setupForm();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
