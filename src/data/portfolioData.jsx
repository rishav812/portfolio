import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaReact, FaNodeJs, FaDatabase, FaCode, FaHtml5, FaCss3Alt, FaWordpress, FaFigma } from 'react-icons/fa'; // Example icons
import { SiExpress, SiMongodb, SiFirebase, SiTailwindcss, SiJavascript, SiTypescript, SiCplusplus, SiPython } from 'react-icons/si'; // More specific tech icons

export const personalInfo = {
  name: "Rishav Kumar",
  title: "Full Stack Developer",
  email: "kumarishav812@gmail.com",
  linkedin: "https://www.linkedin.com/in/iamrishav/",
  github: "https://github.com/rishav812",
  resumeLink: "/RishavKumar-FSD.pdf", // Make sure your resume is in public/
  bio: "Full Stack Developer with 2.4+ years of experience building scalable web applications using React, Node.js, TypeScript, and modern JavaScript frameworks." // For Hero section
};

export const education = [
  {
    institution: "Rajasthan Technical University",
    degree: "Bachelor of Technology",
    duration: "Aug 2019 – July 2023",
    score: "CGPA: 8.79/10",
  },
  {
    institution: "Holy Mission Sr. Sec. School",
    degree: "Class 12th CBSE",
    duration: "April 2018 - May 2019",
  },
];

export const projects = [
  {
    title: "MyAI – Multi-Tenant AI Chatbot Platform",
    tech: ["React.js", "TypeScript", "FastAPI", "PostgreSQL", "Milvus", "LangChain"],
    description:
      "Built a production-grade AI chatbot platform with multi-tenant architecture. Developed full authentication flows, RBAC, document-based AI training, real-time chat interface, and semantic search optimized with vector indexing. Improved chatbot response time significantly by optimizing retrieval pipelines.",
    date: "2024 – 2025",
    githubLink: null,
    liveLink: null,
    category: "AI / Full Stack",
    icon: <FaReact size={24} className='text-accent-1' />
  },

  {
    title: "InsuranceAI – Policy Support & Query Assistant",
    tech: ["React.js", "TypeScript", "FastAPI", "PostgreSQL"],
    description:
      "Developed a responsive chat interface for insurance query automation. Implemented secure login, user roles, session handling, and integrated FastAPI-based AI endpoints. Enabled policy search, chat history, and document-based assistance for insurance support operations.",
    date: "2024",
    githubLink: null,
    liveLink: null,
    category: "AI / Full Stack",
    icon: <FaReact size={24} className='text-accent-1' />
  }]

export const skills = {
  languages: [
    { name: "C/C++", icon: <SiCplusplus /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    // { name: "TypeScript", icon: <SiTypescript /> }, // Add if you use it
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "SQL", icon: <FaDatabase /> },
  ],
  frameworksAndLibraries: [
    { name: "React JS", icon: <FaReact /> },
    { name: "Node JS", icon: <FaNodeJs /> },
    { name: "Express JS", icon: <SiExpress /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> }, // You are using it!
    { name: "Wordpress", icon: <FaWordpress /> },
  ],
  toolsAndPlatforms: [
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Firebase", icon: <SiFirebase /> },
    { name: "Git & GitHub", icon: <FaGithub /> },
    { name: "VS Code", icon: <FaCode /> }, // Or a more specific icon
    { name: "Postman", icon: <FaCode /> }, // Placeholder icon
    { name: "Google Cloud Platform", icon: <FaCode /> }, // Placeholder icon
  ],
  coreCompetencies: [
    "Problem Solving",
    "Presentations",
    "Oratory",
    "Team Leadership",
    "Event Hosting",
    "Agile Methodologies"
  ]
};

export const leadershipAndInvolvement = [
  {
    role: "Junior Partner",
    organization: "The Apex Circle (TAC)",
    duration: "Jan 2025 – Present",
    points: [
      "Participated in over 15 hackathons and technical events, collaborating with peers to build innovative solutions.",
      "Mentored juniors by sharing knowledge, guiding them in projects, and fostering a strong tech community.",
    ],
  },
  {
    role: "Technical Executive",
    organization: "Computer Society of India, CU Student Branch",
    duration: "Nov 2024 – Present",
    points: [
      "Organized 5+ workshops, hackathons, and competitions to enhance student learning and engagement.",
      "Coordinated with faculty and industry experts to bring technical opportunities to students.",
    ],
  },
  {
    role: "AMCAT 2nd Rank Holder",
    organization: "Chandigarh University",
    duration: "Sept 2024",
    points: [
      "Secured 2nd rank in AMCAT among 5500+ peers, showcasing strong analytical and problem-solving skills.",
      "Demonstrated excellence in aptitude, coding, and domain-specific assessments, outperforming competition.",
    ],
  },
];

export const socialLinks = {
  linkedin: { url: personalInfo.linkedin, icon: <FaLinkedin size={24} /> },
  github: { url: personalInfo.github, icon: <FaGithub size={24} /> },
  email: { url: `mailto:${personalInfo.email}`, icon: <FaEnvelope size={24} /> },
  // phone: { url: `tel:${personalInfo.phone}`, icon: <FaPhone size={24} /> }, // Optional
};