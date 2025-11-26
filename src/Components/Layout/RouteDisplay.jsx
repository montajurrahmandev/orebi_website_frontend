import React from "react";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";
import { Link } from "react-router-dom";

const RouteDisplay = ({className,route}) => {
  return (
    <section className={"pt-10"+ className}>
      <Container>
        <div >
          <Heading
            className="text-[36px] md:text-[49px] font-bold"
            text={route}
            as="h2"
          />
          <p className="flex items-center gap-x-2 ">
            <Link to={"/"}>Home</Link> <PiGreaterThan /> <Link to={`/${route}`}>{route}</Link>
          </p>
        </div>
      </Container>
    </section>
  );
};

export default RouteDisplay;
