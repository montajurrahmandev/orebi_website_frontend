import React from "react";
import Container from "../Container";
import { PiGreaterThan } from "react-icons/pi";
import Heading from "../Heading";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Container>
      <div className="pt-10">
        <Heading className="text-[49px] font-bold" text="About" as="h2" />
        <p className="flex items-center gap-x-2 ">
          Home <PiGreaterThan /> <span>About</span>
        </p>
      </div>
      <div className="flex items-center pt-16">
        <div className="relative w-full">
          <img
            className="w-full "
            src="/src/assets/productOne.png"
            alt="productOne"
          />
          <Link className="bg-[#262626] px-20 py-7 text-white absolute bottom-4 left-1/2 -translate-x-1/2">
            Our Brands
          </Link>
        </div>
        <div className="relative w-full">
          <img
            className="w-full"
            src="/src/assets/abouttwo.png"
            alt="producttwo"
          />
          <Link className="bg-[#262626] px-20 py-7 text-white absolute bottom-4 right-1/2 translate-x-1/2">
            Our Stores
          </Link>
        </div>
      </div>
      <div className="pt-24">
        <p className="text-text text-[39px] leading-14">
          Orebi is one of the world’s leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </p>
      </div>
      <div className="flex justify-between pt-16">
        <div className="w-[30%] ">
          <Heading
            className="text-[25px] text-text font-bold"
            text="Our Vision"
            as="h4"
          />
          <p className="text-[16px] text-[#767676] leading-8 pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-[30%] ">
          <Heading
            className="text-[25px] text-text font-bold"
            text="Our Story"
            as="h4"
          />
          <p className="text-[16px] text-[#767676] leading-8 pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div className="w-[30%] ">
          <Heading
            className="text-[25px] text-text font-bold"
            text="Our Brands"
            as="h4"
          />
          <p className="text-[16px] text-[#767676] leading-8 pt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>

      </div>
    </Container>
  );
};

export default About;
