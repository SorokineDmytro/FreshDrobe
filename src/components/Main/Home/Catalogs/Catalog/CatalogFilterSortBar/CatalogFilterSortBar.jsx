import React, { useEffect, useRef, useState } from "react";
import { FaSliders } from "react-icons/fa6";
import { RxCaretSort } from "react-icons/rx";
import CatalogSortList from "./CatalogSortList/CatalogSortList";

const CatalogFilterSortBar = ({ setSortOption }) => {
  // creating the state of sortingList with its options
  const [sortList, setSortList] = useState(false);
  // creating the state of sortingList name to show dynamicaly while changing option
  const [sortButtonName, setSortButtonName] = useState("Trier");
  // creating the state of currently selected option to hide it dynamicaly while changing option
  const [currentSortOption, setCurrentSortOption] = useState("default");

  // creating refs to list and its button handler
  const sortListRef = useRef(null);
  const buttonRef = useRef(null);

  // function to show and hide the list
  const toggleSortList = () => {
    setSortList((prev) => !prev);
  };

  // handle click outside of the component to hide it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sortListRef.current &&
        !sortListRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setSortList(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="h-10 mb-4 grid grid-cols-2 grid-rows-1 gap-4 justify-between">
      <button className="flex items-center justify-center gap-3 h-full w-full px-4 rounded-4xl bg-primary text-white font-bold">
        <FaSliders /> Filtrer
      </button>
      <div className="relative flex">
        <button
          ref={buttonRef}
          onClick={toggleSortList}
          className="flex items-center justify-between z-20 h-full w-full px-4 rounded-4xl bg-white font-bold"
        >
          {sortButtonName === "Par default" ? "Trier" : sortButtonName} <RxCaretSort />
        </button>
        {sortList && (
          <CatalogSortList
            onClose={() => setSortList(false)}
            innerRef={sortListRef}
            setSortOption={setSortOption}
            setSortButtonName={setSortButtonName}
            currentSortOption={currentSortOption}
            setCurrentSortOption={setCurrentSortOption}
          />
        )}
      </div>
    </div>
  );
};

export default CatalogFilterSortBar;
