import React from "react";
import Wrapper from "./Wrapper";
import { promosList } from "../../data/promosList";
import { Link } from "react-router";

const Sales = () => {
  return (
    <Wrapper
      titleText={"Promotions et Soldes"}
      pageContent={
        <ul className="grid grid-cols-1 md:grid-cols-3  2xl:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-4 lg:gap-6">
          {promosList.map((promoItem) => (
            <li
              key={promoItem.id}
              className="group bg-white rounded-3xl flex flex-col gap-4 p-5"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <img
                  src={promoItem.image}
                  alt={promoItem.title}
                  className="bg-contain group-hover:scale-110 transition duration-300 ease-in-out"
                />
                <span className="absolute bottom-[8%] left-[5%] bg-danger rounded-4xl text-white font-['Inter',sans-serif] font-bold text-sm md:text-xs xl:text-sm px-2 py-1">
                  Promo {promoItem.promoRate}%
                </span>
              </div>
              <h3 className="text-xl font-['Inter',sans-serif] font-bold">
                {promoItem.title}
              </h3>
              <p className="md:text-sm lg:text-base">{promoItem.description}</p>
              <Link
                to={promoItem.link}
                className="w-full h-10 py-5 bg-primary text-white text-lg md:text-base rounded-4xl flex items-center justify-center hover:bg-primary/75 duration-300 ease-in-out"
              >
                Acceder au catalogue
              </Link>
            </li>
          ))}
        </ul>
      }
    />
  );
};

export default Sales;
