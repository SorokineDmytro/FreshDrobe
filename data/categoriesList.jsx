import dressLogo from '../src/assets/catalog/logo/dress.svg'
import dressImage from '../src/assets/catalog/image/dress.png'
import jacketLogo from '../src/assets/catalog/logo/jacket.svg'
import jacketImage from '../src/assets/catalog/image/jacket.png'
import shirtLogo from '../src/assets/catalog/logo/shirt.svg'
import shirtImage from '../src/assets/catalog/image/shirt.png'
import shortsLogo from '../src/assets/catalog/logo/shorts.svg'
import shortsImage from '../src/assets/catalog/image/shorts.png'
import skirtLogo from '../src/assets/catalog/logo/skirt.svg'
import skirtImage from '../src/assets/catalog/image/skirt.png'
import sweaterLogo from '../src/assets/catalog/logo/sweater.svg'
import sweaterImage from '../src/assets/catalog/image/sweater.png'
import sweatshirtLogo from '../src/assets/catalog/logo/sweatshirt.svg'
import sweatshirtImage from '../src/assets/catalog/image/sweatshirt.png'
import tshirtLogo from '../src/assets/catalog/logo/t-shirt.svg'
import tshirtImage from '../src/assets/catalog/image/t-shirt.png'



export const categoriesList = [
    {
        id: 1,
        name: 'T-Shirts',
        logo: tshirtLogo,
        image: tshirtImage,
        sub_categories: [
            { id: 1, name: 'Casual' },
            { id: 2, name: 'Sport' },
            { id: 3, name: 'Col-V' },
            { id: 4, name: 'Col Roulé' },
        ],
    },
    {
        id: 2,
        name: 'Sweatshirts',
        logo: sweatshirtLogo,
        image: sweatshirtImage,
        sub_categories: [
            { id: 1, name: 'Hoodies' },
            { id: 2, name: 'Crewnecks' },
            { id: 3, name: 'Zippés' },
            { id: 4, name: 'Oversize' },
        ],
    },
    {
        id: 3,
        name: 'Shorts',
        logo: shortsLogo,
        image: shortsImage,
        sub_categories: [
            { id: 1, name: 'Jeans' },
            { id: 2, name: 'Chinos' },
            { id: 3, name: 'Bermudas' },
            { id: 4, name: 'Sport' },
            { id: 5, name: 'Casual' },
        ],
    },
    {
        id: 4,
        name: 'Vestes',
        logo: jacketLogo,
        image: jacketImage,
        sub_categories: [
            { id: 1, name: 'Blousons' },
            { id: 2, name: 'Manteaux' },
            { id: 3, name: 'Parka' },
            { id: 4, name: 'Doudounes' },
            { id: 5, name: 'Veste en Jean' },
        ],
    },
    {
        id: 5,
        name: 'Jupes',
        logo: skirtLogo,
        image: skirtImage,
        sub_categories: [
            { id: 1, name: 'Courtes' },
            { id: 2, name: 'Longues' },
            { id: 3, name: 'Plissées' },
            { id: 4, name: 'Droites' },
            { id: 5, name: 'Évasées' },
        ],
    },
    {
        id: 6,
        name: 'Chemises',
        logo: shirtLogo,
        image:shirtImage,
        sub_categories: [
            { id: 1, name: 'Manches Courtes' },
            { id: 2, name: 'Manches Longues' },
            { id: 3, name: 'En Jean' },
            { id: 4, name: 'Oversize' },
        ],
    },
    {
        id: 7,
        name: 'Pulls',
        logo: sweaterLogo,
        image: sweaterImage,
        sub_categories: [
            { id: 1, name: 'Capuche' },
            { id: 2, name: 'Sans Capuche' },
            { id: 3, name: 'Oversize' },
            { id: 4, name: 'Graphiques' },
            { id: 5, name: 'Col Roulé' },
            { id: 6, name: 'Col V' },
            { id: 7, name: 'Ras du Cou' },
            { id: 8, name: 'Zippés' },
            { id: 9, name: 'Manches Longues' },
        ],
    },
    {
        id: 8,
        name: 'Robes',
        logo: dressLogo,
        image: dressImage,
        sub_categories: [
            { id: 1, name: 'Casual' },
            { id: 2, name: 'De Soirée' },
            { id: 3, name: 'De Plage' },
            { id: 4, name: 'Longues' },
            { id: 5, name: 'Courtes' },
        ],
    },
]