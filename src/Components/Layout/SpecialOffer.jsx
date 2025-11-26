import axios from "axios";
import { useEffect, useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Product from "../Product";


const SpecialOffer = () => {

  // ==============
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    async function productData() {
      const apiData = await axios.get("https://dummyjson.com/products");
      setAllData(apiData.data.products);
    }
    productData();
  }, []);

  return (
    <>
      <div className="py-[30px] md:py-[60px]">
        <Container>
          <div className="flex items-center justify-between">
           <h3 className="font-bold text-2xl md:text-4xl text-[#262626]">
              Special Offers
            </h3>
            <Link to={"shop"}>
               <h4 className="font-bold text-lg md:text-2xl text-link">see all</h4>
            </Link>
          </div>

        <div className="pt-5 md:pt-10 w-full">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              // Mobile  0-639
              0: {
                slidesPerView: 1,
              },
              // Small devices (≥640px)
              640: {
                slidesPerView: 2,
              },
              // Medium devices (≥768px)
              768: {
                slidesPerView: 3,
              },
              // Large devices (≥1024px)
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {allData.map((item) => (
              <SwiperSlide key={item.id}>
                <Product
                  badgeText={`${item.discountPercentage}%`}
                  productImg={item.thumbnail}
                  productText={item.title}
                  productPrice={item.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        </Container>
      </div>
    </>
  );
};

export default SpecialOffer;
