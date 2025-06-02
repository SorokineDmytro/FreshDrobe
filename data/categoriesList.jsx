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
    name: "t-shirts",
    logo: tshirtLogo,
    image: tshirtImage,
    sub_categories: [
      { id: 1, name: "classiques" },
      { id: 2, name: "col-v" },
      { id: 3, name: "col-rond" },
    ],
  },
  {
    id: 2,
    name: "sweatshirts",
    logo: sweatshirtLogo,
    image: sweatshirtImage,
    sub_categories: [
      { id: 1, name: "à-capuche" },
      { id: 2, name: "zippés" },
      { id: 3, name: "oversize" },
    ],
  },
  {
    id: 3,
    name: "shorts",
    logo: shortsLogo,
    image: shortsImage,
    sub_categories: [
      { id: 1, name: "sport" },
      { id: 2, name: "décontractés" },
      { id: 3, name: "en-jean" },
    ],
  },
  {
    id: 4,
    name: "vestes",
    logo: jacketLogo,
    image: jacketImage,
    sub_categories: [
      { id: 1, name: "blousons" },
      { id: 2, name: "parka" },
      { id: 3, name: "manteaux" },
    ],
  },
  {
    id: 5,
    name: "jupes",
    logo: skirtLogo,
    image: skirtImage,
    sub_categories: [
      { id: 1, name: "courtes" },
      { id: 2, name: "longues" },
      { id: 3, name: "plissées" },
    ],
  },
  {
    id: 6,
    name: "chemises",
    logo: shirtLogo,
    image: shirtImage,
    sub_categories: [
      { id: 1, name: "manches-courtes" },
      { id: 2, name: "manches-longues" },
      { id: 3, name: "en-jean" },
    ],
  },
  {
    id: 7,
    name: "pulls",
    logo: sweaterLogo,
    image: sweaterImage,
    sub_categories: [
      { id: 1, name: "col-rond" },
      { id: 2, name: "col-V" },
      { id: 3, name: "col-roulé" },
    ],
  },
  {
    id: 8,
    name: "robes",
    logo: dressLogo,
    image: dressImage,
    sub_categories: [
      { id: 1, name: "courtes" },
      { id: 2, name: "longues" },
      { id: 3, name: "de-soirée" },
    ],
  },
];
