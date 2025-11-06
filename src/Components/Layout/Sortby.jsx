import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Sortby = () => {
  return (
    <div className="flex items-center gap-x-10 text-[#767676] pt-6 justify-end">
      <span>Sort by:</span>
      <div className="flex items-center gap-x-24 bg-[#F0F0F0] px-3">
        <span>Featured</span>
        <FaCaretDown />
      </div>
      <div className="flex items-center gap-x-12 bg-[#F0F0F0] px-3">
        <span >Show: </span>
        <span>36</span>
        
        <FaCaretDown />
      </div>
    </div>
  );
};

export default Sortby;
