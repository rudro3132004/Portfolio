import { FiAlignJustify } from "react-icons/fi";
import { GrClose } from "react-icons/gr";
import React, { useState } from 'react'
import ThemeBtn from "./ThemeBtn";
import Navigator from "./Navigator";
import { easeInOut, motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {

  const [ popnav, setPopnav ] = useState(false);


  return (
    <motion.div 
     initial={{ y: -100, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ duration: 1, delay: 0.5 }}
     className="flex justify-between items-center p-2 px-4 shadow-lg   md:px-12 lg:px-[10%] lg:py-1 text-lbg bg-lsecondary dark:bg-lprimary">

        <div className="cursor-pointer font-semibold text-2xl  md:text-3xl hover:text-white/80 duration-300">
            <NavLink to="/Portfolio">Dev.Rudro</NavLink>
        </div>

        {/* Navigator pc size*/}
        <div className="hidden lg:block">
            <Navigator/>
        </div>

        {/* Navigator mobail size */}
        <div className="flex items-center gap-4 relative">
            
            {/* Menu Box */}
            <div className="lg:hidden">
                { !popnav ?
                    <FiAlignJustify className="text-2xl cursor-pointer hover:text-950   md:text-3xl" onClick={() => setPopnav(!popnav)}/> :
                    <GrClose className="text-2xl cursor-pointer hover:text-950   md:text-3xl" onClick={() => setPopnav(!popnav)}/>
                }
            </div>

            <ThemeBtn/>

            {/* Navigator */}
            <div className="">
                { popnav &&
                    <motion.div className={`absolute shadow-md top-10 right-0 lg:hidden`}
                        initial={{ x:100, y: 1, opacity:0 }}
                        animate={{x: 50, opacity:1}}
                        transition={{duration:.8}}
                        exit={{ x:100, y: 3, opacity:0 }}
                    >
                    <Navigator setPopnav={setPopnav} />  
                    </motion.div>
                }
            </div>

        </div>
         
    </motion.div>
  )
}