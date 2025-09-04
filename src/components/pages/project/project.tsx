"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  {
    title: "BECHDU – Marketplace for Used Electronics",
    description:
      "Admin & user panels with React.js, Node.js, Express.js, and MongoDB. Integrated Firebase notifications, JWT authentication, promo codes, cart management, and order tracking. Designed responsive UI with CSS.",
    image: "/project/bechdu.png",
    type: "Full Stack",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "CSS",
      "MongoDB",
      "Firebase",
      "JavaScript",
    ],
    link: "https://bechdu.in/",
  },
  {
    title: "BECHDU V2 – Marketplace for New & Used Electronics",
    description:
      "Advanced version of Bechdu supporting both new and used electronics including mobiles, laptops, tablets, and more. Features multi-vendor support, secure payments, real-time notifications, cart & checkout flow, and seamless mobile + web experience.",
    image: "/project/bechduv2.png",
    type: "Full Stack",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "Firebase",
      "JavaScript",
    ],
    link: "https://bechdu.in/",
  },
  {
    title: "GETFIXED – Electronics Repair Booking Platform",
    description:
      "Booking modules with real-time technician status, admin dashboards, technician assignment, and APIs with Express.js and Mongoose. Built with Next.js and TypeScript for scalable performance.",
    image: "/project/getfixed.png",
    type: "Full Stack",
    tech: ["Next.js", "Node.js", "Express.js", "TypeScript", "MongoDB"],
    link: "https://getfixed.co.in/",
  },
  {
    title: "SHOCKS – Automotive Inventory & Vendor Management",
    description:
      "Vendor dashboards with pagination, search & CRUD. Stock and order handling with REST APIs and MongoDB aggregation. Responsive UI built with Next.js and Tailwind CSS.",
    image: "/project/bechdu.png",
    type: "Full Stack",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "TypeScript",
    ],
    link: "#",
  },
  {
    title: "SOCIAL NOTCH – Event Management Platform",
    description:
      "Multi-role dashboards for vendors, admins, and customers. Features include event creation, booking, approval workflow, and real-time updates with Socket.io.",
    image: "/project/socialnotch.png",
    type: "Full Stack",
    tech: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "MongoDB",
      "Socket.io",
    ],
    link: "https://socialnotch.spaces-india.in/",
  },
  {
    title: "CODESHARK – Coding Institute Technology Website",
    description:
      "Interactive frontend for courses, demo requests, and enrollment. Admin backend for managing courses, batches, instructors, and content. Built with Next.js and TypeScript for reliability.",
    image: "/project/codesharks.png",
    type: "Full Stack",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TypeScript",
    ],
    link: "https://www.code-sharks.com/",
  },
];

const Projects = () => {
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

        {/* Grid Layout */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Image with badge */}
              <div className="relative w-full h-48">
                <motion.div className="w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                </motion.div>
                <span className="absolute top-3 left-3 bg-gray-600 text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full shadow-md">
                  {project.type}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-4">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 text-sm flex-1 mb-5">
                  {project.description}
                </p>

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
                <motion.a
                  whileHover={{ x: 4 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm font-semibold hover:text-blue-500 transition"
                >
                  View Project →
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
