import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'motion/react'
import img1 from '../assets/image1.jpeg'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function HeroImage({ hoverCount }) {

    const [xVal, setxVal] = useState(0);
    const [yVal, setyVal] = useState(0);
    const imageRef = useRef(null);
    
    useEffect(() => {
        if(hoverCount.clientX && hoverCount.clientY){
        let e = hoverCount;
        setxVal((e.clientX - imageRef.current.getBoundingClientRect().x - imageRef.current.getBoundingClientRect().width / 2)/ 40);
        setyVal(-(e.clientY - imageRef.current.getBoundingClientRect().y - imageRef.current.getBoundingClientRect().height / 2)/ 40);
        }
    }, [hoverCount])

    useGSAP(() => {
        gsap.to(imageRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
        ease: "elastic.out(1, 0.3),",
        })
    }, [xVal, yVal])


  return (
    <div id='praspactive' className='w-full py-12 px-3  sm:px-8 flex justify-center items-center lg:w-1/2'>
        <motion.div
        ref={imageRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-[90%] sm:w-[75%] mx-auto rounded-full overflow-hidden shadow-lg mb-10 sm:mx-8 md:mx-16 lg:mx-[10%] border-4  border-dprimary md:border-6">
            <img src={img1} alt="Hero Image" className='w-full h-auto'/>
        </motion.div>
    </div>
  )
}
