import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import MobilePopup from "./MobilePopup";
import MobileNavMenu from "./MobileNavMenu";
import MobileSearchMenu from "./MobileSearchMenu";

const MobileMenu = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  // For route-based buttons
  const [activeButton, setActiveButton] = useState("/");
  // For menu/search temporary active state
  const [activeOverlay, setActiveOverlay] = useState("");

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setActiveButton("/");
    else if (path === "/cart") setActiveButton("/cart");
    else if (path === "/login") setActiveButton("/login");
    else setActiveButton("");

    // Reset overlay (search/menu) when route changes
    setActiveOverlay("");
  }, [location.pathname]);

  const navItemClass = (buttonName) => {
    const isActive = activeOverlay
      ? activeOverlay === buttonName
      : activeButton === buttonName;

    return `w-full h-full flex flex-col items-center justify-center ${
      isActive ? "text-primary" : "text-gray-500"
    }`;
  };

  const closeMenus = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setSelectedCategory(null);
    setIsCategoryOpen(false);
    setActiveOverlay("");
  };

  return (
    <>
      <ul className="fixed bottom-0 left-0 flex items-center justify-around w-full h-15 z-20 text-sm md:h-20 md:text-l lg:hidden border-t-1 border-gray-200 bg-white">
        <li className="w-full h-full flex items-center justify-center">
          <button
            onClick={() => {
              navigate("/");
              closeMenus();
            }}
            className={navItemClass("/")}
          >
            <AiOutlineHome className="text-xl md:text-2xl" />
            <span className="mt-1">Accueil</span>
          </button>
        </li>

        <li className="w-full h-full flex items-center justify-center">
          <button
            onClick={() => {
              closeMenus();
              setIsMenuOpen(true);
              setActiveOverlay("menu");
            }}
            className={navItemClass("menu")}
          >
            <HiMiniBars3 className="text-xl md:text-2xl" />
            <span className="mt-1">Menu</span>
          </button>
        </li>

        <li className="w-full h-full flex items-center justify-center">
          <button
            onClick={() => {
              navigate("/cart");
              closeMenus();
            }}
            className={navItemClass("/cart")}
          >
            <BsCart3 className="text-[16px] md:text-xl" />
            <span className="mt-1">Panier</span>
          </button>
        </li>

        <li className="w-full h-full flex items-center justify-center">
          <button
            onClick={() => {
              closeMenus();
              setIsSearchOpen(true);
              setActiveOverlay("search");
            }}
            className={navItemClass("search")}
          >
            <IoSearchSharp className="text-xl md:text-2xl" />
            <span className="mt-1">Recherche</span>
          </button>
        </li>

        <li className="w-full h-full flex items-center justify-center">
          <button
            onClick={() => {
              navigate("/login");
              closeMenus();
            }}
            className={navItemClass("/login")}
          >
            <FaRegUser className="text-[16px] md:text-xl" />
            <span className="mt-1">Profil</span>
          </button>
        </li>
      </ul>

      {/* Popup for the Menu */}
      <MobilePopup isOpen={isMenuOpen} onClose={closeMenus}>
        <MobileNavMenu
          setIsOpen={setIsMenuOpen}
          setSelectedCategory={setSelectedCategory}
          selectedCategory={selectedCategory}
          isCategoryOpen={isCategoryOpen}
          setIsCategoryOpen={setIsCategoryOpen}
        />
      </MobilePopup>

      {/* Popup for Search */}
      <MobilePopup
        isOpen={isSearchOpen}
        onClose={() => {
          setIsSearchOpen(false);
          setActiveOverlay("");
        }}
      >
        <MobileSearchMenu
          onClose={() => {
            setIsSearchOpen(false);
            setActiveOverlay("");
          }}
        />
      </MobilePopup>
    </>
  );
};

export default MobileMenu;
