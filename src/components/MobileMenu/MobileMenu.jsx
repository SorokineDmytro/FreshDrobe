import React, { useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import MobileNavMenu from "./MobileNavMenu";

const MobileMenu = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState("/");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const navItemClass = (buttonName) =>
    `w-full h-full flex flex-col items-center justify-center ${
      activeButton === buttonName ? "text-primary" : "text-gray-500"
    }`;

  const closeMenus = () => {
    setIsMenuOpen(false);
    setSelectedCategory(null);
    setIsCategoryOpen(false);
  };

  return (
    <>
      <ul className="fixed bottom-0 left-0 flex items-center justify-around w-full h-15 z-20 text-sm md:h-20 md:text-l lg:hidden border-t-1 border-gray-200 bg-white">
        <li className="w-full h-full flex items-center justify-center">
          <button
            onClick={() => {
              navigate("/");
              closeMenus();
              setActiveButton("/");
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
              setIsMenuOpen(true);
              setActiveButton("menu");
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
              setActiveButton("/cart");
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
              setActiveButton("search");
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
              setActiveButton("/login");
            }}
            className={navItemClass("/login")}
          >
            <FaRegUser className="text-[16px] md:text-xl" />
            <span className="mt-1">Profil</span>
          </button>
        </li>
      </ul>

      <MobileNavMenu
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        setActiveButton={setActiveButton}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isCategoryOpen={isCategoryOpen}
        setIsCategoryOpen={setIsCategoryOpen}
      />
    </>
  );
};

export default MobileMenu;
