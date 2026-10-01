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
  FaWhatsapp,
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
  SiVercel,

  SiNetlify,
  SiExpress,
  SiGit,
  SiFirebase,
  SiAmazonwebservices,
  SiRazorpay,
  SiWalletconnect,
} from "react-icons/si";
import { MdPhoneInTalk } from "react-icons/md";
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

// Shiprocket SVG Icon
const ShiprocketIcon = () => (
  <svg width="40" height="40" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <path fill="#852f8d" d="M256 0c-141.38 0-256 114.62-256 256s114.62 256 256 256 256-114.62 256-256-114.62-256-256-256zm0 464c-114.88 0-208-93.12-208-208s93.12-208 208-208 208 93.12 208 208-93.12 208-208 208z" />
    <path fill="#852f8d" d="M371.4 140.6c-4.7-4.7-12.3-4.7-17 0l-128.4 128.4-56.4-56.4c-4.7-4.7-12.3-4.7-17 0s-4.7 12.3 0 17l64.9 64.9c4.7 4.7 12.3 4.7 17 0l136.9-136.9c4.7-4.7 4.7-12.3 0-17z" />
  </svg>
);

// MSG91 SVG Icon
const MSG91Icon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#ed1c24" d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />
  </svg>
);

// Render Logo
const RenderIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" fill="#2E2E2E" />
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="white" strokeWidth="1" />
  </svg>
);

// Brevo Icon
const BrevoIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#00df9a" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-2h2v2zm0-4H9V7h2v5z" />
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

// PayU SVG Component
const PayUIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-[#A5C800] flex items-center justify-center shadow-sm">
    <span className="text-white font-black text-xs tracking-tight">PayU</span>
  </div>
);

// TP Wallet (TokenPocket) SVG Component
const TPWalletIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-[#2980FE] flex items-center justify-center shadow-sm">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V9H4V6Z"
        fill="white"
      />
      <path
        d="M9 9H15V20H9V9Z"
        fill="white"
      />
      <path
        d="M15 9H18C19.1046 9 20 9.89543 20 11V14C20 15.1046 19.1046 16 18 16H15V9Z"
        fill="white"
        fillOpacity="0.85"
      />
    </svg>
  </div>
);

// IVR Integration SVG Component
const IVRIcon = () => (
  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-blue-500 flex items-center justify-center text-white shadow-sm">
    <MdPhoneInTalk size={22} />
  </div>
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
    name: "AWS S3",
    icon: (
      <div className="text-[#FF9900]">
        <SiAmazonwebservices size={40} />
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
  {
    name: "Firebase",
    icon: (
      <div className="text-yellow-500">
        <SiFirebase size={40} />
      </div>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <div className="text-blue-600">
        <SiTypescript size={40} />
      </div>
    ),
  },
  { name: "MSG91", icon: <MSG91Icon /> },
  { name: "Shiprocket", icon: <ShiprocketIcon /> },
  { name: "Render", icon: <RenderIcon /> },
  { name: "Brevo", icon: <BrevoIcon /> },
  {
    name: "WhatsApp API",
    icon: (
      <div className="text-green-500">
        <FaWhatsapp size={40} />
      </div>
    ),
  },
  {
    name: "Razorpay",
    icon: (
      <div className="text-[#3395FF]">
        <SiRazorpay size={40} />
      </div>
    ),
  },
  {
    name: "PayU",
    icon: <PayUIcon />,
  },
  {
    name: "WalletConnect",
    icon: (
      <div className="text-[#3B99FC]">
        <SiWalletconnect size={40} />
      </div>
    ),
  },
  {
    name: "TP Wallet Connect",
    icon: <TPWalletIcon />,
  },
  {
    name: "IVR Connection",
    icon: <IVRIcon />,
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
          My <span className="text-[#d97706]">Technology</span> Expertise
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
              <p className="mt-3 text-gray-900 font-medium text-sm text-center">
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
