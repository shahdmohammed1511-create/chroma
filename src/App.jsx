import { useId, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Gem,
  Gift,
  GlassWater,
  Globe,
  Heart,
  MapPin,
  Menu,
  Palette,
  Scissors,
  Sparkles,
  Ticket,
  X,
} from 'lucide-react'
import './App.css'

const currentExperience = {
  edition: '02',
  titleEn: 'Pumpkin Painting × Macramé Keychain Workshop',
  titleAr: 'ورشة تلوين اليقطين الكونكريت × ميدالية المكرمية',
  dateEn: 'Friday, 30 October',
  dateAr: 'الجمعة، 30 أكتوبر',
  timeEn: '4:00 PM — 8:00 PM',
  timeAr: '4:00 عصراً — 8:00 مساءً',
  venueEn: 'Cielo',
  venueAr: 'كافيه Cielo',
  areaEn: '10th of Ramadan City · Ninth District Corniche',
  areaAr: 'مدينة العاشر من رمضان · كورنيش الحي التاسع',
  start: '20261030T160000',
  end: '20261030T200000',
  whatsapp: '201093570201',
  instaPay: '01093570201',
  prices: {
    solo: 400,
    besties: 700,
    child: 100,
  },
}

const translations = {
  en: {
    langLabel: 'العربية',
    langToggleAria: 'Switch language to Arabic',
    announcement: 'Creative experiences, by Chroma',
    brandTagline: 'BEAUTY, WITH A TWIST',
    nav: {
      howItWorks: 'How Chroma works',
      elements: 'The 4 Elements',
      edition: 'This edition',
      tickets: 'Tickets',
      details: 'The details',
      book: 'Find your spot',
    },
    hero: {
      eyebrow: 'CHROMA EXPERIENCES',
      h1_main: 'A little',
      h1_em: 'magic.',
      h1_sub: 'Made by you.',
      note: 'A hands-on afternoon of painting your own solid cast-concrete pumpkin with acrylics & brushes, knotting a spiral macramé keychain, and enjoying good company.',
      bookingStatus: 'NOW BOOKING',
      edition: 'EDITION 02',
      date: 'Friday, 30 October',
      time: '4:00 PM — 8:00 PM',
      venue: 'Cielo',
      area: '10th of Ramadan City · Ninth District Corniche',
      bookBtn: 'Book this experience',
      calendarBtn: 'Add to calendar',
      scrollCue: 'SCROLL TO THE 4 ELEMENTS',
      bottomNoteLeft: 'ONE GOOD IDEA, A BRAND NEW WAY TO PLAY',
      bottomNoteRight: 'THE CHROMA WAY',
    },
    heroArt: {
      fourWays: 'FOUR',
      waysEm: 'WAYS',
      toPlay: 'TO PLAY',
      pill: 'CONCRETE · MACRAMÉ · GLITTER · CIELO DRINK',
      macramePendant: 'Spiral Macramé Keychain',
      tag: 'Solid Concrete Painting · Spiral Macramé · Face Glitter · Cielo Drink',
    },
    elementsSection: {
      eyebrow: 'EDITION 02 · THE 4 EXPERIENCES',
      titleMain: 'Four lovely things.',
      titleEm: 'One unforgettable afternoon.',
      intro: 'Everything thoughtfully arranged so you can paint, knot, sparkle and sip by the corniche sunset.',
      banner: 'ALL 4 EXPERIENCES ARE INCLUDED IN EVERY WORKSHOP TICKET',
      items: [
        {
          num: '01',
          badge: 'SOLID CONCRETE',
          title: 'Concrete Pumpkin Painting',
          subtitle: 'Hand-poured cast mold & acrylics',
          desc: 'Every guest receives a solid cast-concrete pumpkin mold handcrafted exclusively for this edition. Paint with fine brushes and a vibrant acrylic palette, then seal it to take home forever.',
          perks: ['100% Solid Cast Mold', 'Full Acrylic Palette & Brushes', 'Sealer Coat to Take Home'],
        },
        {
          num: '02',
          badge: 'SPIRAL MACRAMÉ',
          title: 'Spiral Macramé Keychain',
          subtitle: 'Pure cotton rope & gold clasp',
          desc: 'Hand-knot your own spiral macramé keychain with natural cotton rope and a luxury gold swivel lobster clasp. Choose from Terracotta Rose, Blush Pink, or Natural Cream.',
          perks: ['Luxury Gold Hardware', '3 Aesthetic Girly Colors', 'Fluffy Combed Tassel'],
        },
        {
          num: '03',
          badge: 'FESTIVAL GLITTER',
          title: 'Face Glitter Station',
          subtitle: 'Cosmetic holographic sparkle',
          desc: 'Add shimmering holographic cosmetic glitter and delicate gem touches to your cheeks and eyes. Skin-safe, sparkly, and made for stunning aesthetic sunset photos.',
          perks: ['Holographic & Iridescent', 'Cosmetic Skin-Safe Gel', 'Perfect for Photos'],
        },
        {
          num: '04',
          badge: 'CIELO DRINK',
          title: 'A Drink from Cielo',
          subtitle: 'Complimentary drink of your choice',
          desc: 'Enjoy a complimentary refreshing drink of your choice from Cielo\'s menu (iced coffee, iced latte, matcha, fruit refresher, or artisanal cold brew) while you create, chat, and relax by the corniche.',
          perks: ['Complimentary Drink Included', 'Choice of Any Drink from Cielo Menu', 'Ninth District Corniche Sunset'],
        },
      ],
    },
    experience: {
      eyebrow: 'EDITION 02 · THIS TIME AROUND',
      titleMain: 'Pumpkin Painting',
      titleEm: '× Macramé Keychain',
      intro: 'A new creative workshop: paint a handcrafted cast-concrete pumpkin with acrylic paints & fine brushes, make a macramé keychain, and enjoy an afternoon at Cielo.',
      kicker: 'YOUR TICKET INCLUDES',
      kidsTitle: 'A KIDS TABLE FOR MUMS',
      kidsDesc: 'Children can enjoy their own colouring pages, colours and juice while you take part in the workshop.',
      ruleLeft: 'MADE WITH LOVE',
      ruleRight: 'TAKEN HOME BY YOU',
      inclusions: [
        {
          title: 'Solid Concrete Pumpkin Painting',
          detail: 'Paint and personalize your own solid handcrafted cast-concrete pumpkin with a full palette of vibrant acrylics and fine brushes — yours to take home forever.',
          badge: 'CAST CONCRETE × ACRYLICS',
          chips: ['100% Solid Cast Mold', 'Complete Acrylic Palette', 'Fine Artist Brushes', 'Ghosts, Webs & Daisies'],
          icon: Gem,
        },
        {
          title: 'Spiral Macramé Keychain',
          detail: 'Hand-knot your own spiral macramé keychain with natural cotton rope and a polished gold swivel lobster clasp. Choose your shade (Terracotta Rose, Blush Pink, or Natural Cream).',
          badge: 'GOLD SWIVEL CLASP + COTTON',
          chips: ['Terracotta Rose', 'Blush Pink', 'Natural Cream', 'Guided Spiral Knotting'],
          icon: Scissors,
        },
        {
          title: 'Face Glitter Station',
          detail: 'Add festival-style holographic and iridescent cosmetic sparkle to your cheeks and eyes. High-pigment, skin-safe, and perfect for cute aesthetic afternoon photos.',
          badge: 'HOLOGRAPHIC & SKIN-SAFE',
          chips: ['Iridescent Chunky Glitter', 'Delicate Face Gems', 'High-Pigment Shimmer', 'Photo-Ready Festival Vibe'],
          icon: Sparkles,
        },
        {
          title: 'A Drink from Cielo',
          detail: 'Enjoy a complimentary drink of your choice from Cielo while you create, listen to music, and spend the autumn afternoon by the corniche.',
          badge: 'COMPLIMENTARY DRINK OF CHOICE',
          chips: ['Any Drink from Cielo Menu', 'Iced Latte, Refresher or Cold Brew', 'Sunset by Ninth District Corniche'],
          icon: GlassWater,
        },
        {
          title: 'A Little Giveaway',
          detail: 'Two lucky guests will win a special discount on therapeutic hair-care sessions and Chroma beauty gifts.',
          badge: 'CHROMA COMMUNITY GIFTS',
          chips: ['Hair-care Session Discounts', 'Chroma Beauty Treats', 'Announced at Sunset'],
          icon: Gift,
        },
      ],
    },
    tickets: {
      visualKicker: 'THIS EDITION',
      visualTitleMain: 'MAKE',
      visualTitleEm: 'it',
      visualTitleSub: 'YOURS',
      visualCaption: 'PUMPKIN × MACRAMÉ',
      eyebrow: 'YOUR AFTERNOON, YOUR CALL',
      titleMain: 'Pick your',
      titleEm: 'kind of fun.',
      solo: {
        name: 'Solo ticket',
        tagline: 'One workshop spot',
        price: 400,
      },
      besties: {
        name: 'Besties ticket',
        badge: 'INSTEAD OF EGP 800',
        tagline: 'Two spots to share',
        price: 700,
      },
      kidsLabel: 'Add a child to the Kids Table',
      kidsSub: 'Colouring pages, colours and juice · +EGP 100',
      bookBtn: 'Book via WhatsApp',
      spotsNote: 'Limited spots available.',
      paymentNote: 'To book, transfer the ticket total via InstaPay to',
      paymentFollow: ', then send a screenshot with your name and phone number on WhatsApp.',
      currency: 'EGP',
    },
    details: {
      eyebrow: 'PUT IT IN YOUR PLANS',
      titleMain: 'Meet us',
      titleEm: 'there.',
      when: {
        label: 'THE WHEN',
        title: 'Friday, 30 October',
        time: '4:00 PM — 8:00 PM',
        action: 'Add to calendar',
      },
      where: {
        label: 'THE WHERE',
        title: 'Cielo',
        area: '10th of Ramadan City · Ninth District Corniche',
        action: 'Open in maps',
      },
      plan: {
        label: 'THE PLAN',
        title: 'Four creative hours',
        sub: 'A creative afternoon at Cielo',
        action: 'Ask us anything',
      },
    },
    journal: {
      eyebrow: 'THE CHROMA EVENT JOURNAL',
      titleMain: 'New editions.',
      titleEm: 'Old favourites.',
      intro: 'Every experience gets its own page in the story. Explore what is coming next, then look back at where it began.',
      upcoming: {
        status: 'UP NEXT · EDITION 02 · BOOKING OPEN',
        title: 'Pumpkin Painting × Macramé Keychain',
        venue: 'Friday, 30 October · Cielo, 10th of Ramadan City',
        chips: ['Solid Cast Pumpkins', 'Acrylic Palette', 'Spiral Macramé', 'Cielo Drink'],
        highlight: 'Every guest receives a solid cast-concrete pumpkin to paint and personalize, plus learns spiral macramé with a gold swivel clasp.',
        action: 'Explore edition details',
        photos: [
          { label: 'CAST PUMPKINS', sub: 'Solid concrete molds + acrylic paints & doodles' },
          { label: 'SPIRAL MACRAMÉ', sub: 'Natural cotton cord with gold swivel hardware' },
          { label: 'WORKSHOP VIBES', sub: 'Cielo venue, music, drinks & face glitter' },
        ],
      },
      past: {
        status: 'PAST EVENT · EDITION 01 · COMPLETE',
        title: 'Lipgloss Making × Bedazzling',
        venue: 'Thursday, 1 October · Nineteen Cafe',
        chips: ['Custom Lipgloss Lab', 'Swarovski Bedazzling', 'Girls Afternoon'],
        highlight: 'Our very first Chroma girls afternoon: formulating custom tints and bedazzling gloss tubes with crystals.',
        action: 'A look back at our very first Chroma girls afternoon.',
        photos: [
          { label: 'THE COMMUNITY', sub: 'Chroma girls making magic together' },
          { label: 'LIPGLOSS LAB', sub: 'Blending custom tints, oils & shimmers' },
          { label: 'CRYSTAL ART', sub: 'Custom sparkling tubes with crystals' },
        ],
      },
    },
    social: {
      eyebrow: 'FOLLOW ALONG FOR THE NEXT ONE',
      titleMain: 'What\'s next?',
      titleEm: 'Chroma knows.',
      intro: 'New experiences, dates, and little previews live over on Instagram.',
      igChroma: 'FIND US ON INSTAGRAM',
      igDearly: 'MADE WITH',
    },
    footer: {
      tagline: 'NEW EXPERIENCES, EVERY EDITION',
      credit: 'Digital Experience by Dearly',
      dearlyLabel: 'DIGITAL EXPERIENCE & DIRECTION',
      dearlyName: 'Dearly Studio',
      dearlyDesc: 'Crafting bespoke digital experiences & boutique brand moments for exceptional creators.',
      dearlyAction: 'Visit @dearly_digitalstudio on Instagram',
      copyright: '© 2026 Chroma Experiences · Directed & Crafted by Dearly Digital Studio.',
    },
    mobileBar: {
      book: 'Book your spot',
      kidsSuffix: ' + Kids Table',
    },
  },
  ar: {
    langLabel: 'English',
    langToggleAria: 'التحويل إلى اللغة الإنجليزية',
    announcement: 'ورش وتجارب إبداعية للبنات · من مجتمع كروما',
    brandTagline: 'فن، صحبة حلوة، ولمسات تصنعيها بإيديكي',
    nav: {
      howItWorks: 'عن كروما',
      elements: 'تجربة اليوم',
      edition: 'الإيديشن الحالي',
      tickets: 'التذاكر والحجز',
      details: 'المكان والميعاد',
      book: 'احجزي مكانكِ',
    },
    hero: {
      eyebrow: 'إيديشن خريفي خاص للبنات · العاشر من رمضان',
      h1_main: 'يوم دافي،',
      h1_em: 'ولمسات تصنعيها',
      h1_sub: 'بإيديكي.',
      note: 'أمسية خريفية رايقة على الكورنيش: تلوني يقطينتكِ الكونكريت الصلبة بالألوان والفرش الدقيقة، وتعملي ميدالية مكرمية سبايرال شيك تاخديها معاكي، مع مشروب منعش من اختيارك في Cielo ولمسات فيس جليتر براقة وموسيقى هادية.',
      bookingStatus: 'الحجز متاح الآن',
      edition: 'إيديشن 02',
      date: 'الجمعة، 30 أكتوبر',
      time: 'من 4:00 عصراً لـ 8:00 مساءً',
      venue: 'كافيه Cielo',
      area: 'العاشر من رمضان · كورنيش الحي التاسع',
      bookBtn: 'احجزي مكانكِ مع صحباتكِ',
      calendarBtn: 'ضيفي الميعاد للتقويم',
      scrollCue: 'شوفي كل اللي مستنيكي في اليوم',
      bottomNoteLeft: 'أمسية رايقة تجمع بين الفن، اللمة الحلوة، والذكريات',
      bottomNoteRight: 'طريقة كروما',
    },
    heroArt: {
      fourWays: '4 تجارب',
      waysEm: 'مميزة',
      toPlay: 'في يوم واحد',
      pill: 'كونكريت · مكرمية · فيس جليتر · مشروب سيلو',
      macramePendant: 'ميدالية مكرمية سبايرال بمشبك دهبي',
      tag: 'كونكريت يدوي · مكرمية قطن · جليتر · مشروب مجاني',
    },
    elementsSection: {
      eyebrow: 'إيديشن 02 · كل تفصيلة مشمولة في تذكرتك',
      titleMain: 'أربع تجارب حلوة،',
      titleEm: 'في يوم واحد مش هيتنسي.',
      intro: 'كل حاجة جهزناها بحب علشان تفصلي من زحمة الأسبوع: تلوني، تشتغلي بإيديكي، تدلعي نفسك بالجليتر، وتستمتعي بمشروبك المفضل مع غروب الكورنيش واللمة الحلوة.',
      banner: 'التجارب الأربعة كاملة بالخامات والمشروب مشمولة في كل تذكرة',
      items: [
        {
          num: '01',
          badge: 'كونكريت صلب',
          title: 'تلوين يقطين الكونكريت',
          subtitle: 'مجسم صلب يدوي الصنع + ألوان أكريليك',
          desc: 'هتستلمي يقطينتك المصنوعة من الكونكريت الصلب بجودة عالية، مع باليت ألوان أكريليك كاملة وفرش رسم ناعمة علشان تبدعي في تلوينها وتاخديها معاكي ديكور دائم لبيتك.',
          perks: ['مجسم كونكريت صلب 100% يدوي الصنع', 'باليت ألوان أكريليك وفرش دقيقة', 'ورنيش حماية نهائي لتدوم معاكي'],
        },
        {
          num: '02',
          badge: 'مكرمية سبايرال',
          title: 'حياكة ميدالية المكرمية',
          subtitle: 'خيوط قطن طبيعية ومشبك ذهبي شيك',
          desc: 'هتتعلمي عقدة السبايرال الشهيرة خطوة بخطوة وتعملي ميدالية مفاتيح راقية بخيوط القطن الناعمة ومشبك دوار مطلي بالذهب، وتختاري درجتك المفضلة من 3 ألوان بناتي جذابة.',
          perks: ['مشبك دوار ذهبي متين وفاخر', '3 درجات ألوان راقية تختاري منها', 'شراشيب قطنية مُمشطة بطريقة احترافية'],
        },
        {
          num: '03',
          badge: 'فيس جليتر',
          title: 'ركن الفيس جليتر',
          subtitle: 'لمسات بريق كوزمتك هولوجرافي',
          desc: 'رشة بريق ساحرة على الوجنتين مع كريستالات رقيقة مخصصة للوجه وآمنة تماماً على البشرة، علشان تطلعي بأحلى صور بناتي مع إضاءة الغروب الذهبية.',
          perks: ['جليتر هولوجرافي عاكس للنور', 'جل كوزمتك آمن تماماً وخفيف على البشرة', 'إطلالة مثالية لجلسة تصوير الغروب'],
        },
        {
          num: '04',
          badge: 'مشروب سيلو',
          title: 'مشروبك المفضل من Cielo',
          subtitle: 'مشروب مجاني من اختيارك من المنيو',
          desc: 'اختاري المشروب اللي بتحبيه من منيو Cielo (آيس لاتيه، ماتشا باردة، ريفرشر فواكه مثلج، أو كولد برو) تستمتعي بيه وإنتي بترسمي وبتتكلمي مع صاحباتك على الكورنيش.',
          perks: ['مشروب مجاني مشمول مع كل تذكرة', 'اختاري أي نوع تفضليه من منيو كافيه Cielo', 'قعدة رايقة مع منظر الغروب في الحي التاسع'],
        },
      ],
    },
    experience: {
      eyebrow: 'إيديشن 02 · كل اللي مستنيكي',
      titleMain: 'فن، صحبة رايقة،',
      titleEm: 'وذكريات تصنعيها بنفسك.',
      intro: 'مش مجرد ورشة عادية، دي مساحة للبنات علشان يفصلوا من الروتين، يكتشفوا جانبهم الفني، ويقضوا 4 ساعات مليانين ضحك وإبداع.',
      kicker: 'كل ده مشمول في تذكرتك',
      kidsTitle: 'طاولة خاصة ومجهزة للأطفال للأمهات',
      kidsDesc: 'لو حابة تيجي مع طفلك، جهزنالهم طاولة ممتعة خاصة بأوراق التلوين والألوان والعصير، علشان تستمتعي بوقتك براحة تامة وهو مبسوط.',
      ruleLeft: 'صُنعت بحب وإتقان',
      ruleRight: 'بتاخدي كل شغلك معاكي للبيت',
      inclusions: [
        {
          title: 'يقطين كونكريت تلوينه بإيديكي',
          detail: 'تلوين وتصميم يقطينتكِ الخاصة المصنوعة من الكونكريت الصلب بالألوان الأكريليك والفرش الدقيقة وحمايتها بورنيش عازل — تاخديها تذكار دائم لبيتك.',
          badge: 'كونكريت صلب × ألوان أكريليك',
          chips: ['مجسم كونكريت صلب 100%', 'باليت ألوان أكريليك كاملة', 'فرش رسم دقيقة', 'أفكار رسومات أشباح وورود وخيوط عنكبوت'],
          icon: Gem,
        },
        {
          title: 'ميدالية مكرمية سبايرال بمشبك دهبي',
          detail: 'تعليم خطوات غرزة السبايرال للمكرمية بحبال القطن الطبيعي ومشبك دوار ذهبي راقي، مع اختيار اللون المفضل (تراكوتا، بلش بينك، كريمي).',
          badge: 'مشبك ذهبي فاخر + قطن طبيعي',
          chips: ['تراكوتا روز', 'بلش بينك', 'ناتشورال كريم', 'تعليم الغرزة خطوة بخطوة بكل سهولة'],
          icon: Scissors,
        },
        {
          title: 'فيس جليتر وكريستال براق',
          detail: 'لمسات جليتر هولوجرافي مبهج وكريستالات رقيقة على الوجنتين والعيون. آمن تماماً على البشرة، عالي اللمعان ومثالي للصور التذكارية.',
          badge: 'هولوجرافي وآمن على البشرة',
          chips: ['جليتر هولوجرافي مبهج', 'كريستالات وجواهر رقيقة', 'توهج عالي اللمعان', 'جلسة تصوير مع إضاءة الغروب'],
          icon: Sparkles,
        },
        {
          title: 'مشروبك المفضل من Cielo مجاناً',
          detail: 'استمتعي بمشروبكِ المفضل مجاناً من منيو كافيه Cielo وإنتي بترسمي وتسمعي الموسيقى وتستمتعي بجمال الكورنيش.',
          badge: 'مشروب مجاني من اختياركِ',
          chips: ['أي مشروب من منيو كافيه سيلو', 'آيس لاتيه، ريفرشر فواكه أو كولد برو', 'إطلالة الغروب على كورنيش العاشر'],
          icon: GlassWater,
        },
        {
          title: 'هدايا ومفاجآت من كروما',
          detail: 'سحوبات وهدايا خاصة لاثنتين من الحاضرات تتضمن خصومات على جلسات العناية بالشعر وهدايا كروما التجميلية اللطيفة.',
          badge: 'هدايا مجتمع كروما',
          chips: ['خصومات جلسات العناية بالشعر', 'هدايا كروما التجميلية', 'إعلان الفائزات مع الغروب'],
          icon: Gift,
        },
      ],
    },
    tickets: {
      visualKicker: 'الإيديشن الثاني',
      visualTitleMain: 'اصنعي',
      visualTitleEm: 'حكايتكِ',
      visualTitleSub: 'معانا',
      visualCaption: 'يقطين × مكرمية',
      eyebrow: 'اختاري التذكرة المناسبة ليكي',
      titleMain: 'وحدك أو مع',
      titleEm: 'صاحباتكِ.',
      solo: {
        name: 'تذكرة فردية Solo',
        tagline: 'مكان واحد شامل كافة الخامات والمشروب والفيس جليتر',
        price: 400,
      },
      besties: {
        name: 'تذكرة الصديقات Besties',
        badge: 'وفري 100 ج.م (بدلاً من 800)',
        tagline: 'مكانين ليكي ولصاحبتك عشان تشاركوا الأمسية مع بعض',
        price: 700,
      },
      kidsLabel: 'إضافة طفل لطاولة الأطفال',
      kidsSub: 'رسومات تلوين، ألوان شمع وفلوماستر، وعصير منعش · +100 ج.م',
      bookBtn: 'احجزي دلوقتي عبر واتساب',
      spotsNote: 'الأماكن محدودة لضمان أجواء هادية ومريحة لكل البنات.',
      paymentNote: 'لتأكيد حجزك، حوّلي قيمة التذكرة عبر إنستاباي InstaPay إلى الرقم',
      paymentFollow: '، وابعثي لنا سكرين شوت بالتحويل مع اسمك ورقمك على واتساب.',
      currency: 'ج.م',
    },
    details: {
      eyebrow: 'سجلي الميعاد في يومك',
      titleMain: 'مستنيين نشوفك',
      titleEm: 'في Cielo.',
      when: {
        label: 'الميعاد والوقت',
        title: 'الجمعة، 30 أكتوبر',
        time: 'من 4:00 عصراً لـ 8:00 مساءً',
        action: 'ضيفي إلى تقويمكِ',
      },
      where: {
        label: 'المكان والعنوان',
        title: 'كافيه Cielo',
        area: 'العاشر من رمضان · كورنيش الحي التاسع',
        action: 'افتحي اللوكيشن في خرائط جوجل',
      },
      plan: {
        label: 'البرنامج',
        title: '4 ساعات من الإبداع والروقان',
        sub: 'أمسية خريفية ملهمة في كافيه سيلو',
        action: 'ابعتيلنا أي سؤال على واتساب',
      },
    },
    journal: {
      eyebrow: 'أرشيف إيديشنز كروما',
      titleMain: 'نسخ جديدة،',
      titleEm: 'وذكريات بنعيشها سوا.',
      intro: 'كل إيديشن في كروما وراه فكرة مميزة وتجربة مختلفة. شوفي النسخة اللي جاية وشاركينا فيها، وألقي نظرة على ذكريات الإيديشن الأول.',
      upcoming: {
        status: 'الإيديشن القادم · النسخة 02 · الحجز متاح',
        title: 'تلوين اليقطين الكونكريت × ميدالية المكرمية',
        venue: 'الجمعة، 30 أكتوبر · كافيه Cielo، العاشر من رمضان',
        chips: ['يقطين كونكريت صلب', 'باليت ألوان أكريليك', 'مكرمية سبايرال', 'مشروب سيلو'],
        highlight: 'هتتعلمي تصنعي قطعتين ديكور شيك بإيديكي تاخديهم معاكي للبيت، في أجواء هادية مليانة فن ومشروبات وجليتر.',
        action: 'شوفي تفاصيل الإيديشن واعرفي أكتر',
        photos: [
          { label: 'اليقطين الكونكريت', sub: 'مجسمات صلبة مصبوبة يدوياً جاهزة للتلوين' },
          { label: 'المكرمية السبايرال', sub: 'خيوط قطن طبيعية ومشبك ذهبي راقي' },
          { label: 'أجواء الورشة', sub: 'قعدة على الكورنيش في Cielo، موسيقى وفيس جليتر' },
        ],
      },
      past: {
        status: 'الإيديشن السابق · النسخة 01 · اكتمل بنجاح',
        title: 'صناعة الليب جلوس × تزيين الكريستال',
        venue: 'الخميس، 1 أكتوبر · كافيه Nineteen',
        chips: ['تركيب درجات الليب جلوس', 'تزيين بكريستال سواروفسكي', 'أمسية بناتي خاصة'],
        highlight: 'أول انطلاقة لمجتمع كروما: دمجنا درجات الليب جلوس الطبيعية وزيّنا العبوات بالكريستال البراق في يوم ساحر للبنات.',
        action: 'شوفي لقطات وصور من ذكريات إيديشن 01',
        photos: [
          { label: 'بنات كروما', sub: 'أجواء وضحكات وذكريات جمعتنا سوا' },
          { label: 'معمل الليب جلوس', sub: 'دمج الدرجات والزيوت الطبيعية والنكهات' },
          { label: 'فن الكريستال', sub: 'تزيين عبوات الجلوس بالأحجار البراقة' },
        ],
      },
    },
    social: {
      eyebrow: 'خليكي قريبة وتابعي جديدنا',
      titleMain: 'عايزة تعرفي إيه اللي جاي؟',
      titleEm: 'كروما هتكشفه على إنستغرام.',
      intro: 'مواعيد الفعاليات الجديدة والصور الحصرية بنشاركها دائماً أول بأول على صفحتنا.',
      igChroma: 'تابعي كروما على إنستغرام',
      igDearly: 'تصميم التجربة الرقمية',
    },
    footer: {
      tagline: 'تجارب وأفكار جديدة مع كل إيديشن',
      credit: 'التجربة الرقمية من تطوير استوديو Dearly',
      dearlyLabel: 'تصميم وتطوير التجربة الرقمية',
      dearlyName: 'استوديو Dearly الرقمي',
      dearlyDesc: 'صناعة تجارب رقمية مميزة وهوية إبداعية للعلامات الاستثنائية والفعاليات الراقية.',
      dearlyAction: 'تابعي استوديو @dearly_digitalstudio على إنستغرام',
      copyright: '© 2026 فعاليات كروما · تصميم وتطوير استوديو Dearly الرقمي.',
    },
    mobileBar: {
      book: 'احجزي مكانكِ',
      kidsSuffix: ' + طاولة الأطفال',
    },
  },
}

// Reusable chubby cast-concrete pumpkin shape helper
function PumpkinShape({
  id,
  x = 0,
  y = 0,
  scale = 1,
  rotation = 0,
  bodyColor = '#ea93a8',
  shadowColor = '#7a2840',
  lobeLight = '#fedde6',
  stemColor = '#4f7247',
  stemLight = '#82aa78',
  decorations = null,
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotation}, 68, 65) scale(${scale})`}>
      {/* Drop shadow on tabletop */}
      <ellipse cx="68" cy="116" rx="55" ry="12" fill="#2d1520" opacity=".22" filter="blur(4px)" />

      {/* Stem socket hollow */}
      <ellipse cx="68" cy="24" rx="14" ry="5.5" fill={shadowColor} opacity=".65" />

      {/* Realistic Sculpted Concrete Stem */}
      <path
        d="M 64 24
           C 61 14, 57 4, 54 -2
           C 57 -3, 67 -1, 71 2
           C 73 9, 72 17, 72 24
           Z"
        fill={stemColor}
      />
      <path
        d="M 67 24
           C 66 14, 64 6, 62 0
           C 65 0, 70 2, 71 2
           C 73 9, 72 17, 72 24
           Z"
        fill={stemLight}
        opacity=".5"
      />
      <ellipse cx="62" cy="0" rx="4" ry="2" fill="#324a2e" transform="rotate(-15, 62, 0)" />

      {/* 5 Distinct Rounded Concrete Lobes */}
      {/* Lobe 1 - Far Left */}
      <path
        d="M 68 24 C 46 24, 26 36, 25 54 C 24 76, 30 96, 42 105 C 16 102, 0 78, 8 52 C 20 28, 50 18, 68 24 Z"
        fill={bodyColor}
      />
      {/* Lobe 2 - Mid Left */}
      <path
        d="M 68 24 C 52 24, 38 38, 38 58 C 38 80, 44 98, 56 106 C 36 100, 26 78, 30 52 C 34 32, 52 24, 68 24 Z"
        fill={bodyColor}
      />
      {/* Lobe 3 - Plump Center */}
      <path
        d="M 68 24 C 54 24, 46 42, 46 64 C 46 88, 54 106, 68 107 C 82 106, 90 88, 90 64 C 90 42, 82 24, 68 24 Z"
        fill={bodyColor}
      />
      {/* Lobe 4 - Mid Right */}
      <path
        d="M 68 24 C 84 24, 98 38, 98 58 C 98 80, 92 98, 80 106 C 100 100, 110 78, 106 52 C 102 32, 84 24, 68 24 Z"
        fill={bodyColor}
      />
      {/* Lobe 5 - Far Right */}
      <path
        d="M 68 24 C 90 24, 110 36, 111 54 C 112 76, 106 96, 94 105 C 120 102, 136 78, 128 52 C 116 28, 86 18, 68 24 Z"
        fill={bodyColor}
      />

      {/* Crevice grooves between lobes */}
      <path d="M 42 105 C 28 84, 26 54, 46 25" fill="none" stroke={shadowColor} strokeWidth="2.6" strokeLinecap="round" opacity=".55" />
      <path d="M 58 106 C 48 85, 48 48, 60 25" fill="none" stroke={shadowColor} strokeWidth="2.3" strokeLinecap="round" opacity=".5" />
      <path d="M 78 106 C 88 85, 88 48, 76 25" fill="none" stroke={shadowColor} strokeWidth="2.3" strokeLinecap="round" opacity=".5" />
      <path d="M 94 105 C 108 84, 110 54, 90 25" fill="none" stroke={shadowColor} strokeWidth="2.6" strokeLinecap="round" opacity=".55" />

      {/* Highlights along grooves */}
      <path d="M 44 103 C 31 82, 30 54, 48 26" fill="none" stroke={lobeLight} strokeWidth="1.3" strokeLinecap="round" opacity=".42" />
      <path d="M 61 104 C 51 84, 51 48, 63 26" fill="none" stroke={lobeLight} strokeWidth="1.3" strokeLinecap="round" opacity=".42" />
      <path d="M 75 104 C 85 84, 85 48, 73 26" fill="none" stroke={lobeLight} strokeWidth="1.3" strokeLinecap="round" opacity=".42" />
      <path d="M 92 103 C 105 82, 107 54, 88 26" fill="none" stroke={lobeLight} strokeWidth="1.3" strokeLinecap="round" opacity=".42" />

      {/* Cheek highlights */}
      <ellipse cx="28" cy="58" rx="8" ry="17" fill={lobeLight} opacity=".26" />
      <ellipse cx="50" cy="62" rx="7" ry="19" fill={lobeLight} opacity=".32" />
      <ellipse cx="68" cy="65" rx="11" ry="21" fill={lobeLight} opacity=".38" />
      <ellipse cx="86" cy="62" rx="7" ry="19" fill={lobeLight} opacity=".32" />
      <ellipse cx="108" cy="58" rx="8" ry="17" fill={lobeLight} opacity=".26" />

      {/* Top crown rim light */}
      <path d="M 24 35 C 45 22, 91 22, 112 35" fill="none" stroke={lobeLight} strokeWidth="2.5" strokeLinecap="round" opacity=".45" />

      {/* Concrete pores & fine specks */}
      {[[22,60],[35,78],[48,52],[55,92],[68,68],[80,85],[92,58],[105,76],[118,62],[38,92],[62,100],[82,98],[100,92]].map(([cx,cy],i) => (
        <circle key={i} cx={cx} cy={cy} r={i%3===0 ? 1.3 : 0.75} fill={shadowColor} opacity={i%2===0 ? .32 : .18} />
      ))}

      {/* Hand-painted decorations */}
      {decorations}
    </g>
  )
}

// Reusable spiral macramé keychain graphic (with gold lobster clasp & combed fringe)
function MacrameKeychainGraphic({
  x = 0,
  y = 0,
  scale = 1,
  rotation = 0,
  cordColor = '#e5a5b2',
  shadowColor = '#9e5868',
  lightColor = '#fde2e8',
  goldGradientId = 'gold-hardware',
}) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotation}) scale(${scale})`}>
      {/* Drop shadow */}
      <path d="M 12 36 L 24 36 L 30 190 L 6 190 Z" fill="#2d1520" opacity=".16" filter="blur(3px)" />

      {/* Swivel ring */}
      <ellipse cx="18" cy="42" rx="7.5" ry="4.5" fill="none" stroke={`url(#${goldGradientId})`} strokeWidth="2.8" />
      <rect x="13.5" y="33" width="9" height="7" rx="2" fill={`url(#${goldGradientId})`} />
      {/* Lobster clasp body */}
      <path d="M 12 34 C 10 22 10 12 16 4 C 19 0 23 2 24 8 C 24 16 21 27 21 34 Z" fill={`url(#${goldGradientId})`} />
      <path d="M 13 22 C 15 16 18 10 22 10" fill="none" stroke="#fff8d6" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="16" x2="22" y2="18" stroke="#fef08a" strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="15.5" cy="22" r="1.5" fill="#8d6e18" />

      {/* Cord loop through ring */}
      <path d="M 13.5 42 C 13.5 37 22.5 37 22.5 42 L 22.5 48 L 13.5 48 Z" fill={cordColor} />

      {/* Spiral twisted half-square knot braid */}
      <g>
        <path d="M 13 47 C 7 53 11 60 21 58 C 25 57 25 51 18 49 Z" fill={cordColor} />
        <path d="M 10 53 C 14 55 19 55 23 57" stroke={lightColor} strokeWidth="1.2" fill="none" />
        <path d="M 14 48 C 12 55 16 58 19 58" stroke={shadowColor} strokeWidth="1" fill="none" opacity=".5" />

        <path d="M 18 58 C 25 62 26 70 16 70 C 11 70 10 64 16 61 Z" fill={cordColor} />
        <path d="M 23 63 C 20 67 15 67 12 69" stroke={lightColor} strokeWidth="1.2" fill="none" />
        <path d="M 18 60 C 22 64 18 69 15 70" stroke={shadowColor} strokeWidth="1" fill="none" opacity=".5" />

        <path d="M 13 70 C 7 75 11 82 21 81 C 25 80 25 74 18 72 Z" fill={cordColor} />
        <path d="M 10 75 C 14 77 19 77 23 79" stroke={lightColor} strokeWidth="1.2" fill="none" />
        <path d="M 14 71 C 12 77 16 80 19 81" stroke={shadowColor} strokeWidth="1" fill="none" opacity=".5" />

        <path d="M 18 81 C 25 85 26 93 16 93 C 11 93 10 87 16 84 Z" fill={cordColor} />
        <path d="M 23 86 C 20 90 15 90 12 92" stroke={lightColor} strokeWidth="1.2" fill="none" />
        <path d="M 18 83 C 22 87 18 92 15 93" stroke={shadowColor} strokeWidth="1" fill="none" opacity=".5" />

        <path d="M 13 93 C 7 98 11 105 21 104 C 25 103 25 97 18 95 Z" fill={cordColor} />
        <path d="M 10 98 C 14 100 19 100 23 102" stroke={lightColor} strokeWidth="1.2" fill="none" />
        <path d="M 14 94 C 12 100 16 103 19 104" stroke={shadowColor} strokeWidth="1" fill="none" opacity=".5" />

        <path d="M 18 104 C 25 108 26 116 16 116 C 11 116 10 110 16 107 Z" fill={cordColor} />
        <path d="M 23 109 C 20 113 15 113 12 115" stroke={lightColor} strokeWidth="1.2" fill="none" />
        <path d="M 18 106 C 22 110 18 115 15 116" stroke={shadowColor} strokeWidth="1" fill="none" opacity=".5" />

        <path d="M 13 116 C 7 121 11 128 21 127 C 25 126 25 120 18 118 Z" fill={cordColor} />
        <path d="M 10 121 C 14 123 19 123 23 125" stroke={lightColor} strokeWidth="1.2" fill="none" />
        <path d="M 14 117 C 12 123 16 126 19 127" stroke={shadowColor} strokeWidth="1" fill="none" opacity=".5" />

        <path d="M 18 127 C 25 131 25 139 16 139 C 11 139 10 133 16 130 Z" fill={cordColor} />
        <path d="M 23 132 C 20 136 15 136 12 138" stroke={lightColor} strokeWidth="1.2" fill="none" />
      </g>

      {/* Gathering Knot */}
      <rect x="11.5" y="139" width="13" height="15" rx="3" fill={cordColor} />
      <line x1="11.5" y1="142" x2="24.5" y2="142" stroke={shadowColor} strokeWidth="1.2" />
      <line x1="11.5" y1="146" x2="24.5" y2="146" stroke={shadowColor} strokeWidth="1.2" />
      <line x1="11.5" y1="150" x2="24.5" y2="150" stroke={shadowColor} strokeWidth="1.2" />

      {/* Combed Cotton Fringe */}
      <path d="M 12 154 C 8 178, 3 198, 1 208 C 9 209, 27 209, 35 208 C 33 198, 28 178, 24 154 Z" fill={cordColor} />
      {[
        'M 13 154 Q 10 180 3 207',
        'M 15 154 Q 12 182 7 208',
        'M 17 154 Q 15 182 12 208',
        'M 18 154 Q 18 182 18 208',
        'M 19 154 Q 21 182 24 208',
        'M 21 154 Q 24 182 29 208',
        'M 23 154 Q 26 180 33 207',
      ].map((p, i) => (
        <path key={i} d={p} fill="none" stroke={i % 2 === 0 ? lightColor : shadowColor} strokeWidth="0.8" opacity=".75" />
      ))}
    </g>
  )
}

// Concrete Pumpkin Art Component - ONLY pumpkins, palette and brush (no macrame overlapping)
function ConcretePumpkin({ className = '' }) {
  const artworkId = useId().replaceAll(':', '')

  return (
    <svg className={className} viewBox="0 0 460 330" role="img" aria-label="Hand-painted solid concrete pumpkins and acrylic palette">
      <defs>
        {/* Concrete matte texture filter */}
        <filter id={`${artworkId}-grain`} x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
          <feTurbulence type="fractalNoise" baseFrequency=".72 .68" numOctaves="4" seed="12" result="noise" />
          <feColorMatrix in="noise" type="saturate" values="0" result="grey" />
          <feComponentTransfer in="grey" result="pores">
            <feFuncA type="table" tableValues="0 0 0 .22" />
          </feComponentTransfer>
          <feBlend in="SourceGraphic" in2="pores" mode="multiply" />
        </filter>

        {/* Soft realistic drop shadow */}
        <filter id={`${artworkId}-drop`} x="-20%" y="-20%" width="150%" height="160%">
          <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="#2b1520" floodOpacity=".22" />
        </filter>

        {/* Paint palette glossy drop shadow */}
        <filter id={`${artworkId}-plate-shadow`} x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#25121b" floodOpacity=".18" />
        </filter>
      </defs>

      {/* ── BACKGROUND PUMPKIN (Far Left): Mini Orange with White Polka Dots ── */}
      <g filter={`url(#${artworkId}-grain)`}>
        <PumpkinShape
          id="p-back-left"
          x={-5} y={65} scale={0.82} rotation={-10}
          bodyColor="#ea6828"
          shadowColor="#822808"
          lobeLight="#ffa666"
          stemColor="#3a5c36"
          stemLight="#6c9c64"
          decorations={<>
            {[[28,52],[45,45],[68,52],[88,46],[106,54],[38,72],[68,75],[96,72],[52,90],[80,90]].map(([dx,dy],i) => (
              <circle key={i} cx={dx} cy={dy} r={i%2===0 ? 3.2 : 2.4} fill="white" opacity=".9" />
            ))}
          </>}
        />
      </g>

      {/* ── BACKGROUND PUMPKIN (Far Right): Pastel Lilac with Pink Hearts ── */}
      <g filter={`url(#${artworkId}-grain)`}>
        <PumpkinShape
          id="p-back-right"
          x={345} y={55} scale={0.86} rotation={10}
          bodyColor="#bfa8d5"
          shadowColor="#5a3d70"
          lobeLight="#ebdcf8"
          stemColor="#506e48"
          stemLight="#84ac7c"
          decorations={<>
            {[[45,55],[70,50],[92,58],[55,78],[82,78]].map(([hx,hy],i) => (
              <g key={i} transform={`translate(${hx},${hy}) scale(0.65)`}>
                <path d="M0 4 C0 0 4 -3 7 0 C10 -3 14 0 14 4 C14 8 7 13 7 13 C7 13 0 8 0 4 Z" fill="#ff9ebd" />
              </g>
            ))}
            {[[32,68],[68,68],[105,70],[48,92],[88,92]].map(([dx,dy],i) => (
              <circle key={i} cx={dx} cy={dy} r="2" fill="white" opacity=".85" />
            ))}
          </>}
        />
      </g>

      {/* ── PUMPKIN 2 (Center-Back): Classic Vibrant Orange Jack-o'-lantern & Spiderweb ── */}
      <g filter={`url(#${artworkId}-drop)`}>
        <g filter={`url(#${artworkId}-grain)`}>
          <PumpkinShape
            id="p-orange-jack"
            x={152} y={30} scale={1.42} rotation={2}
            bodyColor="#ec6322"
            shadowColor="#842605"
            lobeLight="#ffa668"
            stemColor="#2d5228"
            stemLight="#5f9258"
            decorations={<>
              {/* Painted Black Spiderweb from stem */}
              <g opacity=".85">
                <path d="M 68 25 L 24 65" stroke="#1f1008" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 68 25 L 42 90" stroke="#1f1008" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 68 25 L 68 95" stroke="#1f1008" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 68 25 L 94 90" stroke="#1f1008" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 68 25 L 112 65" stroke="#1f1008" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M 44 42 Q 56 48 68 49 Q 80 48 92 42" fill="none" stroke="#1f1008" strokeWidth="1.6" />
                <path d="M 32 58 Q 50 68 68 69 Q 86 68 104 58" fill="none" stroke="#1f1008" strokeWidth="1.6" />
              </g>

              {/* Hand-painted Black Jack-o'-lantern carved face */}
              <polygon points="46,55 38,68 54,68" fill="#1f1008" />
              <polygon points="90,55 82,68 98,68" fill="#1f1008" />
              <polygon points="68,66 63,72 73,72" fill="#1f1008" />
              <path
                d="M 38 78
                   Q 68 98 98 78
                   L 95 83 L 89 82 L 87 88 L 79 85 L 76 91 L 70 91 L 67 85 L 59 88 L 57 82 L 51 83 Z"
                fill="#1f1008"
              />
              <path d="M 112 28 L 114 20 L 116 28 L 124 30 L 116 32 L 114 40 L 112 32 L 104 30 Z" fill="#ffd043" opacity=".95" />
              <path d="M 18 36 L 19.5 30 L 21 36 L 27 37.5 L 21 39 L 19.5 45 L 18 39 L 12 37.5 Z" fill="#ffd043" opacity=".85" />
            </>}
          />
        </g>
      </g>

      {/* ── PUMPKIN 1 (Front Left): The Signature Pink Ghost Pumpkin ── */}
      <g filter={`url(#${artworkId}-drop)`}>
        <g filter={`url(#${artworkId}-grain)`}>
          <PumpkinShape
            id="p-pink-ghost"
            x={18} y={92} scale={1.22} rotation={-5}
            bodyColor="#ea90a6"
            shadowColor="#862d46"
            lobeLight="#fedde6"
            stemColor="#5c8253"
            stemLight="#8eb684"
            decorations={<>
              {/* Cute hand-painted white ghosts */}
              <g transform="translate(32, 60) scale(0.95)">
                <path d="M 0 -11 C -6 -11 -8 -6 -8 1 C -8 6 -7 9 -8 11 C -7 10 -5 10 -4 11 C -3 10 -1 10 0 11 C 1 10 3 10 4 11 C 5 10 7 10 8 11 C 7 9 8 6 8 1 C 8 -6 6 -11 0 -11 Z" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(100,20,40,.2))" />
                <ellipse cx="-2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <ellipse cx="2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <circle cx="-4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
                <circle cx="4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
              </g>

              <g transform="translate(54, 52) scale(0.85)">
                <path d="M 0 -11 C -6 -11 -8 -6 -8 1 C -8 6 -7 9 -8 11 C -7 10 -5 10 -4 11 C -3 10 -1 10 0 11 C 1 10 3 10 4 11 C 5 10 7 10 8 11 C 7 9 8 6 8 1 C 8 -6 6 -11 0 -11 Z" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(100,20,40,.2))" />
                <ellipse cx="-2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <ellipse cx="2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <circle cx="-4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
                <circle cx="4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
              </g>

              <g transform="translate(74, 68) scale(1)">
                <path d="M 0 -11 C -6 -11 -8 -6 -8 1 C -8 6 -7 9 -8 11 C -7 10 -5 10 -4 11 C -3 10 -1 10 0 11 C 1 10 3 10 4 11 C 5 10 7 10 8 11 C 7 9 8 6 8 1 C 8 -6 6 -11 0 -11 Z" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(100,20,40,.2))" />
                <ellipse cx="-2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <ellipse cx="2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <ellipse cx="0" cy="2" rx="1" ry="1.5" fill="#2d1520" />
                <circle cx="-4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
                <circle cx="4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
              </g>

              <g transform="translate(94, 55) scale(0.85)">
                <path d="M 0 -11 C -6 -11 -8 -6 -8 1 C -8 6 -7 9 -8 11 C -7 10 -5 10 -4 11 C -3 10 -1 10 0 11 C 1 10 3 10 4 11 C 5 10 7 10 8 11 C 7 9 8 6 8 1 C 8 -6 6 -11 0 -11 Z" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(100,20,40,.2))" />
                <ellipse cx="-2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <ellipse cx="2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <circle cx="-4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
                <circle cx="4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
              </g>

              <g transform="translate(112, 64) scale(0.9)">
                <path d="M 0 -11 C -6 -11 -8 -6 -8 1 C -8 6 -7 9 -8 11 C -7 10 -5 10 -4 11 C -3 10 -1 10 0 11 C 1 10 3 10 4 11 C 5 10 7 10 8 11 C 7 9 8 6 8 1 C 8 -6 6 -11 0 -11 Z" fill="#ffffff" filter="drop-shadow(0 1px 2px rgba(100,20,40,.2))" />
                <ellipse cx="-2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <ellipse cx="2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
                <circle cx="-4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
                <circle cx="4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
              </g>

              {/* Daisies */}
              {[[42,82],[82,86],[102,84]].map(([fx,fy],i) => (
                <g key={i} transform={`translate(${fx},${fy})`}>
                  {[0,60,120,180,240,300].map(a => (
                    <ellipse key={a} cx={Math.cos(a*Math.PI/180)*3.5} cy={Math.sin(a*Math.PI/180)*3.5}
                             rx="2.4" ry="1.5" fill="white" opacity=".92"
                             transform={`rotate(${a},${Math.cos(a*Math.PI/180)*3.5},${Math.sin(a*Math.PI/180)*3.5})`} />
                  ))}
                  <circle cx="0" cy="0" r="2.2" fill="#ffd043" />
                </g>
              ))}

              <path d="M60 88 C60 85 63 83 65 86 C67 83 70 85 70 88 C70 91 65 95 65 95 C65 95 60 91 60 88 Z" fill="white" opacity=".9" />
            </>}
          />
        </g>
      </g>

      {/* ── PUMPKIN 3 (Front Right): Off-White Solid Concrete with Red Cherries & Hearts ── */}
      <g filter={`url(#${artworkId}-drop)`}>
        <g filter={`url(#${artworkId}-grain)`}>
          <PumpkinShape
            id="p-white-cherry"
            x={288} y={96} scale={1.16} rotation={6}
            bodyColor="#ede6dd"
            shadowColor="#86786e"
            lobeLight="#ffffff"
            stemColor="#4a6642"
            stemLight="#7a9a72"
            decorations={<>
              {/* Cherry pairs */}
              {[[35,58],[68,54],[100,58],[50,82],[85,82]].map(([cx,cy],i) => (
                <g key={i} transform={`translate(${cx},${cy}) scale(0.85)`}>
                  <path d="M0 -7 C-2 -3 -5 1 -5 4" fill="none" stroke="#487836" strokeWidth="1.4" strokeLinecap="round" />
                  <path d="M0 -7 C2 -3 5 1 5 4" fill="none" stroke="#487836" strokeWidth="1.4" strokeLinecap="round" />
                  <ellipse cx="2" cy="-7" rx="2.5" ry="1.2" fill="#487836" transform="rotate(-25, 2, -7)" />
                  <circle cx="-5" cy="5" r="3.6" fill="#d91e36" />
                  <circle cx="-6" cy="3.5" r="1" fill="white" opacity=".7" />
                  <circle cx="5" cy="5" r="3.6" fill="#d91e36" />
                  <circle cx="4" cy="3.5" r="1" fill="white" opacity=".7" />
                </g>
              ))}

              {/* Orange hearts */}
              {[[48,65],[82,66],[68,75]].map(([hx,hy],i) => (
                <g key={i} transform={`translate(${hx},${hy}) scale(0.65)`}>
                  <path d="M0 4 C0 0 4 -3 7 0 C10 -3 14 0 14 4 C14 8 7 13 7 13 C7 13 0 8 0 4 Z" fill="#eb6034" opacity=".85" />
                </g>
              ))}
            </>}
          />
        </g>
      </g>

      {/* ── THE ARTIST'S ACRYLIC PAINT PALETTE ── */}
      <g filter={`url(#${artworkId}-plate-shadow)`} transform="translate(230, 260)">
        <ellipse cx="0" cy="0" rx="104" ry="36" fill="#f2eae4" stroke="#dfd4cc" strokeWidth="1.5" />
        <ellipse cx="0" cy="0" rx="98" ry="33" fill="#ffffff" stroke="#eee3db" strokeWidth="1" />
        <ellipse cx="0" cy="0" rx="84" ry="28" fill="#fdfbf8" stroke="#eedfd5" strokeWidth="1" />

        {/* Paint blobs */}
        <ellipse cx="-65" cy="-8" rx="10" ry="7" fill="#d62068" />
        <ellipse cx="-67" cy="-10" rx="4" ry="2.2" fill="white" opacity=".55" />

        <ellipse cx="-44" cy="-18" rx="9" ry="6.5" fill="#582a84" />
        <ellipse cx="-46" cy="-20" rx="3.5" ry="2" fill="white" opacity=".5" />

        <ellipse cx="-16" cy="-22" rx="8.5" ry="6" fill="#1b3664" />
        <ellipse cx="-18" cy="-24" rx="3.2" ry="1.8" fill="white" opacity=".5" />

        <ellipse cx="14" cy="-22" rx="8.5" ry="6" fill="#0ea38f" />
        <ellipse cx="12" cy="-24" rx="3.2" ry="1.8" fill="white" opacity=".55" />

        <ellipse cx="44" cy="-17" rx="10" ry="7" fill="#ffd13b" />
        <ellipse cx="42" cy="-19" rx="4" ry="2" fill="white" opacity=".6" />

        <ellipse cx="68" cy="-7" rx="11" ry="7.5" fill="#f46825" />
        <ellipse cx="66" cy="-9" rx="4.5" ry="2.2" fill="white" opacity=".55" />

        <ellipse cx="-40" cy="8" rx="9" ry="6" fill="#ffffff" stroke="#e0d6ce" strokeWidth="1" />
        <ellipse cx="-42" cy="6" rx="3" ry="1.5" fill="white" opacity=".8" />

        <ellipse cx="40" cy="8" rx="9" ry="6" fill="#c81d3f" />
        <ellipse cx="38" cy="6" rx="3.5" ry="1.8" fill="white" opacity=".55" />

        {/* Center mixed paint swirls */}
        <path d="M -15 -4 Q 0 8 18 -2" fill="none" stroke="#d62068" strokeWidth="3.5" strokeLinecap="round" opacity=".7" />
        <path d="M -8 2 Q 8 -6 22 4" fill="none" stroke="#f46825" strokeWidth="2.8" strokeLinecap="round" opacity=".6" />
        <path d="M 5 5 Q 16 8 28 2" fill="none" stroke="#ffd13b" strokeWidth="2.4" strokeLinecap="round" opacity=".65" />

        {/* Wooden Paintbrush */}
        <g transform="translate(-10, 4) rotate(-18)">
          <line x1="-55" y1="4" x2="68" y2="4" stroke="#25121b" strokeWidth="4.5" strokeLinecap="round" opacity=".22" />
          <path d="M 68 0 L -25 -1.2 L -25 1.2 L 68 0 Z" fill="#be9364" stroke="#9e7246" strokeWidth=".6" />
          <rect x="-42" y="-2.6" width="17" height="5.2" rx="1" fill="#cdd5dc" stroke="#9ba6b2" strokeWidth=".6" />
          <line x1="-34" y1="-2.6" x2="-34" y2="2.6" stroke="#9ba6b2" strokeWidth=".8" />
          <path d="M -42 -2.5 L -56 0 L -42 2.5 Z" fill="#2d2226" />
          <path d="M -48 -1.8 L -56 0 L -48 1.8 Z" fill="#d62068" />
          <circle cx="-59" cy="0" r="1.4" fill="#d62068" opacity=".95" />
        </g>
      </g>
    </svg>
  )
}

// Dedicated graphic for Card 1 (Concrete Pumpkin)
function ConcretePumpkinCardGraphic() {
  return (
    <svg viewBox="0 0 160 100" width="160" height="100" aria-hidden="true">
      <ellipse cx="68" cy="88" rx="42" ry="8" fill="#2d1520" opacity=".14" />
      <g transform="translate(14, 8) scale(0.8)">
        <PumpkinShape
          id="card-p-pink"
          x={0} y={0} scale={1} rotation={0}
          bodyColor="#ea90a6"
          shadowColor="#862d46"
          lobeLight="#fedde6"
          stemColor="#5c8253"
          stemLight="#8eb684"
          decorations={<>
            <g transform="translate(68, 66) scale(0.85)">
              <path d="M 0 -11 C -6 -11 -8 -6 -8 1 C -8 6 -7 9 -8 11 C -7 10 -5 10 -4 11 C -3 10 -1 10 0 11 C 1 10 3 10 4 11 C 5 10 7 10 8 11 C 7 9 8 6 8 1 C 8 -6 6 -11 0 -11 Z" fill="#ffffff" />
              <ellipse cx="-2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
              <ellipse cx="2.6" cy="-2" rx="1.1" ry="1.4" fill="#2d1520" />
              <circle cx="-4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
              <circle cx="4" cy="2" r="0.9" fill="#f58ea6" opacity=".7" />
            </g>
            <g transform="translate(42, 80) scale(0.8)">
              {[0,60,120,180,240,300].map(a => (
                <ellipse key={a} cx={Math.cos(a*Math.PI/180)*3.5} cy={Math.sin(a*Math.PI/180)*3.5} rx="2.4" ry="1.5" fill="white" transform={`rotate(${a})`} />
              ))}
              <circle cx="0" cy="0" r="2" fill="#ffd043" />
            </g>
          </>}
        />
      </g>
      <g transform="translate(126, 68)">
        <ellipse cx="0" cy="0" rx="26" ry="13" fill="#ffffff" stroke="#e8ded8" strokeWidth="1" />
        <ellipse cx="-14" cy="-2" rx="3.5" ry="2.5" fill="#d62068" />
        <ellipse cx="-5" cy="-5" rx="3" ry="2" fill="#f46825" />
        <ellipse cx="5" cy="-5" rx="3" ry="2" fill="#ffd13b" />
        <ellipse cx="14" cy="-2" rx="3.5" ry="2.5" fill="#0ea38f" />
        <g transform="rotate(-35)">
          <line x1="-22" y1="0" x2="18" y2="0" stroke="#be9364" strokeWidth="2" strokeLinecap="round" />
          <rect x="-7" y="-1.2" width="5" height="2.4" fill="#cdd5dc" rx=".5" />
          <path d="M-7 -1 L-12 0 L-7 1 Z" fill="#2d2226" />
          <circle cx="-11" cy="0" r="1.2" fill="#d62068" />
        </g>
      </g>
    </svg>
  )
}

// Dedicated graphic for Card 2 (Macrame Keychain)
function MacrameCardGraphic() {
  const cardId = useId().replaceAll(':', '')
  return (
    <svg viewBox="0 0 160 100" width="160" height="100" aria-hidden="true">
      <defs>
        <linearGradient id={`${cardId}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff4b8" />
          <stop offset="40%" stopColor="#e5a83b" />
          <stop offset="100%" stopColor="#b38212" />
        </linearGradient>
      </defs>
      <g transform="translate(38, 6) scale(0.44)">
        <MacrameKeychainGraphic
          x={0} y={0} scale={1} rotation={-6}
          cordColor="#df828f" shadowColor="#9a4755" lightColor="#fcdbe2"
          goldGradientId={`${cardId}-gold`}
        />
      </g>
      <g transform="translate(86, 6) scale(0.44)">
        <MacrameKeychainGraphic
          x={0} y={0} scale={1} rotation={6}
          cordColor="#f6eee4" shadowColor="#baa894" lightColor="#ffffff"
          goldGradientId={`${cardId}-gold`}
        />
      </g>
    </svg>
  )
}

// Dedicated graphic for Card 3 (Face Glitter)
function GlitterCardGraphic() {
  return (
    <svg viewBox="0 0 160 100" width="160" height="100" aria-hidden="true">
      <defs>
        <linearGradient id="card-glitter-gel" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="50%" stopColor="#c084fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
      </defs>
      <g transform="translate(52, 54)">
        <ellipse cx="0" cy="18" rx="22" ry="6" fill="#2d1520" opacity=".12" />
        <rect x="-18" y="-7" width="36" height="22" rx="5" fill="#fdf4ff" stroke="#e9d5ff" strokeWidth="1.2" />
        <rect x="-15" y="-1" width="30" height="15" rx="3" fill="url(#card-glitter-gel)" />
        <ellipse cx="0" cy="-7" rx="18" ry="5.5" fill="#f3e8ff" stroke="#d8b4fe" strokeWidth="1" />
        <circle cx="-6" cy="4" r="1.8" fill="#fff" />
        <circle cx="5" cy="2" r="2.2" fill="#fbcfe8" />
      </g>
      <g transform="translate(112, 34)">
        <path d="M0 -14 L3 -4 L13 0 L3 4 L0 14 L-3 4 L-13 0 L-3 -4 Z" fill="#ec4899" />
        <circle cx="0" cy="0" r="2.2" fill="#fff" />
      </g>
      <g transform="translate(24, 28)">
        <path d="M0 -10 L2 -3 L9 0 L2 3 L0 10 L-2 3 L-9 0 L-2 -3 Z" fill="#a855f7" />
        <circle cx="0" cy="0" r="1.6" fill="#fff" />
      </g>
      <g transform="translate(126, 70)">
        <path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="#38bdf8" />
      </g>
      <polygon points="100,56 108,50 116,56 108,66" fill="#f43f5e" opacity=".85" />
      <polygon points="40,20 45,15 50,20 45,28" fill="#06b6d4" opacity=".8" />
    </svg>
  )
}

// Dedicated graphic for Card 4 (Cielo Iced Coffee in iconic clear plastic cup)
function DrinkCardGraphic() {
  const drinkId = useId().replaceAll(':', '')
  return (
    <svg viewBox="0 0 160 110" width="160" height="110" aria-hidden="true">
      <defs>
        {/* Iced coffee gradient: rich dark espresso blending into creamy milk */}
        <linearGradient id={`${drinkId}-coffee`} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#3c1e0e" />
          <stop offset="35%" stopColor="#683416" />
          <stop offset="65%" stopColor="#aa6633" />
          <stop offset="85%" stopColor="#e2b484" />
          <stop offset="100%" stopColor="#f7e6d2" />
        </linearGradient>

        {/* Cold foam top swirl */}
        <linearGradient id={`${drinkId}-foam`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fdf6ee" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f3dec9" />
        </linearGradient>

        {/* Clear plastic cup reflection */}
        <linearGradient id={`${drinkId}-plastic-glare`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
          <stop offset="25%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="80%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.5)" />
        </linearGradient>
      </defs>

      {/* Table soft shadow */}
      <ellipse cx="80" cy="100" rx="30" ry="7" fill="#2d1520" opacity=".18" />

      {/* Plastic Cup Body */}
      <g transform="translate(42, 6)">
        {/* Straw going into cup */}
        <g transform="translate(38, -6) rotate(14)">
          {/* Lower straw inside coffee */}
          <line x1="0" y1="20" x2="6" y2="85" stroke="#1b4d2e" strokeWidth="4" strokeLinecap="round" opacity=".55" />
          {/* Upper straw sticking out of lid */}
          <line x1="-3" y1="-14" x2="0" y2="20" stroke="#1e5834" strokeWidth="4.2" strokeLinecap="round" />
          <line x1="-3.5" y1="-14" x2="-0.5" y2="20" stroke="#4ade80" strokeWidth="1.2" strokeLinecap="round" opacity=".7" />
        </g>

        {/* Coffee Liquid inside cup */}
        <path
          d="M 12 30 L 17 84 C 18 89, 58 89, 59 84 L 64 30 Z"
          fill={`url(#${drinkId}-coffee)`}
        />

        {/* Swirling milk / cold foam marble effect */}
        <path
          d="M 13 32 Q 26 44 38 34 Q 50 46 63 32 L 64 30 L 12 30 Z"
          fill={`url(#${drinkId}-foam)`}
          opacity=".95"
        />
        <path
          d="M 20 40 Q 30 55 42 45 Q 52 58 56 68"
          fill="none"
          stroke="#fdf5ec"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity=".45"
        />

        {/* Floating crystal ice cubes */}
        <g transform="translate(20, 36) rotate(12)">
          <rect x="0" y="0" width="13" height="13" rx="2.5" fill="rgba(255,255,255,0.55)" stroke="rgba(255,255,255,0.85)" strokeWidth="1" />
          <line x1="3" y1="3" x2="10" y2="3" stroke="#fff" strokeWidth="1" opacity=".8" />
        </g>
        <g transform="translate(41, 44) rotate(-14)">
          <rect x="0" y="0" width="13" height="13" rx="2.5" fill="rgba(255,255,255,0.5)" stroke="rgba(255,255,255,0.85)" strokeWidth="1" />
          <line x1="3" y1="3" x2="10" y2="3" stroke="#fff" strokeWidth="1" opacity=".8" />
        </g>
        <g transform="translate(26, 58) rotate(18)">
          <rect x="0" y="0" width="12" height="12" rx="2.5" fill="rgba(255,255,255,0.45)" stroke="rgba(255,255,255,0.8)" strokeWidth="1" />
        </g>

        {/* Clear Plastic Cup Outline & Ribs */}
        <path
          d="M 10 24 L 16 86 C 17 91, 59 91, 60 86 L 66 24 Z"
          fill={`url(#${drinkId}-plastic-glare)`}
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.6"
        />

        {/* Plastic Cup Measurement Rib Rings */}
        <line x1="13" y1="46" x2="63" y2="46" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="14" y1="62" x2="62" y2="62" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
        <line x1="15.5" y1="76" x2="60.5" y2="76" stroke="rgba(255,255,255,0.25)" strokeWidth="1" />

        {/* Cielo Logo Badge on Cup Center */}
        <g transform="translate(38, 54)">
          <circle cx="0" cy="0" r="12" fill="#1b4d2e" stroke="#fff" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="10.2" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="0.6" />
          <text x="0" y="1.2" fill="#fff" fontSize="4.2" fontWeight="800" textAnchor="middle" letterSpacing="0.8">CIELO</text>
        </g>

        {/* Clear Plastic Snap-on Flat/Dome Lid */}
        <rect x="7" y="21" width="62" height="4.5" rx="2.2" fill="rgba(255,255,255,0.85)" stroke="rgba(220,230,240,0.9)" strokeWidth="1" />
        <path
          d="M 12 21 C 14 12, 62 12, 64 21 Z"
          fill="rgba(255,255,255,0.5)"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.2"
        />
        <ellipse cx="38" cy="14" rx="4" ry="1.5" fill="#143c22" opacity=".5" />

        {/* Shiny Vertical Plastic Highlight */}
        <path d="M 14 26 L 19 84" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round" />
        <path d="M 19 26 L 22 84" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" />

        {/* Condensation Drops on Cup */}
        <circle cx="16" cy="40" r="1" fill="#fff" opacity=".8" />
        <circle cx="18" cy="52" r="0.8" fill="#fff" opacity=".7" />
        <circle cx="60" cy="48" r="0.9" fill="#fff" opacity=".7" />
        <circle cx="58" cy="65" r="1" fill="#fff" opacity=".8" />
      </g>
    </svg>
  )
}

// Hero Artwork Component: Cleanly separates Concrete Pumpkins, Macramé, Face Glitter, and Cielo Drink
function PumpkinArtwork({ lang = 'en' }) {
  const t = translations[lang].heroArt
  const heroArtworkId = useId().replaceAll(':', '')

  return (
    <div className="hero-art pumpkin-art" aria-label="Concrete pumpkin painting, spiral macrame keychain, face glitter and Cielo drink workshop">
      <defs>
        <linearGradient id={`${heroArtworkId}-gold`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff4b8" />
          <stop offset="35%" stopColor="#e5a83b" />
          <stop offset="70%" stopColor="#b38212" />
          <stop offset="100%" stopColor="#fedb72" />
        </linearGradient>
      </defs>

      <div className="art-orbit orbit-one" />
      <div className="art-orbit orbit-two" />

      {/* Floating Pill: 4 Elements */}
      <div className="art-badge-pill">
        <Sparkles size={11} aria-hidden="true" />
        <span>{t.pill}</span>
      </div>

      {/* Dedicated Floating Boutique Pendant for Macrame (CLEANLY SEPARATED FROM PUMPKINS) */}
      <div className="hero-macrame-card">
        <Scissors size={13} aria-hidden="true" />
        <span>{t.macramePendant}</span>
      </div>

      <div className="art-copy">
        {t.fourWays}<br />
        <em>{t.waysEm}</em><br />
        {t.toPlay}
      </div>

      {/* Concrete Pumpkins Desk Illustration (Pure pumpkins & paint palette) */}
      <ConcretePumpkin className="concrete-pumpkin-hero" />

      <span className="art-sparkle art-sparkle-one"><Sparkles size={31} /></span>
      <span className="art-sparkle art-sparkle-two"><Sparkles size={21} /></span>
      <div className="art-sticker"><span>EDITION</span><b>02</b><Heart size={15} /></div>
      <div className="art-caption"><span>CHROMA EXPERIENCES</span><span>EDITION {currentExperience.edition}</span></div>
    </div>
  )
}

function EventPhoto({ folder, filename, alt, label, subtitle }) {
  return (
    <div className="event-photo">
      <img
        src={`/events/${folder}/${filename}`}
        alt={alt}
        loading="lazy"
        onError={(event) => { event.currentTarget.hidden = true }}
      />
      <div className="event-photo-overlay" />
      <div className="event-photo-info">
        <span className="photo-label">{label}</span>
        {subtitle && <small className="photo-subtitle">{subtitle}</small>}
      </div>
    </div>
  )
}

function App() {
  // DEFAULT IS ENGLISH as requested: "الديفلت انجلش"
  const [lang, setLang] = useState('en')
  const [activeInclusion, setActiveInclusion] = useState(0)
  const [selectedTicket, setSelectedTicket] = useState('besties')
  const [childTicket, setChildTicket] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  const t = translations[lang]
  const currentTicketPrice = currentExperience.prices[selectedTicket]
  const totalPrice = currentTicketPrice + (childTicket ? currentExperience.prices.child : 0)

  // Bilingual booking WhatsApp message
  const bookingMessage = lang === 'ar'
    ? encodeURIComponent(
        `مرحباً كروما! أود حجز ${selectedTicket === 'besties' ? 'تذكرتين (Besties)' : 'تذكرة واحدة (Solo)'} لورشة عمل تلوين اليقطين وميدالية المكرمية يوم الجمعة 30 أكتوبر.${childTicket ? ' مع إضافة طفل لطاولة الأطفال.' : ''} سأقوم بتحويل المبلغ الإجمالي ${totalPrice} ج.م عبر إنستاباي إلى ${currentExperience.instaPay} وإرسال إيصال التحويل مع الاسم ورقم الهاتف.`
      )
    : encodeURIComponent(
        `Hi Chroma! I'd like to book ${selectedTicket === 'besties' ? 'two tickets (Besties)' : 'one ticket (Solo)'} for Pumpkin Painting × Macramé Keychain Workshop on Friday, 30 October.${childTicket ? ' Please add one child to the Kids Table.' : ''} I will transfer EGP ${totalPrice} via InstaPay to ${currentExperience.instaPay} and send a screenshot with my name and phone number.`
      )

  const bookingUrl = `https://wa.me/${currentExperience.whatsapp}?text=${bookingMessage}`

  function toggleLanguage() {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'))
  }

  function downloadCalendarInvite() {
    const invite = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Chroma x Dearly//Workshop//EN',
      'BEGIN:VEVENT',
      'UID:chroma-pumpkin-macrame-workshop-20261030@chroma-eg.com',
      'DTSTAMP:20261024T120000Z',
      `DTSTART;TZID=Africa/Cairo:${currentExperience.start}`,
      `DTEND;TZID=Africa/Cairo:${currentExperience.end}`,
      `SUMMARY:${lang === 'ar' ? currentExperience.titleAr : currentExperience.titleEn}`,
      `LOCATION:${currentExperience.venueEn}, ${currentExperience.areaEn}`,
      'DESCRIPTION:Pumpkin painting, a macrame keychain, a drink from Cielo, face glitter, and lovely company.',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n')
    const file = new Blob([invite], { type: 'text/calendar;charset=utf-8' })
    const url = URL.createObjectURL(file)
    const link = document.createElement('a')
    link.href = url
    link.download = 'chroma-pumpkin-macrame-workshop.ics'
    link.click()
    URL.revokeObjectURL(url)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <main dir={lang === 'ar' ? 'rtl' : 'ltr'} lang={lang}>
      {/* Top Announcement Bar */}
      <div className="announcement">
        <Sparkles size={13} aria-hidden="true" />
        <span>{t.announcement}</span>
        <Sparkles size={13} aria-hidden="true" />
      </div>

      {/* Site Header */}
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Chroma home" onClick={closeMenu}>
          chroma<span className="wordmark-period">.</span>
          <span className="wordmark-caption">{t.brandTagline}</span>
        </a>

        {/* Header Controls for Clean Desktop & Mobile Alignment */}
        <div className="header-controls">
          <button
            className="lang-toggle"
            type="button"
            onClick={toggleLanguage}
            aria-label={t.langToggleAria}
          >
            <Globe size={14} />
            <span>{t.langLabel}</span>
            <span className="lang-indicator">{lang.toUpperCase()}</span>
          </button>

          <button
            className="menu-toggle icon-button"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          <a href="#elements" onClick={closeMenu}>{t.nav.elements}</a>
          <a href="#current-edition" onClick={closeMenu}>{t.nav.edition}</a>
          <a href="#tickets" onClick={closeMenu}>{t.nav.tickets}</a>
          <a href="#details" onClick={closeMenu}>{t.nav.details}</a>
          <a className="nav-book" href="#tickets" onClick={closeMenu}>
            {t.nav.book} <ArrowUpRight size={14} aria-hidden="true" />
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span /> {t.hero.eyebrow} <span /></div>
          <h1>
            {t.hero.h1_main} <em>{t.hero.h1_em}</em><br />
            <span>{t.hero.h1_sub}</span>
          </h1>
          <p className="hero-note">{t.hero.note}</p>
          <div className="edition-label">
            <span>{t.hero.bookingStatus}</span>
            <i />
            <span>{t.hero.edition}</span>
          </div>

          <div className="hero-date-row">
            <div className="hero-date-icon"><CalendarDays size={18} strokeWidth={1.5} /></div>
            <div>
              <strong>{t.hero.date}</strong>
              <span>{t.hero.time}</span>
            </div>
            <i aria-hidden="true" />
            <div>
              <strong>{t.hero.venue}</strong>
              <span>{t.hero.area}</span>
            </div>
          </div>

          <div className="hero-actions">
            <a className="button button-dark" href="#tickets">
              {t.hero.bookBtn} <ArrowRight size={16} />
            </a>
            <button className="calendar-link" type="button" onClick={downloadCalendarInvite}>
              <CalendarDays size={16} /> {t.hero.calendarBtn}
            </button>
          </div>

          <a className="scroll-cue" href="#elements">
            <span>{t.hero.scrollCue}</span>
            <ArrowDown size={14} />
          </a>
        </div>

        <PumpkinArtwork lang={lang} />
        <div className="hero-bottom-note">
          <span>{t.hero.bottomNoteLeft}</span>
          <span>{t.hero.bottomNoteRight}</span>
        </div>
      </section>

      {/* ── THE 4 ELEMENTS OF THE DAY · عناصر اليوم الأربعة ── */}
      <section className="elements-showcase section-pad" id="elements">
        <div className="elements-header">
          <p className="eyebrow eyebrow-dark">{t.elementsSection.eyebrow}</p>
          <h2>
            {t.elementsSection.titleMain}<br />
            <em>{t.elementsSection.titleEm}</em>
          </h2>
          <p className="elements-intro">{t.elementsSection.intro}</p>
        </div>

        <div className="elements-grid">
          {/* Card 1: Concrete Pumpkin Painting */}
          <div className="element-card element-card--concrete">
            <div className="element-card-top">
              <span className="element-num">{t.elementsSection.items[0].num}</span>
              <span className="element-badge badge-concrete">{t.elementsSection.items[0].badge}</span>
            </div>
            <div className="element-card-art">
              <ConcretePumpkinCardGraphic />
            </div>
            <h3>{t.elementsSection.items[0].title}</h3>
            <span className="element-card-sub">{t.elementsSection.items[0].subtitle}</span>
            <p>{t.elementsSection.items[0].desc}</p>
            <div className="element-perks">
              {t.elementsSection.items[0].perks.map((perk, i) => (
                <span key={i}><Check size={14} /> {perk}</span>
              ))}
            </div>
          </div>

          {/* Card 2: Spiral Macrame Keychain */}
          <div className="element-card element-card--macrame">
            <div className="element-card-top">
              <span className="element-num">{t.elementsSection.items[1].num}</span>
              <span className="element-badge badge-macrame">{t.elementsSection.items[1].badge}</span>
            </div>
            <div className="element-card-art">
              <MacrameCardGraphic />
            </div>
            <h3>{t.elementsSection.items[1].title}</h3>
            <span className="element-card-sub">{t.elementsSection.items[1].subtitle}</span>
            <p>{t.elementsSection.items[1].desc}</p>
            <div className="element-perks">
              {t.elementsSection.items[1].perks.map((perk, i) => (
                <span key={i}><Check size={14} /> {perk}</span>
              ))}
            </div>
          </div>

          {/* Card 3: Face Glitter Station */}
          <div className="element-card element-card--glitter">
            <div className="element-card-top">
              <span className="element-num">{t.elementsSection.items[2].num}</span>
              <span className="element-badge badge-glitter">{t.elementsSection.items[2].badge}</span>
            </div>
            <div className="element-card-art">
              <GlitterCardGraphic />
            </div>
            <h3>{t.elementsSection.items[2].title}</h3>
            <span className="element-card-sub">{t.elementsSection.items[2].subtitle}</span>
            <p>{t.elementsSection.items[2].desc}</p>
            <div className="element-perks">
              {t.elementsSection.items[2].perks.map((perk, i) => (
                <span key={i}><Check size={14} /> {perk}</span>
              ))}
            </div>
          </div>

          {/* Card 4: Cielo Sunset Drink */}
          <div className="element-card element-card--drink">
            <div className="element-card-top">
              <span className="element-num">{t.elementsSection.items[3].num}</span>
              <span className="element-badge badge-drink">{t.elementsSection.items[3].badge}</span>
            </div>
            <div className="element-card-art">
              <DrinkCardGraphic />
            </div>
            <h3>{t.elementsSection.items[3].title}</h3>
            <span className="element-card-sub">{t.elementsSection.items[3].subtitle}</span>
            <p>{t.elementsSection.items[3].desc}</p>
            <div className="element-perks">
              {t.elementsSection.items[3].perks.map((perk, i) => (
                <span key={i}><Check size={14} /> {perk}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Banner of the 4 Elements */}
        <div className="elements-footer-banner">
          <Sparkles size={15} />
          <span>{t.elementsSection.banner}</span>
          <Sparkles size={15} />
        </div>
      </section>

      {/* Experience Details & Inclusions Section */}
      <section className="experience section-pad" id="current-edition">
        <div className="section-heading">
          <p className="eyebrow eyebrow-dark">{t.experience.eyebrow}</p>
          <h2>
            {t.experience.titleMain}<br />
            <em>{t.experience.titleEm}</em>
          </h2>
          <p className="section-intro">{t.experience.intro}</p>
        </div>

        <div className="inclusion-layout">
          <div className="inclusion-list" role="tablist" aria-label="What is included">
            {t.experience.inclusions.map((item, index) => {
              const Icon = item.icon
              const isActive = activeInclusion === index
              return (
                <button
                  className={`inclusion-item${isActive ? ' active' : ''}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="inclusion-detail"
                  key={item.title}
                  onClick={() => setActiveInclusion(index)}
                >
                  <span className="inclusion-number">{`0${index + 1}`}</span>
                  <Icon size={20} strokeWidth={1.5} />
                  <span className="inclusion-title">{item.title}</span>
                  {isActive ? <ArrowRight className="inclusion-arrow" size={17} /> : <ChevronDown className="inclusion-arrow" size={16} />}
                </button>
              )
            })}
          </div>

          <div className="inclusion-detail" id="inclusion-detail" role="tabpanel">
            <span className="detail-kicker">{t.experience.kicker}</span>
            <span className="detail-number">{`0${activeInclusion + 1}`}</span>
            <div className="detail-doodle" aria-hidden="true">
              <Sparkles size={28} />
              <Heart size={16} />
            </div>
            <h3>{t.experience.inclusions[activeInclusion].title}<span>.</span></h3>
            <p>{t.experience.inclusions[activeInclusion].detail}</p>

            {/* Visual Showcase for Core Activities (NO EMOJIS) */}
            {activeInclusion === 0 && (
              <div className="inclusion-preview-card">
                <div className="preview-media">
                  <img src="/events/edition-02-pumpkin-macrame/photo-01.jpg" alt="Painted solid concrete pumpkins" />
                  <span className="preview-pill">{t.experience.inclusions[0].badge}</span>
                </div>
                <div className="preview-chips">
                  {t.experience.inclusions[0].chips.map((chip, i) => (
                    <span key={i}><Check size={12} /> {chip}</span>
                  ))}
                </div>
              </div>
            )}

            {activeInclusion === 1 && (
              <div className="inclusion-preview-card">
                <div className="preview-media">
                  <img src="/events/edition-02-pumpkin-macrame/photo-02.jpg" alt="Handmade spiral macrame keychains" />
                  <span className="preview-pill">{t.experience.inclusions[1].badge}</span>
                </div>
                <div className="preview-chips">
                  {t.experience.inclusions[1].chips.map((chip, i) => (
                    <span key={i}><Check size={12} /> {chip}</span>
                  ))}
                </div>
              </div>
            )}

            {activeInclusion === 2 && (
              <div className="inclusion-preview-card">
                <div className="preview-media preview-glitter-banner">
                  <div className="glitter-showcase-bg">
                    <Sparkles size={36} className="glitter-big-sparkle" />
                    <Heart size={24} className="glitter-heart" />
                  </div>
                  <span className="preview-pill">{t.experience.inclusions[2].badge}</span>
                </div>
                <div className="preview-chips">
                  {t.experience.inclusions[2].chips.map((chip, i) => (
                    <span key={i}><Check size={12} /> {chip}</span>
                  ))}
                </div>
              </div>
            )}

            {activeInclusion === 3 && (
              <div className="inclusion-preview-card">
                <div className="preview-media preview-drink-banner">
                  <div className="drink-showcase-bg">
                    <GlassWater size={36} className="drink-icon-show" />
                    <span>CIELO CORNICHE</span>
                  </div>
                  <span className="preview-pill">{t.experience.inclusions[3].badge}</span>
                </div>
                <div className="preview-chips">
                  {t.experience.inclusions[3].chips.map((chip, i) => (
                    <span key={i}><Check size={12} /> {chip}</span>
                  ))}
                </div>
              </div>
            )}

            {activeInclusion === 4 && (
              <div className="inclusion-preview-card">
                <div className="preview-media preview-drink-banner">
                  <div className="drink-showcase-bg">
                    <Gift size={36} className="drink-icon-show" />
                    <span>CHROMA BEAUTY</span>
                  </div>
                  <span className="preview-pill">{t.experience.inclusions[4].badge}</span>
                </div>
                <div className="preview-chips">
                  {t.experience.inclusions[4].chips.map((chip, i) => (
                    <span key={i}><Check size={12} /> {chip}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="detail-rule">
              <span>{t.experience.ruleLeft}</span>
              <Sparkles size={12} aria-hidden="true" />
              <span>{t.experience.ruleRight}</span>
            </div>
          </div>
        </div>

        {/* Kids Table Note */}
        <div className="kids-table-note">
          <span className="kids-table-icon" aria-hidden="true"><GlassWater size={20} /></span>
          <div>
            <span className="kids-table-label">{t.experience.kidsTitle}</span>
            <p>{t.experience.kidsDesc}</p>
          </div>
        </div>
      </section>

      {/* Tickets & Booking Section */}
      <section className="ticket-section section-pad" id="tickets">
        <div className="ticket-panel">
          <p className="eyebrow eyebrow-dark">{t.tickets.eyebrow}</p>
          <h2>
            {t.tickets.titleMain}<br />
            <em>{t.tickets.titleEm}</em>
          </h2>

          <div className="ticket-options" role="radiogroup" aria-label="Choose a ticket">
            {/* Solo Option */}
            <button
              className={`ticket-option${selectedTicket === 'solo' ? ' selected' : ''}`}
              type="button"
              role="radio"
              aria-checked={selectedTicket === 'solo'}
              onClick={() => setSelectedTicket('solo')}
            >
              <span className="ticket-check">{selectedTicket === 'solo' && <Check size={13} />}</span>
              <span className="ticket-copy">
                <strong>{t.tickets.solo.name}</strong>
                <small>{t.tickets.solo.tagline}</small>
              </span>
              <span className="ticket-price">{t.tickets.solo.price} <small>{t.tickets.currency}</small></span>
            </button>

            {/* Besties Option */}
            <button
              className={`ticket-option${selectedTicket === 'besties' ? ' selected' : ''}`}
              type="button"
              role="radio"
              aria-checked={selectedTicket === 'besties'}
              onClick={() => setSelectedTicket('besties')}
            >
              <span className="ticket-check">{selectedTicket === 'besties' && <Check size={13} />}</span>
              <span className="ticket-copy">
                <strong>{t.tickets.besties.name} <span className="besties-tag">{t.tickets.besties.badge}</span></strong>
                <small>{t.tickets.besties.tagline}</small>
              </span>
              <span className="ticket-price">{t.tickets.besties.price} <small>{t.tickets.currency}</small></span>
            </button>
          </div>

          {/* Child Ticket Addon */}
          <label className="child-ticket-option">
            <input
              type="checkbox"
              checked={childTicket}
              onChange={(event) => setChildTicket(event.target.checked)}
            />
            <span>
              <strong>{t.tickets.kidsLabel}</strong>
              <small>{t.tickets.kidsSub}</small>
            </span>
          </label>

          <a className="button button-dark ticket-book" href={bookingUrl} target="_blank" rel="noreferrer">
            {t.tickets.bookBtn} <ArrowRight size={16} />
          </a>

          <p className="ticket-footnote">
            <Ticket size={14} /> {t.tickets.spotsNote}
          </p>
          <p className="payment-note">
            {t.tickets.paymentNote} <strong>{currentExperience.instaPay}</strong>{t.tickets.paymentFollow}
          </p>
        </div>
      </section>

      {/* Details & Location Section */}
      <section className="details-section section-pad" id="details">
        <div className="details-heading">
          <p className="eyebrow eyebrow-dark">{t.details.eyebrow}</p>
          <h2>
            {t.details.titleMain} <em>{t.details.titleEm}</em>
          </h2>
        </div>

        <div className="details-grid">
          <div className="detail-cell">
            <span className="detail-icon"><CalendarDays size={19} /></span>
            <span className="detail-label">{t.details.when.label}</span>
            <strong>{t.details.when.title}</strong>
            <span>{t.details.when.time}</span>
            <button className="text-action" type="button" onClick={downloadCalendarInvite}>
              {t.details.when.action} <ArrowUpRight size={13} />
            </button>
          </div>

          <div className="detail-cell">
            <span className="detail-icon"><MapPin size={19} /></span>
            <span className="detail-label">{t.details.where.label}</span>
            <strong>{t.details.where.title}</strong>
            <span>{t.details.where.area}</span>
            <a
              className="text-action"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${currentExperience.venueEn} ${currentExperience.areaEn}`)}`}
              target="_blank"
              rel="noreferrer"
            >
              {t.details.where.action} <ArrowUpRight size={13} />
            </a>
          </div>

          <div className="detail-cell">
            <span className="detail-icon"><Clock3 size={19} /></span>
            <span className="detail-label">{t.details.plan.label}</span>
            <strong>{t.details.plan.title}</strong>
            <span>{t.details.plan.sub}</span>
            <a className="text-action" href={bookingUrl} target="_blank" rel="noreferrer">
              {t.details.plan.action} <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </section>

      {/* Event Journal / Past Editions Section */}
      <section className="memories-section section-pad" id="memories">
        <div className="memories-heading">
          <p className="eyebrow eyebrow-dark">{t.journal.eyebrow}</p>
          <h2>
            {t.journal.titleMain}<br />
            <em>{t.journal.titleEm}</em>
          </h2>
          <p>{t.journal.intro}</p>
        </div>

        {/* Edition 02: Pumpkin × Macramé */}
        <article className="event-gallery upcoming-gallery event-gallery--pumpkin" aria-labelledby="upcoming-event-title">
          <div className="gallery-copy">
            <div className="event-status"><span className="status-dot" /> {t.journal.upcoming.status}</div>
            <h3 id="upcoming-event-title">{t.journal.upcoming.title}</h3>
            <p className="gallery-venue">{t.journal.upcoming.venue}</p>
            <div className="gallery-chips">
              {t.journal.upcoming.chips.map((chip, i) => (
                <span key={i}><Check size={12} /> {chip}</span>
              ))}
            </div>
            <p className="gallery-desc">
              {t.journal.upcoming.highlight}
            </p>
            <a className="button button-primary gallery-book-cta" href="#tickets">
              {lang === 'ar' ? 'احجزي مكانكِ في الإيديشن' : 'Book Your Spot'} <ArrowRight size={15} />
            </a>
          </div>

          <div className="event-photo-grid upcoming-photo-grid" aria-label="Edition 02 Sneak Peek">
            <EventPhoto
              folder="edition-02-pumpkin-macrame"
              filename="photo-01.jpg"
              alt="Handmade painted concrete pumpkins"
              label={t.journal.upcoming.photos[0].label}
              subtitle={t.journal.upcoming.photos[0].sub}
            />
            <EventPhoto
              folder="edition-02-pumpkin-macrame"
              filename="photo-02.jpg"
              alt="Handmade spiral macrame keychains"
              label={t.journal.upcoming.photos[1].label}
              subtitle={t.journal.upcoming.photos[1].sub}
            />
            <div className="event-photo upcoming-live-notice">
              <div className="live-notice-content">
                <Camera size={26} />
                <strong>{lang === 'ar' ? 'معرض صور الفعالية' : 'Live Event Photos'}</strong>
                <p>{lang === 'ar' ? 'الصور الحية للبنات والورشة ستُنشر هنا فور انتهاء اليوم!' : 'Attendee photos & memories will be published right here after the event!'}</p>
                <span className="live-notice-badge">{lang === 'ar' ? '30 أكتوبر · قريباً' : '30 OCT · COMING SOON'}</span>
              </div>
            </div>
          </div>
        </article>

        {/* Edition 01: Lipgloss × Bedazzling */}
        <article className="event-gallery archive-gallery event-gallery--glam" aria-labelledby="past-event-title">

          <div className="gallery-copy">
            <div className="event-status past-status">{t.journal.past.status}</div>
            <h3 id="past-event-title">{t.journal.past.title}</h3>
            <p className="gallery-venue">{t.journal.past.venue}</p>
            <div className="gallery-chips">
              {t.journal.past.chips.map((chip, i) => (
                <span key={i}><Check size={12} /> {chip}</span>
              ))}
            </div>
            <div className="gallery-arabic-highlight">
              <Sparkles size={14} />
              <span>{t.journal.past.highlight}</span>
            </div>
            <span className="archive-caption">{t.journal.past.action}</span>
          </div>

          <div className="event-photo-grid archive-photo-grid" aria-label="Photos from the Lipgloss Making and Bedazzling event">
            <EventPhoto
              folder="edition-01-lipgloss-bedazzling"
              filename="Ev01.jpeg"
              alt="Guests smiling together at the first Chroma event"
              label={t.journal.past.photos[0].label}
              subtitle={t.journal.past.photos[0].sub}
            />
            <EventPhoto
              folder="edition-01-lipgloss-bedazzling"
              filename="Ev02.jpeg"
              alt="Lip gloss making in action with custom pigments"
              label={t.journal.past.photos[1].label}
              subtitle={t.journal.past.photos[1].sub}
            />
            <EventPhoto
              folder="edition-01-lipgloss-bedazzling"
              filename="Ev03.jpeg"
              alt="Bedazzling lip gloss tubes with crystal rhinestones"
              label={t.journal.past.photos[2].label}
              subtitle={t.journal.past.photos[2].sub}
            />
          </div>
        </article>
      </section>

      {/* Social / Instagram Follow Section */}
      <section className="social-section">
        <div className="social-copy">
          <span className="eyebrow eyebrow-dark">{t.social.eyebrow}</span>
          <h2>
            {t.social.titleMain} <em>{t.social.titleEm}</em>
          </h2>
          <p>{t.social.intro}</p>
        </div>
        <div className="social-links">
          <a className="chroma-ig-link" href="https://www.instagram.com/chroma_egy/" target="_blank" rel="noreferrer">
            <Camera size={18} />
            <span>
              <small>{t.social.igChroma}</small>
              <b dir="ltr" className="handle">@chroma_egy</b>
            </span>
            <ArrowUpRight size={16} />
          </a>

          <a
            className="dearly-under-chroma"
            href="https://www.instagram.com/dearly_digitalstudio/"
            target="_blank"
            rel="noreferrer"
          >
            <Camera size={12} />
            <span>{lang === 'ar' ? 'صُنع بحب بواسطة Dearly' : 'Made with love by Dearly'}</span>
            <ArrowUpRight size={11} />
          </a>
        </div>
      </section>

      {/* Mobile Sticky Booking Bar */}
      <div className="mobile-book-bar">
        <span>
          <strong>{totalPrice} <small>{t.tickets.currency}</small></strong>
          <small>{selectedTicket === 'besties' ? t.tickets.besties.name : t.tickets.solo.name}{childTicket ? t.mobileBar.kidsSuffix : ''}</small>
        </span>
        <a href={bookingUrl} target="_blank" rel="noreferrer">
          {t.mobileBar.book} <ArrowRight size={15} />
        </a>
      </div>
    </main>
  )
}

export default App
