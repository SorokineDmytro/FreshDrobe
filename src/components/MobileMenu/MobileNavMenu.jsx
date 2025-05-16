import React from "react";
import { navPagesList } from "../../../data/navPagesList";
import { categoriesList } from "../../../data/categoriesList";
import { Link, useLocation } from "react-router";
import MobileCategoryNavMenu from "./MobileCategoryNavMenu";

const MobileNavMenu = ({
  isOpen,
  setIsOpen,
  setActiveButton,
  selectedCategory,
  setSelectedCategory,
  isCategoryOpen,
  setIsCategoryOpen,
}) => {
  const location = useLocation();

  const handleCloseNav = () => {
    setIsOpen(false);
    setIsCategoryOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);

    const path = location.pathname;
    if (path === "/") setActiveButton("/");
    else if (path === "/cart") setActiveButton("/cart");
    else if (path === "/login") setActiveButton("/login");
    else setActiveButton("");
  };

  const handleCloseCategory = () => {
    setIsCategoryOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setTimeout(() => setIsCategoryOpen(true), 0);
  };

  return (
    <>
      {/* Category Slide-In */}
      {selectedCategory && (
        <div
          className={`fixed top-0 left-0 w-full h-full z-15 overflow-y-scroll lg:hidden bg-gray-50 transition-transform duration-300 ease-in-out transform ${
            isCategoryOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <MobileCategoryNavMenu
            category={selectedCategory}
            onClose={handleCloseCategory}
            handleCloseNav={handleCloseNav}
          />
        </div>
      )}

      {/* Main Mobile Menu Slide-Up */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-10 overflow-y-scroll lg:hidden bg-gray-50 transition-transform duration-300 ease-in-out transform ${
          isOpen
            ? "translate-y-0"
            : "translate-y-[calc(100vh+60px)] md:translate-y-[calc(100vh+80px)]"
        }`}
        
      >
        <style>{`
          @media(min-width: 767px) {
            .mobile-menu-height {
              height: calc(100vh - 80px) !important;
            }
          }
        `}</style>

        <div className="fixed top-0 left-0 h-13 flex justify-end items-center w-full px-5 bg-white border-b border-gray-200">
          <button onClick={handleCloseNav} className="h-full">
            <div className="text-3xl rotate-45">+</div>
          </button>
        </div>

        <div className="pt-12">
          <ul>
            {categoriesList.map((category) => (
              <li
                key={category.id}
                className="w-full h-13 flex items-center justify-between pl-4.5 pr-6 font-['Inter',sans-serif] text-[13px] font-bold border-t border-gray-200"
              >
                <button
                  onClick={() => handleCategoryClick(category)}
                  className="w-full flex items-center justify-between"
                >
                  {category.name}
                  {category.sub_categories.length > 0 && (
                    <span className="rotate-90 text-bold text-[15px]">&#8963;</span>
                  )}
                </button>
              </li>
            ))}
          </ul>

          <ul>
            {navPagesList.slice(1).map((page) => (
              <li
                key={page.linkName}
                className="w-full h-13 flex items-center justify-start px-4.5 text-[13px] border-t border-gray-200"
              >
                <Link to={page.linkPath} onClick={handleCloseNav}>
                  {page.linkName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNavMenu;
