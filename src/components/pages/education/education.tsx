'use client';

import React from 'react';

const Education = () => {
  return (
    <section id="education" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Education & Qualification</h2>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">B.E. Computer Science & Engineering</h3>
            <p className="text-gray-700">Government Engineering College, Chamarajanagara (2020 – 2024)</p>
            <p className="text-gray-600">CGPA: 7.6</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">Pre-University – Science</h3>
            <p className="text-gray-700">Sarvajna PU College, Gulbarga (2018 – 2020)</p>
            <p className="text-gray-600">Percentage: 75.88%</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-blue-600">SSLC</h3>
            <p className="text-gray-700">Basavatheertha Vidyapeeta High School, Dubalagundi (2018)</p>
            <p className="text-gray-600">Percentage: 81.28%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
