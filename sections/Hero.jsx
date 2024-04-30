import Image from "next/image.js";
import React from "react";
import hero from "@/public/assets/hero.jpg";
import vector1 from "@/public/assets/vector1.svg";
import Navbar from "@/components/Navbar.jsx";

const Hero = () => {
  return (
    <article className="w-full min-h-screen py-4 flex flex-col md:py-6">
      <Navbar />
      <section className="w-full flex-1 flex flex-col gap-4 md:gap-12 mt-14 md:mt-28">
        <div className="flex flex-col xl:flex-row justify-between xl:items-center">
          <h1 className="heading-2 sm:heading-1 md::display-3 2xl:display-2 font-light md:font-semibold w-full lg:w-fit capitalize ">
            Building digital products,
            <br className="hidden md:block" />brands & experience.
          </h1>
          <p className=" max-w-xs text-center p-2 h-fit text-greyColor hidden xl:block">
            We are a team of experts who design, develop, and implement
            technology solutions to meet your business needs, from software and
            web development to SEO and cybersecurity.
          </p>
        </div>
        <div className="relative w-full flex-1 min-h-60 glassEffect rounded-lg bg-red-500">
          <Image
            src={hero}
            alt="Hero Image"
            fill
            className="object-cover rounded-lg"
          />
          <div className="absolute w-full left-4 bottom-4 flex flex-wrap gap-2 max-w-sm ">
            <Feature title="E-Commerce" />
            <Feature title="SaaS" />
            <Feature title="Portfolio" />
            <Feature title="Agency" />
            <Feature title="Custom website" />
          </div>
        </div>
      </section>
    </article>
  );
};
const Feature = ({ title }) => {
  return (
    <div className="py-2 px-4 glassEffect border border-whiteColor text-whiteColor flex items-center gap-2 first:bg-whiteColor first:text-black fill-white first:fill-black">
      <p className="label sm:body font-medium">{title}</p>
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="size-4 "
      >
        <g clipPath="url(#clip0_606_781)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M107.143 0H92.8571V63.2531L69.1621 4.60582L55.9166 9.95735L80.2255 70.1239L34.3401 24.2385L24.2386 34.3401L68.2177 78.3191L11.2241 53.4181L5.50459 66.5089L65.8105 92.8571H0V107.143H65.8104L5.50461 133.491L11.2241 146.582L68.2176 121.681L24.2386 165.66L34.3401 175.761L80.2255 129.876L55.9166 190.043L69.1621 195.394L92.8571 136.747V200H107.143V136.747L130.838 195.394L144.083 190.043L119.775 129.876L165.66 175.761L175.761 165.66L131.782 121.681L188.776 146.582L194.495 133.491L134.19 107.143H200V92.8571H134.189L194.495 66.5089L188.776 53.4181L131.782 78.3191L175.761 34.34L165.66 24.2385L119.775 70.1238L144.083 9.95735L130.838 4.60582L107.143 63.2531V0Z"
            className=" "
          />
        </g>
        <defs>
          <clipPath id="clip0_606_781">
            <rect width="200" height="200" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Hero;
