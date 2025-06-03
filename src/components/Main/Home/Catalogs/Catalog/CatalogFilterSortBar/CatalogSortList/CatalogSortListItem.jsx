import React from 'react'

// eslint-disable-next-line no-unused-vars
const CatalogSortListItem = ({ onClick, text, icon: Icon }) => {
  return (
    <li>
      <button
        onClick={onClick}
        className="px-4 py-3 h-full w-full flex items-center justify-between hover:text-secondary cursor-pointer duration-300 ease-in-out"
      >
        {text}
        <Icon className="text-lg" />
      </button>
    </li>
  );
};

export default CatalogSortListItem
