import React from "react";

// import testimonial data

import { testimonials } from "../data";

// import swiper react components

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "../swiper.css";

// import required modules

import { Autoplay, Pagination } from "swiper";

const TestimonialsSlider = () => {
  return <>
    <Swiper pagination={{
        clickable: true,
    }}
    autoplay={{
        delay: 6000,
        disableOnInteraction: false,
    }}
    modules={[Autoplay, Pagination]}
    className="mySwiper"
    >
        {testimonials.map((item, index) => {
            const { authorImg, authorText, authorPosition, authorName} = item;
            return <SwiperSlide key={index}>
                <div className="flex flex-col lg:flex-row gap-5 lg:gap-32">
                    <div className="w-48 h-48 lg:w-[200px] lg:h-[200px]">
                        <img className="rounded-2xl" src={authorImg} alt="" />
                    </div>
                    <div className="flex flex-col max-w-3x1">
                        <h5 className="font-body text-2x1 mb-8 italic font-normal">{authorText}</h5>
                        <div>
                            <p className="text-lg text-accent">{authorName}</p>
                            <p>{authorPosition}</p>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
  </>
};

export default TestimonialsSlider;
