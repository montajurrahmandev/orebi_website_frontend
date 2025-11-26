import React from "react";

import { useSelector } from "react-redux";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import RouteDisplay from "../Layout/RouteDisplay";

const Cart = () => {
  let data = useSelector((state) => state.cart.value);

  //  const grandTotal = data.reduce((accumulator, currentItem) => {
  //   // Add the total price of the current item to the accumulator
  //   return accumulator + (currentItem.price * currentItem.quantity);
  // }, 0); // The '0' is the starting value for the accumulator

  const grandTotal = data.reduce((Total, currentItem) => {
    return Total + currentItem.price * currentItem.quantity;
  }, 0);
return ( 
    <>
      <Container>
        <div>
          <RouteDisplay className="" route="Cart" />
        </div>
        <div className="   mt-20">
          <div className=" bg-[#F5F5F3] w-full py-8 text-left pl-2 md:pl-4">
            <ul className="flex justify-between md:px-5 text-text text-[16px]  ">
              <li className="w-1/5 mr-4">Title</li>
              <li className="w-1/5">price</li>
              <li className="hidden md:block w-1/5">Image</li>
              <li className="w-1/5">Quantity</li>
              <li className="w-1/5 mr-4">Total</li>
            </ul>
          </div>
          {data.map((item) => (
            <>
              <div className="w-full text-left pl-2 md:pl-4 py-3">
                <ul className="flex justify-between items-center py-2 md:px-5 text-text text-[16px] relative">
                  <li className="w-1/5 mr-4">{item.title}</li>
                  <li className="w-1/5">${item.price} </li>
                  <li className="hidden md:block w-1/5">
                    <img src={item.img} alt="" className="h-10" />
                  </li>
                  <li className="w-1/5 text-center md:text-left">{item.quantity}</li>
                  <li className="w-1/5 mr-6">${item.price * item.quantity}</li>
                  <li className=" text-[20px] absolute right-0 md:right-5 top-1/2 -translate-y-1/2">
                    <RxCross2 />
                  </li>
                </ul>
              </div>
            </>
          ))}

          <form className="max-w-sm md:mx-9 pt-10">
            <div className="flex gap-x-1 md:gap-x-4">


              <div className="w-[200px]">
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Apply coupon"
                />
              </div>
              <button className="bg-gray-800 text-white px-3 py-0 rounded">Apply</button>
            </div>
          </form>

          <div className=" text-black text-[18px] pt-16 gap-x-2 flex items-center justify-end ">
            Total : <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
        <Link to={"/checkout"} className="flex justify-end pt-10">
          <button
            type="Continue"
            class=" text-white bg-[#262626] hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center"
          >
            Proceed to Checkout
          </button>
        </Link>
      </Container>
    </>
  );
};

export default Cart;
