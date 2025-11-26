import React from "react";
import { Link } from "react-router-dom";



const Banner = () => {
  return (
    <>
      <Link to="">
        <div className="bg-[url(/src/assets/bannerBG-mobile.png)] md:bg-[url(/src/assets/bannerBG.png)] py-[80px] w-full h-auto md:py-[300px] bg-no-repeat bg-cover bg-center"></div>
      </Link>

    </>
  );
};

export default Banner;
