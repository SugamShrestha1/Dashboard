"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import {
  ListCollapse, LayoutDashboard, Settings, User, Boxes, BadgeDollarSign, CreditCard, PiggyBank, Layers2, Flag
} from "lucide-react";
import {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandSeparator,
} from "@/app/ui/command";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/ui/dropdown-menu"

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleSettingsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(pathname === "/settings" ? "/" : "/settings");
  };

  const handleNavigation = (path: string) => {
    router.push(path);
  };


  return (
    <div className="h-screen fixed top-0 mt-14 left-0 shadow-md transition-all duration-300 z-10 flex">
      <Command className="rounded-none bg-blue-900 h-full flex flex-col">
        <div className="flex items-center justify-between p-2">
          {isOpen && (
            <CommandInput className="text-white font-semibold" placeholder="Type to search..." />
          )}
          <ListCollapse className="cursor-pointer text-white" onClick={toggleSidebar} />
        </div>

        {isOpen && (
          <CommandList className=" flex-1  max-h-screen">
            <CommandGroup heading="Navigation">
              <div className="space-y-6">
                <CommandItem className="text-white font-semibold">
                  <LayoutDashboard className="mr-2 h-4 w-4 text-white" />
                  <Link href="/">Dashboard</Link>
                </CommandItem>
                <CommandItem className="text-white font-semibold">
                  <Boxes className="mr-2 h-4 w-4 text-white" />
                  <Link href="/inventory">Inventory</Link>
                </CommandItem>

                <CommandItem className="text-white font-semibold">

                  <DropdownMenu >
                    <DropdownMenuTrigger className="flex items-center space-x-2 cursor-pointer">
                      <BadgeDollarSign className="mr-2 h-4 w-4 text-white" />
                      <span>Sales</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-white text-black">
                      <DropdownMenuItem onClick={() => handleNavigation("/sales/invoices")}>
                        Invoices
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/sales/quotes")}>
                        Revenue
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/sales/orders")}>
                        Orders
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleNavigation("/sales/returns")}>
                        Customers
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </CommandItem>
                <CommandItem className="text-white font-semibold">
                  <CreditCard className="mr-2 h-4 w-4 text-white" />
                  <Link href="/categories">Purchases</Link>
                </CommandItem>
                <CommandItem className="text-white font-semibold">
                  <PiggyBank className="mr-2 h-4 w-4 text-white" />
                  <Link href="/categories">Banking</Link>
                </CommandItem>
                <CommandItem className="text-white font-semibold">
                  <Layers2 className="mr-2 h-4 w-4 text-white" />
                  <Link href="/categories">Double Entry</Link>
                </CommandItem>
                <CommandItem className="text-white font-semibold">
                  <Flag className="mr-2 h-4 w-4 text-white" />
                  <Link href="/reports">Reports</Link>
                </CommandItem>
              </div>
            </CommandGroup>


            <CommandSeparator />
            <CommandGroup heading="Settings">
              <div className="space-y-6">
                <CommandItem className="text-white font-semibold">
                  <Settings className="mr-2 w-4 h-4 text-white font-semibold" />
                  <Link href="/settings" onClick={handleSettingsClick}>
                    <span>Settings</span>
                  </Link>
                </CommandItem>
                <CommandItem className="text-white font-semibold">
                  <User className="mr-2 w-4 h-4 text-white font-semibold" />
                  <span>Apps</span>
                </CommandItem>
              </div>
            </CommandGroup>
          </CommandList>
        )}
      </Command>
    </div>
  );
};

export default Sidebar;
