import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";
import RouteDisplay from "../Layout/RouteDisplay";
import { useSelector } from "react-redux";

const Checkout = () => {
  const data = useSelector((state) => state.cart.value);

  const grandTotal = data.reduce((total, currentItem) => {
    return total + currentItem.price * currentItem.quantity;
  }, 0);

  return (
    <Container>
      <div>
        <RouteDisplay className="" route="Checkout" />
      </div>

      <p className="pt-8 md:pt-16">
        Have a coupon?{" "}
        <span className="text-text">Click here to enter your code</span>
      </p>
      <div className="pt-8 md:pt-16 w-full md:w-[60%]">
        <form>
          <Heading
            className="text-[32px] md:text-[39px] text-text font-bold"
            text="Billing Details"
            as="h4"
          />
          <div class="md:pt-10">
            <div className="flex flex-col md:flex-row justify-between pt-5 md:pt-0 md:py-5">
              <div className="md:w-[45%] py-3 md:py-0">
                <label
                  htmlFor="first_name"
                  className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div className="md:w-[45%] py-3 md:py-0">
                <label
                  htmlFor="last_name"
                  className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name *
                </label>
                <input
                  type="text"
                  id="last_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="py-3 md:py-5">
              <label
                htmlFor="company"
                className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name(optional)
              </label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company Name"
              />
            </div>

            <div className="py-3 md:py-5">
              <label
                htmlFor="countries"
                className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Country *
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option selected>Please select</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div className="py-3 md:py-5">
              <label
                htmlFor="Address_1"
                className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Street Address *
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                id="last_name"
                className="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Apartment, suite, unit etc. (optional)"
                required
              />
            </div>
            <div className="py-3 md:py-5">
              <label
                htmlFor="city"
                className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Town/City *
              </label>
              <input
                type="text"
                id="city"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Town/City"
                required
              />
            </div>
            <div className="py-3 md:py-5">
              <label
                htmlFor="Address_1"
                className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Post Code
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="12345"
                required
              />
            </div>

            <div className="py-3 md:py-5">
              <label
                htmlFor="phone"
                className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
          <div className="py-3 md:py-5">
            <label
              htmlFor="email"
              className="block mb-2 px-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>

          <div className="pt-10 md:pt-20 ">
            <Heading
              className="text-[32px] md:text-[39px] text-text font-bold"
              text="Additional Information"
              as="h4"
            />
            <Heading
              className="text-[16px] text-text pt-4 pb-2"
              text="Other Notes (optional)"
              as="h6"
            />
            <textarea
              className="w-full bg-gray-700 text-[#fafafa] p-2.5 rounded-lg"
              name="notes"
              id=""
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
          </div>
          <div className="mt-10 md:mt-20">
            <Heading
              className="text-[32px] md:text-[39px] text-text font-bold"
              text="Your order"
              as="h4"
            />
            <div className="border-b border-gray-300 mt-2 md:mt-5"></div>
            <div className="md:w-2/3">
              <div className="flex justify-between items-center py-5">
                <p className="text-text font-bold">Product</p>
                <p className="text-text">Total</p>
              </div>
              <div className="border-b border-gray-300"></div>
              {data.map((item) => (
                <>
                  <div className="flex justify-between items-center py-5">
                    <p className="text-text font-bold">
                      <span>{item.title}</span> x <span>{item.quantity}</span>
                    </p>
                    <p className="text-text">{`$${
                      item.price * item.quantity
                    }`}</p>
                  </div>
                </>
              ))}
              <div className="border-b border-gray-300"></div>
              <div className="flex justify-between items-center py-5">
                <p className="text-text font-bold">Subotal</p>
                <p className="text-text font-bold">${grandTotal.toFixed(2)}</p>
              </div>
              <div className="border-b border-gray-300"></div>
              <div className="flex justify-between items-center py-5">
                <p className="text-text font-bold">Total</p>
                <p className="text-text font-bold">${grandTotal.toFixed(2)}</p>
              </div>
            </div>
            <div className="border-b border-gray-300 mt-5"></div>
          </div>
          <div className="pt-10 md:pt-20">
            <Heading
              className="text-[32px] md:text-[39px] text-text font-bold"
              text="Payment"
              as="h3"
            />
            <div className="border-b border-gray-300"></div>
            <div className="flex items-center gap-x-2 py-5">
              <input type="radio" name="pay" id="" className="size-4" />
              <label htmlFor="" className="">
                Online Pay
              </label>
            </div>
            <div className="flex items-center gap-x-2 py-5">
              <input type="radio" name="pay" id="" className="size-4" />
              <label htmlFor="">Cash On Delivery</label>
            </div>
            <p className="text-[16px] leading-7 text-text ">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our <span className="font-semibold">privacy policy.</span>
            </p>
          </div>

          <div className="flex justify-between gap-x-4">
            <button
              type="submit"
              className="mt-10 text-white bg-[#262626] active:bg-[#585858] md:hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-10 py-3 text-center"
            >
              Clear
            </button>
            <button
              type="submit"
              className="mt-10 text-white bg-gray-700 active:bg-[#585858] md:hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Checkout;
