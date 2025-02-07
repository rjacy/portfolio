import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 font-[family-name:var(--font-poppins)] bg-darkmode text-white px-5 md:px-10 lg:px-40 py-10 md:py-10">
        <hr className="border-gray-600" />
        <span className="text-gray-500 text-md font-medium">
          Copyright &copy; 2025 Tony Akinmide
        </span>
      </div>
    </div>
  );
};

export default Footer;
