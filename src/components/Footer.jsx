import React from "react";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const socialLinks = [
    { id: 1, icon: <FaLinkedin />, url: "https://www.linkedin.com/in/rudro-boiragi-05697831b/" },
    { id: 2, icon: <FaGithub />, url: "https://github.com/rudro3132004" },
    { id: 3, icon: <FaYoutube />, url: "https://www.youtube.com/@ProgrammingWorld-f1z" },
    { id: 4, icon: <FaXTwitter />, url: "https://x.com/rudrobairagi231" },
  ];

  return (
    <footer className="bg-zinc-100 dark:bg-gray-950 py-8">
      <div className="max-w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Social Icons */}
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-gray-100 text-2xl transition-transform duration-200 hover:scale-125 hover:text-lprimary"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-600 dark:text-gray-400 text-sm mt-4 md:mt-0">
          &copy; {new Date().getFullYear()} Rudro Bairagi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
