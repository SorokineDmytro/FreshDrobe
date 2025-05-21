import React, { useState } from "react";
import { categoriesList } from "../../../../../data/categoriesList";
import { Link } from "react-router";

import Dropdown from "@/components/UI/Dropdowns/Dropdown";
import CategoryPlatesItem from "./CategoryPlatesItem";

const CategoryPlates = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleCatalog = () => {
    setIsExpanded((prev) => !prev);
  };
  const maxHeight = isExpanded ? 9999 : 480;

  return (
    <div className="relative mt-5 md:mt-3 w-full h-full flex flex-col gap-y-3">
      <ul
        className={`relative pb-3 overflow-hidden grid grid-cols-1 md:grid-cols-3 lg:grid-cols-[repeat(auto-fill,minmax(236px,1fr))] auto-rows-[68px] md:auto-rows-[130px] md:grid-rows-[92px] lg:auto-rows-[168px] lg:grid-rows-[168px] gap-y-3 md:gap-5 lg:gap-y-7.5 transition-all duration-500 ease-in-out`}
        style={{
          maxHeight: window.innerWidth < 768 ? `${maxHeight}px` : "none",
        }}
      >
        <li
          key="all"
          className="flex flex-col md:flex-row lg:flex-col items-center justify-between row-span-2 md:row-span-1 md:col-span-3 lg:col-span-1 lg:row-span-2 w-full h-full p-4 md:p-5 lg:p-8.5 bg-primary rounded-4xl"
        >
          <div className="flex flex-col gap-2 items-center md:items-start ">
            <h3 className="flex items-center justify-center font-['Inter',sans-serif] font-bold text-md md:text-lg lg:text-xl text-white ">
              Catégories populaires
            </h3>
            <p className="text-white/75 text-sm lg:text-base">Plus de 100 produits</p>
          </div>
          <Link
            to="/categories"
            className="w-full md:w-fit h-10 md:h-11 lg:h-12 font-['Inter',sans-serif] text-[15px] font-bold text-white border-white/50 border-1 rounded-4xl px-5 flex items-center justify-center hover:bg-sky-300/30 hover:border-white/75 duration-300 ease-in-out"
          >
            Au catalogue
          </Link>
        </li>
        {categoriesList.map((category) => (
          <CategoryPlatesItem category={category} key={category.id}/>
        ))}
      </ul>

      {/* Toggle Button */}
      <div className="block md:hidden">
        <Dropdown funcName={toggleCatalog} stateName={isExpanded} />
      </div>
    </div>
  );
};

export default CategoryPlates;
