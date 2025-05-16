import { useState, useRef, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import CompanySection from "./CompanySection";
import ContactSection from "./ContactSection";
import UtilitySection from "./UtilitySection";
import CatalogPopup from "./Catalog/CatalogPopup";

const Header = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const buttonRef = useRef(null);
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsCatalogOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 1024) {
        setIsCatalogOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togglePopup = () => {
    setIsCatalogOpen((prev) => !prev);
  };

  return (
    <header className="w-full h-max px-[2%] mb-3 relative">
      <div className="2xl:w-[1630px] m-auto">
        <NavBar />
        <div className="flex justify-between items-center flex-col md:flex-row md:h-23 lg:pt-5">
          <CompanySection />
          <ContactSection />
        </div>
        <UtilitySection
          togglePopup={togglePopup}
          buttonRef={buttonRef}
        />
        <CatalogPopup
          isOpen={isCatalogOpen}
          setIsOpen={setIsCatalogOpen}
          popupRef={popupRef}
        />
      </div>
    </header>
  );
};

export default Header;
