/* ============================================================
   app.js — Rose Baghdad v3.0 | Ultra-Luxury Pro Edition
   Zero-Lag · Native Drag Momentum · GPU-Composited
   ============================================================ */

'use strict';

// ─────────────────────────────────────────────────────────────
// PRODUCT DATA (20 Premium Products as requested)
// ─────────────────────────────────────────────────────────────
const images = [
  'assets/img/Parfume_02_03.webp',
  'assets/img/Parfume_02_04.webp',
  'assets/img/Cosmetic Jar Mockup 04.webp',
  'assets/img/Cosmetic Jar Mockup 05.webp',
  'assets/img/Shopping Bag Mock-2up.webp'
];

const platformProducts = [
  // Perfumes (8)
  { id: 'p1', category: 'perfumes', nameAr: 'عطر الروز البغدادي الملكي', nameEn: 'Royal Baghdadi Rose Perfume', descAr: 'مزيج حصري يبدأ بنفحات البرغموت والزعفران، قلب من الورد الطائفي النادر، وقاعدة من العود الكمبودي المعتق.', descEn: 'Majestic royal notes — heritage natural rose fused with the finest premium Oud.', price: 185000, rating: 5, reviews: 148, img: images[0], badgeAr: 'الأكثر مبيعاً', badgeEn: 'Best Seller', notes: 'برغموت، زعفران، ورد طائفي', base: 'عود كمبودي معتق، عنبر دافئ', longevity: 'Extrait de Parfum - يدوم لأكثر من ٢٤ ساعة' },
  { id: 'p2', category: 'perfumes', nameAr: 'إكسير بغداد الفاخر', nameEn: 'Baghdad Luxury Elixir', descAr: 'مزيج عطري فاخر من التوابل النادرة والهيل مع قاعدة دافئة من العنبر والمسك.', descEn: 'A luxury aromatic blend of rare spices and cardamom with a warm amber-musk base.', price: 195000, rating: 4.9, reviews: 82, img: images[1], badgeAr: 'حصري', badgeEn: 'Exclusive', notes: 'هيل، توابل شرقية', base: 'عنبر، مسك طبيعي', longevity: 'Eau de Parfum Intense - يدوم حتى ١٨ ساعة' },
  { id: 'p3', category: 'perfumes', nameAr: 'ليالي دجلة الساحرة', nameEn: 'Enchanting Tigris Nights', descAr: 'نوتات مائية منعشة تتناغم مع زهر البرتقال لتضفي لمسة من ليالي بغداد الهادئة.', descEn: 'Fresh aquatic notes harmonized with orange blossom to reflect calm Baghdad nights.', price: 155000, rating: 4.8, reviews: 65, img: images[0], badgeAr: '', badgeEn: '', notes: 'نسيم مائي، زهر البرتقال', base: 'خشب الصندل، مسك أبيض', longevity: 'Eau de Parfum - يدوم حتى ١٢ ساعة' },
  { id: 'p4', category: 'perfumes', nameAr: 'أصالة العود الكمبودي', nameEn: 'Authentic Cambodian Oud', descAr: 'عطر رجالي صارم يجسد قوة العود الصافي المستخلص من أعماق غابات كمبوديا.', descEn: 'A strict masculine fragrance embodying the pure power of Cambodian forests.', price: 210000, rating: 5, reviews: 201, img: images[1], badgeAr: 'نادر', badgeEn: 'Rare', notes: 'عود صافي، أخشاب جافة', base: 'باتشولي، جلود طبيعية', longevity: 'Extrait de Parfum - يدوم لأكثر من ٤٨ ساعة' },
  { id: 'p5', category: 'perfumes', nameAr: 'رحيق الورد الدمشقي', nameEn: 'Damascus Rose Nectar', descAr: 'عطر أنثوي ناعم يحاكي بتلات الورد الدمشقي الندية في صباح باكر.', descEn: 'Soft feminine perfume simulating dewy Damascus rose petals in early morning.', price: 170000, rating: 4.9, reviews: 112, img: images[0], badgeAr: 'جديد', badgeEn: 'New', notes: 'ورد دمشقي، ليليوم', base: 'فانيلا مدغشقر، مسك', longevity: 'Eau de Parfum - يدوم حتى ١٥ ساعة' },
  { id: 'p6', category: 'perfumes', nameAr: 'سراب الصحراء الذهبي', nameEn: 'Golden Desert Mirage', descAr: 'عطر حار وجذاب يدمج بين الفلفل الوردي واللبان للحصول على هالة غامضة.', descEn: 'Spicy and magnetic, blending pink pepper and frankincense for a mysterious aura.', price: 165000, rating: 4.7, reviews: 45, img: images[1], badgeAr: '', badgeEn: '', notes: 'فلفل وردي، لبان شرقي', base: 'خشب الأرز، عنبر', longevity: 'Eau de Parfum Intense - يدوم حتى ٢٠ ساعة' },
  { id: 'p7', category: 'perfumes', nameAr: 'تراث الشرق المطلق', nameEn: 'Absolute Eastern Heritage', descAr: 'توليفة شرقية بحتة للمناسبات الرسمية تعتمد على تناغم الورد والعود والزعفران.', descEn: 'A pure oriental composition for formal events relying on rose, oud, and saffron.', price: 230000, rating: 5, reviews: 94, img: images[0], badgeAr: 'رويال', badgeEn: 'Royal', notes: 'زعفران إسباني، ورد طائفي', base: 'دهن العود الهندي، خشب الصندل', longevity: 'Extrait de Parfum - يدوم لأكثر من ٤٨ ساعة' },
  { id: 'p8', category: 'perfumes', nameAr: 'همسات المسك الناعمة', nameEn: 'Soft Musk Whispers', descAr: 'عطر صيفي خفيف يعتمد على نظافة المسك الأبيض وزهور القطن.', descEn: 'A light summer fragrance based on the cleanliness of white musk and cotton flowers.', price: 140000, rating: 4.8, reviews: 76, img: images[1], badgeAr: '', badgeEn: '', notes: 'زهر القطن، برغموت فاتح', base: 'مسك أبيض صافي', longevity: 'Eau de Toilette - يدوم حتى ٨ ساعات' },

  // Incense (5)
  { id: 'i1', category: 'incense', nameAr: 'بخور الجوري المعتق', nameEn: 'Aged Damascus Incense', descAr: 'قطع بخور مغطاة بأرقى الزيوت العطرية والمسك لتملأ مساحتك بروح الشرق.', descEn: 'Incense chips saturated in elite essential oils to elevate your oriental atmosphere.', price: 95000, rating: 5, reviews: 255, img: images[2], badgeAr: 'نادر', badgeEn: 'Rare', notes: 'ورد جوري، زيوت عطرية', base: 'خشب العود، مسك', longevity: 'انتشار قوي يدوم لساعات في الأرجاء' },
  { id: 'i2', category: 'incense', nameAr: 'بخور دقة العود الملكية', nameEn: 'Royal Oud Powder Incense', descAr: 'عود كمبودي فاخر مطحون بدقة مع مزيج دهن الورد الدمشقي العتيق.', descEn: 'Elite Cambodian oud powder blended with vintage Damascene rose essence.', price: 120000, rating: 4.8, reviews: 119, img: images[3], badgeAr: 'الأكثر مبيعاً', badgeEn: 'Best Seller', notes: 'دهن ورد دمشقي عتيق', base: 'عود كمبودي فاخر مطحون', longevity: 'ثبات استثنائي يعطر المكان بعمق' },
  { id: 'i3', category: 'incense', nameAr: 'مبثوث العنبر والزعفران', nameEn: 'Amber & Saffron Mabthooth', descAr: 'بخور مبثوث غني بنفحات الزعفران الملكي مع العنبر الدافئ للمجالس.', descEn: 'Rich mabthooth incense with royal saffron and warm amber for gatherings.', price: 85000, rating: 4.7, reviews: 63, img: images[2], badgeAr: '', badgeEn: '', notes: 'زعفران، لبان', base: 'عنبر، أخشاب معتقة', longevity: 'انتشار سريع وممتاز للغرف الواسعة' },
  { id: 'i4', category: 'incense', nameAr: 'بخور العود الأزرق الفاخر', nameEn: 'Premium Blue Oud Incense', descAr: 'أجود قطع العود الأزرق الطبيعي التي تمنحك رائحة بخورية صافية خالية من الإضافات.', descEn: 'Finest natural blue oud wood granting a pure incense aroma free of additives.', price: 175000, rating: 5, reviews: 88, img: images[3], badgeAr: 'فاخر', badgeEn: 'Luxury', notes: 'نوتات خشبية ترابية بحتة', base: 'عود أزرق غطاس طبيعي', longevity: 'ثبات عميق جداً في الملابس والمجالس' },
  { id: 'i5', category: 'incense', nameAr: 'معمول روز بغداد الخاص', nameEn: 'Rose Baghdad Private Maamoul', descAr: 'أقراص معمول البخور الممزوجة بدهن العود والورد لتعطير يومي مفعم بالبهجة.', descEn: 'Maamoul incense discs blended with oud oil and rose for joyful daily scenting.', price: 65000, rating: 4.9, reviews: 142, img: images[2], badgeAr: 'جديد', badgeEn: 'New', notes: 'ورد طائفي، زيوت زهرية', base: 'عجينة العود والمسك', longevity: 'ثبات يومي منعش للاستخدام المنزلي' },

  // Giftsets (4)
  { id: 'g1', category: 'giftsets', nameAr: 'مجموعة روز بغداد الملكية', nameEn: 'Rose Baghdad Royal Gift Set', descAr: 'مجموعة حصرية تضم العطر الفاخر وبخور الجوري مغلفة بعلبة مخملية فاخرة.', descEn: 'Exclusive set: royal perfume and aged incense in a premium velvet packaging.', price: 290000, rating: 5, reviews: 174, img: images[4], badgeAr: 'هدية فاخرة', badgeEn: 'Luxury Gift', notes: 'تجمع بين النفحات الشرقية والغربية', base: 'أصالة العود والمسك والورد', longevity: 'مجموعة متكاملة تمنحك حضوراً يدوم' },
  { id: 'g2', category: 'giftsets', nameAr: 'مجموعة ليلة الزفاف', nameEn: 'Wedding Night Collection', descAr: 'هديتك المثالية للعروسين، تحتوي على عطرين (رجالي ونسائي) ومبخرة ذهبية.', descEn: 'Perfect wedding gift, contains two perfumes (Him & Her) and a gold censer.', price: 350000, rating: 4.9, reviews: 52, img: images[4], badgeAr: 'للمناسبات', badgeEn: 'Occasions', notes: 'توليفة متناغمة للرجل والمرأة', base: 'مسك، عود، فانيلا، وزهور', longevity: 'ذكرى عطرية تدوم للأبد' },
  { id: 'g3', category: 'giftsets', nameAr: 'صندوق العود الأصيل', nameEn: 'Authentic Oud Box', descAr: 'مجموعة لعشاق العود الخالص، تحتوي على عطر العود الكمبودي وقطع العود الأزرق.', descEn: 'For pure oud lovers, contains Cambodian Oud perfume and blue oud wood.', price: 380000, rating: 5, reviews: 31, img: images[4], badgeAr: 'حصري', badgeEn: 'Exclusive', notes: 'قوة وفخامة الأخشاب الشرقية', base: 'عود صافي 100%', longevity: 'ثبات استثنائي يتحدى الزمن' },
  { id: 'g4', category: 'giftsets', nameAr: 'هدية المسك والورد', nameEn: 'Musk & Rose Gift', descAr: 'مجموعة ناعمة تحتوي على دهن المسك الأبيض وعطر رحيق الورد الدمشقي.', descEn: 'A soft collection containing white musk essence and Damascus Rose nectar perfume.', price: 220000, rating: 4.8, reviews: 96, img: images[4], badgeAr: '', badgeEn: '', notes: 'نعومة المسك وجاذبية الورد', base: 'مسك أبيض قطني، ورد طبيعي', longevity: 'انتعاش ونعومة تدوم طوال اليوم' },

  // Musk (3)
  { id: 'm1', category: 'musk', nameAr: 'مسك الطهارة الأبيض', nameEn: 'White Purity Musk', descAr: 'دهن مسك أبيض صافي يمتاز برائحته القطنية المنعشة والنظيفة.', descEn: 'Pure white musk essence characterized by its fresh and clean cotton scent.', price: 45000, rating: 5, reviews: 310, img: images[3], badgeAr: 'الأكثر طلباً', badgeEn: 'Most Wanted', notes: 'زهر القطن، ياسمين أبيض', base: 'مسك أبيض نقي', longevity: 'ثبات يدوم طويلاً على الجلد' },
  { id: 'm2', category: 'musk', nameAr: 'دهن العود الملكي (تولة)', nameEn: 'Royal Oud Essence (Tola)', descAr: 'دهن عود هندي معتق لسنوات، مركز جداً ويستخدم بالقطرات للمناسبات الكبرى.', descEn: 'Aged Indian Oud essence, highly concentrated, used in drops for grand occasions.', price: 150000, rating: 4.9, reviews: 42, img: images[2], badgeAr: 'رويال', badgeEn: 'Royal', notes: 'نوتات حيوانية خفيفة مميزة للعود الهندي', base: 'دهن عود معتق صافي', longevity: 'نقطة واحدة تكفي لتعطيرك لأيام' },
  { id: 'm3', category: 'musk', nameAr: 'مسك الغزال الأسود الطبيعي', nameEn: 'Natural Black Deer Musk', descAr: 'مسك أسود طبيعي نادر ذو رائحة قوية وعميقة، له فوائد روحانية وعطرية.', descEn: 'Rare natural black musk with a strong deep scent, has spiritual and aromatic benefits.', price: 180000, rating: 4.8, reviews: 18, img: images[3], badgeAr: 'نادر جداً', badgeEn: 'Very Rare', notes: 'نوتات حيوانية غامضة', base: 'مسك أسود طبيعي 100%', longevity: 'ثبات مهول وعمق عطري لا يضاهى' },
];

// ─────────────────────────────────────────────────────────────
// FAQ DATA
// ─────────────────────────────────────────────────────────────
const faqData = [
  {
    qAr: 'هل التوصيل متوفر لجميع المحافظات؟', qEn: 'Is delivery available to all governorates?',
    aAr: 'نعم، نوفر خدمة توصيل ملكية ومؤمنة بالكامل إلى جميع محافظات العراق، مع ضمان وصول المقتنيات بحالة مثالية.',
    aEn: 'Yes, we provide fully insured royal delivery service to all Iraqi governorates, ensuring items arrive in pristine condition.'
  },
  {
    qAr: 'ما هي مدة ثبات عطور روز بغداد؟', qEn: 'How long do Rose Baghdad perfumes last?',
    aAr: 'تتميز عطورنا بتركيز (Extrait de Parfum) وتعتيق يدوي للزيوت، مما يمنحها ثباتاً استثنائياً يتجاوز 24 ساعة على البشرة وعدة أيام على الملابس.',
    aEn: 'Our perfumes are Extrait de Parfum concentration with hand-aged oils, granting them exceptional longevity exceeding 24 hours on skin and days on fabrics.'
  },
  {
    qAr: 'هل يمكنني استرجاع المنتج إذا لم يعجبني؟', qEn: 'Can I return the product if I don\'t like it?',
    aAr: 'لضمان أصالة ونقاء منتجاتنا، نقبل الاسترجاع خلال 7 أيام فقط في حال عدم فتح التغليف الملكي الأصلي وبقاء ختم الضمان سليماً.',
    aEn: 'To guarantee the purity of our products, we accept returns within 7 days only if the original royal packaging and unbroken seal remain intact.'
  },
  {
    qAr: 'ما الذي يميز دهن العود لديكم؟', qEn: 'What distinguishes your Oud essence?',
    aAr: 'نحن نستورد العود الكمبودي والهندي مباشرة من المصدر، ونقوم بتعتيقه في ظروف خاصة لعدة سنوات لنستخلص دهناً صافياً 100% خالياً من أي إضافات.',
    aEn: 'We import Cambodian and Indian Oud directly from the source, aging it under special conditions for years to extract 100% pure essence without additives.'
  }
];

// ─────────────────────────────────────────────────────────────
// TESTIMONIALS DATA
// ─────────────────────────────────────────────────────────────
const testimonialsData = [
  {
    nameAr: 'أحمد الجبوري', nameEn: 'Ahmed Al-Jubouri',
    locAr: 'بغداد، المنصور', locEn: 'Baghdad, Al-Mansour',
    textAr: 'عطر الروز البغدادي أخذني لعالم ثاني. ثبات وفخامة غير طبيعية، والباكجنك وحده تحفة فنية. فعلاً روز بغداد اسم على مسمى.',
    textEn: 'Royal Baghdadi Rose took me to another world. Unnatural longevity and luxury, and the packaging itself is a masterpiece.',
    rating: 5
  },
  {
    nameAr: 'د. نور كاظم', nameEn: 'Dr. Noor Kadhim',
    locAr: 'البصرة', locEn: 'Basra',
    textAr: 'هديت مجموعة ليلة الزفاف لأختي، وكانت من أروع الهدايا اللي ممكن تتقدم. العطور راقية وتناسب الذوق العراقي الأصيل.',
    textEn: 'I gifted the Wedding Night collection to my sister. It was one of the most wonderful gifts. Elegant perfumes suiting authentic Iraqi taste.',
    rating: 5
  },
  {
    nameAr: 'مصطفى العراقي', nameEn: 'Mustafa Al-Iraqi',
    locAr: 'أربيل', locEn: 'Erbil',
    textAr: 'البخور الأزرق الفاخر غيّر جو البيت بالكامل. رائحة صافية بدون أي ريحة حرك، ثباته بالديوانية يظل لأيام. خدمة التوصيل كانت سريعة جداً.',
    textEn: 'The Premium Blue Incense completely changed the house vibe. Pure scent with no burning smell, lasts for days. Delivery was very fast.',
    rating: 4.8
  }
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
    announcementText:   'توصيل ملكي مجاني ومؤمن لجميع المحافظات العراقية',
    navHome:            'الرئيسية',
    navCollections:     'المجموعة الكاملة',
    navStory:           'قصتنا',
    navCheckout:        'إتمام الطلب',
    heroSubtitle:       'تأسست عام ٢٠٢٢ — رمز الرقي والأصالة',
    heroTitle:          'حيث يغدو<br><em class="gold-text" style="font-style:normal;">العطر</em><br>فناً أصيلاً',
    heroDesc:           'نصنع من أجود المكونات الطبيعية والزيوت النادرة عطوراً وبخوراً تليق بأصحاب الذوق الرفيع. تجربة فريدة من نوعها من قلب بغداد العريقة.',
    heroCTA:            'اكتشف المجموعة <i class="ri-arrow-left-line"></i>',
    statProducts:       'تركيبة فريدة',
    statRating:         'تقييم العملاء',
    statYear:           'سنة التأسيس',
    bestSellersEyebrow: 'الأكثر طلباً',
    bestSellersTitle:   'الإصدارات الأكثر مبيعاً',
    viewAll:            'عرض الجميع',
    dynamicEyebrow:     'اختيارات ملكية',
    dynamicTitle:       'اكتشف عوالم جديدة',
    dragToExplore:      'اسحب للاستكشاف',
    whyEyebrow:         'لماذا روز بغداد',
    whyTitle:           'خُلق ليرتديه <em class="gold-text" style="font-style:normal;">الرجل والمرأة</em>',
    whyDesc:            'كل خط من عطورنا مُصمَّم بعناية فائقة ليناسب الهوية الفريدة لكل شخص، بتركيبات تنبض بالفخامة والجاذبية.',
    menEyebrow:         'للرجل الطموح',
    menTitle:           'قوة تُعلن الحضور',
    menF1:              'عود كمبودي معتق لأكثر من 10 سنوات',
    menF2:              'نوتات دخانية وتوابل شرقية حادة',
    menF3:              'ثبات استثنائي يتجاوز 24 ساعة',
    womenEyebrow:       'للمرأة الأنيقة',
    womenTitle:         'أناقة تُلهم الذاكرة',
    womenF1:            'ورد طائفي ودمشقي بتركيزات عالية',
    womenF2:            'مسك أبيض يأمر بالنعومة والدفء',
    womenF3:            'تغليف مخملي يليق بالهدايا الفاخرة',
    shopNow:            'تسوق الآن',
    reviewsEyebrow:     'آراء عملائنا',
    reviewsTitle:       'يقولون عن <em class="gold-text" style="font-style:normal;">روز بغداد</em>',
    reviewsRatingSummary:'٤.٩ من ٥ — بناءً على +٣٢٠ تقييم',
    faqEyebrow:         'أسئلة شائعة',
    faqTitle:           'كل ما تريد معرفته',
    storyEyebrow:       'قصتنا',
    storyTitle:         'تراث يرويه <em class="gold-text" style="font-style:normal;">العطر</em>',
    storySubtitle:      'رحلتنا بدأت في عام ٢٠٢٢ من قلب بغداد الشامخة.',
    storyP1:            'في قلب بغداد، حيث يلتقي التراث الشرقي العريق بروح الحداثة الأنيقة، ولدت علامة "روز بغداد" في عام ٢٠٢٢.',
    storyP2:            'كل قطرة عطر أو قطعة بخور ننتجها تمر بعملية تعتيق يدوي دقيقة تدوم لشهور لضمان جودة لا تضاهى.',
    storyQuote:         '"العطر ليس مجرد رائحة، بل هو هوية وذاكرة وفن."',
    storyCommitmentTitle: 'التزامنا بالفخامة والتميز المطلق',
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
    paymentCOD:         'الدفع عند الاستلام',
    paymentEP:          'الدفع الإلكتروني',
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
    heroTitle:          'Where <em class="gold-text" style="font-style:normal;">Perfume</em><br>Becomes a Fine Art',
    heroDesc:           'Crafted from the finest natural ingredients and rarest essential oils — a unique royal experience from historic Baghdad.',
    heroCTA:            'Discover Collection <i class="ri-arrow-right-line"></i>',
    statProducts:       'Unique Compositions',
    statRating:         'Client Rating',
    statYear:           'Year Founded',
    bestSellersEyebrow: 'Most Sought After',
    bestSellersTitle:   'Our Best Sellers',
    viewAll:            'View All',
    dynamicEyebrow:     'Royal Selections',
    dynamicTitle:       'Discover New Worlds',
    dragToExplore:      'Drag to Explore',
    whyEyebrow:         'Why Rose Baghdad',
    whyTitle:           'Created for <em class="gold-text" style="font-style:normal;">Him & Her</em>',
    whyDesc:            'Every fragrance line is meticulously crafted to suit the unique identity of each individual, pulsing with luxury and magnetism.',
    menEyebrow:         'For the Ambitious Man',
    menTitle:           'Power That Announces Presence',
    menF1:              'Cambodian Oud aged over 10 years',
    menF2:              'Smoky notes and sharp oriental spices',
    menF3:              'Exceptional longevity exceeding 24 hours',
    womenEyebrow:       'For the Elegant Woman',
    womenTitle:         'Elegance That Inspires Memory',
    womenF1:            'Taif and Damascene Rose in high concentrations',
    womenF2:            'White musk commanding softness and warmth',
    womenF3:            'Velvet packaging befitting luxury gifts',
    shopNow:            'Shop Now',
    reviewsEyebrow:     'Client Voices',
    reviewsTitle:       'What they say about <em class="gold-text" style="font-style:normal;">Rose Baghdad</em>',
    reviewsRatingSummary:'4.9 out of 5 — based on +320 reviews',
    faqEyebrow:         'FAQ',
    faqTitle:           'Everything You Need to Know',
    storyEyebrow:       'Our Story',
    storyTitle:         'Heritage Told in <em class="gold-text" style="font-style:normal;">Scent</em>',
    storySubtitle:      'Our journey began in 2022 from the majestic heart of Baghdad.',
    storyP1:            'In the grand heart of Baghdad, where heritage meets modernity, Rose Baghdad was born in 2022.',
    storyP2:            'Every drop of perfume or piece of incense undergoes a precise manual aging process lasting months.',
    storyQuote:         '"Perfume is more than a scent; it is identity, memory, and art."',
    storyCommitmentTitle: 'Our Absolute Commitment to Elite Luxury',
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
    paymentCOD:         'Cash on Delivery',
    paymentEP:          'Electronic Payment',
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

  // Defer heavy rendering to allow hero to paint smoothly
  setTimeout(() => {
    requestAnimationFrame(() => {
      renderBestSellers();
      renderCollectionsMultiSlider();
      initDynamicShowcase();
      renderTestimonials();
      renderFAQ();
      navigateTo('home');
    });
  }, 100);
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
    if (autoPlay) startAutoPlay();
  });
  track.addEventListener('mouseup', () => {
    isDown = false;
    track.classList.remove('dragging');
    if (autoPlay) startAutoPlay();
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
  track.addEventListener('touchend', () => { if (autoPlay) startAutoPlay(); }, {passive: true});

  // Hover Pause
  track.addEventListener('mouseenter', cancelAutoPlay);

  function startAutoPlay() {
    cancelAutoPlay();
    speed = document.dir === 'rtl' ? -0.5 : 0.5;
    function tick() {
      track.scrollLeft += speed;
      // Loop logic
      if (document.dir === 'rtl') {
        if (track.scrollLeft <= 0) track.scrollLeft = track.scrollWidth - track.clientWidth;
      } else {
        if (track.scrollLeft >= track.scrollWidth - track.clientWidth - 1) track.scrollLeft = 0;
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
function renderCollectionsMultiSlider() {
  const container = document.getElementById('collectionsContainer');
  if (!container) return;

  const categories = [
    { id: 'perfumes', i18nKey: 'catPerfumes' },
    { id: 'incense',  i18nKey: 'catIncense'  },
    { id: 'giftsets', i18nKey: 'catGiftsets' },
    { id: 'musk',     i18nKey: 'catMusk'     },
  ];

  const frag = document.createDocumentFragment();

  categories.forEach(cat => {
    const products = STATE.products.filter(p => p.category === cat.id);
    if (products.length === 0) return;

    const section = document.createElement('div');
    section.innerHTML = `
      <div style="display:flex; align-items:center; gap:16px; margin-bottom:clamp(24px,4vw,32px); padding:0 clamp(16px,5vw,56px);">
        <i class="ri-gem-line" style="color:#D4AF37; font-size:24px;"></i>
        <h2 class="t-h2" style="color:#D4AF37;">${t(cat.i18nKey)}</h2>
      </div>
      <div class="slider-outer">
        <div class="slider-track" id="track-${cat.id}">
          ${products.map(p => buildProductCard(p)).join('')}
        </div>
      </div>
    `;
    frag.appendChild(section);
  });

  container.innerHTML = '';
  container.appendChild(frag);

  requestAnimationFrame(() => {
    categories.forEach(cat => {
      const track = document.getElementById(`track-${cat.id}`);
      if (track) applySliderLogic(track, false);
    });
  });
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
        <div class="faq-icon"><i class="ri-add-line"></i></div>
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

  grid.innerHTML = testimonialsData.map(t => {
    const name = STATE.lang === 'ar' ? t.nameAr : t.nameEn;
    const loc  = STATE.lang === 'ar' ? t.locAr  : t.locEn;
    const text = STATE.lang === 'ar' ? t.textAr : t.textEn;
    const stars = renderStars(t.rating);
    const initial = name.charAt(0);

    return `
      <div class="testimonial-card">
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
