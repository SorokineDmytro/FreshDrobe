import React from "react";
import { Link } from "react-router";
import NavBar from "./NavBar/NavBar";
import CompanySection from "./CompanySection";
import ContactSection from "./ContactSection";
import UtilitySection from "./UtilitySection";

const Header = () => {
  return (
    <header className="w-full h-max px-[2%] mb-3">
      <div className="2xl:w-[1630px] m-auto">
        <NavBar />
        <div className="flex justify-between items-center flex-col md:flex-row md:h-23 lg:pt-5">
          <CompanySection />
          <ContactSection />
        </div>
        <UtilitySection />
      </div>
    </header>
  );
};

export default Header;
