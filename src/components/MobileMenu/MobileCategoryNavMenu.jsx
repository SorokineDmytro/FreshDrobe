import React from "react";
import { Link } from "react-router";
import { capitalizeFirstLetter } from "@/utils/stringUtils";

const MobileCategoryNavMenu = ({ category, onClose, handleCloseNav }) => {
  const handleFullClose = () => {
    onClose();
    setTimeout(() => {
      handleCloseNav();
    }, 300);
  };

  return (
    <div className="w-full h-full bg-gray-50 lg:hidden">
      <div className="h-13 flex justify-between items-center px-5 border-b border-gray-200 bg-white sticky top-0 z-10">
        <button onClick={onClose} className="text-2xl rotate-270">
          &#8963;
        </button>
        <button onClick={handleFullClose} className="text-3xl rotate-45">
          +
        </button>
      </div>

      <ul>
        <li
          key={category.id}
          className="w-full h-13 flex items-center justify-between pl-4.5 pr-7 font-['Inter',sans-serif] text-[15px] font-bold border-b border-gray-200"
        >
          <Link
            to={`/section/${category.name}`}
            className="w-full h-full flex items-center"
            onClick={handleFullClose}
          >
            {capitalizeFirstLetter(category.name)}
          </Link>
        </li>
        {category.sub_categories.map((sub) => (
          <li
            key={sub.id}
            className="w-full h-13 flex items-center justify-between pl-4.5 pr-7 font-['Inter',sans-serif] text-[13px] font-bold border-b border-gray-200"
          >
            <Link
              to={`/section/${category.name}/${sub.name}`}
              className="w-full h-full flex items-center"
              onClick={handleFullClose}
            >
              {capitalizeFirstLetter(sub.name)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileCategoryNavMenu;
