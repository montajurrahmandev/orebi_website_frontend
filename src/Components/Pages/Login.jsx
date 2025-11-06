import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";

const Login = () => {
  return (
    <Container>
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
              text="Returning Customer"
              as="h3"
            />

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
            </div>

          </div>


          <button
            type="submit"
            class="text-white bg-[#262626] hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="pt-20">
                    <Heading
              className="text-[39px] text-text font-bold "
              text="New Customer"
              as="h3"
            />
                  <p className=" w-[644px] text-[#767676] text-[16px] py-3 mb-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the.
      </p>
                <button
            type="Continue"
            class=" text-white bg-[#262626] hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center"
          >
            Continue
          </button>
      </div>
    </Container>
  );
};

export default Login;
