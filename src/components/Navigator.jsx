import React from "react";
import { NavLink } from "react-router-dom";

export default function Navigator({setPopnav}) {
  const navItems = [
    { name: "Home", path: "/Portfolio" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-lsecondary dark:bg-lprimary lg:bg-transparent w-80 h-screen lg:h-auto lg:w-auto shadow-lg lg:shadow-none">
      <ul className="p-5 px-14 text-lg lg:flex gap-10 lg:p-3 lg:px-8 justify-center">
        {navItems.map((item) => (
          <li key={item.name}>
            <NavLink
              onClick={() => setPopnav && setPopnav(false)}
              to={item.path}
              className={({ isActive }) =>
                `relative text-xl block mb-5 border-b-3 px-5 lg:border-0 lg:px-0 lg:text-md lg:mb-0 lg:inline-block cursor-pointer transition-all duration-300 ease-in-out 
                hover:scale-110 hover:text-slate-50 dark:hover:text-slate-50
                ${isActive ? "text-white dark:text-indigo-100 font-semibold" : "text-indigo-100 dark:text-indigo-200"}`
              }
            >
              {item.name}
              {/* underline animation */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}