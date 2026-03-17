'use client'
import { useState, useEffect } from "react";

const frames = [`
\n
           _____  \n
    　 　 ／ >    フ \n
　　　 　　| 　 _　 _| \n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`
\n
           _____  \n
    　 　 ／ >    フ \n
　　　 　　| 　 _　 _| z\n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`
\n
           _____  \n
    　 　 ／ >    フ  Z\n
　　　 　　| 　 _　 _| z\n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`
                    \n
           _____      z\n
    　 　 ／ >    フ  Z\n
　　　 　　| 　 _　 _| z\n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`
                   z \n
           _____      z\n
    　 　 ／ >    フ  Z\n
　　　 　　| 　 _　 _| z\n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`
\n
           _____  \n
    　 　 ／ >    フ \n
　　　 　　| 　 o　 o| \n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
];

export default function CatPage() {
  const [frame, setFrame] = useState(0);
  const [awake, setAwake] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout
    if (!awake) {
      intervalId = setInterval(() => {
        setFrame(prev => {
          if (prev === 4) {
            return 0
          } else {
            return prev + 1
          }
        })
      }, 1000);
    } else {
      setFrame(5)
    }
    
    return () => {
      setFrame(0)
      if (intervalId) clearInterval(intervalId);
    }
  }, [awake])

  return (
    <div 
    onMouseEnter={() => {
        setAwake(true)
      }}
      onMouseLeave={() => {
        setAwake(false)
      }}
    className='w-fit'>
    {/* <pre 
      
      style={{ fontFamily: "monospace", lineHeight: "0.7" }}>
      {frames[frame]}
    </pre> */}
    hi
    </div>

  )
}