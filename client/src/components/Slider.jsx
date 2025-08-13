import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { useRef } from "react";
import BannerImage from "../contexts/BannerImage";

const data2 = [
  {
    image: "src/assets/image/12.jpg",
    mdImage: "src/assets/image/12.jpg",
    smallImage: "src/assets/image/small12.jpg",
  },
  {
    image: "src/assets/image/13.jpg",
    mdImage: "src/assets/image/13.jpg",
    smallImage: "src/assets/image/small13.jpg",
  },
  {
    image: "src/assets/image/14.jpg",
    mdImage: "src/assets/image/14.jpg",
    smallImage: "src/assets/image/small14.jpg",
  },
  {
    image: "src/assets/image/15.jpg",
    mdImage: "src/assets/image/15.jpg",
    smallImage: "src/assets/image/small15.jpg",
  },
  {
    image: "src/assets/image/16.jpg",
    mdImage: "src/assets/image/16.jpg",
    smallImage: "src/assets/image/small16.jpg",
  },
  {
    image: "src/assets/image/17.jpg",
    mdImage: "src/assets/image/17.jpg",
    smallImage: "src/assets/image/small17.jpg",
  },
  {
    image: "src/assets/image/18.jpg",
    mdImage: "src/assets/image/18.jpg",
    smallImage: "src/assets/image/small18.jpg",
  },
  {
    image: "src/assets/image/19.jpg",
    mdImage: "src/assets/image/19.jpg",
    smallImage: "src/assets/image/small19.jpg",
  },
];

const Slider2 = () => {
  const splideRef = useRef(null);

  const handleClick = (index) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index);
    }
  };
  return (
    <Splide
      ref={splideRef}
      options={{
        type: "loop",
        gap: "1rem",
        drag: "free",
        perPage: 1,
        autoplay: true,
        interval: 5000,
        pauseOnHover: false,
        arrows: false,
        pagination: true,
        breakpoints: {
          2000: {
            padding: { left: "20rem", right: "20rem" },
          },
          1024: {
            padding: { left: "7rem", right: "7rem" },
          },
          640: {
            padding: { left: "5rem", right: "5rem" },
            perPage: 1,
          },
        },
      }}
      className="custom-splide"
    >
      {data2.map((src, index) => (
        <SplideSlide key={index} onClick={() => handleClick(index)}>
          <BannerImage
            image={src.image}
            mdImage={src.smallImage}
            smallImage={src.smallImage}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Slider2;
