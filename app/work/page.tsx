"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useCursor } from "@/components/CursorProvider";
import Image from "next/image";
import { useState } from "react";

export default function WorkPage() {
  const { setCursor, resetCursor } = useCursor();
  
  const figMap = [
    {
      "key": "crafting",
      "title": "crafting",
      "subtitle": "crafts: software and other creations",
      "experience": [
        {
          "title": "Apple Ads Engineering",
          "subtitle": "Building beautiful advertising experiences",
          "role": "Front-End Engineer"

        },
        {
          "title": "Harvey Mudd Makerspace",
          "subtitle": "Powering a better web experience for makers",
          "role": "Software Engineer"
        },
        {
          "title": "Code the Change",
          "subtitle": "Creating technology for social good",
          "role": "Software Engineer"
        },
        {
          "title": "Project-AI",
          "subtitle": "Making every playlist a little smarter",
          "role": "Front-End Engineer"
        },
        {
          "title": "Kode with Klossy",
          "subtitle": "Doing everything: Swift apps, AI-powered websites, winning scholarships",
          "role": "Scholar"
        },
        {
          "title": "Girls Who Code",
          "subtitle": "Leaping into webdev; classic HTML CSS web pages",
          "role": "Scholar"
        },
      ]
    },
    {
      "key": "wondering",
      "title": "wondering",
      "subtitle": "wonders: research and data",
       "experience": [
        {
          "title": "Human Movement Biomechanics Lab in Engineering",
          "role": "Harvey Mudd",
          "subtitle": "How can we reduce ACL injuries using cueing?",
        },
        {
          "title": "Applied Motion Lab",
          "role": "University of Minnesota",
          "subtitle": "How do humans of all ages reach for targets? What can we do with this?",
        },
        {
          "title": "CACTI Lab",
          "role": "Harvey Mudd",
          "subtitle": "How is LA public transit tackling proposed climate goals?",
        },
        {
          "title": "Global Birth Rate Data Analysis",
          "role": "1st Place, HMC Datathon",
          "subtitle": "What is really causing global birth rate declines?",
        },
      ]
    },
    {
      "key": "growing",
      "title": "growing",
      "subtitle": "growth: my communities and my people",
       "experience": [
        {
          "title": "Society of Women Engineers",
          "role": "President",
          "subtitle": "Creating and supporting opportunities for women on campus"
        },
        {
          "title": "Asian Pacific Islander Sponsor Program at Mudd",
          "role": "Mentor",
          "subtitle": "Eating food, yapping, and supporting my API-fam"
        },
        {
          "title": "Notion",
          "role": "Campus Leader",
          "subtitle": "Powering one of my favorite products!"
        },
        {
          "title": "Harvey Mudd College",
          "role": "Teaching Assistant",
          "subtitle": "Data Structures and Programming & Intro to Computer Science"
        },
      ]
    },
  ]

  const underlineVariants = {
    rest: {
      scaleX: 0,
      opacity: 0,
    },
    hover: {
      scaleX: 1,
      opacity: 1,
    },
      selected: {
    scaleX: 1,
    opacity: 1,
  },
  };

  const [selectedFig, setSelectedFig] = useState("none");
  const currentFig = figMap.find(fig => fig.key === selectedFig);
  return (
    <>
      <div className="flex flex-row gap-8 md:px-20 md:justify-between md:pb-10 items-center h-full w-[80%] lg:w-[70%]">
        <div className="flex flex-col gap-10 cursor-none">
          <div className=' flex flex-col gap-4 cursor-none'>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 1 } }}
            className='italic'
            onMouseEnter={() => {
              setCursor(
                "image",
                <div className="relative flex flex-col items-center justify-center h-24 w-32 gap-2 bg-black">
                  <div className="relative w-[95%] h-[95%]">
                    <Image
                        src={"/figs.jpg"}
                        alt="photo of figs"
                        fill={true}
                        className="object-cover"
                        
                      />
                  </div>

                  <p className="text-[10px] text-white">the bell jar's fig tree</p>
                </div>,
              );
            }}
            onMouseLeave={() => {
              resetCursor();
            }}
            >
              "I saw my life branching out before me like the green fig tree in the story. 
            From the tip of every branch, like a fat purple fig, a wonderful future beckoned and winked."
            —— sylvia plath
          </motion.p>

          <motion.div
            className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, delay: 0.3 },
              }}            
              className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center"
            >
              <span className='inline'>my figs</span>
            <p className="select-none hidden lg:block">/</p>
            </motion.div>
            
            <div className="flex flex-row gap-4">
              {figMap.map((fig, i) => {
                return (
                  <motion.div
                    key={i}
                    className=' flex flex-row gap-4'
                    initial="rest"
                    whileHover="hover"
                    onClick={() => setSelectedFig(fig.key)}
                    animate={selectedFig === fig.key ? "selected" : "rest"}
                  >
                    <div className='relative'>
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.5, delay: 0.5 + 0.15*i },
                        }}   
                        onMouseEnter={() => {
                          setCursor("rotated");
                        }}
                        onMouseLeave={() => {
                          resetCursor();
                        }}
                        className={selectedFig === fig.key ? "text-accent" : "text-black"}
                      >
                        {fig.title}
                      </motion.p>
                      <motion.span
                        className={`absolute left-0 -bottom-px h-0.5 w-full bg-current origin-left
                          ${selectedFig === fig.key ? "text-accent" : "text-black"}
                          `}
                        variants={underlineVariants}
                        transition={{
                          duration: 0.35,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </div>
                  
                  {i != 2 && <p className="select-none">·</p>}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
          </div>
          <div className="h-[415px] overflow-y-auto overflow-x-hidden">
              {/* <AnimatePresence mode="wait"> */}
               {selectedFig !== "none" && (
                  <motion.p
                    key={selectedFig}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="font-bold text-lg mb-4"
                  >
                    {currentFig?.subtitle}
                  </motion.p>
                )}
              {
                currentFig?.experience.map((experience, i) => {
                  return (
                    <div key={experience.title} className='flex flex-col flex-8'>
                      <div className='flex items-start gap-8'>
                        <div className='flex flex-col items-center'>
                          <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.4 + 0.1 * i,
                              ease: "easeOut",
                            }}
                            className="w-2 h-2 rounded-full bg-black border-black z-10 mt-2"
                          />
                          {i != currentFig?.experience.length - 1 && <motion.div
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true, amount: 0.8 }}
                            transition={{
                              duration: 0.6,
                              ease: "easeInOut",
                              delay: 0.4 + 0.1 * i,
                            }}
                            style={{
                              transformOrigin: "top",
                            }}
                            className="w-[1px] h-10 bg-black mt-2"
                          />}
                        </div>
                        <div className='flex flex-col gap-0.5'>
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.4 + 0.1 * i,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className='flex flex-row gap-2 items-center'
                          >
                            <motion.p>
                              {experience.title}
                            </motion.p>
                            <p className='select-none'>·</p>
                            <p className='text-sm'>{experience.role}</p>
                          </motion.div>
                          
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{
                              duration: 0.6,
                              delay: 0.5 + 0.1 * i,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className='italic text-sm'
                          >
                            {experience.subtitle}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
          {/* </AnimatePresence> */}
        </div>
        </div>
      </div>
    </>
  );
}
