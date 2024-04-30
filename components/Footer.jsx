import { ArrowRight, Facebook, Instagram, Sparkle, Twitter } from 'lucide-react'
import Link from 'next/link.js'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full flex flex-col gap-y-8 bg-black px-6  sm:px-8  md:px-[2.5rem] xl:px-[4rem] 2xl:px-[8rem]  ">
      <article className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-[8rem] ">
        <section className="flex flex-col gap-y-2 py-[2rem] border-b border-customWhite">
          <div className="flex items-center">
          <Sparkle  className="stroke-none fill-orangeColor size-8" />
            <h3 className="heading-5 uppercase font-semibold">Info</h3>
          </div>
          <ul className="flex items-center gap-2 flex-wrap   uppercase ">
            <li className="py-2 px-3 border border-whiteColor label md:body font-semibold rounded-full">
              Services
            </li>
            <li className="py-2 px-3 border border-whiteColor label md:body font-semibold rounded-full">
              About
            </li>
            <li className="py-2 px-3 border bg-whiteColor text-blackColor border-whiteColor label md:body font-bold rounded-full flex items-center gap-x-1">
              Projects <ArrowRight  className="-rotate-45 size-5" />
            </li>
            <li className="py-2 px-3 border border-whiteColor label md:body font-semibold rounded-full">
              Contact
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-y-2 py-[2rem] border-b border-customWhite">
          <div className="flex items-center">
          <Sparkle  className="stroke-none fill-orangeColor size-8" />
            <h3 className="heading-5  uppercase font-semibold">
              Discover
            </h3>
          </div>
          <ul className="flex items-center gap-2 flex-wrap   uppercase ">
            <li className="py-2 px-3 border border-whiteColor label md:body font-semibold rounded-full">
              Photography
            </li>
            <li className="py-2 px-3 border border-whiteColor label md:body font-semibold rounded-full">
              Cinematography
            </li>

            <li className="py-2 px-3 border border-whiteColor label md:body font-semibold rounded-full">
              Commercial
            </li>
          </ul>
        </section>
        <section className="flex flex-col gap-y-2 py-[2rem]">
          <div className="flex items-center">
          <Sparkle  className="stroke-none fill-orangeColor size-8" />
            <h3 className="heading-5 uppercase font-semibold">Contact</h3>
          </div>
          <ul className="flex items-center gap-2 flex-wrap     ">
            <li className="py-2 px-3 border border-whiteColor label md:body font-semibold rounded-full">
              [+88] 01761264426
            </li>

            <li className="py-2 px-3 border bg-whiteColor text-blackColor border-whiteColor label md:body font-bold rounded-full flex items-center gap-x-1">
            <span>contact.pixelpeak.solutions@gmail.com</span>
              <ArrowRight size={16} className="-rotate-45" />
            </li>
          </ul>
        </section>
        {/* <section className="flex flex-col gap-y-2 py-[2rem]">
          <div className="flex items-center">
            
            <h3 className="text-base font2 uppercase font-semibold">
              NewsLetter
            </h3>
          </div>
          <form className="flex items-center gap-x-2 ">
            <input
              type="email"
              className="bg-transparent border border-customOffWhite py-2 pl-3  pr-16 rounded-full text-xs font2 font-bold"
            />
            <button
              type="submit"
              className="py-2 px-3 border bg-customWhite text-customBlack text-xs font-bold rounded-full flex items-center gap-x-1 uppercase font2"
            >
              Subscribe
              <ArrowRight size={16} className="-rotate-45" />
            </button>
          </form>
        </section> */}
      </article>

      <section className="border-t border-customWhite h-16 grid grid-cols-2 md:grid-cols-3 items-center">
        <div className="flex items-center justify-start gap-x-2 flex-grow ">
          
          {/* <Sparkle size={34} className="stroke-transparent fill-customOrange" /> */}
          <span className="heading-4 lg:heading-3 font-semibold">
            Pixel peak
          </span>
        </div>
        <p className=" uppercase text-sm font-medium flex items-center  justify-center"><span className='hidden sm:block md:hidden lg:block'>All rights reserved to</span> @Pixel Peak 2023</p>
        <div className="hidden md:flex items-center justify-end gap-x-1">
            <Twitter className="stroke-blackColor fill-orangeColor cursor-pointer size-7"/>
            <Instagram  className="stroke-blackColor fill-orangeColor cursor-pointer size-7"/>
            <Facebook  className="stroke-blackColor fill-orangeColor cursor-pointer size-7"/>
        </div>
      </section>
    </footer>
  )
}

export default Footer