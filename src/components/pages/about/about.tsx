// 'use client';

// import React from 'react';

// const About = () => {
//   return (
//     <section id="about" className="bg-gray-50 py-20">
//       <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
//         <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
//         <p className="text-gray-700 leading-relaxed max-w-3xl">
//           Motivated and detail-oriented <span className="font-semibold">MERN Stack Developer</span> 
//           with hands-on experience building full-stack applications using modern technologies like 
//           React.js, Next.js, Tailwind CSS, Node.js, and MongoDB. 
//           Adept at creating intuitive UIs, scalable APIs, and optimized databases. 
//           Passionate about learning and delivering clean, maintainable code in collaborative environments.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;



'use client';

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-white py-12 overflow-hidden"
    >
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
          I’m a <span className="font-semibold text-gray-900">MERN Stack Developer</span>, 
          passionate about creating fast, scalable, and intuitive digital experiences.  
          My work is inspired by the idea that <em>technology should feel simple and elegant</em>, 
          just like the world’s best-designed products.
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
