import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Payment from '../src/pages/Payment';
import Delivery from '../src/pages/Delivery';
import Sales from '../src/pages/Sales';
import Contacts from '../src/pages/Contacts';

export const navPagesList = [
  { linkName: "Accueil", linkPath: "/", element: <Home /> },
  { linkName: "À propos", linkPath: "/about", element: <About /> },
  { linkName: "Payement", linkPath: "/payment", element: <Payment /> },
  { linkName: "Livraison", linkPath: "/delivery", element: <Delivery /> },
  { linkName: "Promotions", linkPath: "/sales", element: <Sales /> },
  { linkName: "Contacts", linkPath: "/contacts", element: <Contacts /> },
];