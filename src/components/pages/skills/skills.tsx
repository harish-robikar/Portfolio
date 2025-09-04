/* eslint-disable react/jsx-key */
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
  SiJavascript,
  SiHtml5,
  SiRedux,
  SiPostman,
  SiSwagger,
  SiFirebase,
  SiCloudinary,
  SiVercel,
  SiNetlify,
  SiExpress,
  SiGit,
} from "react-icons/si";
import Image from "next/image";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// VSCode SVG Component
const VSCodeIcon = () => (
  <div className="w-10 h-10 relative">
    <Image
      src="/project/vscode.png"
      alt="Visual Studio Code"
      width={40}
      height={40}
      className="object-contain"
    />
  </div>
);

// Acertinity UI / Shadcn placeholder icon
const AcertinityUIIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="2" y="2" width="60" height="60" rx="8" ry="8" fill="#4F46E5" />
    <text
      x="32"
      y="42"
      fontSize="28"
      textAnchor="middle"
      fill="white"
      fontFamily="Arial, sans-serif"
      fontWeight="bold"
    >
      A
    </text>
  </svg>
);

// GSAP Logo
const GSAPIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="256" cy="256" r="256" fill="#88CE02" />
    <path
      fill="#fff"
      d="M322.9 167.3c-9.6-3.8-20.5.9-24.3 10.5l-27.6 69.3-37.3-47.6c-7-9-20-10.7-29-3.7s-10.7 20-3.7 29l55.7 71c4.2 5.4 10.8 8.4 17.6 8.1 7-.3 13.2-4.6 15.9-11l41.2-103.4c3.8-9.6-0.9-20.5-10.5-24.3z"
    />
  </svg>
);

// Floating Background Icons
const FloatingIcons = () => {
  const iconsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    iconsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: "random(-10,10)",
        rotation: "random(-2,2)",
        duration: 8 + i,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3,
      });
    });
  }, []);

  const icons = [
    <div className="text-cyan-400/10">
      <FaReact size={40} />
    </div>,
    <div className="text-green-500/10">
      <FaNodeJs size={40} />
    </div>,
    <div className="text-yellow-400/10">
      <FaDatabase size={40} />
    </div>,
    <div className="text-green-400/10">
      <SiMongodb size={40} />
    </div>,
    <div className="text-gray-400/10">
      <SiNextdotjs size={40} />
    </div>,
    <div className="text-sky-400/10">
      <SiTailwindcss size={40} />
    </div>,
    <div className="text-blue-600/10">
      <SiTypescript size={40} />
    </div>,
    <div className="text-orange-500/10">
      <FaGitAlt size={40} />
    </div>,
    <div className="text-blue-300/10">
      <FaPython size={40} />
    </div>,
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {icons.map((icon, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) iconsRef.current[i] = el;
          }}
          className="absolute"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

// Skills Array

const skills = [
  {
    name: "Next.js",
    icon: (
      <div className="text-gray-800">
        <SiNextdotjs size={40} />
      </div>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <div className="text-green-600">
        <FaNodeJs size={40} />
      </div>
    ),
  },
  {
    name: "Express.js",
    icon: (
      <div className="text-gray-700">
        <SiExpress size={40} />
      </div>
    ),
  },
  {
    name: "React.js",
    icon: (
      <div className="text-cyan-500">
        <FaReact size={40} />
      </div>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <div className="text-sky-500">
        <SiTailwindcss size={40} />
      </div>
    ),
  },
  {
    name: "CSS3",
    icon: (
      <div className="text-orange-500">
        <SiHtml5 size={40} />
      </div>
    ),
  },
  {
    name: "Netlify",
    icon: (
      <div className="text-teal-500">
        <SiNetlify size={40} />
      </div>
    ),
  },
  {
    name: "Vercel",
    icon: (
      <div className="text-black">
        <SiVercel size={40} />
      </div>
    ),
  },
  {
    name: "AWS",
    icon: (
      <div className="text-orange-600">
        <SiCloudinary size={40} />
      </div>
    ),
  },
  {
    name: "MongoDB",
    icon: (
      <div className="text-green-500">
        <SiMongodb size={40} />
      </div>
    ),
  },
  {
    name: "Postman",
    icon: (
      <div className="text-red-500">
        <SiPostman size={40} />
      </div>
    ),
  },
  {
    name: "Git/GitHub",
    icon: (
      <div className="text-orange-600">
        <SiGit size={40} />
      </div>
    ),
  },
  { name: "VSCode", icon: <VSCodeIcon /> },
  {
    name: "Redux",
    icon: (
      <div className="text-purple-600">
        <SiRedux size={40} />
      </div>
    ),
  },
  { name: "Acertinity UI", icon: <AcertinityUIIcon /> },
  { name: "GSAP", icon: <GSAPIcon /> },
  {
    name: "Framer Motion",
    icon: (
      <div className="text-pink-500">
        <FaReact size={40} />
      </div>
    ),
  },
  {
    name: "JavaScript",
    icon: (
      <div className="text-yellow-400">
        <SiJavascript size={40} />
      </div>
    ),
  },
];

const Skills = () => {
  const skillRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    skillRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <FloatingIcons />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-4">
          My{" "}
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Technology
          </span>{" "}
          Expertise
        </h2>

        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
          The tools and technologies I use to build high-performance, scalable
          web applications that deliver exceptional user experiences.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) skillRefs.current[i] = el;
              }}
              className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-500"
            >
              {skill.icon}
              <p className="mt-3 text-gray-900 font-medium text-sm">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
