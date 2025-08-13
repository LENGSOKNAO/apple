import React from "react";
import BannerImage from "../contexts/BannerImage";
import MainNameBanner from "../contexts/MainNameBanner";
import Dec from "../contexts/Dec";
import BtnBlue from "../contexts/btnBlue";
import BtnWhite from "../contexts/btnWhite";
import TextColor from "../contexts/TextColor";
import { FaApple } from "react-icons/fa";

const data = [
  {
    name: "iPad Pro",
    more: "Learn more",
    link: "Buy",
    dec: "Unbelievably thin. Incrediby powerful.",
    dec2: "",
    image: "src/assets/image/6.jpg",
    mdImage: "src/assets/image/md6.jpg",
    smallImage: "src/assets/image/small6.jpg",
    text: "Built for Apple Intelligence",
  },
  {
    name: "Apple Intelligence",
    more: "Watch the chip",
    link: "Learn more",
    dec: "Point. Shoot. Cook.",
    dec2: "With visual intellignce.",
    image: "src/assets/image/7.jpg",
    mdImage: "src/assets/image/md7.jpg",
    smallImage: "src/assets/image/small7.jpg",
    text: "",
  },
  {
    name: "MacBook Pro",
    more: "Learn more",
    link: "Buy",
    dec: "A work of smart.",
    dec2: "",
    image: "src/assets/image/8.jpg",
    mdImage: "src/assets/image/md8.jpg",
    smallImage: "src/assets/image/small8.jpg",
    text: "Built for Apple Intelligence",
  },
  {
    name: "AirPods Pro 2",
    more: "Learn more",
    link: "Buy",
    dec: "Now with Hearing Aid feature.",
    dec2: "",
    image: "src/assets/image/9.jpg",
    mdImage: "src/assets/image/md9.jpg",
    smallImage: "src/assets/image/small9.jpg",
    text: "",
  },
];
const data2 = [
  {
    name: "Trade In",
    more: "Get your estimate",
    link: "",
    dec: "Get $16-$600 in cerdit when you",
    dec2: "trade in iPhone 12 or higher",
    image: "src/assets/image/10.jpg",
    mdImage: "src/assets/image/md10.jpg",
    smallImage: "src/assets/image/small10.jpg",
    text: "",
  },
  {
    name: "Card",
    more: "Watch the chip",
    link: "Learn more",
    dec: "Get up to 3% Daily Cash back",
    dec2: "with every purchase",
    image: "src/assets/image/11.jpg",
    mdImage: "src/assets/image/md11.jpg",
    smallImage: "src/assets/image/small11.jpg",
    text: "",
  },
];

const BannerGrid = () => {
  return (
    <section className=" ">
      <div className=" ">
        <div className="grid md:grid-cols-2 gap-4">
          {data.map((e, i) => (
            <div className="relative text-white" key={i}>
              <BannerImage
                image={e.image}
                mdImage={e.mdImage}
                smallImage={e.smallImage}
              />
              <div
                className={`absolute inset-0 flex flex-col items-center  py-17 ${
                  i === 0
                    ? "justify-between"
                    : i === 1
                    ? "justify-end"
                    : i === 2
                    ? "justify-between"
                    : "justify-end"
                } `}
              >
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
          {data2.map((e, i) => (
            <div className="relative" key={i}>
              <BannerImage
                image={e.image}
                mdImage={e.mdImage}
                smallImage={e.smallImage}
              />
              <div className="absolute inset-0 flex flex-col items-center py-17  ">
                <div className="text-center">
                  <div className="flex items-center justify-center ">
                    <FaApple className="text-5xl" />
                    <MainNameBanner name={e.name} />
                  </div>
                  <Dec text={e.dec} text2={e.dec2} />
                  <div className="flex justify-center gap-4 mt-3">
                    {i === 0 ? (
                      <BtnBlue btn={e.more} />
                    ) : (
                      <div className="flex gap-3">
                        <BtnBlue btn={e.more} />
                        <div className="text-blue-500">
                          <BtnWhite btn={e.link} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BannerGrid;
