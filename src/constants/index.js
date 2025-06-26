import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import {
    webDesign,
    MaintenanceIcon,
    debugging,
    web,
    nuces,
    internsPak,
    astechware,
    // sportix,
    newsApp,
    covidscreeningapp,
    textApp,
    jobVilla,
    portfolio,
    advancedReact,
    reactJS,
    webdev,
    versionControl,
    // upwork,
    opusai,
    replyCortex,
    deadpool,
    linkspire,
    habitspark,
} from "../assets";

export const navLinks = [{
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

const services = [{
        title: "Web Development",
        icon: web,
        description: " From front-end to back-end development, I bring your website ideas to life using the latest web technologies. I strive to deliver efficient, scalable, and secure solutions tailored to your specific requirements.",
    },
    {
        title: "Web Design",
        icon: webDesign,
        description: "I design modern, user-friendly websites with seamless functionality and stunning visuals that leave a lasting impression. Captivate your audience with a focus on aesthetics and usability to reflect your brand's unique identity.",
    },
    {
        title: "Maintenance",
        icon: MaintenanceIcon,
        description: "I provide reliable website maintenance services for an up-to-date, secure, and optimized online presence. Seamlessly handle regular updates, bug fixes, and content management to ensure smooth website performance. Trust in my expertise to keep your site running flawlessly.",
    },
    {
        title: "Bug Fixing",
        icon: debugging,
        description: "As a highly skilled problem solver, with deep knowledge of programming languages and frameworks. Swiftly resolves software bugs for flawless applications and top-notch user experience. Meticulous, efficient, and highly skilled. Ensures exceptional results every time.",
    },
];

const technologies = {
    Programming_Languages: [
        { name: "JavaScript" },
        { name: "Python" },
        { name: "C++" },
        { name: "SQL" },
    ],
    Frameworks: [
        { name: "React JS" },
        { name: "Next JS" },
        { name: "Node JS" },
        { name: "React Native" },
        { name: "Tailwind CSS" },
        { name: "ShadCN" },
        { name: "Firebase" },
    ],
    Tools: [{ name: "VS Code" }, { name: "Git" }, { name: "OpenAI" },]
};

const experiences = [{
        title: "Software Engineer",
        company_name: "OpusAI",
        icon: opusai,
        iconBg: "#E6DEDD",
        date: "Sep 2024 - Present",
        points: [
            "At OpusAI, I contributed to a project by developing and optimizing enhanced user interfaces using React.js, Svelte.js and API functionality.",
            "I created REST APIs for downloading PDFs containing applicant data and Excel files listing applicants and other functionalities.",
            "Developed Figma-to-code designs to built dynamic pages, set up automated CI/CD pipelines with Jenkins to reduce code integration time and accelerate software releases.",
            "Collaborating closely with a talented team of developers and designers to feature enhancements, optimizing existing applications, and leading debugging efforts to ensure seamless user experiences.",

        ],
    },
    // {
    //     title: "Software Engineer",
    //     company_name: "Upwork",
    //     icon: upwork,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2025 - Present",
    //     points: [
    //         "A passionate Full Stack Developer with over 2 years of hands-on experience in building dynamic web and mobile applications.",
    //         "My diverse skill set, and extensive project experience make me the ideal candidate to bring your vision to life."
    //     ],
    // },
    {
        title: "Associate Software Engineer",
        company_name: "Astechware",
        icon: astechware,
        iconBg: "#E6DEDD",
        date: "Oct 2023 - Sep 2024",
        points: [
            "Collaborated on web applications using Ruby on Rails, designing and implementing dynamic features to meet client specifications.",
            "I have developed modern web applications using JavaScript, enhancing user experience with interactive and responsive front‑end features.",
            "Integrated Stripe for secure and efficient payment processing within web applications.",
        ],
    },
    // {
    //     title: "SportiX (Final Year Project)",
    //     company_name: "FAST-NUCES",
    //     icon: sportix,
    //     iconBg: "#E6DEDD",
    //     date: "Feb 2023 - Dec 2023",
    //     points: [
    //         "SportiX is a web and mobile app, to streamline sports department operations at FAST NUCES.",
    //         "This enables administrators to streamline sports activity and allows students to conveniently book their desired sports items.",
    //         "Developed using React Native, Node.js, Express.js, SQL, Firebase, MongoDB, and Bootstrap.",
    //     ],
    // },
    {
        title: "Frontend Developer Intern",
        company_name: "Interns Pakistan ",
        icon: internsPak,
        iconBg: "#E6DEDD",
        date: "Aug 2022 - Sep 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

const education = [{
    title: "Computer Science",
    company_name: "National University of Computer and Emerging Sciences (FAST-NU)",
    icon: nuces,
    iconBg: "#E6DEDD",
    date: "2019 - 2023",
    points: [
        "With a Bachelor of Science in Computer Science from the esteemed FAST-NUCES, I bring a strong foundation and innovation to deliver cutting-edge solutions for your next project.",
    ],
}, ];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Marvel DeadPool",
        description: "An animated deadpool landing page with creative transitions for marvel fans using React and GSAP.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "gsap",
                color: "green-text-gradient",
            },
        ],
        image: deadpool,
        source_code_link: "https://marvel-deadpool.vercel.app/",
    },
    {
        name: "Reply Cortex",
        description: "Cortex Reply’s React Library: Modular, design-system-driven components to accelerate development and ensure brand coherence across all web applications.",
        tags: [{
                name: "nextjs",
                color: "blue-text-gradient",
            },
            {
                name: "typescript",
                color: "green-text-gradient",
            },
            {
                name: "shadcn",
                color: "pink-text-gradient",
            },
        ],
        image: replyCortex,
        source_code_link: "https://github.com/AhmadPiracha/react-components",
    },
    {
        name: "Linkspire",
        description: "A profile-focused app for professional networking and job posting, designed to help users connect and find job opportunities.",
        tags: [{
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: linkspire,
        source_code_link: "https://linkspire-app.vercel.app/",
    },
    {
        name: "Habitspark",
        description: "A habit tracker with streaks and daily reminders to help users build and maintain good habits.",
        tags: [{
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "tailwind css",
                color: "pink-text-gradient",
            },
        ],
        image: habitspark,
        source_code_link: "https://habitspark-app.vercel.app/add-habit",
    },
    {
        name: "Ahmad Piracha Portfolio",
        description: "A web-based platform that allows users to view my portfolio made using React and Tailwind CSS",
        tags: [{
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
        description: "Web-based platform that allows users to watch news of their interest made using React and NewsAPI",
        tags: [{
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
        name: "Job Villa",
        description: "A web-based landing page that showcases my frontend development skills.",
        tags: [{
                name: "html",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
            {
                name: "javascript",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "blue-text-gradient",
            },
        ],
        image: jobVilla,
        source_code_link: "https://github.com/AhmadPiracha/job-villa-task",
    },
    {
        name: "Covid Screening Tool",
        description: "A web-based platform that allows users to screen themselves for COVID-19 symptoms and provides them with a risk assessment based on their responses.",
        tags: [{
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
        source_code_link: "https://github.com/AhmadPiracha/Covid-Screening-Mobile-App",
    },
    {
        name: "Text Analyzer tool",
        description: "A web-based platform that allows users to perform various text operations such as converting text to uppercase, removing extra spaces, etc.",
        tags: [{
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

const certificates = [{
        name: "Meta - Advanced React",
        description: "A web-based platform that allows users to view my portfolio made using React and Tailwind CSS",
        tags: [{
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Front-End Web Development",
                color: "pink-text-gradient",
            },
            {
                name: "meta",
                color: "green-text-gradient",
            },
            {
                name: "coursera",
                color: "blue-text-gradient",
            },
        ],
        image: advancedReact,
        source_code_link: "https://coursera.org/share/8a9dc12d5ef5f28530c5d756ff521925",
    },
    {
        name: "Meta - Version Control",
        description: "Web-based platform that allows users to watch news of their interest made using React and NewsAPI",
        tags: [{
                name: "Version Control",
                color: "blue-text-gradient",
            },
            {
                name: "Github",
                color: "pink-text-gradient",
            },
            {
                name: "Web Development",
                color: "green-text-gradient",
            },
            {
                name: "Linux",
                color: "pink-text-gradient",
            },
        ],
        image: versionControl,
        source_code_link: "https://coursera.org/share/643caf4ebb4010ef0173e6e0a73382e2",
    },
    {
        name: "React JS - Frontend Web Development",
        description: "A web-based platform that allows users to screen themselves for COVID-19 symptoms and provides them with a risk assessment based on their responses.",
        tags: [{
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "jquery",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "pink-text-gradient",
            },
        ],
        image: reactJS,
        source_code_link: "https://www.udemy.com/certificate/UC-2c2d6daf-672f-41fc-bd11-1c2f023a9e73/",
    },
    {
        name: "Responsive Web Development",
        description: "A web-based platform that allows users to perform various text operations such as converting text to uppercase, removing extra spaces, etc.",
        tags: [{
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
        image: webdev,
        source_code_link: "https://www.udemy.com/certificate/UC-e64c5ba3-4af6-4aed-9576-b5ae1034d241",
    },
];

const social = [{
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
    certificates,
    projects,
    social,
};
