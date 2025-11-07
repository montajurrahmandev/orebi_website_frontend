import { GoPlus } from "react-icons/go";
import Container from "../Container";
import Heading from "../Heading";
import { FaStar } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";
import { PiGreaterThan } from "react-icons/pi";

const Product_Inside = () => {
  // export default function ColorPicker({ onColorSelect }) {
  //   const [selectedColor, setSelectedColor] = useState(null);

  // const handleSelect = (color) => {
  //   setSelectedColor(color);
  //   if (onColorSelect) onColorSelect(color);
  // };
  return (
    <Container>
      <div className="py-3">
        <p className="flex items-center gap-x-2 ">
          Home <PiGreaterThan /> <span>Checkout</span>
        </p>
      </div>

      <div className="flex flex-wrap -mx-10 pt-20 ">
        <div className="w-1/2 p-10">
          <img src="/src/assets/productSeven.png" alt="" className="w-full" />
        </div>
        <div className="w-1/2 p-10">
          <img src="/src/assets/productSeven.png" alt="" className="w-full" />
        </div>
        <div className="w-1/2 p-10">
          <img src="/src/assets/productSeven.png" alt="" className="w-full" />
        </div>
        <div className="w-1/2 p-10">
          <img src="/src/assets/productSeven.png" alt="" className="w-full" />
        </div>
      </div>

      <Heading
        className="text-[39px] font-bold text-text pt-5"
        text="Product"
        as="h3"
      />
      <div className="flex text-[14px] items-center gap-6 py-3">
        <div className="flex text-[#FFD881] items-center gap-x-1">
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
          <span>
            <FaStar />
          </span>
        </div>
        <div className="">1 Review</div>
      </div>
      <p className="text-[20px]  text-text font-bold py-3 flex gap-x-6">
        {" "}
        <del className="text-[#767676] ">$88.00</del>$44.00
      </p>
      <div className="hidden">
        <div className="flex gap-x-5 pt-10 pb-5 ">
          <label htmlFor="color" className="text-[16px] font-bold text-text ">
            Color:
          </label>
          <input type="radio" name="color" id="" className="" />
          <input type="radio" name="color" id="" className="" />
          <input type="radio" name="color" id="" className="" />
          <input type="radio" name="color" id="" className="" />
        </div>
      </div>
      <div className="flex items-center gap-x-8 pt-10 pb-5">
        <label htmlFor="color" className="text-[16px] font-bold text-text ">
          Color:
        </label>
        <div className="flex items-center gap-x-3">
          <div className="size-4 bg-[#979797] rounded-full"></div>
          <div className="size-4 bg-[#FF8686] rounded-full"></div>
          <div className="size-4 bg-[#262626] rounded-full"></div>
          <div className="size-4 bg-[#54302A] rounded-full"></div>
          <div className="size-4 bg-[#15CBA5] rounded-full"></div>
        </div>
      </div>
      <div className="py-5 flex items-center gap-x-7">
        <label
          htmlFor="countries"
          className="text-[16px] font-bold text-text  dark:text-white"
        >
          SIZE:
        </label>
        <select
          id="countries"
          className="w-[120px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option selected="">Choose</option>
          <option value={5}>5</option>
          <option value={5}>5</option>
          <option value={5}>5</option>
          <option value={5}>5</option>
        </select>
      </div>

      <div className="py-5 flex items-center gap-x-10">
        <label
          for="countries"
          class="text-[16px] font-bold text-text  dark:text-white"
        >
          QUANTITY:
        </label>
        <div className="text-[16px] text-[#767676] flex items-center gap-x-5">
          <FiMinus />
          <span>1</span>
          <GoPlus />
        </div>
      </div>
      <div className="py-5">
        <p class="text-[16px] font-bold text-text  flex items-center gap-x-7">
          STATUS: <span className="text-[16px] text-[#767676] ">In stock</span>
        </p>
      </div>
      <div className="flex gap-x-5 py-5">
        <button className="px-10 py-3 bg-white border-2 rounded-2xl text-text border-text font-bold cursor-pointer hover:bg-text hover:text-white">
          Add to Wish List
        </button>
        <button className="px-14 py-3 bg-white border-2 rounded-2xl text-text border-text font-bold cursor-pointer hover:bg-text hover:text-white">
          Add to Cart
        </button>
      </div>
      <div className="pt-10 pb-5 w-[780px]">
        <div className="flex items-center justify-between w-[780px] ">
          <Heading
            className="text-[16px] font-bold text-text"
            text="FEATURES  & DETAILS"
            as="h4"
          />
          <GoPlus className="text-[16px] text-text font-bold" />
        </div>
        <p className="text-[16px] text-[#767676] py-7 hidden">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          eligendi explicabo asperiores veniam dolore libero consequuntur error
          ad nostrum. Facere consequuntur dolor quaerat in quas, distinctio
          placeat rerum dolorem veniam debitis voluptates repudiandae tempora
          modi deserunt expedita, error libero adipisci similique eos nam
          eligendi. Autem non nisi pariatur incidunt officia.
        </p>
      </div>
      <div className="py-5 w-[780px]">
        <div className="flex items-center justify-between w-[780px] ">
          <Heading
            className="text-[16px] font-bold text-text"
            text="SHIPPING & RETURNS"
            as="h4"
          />
          <GoPlus className="text-[16px] text-text font-bold" />
        </div>
        <p className="text-[16px] text-[#767676] py-7 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
          eligendi explicabo asperiores veniam dolore libero consequuntur error
          ad nostrum. Facere consequuntur dolor quaerat in quas, distinctio
          placeat rerum dolorem veniam debitis voluptates repudiandae tempora
          modi deserunt expedita, error libero adipisci similique eos nam
          eligendi. Autem non nisi pariatur incidunt officia.
        </p>
      </div>
      <div className="text-[20px] text-[#767676] pt-10">
        <div className="flex items-center gap-x-10">
          <span>Description</span>
          <span className="text-text font-bold">
            Reviews (<span>1</span>)
          </span>
        </div>
        <div className="text-[16px] text-[#767676] hidden">
          this is for description
        </div>
        <div className="text-[16px] text-[#767676] ">
          <p className="py-10">
            <span>1</span> review for Product
          </p>
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-x-5">
                <h5>John Ford</h5>
                <div className="flex items-center gap-x-1 text-[#FFD881] ml-8">
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                  <span>
                    <FaStar />
                  </span>
                </div>
              </div>
              <div className="">6 months ago</div>
            </div>
            <p className="py-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-16">
        <form>
          <div className=" gap-6 mb-6 ">
            <heading
              classname="text-[20px] text-text font-bold"
              text="Add a Review"
              as="h3"
            >
              <div classname="w-[780px] py-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your name here"
                  required=""
                />
              </div>
              <div className=" w-[780px] py-5">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="john.doe@company.com"
                  required=""
                />
              </div>
              <div classname="w-[780px] py-5">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Review
                </label>
                <textarea
                  name=""
                  id=""
                  placeholder="Your review here"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pb-6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  defaultValue={""}
                />
                <input type="text" id="first_name" required="" />
              </div>
            </heading>
          </div>
          <button
            type="submit"
            className="text-white bg-[#262626] hover:bg-[#585858] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-20 py-3 text-center"
          >
            Post
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Product_Inside;
