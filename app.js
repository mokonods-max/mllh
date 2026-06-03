/* ============================================================
   app.js — Rose Baghdad v2.1 | Performance Edition
   Zero-Jank · GPU-Composited · Optimized State Engine
   ============================================================ */

'use strict';

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA STATE
// ─────────────────────────────────────────────────────────────
const platformProducts = [
  {
    id: 'p1', category: 'perfumes',
    nameAr: 'عطر الروز البغدادي الملكي',
    nameEn: 'Royal Baghdadi Rose Perfume',
    descAr: 'مزيج حصري يبدأ بنفحات البرغموت والزعفران، وينتقل ببطء إلى قلب من الورد الطائفي النادر، ليترك أثراً عميقاً من العود الكمبودي المعتق.',
    descEn: 'Majestic royal notes — heritage natural rose fused with the finest premium Oud.',
    price: 185000, rating: 5, reviews: 48,
    img: 'The visual identity of Rose Baghdad/Links/Parfume_02_03.png',
    badgeAr: 'الأكثر مبيعاً', badgeEn: 'Best Seller',
    notes: 'برغموت، زعفران، ورد طائفي',
    base: 'عود كمبودي معتق، عنبر دافئ',
    longevity: 'Extrait de Parfum - يدوم لأكثر من ٢٤ ساعة'
  },
  {
    id: 'p2', category: 'perfumes',
    nameAr: 'إكسير بغداد الفاخر',
    nameEn: 'Baghdad Luxury Elixir',
    descAr: 'مزيج عطري فاخر من التوابل النادرة والهيل مع قاعدة دافئة من العنبر والمسك.',
    descEn: 'A luxury aromatic blend of rare spices and cardamom with a warm amber-musk base.',
    price: 195000, rating: 4.9, reviews: 32,
    img: 'The visual identity of Rose Baghdad/Links/Parfume_02_04.png',
    badgeAr: 'حصري', badgeEn: 'Exclusive',
    notes: 'هيل، توابل شرقية',
    base: 'عنبر، مسك طبيعي',
    longevity: 'Eau de Parfum Intense - يدوم حتى ١٨ ساعة'
  },
  {
    id: 'p3', category: 'incense',
    nameAr: 'بخور الجوري المعتق',
    nameEn: 'Aged Damascus Incense',
    descAr: 'قطع بخور مغطاة بأرقى الزيوت العطرية والمسك لتملأ مساحتك بروح الشرق.',
    descEn: 'Incense chips saturated in elite essential oils to elevate your oriental atmosphere.',
    price: 95000, rating: 5, reviews: 55,
    img: 'The visual identity of Rose Baghdad/Links/Cosmetic Jar Mockup 04.png',
    badgeAr: 'نادر', badgeEn: 'Rare',
    notes: 'ورد جوري، زيوت عطرية',
    base: 'خشب العود، مسك',
    longevity: 'انتشار قوي يدوم لساعات في الأرجاء'
  },
  {
    id: 'p4', category: 'incense',
    nameAr: 'بخور دقة العود الملكية',
    nameEn: 'Royal Oud Powder Incense',
    descAr: 'عود كمبودي فاخر مطحون بدقة مع مزيج دهن الورد الدمشقي العتيق.',
    descEn: 'Elite Cambodian oud powder blended with vintage Damascene rose essence.',
    price: 120000, rating: 4.8, reviews: 19,
    img: 'The visual identity of Rose Baghdad/Links/Cosmetic Jar Mockup 05.png',
    badgeAr: '', badgeEn: '',
    notes: 'دهن ورد دمشقي عتيق',
    base: 'عود كمبودي فاخر مطحون',
    longevity: 'ثبات استثنائي يعطر المكان بعمق'
  },
  {
    id: 'p5', category: 'giftsets',
    nameAr: 'مجموعة روز بغداد الملكية',
    nameEn: 'Rose Baghdad Royal Gift Set',
    descAr: 'مجموعة حصرية تضم العطر الفاخر وبخور الجوري مغلفة بعلبة مخملية فاخرة.',
    descEn: 'Exclusive set: royal perfume and aged incense in a premium velvet packaging.',
    price: 290000, rating: 5, reviews: 74,
    img: 'The visual identity of Rose Baghdad/Links/Shopping Bag Mock-2up.png',
    badgeAr: 'هدية فاخرة', badgeEn: 'Luxury Gift',
    notes: 'تجمع بين النفحات الشرقية والغربية',
    base: 'أصالة العود والمسك والورد',
    longevity: 'مجموعة متكاملة تمنحك حضوراً يدوم'
  },
];

// ─────────────────────────────────────────────────────────────
// GLOBAL STATE (Reactive, minimal)
// ─────────────────────────────────────────────────────────────
const STATE = {
  lang: 'ar',
  currentRoute: 'home',
  cart: [],
  products: platformProducts,
  currentPdpProduct: null,
  pdpQuantity: 1,
  dynamicIndex: 0,
};

// ─────────────────────────────────────────────────────────────
// TRANSLATIONS
// ─────────────────────────────────────────────────────────────
const T = {
  ar: {
    announcementText:   'توصيل ملكي فاخر ومؤمن بالكامل لجميع المحافظات العراقية',
    navHome:            'الرئيسية',
    navCollections:     'المجموعة الكاملة',
    navStory:           'قصتنا',
    navCheckout:        'إتمام الطلب',
    heroSubtitle:       'تأسست عام ٢٠٢٢ — رمز الرقي والأصالة',
    heroTitle:          'حيث يغدو<br><em class="gold-gradient-text" style="font-style:normal;">العطر</em><br>فناً أصيلاً',
    heroDesc:           'نصنع من أجود المكونات الطبيعية والزيوت النادرة عطوراً وبخوراً تليق بأصحاب الذوق الرفيع.',
    heroCTA:            'اكتشف المجموعة <i class="ri-arrow-left-line" style="font-size:15px;"></i>',
    statProducts:       'تركيبة فريدة',
    statRating:         'تقييم العملاء',
    statYear:           'سنة التأسيس',
    bestSellersEyebrow: 'الأكثر طلباً',
    bestSellersTitle:   'الإصدارات الأكثر طلباً',
    dynamicEyebrow:     'اختيارات ملكية',
    dynamicTitle:       'اكتشف عوالم جديدة',
    dragToExplore:      'اسحب للاستكشاف',
    storyEyebrow:       'قصتنا',
    storyTitle:         'تراث يرويه<br><em class="gold-gradient-text" style="font-style:normal;">العطر</em>',
    storySubtitle:      'رحلتنا بدأت في عام ٢٠٢٢ من قلب بغداد الشامخة.',
    storyP1:            'في قلب بغداد، حيث يلتقي التراث الشرقي العريق بروح الحداثة، ولدت علامة "روز بغداد" في عام ٢٠٢٢.',
    storyP2:            'كل قطرة عطر أو قطعة بخور ننتجها تمر بعملية تعتيق يدوي دقيقة تدوم لشهور.',
    storyQuote:         '"العطر ليس مجرد رائحة، بل هو هوية وذاكرة وفن."',
    storyReadMore:      'اقرأ القصة الكاملة <i class="ri-arrow-left-line"></i>',
    storyCommitmentTitle: 'التزامنا بالفخامة والتميز المطلق',
    storyCommitmentDesc:  'تلتزم دار روز بغداد بتقديم أعلى مستويات الخدمة المخصصة لزبائننا المميزين.',
    value1Title:        'الحرفية البغدادية',
    value1Desc:         'تعتيق يدوي ودمج بين تقنيات الماضي وحداثة الحاضر لتقديم تحف عطرية لا تضاهى.',
    value2Title:        'المكونات النادرة',
    value2Desc:         'استخدام أجود أنواع العود الكمبودي والورد الدمشقي والطائفي بتركيزات عالية.',
    newsletterEyebrow:  'الدائرة الحصرية',
    newsletterTitle:    'انضم إلى مجتمع روز بغداد',
    newsletterDesc:     'كن أول من يعلم بالإصدارات الحصرية والخصومات النادرة.',
    newsletterPlaceholder: 'بريدك الإلكتروني الملكي...',
    newsletterBtn:      'الاشتراك',
    addToCart:          'أضف إلى السلة',
    addedToCart:        'تمت الإضافة للسلة',
    cartTitle:          'سلة المقتنيات الملكية',
    cartEmpty:          'سلتك فارغة حالياً. ابدأ باستكشاف عطورنا.',
    cartSubtotal:       'المجموع الفرعي',
    cartShipping:       'الشحن الملكي',
    cartFree:           'مجاني ومؤمن',
    cartTotal:          'الإجمالي',
    cartCheckoutBtn:    'إتمام الطلب الملكي',
    checkoutTitle:      'إتمام الطلب الملكي',
    checkoutBillingDetails: 'معلومات الشحن والتوصيل',
    fullName:           'الاسم الكامل',
    phone:              'رقم الهاتف',
    city:               'المحافظة والمنطقة',
    address:            'العنوان التفصيلي',
    deliveryNotes:      'ملاحظات التوصيل',
    paymentMethod:      'طريقة الدفع',
    paymentCOD:         'الدفع عند الاستلام (COD)',
    paymentEP:          'الدفع الإلكتروني',
    cardHolderName:     'اسم صاحب البطاقة',
    cardNumber:         'رقم البطاقة',
    cardExpiry:         'تاريخ الانتهاء',
    cardCVV:            'رمز الأمان',
    placeOrderBtn:      'تأكيد وشحن الطلب الملكي',
    footerLogoSub:      'عطور وبخور ترسم ملامح الرفاهية والأصالة الشرقية. دار روز بغداد منذ عام ٢٠٢٢.',
    footerSecLinks:     'روابط هامة',
    footerPolicies:     'السياسات',
    polPrivacy:         'سياسة الخصوصية',
    polShipping:        'سياسة الشحن',
    polReturn:          'شروط الاسترجاع',
    footerCopyright:    '© ٢٠٢٦ روز بغداد لعطور النخبة والبخور. جميع الحقوق محفوظة.',
    currency:           'د.ع',
    reviewsLabel:       'تقييم',
    backToHome:         'العودة',
    pdpTabNotes:        'المكونات العطرية',
    pdpTabBase:         'النوتات الأساسية',
    pdpTabLongevity:    'ثبات العطر',
    pdpAddToCart:       'إضافة للسلة الملكية',
    catPerfumes:        'العطور الفاخرة',
    catIncense:         'البخور الملكي',
    catGiftsets:        'مجموعات الهدايا',
    catMusk:            'المسك والدهن الحصري'
  },
  en: {
    announcementText:   'Complimentary royal insured shipping across all Iraqi governorates',
    navHome:            'Home',
    navCollections:     'All Collections',
    navStory:           'Our Story',
    navCheckout:        'Checkout',
    heroSubtitle:       'Established 2022 — The Icon of Prestige & Authenticity',
    heroTitle:          'Where <em class="gold-gradient-text" style="font-style:normal;">Perfume</em><br>Becomes a Fine Art',
    heroDesc:           'Crafted from the finest natural ingredients and rarest essential oils — a unique royal experience from historic Baghdad.',
    heroCTA:            'Discover Collection <i class="ri-arrow-right-line" style="font-size:15px;"></i>',
    statProducts:       'Unique Compositions',
    statRating:         'Client Rating',
    statYear:           'Year Founded',
    bestSellersEyebrow: 'Most Sought After',
    bestSellersTitle:   'Our Best Sellers',
    dynamicEyebrow:     'Royal Selections',
    dynamicTitle:       'Discover New Worlds',
    dragToExplore:      'Drag to Explore',
    storyEyebrow:       'Our Story',
    storyTitle:         'Heritage Told in<br><em class="gold-gradient-text" style="font-style:normal;">Scent</em>',
    storySubtitle:      'Our journey began in 2022 from the majestic heart of Baghdad.',
    storyP1:            'In the grand heart of Baghdad, where heritage meets modernity, Rose Baghdad was born in 2022.',
    storyP2:            'We traverse continents sourcing the purest Cambodia Oud, rarest Taif Rose, and Damascus Rose oils.',
    storyQuote:         '"Perfume is more than a scent; it is identity, memory, and art."',
    storyReadMore:      'Read the Full Story <i class="ri-arrow-right-line"></i>',
    storyCommitmentTitle: 'Our Absolute Commitment to Elite Luxury',
    storyCommitmentDesc:  'Rose Baghdad guarantees the highest bespoke standards — from raw sourcing to complimentary delivery.',
    value1Title:        'Baghdadi Craftsmanship',
    value1Desc:         'Hand-aged artistry merging ancient techniques with modern excellence.',
    value2Title:        'Rare Ingredients',
    value2Desc:         'Finest Cambodian Oud, Damascene, and Taif roses in highly concentrated forms.',
    newsletterEyebrow:  'The Exclusive Circle',
    newsletterTitle:    'Join the Rose Baghdad Circle',
    newsletterDesc:     'Be first to access private reserves, royal launches, and elite rewards.',
    newsletterPlaceholder: 'Enter your royal email...',
    newsletterBtn:      'Subscribe',
    addToCart:          'Add to Cart',
    addedToCart:        'Added to Cart',
    cartTitle:          'Royal Shopping Cart',
    cartEmpty:          'Your cart is empty. Begin exploring our royal creations.',
    cartSubtotal:       'Subtotal',
    cartShipping:       'Royal Shipping',
    cartFree:           'Complimentary & Insured',
    cartTotal:          'Grand Total',
    cartCheckoutBtn:    'Proceed to Royal Checkout',
    checkoutTitle:      'Royal Checkout',
    checkoutBillingDetails: 'Shipping & Delivery Details',
    fullName:           'Full Name',
    phone:              'Phone Number',
    city:               'City & Governorate',
    address:            'Full Physical Address',
    deliveryNotes:      'Delivery Instructions',
    paymentMethod:      'Payment Method',
    paymentCOD:         'Cash on Delivery (COD)',
    paymentEP:          'Electronic Payment',
    cardHolderName:     'Cardholder Name',
    cardNumber:         'Card Number',
    cardExpiry:         'Expiration Date',
    cardCVV:            'Security Code (CVV)',
    placeOrderBtn:      'Confirm & Dispatch Royal Order',
    footerLogoSub:      'Fragrances defining Eastern luxury. Rose Baghdad since 2022.',
    footerSecLinks:     'Quick Links',
    footerPolicies:     'Policies',
    polPrivacy:         'Privacy Policy',
    polShipping:        'Shipping Policy',
    polReturn:          'Return Conditions',
    footerCopyright:    '© 2026 Rose Baghdad Elite Perfumes. All Rights Reserved.',
    currency:           'IQD',
    reviewsLabel:       'reviews',
    backToHome:         'Return',
    pdpTabNotes:        'Aromatic Notes',
    pdpTabBase:         'Base Notes',
    pdpTabLongevity:    'Scent Longevity',
    pdpAddToCart:       'Add to Royal Cart',
    catPerfumes:        'Luxury Perfumes',
    catIncense:         'Royal Incense',
    catGiftsets:        'Curated Gift Sets',
    catMusk:            'Exclusive Musk & Essence'
  },
};

// ─────────────────────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────────────────────
function t(key) {
  return T[STATE.lang]?.[key] ?? key;
}

function fmt(n) {
  if (STATE.lang === 'ar') return n.toLocaleString('ar-IQ') + ' ' + t('currency');
  return n.toLocaleString('en-US') + ' ' + t('currency');
}

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

  // Defer heavy rendering until after first paint
  requestAnimationFrame(() => {
    renderBestSellers();
    renderCollectionsMultiSlider();
    initDynamicShowcase();
    navigateTo('home');
  });
});

// ─────────────────────────────────────────────────────────────
// LANGUAGE ENGINE
// ─────────────────────────────────────────────────────────────
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (!btn) return;
  btn.addEventListener('click', () => {
    STATE.lang = STATE.lang === 'ar' ? 'en' : 'ar';
    applyTranslations();

    // Rebuild dynamic content in background
    requestAnimationFrame(() => {
      renderBestSellers();
      renderCollectionsMultiSlider();
      updateDynamicShowcase();
      renderCartDrawer();
      if (STATE.currentRoute === 'pdp' && STATE.currentPdpProduct) {
        renderPDP(STATE.currentPdpProduct.id);
      }
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

  // Batch DOM reads, then batch DOM writes
  const i18nEls = document.querySelectorAll('[data-i18n]');
  const placeholderEls = document.querySelectorAll('[data-i18n-placeholder]');

  i18nEls.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (T[lang]?.[key] !== undefined) el.innerHTML = T[lang][key];
  });

  placeholderEls.forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[lang]?.[key] !== undefined) el.setAttribute('placeholder', T[lang][key]);
  });
}

// ─────────────────────────────────────────────────────────────
// SPA ROUTER — FIXED: proper display:none for zero CLS
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

  // Hide all: remove transitions during teardown
  document.querySelectorAll('.page-view').forEach(v => {
    v.classList.remove('active');
    v.style.display = 'none';
  });

  // Show target: staged to ensure transition fires
  const target = document.getElementById(`view-${route}`);
  if (target) {
    target.style.display = 'block';
    // Double-rAF ensures display:block takes effect before transition starts
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        target.classList.add('active');
      });
    });
  }

  // Update nav active states
  document.querySelectorAll('[data-route]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-route') === route);
  });

  window.scrollTo({ top: 0, behavior: 'instant' }); // 'instant' avoids jank
  document.getElementById('mobileMenu')?.style.setProperty('display', 'none');
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
    <div class="product-card" style="min-width:280px; max-width:280px;" onclick="openPDP('${p.id}')">
      <div class="product-card-inner">
        <div class="product-img-wrap">
          ${badge ? `<div class="product-badge">${badge}</div>` : ''}
          <img src="${p.img}" alt="${name}" loading="lazy" width="280" height="350" style="display:block;">
          <div class="product-hover-overlay">
            <button class="btn-add-cart" style="width:82%;"
              onclick="addToCart('${p.id}'); event.stopPropagation();">
              <i class="ri-shopping-bag-line"></i>
              ${t('addToCart')}
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="stars-gold" style="display:flex; gap:2px; margin-bottom:8px;">
            ${stars}
            <span style="color:#4b5563; font-size:10px; margin-inline-start:8px;">(${p.reviews})</span>
          </div>
          <h3 style="font-size:13px; font-weight:600; color:white; margin-bottom:8px; line-height:1.45; flex:1;">${name}</h3>
          <div style="display:flex; align-items:center; justify-content:space-between; margin-top:12px; padding-top:12px; border-top:1px solid rgba(255,255,255,0.04);">
            <span class="price-tag">${price}</span>
            <button
              style="width:34px; height:34px; border-radius:50%; border:1px solid rgba(255,255,255,0.08); display:flex; align-items:center; justify-content:center; color:#6b7280; background:transparent; cursor:pointer; transition:border-color 0.2s, color 0.2s;"
              onmouseover="this.style.borderColor='rgba(212,175,55,0.4)'; this.style.color='#D4AF37';"
              onmouseout="this.style.borderColor='rgba(255,255,255,0.08)'; this.style.color='#6b7280';"
              onclick="addToCart('${p.id}'); event.stopPropagation();">
              <i class="ri-add-line" style="font-size:14px;"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// DRAG & SWIPE ENGINE — FIXED: RAF-throttled, momentum scroll
// ─────────────────────────────────────────────────────────────
function applyDragAndSwipe(track, autoPlay = false) {
  if (!track) return;

  let isDown    = false;
  let startX    = 0;
  let scrollLeft = 0;
  let velocity  = 0;
  let lastX     = 0;
  let rafId     = null;
  let autoRafId = null;

  const getX = e => e.type.startsWith('touch') ? e.touches[0].pageX : e.pageX;

  function onStart(e) {
    isDown = true;
    track.classList.add('dragging');
    startX     = getX(e) - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    lastX      = getX(e);
    velocity   = 0;
    if (autoPlay) cancelAutoPlay();
    cancelAnimationFrame(rafId);
  }

  function onEnd() {
    if (!isDown) return;
    isDown = false;
    track.classList.remove('dragging');
    // Momentum scroll
    function momentum() {
      velocity *= 0.94;
      if (Math.abs(velocity) < 0.4) { if (autoPlay) startAutoPlay(); return; }
      track.scrollLeft += velocity;
      rafId = requestAnimationFrame(momentum);
    }
    rafId = requestAnimationFrame(momentum);
  }

  function onMove(e) {
    if (!isDown) return;
    if (!e.type.startsWith('touch')) e.preventDefault();
    const x     = getX(e) - track.offsetLeft;
    const walk  = (x - startX) * 1.5;
    velocity    = getX(e) - lastX;
    lastX       = getX(e);
    track.scrollLeft = scrollLeft - walk;
  }

  track.addEventListener('mousedown',  onStart);
  track.addEventListener('mouseup',    onEnd);
  track.addEventListener('mouseleave', onEnd);
  track.addEventListener('mousemove',  onMove);
  track.addEventListener('touchstart', onStart, { passive: true });
  track.addEventListener('touchend',   onEnd,   { passive: true });
  track.addEventListener('touchmove',  onMove,  { passive: true });

  // FIXED: AutoPlay via rAF instead of setInterval (prevents thread blocking)
  function startAutoPlay() {
    cancelAutoPlay();
    const speed = document.dir === 'rtl' ? -0.8 : 0.8;
    function tick() {
      track.scrollLeft += speed;
      // Infinite loop: reset at edge
      if (document.dir === 'rtl') {
        if (track.scrollLeft <= 0) track.scrollLeft = track.scrollWidth - track.clientWidth;
      } else {
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 2) track.scrollLeft = 0;
      }
      autoRafId = requestAnimationFrame(tick);
    }
    autoRafId = requestAnimationFrame(tick);
  }

  function cancelAutoPlay() {
    if (autoRafId) cancelAnimationFrame(autoRafId);
    autoRafId = null;
  }

  if (autoPlay) startAutoPlay();

  // Pause autoplay on visibility change
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAutoPlay();
    else if (autoPlay && !isDown) startAutoPlay();
  });
}

// ─────────────────────────────────────────────────────────────
// BEST SELLERS SLIDER
// ─────────────────────────────────────────────────────────────
function renderBestSellers() {
  const track = document.getElementById('bestSellersTrack');
  if (!track) return;

  // Use DocumentFragment for batch DOM write
  const frag = document.createDocumentFragment();
  const temp = document.createElement('div');
  temp.innerHTML = STATE.products.map(p => buildProductCard(p)).join('');
  while (temp.firstChild) frag.appendChild(temp.firstChild);

  track.innerHTML = '';
  track.appendChild(frag);

  applyDragAndSwipe(track, true);
}

// ─────────────────────────────────────────────────────────────
// COLLECTIONS MULTI-SLIDER
// FIXED: DocumentFragment batch write, lazy-applied dragSwipe
// ─────────────────────────────────────────────────────────────
function renderCollectionsMultiSlider() {
  const container = document.getElementById('collectionsContainer');
  if (!container) return;

  const categories = [
    { id: 'perfumes',  i18nKey: 'catPerfumes' },
    { id: 'incense',   i18nKey: 'catIncense'  },
    { id: 'giftsets',  i18nKey: 'catGiftsets' },
    { id: 'musk',      i18nKey: 'catMusk'     },
  ];

  const frag = document.createDocumentFragment();

  categories.forEach(cat => {
    const products = STATE.products.filter(p => p.category === cat.id);
    if (products.length === 0) return;

    const section = document.createElement('div');
    section.style.cssText = 'padding:0 0 8px 0;';

    // Header
    const header = document.createElement('div');
    header.className = 'collection-section-header';
    header.innerHTML = `
      <i class="ri-gem-line" style="color:#D4AF37; font-size:18px; flex-shrink:0;"></i>
      <h2>${t(cat.i18nKey)}</h2>
    `;

    // Track wrapper
    const wrapper = document.createElement('div');
    wrapper.style.cssText = 'overflow:hidden; margin:0 -24px; padding:0 24px;';

    const track = document.createElement('div');
    track.className = 'carousel-track';
    track.id = `track-${cat.id}`;
    track.innerHTML = products.map(p => buildProductCard(p)).join('');

    wrapper.appendChild(track);
    section.appendChild(header);
    section.appendChild(wrapper);
    frag.appendChild(section);
  });

  container.innerHTML = '';
  container.appendChild(frag);

  // Apply drag/swipe after DOM is ready
  requestAnimationFrame(() => {
    categories.forEach(cat => {
      const track = document.getElementById(`track-${cat.id}`);
      if (track) applyDragAndSwipe(track, false);
    });
  });
}

// ─────────────────────────────────────────────────────────────
// DYNAMIC CURATION SHOWCASE
// FIXED: opacity via CSS transition (not JS setInterval)
// ─────────────────────────────────────────────────────────────
let dynamicTimer = null;

function initDynamicShowcase() {
  updateDynamicShowcase();
  dynamicTimer = setInterval(cycleDynamicShowcase, 5000);
}

function cycleDynamicShowcase() {
  const container = document.getElementById('dynamicShowcaseContainer');
  if (!container) return;
  STATE.dynamicIndex = (STATE.dynamicIndex + 1) % STATE.products.length;

  container.classList.add('fading');
  // Listen for transitionend instead of setTimeout for accuracy
  container.addEventListener('transitionend', () => {
    updateDynamicShowcase();
    container.classList.remove('fading');
  }, { once: true });
}

function updateDynamicShowcase() {
  const container = document.getElementById('dynamicShowcaseContainer');
  if (!container) return;

  const p    = STATE.products[STATE.dynamicIndex % STATE.products.length];
  const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;
  const desc = STATE.lang === 'ar' ? p.descAr  : p.descEn;
  const dir  = STATE.lang === 'ar' ? 'rtl' : 'ltr';

  container.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:center; width:280px; height:240px; flex-shrink:0;">
      <img src="${p.img}" alt="${name}" loading="lazy"
        style="height:100%; width:auto; object-fit:contain; filter:drop-shadow(0 16px 32px rgba(0,0,0,0.75));">
    </div>
    <div style="display:flex; flex-direction:column; gap:14px; max-width:380px;" dir="${dir}">
      <h3 style="font-family:'Amiri',Georgia,serif; font-size:clamp(1.4rem,3vw,2rem); color:white; line-height:1.3;">${name}</h3>
      <div style="width:40px; height:1px; background:linear-gradient(90deg,transparent,#D4AF37,transparent);"></div>
      <p style="color:#9ca3af; font-size:13px; line-height:1.75;">${desc}</p>
      <button onclick="openPDP('${p.id}')"
        class="btn-ghost"
        style="align-self:flex-start; border-color:rgba(212,175,55,0.4); color:#D4AF37;">
        ${STATE.lang === 'ar' ? 'استكشف التحفة' : 'Explore Masterpiece'}
      </button>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// PRODUCT DETAIL PAGE (PDP)
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
  if (img && img.src !== p.img) img.src = p.img;

  const setTxt = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setHTML = (id, val) => { const el = document.getElementById(id); if (el) el.innerHTML = val; };

  setTxt('pdpTitle',    isAr ? p.nameAr : p.nameEn);
  setTxt('pdpCategory', t(catKey));
  setTxt('pdpPrice',    fmt(p.price));
  setTxt('pdpDesc',     isAr ? p.descAr : p.descEn);
  setHTML('pdpStars',   renderStars(p.rating));

  const reviews = document.getElementById('pdpReviews');
  if (reviews) reviews.textContent = `(${p.reviews} ${t('reviewsLabel')})`;

  // Tab content
  setTxt('tab-notes',     p.notes);
  setTxt('tab-base',      p.base);
  setTxt('tab-longevity', p.longevity);

  updatePdpQuantityDisplay();

  // Assign button handlers cleanly
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
  if (existing) {
    existing.quantity += qty;
  } else {
    STATE.cart.push({ product, quantity: qty });
  }

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
  badge.style.transform = total === 0 ? 'scale(0)' : 'scale(1)';
}

function renderCartDrawer() {
  const container  = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotalDisplay');
  const totalEl    = document.getElementById('cartTotalDisplay');
  if (!container) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; padding:64px 0; text-align:center; gap:12px;">
        <i class="ri-shopping-bag-3-line" style="font-size:40px; color:rgba(255,255,255,0.08);"></i>
        <p style="font-size:12px; color:#374151;">${t('cartEmpty')}</p>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = fmt(0);
    if (totalEl)    totalEl.textContent    = fmt(0);
    return;
  }

  let subtotal = 0;
  // Build with DocumentFragment for single reflow
  const frag = document.createDocumentFragment();
  const temp = document.createElement('div');

  temp.innerHTML = STATE.cart.map(item => {
    const p = item.product;
    const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;
    subtotal += p.price * item.quantity;
    return `
      <div class="cart-item-row">
        <img src="${p.img}" alt="${name}" class="cart-item-thumb">
        <div style="flex:1; min-width:0;">
          <p style="font-size:12px; font-weight:600; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; margin-bottom:4px;">${name}</p>
          <p style="color:#D4AF37; font-size:12px; font-weight:700; margin-bottom:10px;">${fmt(p.price)}</p>
          <div style="display:flex; align-items:center; gap:10px;">
            <button class="qty-btn" onclick="updateCartQuantity('${p.id}', -1)">−</button>
            <span style="font-size:12px; font-weight:600; color:white; min-width:20px; text-align:center;">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${p.id}', 1)">+</button>
          </div>
        </div>
        <button onclick="removeFromCart('${p.id}')"
          style="color:rgba(255,255,255,0.18); background:none; border:none; cursor:pointer; font-size:18px; flex-shrink:0; transition:color 0.2s; padding:4px;"
          onmouseover="this.style.color='#f87171'" onmouseout="this.style.color='rgba(255,255,255,0.18)'">
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
  toast.className = 'toast-notify';
  toast.style.pointerEvents = 'auto';
  toast.innerHTML = `
    <i class="ri-checkbox-circle-fill" style="color:#D4AF37; font-size:20px; flex-shrink:0;"></i>
    <div style="min-width:0;">
      <p style="font-size:12px; font-weight:700; color:white; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${name}</p>
      <p style="font-size:10px; color:#6b7280;">${t('addedToCart')}</p>
    </div>`;

  wrap.appendChild(toast);

  // GPU-composited fade out
  setTimeout(() => {
    toast.style.transition = 'opacity 0.4s, transform 0.4s';
    toast.style.opacity = '0';
    toast.style.transform = 'translate3d(0, 10px, 0)';
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// ─────────────────────────────────────────────────────────────
// CHECKOUT PAYMENT TOGGLE
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
      setTimeout(() => { epSection.style.display = 'none'; }, 300);
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
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; min-height:80vh; text-align:center; padding:40px 24px; gap:28px;">
      <div style="width:96px; height:96px; border-radius:50%; border:1px solid rgba(212,175,55,0.3); display:flex; align-items:center; justify-content:center; background:radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);">
        <i class="ri-gemstone-fill" style="color:#D4AF37; font-size:40px;"></i>
      </div>
      <h1 style="font-family:'Amiri',Georgia,serif; font-size:clamp(1.8rem,4vw,2.8rem); color:white;">
        ${isAr ? 'تهانينا! تم تسجيل طلبك الملكي' : 'Congratulations! Your Royal Order is Confirmed'}
      </h1>
      <div style="width:48px; height:1px; background:linear-gradient(90deg,transparent,#D4AF37,transparent);"></div>
      <p style="color:#9ca3af; font-size:14px; max-width:440px; line-height:1.8;">
        ${isAr
          ? `رقم طلبك الحصري هو <strong style="color:#D4AF37;">#${orderNum}</strong>. سيتواصل معك فريقنا قريباً لتأكيد موعد التوصيل.`
          : `Your reference is <strong style="color:#D4AF37;">#${orderNum}</strong>. Our team will contact you shortly to confirm delivery.`}
      </p>
      <button onclick="navigateTo('home')" class="btn-hero" style="margin-top:8px;">
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
    modal.style.cssText = 'position:fixed; inset:0; z-index:400; display:flex; align-items:center; justify-content:center; padding:16px; background:rgba(5,5,5,0.9); backdrop-filter:blur(12px);';
    modal.innerHTML = `
      <div style="max-width:420px; width:100%; text-align:center; display:flex; flex-direction:column; gap:20px; padding:40px 36px; border-radius:24px; border:1px solid rgba(212,175,55,0.2); background:rgba(20,18,14,0.98);">
        <i class="ri-mail-check-line" style="font-size:48px; color:#D4AF37; display:block; margin:0 auto;"></i>
        <h4 style="font-family:'Amiri',Georgia,serif; font-size:24px; color:white;">
          ${isAr ? 'مرحباً بك في الدائرة الملكية' : 'Welcome to the Royal Circle'}
        </h4>
        <p style="color:#6b7280; font-size:12px; line-height:1.7;">
          ${isAr ? 'تم تسجيل بريدك الإلكتروني بنجاح في قاعدة بياناتنا الحصرية.' : 'Your credentials have been successfully registered.'}
        </p>
        <button onclick="this.closest('[style]').remove()" class="btn-hero" style="width:100%; justify-content:center;">
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
  const isAr   = STATE.lang === 'ar';
  const data   = policiesContent[type]?.[isAr ? 'ar' : 'en'];
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
