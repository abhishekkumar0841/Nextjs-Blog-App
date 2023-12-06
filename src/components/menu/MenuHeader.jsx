import React from "react";

const MenuHeader = ({ text, boldText }) => {
  return (
    <div className=" my-6">
      <p className=" text-sm font-bold text-gray-400">{text}</p>
      <h2 className=" text-2xl font-bold ">{boldText}</h2>
    </div>
  );
};

export default MenuHeader;
