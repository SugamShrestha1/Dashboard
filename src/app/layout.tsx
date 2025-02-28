"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import useSidebarToggle from "@/hooks/toggle";
import "./globals.css";
import SettingSidebar from "@/app/settings/page";
import { useState } from "react";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isOpen, toggleSidebar } = useSidebarToggle();
  const [showSecondSidebar, setShowSecondSidebar] = useState(false);

  const handleSettingsClick = () => {
    setShowSecondSidebar((prev) => !prev);
  };

  return (
    <html lang="en">
      <body>
        <Navbar/>
        <div className="flex">

          <div className="flex transition-all">

            <div className={`transition-all ${isOpen ? "w-64" : "w-16"}`}>
              <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} onSettingsClick={handleSettingsClick} />
            </div>
            {showSecondSidebar && (
              <div className={`transition-all bg-gray-200 ${isOpen ? "w-64" : "w-60"}`}>
                <SettingSidebar />
              </div>
            )}
          </div>


          <div className="p-5 flex-1 pt-14">
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
