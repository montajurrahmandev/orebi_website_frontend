import { useState } from "react";
import Container from "../Container";
import Flex from "../Flex";
import { Link } from "react-router-dom";
import Logo from "/src/assets/logo.png";
import { MdCopyright } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";

const Footer = () => {
  const [showFooterMenu, setFooterMenu] = useState(false);
  const [showShopMenu, setShopMenu] = useState(false);
  const [showHelpMenu, setHelpMenu] = useState(false);
  return (
    <>
      <div className="bg-[#d1cdcd] py-10 mt-24">
        <Container>
          <Flex className={"justify-between items-start w-5/6 hidden md:flex"}>
            <div className="">
              <h3 className="text-[16px] text-[#262626] font-bold">Menu</h3>
              <div className="hidden md:block">
                <ul className="text-[14px] text-[#767676] flex flex-col gap-y-2 mt-2">
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"/"} className="block py-1">
                      Home
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"shop"} className="block py-1">
                      Shop
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"about"} className="block py-1">
                      About
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"contact"} className="block py-1">
                      Contacts
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"journal"} className="block py-1">
                      Journal
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h3 className="text-[16px] text-[#262626] font-bold">SHOP</h3>
              <div className="hidden md:block">
                <ul className="text-[14px] text-[#767676] flex flex-col gap-y-2 mt-2">
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"/"} className="block py-1">
                      Category 1
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"shop"} className="block py-1">
                      Category 2
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"about"} className="block py-1">
                      Category 3
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"contact"} className="block py-1">
                      Category 4
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"journal"} className="block py-1">
                      Category 5
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h3 className="text-[16px] text-[#262626] font-bold">HELP</h3>
              <div className="hidden md:block">
                <ul className="text-[14px] text-[#767676] flex flex-col gap-y-2 mt-2">
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"/"} className="block py-1">
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"shop"} className="block py-1">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"about"} className="block py-1">
                      Special E-shop
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"contact"} className="block py-1">
                      Shipping
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"journal"} className="block py-1">
                      Secure Payments
                    </Link>
                  </li>
                  <li className="active:text-[#262626] active:font-bold cursor-pointer">
                    <Link to={"journal"} className="block py-1">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h5 className="text-[16px] text-[#262626] gap-y-5">
                01.........
              </h5>
              <h5 className="text-[16px] text-[#262626] gap-y-5">
                company@domain.com
              </h5>
              <p className="text-[14px] text-[#767676] pt-6" >
                house, street, city, country
              </p>
            </div>
            <div className="">
              <Link to={"/"}>
                <img src={Logo} />
              </Link>
            </div>
          </Flex>
          {/* Mobile Footer */}
          <Flex className={"justify-between items-start md:hidden gap-x-8"}>
            <div className="w-1/2 flex flex-col gap-y-3  drop-shadow-3xl">
              <div className="">
                <button
                  onClick={() => {
                    setFooterMenu(!showFooterMenu);
                  }}
                  className="text-[16px] text-[#262626] font-medium active:font-bold cursor-pointer border-none w-full py-1 px-3 bg-gray-300 drop-shadow-md flex items-center justify-between"
                >
                  Menu <FaAngleDown className="text-[20px]" />
                </button>
                {showFooterMenu && (
                  <div className="">
                    <ul className="text-[14px] text-[#767676] flex flex-col gap-y-2 px-3 mt-2">
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"/"} className="block py-1">
                          Home
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"shop"} className="block py-1">
                          Shop
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"about"} className="block py-1">
                          About
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"contact"} className="block py-1">
                          Contacts
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"journal"} className="block py-1">
                          Journal
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="">
                <button
                  onClick={() => {
                    setShopMenu(!showShopMenu);
                  }}
                  className="text-[16px] text-[#262626] font-medium active:font-bold cursor-pointer border-none w-full py-1 px-3 bg-gray-300 drop-shadow-md flex items-center justify-between"
                >
                  SHOP <FaAngleDown className="text-[20px]" />
                </button>
                {showShopMenu && (
                  <div className="">
                    <ul className="text-[14px] text-[#767676] flex flex-col gap-y-2 px-3 mt-2">
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"/"} className="block py-1">
                          Category 1
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"shop"} className="block py-1">
                          Category 2
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"about"} className="block py-1">
                          Category 3
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"contact"} className="block py-1">
                          Category 4
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"journal"} className="block py-1">
                          Category 5
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <div className="">
                <button
                  onClick={() => {
                    setHelpMenu(!showHelpMenu);
                  }}
                  className="text-[16px] text-[#262626] font-medium active:font-bold cursor-pointer border-none w-full py-1 px-3 bg-gray-300 drop-shadow-md flex items-center justify-between"
                >
                  HELP <FaAngleDown className="text-[20px]" />
                </button>
                {showHelpMenu && (
                  <div className="">
                    <ul className="text-[14px] text-[#767676] flex flex-col gap-y-2 px-3 mt-2">
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"/"} className="block py-1">
                          Privacy Policy
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"shop"} className="block py-1">
                          Terms & Conditions
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"about"} className="block py-1">
                          Special E-shop
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"contact"} className="block py-1">
                          Shipping
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"journal"} className="block py-1">
                          Secure Payments
                        </Link>
                      </li>
                      <li className="active:text-[#262626] active:font-bold cursor-pointer">
                        <Link to={"journal"} className="block py-1">
                          FAQ
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="w-1/2 flex flex-col gap-y-6">
              <div className="">
                <Link to={"/"}>
                  <img src={Logo} />
                </Link>
              </div>
              <div className="">
                <h5 className="text-[16px] text-[#262626] ">01.........</h5>
                <h5 className="text-[16px] text-[#262626] ">
                  company@domain.com
                </h5>
                <p className="text-[14px] text-[#767676] pt-6">
                  house, street, city, country
                </p>
              </div>
            </div>
          </Flex>
          <p className="flex items-center justify-center text-[16px] gap-x-1 pt-6">
            <MdCopyright />
            Copyright
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
