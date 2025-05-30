import React from "react";
import AboutText from "../About/AboutText";

const AboutUsBlock = () => {
  return (
    <section className="flex flex-col gap-3 my-5">
      <h2 className="font-['Inter',sans-serif] font-bold md:text-lg lg:text-[21px]">
        Boutique de vêtements FreshDrobe
      </h2>
      <div className="text-sm lg:text-base">
        <AboutText />
      </div>
    </section>
  );
};

export default AboutUsBlock;
