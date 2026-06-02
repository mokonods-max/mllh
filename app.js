/* ============================================================
   app.js — Rose Baghdad | Cinematic Luxury SPA Engine
   Supreme Front-End Architecture | Full Interactive Logic
   ============================================================ */

'use strict';

// ─────────────────────────────────────────────────────────────
// FUTURE-PROOF DATA STATE ARCHITECTURE
// ─────────────────────────────────────────────────────────────
const platformProducts = [
  {
    id: 'p1',
    category: 'perfumes',
    nameAr: 'عطر الروز البغدادي الملكي',
    nameEn: 'Royal Baghdadi Rose Perfume',
    descAr: 'مزيج حصري يبدأ بنفحات البرغموت والزعفران، وينتقل ببطء إلى قلب من الورد الطائفي النادر، ليترك أثراً عميقاً من العود الكمبودي المعتق.',
    descEn: 'Majestic royal notes — heritage natural rose fused with the finest premium Oud.',
    price: 185000,
    rating: 5,
    reviews: 48,
    img: 'The visual identity of Rose Baghdad/Links/Parfume_02_03.png',
    badgeAr: 'الأكثر مبيعاً',
    badgeEn: 'Best Seller',
    notes: 'برغموت، زعفران، ورد طائفي',
    base: 'عود كمبودي معتق، عنبر دافئ',
    longevity: 'Extrait de Parfum - يدوم لأكثر من ٢٤ ساعة'
  },
  {
    id: 'p2',
    category: 'perfumes',
    nameAr: 'إكسير بغداد الفاخر',
    nameEn: 'Baghdad Luxury Elixir',
    descAr: 'مزيج عطري فاخر من التوابل النادرة والهيل مع قاعدة دافئة من العنبر والمسك.',
    descEn: 'A luxury aromatic blend of rare spices and cardamom with a warm amber-musk base.',
    price: 195000,
    rating: 4.9,
    reviews: 32,
    img: 'The visual identity of Rose Baghdad/Links/Parfume_02_04.png',
    badgeAr: 'حصري',
    badgeEn: 'Exclusive',
    notes: 'هيل، توابل شرقية',
    base: 'عنبر، مسك طبيعي',
    longevity: 'Eau de Parfum Intense - يدوم حتى ١٨ ساعة'
  },
  {
    id: 'p3',
    category: 'incense',
    nameAr: 'بخور الجوري المعتق',
    nameEn: 'Aged Damascus Incense',
    descAr: 'قطع بخور مغطاة بأرقى الزيوت العطرية والمسك لتملأ مساحتك بروح الشرق.',
    descEn: 'Incense chips saturated in elite essential oils to elevate your oriental atmosphere.',
    price: 95000,
    rating: 5,
    reviews: 55,
    img: 'The visual identity of Rose Baghdad/Links/Cosmetic Jar Mockup 04.png',
    badgeAr: 'نادر',
    badgeEn: 'Rare',
    notes: 'ورد جوري، زيوت عطرية',
    base: 'خشب العود، مسك',
    longevity: 'انتشار قوي يدوم لساعات في الأرجاء'
  },
  {
    id: 'p4',
    category: 'incense',
    nameAr: 'بخور دقة العود الملكية',
    nameEn: 'Royal Oud Powder Incense',
    descAr: 'عود كمبودي فاخر مطحون بدقة مع مزيج دهن الورد الدمشقي العتيق.',
    descEn: 'Elite Cambodian oud powder blended with vintage Damascene rose essence.',
    price: 120000,
    rating: 4.8,
    reviews: 19,
    img: 'The visual identity of Rose Baghdad/Links/Cosmetic Jar Mockup 05.png',
    badgeAr: '',
    badgeEn: '',
    notes: 'دهن ورد دمشقي عتيق',
    base: 'عود كمبودي فاخر مطحون',
    longevity: 'ثبات استثنائي يعطر المكان بعمق'
  },
  {
    id: 'p5',
    category: 'giftsets',
    nameAr: 'مجموعة روز بغداد الملكية',
    nameEn: 'Rose Baghdad Royal Gift Set',
    descAr: 'مجموعة حصرية تضم العطر الفاخر وبخور الجوري مغلفة بعلبة مخملية فاخرة.',
    descEn: 'Exclusive set: royal perfume and aged incense in a premium velvet packaging.',
    price: 290000,
    rating: 5,
    reviews: 74,
    img: 'The visual identity of Rose Baghdad/Links/Shopping Bag Mock-2up.png',
    badgeAr: 'هدية فاخرة',
    badgeEn: 'Luxury Gift',
    notes: 'تجمع بين النفحات الشرقية والغربية',
    base: 'أصالة العود والمسك والورد',
    longevity: 'مجموعة متكاملة تمنحك حضوراً يدوم'
  },
];

// ─────────────────────────────────────────────────────────────
// GLOBAL STATE
// ─────────────────────────────────────────────────────────────
const STATE = {
  lang: 'ar',
  currentRoute: 'home',
  cart: [],
  products: platformProducts,
  currentPdpProduct: null,
  pdpQuantity: 1
};

// ─────────────────────────────────────────────────────────────
// TRANSLATION DICTIONARY
// ─────────────────────────────────────────────────────────────
const T = {
  ar: {
    announcementText:   'توصيل ملكي فاخر ومؤمن بالكامل لجميع المحافظات العراقية',
    navHome:            'الرئيسية',
    navCollections:     'المجموعة الكاملة',
    navStory:           'قصتنا',
    navCheckout:        'إتمام الطلب',
    heroSubtitle:       'تأسست عام ٢٠٢٢ — رمز الرقي والأصالة',
    heroTitle:          'حيث يغدو<br><em class="not-italic gold-gradient-text">العطر</em><br>فناً أصيلاً',
    heroDesc:           'نصنع من أجود المكونات الطبيعية والزيوت النادرة عطوراً وبخوراً تليق بأصحاب الذوق الرفيع. تجربة فريدة من نوعها من قلب بغداد العريقة.',
    heroCTA:            'اكتشف المجموعة <i class="ri-arrow-left-line text-base"></i>',
    statProducts:       'تركيبة فريدة',
    statRating:         'تقييم العملاء',
    statYear:           'سنة التأسيس',
    bestSellersEyebrow: 'الأكثر طلباً',
    bestSellersTitle:   'الإصدارات الأكثر طلباً',
    dynamicEyebrow:     'اختيارات ملكية',
    dynamicTitle:       'اكتشف عوالم جديدة',
    dragToExplore:      'اسحب للاستكشاف',
    storyEyebrow:       'قصتنا',
    storyTitle:         'تراث يرويه<br><em class="not-italic gold-gradient-text text-gold">العطر</em>',
    storySubtitle:      'رحلتنا بدأت في عام ٢٠٢٢ من قلب بغداد الشامخة.',
    storyP1:            'في قلب بغداد، حيث يلتقي التراث الشرقي العريق بروح الحداثة، ولدت علامة "روز بغداد" في عام ٢٠٢٢. كل قطرة عطر أو قطعة بخور تمر بعملية تعتيق يدوي دقيقة تدوم لشهور.',
    storyP2:            'كل قطرة عطر أو قطعة بخور ننتجها تمر بعملية تعتيق يدوي دقيقة تدوم لشهور. نحن نجوب العالم لجلب أنقى أنواع دهن العود الكمبودي، وأندر زيوت الورد الطائفي والدمشقي.',
    storyQuote:         '"العطر ليس مجرد رائحة، بل هو هوية وذاكرة وفن."',
    storyReadMore:      'اقرأ القصة الكاملة <i class="ri-arrow-left-line"></i>',
    storyCommitmentTitle: 'التزامنا بالفخامة والتميز المطلق',
    storyCommitmentDesc:  'تلتزم دار روز بغداد بتقديم أعلى مستويات الخدمة المخصصة لزبائننا المميزين، بدءاً من انتقاء المواد الخام ووصولاً إلى التوصيل الفاخر المجاني.',
    value1Title:        'الحرفية البغدادية',
    value1Desc:         'تعتيق يدوي ودمج بين تقنيات الماضي وحداثة الحاضر لتقديم تحف عطرية لا تضاهى.',
    value2Title:        'المكونات النادرة',
    value2Desc:         'استخدام أجود أنواع العود الكمبودي والورد الدمشقي والطائفي بتركيزات عالية.',
    newsletterEyebrow:  'الدائرة الحصرية',
    newsletterTitle:    'انضم إلى مجتمع روز بغداد',
    newsletterDesc:     'كن أول من يعلم بالإصدارات الحصرية والخصومات النادرة المخصصة لروادنا.',
    newsletterPlaceholder: 'بريدك الإلكتروني الملكي...',
    newsletterBtn:      'الاشتراك الملكي',
    addToCart:          'أضف إلى السلة',
    addedToCart:        'تمت الإضافة للسلة',
    cartTitle:          'سلة المقتنيات الملكية',
    cartEmpty:          'سلتك فارغة حالياً. ابدأ باستكشاف عطورنا الملكية.',
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
    catGiftsets:        'مجموعات الهدايا المنسقة',
    catMusk:            'المسك والدهن الحصري'
  },
  en: {
    announcementText:   'Complimentary royal insured shipping across all Iraqi governorates',
    navHome:            'Home',
    navCollections:     'All Collections',
    navStory:           'Our Story',
    navCheckout:        'Checkout',
    heroSubtitle:       'Established 2022 — The Icon of Prestige & Authenticity',
    heroTitle:          'Where <em class="not-italic gold-gradient-text">Perfume</em><br>Becomes a Fine Art',
    heroDesc:           'Crafted from the finest natural ingredients and rarest essential oils — a unique royal experience from the heart of historic Baghdad.',
    heroCTA:            'Discover the Collection <i class="ri-arrow-right-line text-base"></i>',
    statProducts:       'Unique Compositions',
    statRating:         'Client Rating',
    statYear:           'Year Founded',
    bestSellersEyebrow: 'Most Sought After',
    bestSellersTitle:   'Our Best Sellers',
    dynamicEyebrow:     'Royal Selections',
    dynamicTitle:       'Discover New Worlds',
    dragToExplore:      'Drag to Explore',
    storyEyebrow:       'Our Story',
    storyTitle:         'Heritage Told in<br><em class="not-italic gold-gradient-text text-gold">Scent</em>',
    storySubtitle:      'Our journey began in 2022 from the majestic heart of Baghdad.',
    storyP1:            'In the grand heart of Baghdad, where heritage meets modernity, Rose Baghdad was born in 2022. Every drop of elixir undergoes months of precision hand-aging.',
    storyP2:            'We traverse continents sourcing the purest Cambodia Oud, rarest Taif Rose, and Damascus Rose oils — blended with unparalleled passion.',
    storyQuote:         '"Perfume is more than a scent; it is identity, memory, and art."',
    storyReadMore:      'Read the Full Story <i class="ri-arrow-right-line"></i>',
    storyCommitmentTitle: 'Our Absolute Commitment to Elite Luxury',
    storyCommitmentDesc: 'Rose Baghdad guarantees the highest bespoke client standards — from selective raw material sourcing to complimentary white-glove delivery.',
    value1Title:        'Baghdadi Craftsmanship',
    value1Desc:         'Hand-aged combinations merging ancient techniques with modern artistry to present unmatched aromatic masterpieces.',
    value2Title:        'Rare Ingredients',
    value2Desc:         'Utilizing the finest Cambodian Oud, Damascene, and Taif roses in highly concentrated forms.',
    newsletterEyebrow:  'The Exclusive Circle',
    newsletterTitle:    'Join Rose Baghdad Circle',
    newsletterDesc:     'Be the first to access private reserves, royal launches, and exclusive elite rewards.',
    newsletterPlaceholder: 'Enter your royal email...',
    newsletterBtn:      'Royal Subscribe',
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
    footerLogoSub:      'Fragrances and incense defining the identity of Eastern luxury. Rose Baghdad since 2022.',
    footerSecLinks:     'Quick Links',
    footerPolicies:     'Policies',
    polPrivacy:         'Privacy Policy',
    polShipping:        'Shipping Policy',
    polReturn:          'Return Conditions',
    footerCopyright:    '© 2026 Rose Baghdad Elite Perfumes & Incense. All Rights Reserved.',
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
// DOM READY INIT
// ─────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  initRouter();
  initLangToggle();
  initNewsletter();
  initCheckoutPayment();
  renderCartDrawer();
  
  // Render views
  renderCollectionsMultiSlider();
  renderBestSellers();
  initDynamicShowcase();
  
  navigateTo('home');
});

// ─────────────────────────────────────────────────────────────
// LANGUAGE ENGINE
// ─────────────────────────────────────────────────────────────
function initLangToggle() {
  const btn = document.getElementById('langToggle');
  if (btn) btn.addEventListener('click', () => {
    STATE.lang = STATE.lang === 'ar' ? 'en' : 'ar';
    applyTranslations();
    renderCollectionsMultiSlider();
    renderBestSellers();
    updateDynamicShowcase();
    renderCartDrawer();
    if(STATE.currentRoute === 'pdp' && STATE.currentPdpProduct) {
      renderPDP(STATE.currentPdpProduct.id);
    }
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
    if (T[lang]?.[key] !== undefined) el.innerHTML = T[lang][key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (T[lang]?.[key] !== undefined) el.setAttribute('placeholder', T[lang][key]);
  });
}

function t(key) {
  return T[STATE.lang]?.[key] ?? key;
}

// ─────────────────────────────────────────────────────────────
// SPA ROUTER
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
  STATE.currentRoute = route;

  // Hide all views
  document.querySelectorAll('.page-view').forEach(v => {
    v.classList.remove('active');
    v.classList.add('hidden-view');
  });

  // Show target view
  const target = document.getElementById(`view-${route}`);
  if (target) {
    target.classList.remove('hidden-view');
    requestAnimationFrame(() => {
      requestAnimationFrame(() => target.classList.add('active'));
    });
  }

  // Update nav active states
  document.querySelectorAll('[data-route]').forEach(el => {
    el.classList.toggle('active', el.getAttribute('data-route') === route);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById('mobileMenu')?.classList.add('hidden');
}

// ─────────────────────────────────────────────────────────────
// PRICE FORMATTER
// ─────────────────────────────────────────────────────────────
function fmt(n) {
  if (STATE.lang === 'ar') {
    return n.toLocaleString('ar-IQ') + ' ' + t('currency');
  }
  return n.toLocaleString('en-US') + ' ' + t('currency');
}

// ─────────────────────────────────────────────────────────────
// RENDER STARS
// ─────────────────────────────────────────────────────────────
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5;
  let html = '';
  for (let i = 0; i < full; i++) html += '<i class="ri-star-fill"></i>';
  if (half) html += '<i class="ri-star-half-fill"></i>';
  return html;
}

// ─────────────────────────────────────────────────────────────
// PRODUCT CARD BUILDER
// ─────────────────────────────────────────────────────────────
function buildProductCard(p, wide = false) {
  const name   = STATE.lang === 'ar' ? p.nameAr  : p.nameEn;
  const badge  = STATE.lang === 'ar' ? p.badgeAr : p.badgeEn;
  const price  = fmt(p.price);
  const stars  = renderStars(p.rating);
  const width  = wide ? 'min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px]' : 'min-w-[280px] max-w-[280px] md:min-w-[320px] md:max-w-[320px]';

  return `
    <div class="product-card ${width} group" onclick="openPDP('${p.id}')">
      <div class="product-card-inner">
        <div class="product-img-wrap">
          ${badge ? `<div class="product-badge">${badge}</div>` : ''}
          <img src="${p.img}" alt="${name}" loading="lazy">
          <div class="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
            <button
              class="btn-add-cart w-4/5"
              onclick="addToCart('${p.id}'); event.stopPropagation();"
              data-i18n="addToCart">
              <i class="ri-shopping-bag-line"></i>
              ${t('addToCart')}
            </button>
          </div>
        </div>
        <div class="product-info">
          <div class="stars-gold flex gap-0.5 mb-2">
            ${stars}
            <span class="text-gray-600 text-[10px] mx-2">(${p.reviews})</span>
          </div>
          <h3 class="text-sm font-semibold text-white mb-2 leading-snug flex-1">${name}</h3>
          <div class="flex items-center justify-between mt-3 pt-3 border-t border-white/[0.04]">
            <span class="price-tag">${price}</span>
            <button
              class="w-9 h-9 rounded-full border border-white/[0.08] hover:border-gold/40 flex items-center justify-center text-gray-500 hover:text-gold transition-all duration-300"
              onclick="addToCart('${p.id}'); event.stopPropagation();">
              <i class="ri-add-line text-sm"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// DRAG & SWIPE ENGINE
// ─────────────────────────────────────────────────────────────
function applyDragAndSwipe(trackElement, isAutoPlay = false) {
  let isDown = false;
  let startX;
  let scrollLeft;
  let autoPlayInterval;

  trackElement.addEventListener('mousedown', (e) => {
    isDown = true;
    trackElement.classList.add('active');
    startX = e.pageX - trackElement.offsetLeft;
    scrollLeft = trackElement.scrollLeft;
    if(isAutoPlay) clearInterval(autoPlayInterval);
  });

  trackElement.addEventListener('mouseleave', () => {
    isDown = false;
    trackElement.classList.remove('active');
    if(isAutoPlay) startAutoPlay();
  });

  trackElement.addEventListener('mouseup', () => {
    isDown = false;
    trackElement.classList.remove('active');
    if(isAutoPlay) startAutoPlay();
  });

  trackElement.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - trackElement.offsetLeft;
    const walk = (x - startX) * 2;
    trackElement.scrollLeft = scrollLeft - walk;
  });

  // Touch Support
  trackElement.addEventListener('touchstart', (e) => {
    isDown = true;
    startX = e.touches[0].pageX - trackElement.offsetLeft;
    scrollLeft = trackElement.scrollLeft;
    if(isAutoPlay) clearInterval(autoPlayInterval);
  }, {passive: true});

  trackElement.addEventListener('touchend', () => {
    isDown = false;
    if(isAutoPlay) startAutoPlay();
  });

  trackElement.addEventListener('touchmove', (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - trackElement.offsetLeft;
    const walk = (x - startX) * 2;
    trackElement.scrollLeft = scrollLeft - walk;
  }, {passive: true});

  const startAutoPlay = () => {
    if(!isAutoPlay) return;
    autoPlayInterval = setInterval(() => {
      // Continuous leftwards auto-scroll logic
      // In RTL, scrollLeft is usually negative or 0 based on browser. Adjusting simply:
      if (document.dir === 'rtl') {
         trackElement.scrollLeft -= 1;
      } else {
         trackElement.scrollLeft += 1;
      }
      // loop logic if needed, but for simplicity we rely on wide tracks or bouncing
    }, 20);
  };

  if(isAutoPlay) startAutoPlay();
}

// ─────────────────────────────────────────────────────────────
// COLLECTIONS MULTI-SLIDER & BEST SELLERS
// ─────────────────────────────────────────────────────────────
function renderBestSellers() {
  const track = document.getElementById('bestSellersTrack');
  if (!track) return;
  track.innerHTML = STATE.products.map(p => buildProductCard(p, true)).join('');
  applyDragAndSwipe(track, true);
}

function renderCollectionsMultiSlider() {
  const container = document.getElementById('collectionsContainer');
  if (!container) return;
  container.innerHTML = '';

  const categories = [
    { id: 'perfumes', i18nKey: 'catPerfumes' },
    { id: 'incense', i18nKey: 'catIncense' },
    { id: 'giftsets', i18nKey: 'catGiftsets' },
    { id: 'musk', i18nKey: 'catMusk' } // For future-proofing as requested
  ];

  categories.forEach(cat => {
    const productsInCat = STATE.products.filter(p => p.category === cat.id);
    if(productsInCat.length === 0) return;

    const catTitle = t(cat.i18nKey);
    const sectionHtml = `
      <div class="collection-category">
        <h2 class="font-serif-ar text-2xl text-gold mb-8 px-6 drop-shadow-md flex items-center gap-4">
          <i class="ri-vip-diamond-line text-xl"></i> ${catTitle}
        </h2>
        <div class="overflow-hidden -mx-6 px-6">
          <div class="carousel-track" id="track-${cat.id}">
            ${productsInCat.map(p => buildProductCard(p, true)).join('')}
          </div>
        </div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', sectionHtml);
  });

  categories.forEach(cat => {
    const track = document.getElementById(`track-${cat.id}`);
    if(track) applyDragAndSwipe(track, false); // Manual swipe for collection grids
  });
}

// ─────────────────────────────────────────────────────────────
// DYNAMIC CURATION SHOWCASE
// ─────────────────────────────────────────────────────────────
let dynamicShowcaseInterval;

function initDynamicShowcase() {
  updateDynamicShowcase();
  dynamicShowcaseInterval = setInterval(() => {
    const container = document.getElementById('dynamicShowcaseContainer');
    if(!container) return;
    
    // Fade out
    container.classList.add('fading');
    setTimeout(() => {
      updateDynamicShowcase();
      container.classList.remove('fading');
    }, 1000);
    
  }, 5000);
}

function updateDynamicShowcase() {
  const container = document.getElementById('dynamicShowcaseContainer');
  if (!container) return;
  
  // Pick a random product
  const p = STATE.products[Math.floor(Math.random() * STATE.products.length)];
  const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;
  const desc = STATE.lang === 'ar' ? p.descAr : p.descEn;

  container.innerHTML = `
    <div class="w-full md:w-1/2 flex items-center justify-center p-4 h-64 md:h-auto">
      <img src="${p.img}" alt="${name}" class="h-full object-contain max-h-[300px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]">
    </div>
    <div class="w-full md:w-1/2 flex flex-col gap-4 text-center md:text-right" dir="${STATE.lang === 'ar' ? 'rtl' : 'ltr'}">
      <h3 class="font-serif-ar text-2xl md:text-3xl text-white drop-shadow-md">${name}</h3>
      <div class="divider-gold w-12 mx-auto md:mx-0"></div>
      <p class="text-gray-400 text-sm leading-relaxed">${desc}</p>
      <button onclick="openPDP('${p.id}')" class="btn-ghost mt-4 self-center md:self-start text-xs border-gold/40 text-gold hover:bg-gold hover:text-black">
        ${STATE.lang === 'ar' ? 'استكشف التحفة' : 'Explore Masterpiece'}
      </button>
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// PRODUCT DETAIL PAGE (PDP) LOGIC
// ─────────────────────────────────────────────────────────────
function openPDP(productId) {
  const p = STATE.products.find(item => item.id === productId);
  if(!p) return;
  
  STATE.currentPdpProduct = p;
  STATE.pdpQuantity = 1;
  renderPDP(productId);
  navigateTo('pdp');
}

function renderPDP(productId) {
  const p = STATE.products.find(item => item.id === productId);
  if(!p) return;

  const isAr = STATE.lang === 'ar';
  document.getElementById('pdpImage').src = p.img;
  document.getElementById('pdpTitle').textContent = isAr ? p.nameAr : p.nameEn;
  document.getElementById('pdpCategory').textContent = isAr ? t(`cat${p.category.charAt(0).toUpperCase() + p.category.slice(1)}`) : p.category;
  document.getElementById('pdpPrice').textContent = fmt(p.price);
  document.getElementById('pdpDesc').textContent = isAr ? p.descAr : p.descEn;
  
  document.getElementById('pdpStars').innerHTML = renderStars(p.rating);
  document.getElementById('pdpReviews').textContent = `(${p.reviews} ${t('reviewsLabel')})`;

  // Tabs
  document.getElementById('tab-notes').textContent = p.notes;
  document.getElementById('tab-base').textContent = p.base;
  document.getElementById('tab-longevity').textContent = p.longevity;

  updatePdpQuantityDisplay();

  // Reset Listeners cleanly
  const incBtn = document.getElementById('pdpQtyInc');
  const decBtn = document.getElementById('pdpQtyDec');
  const addBtn = document.getElementById('pdpAddToCartBtn');
  
  incBtn.onclick = () => { STATE.pdpQuantity++; updatePdpQuantityDisplay(); };
  decBtn.onclick = () => { if(STATE.pdpQuantity > 1) STATE.pdpQuantity--; updatePdpQuantityDisplay(); };
  addBtn.onclick = () => {
    addToCart(p.id, STATE.pdpQuantity);
    STATE.pdpQuantity = 1;
    updatePdpQuantityDisplay();
  };
}

function updatePdpQuantityDisplay() {
  const disp = document.getElementById('pdpQtyDisplay');
  if(disp) disp.textContent = STATE.pdpQuantity;
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
  if (item.quantity <= 0) {
    STATE.cart = STATE.cart.filter(i => i.product.id !== productId);
  }
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
  document.querySelectorAll('.cart-badge').forEach(b => {
    b.textContent = total;
    b.classList.toggle('scale-0', total === 0);
    b.classList.toggle('scale-100', total > 0);
  });
}

function renderCartDrawer() {
  const container = document.getElementById('cartItemsContainer');
  const subtotalEl = document.getElementById('cartSubtotalDisplay');
  const totalEl    = document.getElementById('cartTotalDisplay');
  if (!container) return;

  if (STATE.cart.length === 0) {
    container.innerHTML = `
      <div class="flex flex-col items-center justify-center h-full py-20 text-center gap-4">
        <i class="ri-shopping-bag-3-line text-4xl text-white/10"></i>
        <p class="text-xs text-gray-600">${t('cartEmpty')}</p>
      </div>`;
    if (subtotalEl) subtotalEl.textContent = fmt(0);
    if (totalEl)    totalEl.textContent    = fmt(0);
    return;
  }

  let subtotal = 0;
  container.innerHTML = STATE.cart.map(item => {
    const p    = item.product;
    const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;
    subtotal  += p.price * item.quantity;
    return `
      <div class="cart-item-row">
        <img src="${p.img}" alt="${name}" class="cart-item-thumb">
        <div class="flex-1 min-w-0">
          <p class="text-xs font-semibold text-white truncate mb-1">${name}</p>
          <p class="text-gold text-xs font-bold mb-3">${fmt(p.price)}</p>
          <div class="flex items-center gap-3">
            <button class="qty-btn" onclick="updateCartQuantity('${p.id}', -1)">−</button>
            <span class="text-xs font-semibold text-white w-4 text-center">${item.quantity}</span>
            <button class="qty-btn" onclick="updateCartQuantity('${p.id}', 1)">+</button>
          </div>
        </div>
        <button onclick="removeFromCart('${p.id}')"
          class="text-white/20 hover:text-red-400 transition-colors text-lg ml-2 flex-shrink-0">
          <i class="ri-delete-bin-6-line"></i>
        </button>
      </div>`;
  }).join('');

  if (subtotalEl) subtotalEl.textContent = fmt(subtotal);
  if (totalEl)    totalEl.textContent    = fmt(subtotal);
}

// ─────────────────────────────────────────────────────────────
// TOAST NOTIFICATION
// ─────────────────────────────────────────────────────────────
function showToast(productId) {
  const p    = STATE.products.find(i => i.id === productId);
  if (!p) return;
  const name = STATE.lang === 'ar' ? p.nameAr : p.nameEn;

  const wrap = document.getElementById('toastContainer');
  if (!wrap) return;

  const toast = document.createElement('div');
  toast.className = 'toast-notify';
  toast.style.pointerEvents = 'auto';
  toast.innerHTML = `
    <i class="ri-checkbox-circle-fill text-gold text-xl flex-shrink-0"></i>
    <div class="min-w-0">
      <p class="text-xs font-bold text-white truncate">${name}</p>
      <p class="text-[10px] text-gray-500">${t('addedToCart')}</p>
    </div>`;

  wrap.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 400);
  }, 3200);
}

// ─────────────────────────────────────────────────────────────
// CHECKOUT PAYMENT TOGGLE
// ─────────────────────────────────────────────────────────────
function initCheckoutPayment() {
  const codRadio = document.getElementById('payment_cod');
  const epRadio  = document.getElementById('payment_ep');
  const epSection = document.getElementById('epCardFormSection');

  if (!codRadio || !epRadio || !epSection) return;

  const toggle = () => {
    if (epRadio.checked) {
      epSection.classList.remove('hidden');
      setTimeout(() => epSection.style.opacity = '1', 30);
    } else {
      epSection.style.opacity = '0';
      setTimeout(() => epSection.classList.add('hidden'), 300);
    }
  };

  codRadio.addEventListener('change', toggle);
  epRadio.addEventListener('change', toggle);

  const form = document.getElementById('checkoutBillingForm');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      triggerOrderSuccess();
    });
  }
}

function triggerOrderSuccess() {
  const view = document.getElementById('view-checkout');
  if (!view) return;
  const orderNum = Math.floor(100000 + Math.random() * 900000);
  const isAr     = STATE.lang === 'ar';

  view.innerHTML = `
    <div class="flex flex-col items-center justify-center min-h-[80vh] text-center px-6 gap-8">
      <div class="w-24 h-24 rounded-full border border-gold/30 flex items-center justify-center mb-4"
        style="background:radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%);">
        <i class="ri-gemstone-fill text-gold text-4xl"></i>
      </div>
      <h1 class="font-serif-ar text-3xl md:text-4xl text-white drop-shadow-xl">
        ${isAr ? 'تهانينا! تم تسجيل طلبك الملكي' : 'Congratulations! Your Royal Order is Confirmed'}
      </h1>
      <div class="divider-short"></div>
      <p class="text-gray-400 text-sm max-w-md leading-relaxed">
        ${isAr
          ? `رقم طلبك الحصري هو <strong class="text-gold">#${orderNum}</strong>. سيتواصل معك فريقنا قريباً لتأكيد موعد التوصيل الملكي.`
          : `Your reference is <strong class="text-gold">#${orderNum}</strong>. Our concierge team will reach out shortly to confirm your royal delivery.`}
      </p>
      <button onclick="navigateTo('home')" class="btn-hero mt-6">
        ${isAr ? 'العودة للرئيسية' : 'Return to Home'}
        <i class="ri-arrow-${isAr ? 'left' : 'right'}-line"></i>
      </button>
    </div>`;

  // Clear cart
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
    modal.className = 'fixed inset-0 z-[400] flex items-center justify-center px-4';
    modal.style.background = 'rgba(5,5,5,0.88)';
    modal.style.backdropFilter = 'blur(12px)';
    modal.innerHTML = `
      <div class="max-w-md w-full text-center flex flex-col gap-6 p-10 rounded-3xl border border-gold/20"
        style="background:rgba(20,18,14,0.97);">
        <i class="ri-mail-check-line text-5xl text-gold block mx-auto"></i>
        <h4 class="font-serif-ar text-2xl text-white">
          ${isAr ? 'مرحباً بك في الدائرة الملكية' : 'Welcome to the Royal Circle'}
        </h4>
        <p class="text-gray-500 text-xs leading-relaxed">
          ${isAr
            ? 'تم تسجيل بريدك الإلكتروني بنجاح في قاعدة بياناتنا الحصرية.'
            : 'Your credentials have been successfully registered.'}
        </p>
        <button onclick="this.closest('.fixed').remove()" class="btn-hero w-full justify-center">
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
    ar: { title: 'سياسة الخصوصية', body: 'تلتزم دار روز بغداد بحماية خصوصيتك الملكية. نحن نجمع البيانات فقط لتحسين تجربتك وتسهيل وصول مقتنياتك بشكل آمن...' },
    en: { title: 'Privacy Policy', body: 'Rose Baghdad is committed to protecting your royal privacy. We collect data solely to enhance your experience and ensure secure delivery...' }
  },
  shipping: {
    ar: { title: 'سياسة الشحن', body: 'نقدم شحناً فاخراً ومؤمناً بالكامل لجميع محافظات العراق. يتم تغليف الطلبات بعناية فائقة لضمان وصولها بحالة مثالية...' },
    en: { title: 'Shipping Policy', body: 'We offer fully insured, luxury shipping across all Iraqi governorates. Orders are meticulously packaged to arrive in pristine condition...' }
  },
  return: {
    ar: { title: 'شروط الاسترجاع', body: 'يمكن استرجاع المقتنيات خلال ٧ أيام من الاستلام بشرط عدم فتح التغليف الملكي الأصلي للحفاظ على جودة وأصالة العطر...' },
    en: { title: 'Return Conditions', body: 'Acquisitions may be returned within 7 days of receipt, provided the royal seal and packaging remain unopened to ensure absolute purity...' }
  }
};

function openPolicy(type) {
  const isAr = STATE.lang === 'ar';
  document.getElementById('policyTitle').textContent = policiesContent[type][isAr ? 'ar' : 'en'].title;
  document.getElementById('policyBody').innerHTML = `<p>${policiesContent[type][isAr ? 'ar' : 'en'].body}</p>`;
  document.getElementById('policyModal').classList.add('open');
}

function closePolicy() {
  document.getElementById('policyModal').classList.remove('open');
}

// Expose needed functions globally (for inline onclick attributes)
window.addToCart           = addToCart;
window.updateCartQuantity  = updateCartQuantity;
window.removeFromCart      = removeFromCart;
window.navigateTo          = navigateTo;
window.openPDP             = openPDP;
window.openPolicy          = openPolicy;
window.closePolicy         = closePolicy;
