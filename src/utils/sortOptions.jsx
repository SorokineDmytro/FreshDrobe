import { PiStarDuotone } from "react-icons/pi";
import {
  BsSortDownAlt,
  BsSortDown,
  BsSortAlphaDown,
  BsSortAlphaUp,
  BsSortNumericDown,
} from "react-icons/bs";

export const SORT_OPTIONS = [
  { value: "priceAsc", label: "Prix croissant", icon: BsSortDownAlt },
  { value: "priceDesc", label: "Prix décroissant", icon: BsSortDown },
  { value: "nameAsc", label: "Nom A → Z", icon: BsSortAlphaDown },
  { value: "nameDesc", label: "Nom Z → A", icon: BsSortAlphaUp },
  { value: "rateDesc", label: "Classement", icon: PiStarDuotone },
  { value: "default", label: "Par default", icon: BsSortNumericDown },
];