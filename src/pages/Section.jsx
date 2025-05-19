import React from "react";
import { useParams } from "react-router";
import Main from "../components/Main/Main";

const capitalize = (str = "") =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

const Section = () => {
  const { category, sub_category } = useParams();

  const categoryText = category ? capitalize(category) : "";
  const subCategoryText = sub_category ? ` -> ${capitalize(sub_category)}` : "";

  return (
    <Main
      mainContent={`Bienvenue sur la page Section: ${categoryText}${subCategoryText}`}
    />
  );
};

export default Section;
