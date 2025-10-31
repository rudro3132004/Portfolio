// SimpleFAQ.jsx
import React, { useState } from "react";

export default function FAQAccordion({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
   <div className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 shadow p-6 mb-3 lg:mb-5">

        <button
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center text-left text-lg font-medium text-gray-800 dark:text-gray-200 cursor-pointer focus:outline-none"
        >
          <span>{question}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 transform transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ${
            open ? "max-h-40 mt-4" : "max-h-0"
          }`}
        >
          <p className="text-gray-600 dark:text-gray-300">
            {answer}
          </p>
        </div>

   </div>
  );
}
