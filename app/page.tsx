'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MainText from './components/main-text';
import InfoPage from './components/info-page';
import Lenis from 'lenis';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";



export default function Home() {
  const triggerRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setIsCompact(latest > 0.01);
    });
  }, [scrollYProgress]);

  useEffect(() => {

    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  }, []);


  return (
    <div className="relative">
      <div ref={triggerRef} className={`flex items-center justify-center ${
            isCompact ? 'h-[20vh]' : 'h-screen'
            // 'h-screen'
          }`}>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 3, delay: 0.3, ease: [0, 0.9, 0.1, 1.01]
            }
          }}
          transition={{ duration: 1, ease: "circOut" }}
          className={`font-title z-10 text-primary opacity-0 
            ${ isCompact && 'fixed text-3xl top-4' }
            `
            // ${ isCompact && 'fixed top-4 ' }
        }
        // style={{
        //   top: scrollYProgress 
        // }}

        >
          {isCompact ? 'jyl' : 
          <div className="flex flex-col items-center justify-between mb-20">

              <MainText />
              <motion.h3 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } }}
                className='md:text-[1.4em]/[90%] text-[1em]/[90%] font-body mt-2 opacity-0'
              >
                programmer. designer. student.
                </motion.h3>
            
              <motion.div 
                className='flex flex-col items-center justify-center opacity-0 absolute top-[70vh]'
                initial={{opacity:0}}
                whileInView={{opacity:0.5, transition: { duration: 1, delay: 1.2 }}}
              >
                <p className='md:text-[1.2em] text-[0.9em] text-primary-dark font-body'>Scroll to learn more.</p>
                <MdKeyboardDoubleArrowDown size="1em" className="fill-primary-dark"/>
              </motion.div>
          </div>
          }
        </motion.div>
      </div>

      <InfoPage />
    </div>
  );
}
