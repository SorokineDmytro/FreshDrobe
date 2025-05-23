import React from "react";
import { promosList } from "../../../data/promosList";
import CustomLink from "../UI/Links/CustomLink";
import AsideBlock from "./AsideBlock";

const Promo = () => {
  return (
    <AsideBlock name="Offres" path="/sales" buttonName="plus d'offres" content={
      <div className="relative w-full h-fit flex flex-col md:flex-row lg:flex-col gap-5 bg-white rounded-4xl p-4 lg:p-0">
        <img
          src={promosList[0].image}
          alt="image d'article en promo"
          className="rounded-3xl lg:rounded-none w-auto h-[175px] bg-contain"
        />
        <span className="hidden lg:flex absolute top-36.5 left-5 bg-danger rounded-t-2xl text-white font-['Inter',sans-serif] font-bold text-xs px-3.5 pt-2 pb-1">
            Solde {promosList[0].promoRate}%
          </span>
        <div className="flex flex-col items-start gap-2 lg:px-6.5 lg:pb-5.5">
          <span className="lg:hidden bg-danger rounded-4xl text-white font-['Inter',sans-serif] font-bold text-xs px-2 py-1">
            Solde {promosList[0].promoRate}%
          </span>
          <h4 className="font-['Inter',sans-serif] font-bold w-full lg:pb-3 lg:mb-3 lg:border-b-1 lg:border-gray-100 ">
            {promosList[0].title}
          </h4>
          <p className="text-custom-gray text-sm lg:text-base">
            {promosList[0].description}
          </p>
          <CustomLink linkPath={promosList[0].link} linkText="Voir plus" />
        </div>
      </div>
    }>
    </AsideBlock>
  );
};

export default Promo;
