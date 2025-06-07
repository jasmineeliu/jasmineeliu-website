'use client'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function MaskTest({
  phrases
}: {
  phrases: string[];
}) {

  const body = useRef(null);
  const INITIAL_DELAY = 0.5

  const animation = {
    initial: {y: "100%"},
    entered: (i: number) => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.1 * i + INITIAL_DELAY}})
  }

  return (
    <div ref={body}>
      {phrases.map( (phrase, index) => {
        return (
          <div key={index} className='flex flex-col overflow-hidden'>
            <motion.p 
              className='font-body text-[1.3em] font-extrabold' 
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

