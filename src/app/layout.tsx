"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import useSidebarToggle from "@/hooks/toggle"; 
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, toggleSidebar } = useSidebarToggle(); 

  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex">
      
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

          
          <div className={`p-5 transition-all ${isOpen ? "ml-64" : "ml-16"} w-full md:max-w-[1140px]`}>
            <main >{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}