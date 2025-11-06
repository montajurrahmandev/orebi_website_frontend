import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";

const Checkout = () => {
  return (
    <Container>
      <div className="pt-20">
        <Heading className="text-[49px] font-bold" text="Checkout" as="h2" />
        <p className="flex items-center gap-x-2 ">
          Home <PiGreaterThan /> <span>Checkout</span>
        </p>
      </div>
      <p className="pt-16">
        Have a coupon?{" "}
        <span className="text-text">Click here to enter your code</span>
      </p>
      <div className="pt-16 w-[800px]">
        <form>
          <Heading
            className="text-[39px] text-text font-bold"
            text="Billing Details"
            as="h4"
          />
          <div class="pt-10">
            <div className="flex justify-between py-5">
              <div className="w-[350px]">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name *
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John"
                  required
                />
              </div>
              <div className="w-[350px]">
                <label
                  for="last_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Last name *
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>
            <div className="py-5">
              <label
                for="company"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Company Name(optional)
              </label>
              <input
                type="text"
                id="company"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Company Name"
              />
            </div>

            <div className="py-5">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
            <div className="py-5">
              <label
                for="Address_1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Street Address *
              </label>
              <input
                type="text"
                id="first_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="House number and street name"
                required
              />
              <input
                type="text"
                id="last_name"
                class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Apartment, suite, unit etc. (optional)"
                required
              />
            </div>
            <div className="py-5">
              <label
                for="city"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Town/City *
              </label>
              <input
                type="text"
                id="city"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Town/City"
                required
              />
            </div>
            <div className="py-5">
              <label
                for="Address_1"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Post Code
              </label>
              <input
                type="text"
                id="last_name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="64537"
                required
              />
            </div>

            <div className="py-5">
              <label
                for="phone"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="123-45-678"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
            </div>
          </div>
          <div class="py-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="john.doe@company.com"
              required
            />
          </div>

          <div className="pt-10 ">
                      <Heading
            className="text-[39px] text-text font-bold"
            text="Additional Information"
            as="h4"
          />
                      <Heading
            className="text-[16px] text-text pt-4"
            text="Other Notes (optional)"
            as="h6"
          />
          <textarea className="w-[800px] p-2" name="notes" id="" placeholder="Notes about your order, e.g. special notes for delivery."></textarea>
          

          </div>

          <button
            type="submit"
            class="mt-10 text-white bg-[#262626] hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Checkout;
