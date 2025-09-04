
"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative bg-white py-12 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-20 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
        >
          About Me
        </motion.h2>

        {/* Line animation */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-4 h-[2px] w-24 bg-black mx-auto origin-left"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-10 text-lg md:text-xl text-gray-600 leading-relaxed"
        >
          I’m a{" "}
          <span className="font-semibold text-gray-900">
            Full Stack Developer
          </span>
          , passionate about creating fast, scalable, and intuitive digital
          experiences. My work is inspired by the idea that{" "}
          <em>technology should feel simple and elegant</em>, just like the
          world’s best-designed products.
        </motion.p>

        {/* Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <a
            href="#projects"
            className="px-8 py-3 text-lg font-medium bg-black text-white rounded-full hover:bg-gray-800 transition"
          >
            Explore My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
