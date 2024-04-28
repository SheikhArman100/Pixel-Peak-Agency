import AboutUs from "@/sections/AboutUs.jsx";
import Hero from "@/sections/Hero.jsx";
import Projects from "@/sections/Projects.jsx";
import Services from "@/sections/Services.jsx";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <AboutUs/>
      <Services/>
      <Projects/>
    </div>
  );
}
