import dressLogo from "../src/assets/catalog/logo/dress.svg";
import dressImage from "../src/assets/catalog/image/dress.png";
import jacketLogo from "../src/assets/catalog/logo/jacket.svg";
import jacketImage from "../src/assets/catalog/image/jacket.png";
import shirtLogo from "../src/assets/catalog/logo/shirt.svg";
import shirtImage from "../src/assets/catalog/image/shirt.png";
import shortsLogo from "../src/assets/catalog/logo/shorts.svg";
import shortsImage from "../src/assets/catalog/image/shorts.png";
import skirtLogo from "../src/assets/catalog/logo/skirt.svg";
import skirtImage from "../src/assets/catalog/image/skirt.png";
import sweaterLogo from "../src/assets/catalog/logo/sweater.svg";
import sweaterImage from "../src/assets/catalog/image/sweater.png";
import sweatshirtLogo from "../src/assets/catalog/logo/sweatshirt.svg";
import sweatshirtImage from "../src/assets/catalog/image/sweatshirt.png";
import tshirtLogo from "../src/assets/catalog/logo/t-shirt.svg";
import tshirtImage from "../src/assets/catalog/image/t-shirt.png";

export const categoriesList = [
  {
    id: 1,
    name: "T-shirts",
    logo: tshirtLogo,
    image: tshirtImage,
    sub_categories: [
      { id: 1, name: "Classiques" },
      { id: 2, name: "Col-V" },
      { id: 3, name: "Col-rond" },
    ],
  },
  {
    id: 2,
    name: "Sweatshirts",
    logo: sweatshirtLogo,
    image: sweatshirtImage,
    sub_categories: [
      { id: 1, name: "À-capuche" },
      { id: 2, name: "Zippés" },
      { id: 3, name: "Oversize" },
    ],
  },
  {
    id: 3,
    name: "Shorts",
    logo: shortsLogo,
    image: shortsImage,
    sub_categories: [
      { id: 1, name: "Sport" },
      { id: 2, name: "Décontractés" },
      { id: 3, name: "En-jean" },
    ],
  },
  {
    id: 4,
    name: "Vestes",
    logo: jacketLogo,
    image: jacketImage,
    sub_categories: [
      { id: 1, name: "Blousons" },
      { id: 2, name: "Parka" },
      { id: 3, name: "Manteaux" },
    ],
  },
  {
    id: 5,
    name: "Jupes",
    logo: skirtLogo,
    image: skirtImage,
    sub_categories: [
      { id: 1, name: "Courtes" },
      { id: 2, name: "Longues" },
      { id: 3, name: "Plissées" },
    ],
  },
  {
    id: 6,
    name: "Chemises",
    logo: shirtLogo,
    image: shirtImage,
    sub_categories: [
      { id: 1, name: "Manches-courtes" },
      { id: 2, name: "Manches-longues" },
      { id: 3, name: "En-jean" },
    ],
  },
  {
    id: 7,
    name: "Pulls",
    logo: sweaterLogo,
    image: sweaterImage,
    sub_categories: [
      { id: 1, name: "Col-rond" },
      { id: 2, name: "Col-V" },
      { id: 3, name: "Col-roulé" },
    ],
  },
  {
    id: 8,
    name: "Robes",
    logo: dressLogo,
    image: dressImage,
    sub_categories: [
      { id: 1, name: "Courtes" },
      { id: 2, name: "Longues" },
      { id: 3, name: "De-soirée" },
    ],
  },
];
