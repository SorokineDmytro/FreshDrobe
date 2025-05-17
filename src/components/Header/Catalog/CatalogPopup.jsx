import React from "react";
import { Link } from "react-router";
import { categoriesList } from "../../../../data/categoriesList";

const CatalogPopup = ({ isOpen, setIsOpen, popupRef }) => {
  if (!isOpen) return null;

  return (
    <div
      ref={popupRef}
      className="max-w-[1630px] w-full h-fit mt-3 bg-white absolute rounded-4xl p-10 lg:grid grid-cols-4 gap-x-25 gap-y-10"
    >
      {categoriesList.map((category) => (
        <div key={category.id} className="w-auto h-fit">
          <Link
            to={`/section/${category.name.toLowerCase()}`}
            onClick={() => setIsOpen(false)}
            className="flex gap-6 w-full h-fit items-center bg-white mb-3 cursor-pointer hover:text-primary hover:duration-200 duration-200 hover:ease-in-out"
          >
            <img src={category.image} alt="" className="w-10 h-10" />
            <h2 className="text-2xl text-[16px]">{category.name}</h2>
          </Link>
          <ul className="w-full h-fit flex flex-col border-t-1 border-gray-100 pt-3">
            {category.sub_categories.map((sub_category) => (
              <li key={sub_category.id} className="h-9 pl-2">
                <Link
                  to={`/section/${category.name.toLowerCase()}/${sub_category.name.toLowerCase()}`}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-primary hover:duration-200 duration-200 hover:ease-in-out "
                >
                  {sub_category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CatalogPopup;
