import React from "react";
import { productList } from "../../../../../data/productList";
import CatalogCarousel from "./Catalog/CatalogCarousel";

const CatalogPromo = () => {

  const promoProductList = productList.filter((item) => item.discount_rate > 0);

  // if there are no new products
  if (promoProductList.length === 0) {
    return null;
  }
  // default render
  return <CatalogCarousel title="Offres spéciales" array={promoProductList} />;
};

export default CatalogPromo;
