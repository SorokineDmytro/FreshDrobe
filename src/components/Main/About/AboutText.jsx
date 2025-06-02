import React from "react";

const AboutText = ({ imageSrc = null }) => {
  return (
    <article className="relative flex flex-col md:inline-block gap-3 text-gray-500 lg:text-lg">
      {imageSrc && (
        <div className="w-full md:w-50 lg:w-1/6 md:mr-4 md:mb-2 aspect-square bg-amber-300 rounded-3xl overflow-hidden float-left">
          <img
            src={imageSrc}
            alt="FreshDrobe logo"
            className="w-full object-cover hover:scale-105 duration-300 ease-in-out"
          />
        </div>
      )}
      <p className="mb-2">
        FreshDrobe est votre destination incontournable pour une mode tendance,
        accessible et de qualité. Notre boutique en ligne propose un vaste choix
        de vêtements et d’accessoires pour tous les styles et toutes les
        occasions. Que vous soyez à la recherche d’un look décontracté,
        professionnel ou audacieux, vous trouverez chez FreshDrobe les pièces
        qui reflètent votre personnalité.
      </p>
      <p className="mb-2">
        Nous servons une clientèle variée à travers toute la France: amateurs de
        mode, jeunes actifs, étudiants, créateurs de contenu, stylistes
        indépendants ou simplement ceux qui aiment se sentir bien dans leurs
        vêtements. FreshDrobe vous livre partout, rapidement et en toute
        confiance.
      </p>
      <p className="mb-2">
        Notre engagement: des collections régulièrement renouvelées, une
        attention constante portée à la qualité des matières, et un service
        client réactif et à l’écoute. Nous élargissons sans cesse notre
        catalogue pour intégrer les dernières tendances, tout en veillant à
        proposer des prix justes et une expérience d’achat fluide et agréable.
      </p>
      <p className="mb-2">
        FreshDrobe, c’est bien plus qu’une boutique: c’est une communauté de
        passionnés de mode, un espace d’expression et de style. Rejoignez-nous
        et trouvez votre fraîcheur vestimentaire !
      </p>
    </article>
  );
};

export default AboutText;
