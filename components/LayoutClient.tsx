"use client";

import Sidebar from "@/components/Sidebar";
import { CursorProvider } from "@/components/CursorProvider";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import CatPage from "@/components/cat";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 991px)");
    setIsMobile(media.matches);

    const listener = () => setIsMobile(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, []);

  return isMobile;
}

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobile = useIsMobile();


  const tabs = [
    { href: "/", path_name: "me" },
    // { href: "/work", path_name: "work" },
    // { href: "/play", path_name: "play" },
  ];

  return (
    <CursorProvider>
      {isMobile ? (
        <div className='flex flex-col w-full gap-2  items-center justify-center mt-[22.5%] bg-[#FDFCF7]'>
        <div className='flex flex-row items-center justify-center'>
          {children}
        </div>
        <div className='h-full'>
          <CatPage />
        </div>
        
      </div>) :
      
      (<div className='w-[80%] py-[7%] flex flex-row bg-[#FDFCF7]'>
        <Sidebar tabs={tabs} currentTab={pathname} />
        {children}
      </div>)}
    </CursorProvider>
      
  );
}