import React from "react";
import { Link, useParams } from "react-router";
import Wrapper from "./Wrapper";
import Catalog from "@/components/Main/Home/Catalogs/Catalog/Catalog";
import { productList } from "../../data/productList";
import { categoriesList } from "../../data/categoriesList";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import ProductNavLink from "@/components/UI/Links/ProductNavLink";

const Section = () => {
  const { category, sub_category } = useParams();

  // finding the category's id to pass it as parameter further
  const categoryFound = categoriesList.find(
    (element) => element.name == category
  );
  // filtering the original list of products by the found category's id
  const filteredByCategoryProductList = productList.filter(
    (element) => element.category_id === categoryFound.id
  );
  console.log(categoryFound.sub_categories);

  // finding the sub_category's id to pass it as parameter further
  let subCategoryFound;
  let filteredBySubCategoryProductList;
  if (sub_category && categoryFound) {
    subCategoryFound = categoryFound.sub_categories.find(
      (element) => element.name === sub_category
    );
    // filtering the list of products by category by the found sub_category's id
    filteredBySubCategoryProductList = filteredByCategoryProductList.filter(
      (element) => element.sub_category_id === subCategoryFound?.id
    );
  }

  const categoryText = category ? capitalizeFirstLetter(category) : "";
  const subCategoryText = sub_category
    ? ` -> ${capitalizeFirstLetter(sub_category)}`
    : "";

  return (
    <Wrapper
      titleText={
        subCategoryText
          ? `${capitalizeFirstLetter(sub_category)}`
          : `${categoryText}`
      }
      pageContent={
        sub_category && categoryFound && subCategoryFound ? (
          filteredBySubCategoryProductList.length > 0 ? (
            <Catalog list={filteredBySubCategoryProductList} />
          ) : (
            <p className="text-center text-gray-500 mt-10">
              Aucun produit à afficher dans cette section.
            </p>
          )
        ) : filteredByCategoryProductList.length > 0 ? (
          <>
            <ul className="flex flex-nowrap lg:flex-wrap gap-2 mb-3.5 overflow-x-auto lg:overflow-visible no-scrollbar">
              {categoryFound.sub_categories.map((subCategory) => (
                <li key={subCategory.id} className="flex shrink-0">
                  <ProductNavLink linkPath={subCategory.name} linkText={capitalizeFirstLetter(subCategory.name)} />
                </li>
              ))}
            </ul>
            <Catalog list={filteredByCategoryProductList} />
          </>
        ) : (
          <p className="text-center text-gray-500 mt-10">
            Aucun produit à afficher dans cette section.
          </p>
        )
      }
    />
  );
};

export default Section;
