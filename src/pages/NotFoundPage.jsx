import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <main className="flex flex-grow h-full w-full justify-items-center items-center bg-gray-100">
      <div className="2xl:w-[1630px] m-auto min-h-full font-bold flex flex-col gap-y-5 items-center justify-items-center py-z">
        <h1 className="text-5xl">404 - Page non trouvée</h1>
        <p>
          Nous sommes désolés, mais la page que vous recherchez n'existe pas.
        </p>
        <Link
          to="/"
          className="bg-black text-white rounded-xl flex justify-center items-center self-center h-15 w-70"
        >
          Retour à la page d'accueil
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
