import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase";
import { iconMap } from "../utils/iconMap.jsx";

const skillCategoryVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { staggerChildren: 0.1, duration: 0.5 },
  },
};

const skillItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SkillCard = ({ name, icon }) => (
  <motion.div
    variants={skillItemVariants}
    className="flex flex-col items-center p-4 bg-secondary-bg rounded-lg shadow-md hover:shadow-accent-1/10 transition-shadow duration-300"
    whileHover={{ y: -5 }}
  >
    <div className="text-accent-1 text-3xl mb-2">{icon}</div>
    <span className="text-text-primary text-sm font-mono">{name}</span>
  </motion.div>
);

const Skills = () => {
  const [skills, setSkills] = useState([]);

  // fetch dynamic skills
  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase
        .from("skills")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) {
        console.error("❌ Error fetching skills:", error);
        return;
      }

      setSkills(data);
    };

    fetchSkills();
  }, []);

  // group by category
  const grouped = skills.reduce((acc, skill) => {
    (acc[skill.category] ||= []).push(skill);
    return acc;
  }, {});

  console.log("grouped>>>>>",grouped);

  return (
    <section id="skills" className="py-20 bg-primary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="skills-title">My Tech Skill</SectionTitle>

        <div className="space-y-12">

          {/* Render all categories dynamically */}
          {Object.entries(grouped).map(([category, items], idx) => (
            <motion.div
              key={idx}
              variants={skillCategoryVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-accent-2 mb-6 font-mono text-center sm:text-left">
                {category.replace(/([A-Z])/g, " $1")} {/* convert camelCase → Title Case */}
              </h3>

              {/* Show skills (cards) */}
              {category !== "coreCompetencies" ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {items.map((skill) => (
                    <SkillCard
                      key={skill.id}
                      name={skill.name}
                      icon={iconMap[skill.icon] || iconMap.default}
                    />
                  ))}
                </div>
              ) : (
                // coreCompetencies is simple tags
                <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                  {items.map((skill) => (
                    <motion.span
                      key={skill.id}
                      variants={skillItemVariants}
                      className="bg-secondary-bg text-text-secondary py-2 px-4 rounded-full text-sm font-mono shadow-sm"
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
