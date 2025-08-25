/* eslint-disable react/no-unescaped-entities */

'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Poft Floi</span> <br />
            A Full-Stack Developer
          </h1>
          <p className="text-gray-700 mb-6">
            I build fast, scalable, and beautiful web applications using modern technologies like React, Node.js, and Next.js.
          </p>
          <a
            href="#projects"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            View My Work
          </a>
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2">
          <Image
            src="/developer-hero.png" // Replace with your own image in /public
            alt="Fullstack Developer"
            width={500}
            height={500}
            className="w-full h-auto rounded-lg shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
