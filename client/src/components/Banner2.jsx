import React from "react";
import BannerImage from "../contexts/BannerImage";
import MainNameBanner from "../contexts/MainNameBanner";
import Dec from "../contexts/Dec";
import BtnBlue from "../contexts/btnBlue";
import BtnWhite from "../contexts/btnWhite";
import TextColor from "../contexts/TextColor";

const data = [
  {
    name: "iPhone",
    more: "Learn more",
    link: "Shop iPhone",
    dec: "Meet the iPhone 16 family.",
    dec2: "",
    image: "src/assets/image/2.jpg",
    mdImage: "src/assets/image/md2.jpg",
    smallImage: "src/assets/image/small2.jpg",
    text: "Built for Apple Intelligence",
  },
];

const Banner2 = () => {
  return (
    <section>
      <div className="relative">
        {data.map((e, i) => (
          <div className="">
            <BannerImage
              image={e.image}
              mdImage={e.mdImage}
              smallImage={e.smallImage}
            />
            <div className="absolute inset-0 flex flex-col items-center gap-2  py-17 ">
              <div className="text-center">
                <MainNameBanner name={e.name} />
                <Dec text={e.dec} text2={e.dec2} />
                <div className="flex justify-center gap-4 mt-3">
                  <BtnBlue btn={e.more} />
                  <BtnWhite btn={e.link} />
                </div>
              </div>
              <TextColor color={e.text} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner2;
