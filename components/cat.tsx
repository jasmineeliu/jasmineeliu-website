"use client";
import { useState, useEffect } from "react";
import { useCursor } from "@/components/CursorProvider";
import { motion } from "framer-motion";
const frames = [
  `
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
  const textOptions = ["shhhh..", "meow", "hello!", "zzz...", "eepy", "boop!"];

  const { setCursor, resetCursor } = useCursor();

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (!awake) {
      intervalId = setInterval(() => {
        setFrame((prev) => {
          if (prev === 6) {
            return 0;
          } else {
            return prev + 1;
          }
        });
      }, 1000);
    } else {
      setFrame(7);
      setCursor(
        "text",
        <div className="relative flex flex-col items-center justify-center px-4 bg-black">
          <p className="text-[10px] text-white italic">
            {textOptions[Math.floor(Math.random() * textOptions.length)]}
          </p>
        </div>,
      );
    }

    return () => {
      setFrame(0);
      resetCursor();
      if (intervalId) clearInterval(intervalId);
    };
  }, [awake]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
      onMouseEnter={() => {
        setAwake(true);
      }}
      onMouseLeave={() => {
        setAwake(false);
      }}
      className="p-2 flex items-center justify-center overflow-hidden"
      style={{
        width: "220px",
        height: "200px",
      }}
    >
      <pre style={{ fontFamily: "monospace", lineHeight: "0.7" }}>
        {frames[frame]}
      </pre>
    </motion.div>
  );
}

// export default function Home() {
//   return <div className="text-2xl">Work Page</div>;
// }
