import React from "react";

import { useSelector } from "react-redux";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

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
        <div className="pt-10">
          <Heading className="text-[49px] font-bold" text="Contacts" as="h2" />
          <p className="flex items-center gap-x-2 ">
            Home <PiGreaterThan /> <span>Contacts</span>
          </p>
        </div>
        <div className="   mt-20">
          <div className="bg-[#F5F5F3] w-full py-8 text-left pl-4">
            <ul className="flex justify-between px-5 text-text text-[16px]  ">
              <li className="w-1/5">Title</li>
              <li className="w-1/5">price</li>
              <li className="w-1/5">Image</li>
              <li className="w-1/5">Quantity</li>
              <li className="w-1/5">Total</li>
            </ul>
          </div>
          {data.map((item) => (
            <>
              <div className="w-full text-left pl-4 py-3">
                <ul className="flex justify-between items-center py-2 px-5 text-text text-[16px] relative">
                  <li className="w-1/5 pr-5">{item.title}</li>
                  <li className="w-1/5">${item.price} </li>
                  <li className="w-1/5">
                    <img src={item.img} alt="" className="h-10" />
                  </li>
                  <li className="w-1/5">{item.quantity}</li>
                  <li className="w-1/5">${item.price * item.quantity}</li>
                  <li className=" text-[20px] absolute right-5 top-1/2 -translate-y-1/2">
                    <RxCross2 />{" "}
                  </li>
                </ul>
              </div>
            </>
          ))}

          <form class="max-w-sm mx-9 pt-10">
            <div className="flex gap-x-5">
              <div className="w-[100px]">
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option selected>Size</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="w-[200px]">
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Apply coupon"
                />
              </div>
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
