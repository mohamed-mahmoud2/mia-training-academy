"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { DirectionProvider } from "@radix-ui/react-direction";

export type Language = "en" | "ar";

type NavLink = { to: string; label: string };

type Dictionary = {
  nav: {
    home: string;
    about: string;
    programs: string;
    admissions: string;
    faqs: string;
    contact: string;
    staff: string;
    applyNow: string;
    subtitle: string;
    switchLanguage: string;
    openMenu: string;
    closeMenu: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    exploreFaculties: string;
    virtualTour: string;
  };
  metrics: { label: string }[];
  faculties: {
    eyebrow: string;
    title: string;
    description: string;
    viewAll: string;
    badge: string;
    programmeFocus: (count: number) => string;
    directToFaculty: string;
    exploreFaculty: string;
    onCampusLabel: string;
  };
  advantages: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; body: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    previous: string;
    next: string;
    ariaLabel: string;
  };
  news: {
    eyebrow: string;
    title: string;
    allArticles: string;
  };
  blogDetail: {
    home: string;
    blog: string;
    backToAllBlogs: string;
    articleDetails: string;
    gallery: string;
    previousSlide: string;
    nextSlide: string;
    goToSlide: (n: number) => string;
    moreIn: (category: string) => string;
  };
  programsPage: {
    title: string;
    description: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  facultyDetail: {
    focusHeading: string;
    learningStyleLabel: string;
    learningStyleValue: string;
    bestForLabel: string;
    bestForValue: string;
    tracksLabel: string;
    tracksFallback: string;
    studyHeading: string;
    studyBody: string;
    noProgrammes: string;
    gallery: string;
    previousSlide: string;
    nextSlide: string;
    goToSlide: (n: number) => string;
    relatedEyebrow: string;
    relatedTitle: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  programDetail: {
    enrollNow: string;
    duration: string;
    format: string;
    certification: string;
    nextIntake: string;
    overviewHeading: string;
    overviewBody: string;
    curriculumHeading: string;
    programmeLeadHeading: string;
    tuitionHeading: string;
    startApplication: string;
    relatedEyebrow: string;
    relatedTitle: string;
    ctaTitle: (intake: string) => string;
  };
  about: {
    eyebrow: string;
    title: string;
    description: string;
    missionLabel: string;
    missionTitle: string;
    missionP1: string;
    missionP2: string;
    missionP3: string;
    missionList: string[];
    valuesEyebrow: string;
    valuesTitle: string;
    values: { title: string; body: string }[];
    historyEyebrow: string;
    historyTitle: string;
    timeline: { title: string; body: string }[];
    accreditationsEyebrow: string;
    accreditationsTitle: string;
    ctaTitle: string;
    ctaDescription: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    description: string;
    formHeading: string;
    fullName: string;
    email: string;
    phone: string;
    facultyLabel: string;
    selectFaculty: string;
    facultyHelper: string;
    message: string;
    messagePlaceholder: string;
    sendMessage: string;
    campusLabel: string;
    phoneLabel: string;
    emailLabel: string;
    officeHoursLabel: string;
    mapHeading: string;
    discoveryCallTitle: string;
    discoveryCallDescription: string;
    bookCall: string;
    toastMessageSentTitle: string;
    toastMessageSentDescription: string;
    toastBookingTitle: string;
    toastBookingDescription: string;
  };
  faqsPage: {
    eyebrow: string;
    title: string;
    description: string;
    searchLabel: string;
    searchPlaceholder: string;
    allCategory: string;
    noResults: string;
    askAdvisor: string;
    stillHaveQuestions: string;
    advisorsAvailable: string;
    chatWithAdvisor: string;
  };
  admissionsPage: {
    eyebrow: string;
    title: string;
    description: string;
    processEyebrow: string;
    processTitle: string;
    steps: { title: string; body: string }[];
    requirementsEyebrow: string;
    requirementsTitle: string;
    requirementGroups: {
      key: "undergraduate" | "postgraduate" | "professional";
      label: string;
      items: string[];
    }[];
    tuitionCards: { title: string; body: string }[];
    checklistTitle: string;
    checklist: string[];
    downloadChecklist: string;
    applyEyebrow: string;
    applyTitle: string;
    stepIndicator: (current: number) => string;
    fullName: string;
    emailAddress: string;
    phoneNumber: string;
    facultyLabel: string;
    selectFaculty: string;
    facultyHelper: string;
    noteLabel: string;
    notePlaceholder: string;
    documentsTitle: string;
    documentsHelper: string;
    idDocumentLabel: string;
    certificateLabel: string;
    photoLabel: string;
    cvLabel: string;
    chooseFile: string;
    noFileChosen: string;
    optionalLabel: string;
    back: string;
    continueLabel: string;
    submitApplication: string;
    toastChecklistTitle: string;
    toastChecklistDescription: string;
    toastApplicationTitle: string;
    toastApplicationDescription: string;
  };
  staffPage: {
    eyebrow: string;
    title: string;
    description: string;
    allCategory: string;
    ctaTitle: string;
    ctaDescription: string;
    viewOpenPositions: string;
  };
  academicsPage: {
    eyebrow: string;
    title: string;
    description: string;
    methodologyEyebrow: string;
    methodologyTitle: string;
    methodologyDescription: string;
    methodology: { title: string; body: string }[];
    facultiesTitle: string;
    facilitiesEyebrow: string;
    facilitiesTitle: string;
    facilities: { title: string; caption: string }[];
    calendarTitle: string;
    calendar: { term: string; note: string }[];
    downloadCalendarTitle: string;
    downloadCalendarDescription: string;
    getThePdf: string;
    toastCalendarTitle: string;
    toastCalendarDescription: string;
    facilityFallback: string;
    ctaTitle: string;
  };
  cta: {
    title: string;
    description: string;
    applyNow: string;
    talkToAdvisor: string;
  };
  footer: {
    tagline: string;
    quickLinksHeading: string;
    resourcesHeading: string;
    newsletterHeading: string;
    newsletterBody: string;
    subscribe: string;
    emailPlaceholder: string;
    emailAddressLabel: string;
    rights: string;
    quickLinks: NavLink[];
    resources: NavLink[];
    toastSubscribedTitle: string;
    toastSubscribedDescription: string;
    accreditedBadge: string;
    contactHeading: string;
    academyFullName: string;
  };
  blogPage: {
    eyebrow: string;
    title: string;
    description: string;
    allCategory: string;
    loadMore: string;
    newsletterTitle: string;
    newsletterBody: string;
    toastSubscribedTitle: string;
    toastSubscribedDescription: string;
  };
  programCard: {
    learnMore: string;
  };
  officeHours: { weekdays: string; saturday: string };
  languageSwitcher: { label: string };
};

const en: Dictionary = {
  nav: {
    home: "Home",
    about: "About",
    programs: "Programs",
    admissions: "Admissions",
    faqs: "FAQs",
    contact: "Contact",
    staff: "Faculty & Staff",
    applyNow: "Apply Now",
    subtitle: "Maadi International",
    switchLanguage: "Switch language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "Intakes open for autumn 2026",
    title: "Qualifications built with industry, taught by practitioners.",
    description:
      "MIA Academy prepares ambitious professionals in Maadi and across the region with accredited diplomas, certificates and executive programmes designed around real workplace outcomes.",
    exploreFaculties: "Explore programs",
    virtualTour: "Take a Virtual Tour",
  },
  metrics: [
    { label: "Graduates since 2017" },
    { label: "Career outcome rate" },
    { label: "Accredited programmes" },
    { label: "Global partners" },
  ],
  faculties: {
    eyebrow: "Featured programmes",
    title: "Choose the programme that moves your career",
    description:
      "Six of our most requested programmes, each built around practical projects and workplace-ready skills.",
    viewAll: "View all programmes",
    badge: "Faculty",
    programmeFocus: (count) => `${count} programme focus`,
    directToFaculty: "Direct to faculty details",
    exploreFaculty: "Explore program",
    onCampusLabel: "On-campus labs and lecture halls",
  },
  advantages: {
    eyebrow: "Why choose MIA",
    title: "An academy engineered around outcomes",
    description: "Three commitments shape every cohort we run.",
    items: [
      {
        title: "Practitioner faculty",
        body: "Every course is led by someone still working in the field, so the material reflects this quarter's reality — not last decade's textbook.",
      },
      {
        title: "Industry connections",
        body: "Capstone briefs come from partner employers, and monthly meet-ups put you in the same room as the people who hire.",
      },
      {
        title: "Modern labs",
        body: "Cloud workstations, analytics environments and studio spaces are available to every enrolled learner around the clock.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Student voices",
    title: "Graduates on what actually changed",
    previous: "Previous testimonials",
    next: "Next testimonials",
    ariaLabel: "Student testimonials",
  },
  news: {
    eyebrow: "Latest news",
    title: "Insights from the MIA community",
    allArticles: "All activities",
  },
  blogDetail: {
    home: "Home",
    blog: "Blog",
    backToAllBlogs: "Back to all blogs",
    articleDetails: "Article details",
    gallery: "Gallery",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    goToSlide: (n) => `Go to slide ${n}`,
    moreIn: (category) => `More in ${category}`,
  },
  programsPage: {
    title: "Every MIA program brings together the practical learning you need",
    description:
      "Browse the academy by program to explore the study areas, teaching style and programmes connected to each specialism.",
    ctaTitle: "Not sure which program fits?",
    ctaDescription: "A 15-minute call with an advisor usually settles it.",
  },
  facultyDetail: {
    focusHeading: "Program focus",
    learningStyleLabel: "Learning style",
    learningStyleValue: "Small cohorts, applied workshops and guided capstones.",
    bestForLabel: "Best for",
    bestForValue: "Students who want career-ready practice and employer-facing projects.",
    tracksLabel: "Most relevant tracks",
    tracksFallback: "Career-focused learning tracks",
    studyHeading: "Study in this faculty",
    studyBody:
      "This faculty combines practice, academic depth and employer-focused projects so students can move from learning to delivery with confidence.",
    noProgrammes: "No programmes listed for this faculty yet.",
    gallery: "Gallery",
    previousSlide: "Previous slide",
    nextSlide: "Next slide",
    goToSlide: (n) => `Go to slide ${n}`,
    relatedEyebrow: "Programmes",
    relatedTitle: "Related programmes in this faculty",
    ctaTitle: "Ready to explore the next step in this faculty?",
    ctaDescription: "Book a quick admissions call and compare the best-fit programmes.",
  },
  programDetail: {
    enrollNow: "Enroll Now",
    duration: "Duration",
    format: "Format",
    certification: "Certification",
    nextIntake: "Next intake",
    overviewHeading: "Overview & learning outcomes",
    overviewBody:
      "This programme is delivered in small cohorts with weekly assessed work. You will leave with a portfolio piece built to a partner brief, a recognised credential and a career plan reviewed by our advisors.",
    curriculumHeading: "Curriculum breakdown",
    programmeLeadHeading: "Programme lead",
    tuitionHeading: "Tuition & financing",
    startApplication: "Start your application",
    relatedEyebrow: "Related",
    relatedTitle: "You might also be interested in",
    ctaTitle: (intake) => `Ready to join the ${intake} intake?`,
  },
  about: {
    eyebrow: "Our mission",
    title: "Education that respects your time and repays your ambition",
    description:
      "MIA Academy exists to close the distance between what employers need and what learners are taught.",
    missionLabel: "Mission & vision",
    missionTitle: "A practical academy with academic discipline",
    missionP1:
      "MIA Academy was founded in 2017 by a group of leading education experts from Egypt and the wider Arab world, bringing together scholars and instructors across disciplines to build the best possible learning experience for every student.",
    missionP2:
      "Our educational approach rests on a single principle: linking knowledge to real work. When our students graduate, they are academically and practically qualified for the Egyptian job market across a wide range of fields.",
    missionP3:
      "That spans everything from surveying — widely used across Egypt in agriculture, road planning and real estate development, where graduates train intensively with engineers from leading contracting firms to work as licensed general surveyors — to information systems and technology, where students learn programming and software in fully equipped computer labs before moving into web and app development or IT roles. It also includes business administration and accounting, and the international languages that are now a baseline requirement for employers large and small, in Egypt and abroad, alongside health services, nursing, medical analysis, tourism and petroleum technology.",
    missionList: [
      "Curriculum co-designed with hiring partners",
      "Assessment against published, transparent rubrics",
      "Career mentorship included in every programme",
      "Comfortable, fully equipped lecture halls built around student focus",
      "Trips, social events and graduation ceremonies that celebrate every milestone",
    ],
    valuesEyebrow: "Core values",
    valuesTitle: "Four principles we assess ourselves against",
    values: [
      {
        title: "Integrity",
        body: "Transparent assessment, honest career guidance and credentials that mean exactly what they say.",
      },
      {
        title: "Innovation",
        body: "Curricula are revised every intake against live hiring data and partner feedback.",
      },
      {
        title: "Excellence",
        body: "Small cohorts, rigorous standards and instructors held to measurable teaching outcomes.",
      },
      {
        title: "Community",
        body: "An alumni network that keeps opening doors long after the final assessment.",
      },
    ],
    historyEyebrow: "Our history",
    historyTitle: "Milestones that shaped MIA",
    timeline: [
      {
        title: "Founded in Maadi",
        body: "MIA opens with founding faculty drawn from leading Egyptian and Arab education experts.",
      },
      {
        title: "Government accreditation",
        body: "Licensed by Egyptian ministries and the Cairo Governorate's Graduate Employment Authority.",
      },
      {
        title: "Campus expansion",
        body: "Fully equipped computer labs and comfortable lecture halls added for growing cohorts.",
      },
      {
        title: "University partnerships",
        body: "Academic and cooperation agreements signed with leading Egyptian public universities.",
      },
      {
        title: "Applied AI lab",
        body: "Partnership-funded lab opens for data and engineering tracks.",
      },
      {
        title: "6,000+ graduates",
        body: "Alumni now work across surveying, technology, business, health and tourism sectors nationwide.",
      },
    ],
    accreditationsEyebrow: "Accreditations",
    accreditationsTitle: "Licensed and recognised by leading Egyptian institutions",
    ctaTitle: "Join a community that keeps showing up for its graduates",
    ctaDescription: "Applications for the autumn intake are open across every faculty.",
  },
  contactPage: {
    eyebrow: "Contact",
    title: "We reply within one working day",
    description:
      "Whether you are comparing programmes or finalising documents, our advisors are here to help.",
    formHeading: "Send us a message",
    fullName: "Full name",
    email: "Email",
    phone: "Phone",
    facultyLabel: "Faculty of interest",
    selectFaculty: "Select a faculty",
    facultyHelper: "Pick the faculty you'd like to discuss with an advisor.",
    message: "Message",
    messagePlaceholder: "Tell us what you're looking for",
    sendMessage: "Send message",
    campusLabel: "Campus",
    phoneLabel: "Phone",
    emailLabel: "Email",
    officeHoursLabel: "Office hours",
    mapHeading: "Campus location map",
    discoveryCallTitle: "Book a 15-minute discovery call",
    discoveryCallDescription:
      "One-on-one with an advisor: programme fit, funding options and intake planning.",
    bookCall: "Book a call",
    toastMessageSentTitle: "Message sent",
    toastMessageSentDescription: "An MIA advisor will be in touch shortly.",
    toastBookingTitle: "Booking opened",
    toastBookingDescription: "Pick a slot and we'll confirm by email.",
  },
  faqsPage: {
    eyebrow: "Support",
    title: "How can we help you?",
    description:
      "Search our knowledge base or browse by category. If you still need us, an advisor is one click away.",
    searchLabel: "Search frequently asked questions",
    searchPlaceholder: "Try “scholarship”, “instalments” or “online”",
    allCategory: "All",
    noResults: "No answers matched that search. Try a different term or contact an advisor.",
    askAdvisor: "Need more detail? Ask an advisor →",
    stillHaveQuestions: "Still have questions?",
    advisorsAvailable: "Advisors are available Sunday to Thursday, 9:00 – 18:00 (Cairo time).",
    chatWithAdvisor: "Chat with an advisor",
  },
  admissionsPage: {
    eyebrow: "Admissions",
    title: "A clear path from enquiry to enrolment",
    description:
      "Most applicants complete the process within ten working days. Here is exactly what to expect.",
    processEyebrow: "Process",
    processTitle: "Four steps to your place at MIA",
    steps: [
      {
        title: "Select your programme",
        body: "Compare intakes, formats and outcomes, or book an advisor call.",
      },
      {
        title: "Submit documents",
        body: "Upload your ID, certificates and CV through the application form.",
      },
      { title: "Interview", body: "A 20-minute conversation about your goals and readiness." },
      {
        title: "Enrol",
        body: "Accept your offer, choose a payment plan and join orientation.",
      },
    ],
    requirementsEyebrow: "Entry requirements",
    requirementsTitle: "What you need to apply",
    requirementGroups: [
      {
        key: "undergraduate",
        label: "Undergraduate",
        items: [
          "Secondary school certificate or recognised equivalent",
          "National ID or valid passport copy",
          "Short statement of purpose (300 words)",
          "English placement test for English-taught tracks",
        ],
      },
      {
        key: "postgraduate",
        label: "Postgraduate",
        items: [
          "Bachelor's degree from a recognised institution",
          "Official transcripts with translation where applicable",
          "Curriculum vitae with two years of relevant experience",
          "One professional or academic reference",
        ],
      },
      {
        key: "professional",
        label: "Professional Certifications",
        items: [
          "Proof of relevant work experience",
          "Curriculum vitae",
          "Programme-specific prerequisites where stated",
          "Employer sponsorship letter for corporate cohorts",
        ],
      },
    ],
    tuitionCards: [
      {
        title: "Tuition structure",
        body: "Programme fees range from EGP 24,000 to EGP 74,000 depending on duration and faculty. All fees include materials, lab access and career services.",
      },
      {
        title: "Payment plans",
        body: "Interest-free instalments are billed per module. Pay the full tuition upfront for a 5% discount, or arrange corporate invoicing.",
      },
      {
        title: "Scholarships & aid",
        body: "Merit awards of up to 40% and need-based aid of up to 30% are reviewed at each intake. Apply two weeks before the deadline.",
      },
    ],
    checklistTitle: "Document checklist",
    checklist: [
      "Completed application form",
      "National ID or passport copy",
      "Academic certificates and transcripts",
      "Two passport photographs",
      "Curriculum vitae",
      "Scholarship form (optional)",
    ],
    downloadChecklist: "Download checklist",
    applyEyebrow: "Apply now",
    applyTitle: "Start your application in three short steps",
    stepIndicator: (current) => `Step ${current} of 3`,
    fullName: "Full name",
    emailAddress: "Email address",
    phoneNumber: "Phone number",
    facultyLabel: "Faculty of interest",
    selectFaculty: "Select a faculty",
    facultyHelper: "Choose the faculty you want to enrol in.",
    noteLabel: "Anything we should know?",
    notePlaceholder: "Your background, goals or questions",
    documentsTitle: "Upload your documents",
    documentsHelper: "Attach clear scans or photos of the required papers below.",
    idDocumentLabel: "National ID or birth certificate",
    certificateLabel: "Secondary certificate or degree",
    photoLabel: "Personal photo",
    cvLabel: "CV",
    chooseFile: "Choose file",
    noFileChosen: "No file chosen",
    optionalLabel: "optional",
    back: "Back",
    continueLabel: "Continue",
    submitApplication: "Submit application",
    toastChecklistTitle: "Checklist on its way",
    toastChecklistDescription: "We'll email the downloadable PDF checklist.",
    toastApplicationTitle: "Application received",
    toastApplicationDescription: "An admissions advisor will contact you within one working day.",
  },
  staffPage: {
    eyebrow: "Our people",
    title: "Taught by people who still do the work",
    description:
      "Academic leadership, full-time faculty and practising mentors who bring live problems into the classroom.",
    allCategory: "All",
    ctaTitle: "Teach at MIA Academy",
    ctaDescription:
      "We are recruiting practitioners in data, finance, design and engineering for evening and weekend cohorts.",
    viewOpenPositions: "View open positions",
  },
  academicsPage: {
    eyebrow: "Academics",
    title: "Rigour you can see in the work our students produce",
    description:
      "A curriculum philosophy that balances conceptual depth with the practical fluency employers hire for.",
    methodologyEyebrow: "Methodology",
    methodologyTitle: "How an MIA programme is built",
    methodologyDescription:
      "Every programme follows the same four-stage architecture, tuned to its discipline.",
    methodology: [
      {
        title: "Grounded theory",
        body: "Compact, well-sequenced foundations so nobody builds practice on shaky concepts.",
      },
      {
        title: "Applied practice",
        body: "Weekly labs and studio work using the same tools and datasets as the workplace.",
      },
      {
        title: "Assessed capstone",
        body: "A real brief from a partner organisation, reviewed against a published rubric.",
      },
      {
        title: "Career mentorship",
        body: "Portfolio review, interview coaching and employer introductions before you graduate.",
      },
    ],
    facultiesTitle: "One standard, every faculty",
    facilitiesEyebrow: "Facilities",
    facilitiesTitle: "Spaces designed for practice",
    facilities: [
      {
        title: "Applied AI & computing lab",
        caption: "36 GPU-backed workstations and a private cloud environment.",
      },
      {
        title: "Research library",
        caption: "Print and digital collections with 24-hour study access.",
      },
      {
        title: "Lecture theatre",
        caption: "Recording-equipped rooms for hybrid cohorts.",
      },
    ],
    calendarTitle: "Academic calendar 2026/27",
    calendar: [
      { term: "Autumn intake", note: "All faculties" },
      { term: "Winter intake", note: "Business, Technology, Languages" },
      { term: "Spring intake", note: "Selected certificates" },
      { term: "Capstone showcase", note: "Open to industry partners" },
    ],
    downloadCalendarTitle: "Download the full calendar",
    downloadCalendarDescription:
      "Term dates, assessment weeks, holidays and showcase events in one PDF.",
    getThePdf: "Get the PDF",
    toastCalendarTitle: "Calendar requested",
    toastCalendarDescription: "We'll email the PDF to you shortly.",
    facilityFallback: "Facility",
    ctaTitle: "Study where the standards are published and the feedback is real",
  },
  cta: {
    title: "Your next qualification starts here",
    description:
      "Speak with an advisor, review upcoming intakes and secure your place in the next MIA cohort.",
    applyNow: "Apply Now",
    talkToAdvisor: "Contact Us",
  },
  footer: {
    tagline:
      "Professional education built with industry, delivered by practitioners, measured by the careers our graduates build.",
    quickLinksHeading: "Quick links",
    resourcesHeading: "Resources",
    newsletterHeading: "Newsletter",
    newsletterBody: "Monthly programme announcements, scholarship deadlines and career insights.",
    subscribe: "Subscribe",
    emailPlaceholder: "you@example.com",
    emailAddressLabel: "Email address",
    rights: "All rights reserved.",
    quickLinks: [
      { to: "/about", label: "About MIA" },
      { to: "/academics", label: "Academics" },
      { to: "/programs", label: "Programs" },
      { to: "/admissions", label: "Admissions" },
      { to: "/staff", label: "Faculty & Staff" },
      { to: "/faqs", label: "FAQs" },
    ],
    resources: [
      { to: "/blog", label: "Insights & News" },
      { to: "/contact", label: "Contact Us" },
      { to: "/admissions", label: "Scholarships" },
      { to: "/academics", label: "Academic Calendar" },
    ],
    toastSubscribedTitle: "You're subscribed",
    toastSubscribedDescription: "Look out for the next MIA briefing in your inbox.",
    accreditedBadge: "Accredited",
    contactHeading: "Contact",
    academyFullName: "Maadi International Academy",
  },
  blogPage: {
    eyebrow: "Insights",
    title: "Writing from the MIA community",
    description: "Practical guidance from our faculty, career team and students.",
    allCategory: "All",
    loadMore: "Load more articles",
    newsletterTitle: "Weekly insights, no noise",
    newsletterBody: "One email a week with career guidance and upcoming intakes.",
    toastSubscribedTitle: "Subscribed",
    toastSubscribedDescription: "Welcome to the MIA briefing.",
  },
  programCard: {
    learnMore: "Learn more",
  },
  officeHours: { weekdays: "Sun – Thu: 9:00 – 18:00", saturday: "Sat: 10:00 – 14:00" },
  languageSwitcher: { label: "العربية" },
};

const ar: Dictionary = {
  nav: {
    home: "الرئيسية",
    about: "من نحن",
    programs: "البرامج",
    admissions: "القبول",
    faqs: "الأسئلة الشائعة",
    contact: "تواصل معنا",
    staff: "أعضاء هيئة التدريس والموظفين",
    applyNow: "قدم الآن",
    subtitle: "أكاديمية المعادي الدولية",
    switchLanguage: "تغيير اللغة",
    openMenu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
  },
  hero: {
    badge: "التسجيل مفتوح لفصل خريف 2026",
    title: "مؤهلات مبنية مع القطاع، يقدّمها ممارسون محترفون.",
    description:
      "تُعِد أكاديمية MIA المهنيين الطموحين في المعادي وعبر المنطقة من خلال دبلومات وشهادات معتمدة وبرامج تنفيذية مصممة حول نتائج عملية حقيقية.",
    exploreFaculties: "استكشف البرامج",
    virtualTour: "جولة افتراضية",
  },
  metrics: [
    { label: "خريج منذ 2017" },
    { label: "معدل النجاح المهني" },
    { label: "برامج معتمدة" },
    { label: "شريك عالمي" },
  ],
  faculties: {
    eyebrow: "البرامج المميزة",
    title: "اختر البرنامج التي تدفع مسيرتك المهنية",
    description:
      "ست من أكثر مجالات الدراسة طلبًا لدينا، كل منها مبني حول مشاريع عملية ومهارات جاهزة لسوق العمل.",
    viewAll: "عرض جميع البرامج",
    badge: "كلية",
    programmeFocus: (count) => `${count} برنامج رئيسي`,
    directToFaculty: "انتقل مباشرة لتفاصيل البرنامج",
    exploreFaculty: "استكشف البرنامج",
    onCampusLabel: "معامل ومحاضرات داخل الحرم الجامعي",
  },
  advantages: {
    eyebrow: "لماذا تختار MIA",
    title: "أكاديمية مصممة لتحقيق النتائج",
    description: "ثلاثة التزامات تشكّل كل دفعة نديرها.",
    items: [
      {
        title: "أعضاء هيئة تدريس ممارسون",
        body: "يقود كل مقرر شخص لا يزال يعمل في المجال، مما يجعل المحتوى يعكس واقع هذا الفصل — وليس كتاب العقد الماضي.",
      },
      {
        title: "روابط صناعية",
        body: "تأتي مشاريع التخرج من جهات توظيف شريكة، وتضعك اللقاءات الشهرية في نفس الغرفة مع من يقومون بالتوظيف.",
      },
      {
        title: "مختبرات حديثة",
        body: "محطات عمل سحابية وبيئات تحليلات ومساحات استوديو متاحة لكل متعلم مسجل على مدار الساعة.",
      },
    ],
  },
  testimonials: {
    eyebrow: "آراء الطلاب",
    title: "خريجون يتحدثون عمّا تغيّر فعليًا",
    previous: "الشهادات السابقة",
    next: "الشهادات التالية",
    ariaLabel: "آراء الطلاب",
  },
  news: {
    eyebrow: "آخر الأخبار",
    title: "رؤى من مجتمع MIA",
    allArticles: "جميع المقالات",
  },
  blogDetail: {
    home: "الرئيسية",
    blog: "المدونة",
    backToAllBlogs: "العودة إلى جميع المقالات",
    articleDetails: "تفاصيل المقال",
    gallery: "معرض الصور",
    previousSlide: "الشريحة السابقة",
    nextSlide: "الشريحة التالية",
    goToSlide: (n) => `الانتقال إلى الشريحة ${n}`,
    moreIn: (category) => `المزيد في ${category}`,
  },
  programsPage: {
    title: "كل برنامج في MIA يجمع لك التعلم العملي الذي تحتاجه",
    description:
      "تصفح الأكاديمية حسب البرنامج لاستكشاف مجالات الدراسة وأسلوب التدريس والبرامج المرتبطة بكل تخصص.",
    ctaTitle: "لست متأكدًا من البرنامج المناسبة لك؟",
    ctaDescription: "مكالمة مدتها 15 دقيقة مع مستشار عادةً ما تحسم الأمر.",
  },
  facultyDetail: {
    focusHeading: "تركيز البرنامج",
    learningStyleLabel: "أسلوب التعلم",
    learningStyleValue: "دفعات صغيرة، ورش عمل تطبيقية ومشاريع تخرج موجهة.",
    bestForLabel: "الأنسب لـ",
    bestForValue: "الطلاب الراغبين في ممارسة عملية جاهزة لسوق العمل ومشاريع موجهة لأصحاب العمل.",
    tracksLabel: "أكثر المسارات صلة",
    tracksFallback: "مسارات تعلم موجهة للمسار المهني",
    studyHeading: "الدراسة في هذه البرنامج",
    studyBody:
      "تجمع هذه البرنامج بين الممارسة والعمق الأكاديمي والمشاريع الموجهة لأصحاب العمل حتى ينتقل الطلاب من التعلم إلى الإنجاز بثقة.",
    noProgrammes: "لا توجد برامج مدرجة لهذه البرنامج بعد.",
    gallery: "معرض الصور",
    previousSlide: "الشريحة السابقة",
    nextSlide: "الشريحة التالية",
    goToSlide: (n) => `الانتقال إلى الشريحة ${n}`,
    relatedEyebrow: "البرامج",
    relatedTitle: "برامج ذات صلة في هذه البرنامج",
    ctaTitle: "مستعد لاستكشاف الخطوة التالية في هذه البرنامج؟",
    ctaDescription: "احجز مكالمة قبول سريعة وقارن بين أنسب البرامج لك.",
  },
  programDetail: {
    enrollNow: "سجل الآن",
    duration: "المدة",
    format: "نظام الدراسة",
    certification: "الشهادة",
    nextIntake: "موعد القبول القادم",
    overviewHeading: "نظرة عامة ونتائج التعلم",
    overviewBody:
      "يُقدَّم هذا البرنامج في دفعات صغيرة مع أعمال مقيَّمة أسبوعيًا. ستخرج بعمل ملموس لملف أعمالك مبني وفق طلب شريك حقيقي، وشهادة معتمدة، وخطة مهنية يراجعها مستشارونا.",
    curriculumHeading: "تفاصيل المنهج الدراسي",
    programmeLeadHeading: "قائد البرنامج",
    tuitionHeading: "الرسوم والتمويل",
    startApplication: "ابدأ طلب التسجيل",
    relatedEyebrow: "ذو صلة",
    relatedTitle: "قد يهمك أيضًا",
    ctaTitle: (intake) => `مستعد للانضمام إلى دفعة ${intake}؟`,
  },
  about: {
    eyebrow: "مهمتنا",
    title: "تعليم يحترم وقتك ويكافئ طموحك",
    description: "تأسست أكاديمية MIA لسد الفجوة بين ما يحتاجه أصحاب العمل وما يتعلمه الطلاب.",
    missionLabel: "الرسالة والرؤية",
    missionTitle: "أكاديمية عملية بانضباط أكاديمي",
    missionP1:
      "تم إنشاء أكاديمية المعادي الدولية (MIA) في عام 2017 على أيدي باقة من خبراء التعليم في مصر والوطن العربي، حيث استعانت إدارة الأكاديمية بعلماء وأساتذة في مختلف التخصصات حتى يتسنى لها تقديم أفضل تجربة دراسية للطالب.",
    missionP2:
      "تقوم العملية التعليمية بالأكاديمية على أسس علمية هدفها الأساسي ربط العلم بالعمل، حينما يتخرج الطالب للمجتمع وهو مؤهل علميًا وأكاديميًا لسوق العمل المصري في مختلف المجالات.",
    missionP3:
      "من أمثلة ذلك مجال أعمال المساحة، وهو مجال منتشر في أنحاء جمهورية مصر العربية، خاصة في المجال الزراعي وتخطيط الطرق والتطوير العقاري، حيث يعمل الخريج مساحًا عامًا بعد تدريب نظري وعملي مكثف على أيدي باقة من أفضل الأساتذة العاملين في كبرى شركات المقاولات في مصر. ومن جهة أخرى، تولي الأكاديمية مجالات النظم والتكنولوجيا اهتمامًا خاصًا، حيث يدرس الطالب البرمجة والتكنولوجيا على أيدي كبار خبراء النظم والبرمجيات في معامل مجهزة بأحدث أجهزة الكمبيوتر، ليتخرج قادرًا على العمل في تصميم المواقع والتطبيقات أو كمسؤول تقني وIT في كبرى المؤسسات. كما تهتم الأكاديمية بمجالات إدارة الأعمال والحسابات، واللغات الدولية التي أصبحت شرطًا أساسيًا للتعيين في الشركات الكبيرة والصغيرة داخل مصر وخارجها، إلى جانب الخدمات الصحية والتمريض والتحاليل والسياحة وتكنولوجيا البترول وغيرها من المجالات الهامة لسوق العمل المصري والعربي والدولي.",
    missionList: [
      "منهج مصمم بالشراكة مع جهات التوظيف",
      "تقييم وفق معايير منشورة وشفافة",
      "إرشاد مهني مُتضمَّن في كل برنامج",
      "قاعات دراسية مجهزة بأعلى مستوى من الراحة للطالب",
      "رحلات ومناسبات ترفيهية وحفلات تخرج وتكريمات تحتفي بكل إنجاز",
    ],
    valuesEyebrow: "قيمنا الأساسية",
    valuesTitle: "أربعة مبادئ نقيّم أنفسنا بها",
    values: [
      {
        title: "النزاهة",
        body: "تقييم شفاف، وإرشاد مهني صادق، وشهادات تعني بالضبط ما تقوله.",
      },
      {
        title: "الابتكار",
        body: "تُراجَع المناهج في كل دفعة وفق بيانات التوظيف الحية وملاحظات الشركاء.",
      },
      {
        title: "التميز",
        body: "دفعات صغيرة، ومعايير صارمة، ومدرّبون يُقاسون بنتائج تعليمية ملموسة.",
      },
      {
        title: "المجتمع",
        body: "شبكة خريجين تواصل فتح الأبواب لفترة طويلة بعد التقييم النهائي.",
      },
    ],
    historyEyebrow: "تاريخنا",
    historyTitle: "محطات شكّلت مسيرة MIA",
    timeline: [
      {
        title: "التأسيس في المعادي",
        body: "افتتحت MIA على أيدي باقة من خبراء التعليم في مصر والوطن العربي.",
      },
      {
        title: "الاعتماد الحكومي",
        body: "حصلت الأكاديمية على تراخيص من وزارات وجهات حكومية مصرية عديدة.",
      },
      {
        title: "توسعة الحرم الجامعي",
        body: "إضافة معامل حاسوب مجهزة بالكامل وقاعات دراسية مريحة لدفعات أكبر.",
      },
      {
        title: "شراكات جامعية",
        body: "توقيع اتفاقيات تعاون أكاديمي وتدريبي مع كبرى الجامعات المصرية الحكومية.",
      },
      {
        title: "معمل الذكاء الاصطناعي التطبيقي",
        body: "افتتاح معمل مموَّل بالشراكة لمسارات البيانات والهندسة.",
      },
      {
        title: "6,000+ خريج",
        body: "يعمل الخريجون الآن في مجالات المساحة والتكنولوجيا والأعمال والصحة والسياحة على مستوى الجمهورية.",
      },
    ],
    accreditationsEyebrow: "الاعتمادات",
    accreditationsTitle: "مرخصة ومعتمدة من كبرى المؤسسات المصرية",
    ctaTitle: "انضم إلى مجتمع يستمر في دعم خريجيه",
    ctaDescription: "التقديم لفصل الخريف مفتوح الآن في جميع البرامج.",
  },
  contactPage: {
    eyebrow: "تواصل معنا",
    title: "نرد خلال يوم عمل واحد",
    description: "سواء كنت تقارن بين البرامج أو تُنهي مستنداتك، مستشارونا هنا لمساعدتك.",
    formHeading: "أرسل لنا رسالة",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    phone: "رقم الهاتف",
    facultyLabel: "البرنامج المهتم به",
    selectFaculty: "اختر كلية",
    facultyHelper: "اختر البرنامج التي ترغب في مناقشتها مع مستشار.",
    message: "الرسالة",
    messagePlaceholder: "أخبرنا بما تبحث عنه",
    sendMessage: "إرسال الرسالة",
    campusLabel: "الحرم الجامعي",
    phoneLabel: "الهاتف",
    emailLabel: "البريد الإلكتروني",
    officeHoursLabel: "ساعات العمل",
    mapHeading: "خريطة موقع الحرم الجامعي",
    discoveryCallTitle: "احجز مكالمة تعريفية مدتها 15 دقيقة",
    discoveryCallDescription:
      "مكالمة فردية مع مستشار: مدى ملاءمة البرنامج، وخيارات التمويل، وتخطيط موعد القبول.",
    bookCall: "احجز مكالمة",
    toastMessageSentTitle: "تم إرسال الرسالة",
    toastMessageSentDescription: "سيتواصل معك مستشار من MIA قريبًا.",
    toastBookingTitle: "تم فتح الحجز",
    toastBookingDescription: "اختر موعدًا وسنؤكده عبر البريد الإلكتروني.",
  },
  faqsPage: {
    eyebrow: "الدعم",
    title: "كيف يمكننا مساعدتك؟",
    description:
      "ابحث في قاعدة المعرفة لدينا أو تصفح حسب الفئة. وإذا احتجت إلينا، مستشار على بُعد نقرة واحدة.",
    searchLabel: "ابحث في الأسئلة الشائعة",
    searchPlaceholder: "جرّب «منحة دراسية» أو «تقسيط» أو «عبر الإنترنت»",
    allCategory: "الكل",
    noResults: "لا توجد إجابات مطابقة لهذا البحث. جرّب مصطلحًا آخر أو تواصل مع مستشار.",
    askAdvisor: "تحتاج تفاصيل أكثر؟ اسأل مستشارًا ←",
    stillHaveQuestions: "لا تزال لديك أسئلة؟",
    advisorsAvailable: "المستشارون متاحون من الأحد إلى الخميس، 9:00 - 18:00 (بتوقيت القاهرة).",
    chatWithAdvisor: "تحدث مع مستشار",
  },
  admissionsPage: {
    eyebrow: "القبول",
    title: "مسار واضح من الاستفسار إلى التسجيل",
    description: "يُنهي معظم المتقدمين العملية خلال عشرة أيام عمل. إليك بالضبط ما يمكن توقعه.",
    processEyebrow: "الإجراءات",
    processTitle: "أربع خطوات للحصول على مكانك في MIA",
    steps: [
      {
        title: "اختر برنامجك",
        body: "قارن بين مواعيد القبول والأنظمة والنتائج، أو احجز مكالمة مع مستشار.",
      },
      {
        title: "أرسل المستندات",
        body: "ارفع بطاقتك الشخصية والشهادات والسيرة الذاتية عبر نموذج التقديم.",
      },
      { title: "المقابلة", body: "محادثة مدتها 20 دقيقة حول أهدافك واستعدادك." },
      {
        title: "التسجيل",
        body: "اقبل عرضك، اختر خطة الدفع، وانضم إلى برنامج التعريف.",
      },
    ],
    requirementsEyebrow: "شروط القبول",
    requirementsTitle: "ما تحتاجه للتقديم",
    requirementGroups: [
      {
        key: "undergraduate",
        label: "المرحلة الجامعية",
        items: [
          "شهادة الثانوية العامة أو ما يعادلها",
          "نسخة من البطاقة الشخصية أو جواز سفر ساري",
          "بيان موجز عن الهدف من الالتحاق (300 كلمة)",
          "اختبار تحديد مستوى اللغة الإنجليزية للمسارات التي تُدرَّس بالإنجليزية",
        ],
      },
      {
        key: "postgraduate",
        label: "الدراسات العليا",
        items: [
          "درجة بكالوريوس من مؤسسة معتمدة",
          "كشوف درجات رسمية مع ترجمة عند الحاجة",
          "سيرة ذاتية مع خبرة عملية لا تقل عن سنتين",
          "خطاب توصية مهني أو أكاديمي واحد",
        ],
      },
      {
        key: "professional",
        label: "الشهادات المهنية",
        items: [
          "إثبات خبرة عملية ذات صلة",
          "سيرة ذاتية",
          "متطلبات خاصة بالبرنامج حيثما ذُكرت",
          "خطاب رعاية من جهة العمل للدفعات المؤسسية",
        ],
      },
    ],
    tuitionCards: [
      {
        title: "هيكل الرسوم الدراسية",
        body: "تتراوح رسوم البرامج بين 24,000 و74,000 جنيه مصري حسب المدة والبرنامج. تشمل جميع الرسوم المواد والوصول للمعامل وخدمات التوظيف.",
      },
      {
        title: "خطط الدفع",
        body: "تُحتسب الأقساط بدون فوائد لكل وحدة دراسية. ادفع الرسوم كاملة مقدمًا للحصول على خصم 5%، أو رتّب فوترة مؤسسية.",
      },
      {
        title: "المنح والمساعدات",
        body: "تُراجَع منح التفوق حتى 40% والمساعدات القائمة على الحاجة حتى 30% في كل موعد قبول. قدّم قبل الموعد النهائي بأسبوعين.",
      },
    ],
    checklistTitle: "قائمة المستندات المطلوبة",
    checklist: [
      "نموذج التقديم مكتملًا",
      "نسخة من البطاقة الشخصية أو جواز السفر",
      "الشهادات الأكاديمية وكشوف الدرجات",
      "صورتان شخصيتان",
      "السيرة الذاتية",
      "نموذج المنحة الدراسية (اختياري)",
    ],
    downloadChecklist: "تحميل القائمة",
    applyEyebrow: "قدّم الآن",
    applyTitle: "ابدأ طلبك في ثلاث خطوات قصيرة",
    stepIndicator: (current) => `الخطوة ${current} من 3`,
    fullName: "الاسم الكامل",
    emailAddress: "البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    facultyLabel: "البرنامج المهتم به",
    selectFaculty: "اختر كلية",
    facultyHelper: "اختر البرنامج الذي ترغب في الالتحاق به.",
    noteLabel: "هل هناك ما ينبغي أن نعرفه؟",
    notePlaceholder: "خلفيتك، أهدافك أو أسئلتك",
    documentsTitle: "ارفع مستنداتك",
    documentsHelper: "أرفق صورًا واضحة للمستندات المطلوبة أدناه.",
    idDocumentLabel: "بطاقة الرقم القومي أو شهادة الميلاد",
    certificateLabel: "الشهادة الثانوية أو المؤهل الجامعي",
    photoLabel: "صورة شخصية",
    cvLabel: "السيرة الذاتية",
    chooseFile: "اختر ملفًا",
    noFileChosen: "لم يتم اختيار ملف",
    optionalLabel: "اختياري",
    back: "رجوع",
    continueLabel: "متابعة",
    submitApplication: "إرسال الطلب",
    toastChecklistTitle: "القائمة في الطريق إليك",
    toastChecklistDescription: "سنرسل لك ملف PDF قابل للتحميل عبر البريد الإلكتروني.",
    toastApplicationTitle: "تم استلام الطلب",
    toastApplicationDescription: "سيتواصل معك مستشار قبول خلال يوم عمل واحد.",
  },
  staffPage: {
    eyebrow: "فريقنا",
    title: "يُدرّس على أيدي من لا يزالون يعملون في المجال",
    description:
      "قيادة أكاديمية، وأعضاء هيئة تدريس بدوام كامل، ومرشدون ممارسون يجلبون مشكلات حقيقية إلى الفصل الدراسي.",
    allCategory: "الكل",
    ctaTitle: "درّس في أكاديمية MIA",
    ctaDescription:
      "نبحث حاليًا عن ممارسين في مجالات البيانات والتمويل والتصميم والهندسة لدفعات مسائية ونهاية الأسبوع.",
    viewOpenPositions: "عرض الوظائف الشاغرة",
  },
  academicsPage: {
    eyebrow: "الشؤون الأكاديمية",
    title: "دقة يمكنك رؤيتها في أعمال طلابنا",
    description: "فلسفة منهجية توازن بين العمق النظري والطلاقة العملية التي يبحث عنها أصحاب العمل.",
    methodologyEyebrow: "المنهجية",
    methodologyTitle: "كيف يُبنى برنامج MIA",
    methodologyDescription: "يتبع كل برنامج نفس البنية ذات الأربع مراحل، مُكيَّفة حسب تخصصه.",
    methodology: [
      {
        title: "أساس نظري متين",
        body: "أسس مُركّزة ومُرتّبة بعناية حتى لا يبني أحد ممارسته على مفاهيم هشة.",
      },
      {
        title: "ممارسة تطبيقية",
        body: "معامل واستوديوهات أسبوعية باستخدام نفس الأدوات ومجموعات البيانات المستخدمة في مكان العمل.",
      },
      {
        title: "مشروع تخرج مُقيَّم",
        body: "طلب حقيقي من مؤسسة شريكة، يُراجَع وفق معايير منشورة.",
      },
      {
        title: "إرشاد مهني",
        body: "مراجعة ملف الأعمال، وتدريب على المقابلات، وتعريف بأصحاب العمل قبل التخرج.",
      },
    ],
    facultiesTitle: "معيار واحد لكل كلية",
    facilitiesEyebrow: "المرافق",
    facilitiesTitle: "مساحات مصممة للممارسة العملية",
    facilities: [
      {
        title: "معمل الذكاء الاصطناعي والحوسبة التطبيقي",
        caption: "36 محطة عمل مدعومة بمعالجات رسومية وبيئة سحابية خاصة.",
      },
      {
        title: "مكتبة البحث",
        caption: "مجموعات مطبوعة ورقمية مع إمكانية الدراسة على مدار الساعة.",
      },
      {
        title: "قاعة المحاضرات",
        caption: "قاعات مجهزة بالتسجيل للدفعات الهجينة.",
      },
    ],
    calendarTitle: "التقويم الأكاديمي 2026/27",
    calendar: [
      { term: "قبول الخريف", note: "جميع البرامج" },
      { term: "قبول الشتاء", note: "الأعمال، التكنولوجيا، اللغات" },
      { term: "قبول الربيع", note: "شهادات مختارة" },
      { term: "معرض مشاريع التخرج", note: "مفتوح لشركاء الصناعة" },
    ],
    downloadCalendarTitle: "تحميل التقويم الكامل",
    downloadCalendarDescription:
      "مواعيد الفصول الدراسية، وأسابيع التقييم، والإجازات، والفعاليات في ملف PDF واحد.",
    getThePdf: "احصل على ملف PDF",
    toastCalendarTitle: "تم طلب التقويم",
    toastCalendarDescription: "سنرسل لك ملف PDF عبر البريد الإلكتروني قريبًا.",
    facilityFallback: "مرفق",
    ctaTitle: "ادرس حيث تُنشَر المعايير وتكون التغذية الراجعة حقيقية",
  },
  cta: {
    title: "مؤهلك القادم يبدأ من هنا",
    description:
      "تحدث مع مستشار، وراجع فترات القبول القادمة، واحجز مكانك في الدفعة القادمة بأكاديمية MIA.",
    applyNow: "قدم الآن",
    talkToAdvisor: "تواصل معنا",
  },
  footer: {
    tagline: "تعليم مهني مبني مع القطاع، يقدّمه ممارسون، ويُقاس بمسيرات خريجينا المهنية.",
    quickLinksHeading: "روابط سريعة",
    resourcesHeading: "موارد",
    newsletterHeading: "النشرة الإخبارية",
    newsletterBody: "إعلانات شهرية عن البرامج، مواعيد المنح الدراسية، ورؤى مهنية.",
    subscribe: "اشترك",
    emailPlaceholder: "you@example.com",
    emailAddressLabel: "البريد الإلكتروني",
    rights: "جميع الحقوق محفوظة.",
    quickLinks: [
      { to: "/about", label: "عن MIA" },
      { to: "/academics", label: "الشؤون الأكاديمية" },
      { to: "/programs", label: "البرامج" },
      { to: "/admissions", label: "القبول" },
      { to: "/staff", label: "أعضاء هيئة التدريس والموظفين" },
      { to: "/faqs", label: "الأسئلة الشائعة" },
    ],
    resources: [
      { to: "/blog", label: "رؤى وأخبار" },
      { to: "/contact", label: "تواصل معنا" },
      { to: "/admissions", label: "المنح الدراسية" },
      { to: "/academics", label: "التقويم الأكاديمي" },
    ],
    toastSubscribedTitle: "تم اشتراكك",
    toastSubscribedDescription: "ترقّب نشرة MIA القادمة في بريدك الإلكتروني.",
    accreditedBadge: "معتمدة",
    contactHeading: "تواصل معنا",
    academyFullName: "أكاديمية المعادي الدولية",
  },
  blogPage: {
    eyebrow: "رؤى",
    title: "كتابات من مجتمع MIA",
    description: "إرشادات عملية من أعضاء هيئة التدريس وفريق التوظيف والطلاب لدينا.",
    allCategory: "الكل",
    loadMore: "تحميل المزيد من المقالات",
    newsletterTitle: "رؤى أسبوعية، بلا ضوضاء",
    newsletterBody: "رسالة بريدية واحدة أسبوعيًا فيها إرشاد مهني ومواعيد القبول القادمة.",
    toastSubscribedTitle: "تم الاشتراك",
    toastSubscribedDescription: "أهلًا بك في نشرة MIA.",
  },
  programCard: {
    learnMore: "اعرف المزيد",
  },
  officeHours: { weekdays: "الأحد – الخميس: 9:00 – 18:00", saturday: "السبت: 10:00 – 14:00" },
  languageSwitcher: { label: "English" },
};

const dictionaries: Record<Language, Dictionary> = { en, ar };

type I18nContextValue = {
  language: Language;
  dir: "ltr" | "rtl";
  t: Dictionary;
  toggleLanguage: () => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

const STORAGE_KEY = "mia-language";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") setLanguage(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const toggleLanguage = () => setLanguage((prev) => (prev === "en" ? "ar" : "en"));

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <I18nContext.Provider
      value={{
        language,
        dir,
        t: dictionaries[language],
        toggleLanguage,
      }}
    >
      <DirectionProvider dir={dir}>{children}</DirectionProvider>
    </I18nContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
