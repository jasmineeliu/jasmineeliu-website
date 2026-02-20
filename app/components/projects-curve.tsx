'use client';
import {motion, useAnimation} from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ProjectsCurve({
  projectSelected,
}: {
  projectSelected: {[key: string]: any} | null;
}) {

  const [height, setHeight] =useState(0);
  const controls = useAnimation();


  const initialPath = `M100 0 L100 ${height} Q-100 ${height / 2} 100 0`
  const targetPath = `M100 0 L100 ${height} Q100 ${height / 2} 100 0`

  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);
    updateHeight(); // Initial
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  })


  const pathAnimation = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {duration: 1, ease: [0.76, 0, 0.24, 1] as [number, number, number, number]}
    },
    exit: {
      d: initialPath,
      transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number]}
    }
  }


  useEffect(() => {
      if (height > 0) {
          controls.start({
            d: projectSelected ? targetPath : initialPath,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          });
        }
    }, [projectSelected, height, controls]);

  return (
    <motion.svg className='absolute top-0 md:w-[100px] h-full stroke-none fill-black'>
      <motion.path  
        variants={pathAnimation}
        initial="initial"
        animate={controls}
        // exit="exit"
      >

      </motion.path>
    </motion.svg>
  )
}