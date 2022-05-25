import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
//import "./styles.css";
import slide1 from "../../image/slide1.jpg";
import slide2 from "../../image/slide2.webp";
import slide3 from "../../image/slide3.jpg";
import slide4 from "../../image/slide4.jpg";
import slide5 from "../../image/slide5.jpg";
import slide6 from "../../image/slide6.jpg";

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        // pagination={{
        //   clickable: true,
        // }}
        //navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="w-full "
            style={{ height: 500 }}
            src={slide1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" style={{ height: 500 }} src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" style={{ height: 500 }} src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" style={{ height: 500 }} src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" style={{ height: 500 }} src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full" style={{ height: 500 }} src={slide6} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
