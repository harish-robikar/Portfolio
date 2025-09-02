/* eslint-disable react/jsx-key */
"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaPython,
} from "react-icons/fa";
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Skill Categories
const frontend = [
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "JavaScript (ES6+)",
  "TypeScript",
  "HTML5",
  "CSS3",
];
const backend = [
  "Node.js",
  "Express.js",
  "REST APIs",
  "JWT",
  "Multer",
  "Nodemailer",
];
const database = ["MongoDB", "Mongoose"];
const tools = ["Git & GitHub", "Postman", "VS Code"];
const languages = ["C", "C++", "Java", "Python"];

// Floating Icons Component (Vertical float only)
const FloatingIcons = () => {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    iconsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: "random(-20,20)", // vertical float only
        rotation: "random(-5,5)", // subtle rotation
        duration: 5 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });
    });
  }, []);

  const icons = [
    <div className="text-cyan-400/20"><FaReact size={50} /></div>,
    <div className="text-green-500/20"><FaNodeJs size={50} /></div>,
    <div className="text-yellow-400/20"><FaDatabase size={50} /></div>,
    <div className="text-green-400/20"><SiMongodb size={50} /></div>,
    <div className="text-gray-400/10"><SiNextdotjs size={50} /></div>,
    <div className="text-sky-400/20"><SiTailwindcss size={50} /></div>,
    <div className="text-blue-600/20"><SiTypescript size={50} /></div>,
    <div className="text-orange-500/20"><FaGitAlt size={50} /></div>,
    <div className="text-blue-300/20"><FaPython size={50} /></div>,
  ];

  return (
    <div className="absolute inset-0  pointer-events-none overflow-hidden">
      {icons.map((icon, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) iconsRef.current[i] = el;
          }}
          className="absolute"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`, // fixed horizontal position
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", items: frontend },
    { title: "Backend", items: backend },
    { title: "Databases", items: database },
    { title: "Dev Tools", items: tools },
    { title: "Programming Languages", items: languages },
  ];

  return (
    <section className="relative   py-12 bg-gray-50 overflow-hidden">
      {/* Floating Icons */}
      <FloatingIcons />

      <div className="relative max-w-7xl mx-auto px-6 md:px-6 lg:px-8">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl sm:text-3xl font-extrabold text-center text-gray-900"
        >
          Technical Skills
        </motion.h2>

        {/* Subtle Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 h-[2px] w-24 bg-gray-900 mx-auto origin-left"
        />

        {/* Skills Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white/30 backdrop-blur-lg border border-gray-200 hover:bg-white/50 hover:scale-105 transition-transform duration-500 shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2 text-gray-700 text-lg">
                {category.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.05 * i }}
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;