import { motion, useAnimate } from 'framer-motion';
import MaskTest from './mask-text';

export default function InfoPage() {
  const phrase1 = [
    "Currently studying Computer Science and Math",
    "at Harvey Mudd College.",
    "This summer, I’m researching machine learning",
    "and computer vision at the Applied Motion Lab at",
    "University of Minnesota."
  ]
return (
  <div className="h-screen flex flex-col items-center justify-center relative">
    <div className='absolute left-[10vw]'>
      <MaskTest phrases={phrase1} />
    </div>
    
  </div>
)

}