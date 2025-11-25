import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaCode,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiPython,
  SiFastapi,
  SiChainlink,
   SiAmazon,
  SiApachespark,
} from "react-icons/si";

export const iconMap = {
  // Languages
  SiCplusplus: <SiCplusplus size={24} className="text-accent-1" />,
  SiJavascript: <SiJavascript size={24} className="text-accent-1" />,
  SiPython: <SiPython size={24} className="text-accent-1" />,
  FaHtml5: <FaHtml5 size={24} className="text-accent-1" />,
  FaCss3Alt: <FaCss3Alt size={24} className="text-accent-1" />,
  FaDatabase: <FaDatabase size={24} className="text-accent-1" />,

  // Frameworks & Libraries
  FaReact: <FaReact size={24} className="text-accent-1" />,
  FaNodeJs: <FaNodeJs size={24} className="text-accent-1" />,
  SiExpress: <SiExpress size={24} className="text-accent-1" />,
  SiFastapi: <SiFastapi size={24} className="text-accent-1" />,
  SiChainlink: <SiChainlink size={24} className="text-accent-1" />,
  SiTailwindcss: <SiTailwindcss size={24} className="text-accent-1" />,

  // Tools & Platforms
  SiMongodb: <SiMongodb size={24} className="text-accent-1" />,
  SiFirebase: <SiFirebase size={24} className="text-accent-1" />,
  FaGithub: <FaGithub size={24} className="text-accent-1" />,
  SiAmazon: <SiAmazon size={24} className="text-accent-1" />,
  SiApachespark: <SiApachespark size={24} className="text-accent-1" />, // used for Milvus placeholder

  // fallback
  FaCode: <FaCode size={24} className="text-accent-1" />,
  default: <FaCode size={24} className="text-accent-1" />,
};
