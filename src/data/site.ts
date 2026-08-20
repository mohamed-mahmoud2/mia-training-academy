const graduationHero = "/images/blog/graduation-ceremonies/hero.jpeg";
const graduation1 = "/images/blog/graduation-ceremonies/1.jpeg";
const graduation2 = "/images/blog/graduation-ceremonies/2.jpeg";
const graduation3 = "/images/blog/graduation-ceremonies/3.jpeg";
const graduation4 = "/images/blog/graduation-ceremonies/4.jpeg";
const graduation5 = "/images/blog/graduation-ceremonies/5.jpeg";
const graduation6 = "/images/blog/graduation-ceremonies/6.jpeg";

function blogImages(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/blog/${slug}/${i + 1}.jpeg`);
}

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programs", label: "Faculties" },
  { to: "/admissions", label: "Admissions" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
];

export type Program = {
  slug: string;
  title: string;
  category: string;
  image: string;
  duration: string;
  format: string;
  certification: string;
  nextIntake: string;
  tags: string[];
  excerpt: string;
  objectives: string[];
  curriculum: { term: string; items: string[] }[];
  instructor: { name: string; title: string; bio: string; credentials: string };
  tuition: { label: string; amount: string; note: string }[];
};

export type Faculty = {
  slug: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  image: string;
  gallery: string[];
  featuredPrograms: Program[];
};

function departmentImages(slug: string, count: number): string[] {
  return Array.from({ length: count }, (_, i) => `/images/departments/${slug}/${i + 1}.jpeg`);
}

export const faculties: Faculty[] = [
  {
    slug: "journalism-and-media",
    name: { en: "Journalism & Media", ar: "صحافة و إعلام" },
    description: {
      en: "Students in the Journalism & Media department study everything related to journalistic and media work — from press editing and preparing reports and programmes, to public relations and the art of media presence — through a combination of specialised theoretical study and intensive practical training. The academy organises this training inside realistic television and radio studios, where students experience the atmosphere of journalistic and broadcast work directly from the start of their studies. Thanks to this intensive hands-on training, graduates of the department are academically and practically qualified to enter the media job market immediately, whether at press organisations, television and radio channels, or public relations departments within companies and institutions. Students are also taught and trained by a select group of the field's best media and journalism instructors, who combine academic expertise with genuine hands-on experience in the industry.",
      ar: "يدرس الطالب في قسم الصحافة والإعلام كل ما يتعلق بالعمل الصحفي والإعلامي؛ من التحرير الصحفي وإعداد التقارير والبرامج، إلى العلاقات العامة وفنون الظهور الإعلامي، وذلك من خلال الجمع بين الدراسة النظرية المتخصصة والتدريب العملي المكثف الذي تحرص الأكاديمية على تنظيمه داخل استوديوهات تليفزيونية وإذاعية واقعية، حيث يعيش الطالب أجواء العمل الصحفي والتلفزيوني بشكل مباشر منذ بداية دراسته. وبفضل هذا التدريب العملي المكثف، يتخرج طالب القسم مؤهلاً علميًا وعمليًا للانخراط الفوري في سوق العمل الإعلامي، سواء في المؤسسات الصحفية أو القنوات التليفزيونية والإذاعية أو إدارات العلاقات العامة بالشركات والمؤسسات المختلفة. كما يتلقى الطالب تعليمه وتدريبه على أيدي نخبة من أفضل أساتذة الإعلام والصحافة المتخصصين، ممن يجمعون بين الخبرة الأكاديمية والممارسة العملية الفعلية في هذا المجال.",
    },
    image: "/images/departments/journalism-and-media/hero.jpeg",
    gallery: [
      "/images/departments/journalism-and-media/hero.jpeg",
      ...departmentImages("journalism-and-media", 10),
    ],
    featuredPrograms: [],
  },
  {
    slug: "business-administration",
    name: { en: "Business Administration", ar: "إدارة أعمال" },
    description: {
      en: "Students in the Business Administration department study everything related to modern business management, alongside the fundamentals of accounting, statistics, and human resources management. This is achieved through a combination of specialised theoretical study and practical training, which the academy organises by having students take part in economic and management conferences and events — giving them exposure to the latest developments in the field and direct contact with experienced professionals. The academy also draws on a select group of the best management and economics professors from Egyptian public universities for this specialisation, combining academic depth with genuine practical experience in management and economics. Thanks to this blend of theory and practice, graduates of the department are academically and practically qualified to enter the job market immediately, whether in private companies and institutions or across various government and economic sectors.",
      ar: "يدرس الطالب في قسم إدارة الأعمال كل ما يتعلق بإدارة الأعمال بمفهومها الحديث، إلى جانب أساسيات المحاسبة والإحصاء وإدارة الموارد البشرية، وذلك من خلال الجمع بين الدراسة النظرية المتخصصة والتدريب العملي الذي تحرص الأكاديمية على تنظيمه من خلال مشاركة الطلاب في الفعاليات والمؤتمرات الخاصة بالاقتصاد والإدارة، بما يتيح لهم الاطلاع على أحدث المستجدات في هذا المجال والتواصل المباشر مع أهل الخبرة فيه. كما تستعين الأكاديمية في هذا التخصص بباقة من أفضل أساتذة الإدارة والاقتصاد داخل الجامعات الحكومية المصرية، ممن يجمعون بين العمق الأكاديمي والخبرة العملية في مجالات الإدارة والاقتصاد. وبفضل هذا الدمج بين الجانب النظري والعملي، يتخرج طالب القسم مؤهلاً علميًا وعمليًا للانخراط الفوري في سوق العمل، سواء في الشركات والمؤسسات الخاصة أو في القطاعات الحكومية والاقتصادية المختلفة.",
    },
    image: "/images/departments/business-administration/hero.jpeg",
    gallery: [
      "/images/departments/business-administration/hero.jpeg",
      ...departmentImages("business-administration", 7),
    ],
    featuredPrograms: [],
  },
  {
    slug: "area-and-maps",
    name: { en: "Surveying & Mapping", ar: "مساحة و خرائط" },
    description: {
      en: "Students in the Surveying & Mapping department study everything related to surveying work, mapping, and land-survey work. The academy also places strong emphasis on teaching AutoCAD within this department, inside its latest fully equipped computer labs, so that students can make full use of this important applied side of the field. The academy also organises intensive practical training in this department through field visits to new projects — cities, roads, and more — in cooperation with leading Egyptian contracting firms, giving students direct exposure to real surveying work on the ground. The field of surveying and mapping covers many areas, including agricultural projects, new cities, roads, and other projects of major importance to the Arab Republic of Egypt. The academy also draws on surveying specialists who work at leading Egyptian contracting firms for this department, ensuring that students' learning is grounded in genuine practical experience.",
      ar: "يدرس الطالب في قسم المساحة والخرائط كل ما يتعلق بأعمال المساحة والخرائط والرفع المساحي، كما تحرص الأكاديمية على تدريس برنامج الأوتوكاد في هذا القسم داخل أحدث معامل الكمبيوتر المجهزة بالأكاديمية، حتى يتمكن الطالب من الاستفادة الكاملة من هذا الجانب التطبيقي المهم. كما تنظم الأكاديمية تدريبات عملية مكثفة في هذا القسم عن طريق الزيارات الميدانية لمشروعات جديدة من مدن وطرق بالتعاون مع كبرى شركات المقاولات المصرية، بما يتيح للطالب الاحتكاك المباشر بواقع العمل المساحي على أرض الواقع. ويدخل مجال المساحة والخرائط في مجالات عديدة، منها المشروعات الزراعية والمدن الجديدة والطرق وغيرها من المشروعات الهامة لجمهورية مصر العربية. كما تستعين الأكاديمية في هذا القسم بمتخصصين في الأعمال المساحية يعملون في كبرى شركات المقاولات المصرية، بما يضمن للطالب تعلمًا مبنيًا على خبرة عملية حقيقية.",
    },
    image: "/images/departments/area-and-maps/hero.jpeg",
    gallery: [
      "/images/departments/area-and-maps/hero.jpeg",
      ...departmentImages("area-and-maps", 12),
    ],
    featuredPrograms: [],
  },
  {
    slug: "nursing",
    name: { en: "Nursing", ar: "تمريض" },
    description: {
      en: "Students in the Nursing department study everything related to nursing and healthcare services. The academy also places strong emphasis on teaching first aid within this department, in addition to studying how to care for the elderly and how to deal with children, so that students gain full exposure to the different aspects of medical services and become confidently qualified to work in the healthcare field. The academy also organises intensive practical training in this department at leading hospitals across Egypt, across different hospital departments, in addition to intensive internal practical training that gives students direct exposure to real medical cases. The academy also draws on distinguished specialists in the field of nursing for the lectures in this department, combining academic expertise with genuine hands-on hospital experience.",
      ar: "يدرس الطالب في قسم التمريض كل ما يتعلق بالتمريض والخدمات الصحية، كما تحرص الأكاديمية على تدريس الإسعافات الأولية في هذا القسم، بالإضافة إلى دراسة كيفية رعاية المسنين والتعامل مع الأطفال، حتى يتسنى للطالب الاستفادة الكاملة من مختلف جوانب مجال الخدمات الطبية ويصبح مؤهلاً للعمل في المجال الصحي بثقة. كما تنظم الأكاديمية تدريبات عملية مكثفة في هذا القسم بكبرى المستشفيات العاملة في مصر، وذلك في مختلف أقسام المستشفيات، بالإضافة إلى التدريبات العملية الداخلية المكثفة التي تتيح للطالب الاحتكاك المباشر بالحالات الطبية الحقيقية. كما تستعين الأكاديمية في هذا القسم داخل المحاضرات بمتخصصين متميزين في مجال التمريض، ممن يجمعون بين الخبرة الأكاديمية والممارسة العملية الفعلية في المستشفيات.",
    },
    image: "/images/departments/nursing/hero.jpeg",
    gallery: ["/images/departments/nursing/hero.jpeg", ...departmentImages("nursing", 11)],
    featuredPrograms: [],
  },
  {
    slug: "medical-tests",
    name: { en: "Medical Analysis", ar: "تحاليل طبية" },
    description: {
      en: "Students in the Medical Analysis department study everything related to medical laboratory testing, sample preservation, and sample examination. Students in this department also undergo intensive practical training, both within lectures and through external private laboratories. Lectures focus on the aspects of drawing and preserving samples in the correct manner, in addition to studying sample examination using the latest detection devices and microscopes — the same equipment students will work with once they graduate and enter the job market. The academy also organises external practical training placements at a number of Egyptian government laboratories and private laboratories, giving students exposure to the real working environment across different settings. The academy also draws on a select group of specialised lecturers working in the field of medical analysis for this department, combining academic expertise with genuine hands-on experience in the field.",
      ar: "يدرس الطالب في قسم التحاليل الطبية كل ما يتعلق بالتحاليل الطبية وحفظ العينات وفحصها، كما يتعرض الطالب في هذا القسم لتدريبات عملية مكثفة سواء داخل المحاضرات أو عن طريق المعامل الخاصة الخارجية. حيث يتم التركيز داخل المحاضرات على جوانب سحب العينات وحفظها بالطريقة المناسبة، بالإضافة إلى دراسة فحص العينات على أحدث أجهزة الكشف والميكروسكوب، وهي نفس الأجهزة التي يتعامل معها الطالب لاحقًا عندما يتخرج ويلتحق بسوق العمل. كما تنظم الأكاديمية تدريبات عملية خارجية في بعض المعامل الحكومية المصرية والمعامل الخاصة، بما يتيح للطالب التعرف على بيئة العمل الفعلية بمختلف أنواعها. وتستعين الأكاديمية في هذا القسم بباقة من المحاضرين المتخصصين العاملين في مجالات التحاليل الطبية، ممن يجمعون بين الخبرة الأكاديمية والممارسة العملية الفعلية في هذا المجال.",
    },
    image: "/images/departments/medical-tests/hero.jpeg",
    gallery: [
      "/images/departments/medical-tests/hero.jpeg",
      ...departmentImages("medical-tests", 5),
    ],
    featuredPrograms: [],
  },
  {
    slug: "petroleum-technology",
    name: { en: "Petroleum Technology", ar: "تكنولوجيا البترول" },
    description: {
      en: "Students in the Petroleum Technology department study everything related to petroleum technology, well drilling, earth layers, and drill bit components across different working environments. Students are closely followed throughout the various stages of their studies, relying on accurate real-life models of drill bit components, allowing students to gain an in-depth, hands-on understanding of drilling technology rather than a purely theoretical one. The academy also places great importance on the practical side of the programme by organising regular field visits to various drilling sites in Egypt's Western Desert, in cooperation with leading Egyptian public petroleum companies, which in turn cooperate with major foreign petroleum companies — all aimed at graduating a generation of young people qualified to work in this vital sector. The academy also draws on a select group of specialised lecturers working in the fields of well drilling technology and petroleum technology for this department, combining academic expertise with genuine hands-on experience in the field.",
      ar: "يدرس الطالب في قسم تكنولوجيا البترول كل ما يتعلق بتكنولوجيا البترول وحفر الآبار وطبقات الأرض وأجزاء بريمة الحفر في مختلف بيئات العمل. ويتم متابعة الطالب بشكل دقيق في مختلف مراحل الدراسة، حيث يتم الاعتماد على النماذج الحقيقية لأجزاء بريمة الحفر بشكل دقيق، بما يتيح للطالب التعمق في كل ما يخص تكنولوجيا الحفر بصورة عملية وليست نظرية فقط. كما تهتم الأكاديمية بالجانب العملي للدراسة من خلال تنظيم زيارات منتظمة لمواقع الحفر المختلفة بالصحراء الغربية المصرية، وذلك بالتعاون مع كبرى شركات البترول المصرية العامة، والتي تتعاون بدورها مع كبرى شركات البترول الأجنبية، وذلك لتخريج باقة من الشباب المؤهل للعمل في هذا القطاع الحيوي. كما تستعين الأكاديمية في هذا القسم بباقة من المحاضرين المتخصصين العاملين في مجالات تكنولوجيا حفر الآبار وتكنولوجيا البترول، ممن يجمعون بين الخبرة الأكاديمية والممارسة العملية الفعلية في هذا المجال.",
    },
    image: "/images/departments/petroleum-technology/hero.jpeg",
    gallery: [
      "/images/departments/petroleum-technology/hero.jpeg",
      ...departmentImages("petroleum-technology", 17),
    ],
    featuredPrograms: [],
  },
  {
    slug: "tourism-and-hotels",
    name: { en: "Tourism & Hotels", ar: "سياحة و فنادق" },
    description: {
      en: "Students in the Tourism & Hotels department study everything related to tourism and hospitality in its various forms, especially as major economies today rely heavily on tourism activity and, by extension, on the hotel sector that hosts tourists and visitors. Students in this department study every aspect of hotel work, from welcoming guests to providing the appropriate hotel service at the highest level of professionalism. The academy also places strong emphasis on the language side of this department, given that the nature of the work requires dealing with foreign nationalities from a range of cultures and languages. The academy also organises training visits for its students to leading hotels in Cairo and Giza, where students gain direct exposure to hands-on work and how to handle different situations within hotels, in addition to placing a number of students in jobs alongside their studies, preparing them directly for the job market. The academy also draws on the best specialised lecturers working in the field of tourism and hotels for this department, as well as professors from Egyptian universities working in faculties of tourism and hotels, to deliver a distinguished study experience for students.",
      ar: "يدرس الطالب في قسم السياحة والفنادق كل ما يتعلق بالسياحة والفندقة بمختلف جوانبها، خاصة أن الاقتصاديات الكبرى حاليًا تعتمد بشكل كبير على النشاط السياحي، وبالتبعية على قطاع الفنادق الذي يستضيف السائحين والزائرين. ويدرس الطالب في هذا القسم كافة جوانب العمل داخل الفندق، بداية من استقبال الزائرين وحتى كيفية تقديم الخدمة الفندقية المناسبة لهم بأعلى مستويات الاحترافية. كما تهتم الأكاديمية بالجانب اللغوي لطالب هذا القسم، نظرًا لطبيعة العمل التي تتطلب التعامل مع الجنسيات الأجنبية بمختلف ثقافاتهم ولغاتهم. وتنظم الأكاديمية أيضًا زيارات تدريبية لطلابها بكبرى فنادق القاهرة والجيزة، حيث يحتك الطالب بالعمل المباشر وكيفية التعامل مع المواقف المختلفة داخل الفنادق، بالإضافة إلى الاستعانة بعدد من الطلاب للعمل بجانب الدراسة، وذلك لتهيئتهم لسوق العمل بشكل مباشر. وتستعين الأكاديمية في هذا القسم بأفضل المحاضرين المتخصصين العاملين في مجال السياحة والفنادق، كما تستعين بأساتذة من الجامعات المصرية العاملين في كليات السياحة والفنادق، وذلك لتقديم تجربة دراسية مميزة للطلاب.",
    },
    image: "/images/departments/tourism-and-hotels/hero.jpeg",
    gallery: [
      "/images/departments/tourism-and-hotels/hero.jpeg",
      ...departmentImages("tourism-and-hotels", 5),
    ],
    featuredPrograms: [],
  },
  {
    slug: "information-systems",
    name: { en: "Information Systems", ar: "نظم معلومات" },
    description: {
      en: "Students in the Information Systems department study everything related to software, website and application design, as well as various programming languages. This takes place through direct, hands-on work with modern computers inside the academy's dedicated computer labs, which are equipped with the latest devices. The academy also places importance on regularly organising visits for its students to technology conferences, and on organising their active participation in these conferences and exhibitions, giving them direct exposure to and awareness of everything new in the field of modern technology. The academy also draws on the best specialised engineers and lecturers working in the field of systems and software for this department, as well as professors from Egyptian universities working in faculties of communications and information technology, to prepare graduates for the job market and help them secure a genuine job opportunity.",
      ar: "يدرس الطالب في قسم نظم المعلومات كل ما يتعلق بالبرمجيات وتصميم المواقع الإلكترونية والتطبيقات، وكذلك لغات البرمجة المختلفة، وذلك عن طريق احتكاك الطالب بشكل مباشر بأجهزة الكمبيوتر الحديثة داخل معامل الكمبيوتر الخاصة بالأكاديمية والمجهزة بأحدث الأجهزة. كما تهتم الأكاديمية بتنظيم زيارات لطلابها للمؤتمرات التكنولوجية بشكل دائم، وتنظيم مشاركاتهم الفعالة في هذه المؤتمرات والمعارض، والتي تتيح لهم الاحتكاك المباشر والاطلاع على كل ما هو جديد في مجال التكنولوجيا الحديثة. وتستعين الأكاديمية في هذا القسم بأفضل المهندسين والمحاضرين المتخصصين العاملين في مجال النظم والبرمجيات، كما تستعين بأساتذة من الجامعات المصرية العاملين في كليات الاتصالات وتكنولوجيا المعلومات، وذلك لتهيئة الخريج لسوق العمل ومساعدته في الحصول على فرصة عمل حقيقية.",
    },
    image: "/images/departments/information-systems/hero.jpeg",
    gallery: [
      "/images/departments/information-systems/hero.jpeg",
      ...departmentImages("information-systems", 12),
    ],
    featuredPrograms: [],
  },
  {
    slug: "languages-and-translation",
    name: { en: "Languages & Translation", ar: "لغات و ترجمة" },
    description: {
      en: "Students in the Languages & Translation department study everything related to languages and translation through active, hands-on language practice using the latest methods. Students in this department study both English and French. Lecturers in this department also focus on conversation and direct interaction with students through active language practice, alongside strong attention to listening skills, given their important role in developing and mastering a language. Students also study translation in all its forms and types, since the translation job market requires genuine command of the language for students to secure a suitable job opportunity.",
      ar: "يدرس الطالب في قسم اللغات والترجمة كل ما يتعلق باللغات والترجمة عن طريق الممارسة الفعالة للغة بأحدث الوسائل، حيث يدرس الطالب في هذا القسم اللغة الإنجليزية واللغة الفرنسية. كما يركز المحاضرون داخل هذا القسم على المحادثة والتفاعل بشكل مباشر مع الطلاب عن طريق الممارسة الفعالة للغة، فضلًا عن الاهتمام بمهارة الاستماع لما لها من دور مهم في تطوير اللغة وإتقانها. كما يدرس الطالب الترجمة بكافة أشكالها وأنواعها، حيث إن سوق العمل في مجال الترجمة يتطلب إتقانًا حقيقيًا للغة حتى يتسنى للطالب الحصول على فرصة عمل مناسبة.",
    },
    image: "/images/departments/languages-and-translation/hero.jpeg",
    gallery: [
      "/images/departments/languages-and-translation/hero.jpeg",
      ...departmentImages("languages-and-translation", 2),
    ],
    featuredPrograms: [],
  },
];

export const staff = [
  {
    name: "Dr. Amr Shaker",
    role: "Academy President",
    category: "Leadership",
    qualification: "PhD Education Management",
    bio: "Guides MIA's academic strategy and accreditation agenda across all faculties.",
    initials: "AS",
    photo: "https://i.pravatar.cc/300?img=12",
  },
  {
    name: "Dr. Yasmine El-Sharkawy",
    role: "Chair, Business & Leadership",
    category: "Professors",
    qualification: "PhD Management, INSEAD",
    bio: "Leads the executive education portfolio and corporate learning partnerships.",
    initials: "YE",
    photo: "https://i.pravatar.cc/300?img=47",
  },
  {
    name: "Eng. Karim Fahmy",
    role: "Lead Instructor, Data & AI",
    category: "Professors",
    qualification: "MSc Computer Science",
    bio: "Builds MIA's applied machine learning curriculum and lab infrastructure.",
    initials: "KF",
    photo: "https://i.pravatar.cc/300?img=33",
  },
  {
    name: "Nour Abdelrahman",
    role: "Growth Marketing Mentor",
    category: "Industry Mentors",
    qualification: "MBA Marketing",
    bio: "Brings live campaign budgets and agency briefs into the classroom.",
    initials: "NA",
    photo: "https://i.pravatar.cc/300?img=45",
  },
  {
    name: "Eng. Hisham Nabil",
    role: "Senior Faculty, Project Delivery",
    category: "Professors",
    qualification: "PMP · PMI-ACP",
    bio: "Trains delivery leaders across infrastructure, energy and technology sectors.",
    initials: "HN",
    photo: "https://i.pravatar.cc/300?img=13",
  },
  {
    name: "Sarah Milton",
    role: "Head of Language Studies",
    category: "Leadership",
    qualification: "MA Applied Linguistics",
    bio: "Designs MIA's proficiency framework and language assessment standards.",
    initials: "SM",
    photo: "https://i.pravatar.cc/300?img=44",
  },
  {
    name: "Mona Adel",
    role: "Faculty Lead, People & Organisation",
    category: "Professors",
    qualification: "SHRM-SCP",
    bio: "Connects HR theory with the realities of regional labour markets.",
    initials: "MA",
    photo: "https://i.pravatar.cc/300?img=25",
  },
  {
    name: "Tarek Halim",
    role: "Fintech Guest Lecturer",
    category: "Guest Lecturers",
    qualification: "CFA · MSc Finance",
    bio: "Runs seasonal masterclasses on payments, lending and regulation.",
    initials: "TH",
    photo: "https://i.pravatar.cc/300?img=51",
  },
  {
    name: "Dina Roshdy",
    role: "Career Services Director",
    category: "Leadership",
    qualification: "MSc Career Development",
    bio: "Oversees mentorship, employer relations and graduate placement.",
    initials: "DR",
    photo: "https://i.pravatar.cc/300?img=28",
  },
  {
    name: "Omar Ghaly",
    role: "Cloud Architecture Mentor",
    category: "Industry Mentors",
    qualification: "AWS Solutions Architect Pro",
    bio: "Mentors capstone teams on production-grade cloud deployments.",
    initials: "OG",
    photo: "https://i.pravatar.cc/300?img=14",
  },
  {
    name: "Laila Mansour",
    role: "Design Thinking Guest Lecturer",
    category: "Guest Lecturers",
    qualification: "MA Service Design",
    bio: "Facilitates innovation sprints with partner organisations.",
    initials: "LM",
    photo: "https://i.pravatar.cc/300?img=48",
  },
  {
    name: "Ahmed Sobhy",
    role: "Quality & Accreditation Manager",
    category: "Leadership",
    qualification: "MSc Quality Systems",
    bio: "Maintains MIA's international accreditation and audit readiness.",
    initials: "AS2",
    photo: "https://i.pravatar.cc/300?img=15",
  },
];

export type Post = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content?: string[];
  author: string;
  date: string;
  read: string;
  image: string;
  gallery: string[];
};

export const posts: Post[] = [
  {
    slug: "graduation-ceremonies",
    title: "Graduation ceremonies & honoring top students",
    category: "Campus News",
    excerpt:
      "Every year, MIA holds a graduation ceremony to honor its top-performing students — recognizing their achievement, celebrating the families behind it, and rewarding excellence with prizes, laptops and direct placement support.",
    content: [
      "Since the academy's founding, the administration has made a point of organizing graduation ceremonies and honors events for its top students — moments where high-achieving students feel genuinely recognized for their effort.",
      "The academy also honors the parents of top-performing students, who play an essential role in their children's success.",
      "At these ceremonies, the academy typically presents top students with material and in-kind prizes. Since 2018, MIA has awarded laptops to its top graduates as a reward for academic excellence.",
      "The academy also supports its top graduates in securing employment by forwarding their credentials to leading institutions in each specialization, helping open the door to direct placement.",
      "These ceremonies are also an occasion to honor faculty members for their efforts and dedication to students throughout the academic year.",
      "MIA is proud that these ceremonies are regularly attended and graced by prominent public figures from Egyptian society across a range of fields and specializations.",
    ],
    author: "MIA Editorial",
    date: "12 August 2026",
    read: "4 min read",
    image: graduationHero,
    gallery: [
      graduationHero,
      graduation1,
      graduation2,
      graduation3,
      graduation4,
      graduation5,
      graduation6,
    ],
  },
  {
    slug: "helping-graduates-find-work",
    title: "Helping graduates find work",
    category: "Campus News",
    excerpt:
      "From CV submissions to full employment fairs with HR leaders from partner companies — how MIA turns graduation into a job offer.",
    content: [
      "The academy aims to graduate cohorts of students who are ready to join the job market, through intensive, high-impact practical training that sharpens each student's skills before graduation — making them qualified to work at companies and institutions across the Egyptian, Arab and international markets.",
      "Alongside its educational and training role, the academy also plays an important part in helping its graduates find work. It does this by submitting each graduate's CV and required documents to the Graduate Affairs department, which then forwards them to partner institutions and companies — giving graduates the chance to sit a personal interview, with a large number going on to be hired into different roles.",
      "The academy also organises an employment fair attended by leading companies and institutions across a range of fields and specialisations. These organisations send their HR managers to meet our students and hear about their skills, opening the door for a number of them to join these institutions. The same HR managers also explain how our students and graduates can develop themselves further to make it easier to be accepted at these organisations.",
      "In this way, the academy combines its educational and training role with a dedicated role in helping graduates step into the job market.",
      "The academy has organised many such employment fairs over the years, with participation from telecom companies, hotels, medical institutions and television channels — fairs that have helped a great many graduates find work.",
    ],
    author: "MIA Editorial",
    date: "20 August 2026",
    read: "4 min read",
    image: "/images/blog/helping-graduates-find-work/hero.jpeg",
    gallery: [
      "/images/blog/helping-graduates-find-work/hero.jpeg",
      ...blogImages("helping-graduates-find-work", 13),
    ],
  },
  {
    slug: "the-entertainment-aspect-of-the-academy",
    title: "The recreational side of MIA Academy",
    category: "Campus News",
    excerpt:
      "From Pyramid and Alexandria excursions to Ain Sokhna getaways, Eid gifts and an annual football cup — how MIA keeps student life balanced.",
    content: [
      "Over the years, the academy's administration has never overlooked the recreational side of student life. Alongside its focus on theoretical and practical study, recreation plays an important role in our students' wellbeing.",
      "The academy has organised numerous recreational and cultural trips, including visits to important historical sites such as the Pyramids, several landmarks in Alexandria, and sites around Fayoum.",
      "The academy has also organised trips to Ain Sokhna in Suez, and other destinations that give students a chance to unwind.",
      "The academy also marks a number of occasions such as religious holidays — distributing Eid gifts to its students, and handing out sweets during exam periods to lift students' spirits and ease exam-related stress.",
      "The academy also organises an annual football tournament, where teams formed from different departments compete for the Academy Cup, alongside valuable cash prizes for the winning teams.",
    ],
    author: "MIA Editorial",
    date: "20 August 2026",
    read: "4 min read",
    image: "/images/blog/the-entertainment-aspect-of-the-academy/hero.jpeg",
    gallery: [
      "/images/blog/the-entertainment-aspect-of-the-academy/hero.jpeg",
      ...blogImages("the-entertainment-aspect-of-the-academy", 20),
    ],
  },
];

export const faqs = [
  {
    category: "Admissions",
    question: "What are the general entry requirements?",
    answer:
      "Most professional programmes require a secondary school certificate plus a short motivation interview. Postgraduate tracks require a recognised bachelor's degree and, for some programmes, two years of relevant experience.",
  },
  {
    category: "Admissions",
    question: "Can I apply if my degree is from outside Egypt?",
    answer:
      "Yes. Submit your transcripts with an official translation. Our admissions team completes an equivalency review within five working days.",
  },
  {
    category: "Admissions",
    question: "When do applications close?",
    answer:
      "Applications close two weeks before each intake date, or earlier if the cohort reaches capacity. Early applicants receive priority for scholarships.",
  },
  {
    category: "Tuition & Fees",
    question: "Do you offer instalment plans?",
    answer:
      "Every programme offers an interest-free instalment plan billed per module. A 5% discount applies to upfront payment of the full tuition.",
  },
  {
    category: "Tuition & Fees",
    question: "How do scholarships work?",
    answer:
      "MIA awards merit and need-based scholarships of up to 40%. Submit the scholarship form with your application and supporting documents.",
  },
  {
    category: "Academics",
    question: "How large are the cohorts?",
    answer:
      "Cohorts are capped at 24 learners so instructors can review individual work each week.",
  },
  {
    category: "Academics",
    question: "Are the certificates internationally recognised?",
    answer:
      "MIA certificates are issued under our accreditation partners, and several tracks prepare you directly for global vendor or professional exams.",
  },
  {
    category: "Campus Life",
    question: "Is there parking and study space on campus?",
    answer:
      "The Maadi campus offers secure parking, a 24-hour study lounge, a library and a student café.",
  },
  {
    category: "Campus Life",
    question: "Do you host networking events?",
    answer:
      "We run monthly employer meet-ups, alumni panels and an annual capstone showcase open to industry partners.",
  },
  {
    category: "Online Learning",
    question: "Are online sessions live or recorded?",
    answer:
      "Sessions are live with an instructor, and every session is recorded and available in the learning portal for 12 months.",
  },
  {
    category: "Online Learning",
    question: "What technology do I need?",
    answer:
      "A laptop with a stable connection is enough. Specialised software is provided through the MIA cloud lab at no extra cost.",
  },
];

export const partners = [
  "Cairo Governorate Graduate Employment Authority",
  "Ministry of Industry and Trade",
  "Professional Academy for Teachers – Ministry of Education",
  "National Council for Education and Training – Cabinet of Ministers",
];
