import SectionTitle from "@/components/SectionTitle.jsx";
import { Bug, Globe, Monitor, Search, Smartphone } from "lucide-react";

const Services = () => {
  return (
    <article className="w-full min-h-screen py-4 flex flex-col md:py-6">
      <div className="flex items-center justify-center">
        <SectionTitle title="Services"  icon={<Globe className="size-6" />}/>
      </div>
      <section className="flex-1 flex flex-col justify-center  gap-3 sm:gap-6 xl:gap-12 2xl:gap-20">
        <h3 className="heading-3 sm:heading-2 md:heading-1 2xl:display-3 capitalize max-w-4xl text-center mx-auto font-light md:font-medium ">
          We offer comprehensive range of personalize services to meet your
          <span className="bg-orangeColor text-whiteColor ml-2 px-1 md:px-3 py-0 capitalize rounded-lg w-fit whitespace-nowrap ">Unique needs.</span>
        </h3>
        <div className="  flex items-center justify-center">
          <div className="w-fit h-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 auto-rows-fr">
            <Service
              icon={<Monitor className="stroke-orangeColor -rotate-45" />}
              title="Web Development"
              description="ReactJS, NextJS, NodeJS, MongoDB, Wordpress"
            />
            <Service
              icon={<Smartphone className="stroke-orangeColor -rotate-45" />}
              title="App Development"
              description="Flutter, React Native, Kotlin, Swift, IOS"
            />
            <Service
              icon={<Search className="stroke-orangeColor -rotate-45" />}
              title="SEO Optimization"
              description="Google search, Google analytics, CMS"
            />
            <Service
              icon={<Bug className="stroke-orangeColor -rotate-45" />}
              title="Software Quality Assurance"
              description="Selenium, Cypress, API testing"
            />
          </div>
        </div>
      </section>
    </article>
  );
};

const Service = ({ icon, title, description }) => {
  return (
    <div className="w-full   max-w-80  px-4 md:px-8 py-8 xl:py-12 2xl:py-16   rounded-lg glassEffect2 flex items-center  justify-center">
      <div className="w-full h-full  flex flex-col items-center  ">
        <div className="p-3 border border-greyColor/45 rounded-lg rotate-45  ">
          <div className="p-3 border border-greyColor rounded-lg  ">{icon}</div>
        </div>
        <span className="heading-6 font-bold mt-4 text-center">{title}</span>
        {/* <p className="body text-center mt-2 font-normal text-greyColor">{description}</p> */}
        <div className="mt-2 flex flex-wrap justify-center gap-1">
          {description.split(",").map((tech, index) => (
            <p
              key={index}
              className="label  text-center  font-normal  text-whiteColor glassEffect2 py-2 px-4   rounded-lg"
            >
              {tech}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
