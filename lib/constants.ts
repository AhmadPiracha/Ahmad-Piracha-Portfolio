export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const stats = [
  { value: "3+", label: "Years Experience" },
  { value: "20+", label: "Projects Shipped" },
  { value: "3+", label: "Companies" },
];

export const services = [
  {
    title: "Software Development",
    description:
      "Building scalable, performant web applications with modern frameworks like React, Next.js, and Angular.",
  },
  {
    title: "Web Design",
    description:
      "Crafting clean, user-friendly interfaces with a focus on aesthetics, accessibility, and brand identity.",
  },
  {
    title: "Maintenance",
    description:
      "Keeping websites secure, fast, and up-to-date with regular updates, performance tuning, and bug fixes.",
  },
  {
    title: "Bug Fixing",
    description:
      "Diagnosing and resolving software issues efficiently to ensure smooth, reliable user experiences.",
  },
];

export const technologies: Record<string, { name: string }[]> = {
  Languages: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "Python" },
    { name: "C++" },
    { name: "SQL" },
  ],
  Frameworks: [
    { name: "React JS" },
    { name: "Next JS" },
    { name: "Node JS" },
    { name: "React Native" },
    { name: "Angular" },
    { name: "Svelte" },
    { name: "Tailwind CSS" },
    { name: "ShadCN" },
    { name: "Firebase" },
    { name: "Supabase" },
  ],
  Tools: [
    { name: "VS Code" },
    { name: "Git & GitHub" },
    { name: "Vercel" },
    { name: "Azure" },
    { name: "Figma" },
    { name: "Jenkins CI/CD" },
    { name: "Contentful CMS" },
    { name: "OpenAI" },
  ],
};

export const experiences = [
  {
    title: "Senior Software Engineer",
    company_name: "Zones LLC",
    icon: "/images/company/Zones.jpg",
    date: "Nov 2025 - Present",
    points: [
      "Building and maintaining scalable SaaS frontend applications using React and Angular with clean architecture.",
      "Integrating frontend features with .NET APIs and Contentful CMS for reliable data handling and content delivery.",
      "Supporting cloud-based deployments on Azure, contributing to performance optimization and deployment automation.",
    ],
  },
  {
    title: "Software Engineer",
    company_name: "OpusAI",
    icon: "/images/company/opusai.jpg",
    date: "Sep 2024 - Oct 2025",
    points: [
      "Developed and optimized user interfaces using React.js, Next.js, and Svelte with enhanced API functionality.",
      "Created REST APIs for PDF/Excel generation and built dynamic pages from Figma designs.",
      "Set up automated CI/CD pipelines with Jenkins, accelerating code integration and software releases.",
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Astechware",
    icon: "/images/company/astechware-logo.jpg",
    date: "Jun 2022 - Aug 2024",
    points: [
      "Developed 2 full-stack applications using Ruby on Rails and React JS serving daily users.",
      "Built modern web applications with interactive and responsive front-end features.",
      "Integrated Stripe for secure payment processing within web applications.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company_name: "Interns Pakistan",
    icon: "/images/company/internsPak.jpeg",
    date: "Aug 2022 - Sep 2022",
    points: [
      "Developed and maintained web applications using React.js and related technologies.",
      "Implemented responsive design and ensured cross-browser compatibility.",
      "Participated in code reviews and collaborated with cross-functional teams.",
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
  tags: { name: string }[];
  image: string | null;
  source_code_link: string;
  live_link?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: "LeakShot",
    description:
      "A privacy scanner for screenshots that detects sensitive text locally, redacts risky details, and exports a clean image. 100% local processing, no uploads, no account required.",
    tags: [
      { name: "nextjs" },
      { name: "typescript" },
      { name: "tailwind" },
      { name: "tesseract.js" },
    ],
    image: "/images/projects/leakshot.png",
    source_code_link: "",
    live_link: "https://leakshott.vercel.app/",
    featured: true,
  },
  {
    name: "ColorProof",
    description:
      "A Chrome extension that scans webpages for color accessibility issues, previews color blindness simulations, and provides copy-paste Tailwind/shadcn/CSS fixes.",
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
    name: "Regretly",
    description:
      "A digital wellness app that calculates a personalized Social Media Regret Score, converting screen time into missed opportunities like books unread and skills unlearned.",
    tags: [{ name: "nextjs" }, { name: "typescript" }, { name: "shadcn" }],
    image: "/images/projects/regretly.png",
    source_code_link: "",
    live_link: "https://www.regretly.fun/",
    featured: true,
  },
  {
    name: "Flow API",
    description:
      "A modern API visualization and conversion tool that transforms cURL, Fetch, HTTP, and HAR inputs into interactive flow diagrams with code generation across 7 languages.",
    tags: [{ name: "nextjs" }, { name: "typescript" }, { name: "shadcn" }],
    image: "/images/projects/flowapi.png",
    source_code_link: "",
    live_link: "https://flowapii.vercel.app/",
    featured: true,
  },
  {
    name: "Reunio",
    description:
      "A school reunion social platform enabling alumni to reconnect, browse live newsfeeds, and discover upcoming reunion events.",
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
    tags: [{ name: "react" }, { name: "tailwind" }, { name: "gsap" }],
    image: "/images/projects/deadpool.jpg",
    source_code_link: "https://github.com/AhmadPiracha/marvel-deadpool",
    live_link: "https://marvel-deadpool.vercel.app/",
  },
  {
    name: "Reply Cortex",
    description:
      "A modular React component library with design-system-driven components for brand coherence across web applications.",
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
    tags: [{ name: "react" }, { name: "bootstrap" }, { name: "newsapi" }],
    image: "/images/projects/newsApp.png",
    source_code_link: "https://github.com/AhmadPiracha/my-news-app",
    live_link: "https://my-news-app.vercel.app/",
  },
  {
    name: "Job Villa",
    description:
      "A frontend landing page showcasing job listings and UI development skills.",
    tags: [{ name: "html" }, { name: "css" }, { name: "javascript" }],
    image: "/images/projects/jobvilla.png",
    source_code_link: "https://github.com/AhmadPiracha/job-villa-task",
  },
  {
    name: "Covid Screening Tool",
    description:
      "A symptom screening tool that provides risk assessments based on user responses.",
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
    tags: [{ name: "react" }, { name: "bootstrap" }],
    image: "/images/projects/textApp.png",
    source_code_link: "https://github.com/AhmadPiracha/text-analyzer-app",
  },
];

export const certificates = [
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
  Languages: { label: "Languages" },
  Frameworks: { label: "Frameworks & Libraries" },
  Tools: { label: "Tools & Platforms" },
};
