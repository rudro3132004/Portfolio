import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Database, Layout, Server } from "lucide-react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function WhatIDo() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const ptextRef = useRef(null);

  useGSAP(() => {
    // Split heading into characters
    const split = new SplitText(textRef.current, { type: "words,chars" });
    // Animate heading characters
    gsap.from(split.chars, {
      duration: 0.5,
      opacity: 0,
      y: 20,
      stagger: 0.05,
      ease: "power2.out",
      scrollTrigger: {
        trigger: textRef.current,
        scroller: "body",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none",
      },
    });
    // Animate tagline
    gsap.from(ptextRef.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        scroller: "body",
        start: "top 80%",
        end: "bottom 60%",
        toggleActions: "play none none ",
      },
    });
    // Animate cards
    gsap.from(containerRef.current.querySelectorAll(".faq-card"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
      delay: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        scroller: "body",
        start: "top 50%",
        end: "bottom 30%",
        toggleActions: "play none none ",
      },
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center px-0 py-16 ">
      {/* Section Heading */}
      <h2
        ref={textRef}
        className="inline-block pb-3 px-8 lg:px-10 text-center text-3xl font-bold sm:text-4xl lg:mb-6 lg:text-5xl border-b-4 border-lprimary mb-3"
      >
        What I Do
      </h2>

      {/* Tagline */}
      <p
        ref={ptextRef}
        className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl text-center"
      >
        I build scalable and modern web applications using the MERN stack – 
        delivering complete solutions from frontend to backend.
      </p>

      {/* Cards */}
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl"
      >
        {/* Frontend */}
        <div className="faq-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mx-2">
          <Layout className="w-12 h-12 text-indigo-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Frontend Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Crafting responsive and interactive UIs with 
            <strong> React, Next.js, Tailwind CSS</strong>. 
            Optimized for speed and accessibility.
          </p>
        </div>

        {/* Backend */}
        <div className="faq-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mx-2">
          <Server className="w-12 h-12 text-green-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Backend Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Building robust backends using <strong>Node.js & Express.js</strong>. 
            Handling APIs, authentication & integrations.
          </p>
        </div>

        {/* Database */}
        <div className="faq-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mx-2">
          <Database className="w-12 h-12 text-yellow-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Database Management
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Managing <strong>MongoDB</strong> with efficient schema design, indexing, 
            and queries to ensure performance & scalability.
          </p>
        </div>

        {/* Full Stack */}
        <div className="faq-card bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mx-2">
          <Code className="w-12 h-12 text-red-500 mb-4" />
          <h3 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100">
            Full Stack Projects
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
            Delivering complete <strong>MERN stack solutions</strong> – 
            from design to deployment.
          </p>
        </div>
      </div>
    </div>
  );
}
