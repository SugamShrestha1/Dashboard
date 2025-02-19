
"use client"
import Image from 'next/image'
import Link from 'next/link'
import logo from '../img/logo.jpg';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {


    return (
        <div className="bg-primary dark:bg-slate-700 py-2 px-5 flex justify-between item-center text-white text-3xl ml-auto">
            <Link href='/'> <h1 className='text-white text-3xl '>Billing</h1> </Link>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Image className='rounded-lg justify-end ' src={logo} alt='sugam shrestha' width={40} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>Profile</DropdownMenuItem>
                    <DropdownMenuItem>Billing</DropdownMenuItem>
                    <DropdownMenuItem>Team</DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href='/auth'>Logout</Link>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}
export default Navbar;;

