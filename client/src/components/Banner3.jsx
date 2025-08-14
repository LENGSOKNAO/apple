import BannerImage from "../contexts/BannerImage";
import Btnwh from "../contexts/Btnwh";

const data = [
  {
    name: "MacBook Air",
    more: "Learn more",
    link: "Shop",
    dec: "Sky blue color.",
    dec2: "Sky high performance with M4.",
    image: "src/assets/3.jpg",
    mdImage: "src/assets/md3.jpg",
    smallImage: "src/assets/small3.jpg",
    text: "Built for Apple Intelligence",
  },
];

const Banner3 = () => {
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
            <div className="absolute inset-0 flex flex-col items-center justify-between py-25 md:py-25 lg:py-15">
              <div className="w-[350px] relative h-full ">
                <div className=" w-[300px] h-full flex flex-col items-center justify-between ">
                  <div className="">
                    <p className="bg-blue-600  rounded-4xl p-5 text-5xl font-bold text-white  ">
                      Buy Mac <br /> or iPod <br /> for college
                    </p>
                    <img
                      className="absolute top-0 right-0 "
                      src="src/assets/image/4.png"
                      alt=""
                    />
                    <img
                      className="absolute right-0 top-20"
                      src="src/assets/image/5.png"
                      alt=""
                    />
                    <p className="bg-blue-600 mt-3 text-center  w-[300px] rounded-4xl p-2 text-xl font-bold text-white  ">
                      with education savings
                    </p>
                  </div>
                  <p className="bg-blue-600 mt-1 w-[300px] rounded-4xl text-5xl p-5 font-bold text-white  ">
                    Choose AirPods or <br /> an eligible <br /> accessory
                    <sup className="text-xl">1</sup>
                  </p>
                  <Btnwh btn={e.link} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner3;
