"use client";

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";
import {
    ListCollapse,
    LayoutDashboard,
    Newspaper,
    Folders,
    CreditCard,
    Settings,
    User,
} from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
    return (
        <div >
            
            <div className={`bg-white h-screen fixed top-0 mt-14 left-0 shadow-md transition-all duration-300 z-10 ${isOpen ? "w-64" : "w-16"}`}>



                <Command className="rounded-none">
                
                    <div className="flex items-center justify-between">
                        {isOpen && <CommandInput placeholder="Type to search.." />}
                        <ListCollapse
                            className="cursor-pointer"
                            onClick={toggleSidebar}
                        />
                    </div>

                    {isOpen && (
                        <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    <Link href="/">Dashboard</Link>
                                </CommandItem>
                                <CommandItem>
                                    <Newspaper className="mr-2 h-4 w-4" />
                                    <Link href="/post">Post</Link>
                                </CommandItem>
                                <CommandItem>
                                    <Folders className="mr-2 h-4 w-4" />
                                    <Link href="/categories">Categories</Link>
                                </CommandItem>
                            </CommandGroup>
                            <CommandSeparator />
                            <CommandGroup heading="Settings">
                                <CommandItem>
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </CommandItem>
                                <CommandItem>
                                    <CreditCard className="mr-2 w-4 h-4" />
                                    <span>Billing</span>
                                </CommandItem>
                                <CommandItem>
                                    <Settings className="mr-2 w-4 h-4" />
                                    <span>Settings</span>
                                </CommandItem>
                            </CommandGroup>
                        </CommandList>
                    )}
                </Command>
            </div>
        </div>
    );
};

export default Sidebar;
