import React from "react";

const TextColor = ({ color }) => {
  return (
    <>
      <div className="bg-[linear-gradient(to_right,blue,red,#f59e0b,#8b5cf6)] bg-clip-text text-transparent font-semibold  text-sm md:text-xl  ">
        {color}
      </div>
    </>
  );
};

export default TextColor;
