import React from "react";

const BtnWhite = ({ btn }) => {
  return (
    <button className=" h-13 px-7 rounded-4xl border border-blue-500 hover:bg-blue-600 hover:text-white ">
      {btn}
    </button>
  );
};

export default BtnWhite;
