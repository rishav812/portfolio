import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
// import { getProjects } from "../api/getProjects";
import { iconMap } from "../utils/iconMap.jsx";
import { supabase } from "../lib/supabase.js";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const ProjectCard = ({ project, index }) => {
  const IconEl = project.icon ? iconMap[project.icon] : null;

  return (
    <motion.div
      className="bg-secondary-bg rounded-lg shadow-xl overflow-hidden flex flex-col group transform hover:-translate-y-2 transition-all duration-300"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl sm:text-2xl font-semibold text-accent-1 font-mono">
            {project.title}
          </h3>
          {IconEl && <div className="text-accent-1">{IconEl}</div>}
        </div>

        <p className="text-xs text-text-secondary font-mono mb-3">
          {project.date} | {project.category}
        </p>

        <p className="text-sm text-text-secondary mb-4 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-text-primary mb-1 font-mono">
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.tech?.map((t, i) => (
              <span
                key={i}
                className="text-xs bg-primary-bg text-accent-1 px-2 py-1 rounded-full font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto flex justify-between space-x-4 pt-5 border-t border-primary-bg">
          {project.github_link && (
            <a
              href={project.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-1 transition-colors flex items-center"
            >
              <FaGithub size={20} className="mr-1" />{" "}
              <span className="font-mono text-sm">Code</span>
            </a>
          )}
          {project.live_link && (
            <a
              href={project.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent-1 transition-colors flex items-center"
            >
              <FaExternalLinkAlt size={18} className="mr-1" />{" "}
              <span className="font-mono text-sm">Live</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("order_index", { ascending: true });

  if (error) throw error;
  return data;
};

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <div className="py-20 text-center text-text-secondary">Loading projects...</div>
    );

  return (
    <section id="projects" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="projects-title">My Contributions and Creation</SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
