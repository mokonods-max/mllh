// MockData.js - Centralized Data Architecture
window.MockData = {};
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
    textAr: 'عطر الروز البغدادي أخذني لعالم ثاني. ثبات وفخامة غير طبيعية، والتغليف وحده تحفة فنية. فعلاً روز بغداد اسم على مسمى.',
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
    textAr: 'البخور الأزرق الفاخر غيّر جو البيت بالكامل. رائحة صافية بدون أي رائحة حرق، ثباته بالديوانية يظل لأيام. خدمة التوصيل كانت سريعة جداً.',
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
    dynamicEyebrow:     'اختيارات',
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
    womenF2:            'مسك أبيض يغمرك بالنعومة والدفء',
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
    ctaBannerTitle:     'هل أنت مستعد لاكتشاف عطرك القادم؟',
    ctaBannerDesc:      'استكشف مجموعتنا الفاخرة من العطور والبخور الملكي.',
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
    ctaBannerTitle:     'Ready to discover your next signature scent?',
    ctaBannerDesc:      'Explore our luxury collection of perfumes and royal incense.',
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

// Expose globally for app.js
window.images = images;
window.platformProducts = platformProducts;
window.faqData = faqData;
window.testimonialsData = testimonialsData;
window.T = T;
