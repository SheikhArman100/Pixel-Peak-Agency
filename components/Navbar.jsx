import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image.js";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full h-16 flex items-center justify-between ">
      <div>
        <Image src={logo} height={50} width={50} alt="Logo" />
      </div>
      <div className="h-full flex-1 t hidden md:flex justify-center">
        <ul className="h-full w-fit glassEffect flex items-center gap-x-40 px-12 body">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Project</li>
          
        </ul>
      </div>
      <button className="hidden md:block">Contact us</button>
      <div className="p-2 glassEffect md:hidden">
        <Menu className="size-8" />
      </div>
    </nav>
  );
};

export default Navbar;
