import React from "react";
import { productList } from "../../../../../data/productList";
import CatalogCarousel from "./Catalog/CatalogCarousel";

const CatalogNew = () => {
  const dateToday = new Date();

  // Function to compare dates
  const isProductNew = (dateString) => {
    if (!dateString) return false;
    const productDate = new Date(dateString);

    const diffInMs = dateToday - productDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // ms to days

    return diffInDays < 30;
  };

  const newProductList = productList.filter((item) =>
    isProductNew(item.created_at)
  );

  // if there are no new products
  if (newProductList.length === 0) {
    return null;
  }
  // default render
  return <CatalogCarousel title="Nouveaux arrivages" array={newProductList} />;
};

export default CatalogNew;
