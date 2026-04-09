"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export type CursorState = 'default' | 'image' | 'rotated' | 'text';

export default function CustomCursor({
    eventType,
    children
}:{
    eventType: CursorState
    children: React.ReactNode;
}) {
  const [supportsHover, setSupportsHover] = useState(false);
  const [position, setPosition] = useState({ x: -100, y: -100 }); 

  const isDefault = eventType === 'default' || eventType === 'rotated';
  const isRotated = eventType === 'rotated';

  const contentSize = (() => {
    switch (eventType) {
      case 'default':
      case 'rotated':
        return { width: 16, height: 16 };
      case 'image':
        return { width: 150, height: 110 };
      case "text":
        return { width: 52, height: 20 };
      default:
        return { width: 16, height: 16 };
    }
  })();


  useEffect(() => {
    // supportHover check
    const mediaQuery = window.matchMedia("(hover: hover)");
    setSupportsHover(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setSupportsHover(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!supportsHover) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY }); 
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
    
  }, [supportsHover])

  return (
    <>
    <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999"
        animate={{ x: position.x, y: position.y }}
        transition={{x: { duration: 0 }, y: { duration: 0 }}}
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <motion.div
          className="flex items-center justify-center gap-2 overflow-hidden bg-black"
          style={{ color: "var(--black)" }}
          animate={{width: contentSize.width, 
            height: contentSize.height,
            rotate: isRotated ? 45 : 0,
            }}
          transition={{duration: 0.3, ease: [0.215, 0.61, 0.355, 1] as const }}
        >
            
        {children ? 
            children :
            <div className='w-[16px] h-[16px]'></div>
        }
        </motion.div>
        </motion.div>
    </>
  )
}
