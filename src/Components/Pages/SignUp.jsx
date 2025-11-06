import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";

const SignUp = () => {
  return (
    <Container className={""}>
      <div className="pt-10">
        <Heading className="text-[49px] font-bold" text="Sign up" as="h2" />
        <p className="flex items-center gap-x-2 ">
          Home <PiGreaterThan /> <span>Sign up</span>
        </p>
      </div>
      <p className="pt-20 w-[644px] text-[#767676] text-[16px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>
      <div className="pt-16">
        <form>
          <div class=" gap-6 mb-6 ">
            <Heading
              className="text-[39px] text-text font-bold"
              text="Your Personal Details"
              as="h3"
            />
            <div className="flex w-[800px] justify-between py-5">
              <div className="w-[350px]">
                <label
                  for="first_name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  First name
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
                  Last name
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
            <div className="flex w-[800px] justify-between py-5">
              <div class=" w-[350px]">
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
              <div className="w-[350px]">
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
            <Heading
              className="text-[39px] text-text font-bold pt-10"
              text="New Customer"
              as="h3"
            />
            <div className="flex w-[800px] justify-between py-5">
              <div className="w-[350px]">
                <label
                  for="Address_1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address 1
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="House number and street name"
                  required
                />
              </div>
              <div className="w-[350px]">
                <label
                  for="Address_1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address 2
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="--"
                  required
                />
              </div>
            </div>
            <div className="flex w-[800px] justify-between py-5">
              <div className="w-[350px]">
                <label
                  for="city"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your city"
                  required
                />
              </div>
              <div className="w-[350px]">
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
            </div>
            <div className="flex w-[800px] justify-between py-5">
              <div className="w-[350px]">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Division
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
              <div className="w-[350px]">
                <label
                  for="countries"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  District
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


            </div>



          </div>
            <Heading
              className="text-[39px] text-text font-bold pt-10"
              text="Your Password"
              as="h3"
            />
            <div className="flex w-[800px] justify-between py-5">
              <div className="w-[350px]">
                 <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
              </div>
              <div className="w-[350px]">
                 <label
              for="confirm_password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="confirm_password"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="•••••••••"
              required
            />
              </div>
            </div>

          <div class="flex items-start mt-8 ">
            <div class="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                class="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label
              for="remember"
              class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              I agree with the{" "}
              <a
                href="#"
                class="text-blue-600 hover:underline dark:text-blue-500"
              >
                terms and conditions
              </a>
              .
            </label>
          </div>
          <div className="text-[16px] text-[#767676] mt-4 mb-8 flex gap-x-5">
            <Heading               className="  "
              text="Subscribe Newsletter"
              as="p"/>
              <input type="radio" name="newsletter" id="" />
              <input type="radio" name="newsletter" id="" />
          </div>
          <button
            type="submit"
            class="text-white bg-[#262626] hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center"
          >
            Submit
          </button>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
