import React, { useState } from "react";
import { listNav } from "../../contexts/NavList";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Footer = () => {
  const [click, setClick] = useState(true);

  return (
    <footer className=" bg-gray-100 flex flex-col items-center justify-center py-10">
      <div className="">
        {/* full screen */}
        <div className="hidden md:hidden lg:block xl:block">
          <div className="w-[1000px] grid grid-cols-5">
            {listNav.map((e, i) => (
              <ul key={i}>
                <li className="font-semibold py-2 text-sm "> {e.name} </li>
                {e.listItem.map((e, i) => (
                  <div className="">
                    <p className="text-xs text-gray-600 leading-5">
                      {e.listName}
                    </p>
                  </div>
                ))}
              </ul>
            ))}
          </div>
          <div className="border-t-1  my-3"></div>
          <div className="w-[1000px] flex justify-between">
            <div className="flex">
              <p className="text-sm pr-8">
                Copyright © 2025 Apple Inc. All rights reserved.
              </p>
              <div className="flex">
                <p className="text-sm border-r border-gray-300 px-2">
                  Privacy Policy
                </p>
                <p className="text-sm border-r border-gray-300 px-2">
                  Terms of Use
                </p>
                <p className="text-sm border-r border-gray-300 px-2">
                  Sales and Refunds
                </p>
                <p className="text-sm border-r border-gray-300 px-2">Legal</p>
                <p className="text-sm border-r border-gray-300 px-2">
                  Site Map
                </p>
              </div>
            </div>
            <p className="text-sm ">Cambodia</p>
          </div>
        </div>
        {/* small screen */}
        <div className="md:block lg:hidden  ">
          <div className="px-5 w-screen ">
            {listNav.map((e, i) => (
              <ul key={i}>
                <li 
                  className="font-medium text-gray-500  text-sm pt-2  flex items-center justify-between"
                  onClick={() => setClick(click === i ? null : i)}
                >
                  {e.name} {click === i ? <BsChevronUp /> : <BsChevronDown />}
                </li>
                {click === i && (
                  <div  className="">
                    {e.listItem.map((e, i) => (
                      <div data-aos="fade-down" data-aos-delay="1200" className="">
                        <p className="text-xs text-gray-600 leading-5 px-2 ">
                          {e.listName}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
                <div className="border-b-1 border-gray-500 pt-2 "></div>
              </ul>
            ))}
          </div>
          <div className=""></div>
          <div className="px-5">
            <div className=" ">
              <p className="text-sm">
                Copyright © 2025 Apple Inc. All rights reserved.
              </p>
              <div className="flex py-2">
                <p className="text-sm border-r border-gray-300 pr-2">
                  Privacy Policy
                </p>
                <p className="text-sm border-r border-gray-300 px-2">
                  Terms of Use
                </p>
                <p className="text-sm border-r border-gray-300 px-2">
                  Sales and Refunds
                </p>
                <p className="text-sm border-r border-gray-300 px-2">Legal</p>
                <p className="text-sm border-r border-gray-300 px-2">
                  Site Map
                </p>
              </div>
            </div>
            <p className="text-sm ">Cambodia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
