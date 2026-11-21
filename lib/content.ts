import { siteImages } from "./images";
import type { StaticImageData } from "next/image";

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  summary: string;
  description: string;
  idealFor: string;
  deliverables: string[];
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface WhyChooseItem {
  number: string;
  title: string;
  description: string;
}

export interface PortfolioProject {
  slug: string;
  title: string;
  category: "Concept Demo" | "Client Work";
  isDemo: boolean;
  sector: string;
  summary: string;
  image: StaticImageData;
  imageAlt: string;
  deliverables: string[];
  demoUrl: string;
  overview: string;
  goals: string[];
  solutionHighlights: string[];
}

export interface PricingPackage {
  id: string;
  name: string;
  subtitle: string;
  idealFor: string;
  pageLimit: string;
  revisions: string;
  deliveryEstimate: string;
  highlighted?: boolean;
  included: string[];
  exclusions: string[];
  note: string;
}

export interface TestimonialPlaceholder {
  id: string;
  placeholderLabel: string;
  sectorLabel: string;
  quote: string;
  projectType: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogInternalLink {
  label: string;
  href: string;
  context: string;
}

export interface BlogArticle {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  title: string;
  excerpt: string;
  category: string;
  publishedLabel: string;
  readTime: string;
  image: StaticImageData;
  imageAlt: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  internalLinks: BlogInternalLink[];
  takeaway: string;
}

export const servicesList: ServiceItem[] = [
  {
    id: "business-website-design",
    number: "01",
    title: "Professional Business Website Design",
    shortTitle: "Business Website Design",
    summary:
      "Custom, structured multi-page websites built to present your business clearly and convert visitors into genuine enquiries.",
    description:
      "We design and build clean, trustworthy websites tailored to small businesses, service providers, and growing companies. Every page is structured around clear navigation, readable typography, and direct enquiry paths.",
    idealFor: "Small businesses, local companies, consultancies, and international service brands",
    deliverables: [
      "Custom responsive layout tailored to your brand identity",
      "Core pages including Home, About, Services, and Contact",
      "Accessible forms, clear call-to-action flows, and mobile navigation",
      "Clean semantic HTML structure ready for search indexing",
    ],
    featured: true,
  },
  {
    id: "landing-page-design",
    number: "02",
    title: "Landing Page Design",
    shortTitle: "Landing Page Design",
    summary:
      "Focused single-offer pages engineered for ad campaigns, service launches, and academy admissions.",
    description:
      "When you are running social ads or promoting a specific service, sending traffic to a cluttered homepage wastes budget. We design dedicated landing pages with one clear message, structured proof sections, and friction-free enquiry forms.",
    idealFor: "Ad campaigns, new product or cohort launches, and lead generation offers",
    deliverables: [
      "Conversion-focused section hierarchy and clear headline messaging",
      "Mobile-first responsive layout optimized for social ad traffic",
      "WhatsApp and enquiry form integration points",
      "Fast-loading media and lightweight asset setup",
    ],
  },
  {
    id: "on-page-seo-setup",
    number: "03",
    title: "On-page SEO Setup",
    shortTitle: "On-page SEO Setup",
    summary:
      "Clean page titles, meta descriptions, heading structures, and internal links so search engines understand what you offer.",
    description:
      "Good search visibility starts with clear structure on every page. We configure unique titles, search-friendly descriptions, logical H1–H3 heading hierarchies, descriptive image alt text, and internal link pathways.",
    idealFor: "New business websites and existing sites with low search clarity",
    deliverables: [
      "Unique title tags and meta descriptions per page",
      "Clean H1–H3 semantic heading structure and keyword alignment",
      "Image alt text review and SEO-friendly URL slugs",
      "Internal linking blueprint across service and content pages",
    ],
  },
  {
    id: "technical-seo-foundations",
    number: "04",
    title: "Technical SEO Foundations",
    shortTitle: "Technical SEO Foundations",
    summary:
      "Crawlable architecture, XML sitemaps, structured data, and canonical hygiene built directly into your codebase.",
    description:
      "We make sure search engines can crawl, index, and interpret your website without technical roadblocks. From XML sitemaps and robots configuration to clean canonical URLs and Schema.org structured data, the foundation is set right from launch.",
    idealFor: "Startups, academies, and growing businesses preparing for long-term organic search",
    deliverables: [
      "XML sitemap and robots.txt configuration",
      "Canonical tags and OpenGraph / social sharing metadata",
      "Schema.org JSON-LD structured data for organization and key pages",
      "404 error handling and clean redirect planning",
    ],
  },
  {
    id: "speed-mobile-optimization",
    number: "05",
    title: "Website Speed and Mobile Optimization",
    shortTitle: "Speed & Mobile Optimization",
    summary:
      "Responsive layouts and lightweight assets tuned for real mobile connections across Pakistan and global markets.",
    description:
      "Most first-time visitors open business websites on mobile phones over varying network speeds. We optimize image sizing, eliminate layout shift, refine touch target sizing, and keep interface code lean so pages load smoothly.",
    idealFor: "Existing slow websites and mobile-heavy consumer or education audiences",
    deliverables: [
      "Responsive verification across mobile, tablet, and desktop breakpoints",
      "Next-gen image compression and responsive sizing setup",
      "Touch-friendly buttons, spacing, and readable mobile typography",
      "Elimination of heavy blocking scripts and visual layout shifts",
    ],
  },
  {
    id: "social-media-digital-marketing",
    number: "06",
    title: "Social Media Content and Digital Marketing Support",
    shortTitle: "Social & Digital Marketing",
    summary:
      "Consistent visual direction, campaign landing alignment, and practical content calendars that support business growth.",
    description:
      "Your website and social channels should speak the same language. We help businesses plan cohesive social content structures, campaign messaging, and digital touchpoints that guide interested audiences back to a reliable website.",
    idealFor: "Entrepreneurs, local brands, and academies building consistent online visibility",
    deliverables: [
      "Content pillar planning aligned with core business services",
      "Campaign copy and landing page message consistency",
      "Consistent visual brand direction across web and social posts",
      "Practical monthly publishing workflow recommendations",
    ],
    featured: true,
  },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    number: "01",
    title: "Clear Structure Over Clutter",
    description:
      "We avoid bloated templates and confusing layouts. Every section earns its place by helping your visitor understand what you do and how to reach you.",
  },
  {
    number: "02",
    title: "Search & Mobile Ready From Day One",
    description:
      "Semantic HTML, unique metadata, fast image delivery, and clean mobile navigation are built into the core website rather than treated as costly extras.",
  },
  {
    number: "03",
    title: "Honest Scope & Direct Communication",
    description:
      "As a growing agency, we work closely with business owners without layers of account managers, giving you transparent timelines and clear deliverables.",
  },
  {
    number: "04",
    title: "Built for Local & International Reach",
    description:
      "Whether your customers are in Lahore, Karachi, Islamabad, or overseas in the UK, UAE, or North America, your site communicates with clarity and professionalism.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery & Business Goals",
    description:
      "We start with a focused conversation about your business, audience, services, and what a successful enquiry looks like for you.",
  },
  {
    number: "02",
    title: "Site Map & Content Structure",
    description:
      "We organize pages, headings, and user journeys so both human visitors and search engines can navigate your site effortlessly.",
  },
  {
    number: "03",
    title: "Design, Build & SEO Setup",
    description:
      "We craft the visual interface, develop clean responsive components, and configure on-page and technical SEO essentials.",
  },
  {
    number: "04",
    title: "Review, Launch & Handover",
    description:
      "We test across screen sizes, refine details based on your feedback, and hand over a maintainable website ready for real enquiries.",
  },
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "edupilot",
    title: "EduPilot",
    category: "Concept Demo",
    isDemo: true,
    sector: "Education & Training Academy",
    summary:
      "A clearly labelled Concept Demo academy website built to show how modern training institutes can organize courses, admissions info, and mobile student enquiries.",
    image: siteImages.edupilotShowcase.src,
    imageAlt: siteImages.edupilotShowcase.alt,
    deliverables: [
      "Interactive Concept Demo Course Directory",
      "Syllabus & Cohort Format Architecture",
      "Mobile-First Student Enquiry Flow",
      "Education-Focused On-Page SEO Structure",
    ],
    demoUrl: "/portfolio/edupilot",
    overview:
      "EduPilot is an internal Concept Demo created by Tasmiya Digital Hub. It illustrates how coaching centers, online academies, and vocational institutes in Pakistan and abroad can present programs clearly without overwhelming prospective students.",
    goals: [
      "Replace cluttered brochure PDFs with a structured, filterable course layout.",
      "Make fee enquiry and admission questions accessible on mobile phones.",
      "Establish a clean heading and URL structure for individual course pages.",
    ],
    solutionHighlights: [
      "Modular course overview cards showing duration, format, and curriculum tracks.",
      "Dedicated admissions and FAQ flow to reduce repetitive WhatsApp support questions.",
      "High-contrast typography and calm purple/soft-white visual balance for long reading comfort.",
    ],
  },
  {
    slug: "local-service-architecture-concept",
    title: "Service Business Web Blueprint",
    category: "Concept Demo",
    isDemo: true,
    sector: "Local & B2B Services",
    summary:
      "A Concept Demo multi-page service architecture showing how clinics, consultants, or home-service providers can pair technical SEO with direct WhatsApp consultation requests.",
    image: siteImages.mobileOptimization.src,
    imageAlt: siteImages.mobileOptimization.alt,
    deliverables: [
      "Responsive Multi-Breakpoint Layout Demo",
      "Local Search Service Page Structure",
      "Direct Enquiry & WhatsApp Routing",
    ],
    demoUrl: "/portfolio/local-service-architecture-concept",
    overview:
      "This Concept Demo demonstrates our repeatable blueprint for service-oriented businesses that rely on phone calls, WhatsApp enquiries, and local search trust.",
    goals: [
      "Present service areas and scopes clearly in the first screen.",
      "Eliminate slow carousels in favor of scannable service scopes.",
    ],
    solutionHighlights: [
      "Clean above-the-fold positioning statement paired with direct action paths.",
      "Structured service breakdown designed for both desktop and budget Android devices.",
    ],
  },
  {
    slug: "search-content-hub-concept",
    title: "Editorial Search Hub Concept",
    category: "Concept Demo",
    isDemo: true,
    sector: "Startups & Knowledge Brands",
    summary:
      "A Concept Demo content and landing architecture demonstrating clean blog hierarchy, internal linking, and lead-capture integration.",
    image: siteImages.seoWorkspace.src,
    imageAlt: siteImages.seoWorkspace.alt,
    deliverables: [
      "On-Page SEO Heading Blueprint",
      "Article & Topic Cluster Templates",
      "Technical Metadata & Schema Setup",
    ],
    demoUrl: "/portfolio/search-content-hub-concept",
    overview:
      "Built as a Concept Demo for startups and B2B founders aiming to educate buyers through structured articles while keeping consultation paths visible.",
    goals: [
      "Keep long-form reading clean with comfortable 65–75ch line lengths.",
      "Connect educational posts naturally to relevant service consultations.",
    ],
    solutionHighlights: [
      "Logical H1–H3 semantic hierarchy and clean URL structure.",
      "Zero visual clutter so visitors stay focused on the content.",
    ],
  },
];

export const pricingPackages: PricingPackage[] = [
  {
    id: "starter-website",
    name: "Starter Website",
    subtitle:
      "For solo founders, local shops, and early-stage businesses establishing credibility online.",
    idealFor: "Entrepreneurs, local businesses, and single-offer launches",
    pageLimit: "1–3 core pages (e.g. Home, Services/Offer, Contact)",
    revisions: "Up to 2 structured revision rounds",
    deliveryEstimate: "Estimated 7–12 business days after content readiness",
    included: [
      "Clean responsive 1–3 page website tailored to your brand",
      "Mobile and tablet layout optimization",
      "Essential on-page SEO (page titles, meta descriptions, heading hierarchy)",
      "Enquiry form frontend & direct WhatsApp consultation button",
      "Optimized images and descriptive alt text configuration",
    ],
    exclusions: [
      "Domain registration and web hosting fees",
      "Custom backend database, user login, or online payment gateway",
      "Long-form copywriting beyond provided business overview",
      "Paid advertising budget or ongoing monthly retainers",
    ],
    note: "Quote-based pricing — share your exact page count and content readiness for an itemized estimate.",
  },
  {
    id: "business-website",
    name: "Business Website",
    subtitle:
      "A complete multi-page digital presence built to showcase services, build trust, and capture enquiries.",
    idealFor:
      "Growing businesses, academies, clinics, and international service companies",
    pageLimit: "5–8 custom pages (e.g. Home, About, Services, Portfolio, Blog, Contact)",
    revisions: "Up to 3 structured revision rounds",
    deliveryEstimate: "Estimated 2–4 weeks after content readiness",
    highlighted: true,
    included: [
      "Full 5–8 page architecture with consistent navigation and footer",
      "Custom visual system aligned with your brand colors and typography",
      "On-page SEO + Technical SEO foundations (sitemap, robots, schema, OpenGraph)",
      "Website speed tuning and cross-device QA verification",
      "Editable content structure for straightforward future updates",
    ],
    exclusions: [
      "Domain registration, hosting, and paid third-party SaaS subscriptions",
      "Multi-vendor e-commerce checkout or complex custom web applications",
      "Backend CRM integration unless scoped separately in your quote",
      "Ongoing monthly social media management",
    ],
    note: "Our recommended quote-based foundation for businesses serving local and international clients.",
  },
  {
    id: "seo-setup",
    name: "SEO Setup",
    subtitle:
      "Structured on-page and technical search foundations for new or existing business websites.",
    idealFor: "Businesses with an existing website seeking clean search structure",
    pageLimit: "Up to 10 existing pages audited & optimized",
    revisions: "1 post-implementation review & refinement round",
    deliveryEstimate: "Estimated 5–10 business days",
    included: [
      "Audit and refinement of titles, meta descriptions, URLs, and headings",
      "Technical SEO check (indexing readiness, sitemap, canonical tags, 404 hygiene)",
      "Schema.org structured data recommendations and implementation",
      "Image alt text and mobile speed bottleneck review",
      "Internal linking plan connecting blog and service pages",
    ],
    exclusions: [
      "Guaranteed #1 search ranking promises or manipulative link schemes",
      "Ongoing monthly blog writing or off-page PR campaigns",
      "Full website visual redesign (covered under website packages)",
      "Paid search / Google Ads campaign management",
    ],
    note: "Available as a standalone quote-based engagement or paired with any website build.",
  },
];

export const testimonialPlaceholders: TestimonialPlaceholder[] = [
  {
    id: "sample-1",
    placeholderLabel: "Sample Client Review Placeholder",
    sectorLabel: "Local Business Owner · Placeholder Entry",
    quote:
      "This space is reserved for a genuine client review once a verified project is completed and approved for publication.",
    projectType: "Business Website Design",
  },
  {
    id: "sample-2",
    placeholderLabel: "Sample Client Review Placeholder",
    sectorLabel: "Academy Director · Placeholder Entry",
    quote:
      "We never publish fabricated testimonials. Verified feedback from real academy and startup clients will replace these sample placeholders.",
    projectType: "Landing Page & SEO Setup",
  },
  {
    id: "sample-3",
    placeholderLabel: "Sample Client Review Placeholder",
    sectorLabel: "International Client · Placeholder Entry",
    quote:
      "Sample testimonial layout showing how client project type, context, and verified feedback appear cleanly alongside our work.",
    projectType: "Speed & Mobile Optimization",
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Who does Tasmiya Digital Hub work with?",
    answer:
      "We work with small businesses, startups, entrepreneurs, local businesses, academies, and international business owners who want a clean, reliable website and honest digital marketing support.",
  },
  {
    id: "faq-2",
    question: "Why do pricing packages show 'Request a Quote' instead of fixed prices?",
    answer:
      "Every business has different page counts, content readiness, and technical needs. Instead of guessing or displaying misleading flat rates, we discuss your scope first and share a clear, tailored quote before any work begins.",
  },
  {
    id: "faq-3",
    question: "Is EduPilot a real live client project?",
    answer:
      "No. EduPilot is clearly labelled as a Concept Demo academy website project built by Tasmiya Digital Hub to demonstrate our design, structure, and mobile UX approach for educational institutes.",
  },
  {
    id: "faq-4",
    question: "Do you work with clients outside Pakistan?",
    answer:
      "Yes. While we serve businesses across Pakistan, our remote workflow is structured to collaborate smoothly with international business owners across different time zones.",
  },
  {
    id: "faq-5",
    question: "What is included in your SEO setup?",
    answer:
      "We focus on real, verifiable fundamentals: unique page titles and meta descriptions, logical H1–H3 heading hierarchy, clean URLs, image alt text, XML sitemaps, mobile usability, and Schema.org structured data—never unrealistic ranking guarantees.",
  },
  {
    id: "faq-6",
    question: "Can the website content and contact details be edited easily later?",
    answer:
      "Yes. We organize business details, services, pricing packages, and blog articles in clean modular configuration files so updates are straightforward as your business grows.",
  },
];

export const blogArticles: BlogArticle[] = [
  {
    slug: "why-small-businesses-need-a-fast-website",
    seoTitle: "Why Small Businesses Need a Fast Website Before Running Ads",
    metaDescription:
      "Learn why mobile page speed, clear messaging, and accessible enquiry forms improve ad performance for small businesses before spending on paid campaigns.",
    title: "Why Small Businesses Need a Fast, Clear Website Before Running Ads",
    excerpt:
      "Sending paid social traffic to a slow or confusing website drains marketing budget. Here is how speed and structure protect every click.",
    category: "Web Strategy",
    publishedLabel: "Editorial Guide",
    readTime: "4 min read",
    image: siteImages.mobileOptimization.src,
    imageAlt: siteImages.mobileOptimization.alt,
    sections: [
      {
        heading: "First Impressions Happen in Seconds on Mobile",
        paragraphs: [
          "When a prospective customer taps an advertisement or searches your business name, they usually open your site on a smartphone. If text shifts around, buttons are hard to tap, or large unoptimized images delay loading, visitors leave before reading your offer.",
          "A fast, calm, well-structured website signals reliability immediately—especially for new customers who have never met your team in person.",
        ],
      },
      {
        heading: "What Makes a Website Convert Visitors Into Enquiries",
        paragraphs: [
          "Effective business websites avoid trying to say everything at once. Instead, they guide visitors through a logical sequence:",
        ],
        bullets: [
          "A clear headline stating who you help and what you deliver.",
          "Concise service summaries written in everyday language.",
          "Transparent next steps—such as an enquiry form or direct WhatsApp consultation.",
        ],
      },
      {
        heading: "Preparing Your Site Before Spending on Ads",
        paragraphs: [
          "Before launching paid campaigns on social platforms or search engines, test your website on an average mobile connection. Verify that headings are scannable, contact buttons work cleanly, and your landing page matches the exact promise of your ad.",
        ],
      },
    ],
    internalLinks: [
      {
        label: "Website Speed and Mobile Optimization Service",
        href: "/services#speed-mobile-optimization",
        context: "See how we tune mobile layouts and asset delivery.",
      },
      {
        label: "Landing Page Design Scope",
        href: "/services#landing-page-design",
        context: "Explore dedicated campaign landing pages.",
      },
      {
        label: "Starter Website Package",
        href: "/pricing",
        context: "Compare starter scopes and request a custom quote.",
      },
    ],
    takeaway:
      "Fix clarity, mobile speed, and enquiry flow first—every marketing rupee or dollar performs better when your website is ready to receive traffic.",
  },
  {
    slug: "on-page-seo-checklist-for-new-websites",
    seoTitle: "On-Page SEO Checklist for New Business Websites",
    metaDescription:
      "A practical 5-point on-page SEO checklist covering unique titles, meta descriptions, H1-H3 headings, alt text, and internal links for new websites.",
    title: "Practical On-Page SEO Foundations Every New Business Website Should Have",
    excerpt:
      "You do not need gimmicks to make your website understandable to search engines. Focus on these five foundational on-page habits.",
    category: "SEO Foundations",
    publishedLabel: "Editorial Guide",
    readTime: "5 min read",
    image: siteImages.seoWorkspace.src,
    imageAlt: siteImages.seoWorkspace.alt,
    sections: [
      {
        heading: "1. Unique Page Titles and Meta Descriptions",
        paragraphs: [
          "Every page on your website serves a distinct purpose—your Services page should not share the same title tag as your About page. Keep titles descriptive and concise, and write meta descriptions that explain clearly why someone should click.",
        ],
      },
      {
        heading: "2. Logical Semantic Heading Hierarchy",
        paragraphs: [
          "Use one clear H1 heading per page describing the main topic, followed by H2 headings for major sections and H3 headings for sub-points. Avoid choosing heading levels purely for visual font size.",
        ],
      },
      {
        heading: "3. Clean URLs, Alt Text, and Internal Links",
        paragraphs: [
          "Search engines and screen readers both rely on clean technical structure. Use readable URLs like /services or /portfolio/edupilot, write accurate alt descriptions for images, and link naturally between related service pages and helpful articles.",
        ],
        bullets: [
          "Keep URL slugs lowercase, short, and hyphenated.",
          "Describe what an image shows rather than stuffing keywords into alt text.",
          "Ensure your XML sitemap and robots configuration match your live pages.",
        ],
      },
    ],
    internalLinks: [
      {
        label: "On-page SEO Setup Service",
        href: "/services#on-page-seo-setup",
        context: "Review what is included in our on-page configuration.",
      },
      {
        label: "Technical SEO Foundations",
        href: "/services#technical-seo-foundations",
        context: "Learn how sitemaps, schema, and canonical hygiene fit in.",
      },
      {
        label: "SEO Setup Package Details",
        href: "/pricing",
        context: "View page limits, revisions, and exclusions.",
      },
    ],
    takeaway:
      "Strong on-page SEO is mostly clean structure, accurate writing, and respect for how both people and search crawlers read a page.",
  },
  {
    slug: "how-academies-can-structure-course-pages",
    seoTitle: "How Academies Can Structure Course Pages for Enquiries",
    metaDescription:
      "See how training academies can organize syllabi, schedules, and admission enquiry flows using lessons from our EduPilot Concept Demo.",
    title: "How Training Academies Can Structure Course Pages That Convert Enquiries",
    excerpt:
      "Lessons from our EduPilot Concept Demo on organizing syllabi, schedules, and admission enquiries for students and parents.",
    category: "Case Notes",
    publishedLabel: "Editorial Guide",
    readTime: "4 min read",
    image: siteImages.edupilotShowcase.src,
    imageAlt: siteImages.edupilotShowcase.alt,
    sections: [
      {
        heading: "Why Many Academy Websites Lose Prospective Students",
        paragraphs: [
          "Educational institutes often publish static flyer images or buried PDF brochures on social media. Prospective students are left asking basic questions: Who is the course for? How long does it run? Is it online or on-campus? How do I register?",
        ],
      },
      {
        heading: "Structuring an Academy Page Like EduPilot",
        paragraphs: [
          "When designing our EduPilot Concept Demo, we focused on answering student questions in the exact order they arise:",
        ],
        bullets: [
          "Clear track overview: Beginner, intermediate, or career-focused modules.",
          "Format & duration visibility: Weekly schedule and learning mode up front.",
          "Low-friction enquiry path: One-click consultation or admission enquiry form.",
        ],
      },
      {
        heading: "Building Trust With Clear Information",
        paragraphs: [
          "Parents and adult learners compare institutes carefully. A well-organized, mobile-friendly website shows that your academy values clarity and student support before classes even begin.",
        ],
      },
    ],
    internalLinks: [
      {
        label: "Explore the EduPilot Concept Demo",
        href: "/portfolio/edupilot",
        context: "Inspect the interactive course directory and case study.",
      },
      {
        label: "Professional Business Website Design",
        href: "/services#business-website-design",
        context: "See how multi-page academy websites are scoped.",
      },
      {
        label: "Request a Free Consultation",
        href: "/contact?service=business-website-design",
        context: "Discuss an institute or training website.",
      },
    ],
    takeaway:
      "Organize course information so students never have to hunt for schedules, outcomes, or how to contact your admissions desk.",
  },
  {
    slug: "mobile-first-web-design-pakistan-and-global",
    seoTitle: "Mobile-First Web Design for Pakistan & Global Businesses",
    metaDescription:
      "Practical mobile-first UX principles for companies serving clients across Pakistan and international markets with fast, accessible design.",
    title: "Mobile-First Web Design for Businesses Serving Pakistan and International Markets",
    excerpt:
      "How thoughtful typography, lightweight assets, and accessible navigation help local and global visitors trust your brand equally.",
    category: "Design & UX",
    publishedLabel: "Editorial Guide",
    readTime: "5 min read",
    image: siteImages.agencyStudio.src,
    imageAlt: siteImages.agencyStudio.alt,
    sections: [
      {
        heading: "Bridging Local Practicality and Global Polish",
        paragraphs: [
          "Businesses operating out of Pakistan while serving international clients face a specific design challenge: the website must feel effortless on everyday mobile networks locally while meeting the visual and accessibility expectations of overseas buyers.",
        ],
      },
      {
        heading: "Key Principles We Apply Across Every Build",
        paragraphs: [
          "At Tasmiya Digital Hub, we pair clean visual restraint with technical discipline:",
        ],
        bullets: [
          "High-contrast typography for comfortable reading indoors and outdoors.",
          "Generous button touch targets (44px+) so mobile navigation never feels cramped.",
          "Consistent messaging that works seamlessly across time zones and currencies.",
        ],
      },
    ],
    internalLinks: [
      {
        label: "About Tasmiya Digital Hub",
        href: "/about",
        context: "Learn how we collaborate with local and global founders.",
      },
      {
        label: "View All Concept Demo Showcases",
        href: "/portfolio",
        context: "Browse responsive blueprints built for service and education brands.",
      },
      {
        label: "Business Website Package",
        href: "/pricing",
        context: "Check deliverables, page limits, and delivery timelines.",
      },
    ],
    takeaway:
      "Clean, fast, accessible design travels well across borders—earning trust both at home and internationally.",
  },
];
