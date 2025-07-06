'use client'
import Image from "next/image";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from 'react';

const images = [
  "/1.JPG",
  "/2.JPG",
  "/3.JPG",
  "/4.JPG",
  "/5.JPEG",
  "/6.JPG",
  "/7.JPG",
  "/8.JPG",
  "/9.JPG",
]

export default function ImageGallery() {

  const gallery = useRef(null);

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ['start end', 'end start']
  })

  const [dimension, setDimension] = useState({width:0, height:0});
  const { height } = dimension;


  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.4])

  // const y = y1 = y2 = 0

  useEffect(() => {
    const resize = () => {
      setDimension({width: window.innerWidth, height: window.innerHeight})
    }

    window.addEventListener("resize", resize)

    resize();

    return () => {
      window.removeEventListener("resize", resize);
    }
  }, [])

  return (
    <div ref={gallery} className="h-[190vh] overflow-hidden mt-[75vh]">
      <div  className='flex flex-row relative top-[-12.5vh] gap-4 w-[100%] h-[200vh]'>
          <Column images={[images[0], images[1], images[2]]} ypos={y} adjustment={-700}/>
          <Column images={[images[3], images[4], images[5]]} ypos={y1} adjustment={-1200}/>
          <Column images={[images[6], images[7], images[8]]} ypos={y2} adjustment={-500 }/>
      </div>
    </div>
  )
}

export function Column({
  images,
  ypos,
  adjustment
}: {
  images: string[];
  ypos: MotionValue<number>;
  adjustment: number;
}) {

  return (
    <div className={`flex flex-col gap-4 items-center justify-center h-[200vh] w-[20vw] relative top-${adjustment}`} style={{ top: adjustment }}>
      {
        
        images.map((imageSRC, i) => {
          return (
            <motion.div 
              key={i}
              className=' w-[20vw] aspect-[3/4] relative overflow-hidden rounded-[1vw]'
              style={{
                translateY: ypos,
              }}
            >

              <Image 
                src={imageSRC}
                alt="image"
                fill
                // height={100}
                // width={100}
                className='object-cover'
                
              />
            </motion.div>
          )
        })
      }
    </div>
  )
}