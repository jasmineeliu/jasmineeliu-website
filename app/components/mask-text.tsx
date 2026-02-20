'use client'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Variants } from "framer-motion"


export default function MaskText({
  phrases,
  mouseEnter,
  mouseLeave,
  right = false
}: {
  phrases: string[];
  mouseEnter: () => void;
  mouseLeave: () => void;
  right?: boolean;
}) {

  const body = useRef(null);
  const INITIAL_DELAY = 0.2

  const animation = {
    initial: {y: "100%"},
    entered: (i: number) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1] as [number, number, number, number],  delay: 0.1 * i + INITIAL_DELAY}})
  }

  return (
    <div ref={body} onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} className={`${right && 'text-right'}`}>
      {phrases.map( (phrase, index) => {
        return (
          <div key={index} className='md:text-[clamp(1rem,1.2vw,3rem)]  text-[0.8rem] overflow-hidden whitespace-nowrap'>
            <motion.p 
              className='font-body  font-extrabold' 
              variants={animation} 
              initial="initial" 
              custom={index}
              whileInView="entered"
            >
                {phrase}
              </motion.p>
          </div>
        )
      })}
    </div>
  )
}

