import React from "react";
import logo from "@/public/assets/logo.png";
import Image from "next/image.js";
import { Menu, MoveRight } from "lucide-react";
import Link from "next/link.js";

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
      <ContactUs/>
      <div className="p-2 glassEffect md:hidden">
        <Menu className="size-8" />
      </div>
    </nav>
  );
};
const ContactUs=()=>{
  return(
    <Link href='/sk_md_golam_arman_cv.pdf' download='sk_md_golam_arman_cv.pdf' className=" hidden  group md:flex origin-bottom  items-center gap-x-1  rounded-3xl bg-orangeColor p-2 sm:p-3   md:px-5">
      
        <p
          
          className=' label sm:body 2xl:heading-6 font-semibold'
        >
         Contact us
        </p>
        <div className='flex h-8  items-center justify-center'>
          <span className='inline-flex h-0 w-0 -rotate-180 transform items-center justify-center rounded-full bg-whiteColor transition-all duration-500 ease-in-out group-hover:rotate-0 group-hover:p-[0.8rem] group-hover:w-[0.9rem] group-hover:h-[0.9rem] overflow-hidden'><MoveRight className="size-4 stroke-blackColor"/></span>
        </div>
      
    </Link>
  )
}

export default Navbar;
