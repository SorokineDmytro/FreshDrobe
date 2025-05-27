import Counter from "@/components/UI/Counters/Counter";
import React from "react";
import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";

const CatalogItem = ({ product }) => {
  return (
    <li className="group bg-white rounded-3xl flex flex-col gap-2 p-3 md:p-5 lg:p-6 duration-500 ease-in-out lg:hover:shadow-sm lg:hover:scale-[1.02] transition-all">
      <Link
        to={`/product/${product.id}`}
        className="flex-grow w-full aspect-square rounded-2xl bg-gray-100"
      >
        <img src={product.image} alt={product.name} className="object-cover" />
      </Link>
      <Link
        to={`/product/${product.id}`}
        className="font-['Inter',sans-serif] text-sm md:text-base font-bold hover:underline"
      >
        {product.name}
      </Link>
      <Link to={`/product/${product.brand_id}`} className="text-sm text-primary hover:underline">
        {product.brand_name}
      </Link>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            const full = starValue <= Math.floor(product.median_rate);
            const half =
              starValue === Math.ceil(product.median_rate) &&
              product.median_rate % 1 >= 0.5;

            return (
              <div key={index} className="relative w-5 h-5">
                {/* Empty Star */}
                <svg
                  className="absolute inset-0 w-5 h-5 text-gray-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-3.09 1.63L7.5 12.5l-2.91-2.53L8.91 9l1.09-3.63L11.09 9l4.32-.03L12.5 12.5l1.59 4.13L10 15z" />
                </svg>

                {/* Full Star */}
                {full && (
                  <svg
                    className="absolute inset-0 w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 15l-3.09 1.63L7.5 12.5l-2.91-2.53L8.91 9l1.09-3.63L11.09 9l4.32-.03L12.5 12.5l1.59 4.13L10 15z" />
                  </svg>
                )}

                {/* Half Star */}
                {half && (
                  <svg
                    className="absolute inset-0 w-5 h-5 text-yellow-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  >
                    <path d="M10 15l-3.09 1.63L7.5 12.5l-2.91-2.53L8.91 9l1.09-3.63L11.09 9l4.32-.03L12.5 12.5l1.59 4.13L10 15z" />
                  </svg>
                )}
              </div>
            );
          })}
        </div>
        <span className="text-custom-gray text-sm font-bold">{product.median_rate.toFixed(1)}</span>
      </div>
      <span className="text-[13px] md:text-sm text-custom-gray">Article &#8470; {product.code}</span>
      {product.discount_rate === 0 ? (
        <span className="font-['Inter',sans-serif] text-gray-500 md:text-lg font-bold">{product.price.toFixed(2)} €</span>
      ) : (
        <div className="flex gap-2 felx items-center">
          <span className="font-['Inter',sans-serif] text-sm md:text-base text-danger line-through">
            {product.price.toFixed(2)} €
          </span>
          <span className="font-['Inter',sans-serif] md:text-lg text-success font-bold">
            {((product.price * (100 - product.discount_rate)) / 100).toFixed(2)}{" "}
            €
          </span>
        </div>
      )}
      <div className="h-24 md:h-12 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Counter />
        <button className="h-11 md:h-full aspect-square px-2 flex items-center justify-center rounded-full text-xl cursor-pointer bg-secondary text-white hover:opacity-75 duration-300 ease-in-out">
          <FaCartArrowDown />
          <span className="ml-2 text-sm font-bold md:hidden">Acheter</span> 
        </button>
      </div>
    </li>
  );
};

export default CatalogItem;
