import {motion} from 'framer-motion';

export default function StaggerText({
  link,
}: {
  link: {[key: string]: string};
}) {
    return (
      <motion.a 
        href={link['link']} 
        initial='initial'
        whileHover='hovered'
        target='_blank' 
        // style={{lineHeight: 1.08}}
        className='relative block overflow-hidden whitespace-nowrap underline '>
          <div>

            {link['link_name'].split("").map((l, i) => {
              return (
              <motion.span 
                className='inline-block underline'
                key={i}
                variants={{
                  initial: {y: 0},
                  hovered: {y: "-100%", transition: {duration:0.2, ease: [0.33, 1, 0.68, 1], delay: i * 0.01}}
                }}
              >
                {l === " " ? "\u00A0" : l}
              </motion.span>
              )
            })}

          </div>

          <div
            className='absolute inset-0 '
          >
            {link['link_name'].split("").map((l, i) => {
              return (
              <motion.span 
                className='inline-block underline'
                key={i}
                variants={{
                  initial: {y: "100%"},
                  hovered: {y: 0, transition: {duration:0.2, ease: [0.33, 1, 0.68, 1], delay: i * 0.01}}
                }}
              >
                {l === " " ? "\u00A0" : l}
              </motion.span>
              )
        
              
            })}          

          </div>
      </motion.a>
    )
  }