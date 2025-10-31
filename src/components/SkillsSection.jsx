import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import CanvasBackground from "../page/CanvasBackground";
import SkillBox1 from "./SkillBox1";
import SkillsBox2 from "./SkillsBox2";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function SkillsSection() {

    const textRef = useRef(null);
    useGSAP(() => {
        const split = new SplitText(textRef.current, { type: "words,chars" });
        // Heading Animation
        gsap.from(split.chars, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.5,
        });
    }, []);

  return (
    <section
      className="w-full flex flex-col items-center justify-center px-6 xl:py-16 mb-8"
    >
      
      {/* Section Heading */}
      <div ref={textRef} className="flex justify-center items-center mb-18 z-30 pointer-events-none">
        <h1
          // ref={textRef}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white border-b-4 border-lprimary inline-block pb-3 px-4 text-center"
        >
          My Skills
        </h1>
      </div>

      <div className="w-full mx-auto grid xl:grid-cols-2 gap-10 z-10 pointer-events-none">
        {/* Left: 3-column categories with tag chips */}
        <SkillBox1/>
        {/* Right: Circle grid */}
        <SkillsBox2 />
      </div>

    </section>
  );
}
