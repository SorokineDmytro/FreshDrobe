import tshirtImage from "../src/assets/catalog/image/t-shirt.png";
import shortsImage from "../src/assets/catalog/image/shorts.png";
import sweatImage from "../src/assets/catalog/image/sweatshirt.png";

export const promosList = [
    {
        id: 1,
        title: "T-shirts",
        description: "Description de la promo 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: tshirtImage,
        promoRate: 15,
        link: "/promo/1",
    },
    {
        id: 2,
        title: "Shorts",
        description: "Description de la promo 2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: shortsImage,
        promoRate: 10,
        link: "/promo/2",
    },
    {
        id: 3,
        title: "Sweatshirts",
        description: "Description de la promo 3 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: sweatImage,
        promoRate: 5,
        link: "/promo/3",
    }
]