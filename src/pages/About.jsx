import React from "react";
import Wrapper from "./Wrapper";
import AboutText from "@/components/Main/About/AboutText";
import { aboutUsData } from "../../data/aboutUsData";

const About = () => {
  return (
    <Wrapper
      titleText={"À propos de nous"}
      pageContent={
        <section className="flex flex-col gap-5">
          <div className="flex gap-5 flex-col text-base md:text-lg 2xl:text-xl">
            <img
              src="/logo.png"
              alt="FreshDrobe logo"
              className="w-full md:w-56 float-right rounded-3xl object-cover"
            />
            <AboutText />
          </div>

          <ul className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
            {aboutUsData.map((elem) => (
              <li
                key={elem.id}
                className="w-full h-52 bg-white p-5 md:p-7 flex flex-col md:flex-row  md:gap-5 justify-between"
              >
                <div className="w-16 md: aspect-square md:w-20 md:h-20 bg-cyan-100/75 rounded-full flex items-center justify-center">
                  {elem.icon && <elem.icon className="text-2xl md:text-3xl" />}
                </div>
                <div className="h-[55%] flex flex-col gap-3">
                  <h3 className="font-['Inter',sans-serif] font-bold text-lg md:text-xl">
                    {elem.title}
                  </h3>
                  <p className="text-base/5 md:text-base">{elem.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      }
    />
  );
};

export default About;
