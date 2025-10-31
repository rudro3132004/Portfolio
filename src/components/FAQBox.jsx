import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import FAQAccordion from "./FAQAccordion";
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function FAQBox() {
  const textRef = useRef(null);
  const containerRef = useRef(null);
  const ptextRef = useRef(null);
  

  useGSAP(() => {
    const split = new SplitText(textRef.current, { type: "words,chars" });
    // Animate heading
    gsap.from(split.chars, {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
            trigger: textRef.current, 
            scroller: 'body',
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none",
        }
    });
    // Animate paragraph
    gsap.from( ptextRef.current, {
      y: 50,
      direction: 2,
        opacity: 0,
        delay: 0.5,
        scrollTrigger: {
            trigger: textRef.current,
            scroller: 'body',
            start: "top 80%",
            end: "bottom 60%",
            toggleActions: "play none none",
        }
    })
    // Animate FAQ cards one by one
    gsap.from(containerRef.current.querySelectorAll(".faq-card"), {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2, // delay between each
      delay: 0.5,
      scrollTrigger: {
        trigger: textRef.current, 
        scroller: 'body',
        start: "top 50%",
        end: "bottom 30%",
        toggleActions: "play none none",
      }
    });
  }, []);

  return (
    <div className="w-full h-fit py-10 lg:py-0 lg:h-screen flex flex-col justify-center items-center">
      {/* Heading */}
      <div className="flex flex-col justify-center items-center py-2">
        <h1
          ref={textRef}
          className="inline-block pb-3 px-8 lg:px-10 text-center text-3xl font-bold sm:text-4xl lg:mb-6 lg:text-5xl border-b-4 border-lprimary "
        >
          Your Questions
        </h1>
        <p ref={ptextRef} className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-3xl text-center">
          The MERN stack combines MongoDB, Express.js, React, and Node.js to
          create a powerful JavaScript-based framework for building full-stack
          web applications. MongoDB handles data storage, Express and Node power
          the backend, and React builds dynamic, interactive UIs. This stack
          allows for fast, scalable development with a single language across
          the entire application.
        </p>
      </div>

      {/* FAQ Section */}
      <div
        ref={containerRef}
        className="lg:flex justify-between items-start lg:gap-10 lg:w-[85%] mx-auto my-5 px-3 lg:px-5"
      >
        {/* Left column */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="faq-card">
            <FAQAccordion
              question="What is the MERM Stack?"
              answer="The MERM stack is a set of technologies used for building web applications. MERM stands for MongoDB, Express, React, and MySQL. MongoDB is a NoSQL database, MySQL is a relational database, Express is a backend framework, and React is a frontend library. This combination allows developers to build scalable and efficient applications with both relational and non-relational data handling."
            />
          </div>
          <div className="faq-card">
            <FAQAccordion
              question="How does the MERM Stack differ from the MERN Stack?"
              answer="The MERN stack uses MongoDB, Express, React, and Node.js, while the MERM stack swaps MySQL for Node.js. In MERM, you can use either MongoDB or MySQL depending on the data structure needs. MongoDB is ideal for flexible, schema-less data, while MySQL is structured, making it suitable for relational data."
            />
          </div>
          <div className="faq-card">
            <FAQAccordion
              question="Why choose MERM over other stacks?"
              answer="MERM offers flexibility. You can use MongoDB for data that doesn’t require strict relationships and MySQL for structured, relational data. This hybrid model allows applications to leverage the advantages of both NoSQL and SQL, potentially improving performance, scalability, and data management options."
            />
          </div>
        </div>

        {/* Right column */}
        <div className="w-full lg:w-1/2 space-y-6 mt-10 lg:mt-0">
          <div className="faq-card">
            <FAQAccordion
              question="What are the benefits of using React in MERM?"
              answer="React is a popular frontend library for building user interfaces. It is efficient, allows for reusable components, and helps create interactive UIs with a responsive user experience. React’s component-based architecture also makes it easy to maintain and scale applications."
            />
          </div>
          <div className="faq-card">
            <FAQAccordion
              question="How does MERM handle data security?"
              answer="Security in MERM can be managed through the Express middleware, MySQL and MongoDB’s built-in security features, and best practices for securing React apps. This includes authentication, input validation, encryption, and secure API endpoints."
            />
          </div>
          <div className="faq-card">
            <FAQAccordion
              question="What types of applications are best suited for the MERM stack?"
              answer="MERM is versatile and can handle e-commerce platforms, social networks, content management systems, and more. It is ideal for applications requiring a mix of relational and non-relational data or needing to handle a large volume of data efficiently."
            />
          </div>
        </div>
      </div>
    </div>
  );
}
