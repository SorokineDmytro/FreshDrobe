import React from "react";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import ProductNavLink from "@/components/UI/Links/ProductNavLink";

const CatalogSubcategoryList = ({ list }) => {
  return (
    <ul className="flex flex-nowrap lg:flex-wrap gap-2 mb-3.5 overflow-x-auto lg:overflow-visible no-scrollbar">
      {list.map((subCategory) => (
        <li key={subCategory.id} className="flex shrink-0">
          <ProductNavLink
            linkPath={subCategory.name}
            linkText={capitalizeFirstLetter(subCategory.name)}
          />
        </li>
      ))}
    </ul>
  );
};

export default CatalogSubcategoryList;
