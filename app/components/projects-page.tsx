import { motion, AnimatePresence } from 'framer-motion';
import Project from './projects';
import ProjectDesc from './project-desc';
import { link } from 'fs';
import { useState } from 'react';


export default function ProjectsPage({
  mouseEnter,
  mouseLeave,
  bgEnter,
}: {
  mouseEnter: () => void;
  mouseLeave: () => void;
  bgEnter: () => void;

}) {

  const projects = [
    {
      name: "University of Minnesota Applied Motion Lab",
      date: "Present",
      description: "Creating machine learning models, motion analysis algorithms, and statistical models to characterize human motion capabilities using bilateral arm data collected from a motion-based rehabilitation game. Working under the supervision of Dr. Stephen Guy and Shelby Ziccardi.",
      links: [{
        link_name: "Lab Page",
        link: "https://motion.cs.umn.edu/"
      }],
      skills: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "PyTorch"]
    },
    {
      name: "Harvey Mudd Makerspace Website Developer",
      date: "Present",
      description: "Redeveloping the Harvey Mudd College Makerspace website using the MERN stack to create a cleaner codebase, elevate maintainability as an open-source project, and improve the user experience for 1,200+ students across the Claremont Colleges",
      links: [{
        link_name: "Makerspace Website",
        link: "https://make.hmc.edu/"
      }, {
        link_name: "Project Github", 
        link: "https://github.com/HMC-Makerspace/MAKE"
      }],
      skills: ["Typescript", "React", "Express", "MongoDB", "Tailwind CSS"]
    },
    {
      name: "CACTI Lab",
      date: "2025",
      description: "Analyzed Los Angeles' changes in public transportation system over the past 20 years and correlated these changes with the city's climate policies. Used open source GIS data, data visualization techniques, and Javascript to create an interactable website highlighting various transit changes. Worked under the supervision of Dr. Lynn Kirabo.",
      links: [{
        link_name: "Lab Page",
        link: "https://cacti-lab.github.io/"
      }, {
        link_name: "Project Github",
        link: "https://github.com/jasmineeliu/LA-Metro-Data"
      }],
      skills: ["QGIS", "OpenLayers", "HTML", "CSS", "Javascript"]
    },
    {
      name: "Code the Change Software Developer",
      date: "2025",
      description: "Developed a web application for Code the Change in collaboration with MIT's Jameel Clinic and The Boston Museum of Science to create an interactive exhibit educating the public about clinical AI and drug discovery.",
      links: [{
        link_name: "Project Github",
        link: "https://github.com/anika213/mos-mit-ctc"
      }],
      skills: ["React", "Node.js", "Tailwind CSS"]
    },
    {
      name: "P-AI Frontend Developer",
      date: "2025",
      description: "Designed and implemented a responsive front-end for an AI-powered web app that generates personalized playlists with collaborative filtering and content-based recommendations.",
      links: [{
        link_name: "Project Github",
        link: "https://github.com/tylerheadley/p-laylist"
      }],
      skills: ["React", "HTML", "CSS", "PostgreSQL", "Node.js", "Python", "Flask"]
    },
    {
      name: "Kode with Klossy x Deloitte Sustainability and AI Challenge",
      date: "2025",
      description: "Created a Swift app that provides up-to-date, personalized news articles and resources on the intersection of AI and sustainability. Inteded to motivate and educate the public on how AI can both help and harm the environment. Won $5000 as a Kode with Klossy x Deloitte Sustainability and AI Challenge winner.",
      links: [{
        link_name: "Project Github",
        link: "https://github.com/jasmineeliu/KWK-Sustainability"
      }],
      skills: ["Swift", "Xcode",]
    },
    {
      name: "Girls Who Code Humanize AI Challenge",
      date: "2023",
      description: "Developed a website that educates the public about the ethical implications of AI in social media and how to use AI responsibly. Won the Girls Who Code Spring 2023 Humanize AI Challenge.",
      links: [{
        link_name: "Project Github",
        link: "https://github.com/jasmineeliu/GWCAI"
      }],
      skills: ["HTML", "CSS", "Javascript"]
      
    }
  ]

  const [projectSelected, setProjectSelected] = useState<{[key: string]: any} | null>(null);
  const [projectShown, setProjectShown] = useState<boolean>(false);

  const handleProjectClick = (project: {[key: string]: any}) => {

    if (projectSelected && projectSelected.name === project.name) {
      handleCloseProject();
      return;
    }
    setProjectSelected(project);
    setProjectShown(true);

  };

  const handleCloseProject = () => {
    setProjectSelected(null);
    setProjectShown(false);
  };
  
  return (
    <div className='h-[120vh] relative'>
      <div className='sticky top-0 flex flex-row '>
        
        <motion.div 
          animate={{width: projectSelected ? '100%' : '100%'}}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className='ml-[3vw] mr-[3vw] w-full h-[100vh] flex flex-col justify-center'>

          <div className=' flex flex-row flex-grow-0 mb-[5vh]'>
            <div className='overflow-hidden flex flex-col'>
              <motion.h1 
                initial={{ y: "100%" }}
                whileInView={{ y: 0, transition: {duration: 1, ease: [0.33, 1, 0.68, 1]} }}
                className="font-title text-[10vw]/[110%] w-fit " 
                onMouseEnter={mouseEnter} 
                onMouseLeave={mouseLeave}
              >
                Projects
              </motion.h1>
              <motion.div 
                initial={{width: "0%"}}
                whileInView={{width: "100%", transition: {duration: 1, delay: 0.2, ease: [0.33, 1, 0.68, 1]}}}
                className='h-[3px] bg-black w-100%' />
            </div>
          </div>

          <div>
              <div className='pt-4'>

                <motion.div 
                  initial={{opacity: 0}}
                  whileInView={{opacity: 1, transition: {duration: 0.75, delay: 0.2, ease: [0.33, 1, 0.68, 1]}}}
                  className='flex flex-row justify-between pb-2'>
                    <h1 className='text-2xl'>PROJECT</h1>
                    <h1 className='text-2xl'>YEAR</h1>
                </motion.div>
                <motion.div 
                  initial={{width: "0%"}}
                  whileInView={{width: "100%", transition: {duration: 0.75, delay: 0.2, ease: [0.33, 1, 0.68, 1]}}}
                  className='h-[1px] bg-black w-100%' />
              </div>

              <Project inputDict={projects} activateProject={handleProjectClick}/>
          </div>
        </motion.div>

          {
          <motion.div
            animate={{width: projectSelected ? '50%' : '0%'}}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          >
          <AnimatePresence mode='wait'>
              <ProjectDesc 
                projectSelected={projectSelected}
                handleCloseProject={handleCloseProject}
                mouseLeave={mouseLeave}
                bgEnter={bgEnter}
              />
          </AnimatePresence>
          </motion.div>
          }
        
      
      </div>
    </div>
    
  )
}