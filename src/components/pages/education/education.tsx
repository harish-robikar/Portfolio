




"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      title: "B.E. Computer Science & Engineering",
      institution: "Government Engineering College, Chamarajanagara",
      duration: "2020 – 2024",
      score: "CGPA: 7.6",
    },
    {
      title: "Pre-University – Science",
      institution: "Sarvajna PU College, Gulbarga",
      duration: "2018 – 2020",
      score: "Percentage: 75.88%",
    },
    {
      title: "SSLC",
      institution: "Basavatheertha Vidyapeeta High School, Dubalagundi",
      duration: "2018",
      score: "Percentage: 81.28%",
    },
  ];

  return (
    <section
      id="education"
      className="bg-white py-18 sm:py-14 lg:py-12 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-14 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Education & Qualification
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="group relative p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 hover:border-gray-300 transition-all shadow-sm hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-gray-100 group-hover:bg-black transition-colors">
                  <GraduationCap
                    size={32}
                    className="text-gray-700 group-hover:text-white transition-colors"
                  />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 text-center">
                {edu.title}
              </h3>
              <p className="mt-3 text-gray-600 text-center">{edu.institution}</p>
              <p className="mt-1 text-gray-500 text-center">{edu.duration}</p>
              <p className="mt-4 text-gray-800 text-center font-medium">
                {edu.score}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
