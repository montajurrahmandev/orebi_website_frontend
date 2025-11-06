import React, { useEffect, useState } from "react";
import Container from "../Container";
import Heading from "../Heading";
import { PiGreaterThan } from "react-icons/pi";
import ShoppingFilterSidebar from "../Layout/Sidebar";
import Sidebar from "../Layout/Sidebar";
import Sortby from "../Layout/Sortby";
import Product from "../Product";
import axios from "axios";

const Shop = () => {
  const [allData,setAllData] = useState([])
  
  useEffect(()=>{
    async function productData() {
      const apiData =await axios.get('https://dummyjson.com/products') 
      setAllData(apiData.data.products)
      
    }
    productData() 
  
  },[])
  return (
    <>
      <Container>
        <div className="pt-10">
          <Heading className="text-[49px] font-bold" text="Products" as="h2" />
          <p className="flex items-center gap-x-2 ">
            Home <PiGreaterThan /> <span>Products</span>
          </p>
        </div>

        <div className="flex justify-between items-start pt-16">
          <div className="w-1/4">
            <Sidebar />
          </div>
          <div className="w-3/4">
            <Sortby />

            <div className="flex flex-wrap justify-between pt-12 gap-y-10 -mx-4">

                {
                  allData.map(item=>(
                    
                    <div className="w-[33%]  text-center ">
                    <Product
                      badgeText={`${item.discountPercentage}%`}
                      productImg={item.thumbnail}
                      productText={item.title} 
                      productPrice={item.price}
                      
                      />
                      </div>
                  ))
                }
              

            </div>
            <div className="pt-10 flex justify-between items-center text-[#767676]">
              <div className="flex items-center gap-x-0.5">
                <div className="size-8 bg-[#e9e9e9] border border-[#F0F0F0] flex justify-center items-center hover:text-white hover:bg-[#262626]">1</div>
                <div className="size-8 bg-[#e9e9e9] border border-[#F0F0F0] flex justify-center items-center hover:text-white hover:bg-[#262626]">2</div>
                <div className="size-8 bg-[#e9e9e9] border border-[#F0F0F0] flex justify-center items-center hover:text-white hover:bg-[#262626]">3</div>
                <div className="size-8 bg-[#e9e9e9] border border-[#F0F0F0] flex justify-center items-center hover:text-white hover:bg-[#262626]">4</div>
                <div className="size-8   flex justify-center items-center ">...</div>
                <div className="size-8 bg-[#e9e9e9] border border-[#F0F0F0] flex justify-center items-center hover:text-white hover:bg-[#262626]">10</div>
               
              </div>
              <div className="">Products from 1 to 12 of 80</div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Shop;
