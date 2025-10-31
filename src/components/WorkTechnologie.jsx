import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaAws, FaBootstrap  } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiExpress, SiTailwindcss, SiFirebase, SiSocketdotio, SiNextui  } from "react-icons/si";
import { MdApi } from "react-icons/md";
import { TbBrandJavascript } from "react-icons/tb";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function WorkTechnologie() {
  const rootRef = useRef(null);
    const textRef = useRef(null);
    const ptextRef = useRef(null);

  const technologies = [
    {
      title: "HTML, CSS, JavaScript",
      description:
        "Strong foundation in semantic HTML, modern CSS, and JavaScript for building interactive UIs.",
      icons: [
        { Icon: FaHtml5, color: "#E34F26" },
        { Icon: FaCss3Alt, color: "#1572B6" },
        { Icon: FaJs, color: "#F7DF1E" },
      ],
    },
    {
      title: "React.js & Next.js",
      description: "Building dynamic, responsive, and SEO-friendly apps with React & Next.js.",
      icons: [
        { Icon: FaReact, color: "#61DAFB" },
        { Icon: SiNextdotjs, color: "#000000" },
      ],
    },
    {
      title: "Node.js, Express & MongoDB",
      description: "Backend expertise with Node.js, Express & MongoDB.",
      icons: [
        { Icon: FaNodeJs, color: "#339933" },
        { Icon: SiExpress, color: "#000000" },
        { Icon: SiMongodb, color: "#47A248" },
      ],
    },
    {
      title: "UI Libraries & Animation",
      description: "TailwindCSS, GSAP animations, and WebSocket for real-time communication.",
      icons: [
        { Icon: SiTailwindcss, color: "#06B6D4" },
        { Icon: FaBootstrap , color: "#be2edd" },
        { Icon: SiSocketdotio, color: "#010101" },
        { Icon: SiNextui, color: "#010101" },
      ],
    },
    {
      title: "REST API & Authentication",
      description: "Secure REST APIs, JWT authentication, and Socket.io integration.",
      icons: [
        { Icon: MdApi, color: "#FF6F00" },
        { Icon: TbBrandJavascript, color: "#F7DF1E" },
        { Icon: SiSocketdotio, color: "#010101" },
      ],
    },
    {
      title: "Mongoose, Firebase, AWS",
      description: "Schemas with Mongoose, Firebase hosting/auth, and AWS (S3, EC2, Lambda).",
      icons: [
        { Icon: SiFirebase, color: "#FFCA28" },
        { Icon: FaAws, color: "#FF9900" },
      ],
    },
  ];

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll('.tech-card'));

    if (!('IntersectionObserver' in window)) {
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.classList.remove('opacity-0', 'translate-y-8');
          card.classList.add('opacity-100', 'translate-y-0');
        }, i * 120);
      });
      return;
    }

    cards.forEach((c, i) => (c.dataset.index = String(i)));

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const idx = Number(el.dataset.index || 0);
          el.style.transitionDelay = `${idx * 0.12}s`;
          el.classList.remove('opacity-0', 'translate-y-8');
          el.classList.add('opacity-100', 'translate-y-0');
          obs.unobserve(el);
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.18,
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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
  }, []);
  return (
    <section
      ref={rootRef}
      className="w-full min-h-screen flex flex-col items-center py-14 z-30"
      aria-labelledby="tech-heading"
    >

      <h2 ref={textRef} className="inline-block pb-3 px-8 lg:px-10 text-center text-3xl font-bold sm:text-4xl lg:mb-6 lg:text-5xl border-b-4 border-lprimary mb-3"
      >
        My Work Technologies
      </h2>
      {/* Tagline */}
      <p ref={ptextRef} className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl text-center">
        MERN Wizard ⚡ Crafting Seamless Web Experiences
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-16 w-11/12 max-w-7xl">
        {technologies.map((tech, idx) => (
          <article
            key={idx}
            role="article"
            className={`tech-card opacity-0 translate-y-8 transform transition-all duration-700 ease-out p-8 rounded-2xl bg-white dark:bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 text-center will-change-transform`}
          >
            <div className="flex justify-center space-x-4 text-5xl mb-5">
              {tech.icons.map(({ Icon, color }, i) => (
                <Icon key={i} style={{ color }} className="inline-block drop-shadow" aria-hidden />
              ))}
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-3">{tech.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">{tech.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}