
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/addToCartSlice";

const Extra = ({ productImg, badgeText, productText, productPrice, productColorName, className }) => {
  const [showOptions, setShowOptions] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ title: productText, img: productImg, price: productPrice }));
  };

  return (
    <section className={"bg-gray-200 " + className}>
      <div className="relative">
        <Link to={"/product_inside"} onClick={() => setShowOptions(false)}>
          <Image imgSrc={productImg} className="w-full" />
        </Link>
        <Badge badgeText={badgeText} className="absolute top-[7%] left-[7%]" />

        {/* Toggle options */}
        <div
          className={`py-6 px-7 gap-y-3 grid bg-white absolute bottom-0 left-0 w-full transition duration-300 ease-in-out 
          ${showOptions ? "opacity-100" : "opacity-0"}`}
        >
          <Link to={"/"} className="flex items-center justify-end gap-x-2 text-[16px] text-[#767676] hover:text-text hover:font-bold">
            Add to Wish List <FaHeart className="text-[#262626]" />
          </Link>
          <Link to={"/"} className="flex items-center justify-end gap-x-2 text-[16px] text-[#767676] hover:text-text hover:font-bold">
            Compare <LuRefreshCw className="text-[#262626]" />
          </Link>
          <div
            onClick={handleAddToCart}
            className="flex items-center justify-end gap-x-2 text-[16px] text-[#767676] hover:text-text hover:font-bold cursor-pointer"
          >
            Add to Cart <FaCartShopping className="text-[#262626]" />
          </div>
        </div>

        {/* Button to toggle */}
        <button
          onClick={() => setShowOptions(!showOptions)}
          className="absolute bottom-2 right-2 bg-black text-white px-3 py-1 rounded-md"
        >
          {showOptions ? "Close" : "Options"}
        </button>
      </div>

      <div className="py-6 px-1 bg-gray-100">
        <h4 className="flex justify-between items-start font-bold text-[20px] text-text text-left">
          {productText}
          <span className="font-normal text-[16px] pt-1 text-[#767676] text-right">${productPrice}</span>
        </h4>
        <Heading as="h5" text={productColorName} className="text-[16px] text-[#767676]" />
      </div>
    </section>
  );
};


export default Extra
