"use client";
import StaggerText from "@/components/stagger-text";
import CustomCursor, { CursorState } from "@/components/CustomCursor";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [mouseState, setMouseState] = useState<CursorState>("default");
  const [mouseChildren, setMouseChildren] = useState<React.ReactNode>(null);

  const links = [
    { link_name: "GitHub", link: "https://github.com/jasmineeliu" },
    { link_name: "LinkedIn", link: "https://linkedin.com/in/jasmineeliu" },
  ];

  return (
    <>
      <CustomCursor eventType={mouseState} children={mouseChildren} />
      <div className="flex flex-row gap-8 px-20 justify-between pb-10 items-center h-[100%] w-[100%]">
        <div className="w-[80%] flex flex-col gap-8">
          <h1 className="text-2xl">hello – i’m jasmine </h1>
          <div className="flex flex-col gap-4">
            <div>
              {" "}
              <span>
                I’m a software developer, creative, and life-long learner. Born
                and raised in LA, I’m currently studying Computer Science + Math
                at Harvey Mudd College. Looking ahead, I'm working at{" "}
              </span>
              <Link
                href="https://www.apple.com/" 
                target="_blank"
                onMouseEnter={() => {
                  setMouseState('image');
                  setMouseChildren(()=> {
                    return (
                    <div className='relative flex flex-col items-center justify-center h-24 w-32 gap-2 bg-black'>
                      <div className='relative w-[95%] h-[95%]'>
                        <Image 
                          src={'/apple.gif'}
                          alt="image"
                          fill={true}
                          className='object-cover'
                        />
                      </div>
                      
                      <p className='text-[10px] text-white'>swe @ apple :)</p>
                    </div>
                    )
                  })
                }}
                onMouseLeave={() => {
                  setMouseState('default');
                  setMouseChildren(null);
                }}
                className="text-accent underline cursor-none">
                Apple
              </Link>
              <span> this summer in Austin, TX.</span>
            </div>

            <div>
              <span>
                I love getting fixated on a problem and finding elegant
                solutions. As an artist and a technologist, I strive to build
                intuitive tools that draw people in. I'm obsessed with humans –
                from </span>
              <Link
                href="https://pages.hmc.edu/msinopoli/index.html" 
                target="_blank"
                onMouseEnter={() => {
                  setMouseState('image');
                  setMouseChildren(()=> {
                    return (
                    <div className='relative flex flex-col items-center justify-center h-24 w-32 gap-2 bg-black'>
                      <div className='relative w-[95%] h-[95%]'>
                        <Image 
                          src={'/skeletal.gif'}
                          alt="image"
                          fill={true}
                          className='object-cover'
                        />
                      </div>
                      
                      <p className='text-[10px] text-white'>researching movement</p>
                    </div>
                    )
                  })
                }}
                onMouseLeave={() => {
                  setMouseState('default');
                  setMouseChildren(null);
                }}
                className="text-accent underline cursor-none">
                 the way they move
              </Link>
              <span> to how they think</span>
            </div>

            <p>
              When I’m not coding, I’m crafting, eating my way through wherever
              I'm located, and exploring the outdoors.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <p>Connect with me</p>
            <p>/</p>
            <div className="flex flex-row gap-4 opacity-70">
              <p>jasmliu [at] hmc.edu</p>
              {links.map((link, index) => {
                return (
                  <div key={index} className="">
                    <StaggerText link={link} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
