import React from "react";
import SocialCircle from "../UI/Links/SocialCircle";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaTelegram } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center w-full h-fit px-[2.5%] mb-15 md:mb-20 lg:mb-0 bg-white ">
      <div className="2xl:w-[1630px] m-auto">
        <section className="w-full h-fit grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 py-3.5 lg:py-10 text-sm lg:text-[16px] border-b-1 border-gray-100">
          <article className="flex flex-col md:col-span-2 lg:col-span-1 mt-4 md:mb-3">
            <h2 className="mb-3 font-['Inter',sans-serif] text-[16px] md:text-[18px] lg:text-xl font-bold">
              FreshDrobe
            </h2>
            <p className="text-custom-gray lg:pr-15">
              Notre boutique en ligne propose des produits de qualité et fiables
              des meilleures marques, les meilleures conditions de travail, des
              prix bas et une livraison rapide !
            </p>
          </article>
          <article className="flex flex-col mt-4">
            <h2 className="mb-3 font-['Inter',sans-serif] text-[16px] lg:text-xl font-bold">
              Nous suivre
            </h2>
            <span className="text-custom-gray mb-2">
              Nous sommes sur les réseaux sociaux :
            </span>
            <ul className="flex items-center gap-5 mb-3">
              <SocialCircle
                linkAddress="/"
                content={
                  <FaFacebook
                    className="w-full h-full"
                    style={{ color: "#3b5998" }}
                  />
                }
              />
              <SocialCircle
                linkAddress="/"
                content={<FcGoogle className="w-full h-full" />}
              />
              <SocialCircle
                linkAddress="/"
                content={
                  <FaTelegram
                    className="w-full h-full"
                    style={{ color: "#0088cc" }}
                  />
                }
              />
              <SocialCircle
                linkAddress="/"
                content={
                  <RiWhatsappFill
                    className="w-full h-full"
                    style={{ color: "#128c7e" }}
                  />
                }
              />
            </ul>
            <span className="text-custom-gray mb-1">Nous contacter:</span>
            <a
              href="mailto:freshdrobe@gmail.com"
              className="text-primary hover:underline"
            >
              freshdrobe@gmail.com
            </a>
          </article>
          <article className="flex flex-col mt-4">
            <h2 className="mb-3 font-['Inter',sans-serif] text-[16px] lg:text-xl font-bold">
              Contacts
            </h2>
            <span className="text-custom-gray mb-1">Notre adresse :</span>
            <a
              href="https://maps.app.goo.gl/hXLBmeQwkQign7Kw6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              55 Rue du Faubourg Saint-Honoré, 75008 Paris
            </a>
            <a
              href="tel:+33102030405"
              className="mt-3 font-['Inter',sans-serif] font-bold text-[16px] lg:text-xl"
            >
              +(33)1 02 03 04 05
            </a>
          </article>
        </section>
        <section className="relative w-full h-fit flex flex-col items-center py-8 text-sm lg:text-l">
          <span className="text-custom-gray">&#9426; 2025 FreshDrobe SARL | SIRET: 12345677654321</span>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden lg:block absolute top-4 right-0 h-12 w-12 rounded-full border border-gray-200 text-xl pt-2 duration-300 ease-in-out hover:bg-primary hover:text-white hover:border-0"
          >
            &#8963;
          </button>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
