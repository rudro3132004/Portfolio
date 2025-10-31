import React, { useRef, useState } from 'react'
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { NavLink } from 'react-router-dom';

export default function HeroText() {

  
  const [text] = useTypewriter({
        words: ['Designer', 'Developer', 'Programmer', 'Coder'],
        typeSpeed: 120,
        deleteSpeed: 80,
        loop: 0
  });

    const containerRef = useRef(null);
    useGSAP(() => {
       gsap.from( containerRef.current.querySelectorAll('h1, p'), {
          y: 50,
          direction: 1,
            opacity: 0,
            delay: 0.5,
            stagger: 0.2,
            repeat: 0,
       })
    })

  return (
    <div className='py-16 px-3  sm:px-8 lg:mb-12 lg:w-1/2 lg:overflow-hidden'>

        <div ref={containerRef} className="space-y-3">
            <p className='text-3xl font-semibold  lg:text-3xl'>Hi,</p>
            <p className='text-3xl font-semibold  lg:text-4xl'>I'm Rudro, a</p>
            <p className='text-5xl font-semibold  lg:text-6xl'>Full-Stack</p>
            <h1 className='text-[46px] font-bold text-dprimary whitespace-nowrap overflow-hidden   lg:text-[78px]'>Web {text} <Cursor cursorStyle='|' cursorColor='#0A8FFF' /> </h1>

            <p className='text-lg font-semibold mb-2 sm:text-xl mt-5 lg:mt-8 lg:text-2xl'>Building robust, scalable, and user-friendly web applications. </p>
            <p className='text-sm font-semibold sm:text-[16px] sm:text-xl'>I specialize in building dynamic and responsive web applications using technologies like React, Next.js, Node.js, and MongoDB. With a passion for clean code and scalable systems, I help businesses bring their digital ideas to life.</p>
        </div>
        
        <motion.div className="lg:mt-8 mt-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
        >
            <NavLink to={'/contact'} className='cursor-pointer duration-300  px-6 py-3 bg-lprimary text-white rounded-md font-semibold hover:bg-lsecondary transition'>Contact Me</NavLink>
            <NavLink to={'/projects'} className='cursor-pointer duration-300 ml-4 px-6 py-3 border-2 border-lprimary text-dprimary rounded-md font-semibold hover:bg-lsecondary hover:text-white transition'>See My Work</NavLink>
        </motion.div>
       
    </div>
  )
}
