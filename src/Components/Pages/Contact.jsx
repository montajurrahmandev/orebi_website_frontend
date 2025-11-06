import React from "react";
import Container from "../Container";
import { PiGreaterThan } from "react-icons/pi";
import Heading from "../Heading";

export const Contact = () => {
  return (
    <>
      <Container>
        <div className="pt-10">
          <Heading className="text-[49px] font-bold" text="Contacts" as="h2" />
          <p className="flex items-center gap-x-2 ">
            Home <PiGreaterThan /> <span>Contacts</span>
          </p>
        </div>
        <div className="pt-16 ">
          <Heading
            className="text-[39px] font-bold pb-10"
            text="Fill up a Form"
            as="h3"
          />

          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[650px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your name here"
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[650px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Your email here"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[650px] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                placeholder="Your message here"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="text-white bg-[#262626] hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-10 py-3 text-center"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="pt-16">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116833.83187872292!2d90.33728794603988!3d23.78097572844064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1762380296675!5m2!1sen!2sbd"
            width="100%"
            height="300px"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Container>
    </>
  );
};
