"use client"
import React from "react";
import { Bell, Cog, ReceiptText, Database, HandHelping } from "lucide-react";



const SettingSidebar = () => {
  return (
    <div className="w-48 h-screen bg-slate-300 text-black flex flex-col items-center p-4 fixed left-[15rem] top-0 mt-14">
      <div className="mb-6 text-xl font-bold">Settings</div>
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-md">
          <Bell className="text-black" />
          <span>Notification</span>
        </div>
        <div className="flex items-center space-x-2 text-md">
          <Cog className="text-black" />
          <span>System Configuration</span>
        </div>
        <div className="flex items-center space-x-2 text-md">
          <ReceiptText className="black" />
          <span>Billing</span>
        </div>
        <div className="flex items-center space-x-2 text-md">
          <Database className="black" />
          <span>Data and backup</span>
        </div>
        <div className="flex items-center space-x-2 text-md">
          <HandHelping className="text-black" />
          <span>Support</span>
        </div>
      </div>
    </div>
  );
};

export default SettingSidebar;
