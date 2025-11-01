import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import portfolioImage from "../assets/portfolio.png";
import blogImage from "../assets/blog.png";
import todoImage from "../assets/todo.png";
import wathchImage from "../assets/wather.png";

gsap.registerPlugin(SplitText);

export default function ProjectsPage() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      const split = new SplitText(textRef.current, { type: "words,chars" });

      // Animate heading
      gsap.from(split.chars, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
      });

      // Animate project boxes
      gsap.from(".project-box", {
        opacity: 0,
        scale: 0.9,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      image: portfolioImage,
      title: "My Portfolio Website",
      type: "Frontend",
      description:
        "A personal portfolio website to showcase my projects and skills.",
      technologies: ["React", "Tailwind", "Motion", "GSAP", " Lenis"],
      link: "https://rudro3132004.github.io/Portfolio/",
    },
    {
      id: 2,
      image: blogImage,
      title: "Blog Website",
      type: "Frontend",
      description:
        "A clean and minimal blog website to share articles and tutorials.",
      technologies: ["React", "Tailwind", "Motion", " Lenis", "react icon", "swiper"],
      link: "https://rudro3132004.github.io/Blog",
    },
    {
      id: 3,
      image: todoImage,
      title: "Todo App",
      type: "Frontend",
      description:
        "A simple and effective Todo application to manage daily tasks.",
      technologies: ["React", "Tailwind", "Motion", "React-icon"],
      link: "https://rudro3132004.github.io/Todo/",
    },
    {
      id: 4,
      image: wathchImage,
      title: "Weather App",
      type: "Frontend",
      description:
        " A weather application that provides real-time weather updates for any location.",
      technologies: ["React", "Tailwind", "Motion", "React-icon", "axios", "react-hot-toast"],
      link: "https://rudro3132004.github.io/WatherApp/",
    },
  ];

  return (
    <div
      ref={sectionRef}
      className="w-full h-fit md:py-20 flex flex-col items-center justify-center"
    > 
      {/* Section Heading */}
      <div className="flex justify-center items-center mb-16">
        <h1
          ref={textRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white border-b-4 border-lprimary inline-block pb-3 px-4 text-center lg:mb-20"
        >
          🚀 My Projects
        </h1>
      </div>

      {/* Projects */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 1;

        return (
          <div
            key={project.id}
            className="project-box flex flex-col xl:flex-row justify-between items-stretch w-[92%] md:w-[75%] mb-10 lg:mb-32 border-2 border-gray-300 dark:border-gray-600 p-2 rounded-2xl lg:border-0 lg:p-0"
          >
            {/* Image Box */}
            <div
              className={`relative group w-full lg:w-1/2 flex mb-5 lg:mb-0 ${
                isEven ? "md:order-2 justify-end" : "md:order-1 justify-start"
              }`}
            >
              <div className="relative h-[200px] md:h-[320px] w-full max-w-[650px] aspect-video rounded-xl overflow-hidden bg-black shadow-2xl border-2 border-gray-300 dark:border-gray-700">
                {/* Fake laptop top bar */}
                <div className="absolute top-0 left-0 w-full h-6 bg-gray-800 flex items-center px-3 gap-2 z-10">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>

                {/* Project Image */}
                <a href={project.link}>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </a>

                {/* Hover Overlay */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/70 to-black/60 flex items-center justify-center opacity-0 -translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg shadow-lg"
                  >
                    🔗 View Website
                  </a>
                </div>
              </div>
            </div>

            {/* Content Box */}
            <div
              className={`w-full lg:w-1/2 border border-cyan-500/20 rounded-2xl p-8 md:p-10 lg:shadow-2xl flex flex-col justify-center transition-transform duration-300 hover:scale-[1.02] ${
                isEven ? "md:order-1" : "md:order-2"
              }`}
            >
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-extrabold mb-3 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {project.title}
              </h3>

              {/* Type */}
              <p className="text-cyan-400 text-xs md:text-sm mb-5 uppercase tracking-widest font-semibold">
                {project.type}
              </p>

              {/* Description */}
              <p className="mb-6 text-gray-300 leading-relaxed text-sm md:text-base">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs md:text-sm font-medium rounded-full shadow-md transition-all"
                  >
                    #{tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
