import React from "react";
import Catalog from "@/components/Header/Catalog/Catalog";
import { categoriesList } from "../../data/categoriesList";
import Wrapper from "./Wrapper";

const Categories = () => {
  return (
    <Wrapper
      titleText={"Toutes les catégories"}
      pageContent={
        <>
          <div className="w-full h-fit bg-white rounded-4xl p-4 md:p-7 lg:p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-25 gap-y-10">
            {categoriesList.map((category) => (
              <Catalog key={category.id} setIsOpen="" category={category} />
            ))}
          </div>
        </>
      }
    />
  );
};

export default Categories;
