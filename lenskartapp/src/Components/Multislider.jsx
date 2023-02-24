import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {Navigation} from "swiper"
// import required modules
import { Eyecard } from './Eyecard';
export const Multislider = ({data,slides,button}) => {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: slides!==undefined?slides:4,
            spaceBetween: 50,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.map((el,index)=><SwiperSlide key={index}><Eyecard props = {el} button={button}/></SwiperSlide>)}
      </Swiper>
      </div>
  )
}
