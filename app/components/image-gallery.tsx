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
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])

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
    <div>
      <div ref={gallery} className='flex flex-row gap-4 w-[100%] h-[210vh]'>
          <Column images={[images[0], images[1], images[2]]} ypos={y} />
          <Column images={[images[3], images[4], images[5]]} ypos={y1}/>
          <Column images={[images[6], images[7], images[8]]} ypos={y2}/>
      </div>
    </div>
    
      
  )
}

export function Column({
  images,
  ypos
}: {
  images: string[];
  ypos: MotionValue<number>
}) {
  return (
    <div className='flex flex-col gap-4 items-center justify-center'>
      {
        images.map((imageSRC, i) => {
          console.log(imageSRC)
          return (
            <motion.div 
              key={i}
              className=' h-[70vh] aspect-[3/4] relative overflow-hidden '
              style={{
                  translateY: ypos
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