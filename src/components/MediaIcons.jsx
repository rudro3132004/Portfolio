import React from "react";
import { motion } from "motion/react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function MediaIcons() {
  const icons = [
    { id: 1, icon: <FaLinkedin />, color: "text-sky-500", href: "https://www.linkedin.com/in/rudro-boiragi-05697831b/"  },
    { id: 2, icon: <FaGithub />, color: "text-black dark:text-white", href: "https://github.com/rudro3132004" },
    { id: 3, icon: <FaYoutube />, color: "text-red-600", href: "https://www.youtube.com/@ProgrammingWorld-f1z" },
    { id: 4, icon: <FaXTwitter />, color: "text-gray-800 dark:text-gray-200", href: "https://x.com/rudrobairagi231" },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 70, delay: 2 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 mr-5 z-10 hidden lg:flex"
    >
      <div className="flex flex-col items-center gap-5 p-4 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md shadow-lg border border-black/10 dark:border-white/20">
        {icons.map(({ id, icon, color, href }) => (
          <motion.a
            href={href}
            key={id}
            whileHover={{ scale: 1.3, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className={`cursor-pointer text-3xl transition-colors duration-300 ${color}`}
          >
            {icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
