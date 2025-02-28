"use client"
import Image from 'next/image'
import Link from 'next/link'
import logo from '../app/img/logo.jpg';
import { Bell } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/app/ui/dropdown-menu"

const Navbar = () => {
    return (
        <div className="bg-cyan-700 dark:bg-slate-700 py-2 px-5 flex justify-between items-center text-white text-3xl ml-auto fixed top-0 left-0 right-0 z-50">


            <Link href='/'>
                <h1 className='text-white text-3xl'>Billing</h1>
            </Link>


            <div className="flex items-center space-x-4">

                <Bell className="text-white text-2xl cursor-pointer" />


                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <Image className='rounded-lg justify-end' src={logo} alt='sugamshrestha' width={40} />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>
                        <DropdownMenuItem>Team</DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href='/login'>Logout</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}

export default Navbar;
