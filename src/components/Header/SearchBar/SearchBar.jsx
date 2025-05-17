import React from 'react'
import ButtonEmpty from '../../UI/Buttons/ButtonEmpty'
import { FaSliders } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import useMediaQuery from '../../../hooks/useMediaQuery';

const SearchBar = () => {
  const isTablet = useMediaQuery('(max-width: 1024px)');

  return (
    <div className="relative w-full h-12 rounded-4xl bg-gray-100">
      {/* Left Button */}
      <div className="absolute left-0.5 top-0.5 z-10">
        <ButtonEmpty
          text=""
          bgColor="dark"
          borderColor="transparent"
          height="11"
          width="11"
          image={FaSliders}
        />
      </div>

      {/* Input */}
      <input
        type="search"
        placeholder="Retrouver un produit"
        className="w-full h-full rounded-4xl pl-15 pr-15 lg:pr-40 focus:outline-primary focus:ring-1"
      />

      {/* Right Button */}
      <div className="absolute right-0.5 top-0.5 z-10">
        {isTablet ? (
          <ButtonEmpty
            text=""
            bgColor="dark"
            borderColor="transparent"
            height="11"
            width="11"
            image={FaSearch}
          />
        ) : (
          <ButtonEmpty
            text="Rechercher"
            bgColor="dark"
            borderColor="transparent"
            height="11"
            width="35"
            image={FaSearch}
          />
        )}
      </div>
    </div>
  );
};

export default SearchBar;
