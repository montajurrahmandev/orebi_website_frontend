import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <Container>
      <div className="pt-20">
        <Heading className="text-[49px] font-bold" text="My Account" as="h2" />
        <p className="flex items-center gap-x-2 ">
          Home <PiGreaterThan /> <span>My Account</span>
        </p>
      </div>
      <div className="flex  pt-20">
        <div className="w-[270px] ">
          <ul className="text-[#767676] text-[16px] ">
            <li className="w-[230px] pb-3 mb-2 hover:bg-text hover:text-white rounded-[10px]">
              <Link>Dashboard</Link>
            </li>
            <li className="w-[230px] py-3 my-2 hover:bg-text hover:text-white rounded-[10px]">
              <Link>Others</Link>
            </li>
            <li className="w-[230px] py-3 my-2 hover:bg-text hover:text-white rounded-[10px]">
              <Link>Donwloads</Link>
            </li>
            <li className="w-[230px] py-3 my-2 hover:bg-text hover:text-white rounded-[10px]">
              <Link>Addresses</Link>
            </li>
            <li className="w-[230px] py-3 my-2 hover:bg-text hover:text-white rounded-[10px]">
              <Link>Account details</Link>
            </li>
            <li className="w-[230px] py-3 my-2 hover:bg-text hover:text-white rounded-[10px]">
              <Link>Logout</Link>
            </li>
          </ul>

        </div>
        <div className="text-[16px] text-[#767676] w-[70%]">
          <p>Hello <span className="text-text">admin</span> (not <span className="text-text">admin</span>? <span className="text-text">Log out</span>)</p>
          <p className="pt-5">From your account dashboard you can view your <span className="text-text"> recent orders</span> , manage your <span className="text-text">shipping and billing addresses</span>, and <span className="text-text">edit your password and account details.</span></p>
        </div>

      </div>
    </Container>
  );
};

export default UserDashboard;
