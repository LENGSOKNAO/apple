import { useState } from "react";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { listNav } from "../../contexts/NavList";
import { HiMiniBars2 } from "react-icons/hi2";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Navbar = () => {
  const [hoverNav, setHoverNav] = useState(null);
  const [icon, setIcon] = useState(false);
  const [smallList, setSmallList] = useState(null);
  const [lists, setLists] = useState(null);

  return (
    <nav className="bg-[rgba(255,255,255,0.9)] h-12 sticky top-0 z-50  ">
      {/* screen full */}
      <div className="hidden sm:hidden md:block h-full ">
        <div className="flex justify-center items-center h-full">
          <div className="w-[1000px] px-5">
            <div className="h-full w-full flex items-center justify-between text-lg">
              <FaApple />
              {listNav.map((element, index) => (
                <ul key={index}>
                  <li className="">
                    <Link
                      className="text-xs font-normal z-50 "
                      onMouseEnter={() => setHoverNav(index)}
                    >
                      {element.name}
                    </Link>
                    <div className="flex justify-center ">
                      {hoverNav == index && element.listItem && (
                        <div className="">
                          <div className="bg-[rgba(0,0,0,0.1)]  h-screen absolute inset-0 z-[-5] "></div>
                          <div
                            data-aos="fade-down"
                            data-aos-delay="100"
                            className="bg-[rgba(255,255,255,0.9)] absolute top-0 right-0 left-0 z-[-1] w-full flex justify-center"
                            onMouseLeave={() => setHoverNav(null)}
                          >
                            <div className="w-[1000px] p-[100px_0] flex gap-[2%] px-5 leading-5">
                              {element.listItem.map((element, index) => (
                                <div className="" key={index}>
                                  <h2 className="text-xs text-gray-400 leading-10">
                                    {element.listName}
                                  </h2>
                                  <div
                                    className={` ${
                                      index === 0
                                        ? "text-3xl leading-11 pr-10 font-semibold"
                                        : " leading-5 text-xs font-semibold text-gray-600"
                                    }`}
                                  >
                                    {element.listIems.map((e, index) => (
                                      <div className="" key={index}>
                                        <Link className="">{e}</Link>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </li>
                </ul>
              ))}
              <IoIosSearch />
              <MdOutlineShoppingBag />
            </div>
          </div>
        </div>
      </div>
      {/* small screen */}
      <div className="md:hidden block h-full ">
        <div className="flex justify-between items-center h-full text-xl px-5">
          <FaApple />
          <div className="flex items-center gap-2 ">
            <IoIosSearch />
            <MdOutlineShoppingBag />
            <div className="z-30" onClick={() => setSmallList((e) => !e)}>
              {icon ? (
                <IoMdClose
                  data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  onClick={() => setIcon(false)}
                />
              ) : (
                <HiMiniBars2
                  data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="500"
                  onClick={() => setIcon(true)}
                />
              )}
            </div>
            {smallList && (
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="500"
                className="absolute left-0 top-0 bottom-0 overflow-y-auto  right-0 h-screen bg-white z-10 pt-16 text-2xl "
              >
                {listNav.map((element, index) => (
                  <div
                    className="group px-10 flex items-center justify-between w-full pt-2 "
                    key={index}
                    onClick={() => setLists(index)}
                  >
                    <h2 className="text-2xl font-semibold ">{element.name}</h2>
                    <BsChevronCompactRight className=" text-white group-hover:text-black animate-bounce text-3xl " />
                    {lists == index && (
                      <div className="absolute left-0 top-0 bottom-0 right-0 h-screen bg-white z-10">
                        <div className="p-5 text-xl">
                          <BsChevronCompactLeft
                            className="cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setLists(null);
                            }}
                          />
                        </div>
                        {element.listItem.map((e, i) => (
                          <div className="px-5" key={i}>
                            <h2 className="text-xs text-gray-400 leading-10">
                              {e.listName}
                            </h2>
                            <div
                              className={`   ${
                                i === 0
                                  ? "text-3xl leading-11 pr-10 font-semibold"
                                  : " leading-5 text-xs font-semibold text-gray-600"
                              }`}
                            >
                              {e.listIems.map((e, i) => (
                                <div key={i}> {e}</div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
