import React from 'react'

const Dropdown = ({ funcName, stateName }) => {
  return (
    <div className="w-full h-3 relative flex items-center justify-between">
        <span className="flex-grow h-1 border-b border-gray-200"></span>
        <button
          onClick={funcName}
          className="mx-2 text-primary font-['Inter',sans-serif] font-bold text-[13px]"
        >
          <span className="flex items-center">
            {stateName ? "Afficher moins" : "Afficher plus"}
            <span
              className={`text-md ml-2 transition-transform duration-300 ${
                stateName ? "rotate-0 mt-1" : "rotate-180 mb-1"
              }`}
            >
              &#8963;
            </span>
          </span>
        </button>
      </div>
  )
}

export default Dropdown
