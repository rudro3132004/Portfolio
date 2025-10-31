import React, { useState } from 'react'
import HeroText from '../components/HeroText'
import HeroImage from '../components/HeroImage'
import AboutMe from '../components/AboutMe';
import FAQBox from '../components/FAQBox';
import WhatIDo from '../components/WhatIDo';

export default function Homepage() {

    const [hoverCount, setHoverCount] = useState(0);
    
  return (
    <div>

      {/* Hero page */}
        <div onMouseMove={(e)=>{setHoverCount(e)}} className="lg:h-screen lg:w-[85%] mx-auto lg:flex lg:items-center lg:justify-center lg:gap-10 shadow-lg lg:mb-5">
          <HeroText/>
          <HeroImage hoverCount={hoverCount}/>
        </div>
        {/* About Page */}
        <div className="lg:h-screen lg:w-[85%] mx-auto flex items-center justify-center shadow-lg lg:mb-5">
          <AboutMe/>
        </div>
        {/* What I Do Page */}
        <div className="lg:h-screen lg:w-[85%] mx-auto flex items-center justify-center shadow-lg lg:mb-5">
           <WhatIDo/>
        </div>
        {/* FAQ Page */}
        <div className="lg:h-screen lg:w-[85%] mx-auto flex items-center justify-center shadow-lg lg:mb-5">
           <FAQBox/>
        </div>

    </div>
  )
}
