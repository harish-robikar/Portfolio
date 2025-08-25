'use client';

import React from 'react';

const frontend = ["React.js", "Next.js", "Tailwind CSS", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3"];
const backend = ["Node.js", "Express.js", "REST APIs", "JWT", "Multer", "Nodemailer"];
const database = ["MongoDB", "Mongoose", "MySQL", "PostgreSQL", "NoSQL"];
const tools = ["Git & GitHub", "Postman", "VS Code"];
const languages = ["C", "C++", "Java", "Python", "Ruby", "PHP"];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Technical Skills</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-blue-600 mb-2">Frontend</h3>
            <ul className="list-disc list-inside text-gray-700">
              {frontend.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-blue-600 mb-2">Backend</h3>
            <ul className="list-disc list-inside text-gray-700">
              {backend.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-blue-600 mb-2">Databases</h3>
            <ul className="list-disc list-inside text-gray-700">
              {database.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-blue-600 mb-2">Dev Tools</h3>
            <ul className="list-disc list-inside text-gray-700">
              {tools.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-blue-600 mb-2">Programming Languages</h3>
            <ul className="list-disc list-inside text-gray-700">
              {languages.map((s, i) => <li key={i}>{s}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
