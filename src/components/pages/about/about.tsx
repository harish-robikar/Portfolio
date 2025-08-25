'use client';

import React from 'react';

const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center md:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Motivated and detail-oriented <span className="font-semibold">MERN Stack Developer</span> 
          with hands-on experience building full-stack applications using modern technologies like 
          React.js, Next.js, Tailwind CSS, Node.js, and MongoDB. 
          Adept at creating intuitive UIs, scalable APIs, and optimized databases. 
          Passionate about learning and delivering clean, maintainable code in collaborative environments.
        </p>
      </div>
    </section>
  );
};

export default About;
