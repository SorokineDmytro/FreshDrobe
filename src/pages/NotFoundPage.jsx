import React from "react";
import { Link } from "react-router";
import Wrapper from "./Wrapper";

const NotFoundPage = () => {
  return (
    <Wrapper
      titleText={""}
      customLastCrumb={"Page non trouvée"}
      pageContent={
        <div className="m-auto font-bold flex flex-col gap-y-5 items-center justify-items-center py-50">
          <h1 className="text-5xl">404 - Page non trouvée</h1>
          <p className="text-xl">
            Nous sommes désolés, mais la page que vous recherchez n'existe pas.
          </p>
          <Link
            to="/"
            className="bg-primary text-white rounded-4xl flex justify-center items-center self-center h-15 w-70"
          >
            Retour à la page d'accueil
          </Link>
        </div>
      }
    />
  );
};

export default NotFoundPage;
