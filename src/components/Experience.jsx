// src/components/Experience.jsx
import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";
import { FaAward, FaUsers, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { supabase } from "../lib/supabase.js";

const experienceItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: "easeOut",
    },
  }),
};

const getIcon = (title) => {
  const lowerTitle = (title || "").toLowerCase();
  const iconSizeClass = "w-4 h-4 sm:w-5 sm:h-5";
  if (lowerTitle.includes("partner")) return <FaBriefcase className={`text-accent-1 ${iconSizeClass}`} />;
  if (lowerTitle.includes("executive")) return <FaUsers className={`text-accent-1 ${iconSizeClass}`} />;
  if (lowerTitle.includes("rank") || lowerTitle.includes("holder")) return <FaAward className={`text-accent-1 ${iconSizeClass}`} />;
  return <FaBriefcase className={`text-accent-1 ${iconSizeClass}`} />;
};

const Experience = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const getLeadership = async () => {
    const { data, error } = await supabase
      .from("experience")
      .select("*")
      .order("order_index", { ascending: true });

    if (error) throw error;
    return data;
  };

  useEffect(() => {
    getLeadership()
      .then((data) => {
        setItems(data || []);
      })
      .catch((err) => {
        console.error("Error fetching leadership:", err);
        setItems([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section id="experience" className="py-20 bg-secondary-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle id="experience-title">Leadership & Involvement</SectionTitle>
          <div className="py-12 text-center text-text-secondary">Loading…</div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="experience-title">Leadership & Involvement</SectionTitle>

        <div className="relative max-w-5xl mx-auto mt-12 sm:mt-16">
          <div className="absolute left-[calc(1rem-0.5px)] sm:left-[calc(1.25rem-0.5px)] top-0 h-full w-0.5 bg-primary-bg rounded-full"></div>

          {items.map((item, index) => (
            <motion.div
              key={item.id || index}
              className="mb-10 flex"
              custom={index}
              variants={experienceItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 bg-secondary-bg rounded-full border-2 border-accent-1 flex items-center justify-center mr-4 sm:mr-6 relative z-10">
                {getIcon(item.role)}
              </div>

              <div className="flex-grow p-4 sm:p-6 bg-primary-bg rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-1 sm:mb-2">
                  <h3 className="text-md sm:text-lg lg:text-xl font-semibold text-accent-1 font-mono">{item.role}</h3>
                  <p className="text-xs sm:text-sm text-text-secondary/80 font-mono mt-1 sm:mt-0">{item.duration}</p>
                </div>

                <p className="text-sm sm:text-md text-accent-2/90 font-semibold mb-2 sm:mb-3">{item.organization}</p>

                {Array.isArray(item.points) && item.points.length > 0 ? (
                  <ul className="list-disc list-inside space-y-1.5 text-text-secondary pl-1">
                    {item.points.map((point, i) => (
                      <li key={i} className="text-xs sm:text-sm leading-relaxed sm:leading-normal">
                        {point}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-text-secondary/80 italic text-xs sm:text-sm">Details forthcoming.</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
