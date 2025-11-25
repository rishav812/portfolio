import React from 'react';
import SectionTitle from './SectionTitle';
import { personalInfo, education } from '../data/portfolioData.jsx';
import { motion } from 'framer-motion';
import { FaUniversity, FaSchool } from 'react-icons/fa'; // Example icons

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="about-title">About Me</SectionTitle>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary leading-relaxed">
            Hello!, I’m Rishav Kumar — a Full Stack Developer with 2.4+ years of experience building scalable web applications using React, Node.js, TypeScript, FastAPI, and modern JavaScript frameworks.

            I specialize in crafting clean, user-friendly interfaces on the frontend and building secure, production-ready backend systems. I’ve worked on multi-tenant AI chatbot platforms, admin dashboards, authentication systems, RBAC, REST APIs, and real-time features.

            I focus on writing clean code, solving real problems, and building products that deliver measurable impact.
          </p>
          {/* Optional: Add a profile image here */}
          {/* <img src={profilePlaceholder} alt="Aditi Arya" className="w-40 h-40 rounded-full mx-auto my-6 border-4 border-accent-1" /> */}
        </motion.div>

        <h3 className="text-2xl font-semibold text-center text-accent-1 mb-8 font-mono">Education</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-primary-bg p-6 rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-3">
                {edu.institution.toLowerCase().includes("university") ?
                  <FaUniversity className="text-accent-1 mr-3 text-2xl" /> :
                  <FaSchool className="text-accent-1 mr-3 text-2xl" />
                }
                <h4 className="text-xl font-semibold text-text-primary">{edu.institution}</h4>
              </div>
              <p className="text-text-secondary font-medium">{edu.degree}</p>
              <p className="text-sm text-text-secondary font-mono">{edu.duration}</p>
              <p className="text-sm text-accent-1 font-mono mt-1">{edu.score}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;