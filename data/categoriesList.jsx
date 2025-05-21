import dressImage from '../src/assets/catalog/dress.svg'
import jacketImage from '../src/assets/catalog/jacket.svg'
import shirtImage from '../src/assets/catalog/shirt.svg'
import shortsImage from '../src/assets/catalog/shorts.svg'
import skirtImage from '../src/assets/catalog/skirt.svg'
import sweaterImage from '../src/assets/catalog/sweater.svg'
import sweatshirtImage from '../src/assets/catalog/sweatshirt.svg'
import tshirtImage from '../src/assets/catalog/t-shirt.svg'



export const categoriesList = [
    {
        id: 1,
        name: 'T-Shirts',
        image: tshirtImage,
        sub_categories: [
            { id: 1, name: 'Casual' },
            { id: 2, name: 'Sport' },
            { id: 3, name: 'Col V' },
            { id: 4, name: 'Col Roulé' },
        ],
    },
    {
        id: 2,
        name: 'Sweatshirts',
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
        image: shirtImage,
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