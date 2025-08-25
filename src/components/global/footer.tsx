'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center text-sm py-6 mt-20">
      <p>
        &copy; {new Date().getFullYear()} <span className="text-white font-medium">Harish Robikar</span>. 
        Built with ❤️ using Next.js & Tailwind CSS.
      </p>
    </footer>
  );
};

export default Footer;
