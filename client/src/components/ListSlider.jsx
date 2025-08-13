import React, { useState } from "react";
import { IoIosPlay } from "react-icons/io";
import { IoStopCircleOutline } from "react-icons/io5";
const data2 = [
  {
    image: "src/assets/image/10.jpg",
  },
  {
    image: "src/assets/image/2.jpg",
  },
  {
    image: "src/assets/image/14.jpg",
  },
  {
    image: "src/assets/image/11.jpg",
  },
  {
    image: "src/assets/image/13.jpg",
  },
  {
    image: "src/assets/image/15.jpg",
  },
  {
    image: "src/assets/image/17.jpg",
  },
  {
    image: "src/assets/image/18.jpg",
  },
];

const ListSlider = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="overflow-hidden">
      <div className="flex justify-center "></div>
      <div
        className="flex"
        style={{
          animation: `marquee 20s linear infinite`,
          animationPlayState: isPlaying ? "running" : "paused",
        }}
      >
        {[...data2, ...data2].map((e, i) => (
          <div key={i} className="flex-shrink-0 mx-2">
            <img
              className="w-[250px] h-[150px] md:w-[400px] md:h-[200px] object-cover"
              src={e.image}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className="flex justify-end items-center h-full mt-5 px-5 w-full">
        <button
          onClick={togglePlay}
          className="p-2 rounded-4xl bg-gray-200  text-xl "
        >
          {isPlaying ? <IoStopCircleOutline /> : <IoIosPlay />}
        </button>
      </div>
    </section>
  );
};

export default ListSlider;
