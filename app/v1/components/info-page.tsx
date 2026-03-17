'use client';
// import { motion, useAnimate } from 'framer-motion';
import MaskText from './mask-text';
import ImageGallery from './image-gallery'

const description = [
    "I'm studying Computer Science",
    "and Math at Harvey Mudd College with an",
    "expected graduation date of 2028.",
    "I’m currently solving proofs, working",
    "on websites, and making the most of college!",
  ]

  const passions = [
    "I'm passionate about problem solving,",
    "creating visually appealing projects,",
    "exploring the outdoors, and eating",
    "my way through wherever I'm located."
  ]

function DesktopLayout({
  mouseEnter,
  mouseLeave
}: {
  mouseEnter: () => void;
  mouseLeave: () => void;
}) {
  return (
  <div className="h-full flex md:flex-row flex-col items-center relative">
    <div className='ml-[5%] lg:w-[50%] mr-[5%]'>
      <div className='h-[125vh] mb-[5vh] w-full'>
        <div className='sticky top-1/2 -translate-y-1/2'>
            <MaskText phrases={description} mouseEnter={mouseEnter} mouseLeave={mouseLeave}/>  
        </div>
      </div>
      <div className='h-[125vh] w-full block'>
        <div className='sticky top-1/2 -translate-y-1/2'>
          <MaskText phrases={passions} mouseEnter={mouseEnter} mouseLeave={mouseLeave}/>
         </div>
      </div>
     
    </div>
      <div className='w-full flex flex-row justify-center items-center'>
        <ImageGallery />
      </div>
    </div>
  )
}

function MobileLayout({
  mouseEnter,
  mouseLeave
}: {
  mouseEnter: () => void;
  mouseLeave: () => void;
}) {
  return (
    <div className='flex flex-col box-border justify-center pl-[7vw] pr-[7vw] w-full'>
      <div className='h-[20vh]' />
      <div className='flex flex-col mb-[4vh] relative'>
        <div className='h-[50vh]'>
          <div className='sticky top-1/4'>
            <MaskText phrases={description} mouseEnter={mouseEnter} mouseLeave={mouseLeave}/>
          </div>
          
        </div>
      </div>
      <div className='flex flex-col justify-center w-full'>
        <ImageGallery />
      </div>
      <div className='mt-[4vh] flex ml-auto'>
        <MaskText phrases={passions} mouseEnter={mouseEnter} mouseLeave={mouseLeave} right={true}/>
      </div>
    </div>
  )
}



export default function InfoPage({
  mouseEnter,
  mouseLeave
}: {
  mouseEnter: () => void;
  mouseLeave: () => void;
}) {

return (
  <div className='block'>
    <div className='hidden lg:block'>
      <DesktopLayout mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
    </div>
    <div className='lg:hidden block'>
      <MobileLayout mouseEnter={mouseEnter} mouseLeave={mouseLeave} />
    </div>
  </div>
)

}