import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";
import Sidebar from "../Layout/Sidebar";
import Sortby from "../Layout/Sortby";
import Product from "../Product";
import axios from "axios";
import { GoSidebarCollapse } from "react-icons/go";

const Shop = () => {
  const [allData, setAllData] = useState([]);
  const [showSidebar, setSidebar] = useState(false);


  useEffect(() => {
    async function productData() {
      const apiData = await axios.get("https://dummyjson.com/products");
      setAllData(apiData.data.products);
    }
    productData();
  }, []);
  return (
    <>
      <Container>
        <div className="pt-10">
          <Heading className="text-[36px] md:text-[49px] font-bold" text="Products" as="h2" />
          <p className="flex items-center gap-x-2 ">
            Home <PiGreaterThan /> <span>Products</span>
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start pt-16 gap-x-4">
          <div className="w-full md:w-1/4 ">
            <button onClick={()=> setSidebar(!showSidebar)} className="text-[20px] flex items-center gap-x-2 w-full md:w-[80%] bg-gray-200 px-2 py-0 rounded relative cursor-pointer mt-6">

                <GoSidebarCollapse className="absolute top-1/2 left-[5%] -translate-1/2"/>
        
              <span className="m-auto block">Filter</span>
            </button>
            {showSidebar && (
              <div className="w-full md:w-[80%] md:pr-2">
              <Sidebar />
            </div>
            )}
          </div>
          <div className="w-full md:w-3/4 ">
            <Sortby />

            <div className="flex flex-wrap justify-between pt-6 md:pt-12 gap-y-6 md:gap-y-10 -mx-4">
              {allData.map((item) => (
                <div className="w-full md:w-[33%]  text-center px-4" key={item.id}>
                  <Product
                    badgeText={`${item.discountPercentage}%`}
                    productImg={item.thumbnail}
                    productText={item.title}
                    productPrice={item.price}
                    className={""}
                  />
                </div>
              ))}
            </div>
            <div className="pt-10 flex justify-between items-center text-[#767676]">
              <div className="flex items-center gap-x-2 w-2/3">
                <div className="size-8 bg-[#e9e9e9]  flex justify-center items-center hover:text-white hover:bg-[#262626]">
                  1
                </div>
                <div className="size-8 bg-[#e9e9e9]  flex justify-center items-center hover:text-white hover:bg-[#262626]">
                  2
                </div>
                <div className="size-8 bg-[#e9e9e9]  flex justify-center items-center hover:text-white hover:bg-[#262626]">
                  3
                </div>
                <div className="hidden md:flex size-8 bg-[#e9e9e9]   justify-center items-center hover:text-white hover:bg-[#262626]">
                  4
                </div>
                <div className="size-8   flex justify-center items-center ">
                  ...
                </div>
                <div className="size-8 bg-[#e9e9e9]  flex justify-center items-center hover:text-white hover:bg-[#262626]">
                  10
                </div>
              </div>
              <div className="w-1/3 flex justify-end text-sm">Products from 1 to 30 of 80</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
