import React from "react";
import { categoriesList } from "../../../data/categoriesList";
import { Link } from "react-router";

const AsideCatalog = () => {
  return (
    <ul className="w-full bg-white rounded-4xl relative z-10">
      {categoriesList.map((category) => (
        <li
          key={category.id}
          className="group relative w-full h-17.5 flex items-center justify-between px-6.5 py-5 text-md text-custom-gray border-b border-gray-100 hover:bg-background first-of-type:hover:rounded-tl-4xl last-of-type:hover:rounded-bl-4xl hover:text-primary duration-300 hover:shadow-xs ease-in-out"
        >
          <Link
            to={`/section/${category.name.toLowerCase()}`}
            className="relative w-full h-full flex items-center gap-4"
          >
            <img src={category.logo} alt="" className="w-10 h-10" />
            <h3>{category.name}</h3>
            {category.sub_categories.length > 0 && (
              <span className="absolute right-0 rotate-90 w-5 h-5 flex items-center justify-center">
                &#8963;
              </span>
            )}
          </Link>

          {category.sub_categories.length > 0 && (
            <ul className="absolute top-0 left-full bg-white rounded-r-4xl rounded-bl-4xl min-w-[220px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
              {category.sub_categories.map((subCategory) => (
                <li
                  key={subCategory.id}
                  className="w-xs h-17.5 text-md flex items-center justify-between px-6.5 py-5 text-custom-gray bg-background hover:bg-white first-of-type:rounded-tr-4xl last-of-type:rounded-b-4xl border-b border-gray-100 hover:text-primary duration-300 hover:shadow-xs ease-in-out"
                >
                  <Link
                    to={`/section/${category.name.toLowerCase()}/${subCategory.name.toLowerCase()}`}
                    className="w-full h-full"
                  >
                    {subCategory.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default AsideCatalog;
