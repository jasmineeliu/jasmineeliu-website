'use client';
import { motion } from 'framer-motion';

export default function Project({
  inputDict,
  activateProject,
}: {
  inputDict: {[key: string]: any}[];
  activateProject: (project: {[key: string]: any}) => void;
}) {


  return (
    
    <div>
      { 
        inputDict.map((item, index) => {
          return (
            <motion.div 
              key={index}
            >
              <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1, transition: {duration: 0.6, delay: 0.1 * index, ease: [0.33, 1, 0.68, 1]}}}
                whileHover={{
                  paddingLeft: "1rem",
                  paddingRight: "1rem",
                  backgroundColor: "#000",
                  color: '#fff',
                  transition: { duration: 0.4, ease: [0.33, 1, 0.68, 1] }
                }}
                onClick={() => activateProject(item)}
                className='flex flex-row justify-between pt-2 pb-2 w-full'>
                  <h1 className='sm:text-2xl text-l mr-[5%]'>{item['name']}</h1>
                  <h1 className='sm:text-2xl text-l'>{item['date']}</h1>
              </motion.div>
              <motion.div 
                initial={{width: "0%"}}
                whileInView={{width: "100%", transition: {duration: 0.6, delay: 0.1 * index, ease: [0.33, 1, 0.68, 1]}}}
                className='h-[1px] bg-black w-100%' />
            </motion.div>
          )
        })
      }

    </div>
  )
}