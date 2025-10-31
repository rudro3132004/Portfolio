import React, { useRef } from "react";
import img2 from "../assets/imge2.png";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
  gsap.registerPlugin(SplitText, ScrollTrigger);

export default function AboutMe() {
  const textRef = useRef(null);
  const allTextRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "words,chars" });

    // Heading Animation
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

    // Text Box Animation
    gsap.from(allTextRef.current, {
      y: 50,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        scroller: "body",
        start: "top 50%",
        end: "bottom 30%",
        toggleActions: "play none none",
      },
    });

    // Individual Text Lines Animation
    gsap.from(allTextRef.current.querySelectorAll("h4, p"), {
      y: 50,
      opacity: 0,
      delay: 0.5,
      stagger: 0.2,
      scrollTrigger: {
        trigger: textRef.current,
        scroller: "body",
        start: "top 50%",
        end: "bottom 30%",
        toggleActions: "play none none",
      },
    });

    // Image Animation
    gsap.from(imageRef.current, {
      y: 50,
      opacity: 0,
      delay: 0.5,
      scrollTrigger: {
        trigger: textRef.current,
        scroller: "body",
        start: "top 50%",
        end: "bottom 30%",
        toggleActions: "play none none",
      },
    });
  }, []);

  return (
    <section className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-10">
      {/* Section Heading */}
      <div className="flex justify-center items-center mb-14">
        <h1
          ref={textRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white border-b-4 border-lprimary inline-block pb-3 px-4 text-center"
        >
          About Me
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row justify-between gap-5 mx-auto">
        {/* Image */}
        <div ref={imageRef} className="hidden lg:flex justify-center items-center lg:w-1/2 ">
          <img
            
            src={img2}
            alt="Rudro"
            className="w-full max-w-[550px] h-full rounded-3xl border-4 border-gray-300 shadow-lg object-cover transform transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Text Box */}
        <div
          ref={allTextRef}
          className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-2xl shadow-md"
        >
          <h4 className="text-2xl sm:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Hi, I’m Rudro 👋
          </h4>

          <p className="text-md sm:text-[17px] lg:text-lg mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a passionate MERN Stack Developer with strong expertise in building modern, scalable, and user-friendly web applications. I enjoy turning complex problems into simple, elegant solutions using technologies like React, Next.js, Node.js, Express.js, and MongoDB.
          </p>

          <p className="text-md sm:text-[17px] lg:text-lg mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            Along with strong frontend and backend skills, I also focus on creating seamless user experiences with responsive design, performance optimization, and clean code practices.
          </p>

          <p className="text-md sm:text-[17px] lg:text-lg mb-4 text-gray-700 dark:text-gray-300 leading-relaxed">
            My Goal: To work with international clients and companies as a remote web developer, contribute to impactful projects, and continuously grow my skills in the ever-evolving tech industry.
          </p>

          <p className="text-sm sm:text-md lg:text-[18px] text-gray-600 dark:text-gray-400 leading-relaxed">
            💻 Skilled in React, Next.js, Node.js, Express.js, MongoDB, TailwindCSS
            <br />
            ⚡ Experience in REST APIs, Authentication (JWT), and Git/GitHub workflows
            <br />
            🎨 Passionate about UI/UX design and smooth user experience
            <br />
            🌍 Interested in remote opportunities and freelance projects
          </p>
        </div>
      </div>
    </section>
  );
}
