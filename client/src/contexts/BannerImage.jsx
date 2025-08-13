import React from "react";

const BannerImage = ({ image, mdImage, smallImage }) => {
  return (
    <>
      <img
        className=" hidden md:hidden lg:block w-full h-[700px] object-cover "
        src={image}
        alt=""
      />
      <img
        className=" hidden md:block lg:hidden w-full h-[850px] object-cover "
        src={mdImage}
        alt=""
      />
      <img
        className=" block md:hidden lg:hidden w-full h-[800px] object-cover "
        src={smallImage}
        alt=""
      />
    </>
  );
};

export default BannerImage;
