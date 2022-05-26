import { useState } from "react";
// Import Swiper React components

import { Navigation, Thumbs } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/virtual";

import "./slide.scss";
import { Controller } from "swiper";

// import required modules

const  SlideImg =({ images  }) => {

    return <>
            <Swiper
                //  onSwiper={setFirstSwiper}
                //  controller={{ control: secondSwiper }}
                slidesPerView={1}
                loop={true}
                spaceBetween={10}
                navigation={true}
                modules={[ Navigation, Thumbs,Controller]}
                className="mySwiper2-iteam"
            >
                {images.map((img) => {
                    return (
                        <SwiperSlide key={img}  >
                            <img src={img} alt="slide"  />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <Swiper
                // onSwiper={setSecondSwiper}
                // controller={{ control: firstSwiper }}
                watchSlidesProgress
                spaceBetween={10}
                slidesPerView={4}
                modules={[ Navigation, Thumbs, Controller]}
                className="mySwiper2-iteam-thumbs"
            >
                {images.map((img, index) => {
                    return (
                        <SwiperSlide key={index}  >
                            <div className="mySwiper2-iteam-thumbs-wrapper">
                                <img src={img} alt="slide2" />
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    
}
export default SlideImg;