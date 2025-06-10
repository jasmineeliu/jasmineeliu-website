// 'use client';
import React, { useState } from "react";
import { motion, useAnimate } from 'framer-motion';

export default function MainText({
  mouseEnter,
  mouseLeave
}: {
  mouseEnter: () => void;
  mouseLeave: () => void;
}) {

  const splitString = (text: string) => {
      const characters = [];
      const regex = /[\s\S]/gu;
      let match;
      while ((match = regex.exec(text)) !== null) {
          characters.push(match[0]);
      }
      return characters;
  };

  const splitTextOne = splitString("Jasmine Liu.");

  const INITIAL_DELAY = 0.3;

  return (
    <div   
      

    >
        <motion.h1
        className='text-center word-break-normal '
        transition={{
          staggerChildren: 0.04,
        }}
      //         onMouseEnter={mouseEnter} 
      // onMouseLeave={mouseLeave}
      >
        {splitTextOne.map((char, index) => {
            return (            
                <motion.span
                  key={index} 
                  initial={{
                    opacity: 0,
                    filter: "blur(10px)"
                  }}
                  transition={{
                    duration: 0.9,
                    delay: index * (0.03 - index * 0.002) + INITIAL_DELAY ,
                    ease: [0.65, 0, 0.35, 1]
                  }} 
                  animate={{
                    opacity: 1,
                    filter: "blur(0px)"
                  }}
                  className="font-title text-primary md:text-[9em]/[0.95] text-[4em]/[0.95] pointer-events-none"
                >
                    {char}
                </motion.span>
              
            )}
          )}
        </motion.h1>
    </div>
    
  )
}