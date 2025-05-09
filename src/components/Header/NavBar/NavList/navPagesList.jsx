import Home from '../../../../pages/Home';
import About from '../../../../pages/About';
import Payment from '../../../../pages/Payment';
import Delivery from '../../../../pages/Delivery';
import Sales from '../../../../pages/Sales';
import Contacts from '../../../../pages/Contacts';
import NotFoundPage from '../../../../pages/NotFoundPage';

export const navPagesList = [
  { linkName: "Accueil", linkPath: "/", element: <Home /> },
  { linkName: "À propos", linkPath: "/about", element: <About /> },
  { linkName: "Payement", linkPath: "/payment", element: <Payment /> },
  { linkName: "Livraison", linkPath: "/delivery", element: <Delivery /> },
  { linkName: "Promotions", linkPath: "/sales", element: <Sales /> },
  { linkName: "Contacts", linkPath: "/contacts", element: <Contacts /> },
];