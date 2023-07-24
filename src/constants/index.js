import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  webDesign,
  MaintenanceIcon,
  debugging,
  web,
  // webIcon,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  nuces,
  internsPak,
  newsApp,
  covidscreeningapp,
  textApp,
  portfolio,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
    description:
      " From front-end to back-end development, I bring your website ideas to life using the latest web technologies. I strive to deliver efficient, scalable, and secure solutions tailored to your specific requirements.",
  },
  {
    title: "Web Design",
    icon: webDesign,
    description:
      "I craft modern, user-friendly websites that seamlessly blend functionality and stunning visuals, ensuring an engaging online experience for your visitors while reflecting the unique identity of your brand.",
  },
  {
    title: "Maintenance",
    icon: MaintenanceIcon,
    description:
      "I offer reliable website maintenance services to ensure your online presence remains up-to-date, secure, and optimized for optimal performance. Regular updates, bug fixes, and content management are seamlessly handled to keep your website running smoothly.",
  },
  {
    title: "Bug Fixing",
    icon: debugging,
    description:
      "As a meticulous problem solver, I possess a deep understanding of various programming languages and frameworks, allowing me to efficiently identify and resolve software bugs, ensuring your applications run flawlessly and provide an exceptional user experience.",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
    level: 90,
  },
  {
    name: "CSS 3",
    icon: css,
    level: 70,
  },
  {
    name: "JavaScript",
    icon: javascript,
    level: 70,
  },
  {
    name: "TypeScript",
    icon: typescript,
    level: 30,
  },
  {
    name: "React JS",
    icon: reactjs,
    level: 70,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
    level: 50,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    level: 60,
  },
  {
    name: "Node JS",
    icon: nodejs,
    level: 50,
  },
  {
    name: "MongoDB",
    icon: mongodb,
    level: 50,
  },
  {
    name: "git",
    icon: git,
    level: 60,
  },
  {
    name: "figma",
    icon: figma,
    level: 50,
  },
];

const experiences = [
  {
    title: "Frontend Developer Intern",
    company_name: "Interns Pakistan ",
    icon: internsPak,
    iconBg: "#E6DEDD",
    date: "Aug 2022- Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const education = [
  {
    title: "Computer Science",
    company_name:
      "National University of Computer and Emerging Sciences (FAST-NU)",
    icon: nuces,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
      "With a Bachelor of Science in Computer Science from the esteemed FAST-NUCES, I bring a strong foundation and innovation to deliver cutting-edge solutions for your next project.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "My Portfolio",
    description:
      "A web-based platform that allows users to view my portfolio made using React and Tailwind CSS",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "motion-framer",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/AhmadPiracha",
  },
  {
    name: "News App",
    description:
      "Web-based platform that allows users to watch news of their interest made using React and NewsAPI",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "newsapi",
        color: "green-text-gradient",
      },
    ],
    image: newsApp,
    source_code_link: "https://github.com/AhmadPiracha/my-news-app",
  },
  {
    name: "Covid Screening Tool",
    description:
      "A web-based platform that allows users to screen themselves for COVID-19 symptoms and provides them with a risk assessment based on their responses.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: covidscreeningapp,
    source_code_link:
      "https://github.com/AhmadPiracha/Covid-Screening-Mobile-App",
  },
  {
    name: "Text Analyzer tool",
    description:
      "A web-based platform that allows users to perform various text operations such as converting text to uppercase, removing extra spaces, etc.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: textApp,
    source_code_link: "https://github.com/AhmadPiracha/text-analyzer-app",
  },
];

const social = [
  {
    name: "Twitter",
    icon: FaTwitter,
    link: "https://twitter.com/ahmadpiracha3",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    link: "https://www.instagram.com/ahmadpiracha/",
  },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/ahmad-piracha-1b1b3a1b2/",
  },
  {
    name: "Github",
    icon: FaGithub,
    link: "https://www.github.com/AhmadPiracha",
  },
];

export {
  services,
  technologies,
  experiences,
  education,
  testimonials,
  projects,
  social,
};
