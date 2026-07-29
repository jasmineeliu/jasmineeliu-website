import "./globals.css";
import Sidebar from "@/components/Sidebar";
import LayoutClient from "@/components/LayoutClient";
import { LayoutGroup } from "framer-motion";
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className='cursor-none'>
      <body className="flex h-screen align-middle justify-center bg-[#FDFCF7]">
        <Analytics/>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
