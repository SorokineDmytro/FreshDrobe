import React from "react";

const Main = ({mainContent}) => {
  return (
    <main className="bg-gray-100 flex-grow">
      <div className="2xl:w-[1630px] m-auto min-h-full">
        <h1 className="text-xl md:text-3xl lg:text-5xl text-center py-5">
          {mainContent}
        </h1>
      </div>
    </main>
  );
};

export default Main;
