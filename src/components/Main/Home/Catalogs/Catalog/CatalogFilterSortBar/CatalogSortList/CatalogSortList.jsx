import React from "react";
import { SORT_OPTIONS } from "@/utils/sortOptions";
import CatalogSortListItem from "./CatalogSortListItem";

const CatalogSortList = ({
  onClose,
  innerRef,
  setSortOption,
  setSortButtonName,
  currentSortOption, //recieving the current option to hide it
  setCurrentSortOption
}) => {

  const handleClick = (option, text) => {
    setSortOption(option);
    setSortButtonName(text);
    setCurrentSortOption(option)
    onClose();
  };

  //filtering the list of of options to exlude the currently selected one
  const visibleOptions = SORT_OPTIONS.filter(
    (option) => (option.value !== currentSortOption)
  );

  return (
    <ul
      ref={innerRef}
      className="absolute top-0 right-0 z-10 rounded-4xl bg-white w-full h-fit pt-10 text-sm text-custom-gray overflow-hidden"
    >
      {visibleOptions.map(({ value, label, icon }) => (
        <CatalogSortListItem
        key={value}
        text={label}
        icon={icon}
        onClick={() => handleClick(value, label)}
      />
      ))}
    </ul>
  );
};

export default CatalogSortList;
