"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "ClaroFX – Web3 & Forex Asset Management Platform",
    description:
      "Architected a full-stack FinTech and Web3 investment platform featuring an investor portal, admin operations suite, and high-precision REST APIs. Built an automated daily yield distribution engine using Node-Cron and MongoDB ACID transactions to calculate and credit dynamic ROI rates (0.3%–0.8%). Implemented a recursive 9-level matching referral commission system with dynamic tier-eligibility validation and a strict 400% (4X) lifetime capital earning cap. Prevented floating-point rounding errors using Decimal.js (40-digit precision) paired with an immutable double-entry ledger, and secured accounts with TOTP 2FA and WalletConnect on-chain deposits.",
    image: "/project/clarofx.png",
    type: "Full Stack",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB (ACID)",
      "Tailwind CSS",
      "Decimal.js",
      "Node-Cron",
      "WalletConnect",
      "TOTP 2FA",
      "REST APIs",
    ],
    link: "https://clarofx.com/",
  },
  {
    title: "MRQ GOLD – Digital Gold Investment Platform",
    description:
      "Developed digital gold backend supporting web, mobile apps, and Admin Dashboard. Created gold accumulation workflows, automated allocations, and installment engine. Implemented role-based access control (RBAC) in Admin Dashboard for operations. Designed and integrated REST APIs for Flutter mobile app supporting full lifecycle.",
    image: "/project/mrqjewellery.png",
    type: "Full Stack",
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "REST APIs",
      "JWT Authentication",
      "Flutter",
      "Next.js",
    ],
    link: "https://mrqjewellery.com/",
  },
  {
    title: "BECHDU – Electronics Buyback & Multi-Vendor Marketplace",
    description:
      "Engineered an end-to-end electronics marketplace and buyback ecosystem. Built backend and REST APIs for the Buyback Dealer App enabling real-time phone evaluation, resale workflows, automated quality inspection (QC), and exchange/inventory management. Configured multi-role workflows with location-based product visibility across 100+ listings. Integrated Razorpay instant payouts, real-time Firebase alerts, Shiprocket logistics tracking, AWS S3 for secure KYC storage, dynamic PDF invoice/receipt generation, and a centralized CMS portal.",
    image: "/project/bechdu.png",
    type: "Full Stack",
    tech: [
      "React.js",
      "Next.js",
      "Flutter",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Razorpay",
      "Firebase",
      "AWS S3",
      "Shiprocket",
      "Puppeteer",
      "JWT",
      "MSG91",
      "Brevo",
    ],
    link: "https://bechdu.in/",
  },
  {
    title: "SellSmart – Used Electronics Selling Platform",
    description:
      "Platform to sell electronics featuring a React admin dashboard and a Flutter QC mobile app for partners. Manages end-to-end lifecycles with smart routing, dynamic rewards, and passwordless MSG91 OTP authentication. Engineered with AWS S3 for secure KYC document storage, automated data synchronization, and on-the-fly PDF invoice generation.",
    image: "/project/sellsmart.png",
    type: "Full Stack",
    tech: [
      "React.js",
      "Flutter",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "AWS S3",
      "Firebase",
      "JWT",
      "MSG91",
      "Multer",
    ],
    link: "https://sellsmart.co.in/",
  },
  {
    title: "GETFIXED – Electronics Repair Booking Platform",
    description:
      "Architected a robust REST API backend managing complex dual-sided marketplace operations. Engineered end-to-end order lifecycles with dynamic state transitions, real-time technician tracking, and Role-Based Access Control. Features a specialized Partner Management module with OTP-authenticated QC logins, system-wide 'Partner ID' tracking, and secure document pipelines for automated PDF processing.",
    image: "/project/getfixed.png",
    type: "Full Stack",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "MSG91",
      "Multer",
      "REST API",
    ],
    link: "https://getfixed.co.in/",
  },
  {
    title: "Code Shark API – EdTech & Agency Backend Platform",
    description:
      "Architected a scalable headless CMS and RESTful API backend for a dynamic EdTech platform. Designed optimized Mongoose schemas managing deeply nested arrays (Courses, Blogs). Engineered a robust concurrent multi-file upload system using Multer to parse complex multi-part form data (images, PDFs) safely into AWS S3. Built secure JWT routing workflows and integrated the Brevo API for transactional notifications.",
    image: "/project/codesharks.png",
    type: "Backend / API",
    tech: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "AWS S3",
      "Multer",
      "Brevo",
      "JWT",
      "Puppeteer",
      "REST API",
    ],
    link: "https://www.code-sharks.com/",
  },
  {
    title: "MGBW – Mangalore Ganesh Beedi Works",
    description:
      "Official website showcasing the diverse MGBW portfolio. Engineered a highly optimized, dynamic hero video builder serving device-specific assets via responsive media architecture. Solved strict Safari/iOS autoplay restrictions using resilient fallback strategies, event-driven silent retries, and automated listener cleanup pipelines for blazing-fast performance.",
    image: "/project/mgbw.png",
    type: "Frontend",
    tech: [
      "Next.js",
      "React",
      "HTML5 Video API",
      "TypeScript",
      "Tailwind CSS",
      "Event-Driven",
      "Brevo",
    ],
    link: "https://mgbwgroup.com/",
  },
  {
    title: "ARD PERFORMANCE – High-Performance Automotive Ecosystem",
    description:
      "A full-stack distributed ecosystem for automotive performance parts and custom tuning. Engineered a multi-vendor order-splitting engine with ACID-compliant transactions and Year-Make-Model fitment filtering. Features specialized portals for enthusiasts, vendors, and installers, integrated with Shiprocket logistics, Razorpay, and automated PDF invoicing via Puppeteer.",
    image: "/project/ard.png",
    type: "Full Stack / Marketplace",
    tech: [
      "Node.js",
      "TypeScript",
      "React.js",
      "MongoDB",
      "Mongoose",
      "Razorpay",
      "Shiprocket",
      "AWS S3",
      "Puppeteer",
      "Brevo",
    ],
    link: "https://arduser.vercel.app/",
  },
  {
    title: "SOCIAL NOTCH – Event Booking & Vendor Marketplace",
    description:
      "A comprehensive event marketplace managing workflows for users, vendors, and admins. Features a sophisticated backend with dynamic pricing logic, multi-level taxation, and secure Razorpay checkout integration with webhooks. Engineered an automated fulfillment pipeline utilizing Puppeteer and PDFKit for dynamic PDF ticket generation, alongside background Node Cron jobs and Brevo API email delivery.",
    image: "/project/socialnotch.png",
    type: "Full Stack",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MongoDB",
      "Mongoose",
      "AWS S3",
      "Razorpay API",
      "Puppeteer",
      "PDFKit",
      "Brevo",
      "Node Cron",
      "Winston Logging",
      "JWT Auth",
    ],
    link: "https://socialnotch.spaces-india.in/",
  },
];

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.clientWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  return (
    <section
      id="projects"
      className="relative bg-white text-black py-16 overflow-hidden px-2"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 text-center"
        >
          Featured Projects
        </motion.h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          A selection of my web and full-stack projects, highlighting clean
          design and smooth user experiences.
        </p>

        {/* Grid Layout on Desktop / Carousel on Mobile */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex sm:grid overflow-x-auto sm:overflow-visible snap-x snap-mandatory sm:snap-none gap-6 sm:gap-10 sm:grid-cols-2 lg:grid-cols-3 pb-6 sm:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.05,
                }}
                layout
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                onClick={() =>
                  window.open(project.link, "_blank", "noopener,noreferrer")
                }
                className="min-w-full sm:min-w-0 snap-center sm:snap-none bg-white rounded-2xl shadow-lg border border-gray-100 overflow-visible flex flex-col cursor-pointer transition-shadow"
              >
                {/* Image with badge */}
                <div className="relative w-full h-48 sm:h-56 bg-gray-50 rounded-t-2xl overflow-hidden">
                  <motion.div className="w-full h-full p-4">
                      <Image
                        src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </motion.div>
                  <span className="absolute top-3 left-3 bg-gray-900 text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow-md z-10">
                    {project.type}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col p-4 relative">
                  {/* Title with its own tooltip */}
                  <div className="group relative mb-3">
                    <h3 className="text-xl font-semibold line-clamp-2 cursor-help">
                      {project.title}
                    </h3>
                    <div className="absolute bottom-full left-0 mb-2 w-max max-w-[250px] p-2 bg-gray-900 shadow-2xl text-white text-[10px] rounded-lg opacity-0 group-hover:opacity-100 transition-all invisible group-hover:visible translate-y-1 group-hover:translate-y-0 z-50">
                      {project.title}
                      <div className="absolute bottom-[-4px] left-4 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>
                  </div>
                  
                  {/* Description with its own tooltip */}
                  <div className="group relative flex-1 mb-5">
                    <p className="text-gray-600 text-sm line-clamp-7 cursor-help">
                      {project.description}
                    </p>
                    <div className="absolute bottom-full left-0 mb-2 w-full p-4 bg-gray-900 shadow-2xl text-white text-xs rounded-xl opacity-0 group-hover:opacity-100 transition-all invisible group-hover:visible translate-y-1 group-hover:translate-y-0 z-50 pointer-events-none">
                      <p className="line-clamp-none">{project.description}</p>
                      <div className="absolute bottom-[-6px] left-6 w-3 h-3 bg-gray-900 rotate-45" />
                    </div>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 text-xs font-medium px-3 py-1 rounded-full"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="text-[#d97706] text-sm font-semibold hover:text-[#b45309] transition cursor-pointer inline-block w-fit"
                  >
                    View Project →
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="flex sm:hidden justify-center gap-2 mb-8">
          {visibleProjects.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === i ? "w-6 bg-[#d97706]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Load More Button */}
        {projects.length > 6 && (
          <div className="mt-8 sm:mt-16 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(!showAll)}
              className="px-10 py-4 bg-black text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              {showAll ? "Show Less" : "Load More Projects"}
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
