'use client';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCurve from './projects-curve';
import StaggerText from './stagger-text';


export default function ProjectDesc({
  projectSelected,
  handleCloseProject,
  mouseLeave,
  bgEnter
}: {
  projectSelected: {[key: string]: any} | null;
  handleCloseProject: () => void;
  mouseLeave: () => void;
  bgEnter: () => void;
}) {
  
  const slideIn = {
    initial: {x: "calc(100% + 100px)"},
    enter: {x: "0", transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1]}},
    exit: {x: "calc(100% + 100px)", transition: {duration: 0.5, ease: [0.76, 0, 0.24, 1]}}
  }

  return (
    <motion.div className='flex flex-row relative'>
      <ProjectCurve projectSelected={projectSelected} />
      <AnimatePresence mode='wait'>

     { projectSelected && <motion.div 
        className='w-[100vw] bg-black h-[100vh] text-white ml-[100px] font-body p-8 flex flex-col items-center justify-center mb-12'
        onMouseEnter={bgEnter} onMouseLeave={mouseLeave}
        >
            <motion.div
              key={projectSelected.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
              exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
            >
              <div >
                <h1 className='text-4xl font-bold'>{projectSelected['name']}</h1>
                <h3 className='text-xl ml-0.5 italic'>{projectSelected['date']}</h3>
                <p className='ml-0.5 mt-8'>{projectSelected['description']}</p>
                <div className='flex flex-row gap-4 mt-8'>
                  <p className='font-bold'>Links: </p>
                  {
                    projectSelected['links'] && projectSelected['links'].length > 0 && (
                      projectSelected['links'].map((link: { link_name: string; link: string }, index: number) => {
                        return (
                          <StaggerText key={index} link={link} />
                        )
                        })
                    )
                  }
                </div>

                <div className='flex flex-row gap-2'>
                  <p className='font-bold mr-2'>Skills: </p>
                  {
                    projectSelected['skills'] && projectSelected['skills'].length > 0 && (
                      projectSelected['skills'].map((skill: string, index: number) => {
                        return (
                          <span key={index} className=' '>{skill}</span>
                        )
                      })
                    )
                  }
                </div>
              </div>

              
            </motion.div>
            
          
        </motion.div>}
        </AnimatePresence>
    </motion.div>
  )
}