import React from 'react'
import SkillsSection from '../components/SkillsSection'
import FAQBox from '../components/FAQBox'
import WorkTechnologie from '../components/WorkTechnologie'
import CanvasBackground from './CanvasBackground'

export default function SkillsPage() {
  return (
    <div className='relative overflow-hidden'>
      <CanvasBackground/>
      {/* Skills Section */}
      <div className="lg:h-screen lg:w-[85%] mx-auto flex items-center justify-center shadow-lg dark:shadow-slate-400/10 lg:mb-5 pointer-events-none ">
          <SkillsSection/>
      </div>
      {/* FAQ Page */}
      <div className="lg:h-screen lg:w-[85%] mx-auto flex items-center justify-center shadow-lg dark:shadow-slate-400/10 lg:mb-5 pointer-events-none ">
         <WorkTechnologie/>
      </div>
      {/* FAQ Page */}
      <div className="lg:h-screen lg:w-[85%] mx-auto flex items-center justify-center shadow-lg dark:shadow-slate-400/10 lg:mb-5 pointer-events-none ">
         <FAQBox/>
      </div>
    </div>
  )
}
