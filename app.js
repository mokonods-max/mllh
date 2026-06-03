/* ============================================================
   app.js — Rose Baghdad v3.0 | Ultra-Luxury Pro Edition
   Zero-Lag · Native Drag Momentum · GPU-Composited
   ============================================================ */

'use strict';



// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function t(key) { return T[STATE.lang]?.[key] ?? key; }
function fmt(n) { return (STATE.lang === 'ar' ? n.toLocaleString('ar-IQ') : n.toLocaleString('en-US')) + ' ' + t('currency'); }
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '<i class="ri-star-fill"></i>';
  if (half) html += '<i class="ri-star-half-fill"></i>';
  return html;
}

// ─────────────────────────────────────────────────────────────
// DOM READY
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initRouter();
  initLangToggle();
  initNewsletter();
  initCheckoutPayment();
  renderCartDrawer();
  initHeroSlider();

  // Defer heavy rendering to allow hero to paint smoothly
  setTimeout(() => {
    requestAnimationFrame(() => {
      renderBestSellers();
      renderCollectionsPage();
      initDynamicShowcase();
      renderTestimonials();
      renderFAQ();
      navigateTo('home');
    });
  }, 100);
});

// ─────────────────────────────────────────────────────────────
// HERO SLIDER (UMBRA REPLICATION)
// ─────────────────────────────────────────────────────────────
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  let cur = 0;
  setInterval(() => {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
  }, 5500); // Crossfade every 5.5s
}

// ─────────────────────────────────────────────────────────────
// LANGUAGE ENGINE
// ─────────────────────────────────────────────────────────────
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    STATE.lang = STATE.lang === 'ar' ? 'en' : 'ar';
    applyTranslations();
    requestAnimationFrame(() => {
      renderBestSellers();
      renderCollectionsMultiSlider();
      updateDynamicShowcase();
      renderTestimonials();
      renderFAQ();
      renderCartDrawer();
      if (STATE.currentRoute === 'pdp' && STATE.currentPdpProduct) renderPDP(STATE.currentPdpProduct.id);
    });
  });
}

function applyTranslations() {
  const lang = STATE.lang;
  const dir  = lang === 'ar' ? 'rtl' : 'ltr';

  document.documentElement.lang = lang;
  document.documentElement.dir  = dir;

  const toggleTxt = document.getElementById('langToggleText');
  if (toggleTxt) toggleTxt.textContent = lang === 'ar' ? 'EN' : 'عربي';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang]?.[key] !== undefined) el.textContent = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (T[lang]?.[key] !== undefined) el.innerHTML = T[lang][key];
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[lang]?.[key] !== undefined) el.setAttribute('placeholder', T[lang][key]);
  });
}

// ─────────────────────────────────────────────────────────────
// SPA ROUTER (Zero CLS implementation)
// ─────────────────────────────────────────────────────────────
function initRouter() {
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-route]');
    if (!el) return;
    e.preventDefault();
    navigateTo(el.getAttribute('data-route'));
  });
}

function navigateTo(route) {
  if (STATE.currentRoute === route && route !== 'home') return;
  STATE.currentRoute = route;

  // Hide all
  document.querySelectorAll('.page-view').forEach(v => {
    v.classList.remove('active');
    v.style.display = 'none';
  });

  // Show target
  const target = document.getElementById(`view-${route}`);
  if (target) {
    target.style.display = 'block';
    // Double-rAF ensures display:block applies before opacity transition starts
    requestAnimationFrame(() => requestAnimationFrame(() => target.classList.add('active')));
  }

  // Active nav links
  document.querySelectorAll('.nav-link[data-route]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-route') === route);
  });

  window.scrollTo({ top: 0, behavior: 'instant' });
  const mm = document.getElementById('mobileMenu');
  if (mm && mm.classList.contains('open')) window.closeMobileMenu();
}

// ─────────────────────────────────────────────────────────────
// PRODUCT CARD BUILDER
// ─────────────────────────────────────────────────────────────
function buildProductCard(p) {
  const name  = STATE.lang === 'ar' ? p.nameAr  : p.nameEn;
  const badge = STATE.lang === 'ar' ? p.badgeAr : p.badgeEn;
  const price = fmt(p.price);
  const stars = renderStars(p.rating);

  return `
    <article class="product-card" onclick="openPDP('${p.id}')">
      <div class="product-card-inner">
        <div class="product-img-wrap">
          ${badge ? `<div class="product-badge">${badge}</div>` : ''}
          <img src="${p.img}" alt="${name}" loading="lazy" decoding="async">
          <div class="product-hover-cta">
            <button class="btn-add-cart" style="width:85%;"
              onclick="addToCart('${p.id}'); event.stopPropagation();"
              aria-label="${t('addToCart')}">
              <i class="ri-shopping-bag-line"></i>
              ${t('addToCart')}
            </button>
          </div>
        </div>
        <div class="product-info">
          <div style="display:flex; align-items:center; gap:6px; margin-bottom:10px;">
            <div class="stars-gold" style="display:flex;">${stars}</div>
            <span class="t-small" style="color:#6b7280;">(${p.reviews})</span>
          </div>
          <h3 class="t-body" style="color:white; font-weight:600; line-height:1.4; flex:1;">${name}</h3>
          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:16px; padding-top:16px; border-top:1px solid rgba(255,255,255,0.04);">
            <span class="price-tag">${price}</span>
            <button
              style="width:36px; height:36px; border-radius:50%; border:1px solid rgba(255,255,255,0.1); display:flex; align-items:center; justify-content:center; color:#9ca3af; transition:border-color 0.2s, color 0.2s;"
              onmouseover="this.style.borderColor='rgba(212,175,55,0.4)'; this.style.color='#D4AF37';"
              onmouseout="this.style.borderColor='rgba(255,255,255,0.1)'; this.style.color='#9ca3af';"
              onclick="addToCart('${p.id}'); event.stopPropagation();"
              aria-label="Quick Add">
              <i class="ri-add-line" style="font-size:16px;"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ─────────────────────────────────────────────────────────────
// NATIVE DRAG + AUTOPLAY SLIDER ENGINE
// ─────────────────────────────────────────────────────────────
function applySliderLogic(track, autoPlay = false) {
  if (!track) return;

  let isDown = false;
  let startX;
  let scrollLeft;
  let autoRafId;
  let resumeTimeout;
  let speed = document.dir === 'rtl' ? -0.5 : 0.5;

  const getX = e => e.type.includes('touch') ? e.touches[0].pageX : e.pageX;

  track.addEventListener('mousedown', e => {
    isDown = true;
    track.classList.add('dragging');
    startX = getX(e) - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    cancelAutoPlay();
  });
  track.addEventListener('mouseleave', () => {
    isDown = false;
    track.classList.remove('dragging');
    scheduleAutoPlay();
  });
  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('dragging');
    scheduleAutoPlay();
  });
  track.addEventListener('mousemove', e => {
    if (!isDown) return;
    e.preventDefault();
    const x = getX(e) - track.offsetLeft;
    const walk = (x - startX) * 2;
    track.scrollLeft = scrollLeft - walk;
  });

  // Touch Events for mobile
  track.addEventListener('touchstart', () => { cancelAutoPlay(); }, {passive: true});
  track.addEventListener('touchend', () => { scheduleAutoPlay(); }, {passive: true});

  // Hover Pause
  track.addEventListener('mouseenter', cancelAutoPlay);

  function scheduleAutoPlay() {
    if (!autoPlay) return;
    clearTimeout(resumeTimeout);
    resumeTimeout = setTimeout(() => {
      startAutoPlay();
    }, 2500);
  }

  function startAutoPlay() {
    cancelAutoPlay();
    speed = document.dir === 'rtl' ? -0.25 : 0.25; // Slower, premium speed
    let exactScroll = track.scrollLeft;

    function tick() {
      exactScroll += speed;
      track.scrollLeft = exactScroll;
      
      // Loop logic
      if (document.dir === 'rtl') {
        if (track.scrollLeft <= 0) {
          track.scrollLeft = track.scrollWidth - track.clientWidth;
          exactScroll = track.scrollLeft;
        }
      } else {
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) {
          track.scrollLeft = 0;
          exactScroll = 0;
        }
      }
      autoRafId = requestAnimationFrame(tick);
    }
    autoRafId = requestAnimationFrame(tick);
  }

  function cancelAutoPlay() {
    clearTimeout(resumeTimeout);
    if (autoRafId) cancelAnimationFrame(autoRafId);
    autoRafId = null;
  }

  if (autoPlay) startAutoPlay();
}

// ─────────────────────────────────────────────────────────────
// BEST SELLERS SLIDER
// ─────────────────────────────────────────────────────────────
function renderBestSellers() {
  const track = document.getElementById('bestSellersTrack');
  if (!track) return;

  const frag = document.createDocumentFragment();
  const temp = document.createElement('div');
  temp.innerHTML = STATE.products.map(p => buildProductCard(p)).join('');
  while(temp.firstChild) frag.appendChild(temp.firstChild);

  track.innerHTML = '';
  track.appendChild(frag);

  applySliderLogic(track, true);
}

// ─────────────────────────────────────────────────────────────
// COLLECTIONS MULTI-SLIDER
// ─────────────────────────────────────────────────────────────
function renderCollectionsPage() {
  const heroContainer = document.getElementById('collectionsHero');
  const gridContainer = document.getElementById('collectionsGrid');
  if (!heroContainer || !gridContainer) return;

  // 1. Render Top Hero Showcase (Random 3 products)
  const shuffled = [...STATE.products].sort(() => 0.5 - Math.random());
  const topThree = shuffled.slice(0, 3);
  
  heroContainer.innerHTML = topThree.map((p, index) => {
    const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;
    const desc = STATE.lang === 'ar' ? p.descAr : p.descEn;
    return `
      <div class="showcase-card collections-hero-card" style="animation: fadeUp ${0.5 + index * 0.2}s ease forwards; opacity: 0; transform: translateY(20px);" onclick="openPDP('${p.id}')">
        <div class="showcase-img-wrap">
          <img src="${p.img}" alt="${name}" loading="lazy">
        </div>
        <div style="display:flex; flex-direction:column; gap:16px; flex:1;">
          <h3 class="t-h2" style="color:white;">${name}</h3>
          <div class="divider-short" style="margin:0;"></div>
          <p class="t-body">${desc}</p>
          <button class="btn-gold-outline" style="align-self:flex-start; margin-top:8px;">
            ${STATE.lang === 'ar' ? 'استكشف التحفة' : 'Explore Masterpiece'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  // 2. Render Standard Grid Layout
  gridContainer.innerHTML = STATE.products.map(p => buildProductCard(p)).join('');
}

// ─────────────────────────────────────────────────────────────
// DYNAMIC SHOWCASE (Auto-refreshing card)
// ─────────────────────────────────────────────────────────────
let dynamicTimer = null;

function initDynamicShowcase() {
  updateDynamicShowcase();
  if(dynamicTimer) clearInterval(dynamicTimer);
  dynamicTimer = setInterval(cycleDynamicShowcase, 5000);
}

function cycleDynamicShowcase() {
  const container = document.getElementById('dynamicShowcaseContainer');
  if (!container) return;
  STATE.dynamicIndex = (STATE.dynamicIndex + 1) % STATE.products.length;

  container.classList.add('fading');
  container.addEventListener('transitionend', () => {
    updateDynamicShowcase();
    container.classList.remove('fading');
  }, { once: true });
}

function updateDynamicShowcase() {
  const container = document.getElementById('dynamicShowcaseContainer');
  const dotsWrap = document.getElementById('showcaseDots');
  if (!container) return;

  const p = STATE.products[STATE.dynamicIndex];
  const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;
  const desc = STATE.lang === 'ar' ? p.descAr : p.descEn;

  container.innerHTML = `
    <div class="showcase-img-wrap">
      <img src="${p.img}" alt="${name}" loading="lazy">
    </div>
    <div style="display:flex; flex-direction:column; gap:16px; flex:1;">
      <h3 class="t-h2" style="color:white;">${name}</h3>
      <div class="divider-short" style="margin:0;"></div>
      <p class="t-body">${desc}</p>
      <button onclick="openPDP('${p.id}')" class="btn-gold-outline" style="align-self:flex-start; margin-top:8px;">
        ${STATE.lang === 'ar' ? 'استكشف التحفة' : 'Explore Masterpiece'}
      </button>
    </div>
  `;

  // Update dots
  if (dotsWrap) {
    // Show only 5 dots to not overwhelm UI, moving window
    const maxDots = 5;
    let html = '';
    for(let i=0; i<maxDots; i++) {
      const active = (STATE.dynamicIndex % maxDots) === i;
      html += `<div style="width:${active?'24px':'8px'}; height:8px; border-radius:9px; background:${active?'#D4AF37':'rgba(255,255,255,0.2)'}; transition:all 0.3s;"></div>`;
    }
    dotsWrap.innerHTML = html;
  }
}

// ─────────────────────────────────────────────────────────────
// FAQ RENDERING (Accordion)
// ─────────────────────────────────────────────────────────────
function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;

  list.innerHTML = faqData.map((f, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFaq(${i})" aria-expanded="false" aria-controls="faq-ans-${i}">
        <span>${STATE.lang === 'ar' ? f.qAr : f.qEn}</span>
        <div class="faq-icon"></div>
      </button>
      <div class="faq-answer" id="faq-ans-${i}">
        <div class="faq-answer-inner">
          ${STATE.lang === 'ar' ? f.aAr : f.aEn}
        </div>
      </div>
    </div>
  `).join('');
}

window.toggleFaq = function(index) {
  const item = document.getElementById(`faq-${index}`);
  const ans  = document.getElementById(`faq-ans-${index}`);
  const btn  = item.querySelector('.faq-question');
  const isOpen = item.classList.contains('open');

  // Close all others
  document.querySelectorAll('.faq-item').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-answer').style.maxHeight = null;
    el.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
  });

  if (!isOpen) {
    item.classList.add('open');
    ans.style.maxHeight = ans.scrollHeight + "px";
    btn.setAttribute('aria-expanded', 'true');
  }
};

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS RENDERING
// ─────────────────────────────────────────────────────────────
function renderTestimonials() {
  const grid = document.getElementById('testimonialsGrid');
  if (!grid) return;

  const frag = document.createDocumentFragment();
  const temp = document.createElement('div');
  
  temp.innerHTML = testimonialsData.map(t => {
    const name = STATE.lang === 'ar' ? t.nameAr : t.nameEn;
    const loc  = STATE.lang === 'ar' ? t.locAr  : t.locEn;
    const text = STATE.lang === 'ar' ? t.textAr : t.textEn;
    const stars = renderStars(t.rating);
    const initial = name.charAt(0);

    return `
      <div class="testimonial-card" style="width:clamp(280px, 60vw, 400px); flex-shrink:0;">
        <div class="stars-gold" style="display:flex;">${stars}</div>
        <p class="testimonial-text">${text}</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${initial}</div>
          <div>
            <p class="testimonial-name">${name}</p>
            <p class="testimonial-location">${loc}</p>
          </div>
        </div>
      </div>
    `;
  }).join('');
  
  while(temp.firstChild) frag.appendChild(temp.firstChild);
  
  grid.innerHTML = '';
  grid.appendChild(frag);
  
  applySliderLogic(grid, true); // Auto-play enabled
}

// ─────────────────────────────────────────────────────────────
// PDP (PRODUCT DETAIL PAGE)
// ─────────────────────────────────────────────────────────────
function openPDP(productId) {
  const p = STATE.products.find(item => item.id === productId);
  if (!p) return;
  STATE.currentPdpProduct = p;
  STATE.pdpQuantity = 1;
  renderPDP(productId);
  navigateTo('pdp');
}

function renderPDP(productId) {
  const p = STATE.products.find(item => item.id === productId);
  if (!p) return;

  const isAr = STATE.lang === 'ar';
  const catKey = `cat${p.category.charAt(0).toUpperCase() + p.category.slice(1)}`;

  const img = document.getElementById('pdpImage');
  const source = document.getElementById('pdpSourceWebp');
  if (img) img.src = p.img;
  if (source) source.srcset = p.img;

  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };

  setTxt('pdpTitle',    isAr ? p.nameAr : p.nameEn);
  setTxt('pdpCategory', t(catKey));
  setTxt('pdpPrice',    fmt(p.price));
  setTxt('pdpDesc',     isAr ? p.descAr : p.descEn);
  setHTML('pdpStars',   renderStars(p.rating));

  const reviews = document.getElementById('pdpReviews');
  if (reviews) reviews.textContent = `(${p.reviews} ${t('reviewsLabel')})`;

  setTxt('tab-notes',     p.notes);
  setTxt('tab-base',      p.base);
  setTxt('tab-longevity', p.longevity);

  updatePdpQuantityDisplay();

  const inc = document.getElementById('pdpQtyInc');
  const dec = document.getElementById('pdpQtyDec');
  const add = document.getElementById('pdpAddToCartBtn');

  if (inc) inc.onclick = () => { STATE.pdpQuantity++; updatePdpQuantityDisplay(); };
  if (dec) dec.onclick = () => { if (STATE.pdpQuantity > 1) STATE.pdpQuantity--; updatePdpQuantityDisplay(); };
  if (add) add.onclick = () => {
    addToCart(p.id, STATE.pdpQuantity);
    STATE.pdpQuantity = 1;
    updatePdpQuantityDisplay();
  };
}

function updatePdpQuantityDisplay() {
  const el = document.getElementById('pdpQtyDisplay');
  if (el) el.textContent = STATE.pdpQuantity;
}

// ─────────────────────────────────────────────────────────────
// CART ENGINE
// ─────────────────────────────────────────────────────────────
function addToCart(productId, qty = 1) {
  const product = STATE.products.find(p => p.id === productId);
  if (!product) return;

  const existing = STATE.cart.find(i => i.product.id === productId);
  if (existing) { existing.quantity += qty; }
  else { STATE.cart.push({ product, quantity: qty }); }

  updateCartBadge();
  renderCartDrawer();
  showToast(productId);
}

function updateCartQuantity(productId, delta) {
  const item = STATE.cart.find(i => i.product.id === productId);
  if (!item) return;
  item.quantity += delta;
  if (item.quantity <= 0) STATE.cart = STATE.cart.filter(i => i.product.id !== productId);
  updateCartBadge();
  renderCartDrawer();
}

function removeFromCart(productId) {
  STATE.cart = STATE.cart.filter(i => i.product.id !== productId);
  updateCartBadge();
  renderCartDrawer();
}

function updateCartBadge() {
  const total = STATE.cart.reduce((s, i) => s + i.quantity, 0);
  const badge = document.getElementById('cartBadge');
  if (!badge) return;
  badge.textContent = total;
  if (total === 0) badge.classList.remove('visible');
  else badge.classList.add('visible');
}

function renderCartDrawer() {
  const container  = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotalDisplay');
  const totalEl    = document.getElementById('cartTotalDisplay');
  if (!container) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; text-align:center; gap:16px;">
        <i class="ri-shopping-bag-3-line" style="font-size:48px; color:rgba(255,255,255,0.06);"></i>
        <p class="t-body">${t('cartEmpty')}</p>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = fmt(0);
    if (totalEl)    totalEl.textContent    = fmt(0);
    return;
  }

  let subtotal = 0;
  const frag = document.createDocumentFragment();
  const temp = document.createElement('div');

  temp.innerHTML = STATE.cart.map(item => {
    const p = item.product;
    const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;
    subtotal += p.price * item.quantity;
    return `
      <div class="cart-item">
        <img src="${p.img}" alt="${name}" class="cart-item-img">
        <div style="flex:1; min-width:0;">
          <p class="t-small" style="font-weight:600; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:4px;">${name}</p>
          <p style="color:#D4AF37; font-size:13px; font-weight:700; margin-bottom:10px;">${fmt(p.price)}</p>
          <div style="display:flex; align-items:center; gap:10px;">
            <button class="qty-btn" onclick="updateCartQuantity('${p.id}', -1)" aria-label="Decrease">>−</button>
            <span style="font-size:12px; font-weight:600; color:white; min-width:20px; text-align:center;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${p.id}', 1)" aria-label="Increase">+</button>
          </div>
        </div>
        <button onclick="removeFromCart('${p.id}')" aria-label="Remove"
          style="color:rgba(255,255,255,0.2); background:none; border:none; cursor:pointer; font-size:20px; flex-shrink:0; transition:color 0.2s; padding:8px;"
          onmouseover="this.style.color='#f87171'" onmouseout="this.style.color='rgba(255,255,255,0.2)'">
          <i class="ri-delete-bin-6-line"></i>
        </button>
      </div>`;
  }).join('');

  while (temp.firstChild) frag.appendChild(temp.firstChild);
  container.innerHTML = '';
  container.appendChild(frag);

  if (subtotalEl) subtotalEl.textContent = fmt(subtotal);
  if (totalEl)    totalEl.textContent    = fmt(subtotal);
}

// ─────────────────────────────────────────────────────────────
// TOAST NOTIFICATION
// ─────────────────────────────────────────────────────────────
function showToast(productId) {
  const p = STATE.products.find(i => i.id === productId);
  if (!p) return;
  const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;
  const wrap = document.getElementById('toastContainer');
  if (!wrap) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <i class="ri-checkbox-circle-fill" style="color:#D4AF37; font-size:22px; flex-shrink:0;"></i>
    <div style="min-width:0;">
      <p class="t-small" style="font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${name}</p>
      <p style="font-size:10px; color:#9ca3af; margin-top:2px;">${t('addedToCart')}</p>
    </div>`;

  wrap.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s, transform 0.4s';
    toast.style.opacity = '0';
    toast.style.transform = 'translate3d(0, 10px, 0)';
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// ─────────────────────────────────────────────────────────────
// CHECKOUT PAYMENT
// ─────────────────────────────────────────────────────────────
function initCheckoutPayment() {
  const codRadio  = document.getElementById('payment_cod');
  const epRadio   = document.getElementById('payment_ep');
  const epSection = document.getElementById('epCardFormSection');
  if (!codRadio || !epRadio || !epSection) return;

  const toggle = () => {
    if (epRadio.checked) {
      epSection.style.display = 'flex';
      requestAnimationFrame(() => { epSection.style.opacity = '1'; });
    } else {
      epSection.style.opacity = '0';
      setTimeout(() => { epSection.style.display = 'none'; }, 350);
    }
  };

  codRadio.addEventListener('change', toggle);
  epRadio.addEventListener('change', toggle);

  const form = document.getElementById('checkoutBillingForm');
  if (form) form.addEventListener('submit', e => { e.preventDefault(); triggerOrderSuccess(); });
}

function triggerOrderSuccess() {
  const view = document.getElementById('view-checkout');
  if (!view) return;
  const orderNum = Math.floor(100000 + Math.random() * 900000);
  const isAr = STATE.lang === 'ar';

  view.innerHTML = `
    <div class="container" style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:80vh; text-align:center; padding:clamp(56px,10vw,96px) 0; gap:clamp(24px,4vw,32px);">
      <div style="width:112px; height:112px; border-radius:50%; border:1px solid rgba(212,175,55,0.4); display:flex; align-items:center; justify-content:center; background:radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);">
        <i class="ri-gemstone-fill" style="color:#D4AF37; font-size:48px;"></i>
      </div>
      <h1 class="t-h1" style="color:white;">
        ${isAr ? 'تهانينا! تم تسجيل طلبك الملكي' : 'Congratulations! Your Royal Order is Confirmed'}
      </h1>
      <div class="divider-short"></div>
      <p class="t-body" style="max-width:500px;">
        ${isAr
          ? `رقم طلبك الحصري هو <strong style="color:#D4AF37;">#${orderNum}</strong>. سيتواصل معك فريقنا قريباً لتأكيد موعد التوصيل.`
          : `Your reference is <strong style="color:#D4AF37;">#${orderNum}</strong>. Our team will contact you shortly to confirm delivery.`}
      </p>
      <button onclick="navigateTo('home')" class="btn-primary" style="margin-top:16px;">
        ${isAr ? 'العودة للرئيسية' : 'Return to Home'}
        <i class="ri-arrow-${isAr ? 'left' : 'right'}-line"></i>
      </button>
    </div>`;

  STATE.cart = [];
  updateCartBadge();
  renderCartDrawer();
}

// ─────────────────────────────────────────────────────────────
// NEWSLETTER
// ─────────────────────────────────────────────────────────────
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const input = form.querySelector('input[type="email"]');
    if (!input?.value) return;

    const isAr = STATE.lang === 'ar';
    const modal = document.createElement('div');
    modal.style.cssText = 'position:fixed; inset:0; z-index:400; display:flex; align-items:center; justify-content:center; padding:16px; background:rgba(5,5,5,0.92); backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px);';
    modal.innerHTML = `
      <div style="max-width:440px; width:100%; text-align:center; display:flex; flex-direction:column; gap:24px; padding:clamp(32px,5vw,48px); border-radius:var(--r-xl); border:1px solid rgba(212,175,55,0.25); background:var(--c-surface);">
        <i class="ri-mail-check-line" style="font-size:56px; color:#D4AF37; display:block; margin:0 auto;"></i>
        <h4 class="t-h3" style="color:white;">
          ${isAr ? 'مرحباً بك في الدائرة الملكية' : 'Welcome to the Royal Circle'}
        </h4>
        <p class="t-body">
          ${isAr ? 'تم تسجيل بريدك الإلكتروني بنجاح في قاعدة بياناتنا الحصرية.' : 'Your credentials have been successfully registered.'}
        </p>
        <button onclick="this.closest('[style]').remove()" class="btn-primary" style="width:100%; justify-content:center; margin-top:8px;">
          ${isAr ? 'إغلاق' : 'Close'}
        </button>
      </div>`;

    document.body.appendChild(modal);
    input.value = '';
  });
}

// ─────────────────────────────────────────────────────────────
// POLICY MODALS
// ─────────────────────────────────────────────────────────────
const policiesContent = {
  privacy: {
    ar: { title: 'سياسة الخصوصية', body: 'تلتزم دار روز بغداد بحماية خصوصيتك الملكية. نحن نجمع البيانات فقط لتحسين تجربتك وتسهيل وصول مقتنياتك بشكل آمن ومضمون.' },
    en: { title: 'Privacy Policy', body: 'Rose Baghdad is committed to protecting your privacy. We collect data solely to enhance your experience and ensure secure delivery of your acquisitions.' }
  },
  shipping: {
    ar: { title: 'سياسة الشحن', body: 'نقدم شحناً فاخراً ومؤمناً بالكامل لجميع محافظات العراق. يتم تغليف الطلبات بعناية فائقة لضمان وصولها بحالة مثالية خلال 2-5 أيام عمل.' },
    en: { title: 'Shipping Policy', body: 'We offer fully insured, luxury shipping across all Iraqi governorates. Orders are meticulously packaged to arrive in pristine condition within 2-5 business days.' }
  },
  return: {
    ar: { title: 'شروط الاسترجاع', body: 'يمكن استرجاع المقتنيات خلال ٧ أيام من الاستلام بشرط عدم فتح التغليف الملكي الأصلي للحفاظ على جودة وأصالة العطر.' },
    en: { title: 'Return Conditions', body: 'Acquisitions may be returned within 7 days of receipt, provided the royal seal and packaging remain unopened to ensure absolute purity.' }
  }
};

function openPolicy(type) {
  const isAr = STATE.lang === 'ar';
  const data = policiesContent[type]?.[isAr ? 'ar' : 'en'];
  if (!data) return;

  const titleEl = document.getElementById('policyTitle');
  const bodyEl  = document.getElementById('policyBody');
  const modal   = document.getElementById('policyModal');

  if (titleEl) titleEl.textContent = data.title;
  if (bodyEl)  bodyEl.innerHTML = `<p>${data.body}</p>`;
  if (modal)   modal.classList.add('open');
}

function closePolicy() {
  const modal = document.getElementById('policyModal');
  if (modal) modal.classList.remove('open');
}

// ─────────────────────────────────────────────────────────────
// GLOBAL EXPOSE
// ─────────────────────────────────────────────────────────────
window.addToCart          = addToCart;
window.updateCartQuantity = updateCartQuantity;
window.removeFromCart     = removeFromCart;
window.navigateTo         = navigateTo;
window.openPDP            = openPDP;
window.openPolicy         = openPolicy;
window.closePolicy        = closePolicy;
