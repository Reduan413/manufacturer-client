import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useState } from "react";
import Rating from "react-rating";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Review.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  axios.get("http://localhost:5000/review").then((res) => {
    setReviews(res.data);
  });
  return (
    <div className="px-12 ">
        <h1 className="text-5xl font-bold text-secondary text-center my-12 uppercase">our Client  review</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.slice(0, 8).map((review) => (
          <SwiperSlide>
            <div class="swiper-slide slide">
              <p>{review.reviewBody}</p>
              <img src={review.image} alt="" />
              <h3>{review.name}</h3>

              <Rating
                initialRating={review.rating}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
