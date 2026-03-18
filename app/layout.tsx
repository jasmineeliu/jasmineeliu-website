import "./globals.css";
import Sidebar from "@/components/Sidebar";
import LayoutClient from "@/components/LayoutClient";
import { LayoutGroup } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen align-middle justify-center bg-[#FDFCF7]">
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
