import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  };

  const setManually = (event) => {
    const value = event.target.value;
    if (value === "" || isNaN(value) || value < 1) {
      setCount(1);
    } else {
      setCount(Number(value));
    }
  };

  return (
    <div className="relative h-full flex items-center justify-between gap-1">
      <button
        onClick={handleDecrement}
        disabled={count <= 1}
        className={`absolute left-1 flex items-center justify-center h-full px-3 font-bold duration-300 ease-in-out 
    ${
      count <= 1 ? "text-gray-400 cursor-auto" : "hover:text-secondary cursor-pointer"
    }`}
      >
        -
      </button>
      <input
        type="number"
        value={count}
        onInput={setManually}
        className="w-full px-5 text-center border rounded-4xl h-full bg-gray-100 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:outline-none"
      />
      <button
        onClick={handleIncrement}
        className="absolute right-1 flex items-center justify-center h-full px-3 font-bold cursor-pointer duration-300 ease-in-out hover:text-secondary"
      >
        +
      </button>
    </div>
  );
};

export default Counter;
