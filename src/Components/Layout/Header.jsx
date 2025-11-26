import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import Logo from "/src/assets/logo.png";
import { Link } from "react-router-dom";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { FaUser, FaCaretDown, FaShoppingCart, FaShare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { FaBarsStaggered } from "react-icons/fa6";

const Header = ({ searchQuery, onSearchChange }) => {
  const [showCategory, setCategory] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showUser, setShowUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef(null);

  const handleCategory = () => {
    // setCategory(true) // Only show, no toggle back

    // setCategory(!showCategory)
    setCategory((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setTimeout(() => {
        setCategory(false);
        setShowMenu(false);
        setShowCart(false);
        setShowUser(false);
      }, 100);
    }
  };
  useEffect(() => {
    document, addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // const location = useLocation();
  // useEffect(() => {
  //   setShowMenu(false);
  // }, [location]);

  const handleShowCart = () => {
    setShowCart(!showCart);
  };
  let data = useSelector((state) => state.cart.value);

  //  const grandTotal = data.reduce((accumulator, currentItem) => {
  //   // Add the total price of the current item to the accumulator
  //   return accumulator + (currentItem.price * currentItem.quantity);
  // }, 0); // The '0' is the starting value for the accumulator

  const grandTotal = data.reduce((Total, currentItem) => {
    return Total + currentItem.price * currentItem.quantity;
  }, 0);

  // console.log(grandTotal);

  const handleUser = () => {
    setShowUser(!showUser);
  };

  // Menu
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div>
        <div className="bg-gray-300 py-5">
          <Container>
            <Flex>
              <div className="">
                <Link to={"/"}>
                  <Image
                    className="cursor-pointer"
                    imgSrc={Logo}
                    imgAlt="this is logo"
                  />
                </Link>
              </div>
              <div className=" hidden md:flex justify-center flex-1">
                <ul className="flex justify-center">
                  <li>
                    <Link
                      to={"/"}
                      className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"shop"}
                      className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer"
                    >
                      Shop
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"about"}
                      className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"contact"}
                      className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer"
                    >
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"journal"}
                      className="px-5 text-[14px] text-[#767676] hover:text-[#262626] hover:font-bold cursor-pointer"
                    >
                      Journal
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="flex md:hidden justify-end flex-1 relative">
                <div ref={dropdownRef}>
                  <div>
                    <button
                      onClick={handleShowMenu}
                      className="px-3 py-1 border "
                    >
                      <FaBarsStaggered className="text-[16px]" />
                    </button>
                  </div>
                  {showMenu && (
                    <div className="bg-gray-300 absolute top-7 right-0 z-100 w-1/3">
                      <div className="flex justify-center">
                        <ul className="flex flex-col justify-center gap-y-3 p-5  text-[12px] text-[#767676]">
                          <li className="py-2 cursor-pointer">
                            <Link
                              to={"/"}
                              className="block active:text-[#262626] active:font-bold "
                            >
                              Home
                            </Link>
                          </li>
                          <li className="py-2 cursor-pointer">
                            <Link
                              to={"/shop"}
                              className="block active:text-[#262626] active:font-bold "
                            >
                              Shop
                            </Link>
                          </li>
                          <li className="py-2 cursor-pointer">
                            <Link
                              to={"/about"}
                              className="block active:text-[#262626] active:font-bold "
                            >
                              About
                            </Link>
                          </li>
                          <li className="py-2 cursor-pointer">
                            <Link
                              to={"/contact"}
                              className="block active:text-[#262626] active:font-bold "
                            >
                              Contacts
                            </Link>
                          </li>
                          <li className="py-2 cursor-pointer">
                            <Link
                              to={"/journal"}
                              className="block active:text-[#262626] active:font-bold "
                            >
                              Journal
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </Flex>
          </Container>
        </div>
        <div className="bg-[#F5F5F3] py-3">
          <Container>
            <Flex className="justify-between">
              <div className="relative" ref={dropdownRef}>
                {/* onClick={()=> setCategory(!showCategory)} */}
                <div>
                  <button
                    onClick={handleCategory}
                    className="flex items-center gap-x-1.5 text-[#262626] text-[14px]"
                  >
                    <HiOutlineBars2 className="text-[20px]" />
                    <h3 className="hidden md:block">Shop by Category</h3>
                  </button>
                </div>

                {showCategory && (
                  <ul className="absolute top-6 left-0 z-10 bg-gray-400 text-white py-2 grid gap-y-2">
                    <li className="px-5 text-[14px]  text-[#262626] font-bold md:hidden">
                      <label>Shop by Category</label>
                    </li>

                    <li className="px-5 text-[14px]  hover:text-[#262626] hover:font-bold cursor-pointer">
                      <Link to={""}>beauty</Link>
                    </li>
                    <li className="px-5 text-[14px]  hover:text-[#262626] hover:font-bold cursor-pointer">
                      <Link to={""}>groceries</Link>
                    </li>
                    <li className="px-5 text-[14px]  hover:text-[#262626] hover:font-bold cursor-pointer">
                      <Link to={""}>fragrances</Link>
                    </li>
                    <li className="px-5 text-[14px]  hover:text-[#262626] hover:font-bold cursor-pointer">
                      <Link to={""}>furniture</Link>
                    </li>
                  </ul>
                )}
              </div>
              <div className="relative w-1/2">
                <input
                  type="text"
                  placeholder="Search Product"
                  value={searchQuery}
                  onChange={onSearchChange}
                  className="p-3 bg-white w-full border-none outline-0"
                />
                <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl" />
              </div>
              <div className="relative">
                <Flex className="text-[14px] gap-x-5">
                  <div ref={dropdownRef} className="relative">
                    <button onClick={handleUser} className="flex gap-x-1">
                      <FaUser className="text-[16px]" />
                      <FaCaretDown />
                    </button>
                    {showUser && (
                      <div className="absolute top-[20px] right-0 p-5 bg-gray-300   text-[26px] rounded-2xl">
                        <Link to={"userdashboard"}>
                          <p className=" leading-12 ">Dashboard</p>
                        </Link>
                        <Link to={"login"}>
                          <p className=" leading-12 ">Login</p>
                        </Link>
                        <Link to={"signup"}>
                          <p className=" leading-12">Sign Up</p>
                        </Link>
                      </div>
                    )}
                  </div>
                  <div className="relative" ref={dropdownRef}>
                    <div
                      onClick={handleShowCart}
                      className="hidden md:block relative  p-2"
                    >
                      <FaShoppingCart className="text-[16px] " />
                      <span className="py-0.5 px-1 bg-gray-400 text-white rounded-full absolute -top-[8%] -right-[8%] text-xs">
                        {data.length}
                      </span>
                    </div>
                    <div className="block md:hidden relative  p-2">
                      <Link to={"cart"} className="block">
                        <FaShoppingCart className="text-[16px]" />
                        <span className="py-0.5 px-1 bg-gray-400 text-white rounded-full absolute -top-[8%] -right-[8%] text-xs">
                          {data.length}
                        </span>
                      </Link>
                    </div>

                    {showCart && (
                      <div className="bg-neutral-400 p-3 w-[600px] absolute right-0 top-[20px] z-50 hidden md:block">
                        <RxCross2 onClick={() => setShowCart(!showCart)} />
                        <ul className="flex justify-between pt-2 text-white text-[16px] border-b-2 border-white">
                          <li className="w-[170px]">Title</li>
                          <li className="pl-4">price</li>
                          <li className="pl-5">Image</li>
                          <li>Quantity</li>
                          <li>Total</li>
                        </ul>
                        {data.map((item) => (
                          <>
                            <ul className="flex justify-between pt-2 text-white text-[14px] ">
                              <li className="w-[160px]">{item.title}</li>
                              <li>${item.price} </li>
                              <li>
                                <img src={item.img} alt="" className="h-10" />
                              </li>
                              <li>{item.quantity}</li>
                              <li>${item.price * item.quantity}</li>
                            </ul>
                          </>
                        ))}
                        <div className=" text-black text-[18px] pt-2 gap-x-2 flex items-center justify-end ">
                          Total : <span>${grandTotal.toFixed(2)}</span>
                        </div>
                        <Link to={"cart"}>
                          <div className="flex items-center text-text">
                            <FaShare />
                            <p>View Full Page</p>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </Flex>
              </div>
            </Flex>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Header;
