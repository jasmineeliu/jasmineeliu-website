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
　　 　 z | 　 _　 _| \n
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
    　z　 ／ >    フ \n
　　 　 z | 　 _　 _| \n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`\n        \n
      Z    _____  \n
    　z　 ／ >    フ \n
　　　 　　| 　 _　 _| \n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`\n      z \n
      Z    _____  \n
    　z　 ／ >    フ \n
　　　 　　| 　 _　 _| \n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`\n      z \n
      Z    _____  \n
    　　  ／ >    フ \n
　　 　   | 　 _　 _| \n
　 　 　　／  ミ _xノ\n
　　 　  /　　　 　 |\n
　　　  /　 ヽ　　 ﾉ\n
　 ／￣|　　 |　|　|\n
　| (￣ヽ＿_ヽ_)_)\n
　 ＼二二つ\n
`,
`\n      z \n
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
          if (prev === 6) {
            return 0
          } else {
            return prev + 1
          }
        })
      }, 1000);
    } else {
      setFrame(7)
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
        className="p-2 flex items-center justify-center overflow-hidden"
    style={{
      width: "220px",
      height: "200px",
    }}
>
    <pre 
      
      style={{ fontFamily: "monospace", lineHeight: "0.7" }}>
      {frames[frame]}
    </pre>
    </div>

  )
}

// export default function Home() {
//   return <div className="text-2xl">Work Page</div>;
// }