import Counter from "@/components/UI/Counters/Counter";
import React from "react";
import { Link } from "react-router";
import { FaCartArrowDown } from "react-icons/fa";

const CatalogItem = ({ product }) => {
  // Function to compare dates
  const isProductNew = (dateString) => {
    const dateToday = new Date();
    const productDate = new Date(dateString);

    const diffInMs = dateToday - productDate;
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // ms to days

    return diffInDays < 30;
  };

  return (
    <div className="group bg-white rounded-3xl flex flex-col gap-2 p-3 md:p-5 lg:p-6 duration-500 ease-in-out lg:hover:shadow-sm lg:hover:scale-[1.02] transition-all">
      <Link
        to={`/product/${product.id}`}
        className="relative flex-grow w-full aspect-square rounded-2xl overflow-hidden bg-gray-100"
      >
        <img
          src={product.image[0]}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        {isProductNew(product.created_at) && (
          <div className="relative inline-block bg-success px-2.5 md:px-3.5 py-1.5 mr-1 mb-1 text-xs md:text-sm text-white font-['Inter',sans-serif] font-bold rounded-4xl">
            Nouveau
          </div>
        )}
        {product.discount_rate > 0 && (
          <>
            <div className="relative inline-block bg-primary px-2.5 md:px-3.5 py-1.5 mr-1 mb-1 text-xs md:text-sm text-white font-['Inter',sans-serif] font-bold rounded-4xl">
              Promo
            </div>
            <div className="relative inline-block bg-secondary px-2.5 md:px-3.5 py-1.5 mr-1 mb-1 text-xs md:text-sm text-white font-['Inter',sans-serif] font-bold rounded-4xl">
              -{product.discount_rate}%
            </div>
          </>
        )}
      </Link>
      <div className="flex flex-col gap-2 min-h-40">
        <Link
          to={`/product/${product.id}`}
          className="font-['Inter',sans-serif] text-sm md:text-base font-bold hover:underline"
        >
          {product.name}
        </Link>
        <Link
          to={`/product/${product.brand_id}`}
          className="text-sm text-primary hover:underline"
        >
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
          <span className="text-custom-gray text-sm font-bold">
            {product.median_rate.toFixed(1)}
          </span>
        </div>
        <span className="text-[13px] md:text-sm text-custom-gray">
          Article &#8470; {product.code}
        </span>
      </div>
      {product.discount_rate === 0 ? (
        <span className="font-['Inter',sans-serif] md:text-[19px] font-bold">
          {product.price.toFixed(2)}
          <span className="text-sm">€</span>
        </span>
      ) : (
        <div className="flex gap-2 items-center">
          <span className="font-['Inter',sans-serif] text-sm md:text-base text-danger line-through">
            {product.price.toFixed(2)}
            <span className="text-xs md:text-sm">€</span>
          </span>
          <span className="font-['Inter',sans-serif] md:text-[19px] text-success font-bold">
            {((product.price * (100 - product.discount_rate)) / 100).toFixed(2)}
            <span className="text-sm">€</span>
          </span>
        </div>
      )}
      <div className="h-24 md:h-11 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Counter />
        <button className="h-11 md:h-full aspect-square px-2 flex items-center justify-center rounded-full text-xl cursor-pointer bg-secondary text-white hover:opacity-75 duration-300 ease-in-out">
          <FaCartArrowDown />
          <span className="ml-2 text-sm font-bold md:hidden">Acheter</span>
        </button>
      </div>
    </div>
  );
};

export default CatalogItem;
