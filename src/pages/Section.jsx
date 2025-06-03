import React, { useState } from "react";
import { useParams } from "react-router";
import Wrapper from "./Wrapper";
import Catalog from "@/components/Main/Home/Catalogs/Catalog/Catalog";
import { productList } from "../../data/productList";
import { categoriesList } from "../../data/categoriesList";
import { capitalizeFirstLetter } from "@/utils/stringUtils";
import CatalogSubcategoryList from "@/components/Main/Home/Catalogs/Catalog/CatalogSubcategoryList";
import CatalogFilterSortBar from "@/components/Main/Home/Catalogs/Catalog/CatalogFilterSortBar/CatalogFilterSortBar";

const Section = () => {
  // reaching parameters from url
  const { category, sub_category } = useParams();

  // finding the category's id to pass it as parameter further
  const categoryFound = categoriesList.find(
    (element) => element.name == category
  );
  // filtering the original list of products by the found category's id
  const filteredByCategoryProductList = productList.filter(
    (element) => element.category_id === categoryFound.id
  );

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

  // creating state for sorting options
  const [sortOption, setSortOption] = useState("default");

  // sort function
  const applySorting = (list) => {
    switch (sortOption) {
      case "priceAsc":
        return [...list].sort((a, b) => a.price * (100 - a.discount_rate) - b.price * (100 - b.discount_rate));
      case "priceDesc":
        return [...list].sort((a, b) => b.price * (100 - b.discount_rate) - a.price * (100 - a.discount_rate));
      case "nameAsc":
        return [...list].sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return [...list].sort((a, b) => b.name.localeCompare(a.name));
      case "rateDesc":
        return [...list].sort((a, b) => b.median_rate - a.median_rate);
      default:
        return list;
    }
  }

  // defining sorted lists based on already filtered list which is used
  const sortedFilteredByCategoryProductList = applySorting(filteredByCategoryProductList);
  const sortedFilteredBySubCategoryProductList = subCategoryFound ? applySorting(filteredBySubCategoryProductList) : [];

  // creating a dynamic catalog's content
  let CatalogContent;
  if (sub_category && categoryFound && subCategoryFound) {
    if (sortedFilteredBySubCategoryProductList.length > 0) {
      CatalogContent = (
        <>
          <CatalogFilterSortBar setSortOption={setSortOption}/>
          <Catalog list={sortedFilteredBySubCategoryProductList} />
        </>
      );
    } else {
      CatalogContent = (
        <p className="text-center text-gray-500 mt-10">
          Aucun produit à afficher dans cette section.
        </p>
      );
    }
  } else if (sortedFilteredByCategoryProductList.length > 0) {
    CatalogContent = (
      <>
        <CatalogSubcategoryList list={categoryFound.sub_categories} />
        <CatalogFilterSortBar setSortOption={setSortOption}/>
        <Catalog list={sortedFilteredByCategoryProductList} />
      </>
    );
  } else {
    CatalogContent = (
      <p className="text-center text-gray-500 mt-10">
        Aucun produit à afficher dans cette section.
      </p>
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
      pageContent={CatalogContent}
    />
  );
};

export default Section;
