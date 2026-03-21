"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Contact from "@/components/contact/contact";
import About from "@/components/pages/about/about";
import Education from "@/components/pages/education/education";
import Experience from "@/components/pages/experience/experience";
import Hero from "@/components/pages/hero/hero";
import Projects from "@/components/pages/project/project";
import Skills from "@/components/pages/skills/skills";
import Navbar from "@/components/global/navbar";
import Footer from "@/components/global/footer";
import SplashLoader from "@/components/global/loader";

export default function Page() {
  const [loading, setLoading] = useState(true);

  // Use useEffect to prevent scroll during loading
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [loading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <SplashLoader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <main className="flex flex-col min-h-screen">
            <section id="hero"><Hero /></section>
            <section id="about"><About /></section>
            <section id="skills"><Skills /></section>
            <section id="education"><Education /></section>
            <section id="projects"><Projects /></section>
            <section id="experience"><Experience /></section>
            <section id="contact"><Contact /></section>
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
