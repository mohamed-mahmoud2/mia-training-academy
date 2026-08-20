const classroom = "/images/classroom.jpg";
const heroCampus = "/images/hero-campus.jpg";
const lab = "/images/lab.jpg";
const library = "/images/library.jpg";
const graduationHero = "/images/blog/graduation-hero.jpeg";
const graduation1 = "/images/blog/graduation-1.jpeg";
const graduation2 = "/images/blog/graduation-2.jpeg";
const graduation3 = "/images/blog/graduation-3.jpeg";
const graduation4 = "/images/blog/graduation-4.jpeg";
const graduation5 = "/images/blog/graduation-5.jpeg";
const graduation6 = "/images/blog/graduation-6.jpeg";
const recreationHero = "/images/blog/recreation-hero.jpeg";
const recreation1 = "/images/blog/recreation-1.jpeg";
const recreation2 = "/images/blog/recreation-2.jpeg";
const recreation3 = "/images/blog/recreation-3.jpeg";
const recreation4 = "/images/blog/recreation-4.jpeg";
const recreation5 = "/images/blog/recreation-5.jpeg";
const recreation6 = "/images/blog/recreation-6.jpeg";
const recreation7 = "/images/blog/recreation-7.jpeg";
const recreation8 = "/images/blog/recreation-8.jpeg";
const recreation9 = "/images/blog/recreation-9.jpeg";
const recreation10 = "/images/blog/recreation-10.jpeg";
const recreation11 = "/images/blog/recreation-11.jpeg";
const recreation12 = "/images/blog/recreation-12.jpeg";
const recreation13 = "/images/blog/recreation-13.jpeg";
const recreation14 = "/images/blog/recreation-14.jpeg";
const recreation15 = "/images/blog/recreation-15.jpeg";
const recreation16 = "/images/blog/recreation-16.jpeg";
const recreation17 = "/images/blog/recreation-17.jpeg";
const recreation18 = "/images/blog/recreation-18.jpeg";
const recreation19 = "/images/blog/recreation-19.jpeg";
const recreation20 = "/images/blog/recreation-20.jpeg";

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

export const programs: Program[] = [
  {
    slug: "business-administration",
    title: "Business Administration",
    category: "Business & Leadership",
    image: classroom,
    duration: "9 months",
    format: "Hybrid · Evenings",
    certification: "MIA Professional Diploma",
    nextIntake: "12 October 2026",
    tags: ["Leadership", "Strategy", "Finance"],
    excerpt:
      "Build the managerial toolkit to lead teams, read financial statements and drive growth in fast-moving organisations.",
    objectives: [
      "Translate corporate strategy into measurable operating plans",
      "Interpret financial statements and build defensible budgets",
      "Lead cross-functional teams through structured change",
      "Apply data-driven decision frameworks to real business cases",
    ],
    curriculum: [
      {
        term: "Module 1 — Foundations",
        items: [
          "Principles of modern management",
          "Business economics and market structure",
          "Financial accounting essentials",
        ],
      },
      {
        term: "Module 2 — Applied Practice",
        items: [
          "Marketing strategy and customer analytics",
          "Operations and supply chain design",
          "Corporate finance and valuation",
        ],
      },
      {
        term: "Module 3 — Capstone",
        items: [
          "Leadership and organisational behaviour",
          "Live consulting capstone with a partner firm",
          "Executive presentation and career mentorship",
        ],
      },
    ],
    instructor: {
      name: "Dr. Yasmine El-Sharkawy",
      title: "Chair, Business & Leadership",
      bio: "Former regional strategy director with 18 years advising multinationals across MENA, now leading MIA's executive education portfolio.",
      credentials: "PhD Management, INSEAD · CFA Charterholder",
    },
    tuition: [
      { label: "Full programme", amount: "EGP 74,000", note: "5% discount on upfront payment" },
      { label: "Instalment plan", amount: "3 × EGP 26,000", note: "Interest-free, per module" },
      { label: "Merit scholarship", amount: "Up to 40% off", note: "Based on portfolio review" },
    ],
  },
  {
    slug: "data-analytics",
    title: "Data Analytics & AI",
    category: "Technology",
    image: lab,
    duration: "6 months",
    format: "On-campus labs",
    certification: "MIA Certificate + Vendor Exam Prep",
    nextIntake: "5 September 2026",
    tags: ["Python", "SQL", "Machine Learning"],
    excerpt:
      "From spreadsheets to production models — a hands-on route into analytics roles, built around real datasets.",
    objectives: [
      "Model, query and clean data at scale with SQL and Python",
      "Design dashboards that decision-makers actually use",
      "Train, evaluate and deploy supervised learning models",
      "Communicate analytical findings to non-technical stakeholders",
    ],
    curriculum: [
      {
        term: "Module 1 — Data Fundamentals",
        items: [
          "Relational modelling and advanced SQL",
          "Python for data wrangling",
          "Statistics for analysts",
        ],
      },
      {
        term: "Module 2 — Insight & Visualisation",
        items: [
          "Dashboard design principles",
          "Business intelligence tooling",
          "Experimentation and A/B testing",
        ],
      },
      {
        term: "Module 3 — Machine Learning",
        items: [
          "Supervised learning workflows",
          "Model evaluation and fairness",
          "Capstone: end-to-end ML product",
        ],
      },
    ],
    instructor: {
      name: "Eng. Karim Fahmy",
      title: "Lead Instructor, Data & AI",
      bio: "Machine learning engineer who has shipped recommendation and forecasting systems for regional e-commerce leaders.",
      credentials: "MSc Computer Science · Google Cloud Professional ML Engineer",
    },
    tuition: [
      {
        label: "Full programme",
        amount: "EGP 62,000",
        note: "Includes lab access and exam voucher",
      },
      { label: "Instalment plan", amount: "3 × EGP 22,000", note: "Interest-free, per module" },
      { label: "Need-based aid", amount: "Up to 30% off", note: "Documented financial review" },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    category: "Marketing & Media",
    image: heroCampus,
    duration: "5 months",
    format: "Online live",
    certification: "MIA Certificate",
    nextIntake: "20 September 2026",
    tags: ["Performance", "Content", "Analytics"],
    excerpt:
      "Plan, launch and measure full-funnel campaigns with budgets, briefs and creative feedback from working practitioners.",
    objectives: [
      "Build channel strategies grounded in audience research",
      "Run and optimise paid media across search and social",
      "Produce a content system that compounds organic reach",
      "Report performance against commercial objectives",
    ],
    curriculum: [
      {
        term: "Module 1 — Strategy",
        items: [
          "Audience and positioning research",
          "Funnel design",
          "Brand and messaging architecture",
        ],
      },
      {
        term: "Module 2 — Channels",
        items: [
          "Search and shopping campaigns",
          "Paid social and creative testing",
          "SEO and content operations",
        ],
      },
      {
        term: "Module 3 — Measurement",
        items: ["Attribution and analytics", "Marketing automation", "Capstone campaign launch"],
      },
    ],
    instructor: {
      name: "Nour Abdelrahman",
      title: "Industry Mentor, Growth Marketing",
      bio: "Growth lead who has managed eight-figure regional media budgets for consumer and fintech brands.",
      credentials: "MBA Marketing · Meta & Google Ads Certified",
    },
    tuition: [
      { label: "Full programme", amount: "EGP 48,000", note: "Ad credits included" },
      { label: "Instalment plan", amount: "3 × EGP 17,000", note: "Interest-free, per module" },
      { label: "Alumni discount", amount: "15% off", note: "For MIA graduates" },
    ],
  },
  {
    slug: "project-management",
    title: "Project Management Professional Track",
    category: "Business & Leadership",
    image: library,
    duration: "4 months",
    format: "Weekends",
    certification: "PMP® Exam Preparation",
    nextIntake: "3 October 2026",
    tags: ["PMP", "Agile", "Risk"],
    excerpt:
      "A disciplined path to certification with exam simulations, templates and coaching from certified practitioners.",
    objectives: [
      "Master the full project lifecycle and knowledge areas",
      "Build schedules, budgets and risk registers that hold up",
      "Blend predictive and agile delivery approaches",
      "Sit the certification exam with confidence",
    ],
    curriculum: [
      {
        term: "Module 1",
        items: ["Framework and integration", "Scope and schedule", "Cost management"],
      },
      {
        term: "Module 2",
        items: ["Quality and resources", "Risk and procurement", "Stakeholder engagement"],
      },
      {
        term: "Module 3",
        items: ["Agile and hybrid delivery", "Exam simulations", "Coaching clinics"],
      },
    ],
    instructor: {
      name: "Eng. Hisham Nabil",
      title: "Senior Faculty, Project Delivery",
      bio: "Delivered infrastructure and IT programmes across Egypt and the Gulf, with 12 years of PMP experience.",
      credentials: "PMP · PMI-ACP · PRINCE2 Practitioner",
    },
    tuition: [
      { label: "Full programme", amount: "EGP 39,000", note: "Includes exam simulator" },
      { label: "Instalment plan", amount: "2 × EGP 20,500", note: "Interest-free" },
      { label: "Corporate cohort", amount: "20% off", note: "Groups of five or more" },
    ],
  },
  {
    slug: "english-communication",
    title: "Professional English & Business Communication",
    category: "Languages",
    image: classroom,
    duration: "3 months",
    format: "On-campus / Online",
    certification: "MIA Proficiency Certificate",
    nextIntake: "15 September 2026",
    tags: ["Business English", "Presentation", "Writing"],
    excerpt:
      "Speak, write and present with clarity in international workplaces — assessed against recognised proficiency levels.",
    objectives: [
      "Communicate confidently in meetings and negotiations",
      "Write precise business correspondence and reports",
      "Deliver structured, persuasive presentations",
      "Advance a full proficiency band by graduation",
    ],
    curriculum: [
      {
        term: "Module 1",
        items: ["Workplace fluency", "Pronunciation clinic", "Email and messaging"],
      },
      {
        term: "Module 2",
        items: ["Report and proposal writing", "Meeting facilitation", "Negotiation language"],
      },
      {
        term: "Module 3",
        items: ["Presentation lab", "Interview coaching", "Final proficiency assessment"],
      },
    ],
    instructor: {
      name: "Sarah Milton",
      title: "Head of Language Studies",
      bio: "Cambridge-trained language specialist with 15 years teaching business communication across three continents.",
      credentials: "MA Applied Linguistics · CELTA · DELTA",
    },
    tuition: [
      { label: "Full programme", amount: "EGP 24,000", note: "Materials included" },
      { label: "Instalment plan", amount: "2 × EGP 12,500", note: "Interest-free" },
      { label: "Student rate", amount: "20% off", note: "Valid university ID" },
    ],
  },
  {
    slug: "hr-management",
    title: "Human Resources Management Diploma",
    category: "Business & Leadership",
    image: lab,
    duration: "7 months",
    format: "Hybrid",
    certification: "MIA Professional Diploma",
    nextIntake: "26 October 2026",
    tags: ["Talent", "Labour Law", "Analytics"],
    excerpt:
      "Design the people systems modern organisations rely on — hiring, performance, compensation and compliance.",
    objectives: [
      "Build hiring funnels that reduce time-to-quality-hire",
      "Design performance and compensation frameworks",
      "Apply labour law confidently in daily practice",
      "Use people analytics to guide workforce planning",
    ],
    curriculum: [
      {
        term: "Module 1",
        items: ["HR strategy and structure", "Talent acquisition", "Onboarding design"],
      },
      {
        term: "Module 2",
        items: ["Performance management", "Compensation and benefits", "Labour law essentials"],
      },
      {
        term: "Module 3",
        items: ["People analytics", "Organisational development", "Capstone HR audit"],
      },
    ],
    instructor: {
      name: "Mona Adel",
      title: "Faculty Lead, People & Organisation",
      bio: "HR director turned educator, having built people functions for scale-ups and multinational subsidiaries.",
      credentials: "SHRM-SCP · MSc Organisational Psychology",
    },
    tuition: [
      { label: "Full programme", amount: "EGP 56,000", note: "Includes toolkit library" },
      { label: "Instalment plan", amount: "3 × EGP 19,500", note: "Interest-free, per module" },
      { label: "Merit scholarship", amount: "Up to 35% off", note: "Based on interview" },
    ],
  },
];

export type Faculty = {
  slug: string;
  name: string;
  description: string;
  image: string;
  gallery: string[];
  featuredPrograms: Program[];
};

function slugifyCategory(category: string): string {
  return `faculty-${category
    .toLowerCase()
    .replace(/&/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
}

const categoryDescriptions: Record<string, string> = {
  "Business & Leadership":
    "Management, finance, project delivery and people leadership tracks built around real operating decisions.",
  Technology: "Data, analytics and applied AI, taught hands-on in fully equipped computer labs.",
  "Marketing & Media":
    "Full-funnel digital marketing, from channel strategy to campaign measurement.",
  Languages: "Professional English and business communication for international workplaces.",
};

const categoryImages: Record<string, string> = {
  "Business & Leadership": classroom,
  Technology: lab,
  "Marketing & Media": heroCampus,
  Languages: library,
};

export const faculties: Faculty[] = Array.from(new Set(programs.map((p) => p.category))).map(
  (category) => {
    const featuredPrograms = programs.filter((program) => program.category === category);
    const image = categoryImages[category] ?? heroCampus;
    return {
      slug: slugifyCategory(category),
      name: category,
      description: categoryDescriptions[category] ?? featuredPrograms[0]?.excerpt ?? "",
      image,
      gallery: [image, classroom, lab, library, heroCampus].filter(
        (value, index, array) => array.indexOf(value) === index,
      ),
      featuredPrograms,
    };
  },
);

export const staff = [
  {
    name: "Dr. Amr Shaker",
    role: "Academy President",
    category: "Leadership",
    qualification: "PhD Education Management",
    bio: "Guides MIA's academic strategy and accreditation agenda across all faculties.",
    initials: "AS",
  },
  {
    name: "Dr. Yasmine El-Sharkawy",
    role: "Chair, Business & Leadership",
    category: "Professors",
    qualification: "PhD Management, INSEAD",
    bio: "Leads the executive education portfolio and corporate learning partnerships.",
    initials: "YE",
  },
  {
    name: "Eng. Karim Fahmy",
    role: "Lead Instructor, Data & AI",
    category: "Professors",
    qualification: "MSc Computer Science",
    bio: "Builds MIA's applied machine learning curriculum and lab infrastructure.",
    initials: "KF",
  },
  {
    name: "Nour Abdelrahman",
    role: "Growth Marketing Mentor",
    category: "Industry Mentors",
    qualification: "MBA Marketing",
    bio: "Brings live campaign budgets and agency briefs into the classroom.",
    initials: "NA",
  },
  {
    name: "Eng. Hisham Nabil",
    role: "Senior Faculty, Project Delivery",
    category: "Professors",
    qualification: "PMP · PMI-ACP",
    bio: "Trains delivery leaders across infrastructure, energy and technology sectors.",
    initials: "HN",
  },
  {
    name: "Sarah Milton",
    role: "Head of Language Studies",
    category: "Leadership",
    qualification: "MA Applied Linguistics",
    bio: "Designs MIA's proficiency framework and language assessment standards.",
    initials: "SM",
  },
  {
    name: "Mona Adel",
    role: "Faculty Lead, People & Organisation",
    category: "Professors",
    qualification: "SHRM-SCP",
    bio: "Connects HR theory with the realities of regional labour markets.",
    initials: "MA",
  },
  {
    name: "Tarek Halim",
    role: "Fintech Guest Lecturer",
    category: "Guest Lecturers",
    qualification: "CFA · MSc Finance",
    bio: "Runs seasonal masterclasses on payments, lending and regulation.",
    initials: "TH",
  },
  {
    name: "Dina Roshdy",
    role: "Career Services Director",
    category: "Leadership",
    qualification: "MSc Career Development",
    bio: "Oversees mentorship, employer relations and graduate placement.",
    initials: "DR",
  },
  {
    name: "Omar Ghaly",
    role: "Cloud Architecture Mentor",
    category: "Industry Mentors",
    qualification: "AWS Solutions Architect Pro",
    bio: "Mentors capstone teams on production-grade cloud deployments.",
    initials: "OG",
  },
  {
    name: "Laila Mansour",
    role: "Design Thinking Guest Lecturer",
    category: "Guest Lecturers",
    qualification: "MA Service Design",
    bio: "Facilitates innovation sprints with partner organisations.",
    initials: "LM",
  },
  {
    name: "Ahmed Sobhy",
    role: "Quality & Accreditation Manager",
    category: "Leadership",
    qualification: "MSc Quality Systems",
    bio: "Maintains MIA's international accreditation and audit readiness.",
    initials: "AS2",
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
    slug: "choosing-the-right-diploma",
    title: "How to choose the right professional diploma in 2026",
    category: "Career Advice",
    excerpt:
      "Five questions that separate a credential that changes your career from one that just decorates your CV.",
    author: "Dina Roshdy",
    date: "2 August 2026",
    read: "6 min read",
    image: classroom,
    gallery: [classroom, library, lab],
  },
  {
    slug: "student-life-and-recreation",
    title: "Beyond the classroom: the recreational side of MIA",
    category: "Campus News",
    excerpt:
      "From Pyramid and Alexandria excursions to Ain Sokhna getaways, Eid gifts and an annual football cup — how MIA keeps student life balanced.",
    content: [
      "Over the years, the academy's administration has never overlooked the recreational side of student life. Alongside its focus on theoretical and practical study, MIA recognises that recreation plays an important role in our students' wellbeing.",
      "The academy has organised numerous recreational and cultural trips, including visits to major historical sites such as the Pyramids, several landmarks in Alexandria, and sites around Fayoum.",
      "MIA has also organised trips to Ain Sokhna in Suez, and other destinations that give students a chance to unwind.",
      "The academy also marks holidays and special occasions — distributing Eid gifts to students, and handing out sweets during exam periods to lift students' spirits and ease exam-related stress.",
      "MIA also organises an annual football tournament, where teams formed from different departments compete for the Academy Cup, alongside valuable cash prizes for the winning teams.",
    ],
    author: "MIA Editorial",
    date: "24 July 2026",
    read: "4 min read",
    image: recreationHero,
    gallery: [
      recreationHero,
      recreation1,
      recreation2,
      recreation3,
      recreation4,
      recreation5,
      recreation6,
      recreation7,
      recreation8,
      recreation9,
      recreation10,
      recreation11,
      recreation12,
      recreation13,
      recreation14,
      recreation15,
      recreation16,
      recreation17,
      recreation18,
      recreation19,
      recreation20,
    ],
  },
  {
    slug: "skills-employers-want",
    title: "The skills regional employers are actually hiring for",
    category: "Industry Insights",
    excerpt:
      "We analysed 1,200 job posts across Cairo and the Gulf. Here is what changed this year.",
    author: "Dr. Yasmine El-Sharkawy",
    date: "11 July 2026",
    read: "8 min read",
    image: library,
    gallery: [library, classroom, heroCampus],
  },
  {
    slug: "balancing-work-and-study",
    title: "Balancing a full-time job with evening study",
    category: "Student Life",
    excerpt: "Habits from graduates who completed a diploma without pausing their career.",
    author: "Nour Abdelrahman",
    date: "28 June 2026",
    read: "5 min read",
    image: heroCampus,
    gallery: [heroCampus, library, lab],
  },
  {
    slug: "portfolio-that-converts",
    title: "Building a portfolio that converts interviews into offers",
    category: "Career Advice",
    excerpt: "What hiring managers look for in the first ninety seconds of a portfolio review.",
    author: "Dina Roshdy",
    date: "14 June 2026",
    read: "7 min read",
    image: classroom,
    gallery: [classroom, heroCampus, library],
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
