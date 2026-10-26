"use client";

import Sidebar from "@/components/Sidebar";
import { CursorProvider } from "@/components/CursorProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CatPage from "@/components/cat";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { star_path, flower_path } from "@/components/Sidebar";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "./hooks";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const tabs = [
    { href: "/", path_name: "me" },
    { href: "/work", path_name: "work" },
    // { href: "/play", path_name: "play" },
  ];

  const [navigationOpen, setNavigationOpen] = useState(false);

  return (
    <CursorProvider>
      {isMobile ? (
        <div className="flex flex-col w-full gap-2  items-center justify-center bg-[#FDFCF7]">
          <div className="sticky top-0 pt-[3%] px-[1%] z-100 w-full bg-[#FDFCF7]">
            {/* <div className='flex justify-end gap-8 text-sm'>
            {tabs.map((link, idx) => (
              <div key={idx}>
              <Link href={link.href}  className="cursor-none" >
                  <p                   
                  className={
                    link.href === pathname ? "text-accent" : "text-[#0D0B21]"
                  }>{link.path_name}</p>
                </Link>
              </div>
            ))}
            </div> */}

            {/* old code for if i want dropdown */}

            <div className="sticky top-0 z-50 flex w-full items-center justify-end  bg-[#FDFCF7] px-[5%]">
              <div onClick={() => setNavigationOpen((prev) => !prev)}>
                <IconButton color="inherit" aria-label="menu" disableRipple>
                  <MenuIcon />
                </IconButton>
              </div>
            </div>

            {/* Dropdown menu */}
            <AnimatePresence>
              {navigationOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                  }}
                  className="absolute left-0 top-full z-50 flex w-full flex-col  bg-[#FDFCF7] shadow-md pb-4 px-4"
                >
                  <div className="py-2 flex flex-col gap-2">
                    {/* <p>Navigation</p> */}
                    {tabs.map((link) => (
                      <div key={link.href} className="flex w-full items-center">
                        <Link href={link.href} className="cursor-none" onClick={() => setNavigationOpen((prev) => !prev)}>
                          <div className="flex flex-row items-center gap-4">
                            <svg
                              width={18}
                              height={18}
                              viewBox="0 0 480 483"
                              className="pt-1"
                            >
                              <path
                                d={
                                  link.href === pathname
                                    ? flower_path
                                    : star_path
                                }
                                fill={
                                  link.href === pathname ? "#4361E9" : "#0D0B21"
                                }
                              />
                            </svg>
                            <p
                              className={
                                link.href === pathname
                                  ? "text-accent"
                                  : "text-[#0D0B21]"
                              }
                            >
                              {link.path_name}
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex flex-row items-center justify-center my-[5%]">
            {children}
          </div>
          <div className="h-full">
            <CatPage />
          </div>
        </div>
      ) : (
        <div className="w-[80%] py-[7%] flex flex-row bg-[#FDFCF7]">
          <Sidebar tabs={tabs} currentTab={pathname} />
          {children}
        </div>
      )}
    </CursorProvider>
  );
}
