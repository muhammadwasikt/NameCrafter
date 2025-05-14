"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useState } from "react";


const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(0);
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > isScrolling) {
      setIsVisible(false);
    }
    else {
      setIsVisible(true);
    }
    setIsScrolling(window.scrollY);
  }

  const handleSidebar = () => {
    setOpenSidebar(!openSidebar);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);
  return (
    <nav className={`bg-muted shadow-md sticky top-0 w-full ${isVisible ? "translate-y-0" : "-translate-y-full"} transition-transform duration-300 ease-in-out z-50`}>
      <div className="max-w-7xl mx-auto  px-1 min-[250px]:px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text bg-gradient-to-r from-pink-600 to-orange-400 text-transparent tracking-tighter">
          NameCrafter
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-lg items-center">
          <Link href="/home" className="text-pink-600 hover:text-orange-400">Home</Link>
          <Link href="/about" className="text-pink-600 hover:text-orange-400">About</Link>
          <Link href="/contact" className="text-pink-600 hover:text-orange-400">Contact</Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={openSidebar} onOpenChange={setOpenSidebar}>
            <SheetTrigger asChild>
              <Button variant="secondary" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-6 flex flex-col bg-muted">
              <Link href="/home" onClick={()=>handleSidebar()} className="text-lg font-medium bg-clip-text bg-pink-500 text-transparent active:text-orange-400">Home</Link>
              <Link href="/about" onClick={()=>handleSidebar()} className="text-lg font-medium bg-clip-text bg-pink-500 text-transparent active:text-orange-400">About</Link>
              <Link href="/contact" onClick={()=>handleSidebar()} className="text-lg font-medium bg-clip-text bg-pink-500 text-transparent active:text-orange-400">Contact</Link>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </nav>
  );
}


export default Navbar;