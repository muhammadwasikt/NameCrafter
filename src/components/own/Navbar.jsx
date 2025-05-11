"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";


const Navbar = () => {
  return (
    <nav className="bg-muted shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto  px-1 min-[250px]:px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 text-transparent tracking-tighter">
          NameCrafter
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg items-center">
          <Link href="/" className="text-pink-600 hover:text-orange-400">Home</Link>
          <Link href="#categories" className="text-pink-600 hover:text-orange-400">Categories</Link>
          <Link href="#about" className="text-pink-600 hover:text-orange-400">About</Link>
          <Link href="#contact" className="text-pink-600 hover:text-orange-400">Contact</Link>
          <Button className="rounded-full text-white bg-gradient-to-r from-pink-600 to-orange-400">
            Generate
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 flex flex-col ">
              <Link href="/" className="text-lg font-medium text-gray-900">Home</Link>
              <Link href="#categories" className="text-lg font-medium text-gray-900">Categories</Link>
              <Link href="#about" className="text-lg font-medium text-gray-900">About</Link>
              <Link href="#contact" className="text-lg font-medium text-gray-900">Contact</Link>
              <Button className="rounded-full bg-blue-600 hover:bg-blue-700 text-white">
                Generate
              </Button>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}


export default Navbar;