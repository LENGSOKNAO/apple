import React from "react";
import BannerImage from "../contexts/BannerImage";
import MainNameBanner from "../contexts/MainNameBanner";
import Dec from "../contexts/Dec";
import TextColor from "../contexts/TextColor";
import Btnwh from "../contexts/Btnwh";
import Btnbule from "../contexts/Btnbule";

const data = [
  {
    name: "MacBook Air",
    more: "Learn more",
    link: "Buy",
    dec: "Sky blue color.",
    dec2: "Sky high performance with M4.",
    image: "/src/assets/image/ta.jpg",
    mdImage: "src/assets/image/md1.jpg",
    smallImage: "src/assets/image/small1.jpg",
    text: "Built for Apple Intelligence",
  },
];

const Banner = () => {
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
            <div className="absolute inset-0 flex flex-col items-center justify-between  py-17 ">
              <div className="text-center">
                <MainNameBanner name={e.name} />
                <Dec text={e.dec} text2={e.dec2} />
                <div className="flex justify-center gap-4 mt-3">
                  <Btnbule btn={e.more} />
                  <Btnwh btn={e.link} />
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

export default Banner;
