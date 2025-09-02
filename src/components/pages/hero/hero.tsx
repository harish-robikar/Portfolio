/* eslint-disable react/no-unescaped-entities */
"use client";

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null); // <-- fixed
  const backgroundRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set(
        [
          textRef.current,
          subtitleRef.current,
          buttonsRef.current,
          stackRef.current,
        ],
        {
          opacity: 0,
          y: 60,
        }
      );

      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 0.8,
        rotation: 5,
      });

      if (circleRef.current) {
        gsap.set(Array.from(circleRef.current.children), {
          scale: 0,
          opacity: 0,
        });
      }

      // Main timeline
      const tl = gsap.timeline({
        delay: 0.3,
      });

      // Animate background circles first
      if (circleRef.current) {
        tl.to(Array.from(circleRef.current.children), {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          stagger: 0.3,
          ease: "back.out(1.4)",
        });
      }
      // Animate main heading
      tl.to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=1"
      )
        // Animate subtitle
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        // Animate tech stack
        .to(
          stackRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        // Animate buttons
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        // Animate image
        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 1.4,
            ease: "power3.out",
          },
          "-=1"
        );

      // Floating animation for the image
      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5,
      });

      // Parallax effect on scroll
      gsap.to(backgroundRef.current, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Button hover animations
      const buttons = buttonsRef.current?.querySelectorAll("a");
      buttons?.forEach((button) => {
        button.addEventListener("mouseenter", () => {
          gsap.to(button, {
            scale: 1.03,
            y: -2,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.4,
            ease: "power2.out",
          });
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[650px]  w-full bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden flex items-center"
    >
      <div
        ref={backgroundRef}
        className="absolute inset-0 pointer-events-none overflow-hidden "
      >
        <div ref={circleRef} className="absolute inset-0 overflow-hidden ">
          <div className="absolute top-0 left-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-full blur-3xl opacity-40 -translate-x-20 sm:-translate-x-32 md:-translate-x-48 lg:-translate-x-64 -translate-y-20 sm:-translate-y-32 md:-translate-y-48 lg:-translate-y-64"></div>

          <div className="absolute top-1/3 right-0 w-[180px] h-[180px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] bg-gradient-to-br from-emerald-50 via-cyan-50 to-blue-50 rounded-full blur-3xl opacity-35 translate-x-16 sm:translate-x-24 md:translate-x-32 lg:translate-x-40"></div>

          <div className="absolute bottom-0 left-1/2 w-[160px] h-[160px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50 rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-20 sm:translate-y-24 md:translate-y-32 lg:translate-y-40"></div>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 xl:px-8 box-border">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center py-12 sm:py-16 md:py-16 lg:py-16">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-8 md:space-y-10 order-2 lg:order-1 mt-12">
            <div ref={textRef} className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-6xl xl:text-6xl font-bold tracking-tight leading-none text-gray-900">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Poft Floi
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <div ref={subtitleRef} className="space-y-3 sm:space-y-4">
              <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-gray-800 leading-tight">
                MERN Stack Developer
              </p>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-full sm:max-w-2xl mx-auto lg:mx-0 font-light">
                Crafting scalable web applications with modern JavaScript
                technologies and seamless user experiences.
              </p>
            </div>

            {/* Tech Stack */}
            <div ref={stackRef} className="space-y-4 sm:space-y-6">
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
                {["MongoDB", "Express.js", "Next.js", "Node.js"].map(
                  (tech, index) => (
                    <span
                      key={tech}
                      className="px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 lg:px-6 lg:py-3 bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-full text-gray-700 font-medium text-xs sm:text-sm md:text-base shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start items-stretch sm:items-center pt-2 sm:pt-4 w-full"
            >
              <a
                href="#projects"
                className="group relative inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-medium text-white bg-black rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] max-w-full"
              >
                <span className="relative z-10">View My Work</span>
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-base sm:text-lg font-medium text-black bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto sm:min-w-[180px] md:min-w-[200px] max-w-full"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </div>

          {/* Right Side - Visual */}
          <div className="relative order-1 lg:order-2 flex justify-center items-center">
            <div
              ref={imageRef}
              className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl aspect-square"
            >
              {/* Main visual container */}
              <div className="relative w-full h-full mt-12 md:mt-0 lg:mt-0 xl:mt-0 sm:mt-8">
                {/* Central developer avatar */}
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center shadow-2xl border-4 border-white/20">
                    <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
                      PF
                    </span>
                
                  </div>
                </div> */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-[300px] h-[300px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[500px] xl:h-[500px]
    bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center shadow-2xl border-4 border-white/20
    relative overflow-hidden rounded-full"
                  >
                    <Image
                      src="/port.jpg"
                      alt="Profile Image"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>

                {/* Decorative elements - responsive positioning and sizing */}
                <div className="absolute top-8 sm:top-12 md:top-16 right-6 sm:right-8 md:right-12 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-blue-500 rounded-full opacity-60"></div>
                <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-8 sm:left-12 md:left-16 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-purple-500 rounded-full opacity-60"></div>
                <div className="absolute top-20 sm:top-24 md:top-32 left-4 sm:left-6 md:left-8 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-indigo-500 rounded-full opacity-60"></div>
                <div className="absolute bottom-20 sm:bottom-24 md:bottom-32 right-6 sm:right-8 md:right-12 w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 bg-cyan-500 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
