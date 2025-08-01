'use client';
import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import MainText from './components/main-text';
import InfoPage from './components/info-page';
import ProjectsPage from './components/projects-page';
import LinkFooter from './components/link-footer';
import Lenis from 'lenis';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";



export default function Home() {
  const triggerRef = useRef(null);
  const [isCompact, setIsCompact] = useState(false);

  const [cursorVariant, setCursorVariant] = useState("default");
  const [hasMoved, setHasMoved] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 40 });

  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "end start"]
  });

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setIsCompact(latest > 0.01);
    });
  }, [scrollYProgress]);

  // scroll effect
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

  }, []);

    useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!hasMoved) {
        setHasMoved(true)
      }

      if (cursorVariant === "text") {
        cursorX.set(e.clientX - 90);
        cursorY.set(e.clientY - 90);
      } else {
        cursorX.set(e.clientX - 16);
        cursorY.set(e.clientY - 16);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY, cursorVariant]);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  

    const variants = {
      default: {
        width: 32,
        height: 32,
        backgroundColor: 'black',
        mixBlendMode: 'normal' as const,
        opacity: 1,
      },
      text: {
        width: 180,
        height: 180,
        backgroundColor: 'white',
        mixBlendMode: 'difference' as const,
        opacity: 1,
      },
      blackbg: {
        width: 32,
        height:32,
        backgroundColor: 'white',
        mixBlendMode: 'difference' as const,
        opacity:1,

      }
  };

  const textEnter = () => {setCursorVariant("text")};
  const textLeave = () => {setCursorVariant("default")};
  const enterBlackBg = () => {setCursorVariant("blackbg")};

  return (
    <div className="relative bg-white">
      <div ref={triggerRef} className={`flex items-center justify-center ${
            isCompact ? 'h-[0vh]' : 'h-[110vh]'
          }`}>
        <motion.div
          layout
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { duration: 3, delay: 0.3, ease: [0, 0.9, 0.1, 1.01]
            }
          }}
          transition={
            { duration: 1, ease: "circOut", }
        }
          className={`font-title z-10 text-primary opacity-0 
            ${ isCompact && 'fixed text-3xl top-4 ' }
          `}
        >
          {isCompact ? 
          // <div className='bg-white w-full'>
          //   <h1 className=''>
          //     jyl
          //   </h1>
          // </div>
          <div className='text-black mix-blend-difference z-10'>
            <p>
              jyl
            </p>
          </div>
          
            
          : 
          <div className="flex flex-col items-center justify-between mb-20" >
            <div
              className="flex flex-col items-center justify-between"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            >
               <MainText />
              <motion.h3 
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0, transition: { duration: 1, delay: 0.9 } }}
                className='md:text-[1.4em]/[90%] text-[1em]/[90%] font-body mt-2 opacity-0 '
              >
                software developer. designer. student.
                </motion.h3>
              </div>

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

      <InfoPage mouseEnter={textEnter} mouseLeave={textLeave} />

      <div className='h-[10vh]'/>
      <ProjectsPage mouseEnter={textEnter} mouseLeave={textLeave} bgEnter={enterBlackBg} mobile={isMobile}/>
      <div className='h-[10vh]'/>

    <div 
      className='relative sm:h-[50vh] h-[30vh]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >


      <div className='fixed bottom-0 sm:h-[50vh] h-[30vh] w-full bg-black' onMouseEnter={enterBlackBg} onMouseLeave={textLeave}>
        <LinkFooter />
      </div>

    </div>



      { hasMoved && 
        <motion.div 
          className=' h-[32px] w-[32px] rounded-full fixed top-0 left-0 opacity-0 pointer-events-none z-[9999] hidden lg:block'
          variants={variants}
          animate={cursorVariant}
          style={{
            translateX: springX,
            translateY: springY,
          }}
        />
      }
      
    </div>


  );
}
