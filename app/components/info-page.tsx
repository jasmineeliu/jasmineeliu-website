import { motion, useAnimate } from 'framer-motion';
import MaskText from './mask-text';
import ImageGallery from './image-gallery'

export default function InfoPage({
  mouseEnter,
  mouseLeave
}: {
  mouseEnter: () => void;
  mouseLeave: () => void;
}) {
  const description = [
    "Currently studying Computer Science and Math",
    "at Harvey Mudd College.",
    "This summer, I’m researching machine learning",
    "and computer vision at the Applied Motion Lab",
    "at University of Minnesota."
  ]

  const passions = [
    "I'm passionate about problem solving,",
    "creating visually appealing projects,",
    "exploring the outdoors, and eating",
    "my way through wherever I'm located."
  ]

return (
  <div className="h-full flex flex-row items-center relative gap-10">
    <div className='ml-[5vw] w-[37vw] min-w-[37vw]'>
      <div className='h-[160vh] mb-[5vh]'>
        <div className='sticky top-1/2 -translate-y-1/2'>
            <MaskText phrases={description} mouseEnter={mouseEnter} mouseLeave={mouseLeave}/>  
        </div>
      </div>
      <div className='h-[100vh]'>
        <div className='sticky top-1/2 -translate-y-1/2'>
          <MaskText phrases={passions} mouseEnter={mouseEnter} mouseLeave={mouseLeave}/>
         </div>
      </div>
     
    </div>
    <ImageGallery />
  </div>
)

}