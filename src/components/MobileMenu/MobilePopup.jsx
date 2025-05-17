import React from "react";

const MobilePopup = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 overflow-y-scroll lg:hidden bg-gray-50 transition-transform duration-300 ease-in-out transform ${
        isOpen
          ? "translate-y-0"
          : "translate-y-[calc(100vh+60px)] md:translate-y-[calc(100vh+80px)]"
      }`}
      style={{
        height: "calc(100vh - 60px)",
      }}
    >
      <style>{`
        @media(min-width: 768px) {
          div[style] {
            height: calc(100vh - 80px) !important;
          }
        }
      `}</style>

      {/* Close button */}
      <div className="fixed top-0 left-0 h-13 flex justify-end items-center w-full px-5 bg-white border-b border-gray-200 z-10">
        <button onClick={onClose} className="h-full">
          <div className="text-3xl rotate-45">+</div>
        </button>
      </div>

      <div className="pt-12">
        {children}
      </div>
    </div>
  );
};

export default MobilePopup;