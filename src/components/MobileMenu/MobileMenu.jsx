import React from "react";
import { useLocation, useNavigate } from "react-router";
import { AiOutlineHome } from "react-icons/ai";
import { HiMiniBars3 } from "react-icons/hi2";
import { BsCart3 } from "react-icons/bs";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const MobileMenu = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const isActive = (path) => location.pathname === path
  const navItemClass = (active) =>
    `w-full h-full flex flex-col items-center justify-center ${
      active ? 'text-primary' : 'text-gray-500'
    }`

  return (
    <ul className="fixed bottom-0 left-0 flex items-center justify-around w-full h-15 text-sm md:h-20 md:text-l lg:hidden border-t-1 border-gray-200 bg-white">
      <li className="w-full h-full flex items-center justify-center">
        <button onClick={() => navigate('/')} className={navItemClass(isActive('/'))}>
          <AiOutlineHome className="text-xl md:text-2xl" />
          <span className="mt-1">Accueil</span>
        </button>
      </li>
      <li className="w-full h-full flex items-center justify-center">
        <button className={navItemClass(false)}>
          <HiMiniBars3 className="text-xl md:text-2xl" />
          <span className="mt-1">Menu</span>
        </button>
      </li>
      <li className="w-full h-full flex items-center justify-center">
        <button onClick={() => navigate('/cart')} className={navItemClass(isActive('/cart'))}>
          <BsCart3 className="text-[16px] md:text-xl" />
          <span className="mt-1">Panier</span>
        </button>
      </li>
      <li className="w-full h-full flex items-center justify-center">
        <button className={navItemClass(false)}>
          <IoSearchSharp className="text-xl md:text-2xl" />
          <span className="mt-1">Recherche</span>
        </button>
      </li>
      <li className="w-full h-full flex items-center justify-center">
        <button onClick={() => navigate('/login')} className={navItemClass(isActive('/login'))}>
          <FaRegUser className="text-[16px] md:text-xl" />
          <span className="mt-1">Profil</span>
        </button>
      </li>
    </ul>
  )
}

export default MobileMenu;
