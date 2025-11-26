import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwoBold } from "react-icons/pi";


import TruckSvg from "../../assets/SVG_icon/TruckSvg";
import { FaUndoAlt } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="py-[50px] md:py-[100px]">
      <Container>
        <Flex className={"justify-between flex-col md:flex-row gap-y-10 md:gap-y-0"}>
          <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 items-center justify-center text-[16px] text-terms border rounded-full py-10 px-4 w-[220px] md:border-transparent md:rounded-none md:py-0 md:px-0">
            <PiNumberTwoBold className="text-black " />
            Two years warranty
          </div>
        <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 items-center justify-center text-[16px] text-terms border rounded-full py-10 px-4 w-[220px] md:border-transparent md:rounded-none md:py-0 md:px-0">
    <TruckSvg/>
            Free shipping
          </div>
          <div className="flex flex-col gap-y-2 md:flex-row md:gap-x-2 items-center justify-center text-[16px] text-terms border rounded-full py-10 px-4 w-[220px] md:border-transparent md:rounded-none md:py-0 md:px-0">
            
            <FaUndoAlt className="text-black "/>
            Return policy in 30 days
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Terms;
