import React, { useRef } from "react";
import { gsap } from "gsap";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsBox2() {
  const rootRef = useRef(null);
  const circlesRef = useRef([]);

  const skills = [
    { name: "HTML", percent: 95, gradient: ["#f97316", "#ef4444"] },
    { name: "CSS", percent: 90, gradient: ["#3b82f6", "#1e40af"] },
    { name: "JavaScript", percent: 85, gradient: ["#eab308", "#f59e0b"] },
    { name: "React", percent: 90, gradient: ["#38bdf8", "#0284c7"] },
    { name: "TailwindCSS", percent: 88, gradient: ["#06b6d4", "#0891b2"] },
    { name: "Next.js", percent: 80, gradient: ["#6b7280", "#000000"] },
    { name: "Node.js", percent: 85, gradient: ["#22c55e", "#16a34a"] },
    { name: "Express.js", percent: 80, gradient: ["#9ca3af", "#4b5563"] },
    { name: "MongoDB", percent: 85, gradient: ["#34d399", "#059669"] },
  ];

  useGSAP(() => {
    const ctx = gsap.context(() => {
      circlesRef.current.forEach((el, i) => {
        if (!el) return;
        const progress = el.querySelector(".progress");
        const text = el.querySelector(".percent-text");
        if (!progress || !text) return;

        const r = +progress.getAttribute("r") || 54;
        const circumference = 2 * Math.PI * r;

        progress.style.strokeDasharray = circumference;
        progress.style.strokeDashoffset = circumference;

        // Stroke animation
        gsap.to(progress, {
          strokeDashoffset: circumference - (skills[i].percent / 100) * circumference,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        // Counter animation
        const val = { n: 0 };
        gsap.to(val, {
          n: skills[i].percent,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
          onUpdate: () => {
            text.textContent = Math.round(val.n) + "%";
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, [skills]);

  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      ref={rootRef}
      className="bg-white/40 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-xl p-8"
    >
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white text-center mb-8">
        My Skills
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 justify-items-center">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            ref={(el) => (circlesRef.current[i] = el)}
            className="relative flex flex-col items-center"
          >
            <svg
              viewBox="0 0 128 128"
              className="w-28 h-28 sm:w-32 sm:h-32 transform -rotate-90"
            >
              <defs>
                <linearGradient id={`grad-${i}`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor={skill.gradient[0]} />
                  <stop offset="100%" stopColor={skill.gradient[1]} />
                </linearGradient>
              </defs>

              {/* track */}
              <circle
                cx="64"
                cy="64"
                r="54"
                stroke="#e5e7eb"
                strokeWidth="10"
                fill="transparent"
              />

              {/* progress */}
              <circle
                className="progress"
                cx="64"
                cy="64"
                r="54"
                stroke={`url(#grad-${i})`}
                strokeWidth="10"
                strokeLinecap="round"
                fill="transparent"
              />
            </svg>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-50%] flex flex-col items-center">
              <span className="percent-text text-lg font-bold text-gray-800 dark:text-white">
                0%
              </span>
              <span className="text-sm mt-1 text-gray-600 dark:text-gray-300">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
