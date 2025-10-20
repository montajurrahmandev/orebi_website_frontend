import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import { PiNumberTwoBold } from "react-icons/pi";


import TruckSvg from "../../assets/SVG_icon/TruckSvg";
import { FaUndoAlt } from "react-icons/fa";

const Terms = () => {
  return (
    <div className="py-5">
      <Container>
        <Flex className={"justify-between  "}>
          <div className="flex gap-x-2 items-center text-[16px] text-terms">
            <PiNumberTwoBold className="text-black " />
            Two years warranty
          </div>
          <div className="flex gap-x-2 items-center text-[16px] text-terms">
    <TruckSvg/>
            Free shipping
          </div>
          <div className="flex gap-x-2 items-center text-[16px] text-terms">
            
            <FaUndoAlt className="text-black "/>
            Return policy in 30 days
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Terms;
