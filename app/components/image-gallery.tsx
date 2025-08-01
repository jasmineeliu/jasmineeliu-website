'use client'
import Image from "next/image";
import { useScroll, useTransform, motion, MotionValue, useSpring } from "framer-motion";
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
  "/10.JPG",
  "/11.JPG",
  "/12.JPG",
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
  const y1 = useTransform(scrollYProgress, [0, 1], [0, height * 2.7])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.4])

  

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
    <div ref={gallery} className="lg:h-[175vh] h-[100vh] overflow-hidden w-[100%] lg:mt-[65vw]">
      <div  className='flex flex-row relative gap-[1vw] lg:w-[110%] w-full top-[-12.5vh] lg:h-[200vh] h-[170vh] justify-center'>
          <Column images={[images[0], images[1], images[5], images[8]]} ypos={y} adjustment={"-60%"}/>
          <Column images={[images[2], images[10], images[9], images[4]]} ypos={y1} adjustment={"-90%"}/>
          <Column images={[images[6], images[7], images[3], images[11]]} ypos={y2} adjustment={"-45%" }/>
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
  adjustment: string;
}) {

  return (
    <motion.div className={`flex flex-col gap-[1vw] items-center justify-center h-[100%] w-[50%] relative whitespace-nowrap  will-change-transform`} 
    style={{top: adjustment}}>
      {
        
        images.map((imageSRC, i) => {
          return (
            <motion.div 
              key={i}
              className='h-[23%] w-[100%]  relative overflow-hidden rounded-[1vw]  will-change-transform'
              style={{
                translateY: ypos
              }}
            >

              <Image 
                src={imageSRC}
                alt="image"
                fill={true}
                className='object-cover'
                
              />
            </motion.div>
          )
        })
      }
    </motion.div>
  )
}