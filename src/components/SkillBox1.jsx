import React from 'react'
import { motion } from "motion/react";

export default function SkillBox1() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-white/40  dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg p-5">
          <h3 className="text-2xl font-semibold mb-6 text-gray-700 dark:text-gray-200">
            Expertise Areas
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2 mb-5">
                {["HTML", "CSS", "JavaScript", "React", "TailwindCSS", "Next.js", "Motion", "GSAP", "dasi Ui", "Next Ui", "Bootstrap"].map(
                  (t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-sm rounded-full bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 mb-1"
                    >
                      #{t}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Backend */}
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">
                Backend
              </h4>
              <div className="flex flex-wrap gap-2 ">
                {["Node.js", "Express.js", "REST API", "JWT", "bcrypt", "ejs", "Express validator", "Socket.io", "google-auth20", "facebook-oauth"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200 mb-1"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700">
              <h4 className="font-semibold mb-3 text-gray-800 dark:text-gray-100">
                Database
              </h4>
              <div className="flex flex-wrap gap-2">
                {["MongoDB", "Mongoose", "Aggregation"].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-200"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>

    </motion.div>    
  )
}
