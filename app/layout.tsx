"use client";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { LayoutGroup } from "framer-motion";
import { useState } from "react";
import { interpolate } from "flubber"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tabs = [
    {
      href: "/",
      path_name: "me",
    },
    {
      href: "/work",
      path_name: "work",
    },
    {
      href: "/play",
      path_name: "play",
    },
  ];

  const [currentTab, setCurrentTab] = useState("/");

  return (
    <html lang="en">
      <body className="flex h-screen lg:px-[10%] lg:py-[7%] bg-[#f5f4e4]">
        <LayoutGroup>
          <Sidebar
            tabs={tabs}
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          />
          <main>{children}</main>
        </LayoutGroup>
      </body>
    </html>
  );
}
