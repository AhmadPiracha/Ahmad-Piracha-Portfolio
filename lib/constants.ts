export const navLinks = [
  { id: "projects", title: "Projects" },
  { id: "about", title: "About" },
  { id: "build", title: "What I Build" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

export const stats = [
  { value: "4 yrs", label: "Professional Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "3+", label: "Companies Worked With" },
  { value: "Product-focused", label: "Frontend Engineering" },
];

export const services = [
  {
    title: "SaaS Dashboards",
    description:
      "Admin panels, analytics screens, billing flows, user management, and internal tools.",
  },
  {
    title: "Frontend MVPs",
    description:
      "Fast, polished web apps built with Next.js, React, TypeScript, Tailwind, and shadcn/ui.",
  },
  {
    title: "Developer Tools",
    description:
      "API tools, converters, visualizers, local-first utilities, and workflow helpers.",
  },
  {
    title: "Chrome Extensions",
    description:
      "Accessibility tools, productivity helpers, and browser-based utilities.",
  },
];

export const technologies: Record<string, { name: string }[]> = {
  "Primary Stack": [
    { name: "Next.js" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Tailwind CSS" },
    { name: "shadcn/ui" },
  ],
  "Core Frontend": [
    { name: "React" },
    { name: "Next.js" },
    { name: "TypeScript" },
    { name: "JavaScript" },
    { name: "Tailwind CSS" },
    { name: "shadcn/ui" },
    { name: "Angular" },
    { name: "Svelte" },
  ],
  Mobile: [
    { name: "React Native" },
  ],
  "Backend / APIs": [
    { name: "Node.js" },
    { name: "REST APIs" },
    { name: "Ruby on Rails" },
    { name: "Firebase" },
    { name: "Supabase" },
  ],
  "CMS / Cloud / DevOps": [
    { name: "Contentful CMS" },
    { name: "Azure" },
    { name: "Vercel" },
    { name: "Jenkins CI/CD" },
  ],
  Tools: [
    { name: "Git" },
    { name: "GitHub" },
    { name: "Figma" },
    { name: "VS Code" },
    { name: "OpenAI" },
  ],
};

export const experiences = [
  {
    title: "Software Engineer - Frontend",
    company_name: "Zones LLC",
    icon: "/images/company/Zones.jpg",
    date: "Nov 2025 - Present",
    points: [
      "Built and maintained scalable SaaS frontend modules using React and Angular with a focus on clean architecture and reusable UI patterns.",
      "Integrated frontend features with .NET APIs and Contentful CMS to support reliable data handling and dynamic content delivery.",
      "Supported Azure-based deployment workflows, performance improvements, and production frontend stability.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "OpusAI",
    icon: "/images/company/opusai.jpg",
    date: "Sep 2024 - Oct 2025",
    points: [
      "Developed production-ready interfaces using React.js, Next.js, and Svelte based on Figma designs and product requirements.",
      "Built REST API workflows for PDF and Excel generation, improving document-heavy product flows.",
      "Set up Jenkins-based CI/CD pipelines to streamline integration, testing, and release workflows.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Astechware",
    icon: "/images/company/astechware-logo.jpg",
    date: "Oct 2023 - Aug 2024",
    points: [
      "Built full-stack applications using Ruby on Rails and React.js, including responsive frontend flows and interactive product screens.",
      "Implemented secure Stripe payment flows for web applications.",
      "Created reusable frontend components and improved UI consistency across multiple screens.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Interns Pakistan",
    icon: "/images/company/internsPak.jpeg",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Built responsive React.js web interfaces and improved cross-browser compatibility.",
      "Collaborated on frontend implementation, code reviews, and UI refinements in a team environment.",
    ],
  },
];

export const education = [
  {
    title: "Computer Science",
    company_name: "FAST-NUCES",
    icon: "/images/company/nuces.png",
    date: "2019 - 2023",
    points: [
      "Bachelor of Science in Computer Science from FAST-National University of Computer and Emerging Sciences.",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  positioning: string;
  problem: string;
  keyFeature: string;
  stack: string[];
  featureBullets: string[];
  trustDetails: string[];
  categories: string[];
  caseStudySlug?: string;
  tags: { name: string }[];
  image?: string | null;
  images?: string[];
  source_code_link: string;
  live_link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "LeakShot",
    description:
      "LeakShot is a local-first screenshot privacy scanner that detects sensitive text, highlights risky areas, and lets users export a clean redacted image without uploading anything to a server.",
    positioning: "Local-first screenshot privacy scanner",
    problem: "Screenshots often expose emails, tokens, addresses, and private text before users share them.",
    keyFeature: "Sensitive text detection with redaction preview and clean image export.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Tesseract.js"],
    featureBullets: [
      "100% local processing",
      "Sensitive text detection",
      "Redaction preview",
      "Clean image export",
      "No account required",
    ],
    trustDetails: ["Privacy-first", "Local processing", "No account required"],
    categories: ["Featured", "SaaS", "Developer Tools", "Frontend"],
    caseStudySlug: "leakshot",
    tags: [
      { name: "nextjs" },
      { name: "typescript" },
      { name: "tailwind" },
      { name: "tesseract.js" },
    ],
    image: "/images/projects/LeakShot1.png",
    images: [
      "/images/projects/LeakShot1.png",
      "/images/projects/LeakShot2.png",
      "/images/projects/LeakShot3.png",
    ],
    source_code_link: "",
    live_link: "https://leakshott.vercel.app/",
    featured: true,
  },
  {
    name: "SayThis",
    description:
      "SayThis is a guided conversation helper that gives ready-to-use lines for recruiter outreach, follow-ups, dry chats, apologies, client messages, and everyday awkward moments.",
    positioning: "Conversation helper for copy-ready replies",
    problem: "People often overthink what to say in professional, social, student, and freelance conversations, especially when a reply needs to sound natural fast.",
    keyFeature: "Situation, tone, and goal-based suggestions with safe, confident, and friendly copy-ready options.",
    stack: ["Next.js", "TypeScript", "Android APK", "Local-first"],
    featureBullets: [
      "15 real conversation situations",
      "8 tone options",
      "10 conversation goals",
      "Copy-ready reply variants",
      "Practice mode",
    ],
    trustDetails: ["Android APK", "Private by design", "Offline-friendly MVP"],
    categories: ["Featured", "SaaS", "Frontend"],
    tags: [
      { name: "nextjs" },
      { name: "typescript" },
      { name: "android" },
      { name: "product" },
    ],
    image: "/images/projects/saythis.png",
    source_code_link: "",
    live_link: "https://saythisapp.vercel.app/",
    featured: true,
  },
  {
    name: "RoamApply",
    description:
      "RoamApply is a secure job search CRM for tracking global applications, recruiter outreach, follow-up dates, role notes, and search metrics in one private workspace.",
    positioning: "Job tracker and recruiter outreach workspace",
    problem: "International job searches quickly spread across saved links, spreadsheets, recruiter notes, and missed follow-up dates.",
    keyFeature: "Application pipeline, recruiter CRM, follow-up rhythm, search metrics, and user-owned exports.",
    stack: ["Next.js", "TypeScript", "Supabase", "Tailwind"],
    featureBullets: [
      "Application pipeline tracking",
      "Recruiter CRM",
      "Follow-up date management",
      "Search metrics dashboard",
      "User-owned exports",
    ],
    trustDetails: ["Secure workspace", "Supabase auth", "Production deployed"],
    categories: ["Featured", "SaaS", "Frontend", "Full Stack"],
    caseStudySlug: "roamapply",
    tags: [
      { name: "nextjs" },
      { name: "typescript" },
      { name: "supabase" },
      { name: "tailwind" },
    ],
    image: "/images/projects/RoamApply1.png",
    source_code_link: "",
    live_link: "https://roamapply.vercel.app/",
    featured: true,
  },
  {
    name: "Regretly",
    description:
      "Regretly is a digital wellness calculator that turns social media usage into a personal regret score, showing users the real cost of their screen time through missed books, skills, income, and life hours.",
    positioning: "Digital wellness calculator with viral share cards",
    problem: "Screen time is abstract, so users struggle to understand the opportunity cost of their habits.",
    keyFeature: "Personalized regret scoring with localized outputs and shareable result cards.",
    stack: ["Next.js", "TypeScript", "shadcn/ui"],
    featureBullets: [
      "Personalized regret score",
      "Localized currency support",
      "Shareable result cards",
      "Viral poster-style output",
    ],
    trustDetails: ["Responsive design", "Shareable output", "Built from scratch"],
    categories: ["Featured", "SaaS", "Frontend"],
    caseStudySlug: "regretly",
    tags: [{ name: "nextjs" }, { name: "typescript" }, { name: "shadcn" }],
    image: "/images/projects/regretly1.png",
    images: [
      "/images/projects/regretly1.png",
      "/images/projects/regretly2.png",
      "/images/projects/regretly3.png",
    ],
    source_code_link: "",
    live_link: "https://www.regretly.fun/",
    featured: true,
  },
  {
    name: "Flow API",
    description:
      "Flow API is a developer tool that converts API requests into interactive flow diagrams, making it easier to understand request structure, debug endpoints, and generate code across multiple languages.",
    positioning: "Visual API request converter and documentation helper",
    problem: "API requests can be difficult to inspect, explain, document, and convert across formats.",
    keyFeature: "Request parsing, interactive flow diagrams, and multi-language code generation.",
    stack: ["Next.js", "TypeScript", "shadcn/ui"],
    featureBullets: [
      "cURL / Fetch / HTTP / HAR parser",
      "Interactive flow diagrams",
      "Multi-language code generation",
      "Developer-friendly UI",
    ],
    trustDetails: ["Developer Tool", "API Parsing", "Code Generation"],
    categories: ["Featured", "Developer Tools", "Frontend"],
    caseStudySlug: "flow-api",
    tags: [{ name: "nextjs" }, { name: "typescript" }, { name: "shadcn" }],
    image: "/images/projects/flowapi.png",
    source_code_link: "",
    live_link: "https://flowapii.vercel.app/",
    featured: true,
  },
  {
    name: "ColorProof",
    description:
      "ColorProof is a Chrome extension for frontend developers that scans webpages for color accessibility issues, simulates color blindness, and suggests copy-paste fixes for Tailwind, shadcn/ui, and CSS.",
    positioning: "Color accessibility testing for frontend developers",
    problem: "Developers need fast accessibility feedback without leaving the browser or translating results into code manually.",
    keyFeature: "WCAG checks, color blindness simulation, and Tailwind/shadcn/CSS fix suggestions.",
    stack: ["React", "TypeScript", "Chrome Extension", "WCAG"],
    featureBullets: [
      "WCAG contrast checks",
      "Color blindness simulation",
      "Tailwind/shadcn fix suggestions",
      "Developer-focused browser workflow",
    ],
    trustDetails: ["Chrome Extension", "WCAG", "Tailwind/shadcn fixes"],
    categories: ["Featured", "Developer Tools", "Chrome Extensions", "Frontend"],
    caseStudySlug: "colorproof",
    tags: [
      { name: "react" },
      { name: "typescript" },
      { name: "chrome-extension" },
      { name: "wcag" },
    ],
    image: "/images/projects/colorproof.png",
    source_code_link: "",
    live_link: "https://colorproof.vercel.app/",
    featured: true,
  },
  {
    name: "Reunio",
    description:
      "A school reunion social platform enabling alumni to reconnect, browse live newsfeeds, and discover upcoming reunion events.",
    positioning: "Alumni reunion and event discovery platform",
    problem: "Alumni communities need a dedicated place to reconnect, follow updates, and discover events.",
    keyFeature: "Newsfeeds, alumni profiles, and upcoming reunion event discovery.",
    stack: ["Next.js", "Firebase", "shadcn/ui"],
    featureBullets: ["Live newsfeeds", "Event discovery", "Alumni profiles"],
    trustDetails: ["Production deployed", "Responsive design", "Full stack"],
    categories: ["Featured", "SaaS", "Full Stack"],
    tags: [{ name: "nextjs" }, { name: "firebase" }, { name: "shadcn" }],
    image: "/images/projects/reunio.png",
    source_code_link: "",
    live_link: "https://www.reunio.online/",
    featured: true,
  },
  {
    name: "Marvel DeadPool",
    description:
      "An animated Marvel-themed landing page with creative GSAP transitions and interactive visuals for fan engagement.",
    positioning: "Animated Marvel-themed landing experience",
    problem: "Fan pages need expressive visual interaction to make the brand moment memorable.",
    keyFeature: "GSAP-powered transitions and interactive visual treatment.",
    stack: ["React", "Tailwind", "GSAP"],
    featureBullets: ["GSAP transitions", "Responsive layout", "Interactive visuals"],
    trustDetails: ["UI Animation", "Production deployed", "Responsive design"],
    categories: ["UI Animation", "Frontend"],
    tags: [{ name: "react" }, { name: "tailwind" }, { name: "gsap" }],
    image: "/images/projects/deadpool.jpg",
    source_code_link: "https://github.com/AhmadPiracha/marvel-deadpool",
    live_link: "https://marvel-deadpool.vercel.app/",
  },
  {
    name: "Reply Cortex",
    description:
      "A modular React component library with design-system-driven components for brand coherence across web applications.",
    positioning: "Design-system component library",
    problem: "Teams need reusable UI components to keep products consistent across screens.",
    keyFeature: "Modular React components built for brand coherence.",
    stack: ["Next.js", "TypeScript", "Storybook"],
    featureBullets: ["Reusable components", "Storybook docs", "Design-system patterns"],
    trustDetails: ["Frontend", "Reusable UI", "Built from scratch"],
    categories: ["Frontend", "Developer Tools"],
    tags: [
      { name: "nextjs" },
      { name: "typescript" },
      { name: "storybook" },
    ],
    image: "/images/projects/replycortex.png",
    source_code_link: "https://github.com/AhmadPiracha/react-components",
    live_link: "https://reply-cortex.vercel.app/",
  },
  {
    name: "Linkspire",
    description:
      "A professional networking platform featuring job posting and profile connections with responsive cross-device UI.",
    positioning: "Professional networking UI",
    problem: "Networking platforms need clear job and profile flows that work across devices.",
    keyFeature: "Responsive job listings and profile connection screens.",
    stack: ["React", "JavaScript", "Tailwind"],
    featureBullets: ["Job posting UI", "Profile flows", "Responsive screens"],
    trustDetails: ["Responsive design", "Production deployed", "Frontend"],
    categories: ["Frontend", "SaaS"],
    tags: [
      { name: "reactjs" },
      { name: "javascript" },
      { name: "tailwind" },
    ],
    image: "/images/projects/linkspire.jpg",
    source_code_link: "https://github.com/AhmadPiracha/linkspire-app",
    live_link: "https://linkspire-app.vercel.app/",
  },
  {
    name: "Habitspark",
    description:
      "A habit tracker with streaks, daily reminders, and motivational progress insights.",
    positioning: "Habit tracker for daily momentum",
    problem: "Habit builders need simple feedback loops to keep streaks visible and motivating.",
    keyFeature: "Streak tracking, reminders, and progress insights.",
    stack: ["React", "JavaScript", "Tailwind"],
    featureBullets: ["Habit streaks", "Daily reminders", "Progress insights"],
    trustDetails: ["Responsive design", "Production deployed", "Frontend"],
    categories: ["Frontend", "SaaS"],
    tags: [
      { name: "reactjs" },
      { name: "javascript" },
      { name: "tailwind" },
    ],
    image: "/images/projects/habitspark.jpg",
    source_code_link: "https://github.com/AhmadPiracha/habitspark-app",
    live_link: "https://habitspark-app.vercel.app/",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio website built with React, Tailwind CSS, and Framer Motion.",
    positioning: "Personal portfolio and project archive",
    problem: "A portfolio needs to explain positioning, proof, and project depth quickly.",
    keyFeature: "Responsive portfolio sections with animated project presentation.",
    stack: ["React", "Tailwind", "Framer Motion"],
    featureBullets: ["Responsive sections", "Project filtering", "Animated UI"],
    trustDetails: ["Performance-focused", "Responsive design", "Built from scratch"],
    categories: ["Frontend"],
    tags: [
      { name: "react" },
      { name: "tailwind" },
      { name: "framer-motion" },
    ],
    image: "/images/projects/portfolio.png",
    source_code_link: "https://github.com/AhmadPiracha",
    live_link: "https://ahmadpiracha.vercel.app/",
  },
  {
    name: "News App",
    description:
      "A web platform for browsing curated news by topic using React and NewsAPI.",
    positioning: "Topic-based news browsing app",
    problem: "Readers need a simple way to browse curated news by category.",
    keyFeature: "Topic filters powered by NewsAPI.",
    stack: ["React", "Bootstrap", "NewsAPI"],
    featureBullets: ["Topic browsing", "NewsAPI integration", "Responsive UI"],
    trustDetails: ["API integration", "Responsive design", "Frontend"],
    categories: ["Frontend"],
    tags: [{ name: "react" }, { name: "bootstrap" }, { name: "newsapi" }],
    image: "/images/projects/newsApp.png",
    source_code_link: "https://github.com/AhmadPiracha/my-news-app",
    live_link: "https://my-news-app.vercel.app/",
  },
  {
    name: "Job Villa",
    description:
      "A frontend landing page showcasing job listings and UI development skills.",
    positioning: "Job listing landing page",
    problem: "Job boards need readable listing layouts and clear entry points.",
    keyFeature: "Responsive landing page for job discovery.",
    stack: ["HTML", "CSS", "JavaScript"],
    featureBullets: ["Listing layout", "Responsive sections", "Vanilla frontend"],
    trustDetails: ["Frontend", "Responsive design", "Built from scratch"],
    categories: ["Frontend"],
    tags: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
    image: "/images/projects/jobvilla.png",
    source_code_link: "https://github.com/AhmadPiracha/job-villa-task",
  },
  {
    name: "Covid Screening Tool",
    description:
      "A symptom screening tool that provides risk assessments based on user responses.",
    positioning: "Symptom screening utility",
    problem: "Users need guided symptom checks that turn answers into understandable risk feedback.",
    keyFeature: "Question-based risk assessment flow.",
    stack: ["JavaScript", "Bootstrap", "CSS"],
    featureBullets: ["Screening flow", "Risk feedback", "Responsive UI"],
    trustDetails: ["Frontend", "Responsive design", "Built from scratch"],
    categories: ["Frontend"],
    tags: [
      { name: "javascript" },
      { name: "bootstrap" },
      { name: "css" },
    ],
    image: "/images/projects/covid-screening-app.png",
    source_code_link:
      "https://github.com/AhmadPiracha/Covid-Screening-Mobile-App",
  },
  {
    name: "Text Analyzer",
    description:
      "A text utility tool for operations like case conversion, space removal, and word counting.",
    positioning: "Text utility for quick edits",
    problem: "Writers and developers need quick text cleanup without opening a heavy editor.",
    keyFeature: "Case conversion, space removal, and word counting.",
    stack: ["React", "Bootstrap"],
    featureBullets: ["Case conversion", "Word counting", "Text cleanup"],
    trustDetails: ["Frontend", "No backend required", "Responsive design"],
    categories: ["Developer Tools", "Frontend"],
    tags: [{ name: "react" }, { name: "bootstrap" }],
    image: "/images/projects/textApp.png",
    source_code_link: "https://github.com/AhmadPiracha/text-analyzer-app",
  },
];

export const certificates = [
  {
    name: "Introduction to Software Product Management",
    description:
      "Comprehensive course on software product management, covering requirements management, Scrum, agile methodologies, and product strategy. Achieved 96.87% grade.",
    tags: [{ name: "Product Management" }, { name: "Agile" }, { name: "University of Alberta" }],
    image: "/images/certificates/Introduction to Software Product Management.png",
    source_code_link:
      "https://coursera.org/share/fe9c502d5c0fd3cfe6c2117a6f84896c",
  },
  {
    name: "Meta - Advanced React",
    description:
      "Covers advanced React patterns including hooks, context, performance optimization, and testing.",
    tags: [{ name: "React" }, { name: "Meta" }, { name: "Coursera" }],
    image: "/images/certificates/advanced-react.png",
    source_code_link:
      "https://coursera.org/share/8a9dc12d5ef5f28530c5d756ff521925",
  },
  {
    name: "Meta - Version Control",
    description:
      "Covers Git workflows, branching strategies, GitHub collaboration, and Linux fundamentals.",
    tags: [{ name: "Git" }, { name: "GitHub" }, { name: "Coursera" }],
    image: "/images/certificates/version-control.png",
    source_code_link:
      "https://coursera.org/share/643caf4ebb4010ef0173e6e0a73382e2",
  },
  {
    name: "React JS - Frontend Web Development",
    description:
      "Comprehensive React JS course covering components, hooks, and state management.",
    tags: [{ name: "React JS" }, { name: "Udemy" }],
    image: "/images/certificates/react-js.png",
    source_code_link:
      "https://www.udemy.com/certificate/UC-2c2d6daf-672f-41fc-bd11-1c2f023a9e73/",
  },
  {
    name: "Responsive Web Development",
    description:
      "Covers HTML, CSS, Bootstrap, and responsive design principles for mobile-first applications.",
    tags: [{ name: "HTML & CSS" }, { name: "Udemy" }],
    image: "/images/certificates/web-development.png",
    source_code_link:
      "https://www.udemy.com/certificate/UC-e64c5ba3-4af6-4aed-9576-b5ae1034d241",
  },
];

export const categoryMeta: Record<string, { label: string }> = {
  "Primary Stack": { label: "Primary Stack" },
  "Core Frontend": { label: "Core Frontend" },
  Mobile: { label: "Mobile" },
  "Backend / APIs": { label: "Backend / APIs" },
  "CMS / Cloud / DevOps": { label: "CMS / Cloud / DevOps" },
  Tools: { label: "Tools & Platforms" },
};

export const currentlyBuilding = [
  {
    name: "LeakShot",
    description: "A local-first privacy scanner for screenshots.",
    slug: "leakshot",
  },
  {
    name: "Regretly",
    description: "A digital wellness calculator designed for viral sharing.",
    slug: "regretly",
  },
  {
    name: "ColorProof",
    description: "A Chrome extension for frontend accessibility testing.",
    slug: "colorproof",
  },
  {
    name: "Flow API",
    description: "A visual API request converter and documentation helper.",
    slug: "flow-api",
  },
];

export const projectCaseStudies = {
  leakshot: {
    title: "LeakShot",
    overview:
      "LeakShot is a local-first screenshot privacy scanner that helps users find and redact sensitive text before sharing an image. It keeps the workflow private by processing screenshots in the browser without uploads or accounts.",
    problem:
      "Screenshots often contain emails, addresses, API keys, tokens, and private notes. Users usually notice these details too late or rely on manual markup tools that are slow and easy to misuse.",
    solution:
      "LeakShot scans an uploaded screenshot locally, highlights risky text regions, and gives users a redaction preview before exporting a clean version.",
    features: [
      "100% local screenshot processing",
      "Sensitive text detection",
      "Redaction preview before export",
      "Clean image export",
    ],
    technical:
      "The product uses a Next.js and TypeScript frontend with OCR-driven text detection and client-side image handling. The local-first structure avoids a backend for the core privacy workflow and keeps the app fast to launch.",
    ux:
      "The interface is designed around a short scan, review, export flow so users can understand risk quickly and leave with a clean image in a few steps.",
    challenges:
      "The hardest part is balancing detection quality with speed while keeping the workflow understandable for non-technical users.",
    result:
      "Users can inspect screenshots, catch sensitive details, redact risky areas, and export a safer image without sending private content to a server.",
    screenshots: [
      "/images/projects/LeakShot1.png",
      "/images/projects/LeakShot2.png",
      "/images/projects/LeakShot3.png",
    ],
    links: {
      live: "https://leakshott.vercel.app/",
      github: "",
    },
  },
  colorproof: {
    title: "ColorProof",
    overview:
      "ColorProof is a Chrome extension for frontend developers that scans webpages for color accessibility issues, simulates color blindness, and suggests copy-paste fixes for Tailwind, shadcn/ui, and CSS.",
    problem:
      "Accessibility checks are often separated from day-to-day frontend work, making it easy to miss contrast problems until late QA or after release.",
    solution:
      "ColorProof brings scanning, simulation, and practical fix suggestions into the browser so developers can identify and resolve issues while reviewing the actual page.",
    features: [
      "WCAG contrast checks",
      "Color blindness simulation",
      "Tailwind/shadcn/ui fix suggestions",
      "Developer-focused browser workflow",
    ],
    technical:
      "The extension combines a React and TypeScript UI with page scanning logic tailored to frontend workflows. The fix suggestions are shaped for common styling systems instead of generic color advice.",
    ux:
      "The UI prioritizes scan results, visual previews, and quick code fixes so developers can move from issue to action without context switching.",
    challenges:
      "The main challenge is translating accessibility findings into fixes that feel useful for real design systems and not just theoretical contrast numbers.",
    result:
      "Developers can test a live webpage, understand how color choices affect users, and apply practical Tailwind, shadcn/ui, or CSS fixes faster.",
    screenshots: [
      "/images/projects/colorproof.png",
      "/images/projects/colorproof.png",
      "/images/projects/colorproof.png",
    ],
    links: {
      live: "https://colorproof.vercel.app/",
      github: "",
    },
  },
  roamapply: {
    title: "RoamApply",
    overview:
      "RoamApply is a secure job search CRM for global applications and recruiter follow-ups. It gives job seekers a private workspace for tracking saved roles, applications, outreach, notes, follow-up dates, and search metrics.",
    problem:
      "A serious international job search quickly becomes scattered across browser bookmarks, spreadsheets, recruiter DMs, compensation notes, and missed follow-up reminders.",
    solution:
      "RoamApply turns the job search into a focused pipeline with application stages, recruiter records, next actions, analytics, and user-owned exports in one authenticated workspace.",
    features: [
      "Application pipeline for saved, applied, interview, rejected, and offer stages",
      "Recruiter CRM with contact links, notes, and follow-up dates",
      "Search metrics for application volume, response rate, interviews, and status distribution",
      "Global role context for locations, remote roles, relocation notes, and compensation ranges",
      "User-owned exports for keeping a private backup",
    ],
    technical:
      "The product uses a Next.js and TypeScript frontend with Supabase authentication and protected user workspace data. The interface is structured around dashboard views for jobs, recruiters, outreach, interviews, analytics, and resources.",
    ux:
      "The experience is intentionally manual and disciplined: add a role, move it through the pipeline, record recruiter context, and keep the next follow-up visible. The product avoids scraping, auto-apply flows, and mass messaging so the workflow stays trustworthy.",
    challenges:
      "The main challenge is keeping a dense job-search CRM clear enough for daily use while still capturing the details that matter across international roles, recruiters, compensation, and follow-up timing.",
    result:
      "Users can turn saved jobs into a working system, keep every next action visible, and manage a global application pipeline without falling back to a messy spreadsheet.",
    screenshots: [
      "/images/projects/RoamApply1.png",
      "/images/projects/RoamApply1.png",
      "/images/projects/RoamApply1.png",
    ],
    links: {
      live: "https://roamapply.vercel.app/",
      github: "",
    },
  },
  regretly: {
    title: "Regretly",
    overview:
      "Regretly is a digital wellness calculator that turns social media usage into a personal regret score and shows the opportunity cost of screen time through books, skills, income, and life hours.",
    problem:
      "Screen time numbers are easy to ignore because they rarely connect to concrete outcomes or personal opportunity cost.",
    solution:
      "Regretly converts usage into a score and visual output that makes the tradeoff tangible, personal, and shareable.",
    features: [
      "Personalized regret score",
      "Localized currency support",
      "Shareable result cards",
      "Viral poster-style output",
    ],
    technical:
      "The app uses Next.js, TypeScript, and shadcn/ui to create a polished calculator flow with deterministic outputs and share-friendly result states.",
    ux:
      "The flow asks for a small set of inputs, then turns the result into an opinionated visual card designed for quick understanding and sharing.",
    challenges:
      "The challenge was making the result feel sharp and memorable while keeping the calculation approachable and not overwhelming.",
    result:
      "Users get a concrete view of what their screen time could represent and can share the result as a visual card.",
    screenshots: [
      "/images/projects/regretly1.png",
      "/images/projects/regretly2.png",
      "/images/projects/regretly3.png",
    ],
    links: {
      live: "https://www.regretly.fun/",
      github: "",
    },
  },
  "flow-api": {
    title: "Flow API",
    overview:
      "Flow API is a developer tool that converts API requests into interactive flow diagrams, helping developers understand request structure, debug endpoints, and generate code across multiple languages.",
    problem:
      "API requests move between docs, terminal snippets, browser tools, and code. That makes them hard to explain, compare, and convert cleanly.",
    solution:
      "Flow API parses common request formats and turns them into a visual flow plus generated code outputs for implementation.",
    features: [
      "cURL / Fetch / HTTP / HAR parser",
      "Interactive flow diagrams",
      "Multi-language code generation",
      "Developer-friendly UI",
    ],
    technical:
      "The frontend is built with Next.js and TypeScript, with parsing logic organized around request input formats and reusable output views for diagrams and generated code.",
    ux:
      "The interface keeps the input, visual structure, and generated output close together so developers can quickly understand what changed.",
    challenges:
      "The main challenge is normalizing multiple input formats while preserving enough request detail to generate useful visual and code outputs.",
    result:
      "Developers can paste an API request, understand it visually, and move faster from request inspection to implementation.",
    screenshots: [
      "/images/projects/flowapi.png",
      "/images/projects/flowapi.png",
      "/images/projects/flowapi.png",
    ],
    links: {
      live: "https://flowapii.vercel.app/",
      github: "",
    },
  },
} as const;
