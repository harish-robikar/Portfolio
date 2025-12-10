"use client";
import React, { useEffect, useRef, useState } from "react";
import { Menu, X, Download, ExternalLink } from "lucide-react";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  // Observe sections to set active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100; // Account for navbar height

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Initial animation
  useEffect(() => {
    if (navRef.current) {
      navRef.current.style.transform = "translateY(-80px)";
      navRef.current.style.opacity = "0";
      setTimeout(() => {
        navRef.current!.style.transition = "all 0.8s ease-out";
        navRef.current!.style.transform = "translateY(0)";
        navRef.current!.style.opacity = "1";
      }, 100);
    }

    if (logoRef.current) {
      logoRef.current.style.transform = "translateX(-30px)";
      logoRef.current.style.opacity = "0";
      setTimeout(() => {
        logoRef.current!.style.transition = "all 0.6s ease-out";
        logoRef.current!.style.transform = "translateX(0)";
        logoRef.current!.style.opacity = "1";
      }, 300);
    }

    linksRef.current.forEach((link, i) => {
      if (link) {
        link.style.transform = "translateY(-20px)";
        link.style.opacity = "0";
        setTimeout(() => {
          link.style.transition = "all 0.6s ease-out";
          link.style.transform = "translateY(0)";
          link.style.opacity = "1";
        }, 500 + i * 100);
      }
    });

    if (ctaRef.current) {
      ctaRef.current.style.transform = "translateX(30px)";
      ctaRef.current.style.opacity = "0";
      setTimeout(() => {
        ctaRef.current!.style.transition = "all 0.6s ease-out";
        ctaRef.current!.style.transform = "translateX(0)";
        ctaRef.current!.style.opacity = "1";
      }, 800);
    }
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href =
      "https://drive.google.com/uc?export=download&id=1eqriu-Od-BhbiuOlX8I8YJr3j-Y2Pshp";
    link.setAttribute("download", "Harish-Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },

    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        ref={navRef}
        className="fixed w-full z-50 bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-2">
            {/* Logo */}
            {/* Logo */}
            {/* Logo */}
            <a
              ref={logoRef}
              href="#hero"
              className="flex flex-col leading-tight hover:opacity-80"
            >
              <span
                className="text-gray-900 
               text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold tracking-tight"
              >
                HARISH ROBIKAR
              </span>
              <span
                className="text-gray-600 
               text-sm sm:text-sm md:text-base lg:text-base tracking-wide sm:tracking-widest"
              >
                Full Stack Developer
              </span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item, i) => (
                <a
                  key={i}
                  ref={(el) => {
                    if (el) linksRef.current[i] = el;
                  }}
                  href={item.href}
                  className={`relative text-sm font-medium transition-all duration-300 group ${
                    activeSection === item.href.replace("#", "")
                      ? "text-[#0071e3]"
                      : "text-gray-600 hover:text-[#0071e3]"
                  }`}
                >
                  {item.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-[#0071e3] transition-all duration-300 ${
                      activeSection === item.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </a>
              ))}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Resume Download Button */}
              <button
                ref={ctaRef}
                onClick={handleDownload}
                className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium bg-gray-900 text-white hover:bg-gray-800 border border-gray-300/20 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 rounded-lg text-gray-900 hover:bg-gray-100"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu Panel */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 w-80 max-w-sm h-full bg-white/95 backdrop-blur-xl shadow-2xl z-50 flex flex-col transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Menu Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <a
            href="#hero"
            className="flex flex-col leading-tight hover:opacity-80"
          >
            <span
              className="text-gray-900 
               text-xl sm:text-xl md:text-2xl lg:text-2xl font-bold tracking-tight"
            >
              HARISH ROBIKAR
            </span>
            <span
              className="text-gray-600 
               text-md sm:text-sm md:text-base lg:text-base tracking-wide sm:tracking-widest"
            >
              Full Stack Developer
            </span>
          </a>

          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors duration-200"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className="flex-1 py-8">
          <nav className="space-y-6 px-6">
            {navItems.map((item, i) => (
              <a
                key={i}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between text-lg font-medium transition-all duration-200 py-2 ${
                  activeSection === item.href.replace("#", "")
                    ? "text-[#0071e3]"
                    : "text-gray-600 hover:text-[#0071e3]"
                }`}
              >
                <span>{item.name}</span>
                <ExternalLink size={18} className="text-gray-400" />
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-6 border-t border-gray-200">
          <button
            className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white py-3 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
            onClick={handleDownload}
          >
            <Download size={18} />
            <span>Download Resume</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
