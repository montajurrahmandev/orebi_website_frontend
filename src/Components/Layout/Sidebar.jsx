import React from "react";
import Heading from "../Heading";
import { FaCaretUp } from "react-icons/fa";

const Sidebar = () => {
  return (
    <>
      <div className="w-[272px] pr-4">
        <div className="text-[#767676]">
          <Heading
            className="text-[20px] font-bold text-black pt-6 pb-4"
            text="Shop by Category"
            as="h4"
          />
          <div className="">
            <p className="text-[16px] py-2">Category 1</p>
            <p className="text-[16px] py-2">Category 2</p>
            <p className="text-[16px] py-2">Category 3</p>
            <p className="text-[16px] py-2">Category 4</p>
            <p className="text-[16px] py-2">Category 5</p>
          </div>
        </div>
        <div className="text-[#767676]">
          <div className="text-black flex justify-between items-center">
            <Heading
              className="text-[20px] font-bold pt-6 pb-4"
              text="Shop by Color"
              as="h4"
            />
            <FaCaretUp />
          </div>
          <div className="">
            <p className="text-[16px] py-2 flex items-center gap-x-2">
              <div className="h-2 w-2 rounded-full bg-black"></div>Color 1
            </p>
            <p className="text-[16px] py-2 flex items-center gap-x-2">
              <div className="h-2 w-2 rounded-full bg-[#FF8686]"></div>Color 2
            </p>
            <p className="text-[16px] py-2 flex items-center gap-x-2">
              <div className="h-2 w-2 rounded-full bg-[#7ED321] "></div>Color 3
            </p>
            <p className="text-[16px] py-2 flex items-center gap-x-2">
              <div className="h-2 w-2 rounded-full bg-[#B6B6B6]"></div>Color 4
            </p>
            <p className="text-[16px] py-2 flex items-center gap-x-2">
              <div className="h-2 w-2 rounded-full bg-[#15CBA5]"></div>Color 5
            </p>
          </div>
        </div>
        <div className="text-[#767676]">
          <div className="text-black flex justify-between items-center">
            <Heading
              className="text-[20px] font-bold pt-6 pb-4"
              text="Shop by Brand"
              as="h4"
            />
            <FaCaretUp />
          </div>
          <div className="">
            <p className="text-[16px] py-2">Brand 1</p>
            <p className="text-[16px] py-2">Brand 2</p>
            <p className="text-[16px] py-2">Brand 3</p>
            <p className="text-[16px] py-2">Brand 4</p>
            <p className="text-[16px] py-2">Brand 5</p>
          </div>
        </div>
        <div className="text-[#767676]">
                    <div className="text-black flex justify-between items-center">
            <Heading
              className="text-[20px] font-bold  pt-6 pb-4"
              text="Shop by Price"
              as="h4"
            />
            <FaCaretUp />
          </div>
          <div className="">
            <p className="text-[16px] py-2">$0.00 - $9.99</p>
            <p className="text-[16px] py-2">$10.00 - $19.99</p>
            <p className="text-[16px] py-2">$20.00 - $29.99</p>
            <p className="text-[16px] py-2">$30.00 - $39.99</p>
            <p className="text-[16px] py-2">$40.00 - $69.99</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
