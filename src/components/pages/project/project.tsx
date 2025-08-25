'use client';

import React from 'react';

const projects = [
  {
    title: "BECHDU – Marketplace for Used Mobile Phones",
    description: "Built admin & user panels with React.js, Node.js, MongoDB. Integrated Firebase notifications, JWT authentication, promo codes, cart management, and order tracking. Working on Bechdu V2 for mobile + web support."
  },
  {
    title: "REPAIRO – Electronics Repair Booking Platform",
    description: "Booking modules with real-time technician status, admin dashboards, technician assignment, APIs with Express.js, and Mongoose data modeling."
  },
  {
    title: "SHOCKS – Automotive Inventory & Vendor Management",
    description: "Vendor dashboards with pagination, search & CRUD. Stock and order handling with REST APIs & MongoDB aggregation. Responsive UI with React & Tailwind CSS."
  },
  {
    title: "SOCIAL NOTCH – Event Management Platform",
    description: "Multi-role dashboards for vendors, admins, customers. Features include event creation, booking, approval workflow, and real-time updates."
  },
  {
    title: "CODESHARK – Coding Institute Technology Website",
    description: "Interactive frontend for courses, demo requests, and enrollment. Admin backend for managing courses, batches, instructors, and content. Built with Next.js & MongoDB."
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="p-6 border rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-blue-600">{project.title}</h3>
              <p className="text-gray-700 mt-3">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
