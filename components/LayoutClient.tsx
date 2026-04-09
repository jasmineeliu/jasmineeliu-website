"use client";

import Sidebar from "@/components/Sidebar";
import { CursorProvider } from "@/components/CursorProvider";
import { usePathname } from "next/navigation";

export default function LayoutClient({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const tabs = [
    { href: "/", path_name: "me" },
    { href: "/work", path_name: "work" },
    { href: "/play", path_name: "play" },
  ];

  return (
    <CursorProvider>
      <div className='w-[80%] py-[7%] flex flex-row bg-[#FDFCF7]'>
        <Sidebar tabs={tabs} currentTab={pathname} />
        {children}
      </div>
    </CursorProvider>
      
  );
}