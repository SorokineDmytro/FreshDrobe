import React from "react";
import { useParams } from "react-router";
import Wrapper from "./Wrapper";

const capitalize = (str = "") =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const Section = () => {
  const { category, sub_category } = useParams();

  const categoryText = category ? capitalize(category) : "";
  const subCategoryText = sub_category ? ` -> ${capitalize(sub_category)}` : "";

  return (
    <Wrapper
      titleText={subCategoryText ? `${capitalize(sub_category)}` : `${categoryText}`}
      pageContent={
        <h1>Bienvenue sur la page Section: {categoryText}{subCategoryText}</h1>
      }/>
  );
};

export default Section;
