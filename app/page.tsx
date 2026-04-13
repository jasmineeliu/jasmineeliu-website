"use client";
import { motion } from "framer-motion";
import StaggerText from "@/components/stagger-text";
import { useCursor } from "@/components/CursorProvider";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const { setCursor, resetCursor } = useCursor();

  const links = [
    { link_name: "GitHub", link: "https://github.com/jasmineeliu" },
    { link_name: "LinkedIn", link: "https://linkedin.com/in/jasmineeliu" },
  ];

  return (
    <>
      <div className="flex flex-row gap-8 md:px-20 md:justify-between md:pb-10 items-center h-full w-[80%] lg:w-[70%]">
        <div className="flex flex-col gap-8">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.75 } }}
            className="text-2xl"
          >
            hello – i’m jasmine{" "}
          </motion.h1>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, delay: 0.1 },
              }}
            >
              {" "}
              <span>
                I’m a software developer, creative, and life-long learner. Born
                and raised in LA, I’m currently studying Computer Science + Math
                at{" "}
              </span>
              <Link
                href="https://www.hmc.edu/"
                target="_blank"
                onMouseEnter={() => {
                  setCursor(
                    "image",
                    <div className="relative flex flex-col items-center justify-center h-24 w-32 gap-2 bg-black">
                      <div className="relative w-[95%] h-[95%]">
                        <Image
                          src={"/hmc.jpg"}
                          alt="photo of harvey mudd"
                          fill={true}
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      <p className="text-[10px] text-white">go mudders!</p>
                    </div>,
                  );
                }}
                onMouseLeave={() => {
                  resetCursor();
                }}
                className="text-accent underline cursor-none"
              >
                Harvey Mudd College
              </Link>
              <span>. Looking ahead, I'm working at </span>
              <Link
                href="https://www.apple.com/"
                target="_blank"
                onMouseEnter={() => {
                  setCursor(
                    "image",
                    <div className="relative flex flex-col items-center justify-center h-24 w-32 gap-2 bg-black">
                      <div className="relative w-[95%] h-[95%]">
                        <Image
                          src={"/apple.gif"}
                          alt="gif of apple logo"
                          fill={true}
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      <p className="text-[10px] text-white">swe @ apple :)</p>
                    </div>,
                  );
                }}
                onMouseLeave={() => {
                  resetCursor();
                }}
                className="text-accent underline cursor-none"
              >
                Apple
              </Link>
              <span> this summer in Austin, TX.</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, delay: 0.2 },
              }}
            >
              <span>
                I love getting fixated on a problem and finding elegant
                solutions. As an artist and a technologist, I strive to build
                intuitive tools that draw people in. I'm obsessed with humans –
                from{" "}
              </span>
              <Link
                href="https://pages.hmc.edu/msinopoli/index.html"
                target="_blank"
                onMouseEnter={() => {
                  setCursor(
                    "image",
                    <div className="relative flex flex-col items-center justify-center h-24 w-32 gap-2 bg-black">
                      <div className="relative w-[95%] h-[95%]">
                        <Image
                          src={"/skeletal.gif"}
                          alt="gif of skeletons running"
                          fill={true}
                          className="object-cover"
                          unoptimized
                        />
                      </div>

                      <p className="text-[10px] text-white">
                        researching movement
                      </p>
                    </div>,
                  );
                }}
                onMouseLeave={() => {
                  resetCursor();
                }}
                className="text-accent underline cursor-none"
              >
                the way they move
              </Link>
              <span> to how they think</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.75, delay: 0.3 },
              }}
            >
              When I’m not coding, I’m crafting, eating my way through wherever
              I'm located, and exploring the outdoors.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.75, delay: 0.3 },
            }}
            className="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center"
          >
          
            <span className='inline'>Connect with me</span>
            <p className="select-none hidden lg:block">/</p>
            <div className="flex flex-row gap-4 opacity-70">
              <p>jasmliu [at] hmc.edu</p>
              {links.map((link, index) => {
                return (
                  <div key={index} className="">
                    <StaggerText
                      link={link}
                      onHoverStart={() => {
                        setCursor("rotated");
                      }}
                      onHoverEnd={() => {
                        resetCursor();
                      }}
                    />
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
