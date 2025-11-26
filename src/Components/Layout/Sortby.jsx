import React from "react";
import { FaCaretDown } from "react-icons/fa";

const Sortby = () => {
  return (
    <div className="flex items-center justify-between gap-x-2 md:gap-x-10 text-[#767676] pt-6 md:justify-end">
      <span className="text-[#232323] font-medium">Sort by:</span>
<div className="flex items-center gap-x-5 md:gap-x-10 text-[#767676]">
        <div className="flex items-center gap-x-5 md:gap-x-24 bg-[#F0F0F0] px-3">
        <span>Featured</span>
        <FaCaretDown />
      </div>
      <div className="flex items-center gap-x-4 md:gap-x-12 bg-[#F0F0F0] px-3">
        <span >Show: </span>
        <span>30</span>
        
        <FaCaretDown />
      </div>
</div>
    </div>
  );
};
 
export default Sortby;
