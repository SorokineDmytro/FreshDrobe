import React from "react";
import { Link } from "react-router";
import { categoriesList } from "../../../../data/categoriesList";
import Catalog from "./Catalog";

const CatalogPopup = ({ isOpen, setIsOpen, popupRef }) => {
  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      className="max-w-[1630px] w-full h-fit mt-3 bg-white absolute rounded-4xl p-10 lg:grid grid-cols-4 gap-x-25 gap-y-10 z-30 shadow-sm"
    >
      {categoriesList.map((category) => (
        <Catalog setIsOpen={setIsOpen} category={category}/>
      ))}
    </div>
  );
};

export default CatalogPopup;
