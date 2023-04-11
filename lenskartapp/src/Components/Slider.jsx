import React from 'react'
import { Autoplay,Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";


export const Slider = () => {
  return (
    <>
      <Swiper navigation={true} modules={[Autoplay,Navigation]} className="mySwiper"  autoplay={{delay: 5000,disableOnInteraction: false,}}>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Jan23/helios-plp/web%20banner.gif" alt="helios" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Feb23/Launch%20banner.gif" alt="launch" width={"100%"}  />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Feb23/style/home/B1G1%20OFFER%20-%20WEB.jpg" alt="cool styles" width={"100%"}  />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/marble/web.gif" alt="marble" width={"100%"}  />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/wedding%20edit/web-home.gif" alt="wedding" width={"100%"}  />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Dec22/1-Dec/Homepage-Banner-web.gif" alt="hustlr" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Dec22/5-Jan/1920x530(play-now)%20(1).gif" alt="peyush" width={"100%"}  />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Dec22/new-collection/desktop.gif" alt="air1" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Nov22/LK-Airflex-desktop-banner.gif" alt="air2" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Nov22/tinted/launch-desk.gif" alt="tinted" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Feb23/23feb/hooper-eye-web.jpg" alt="hooper" width={"100%"} />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://static1.lenskart.com/media/desktop/img/Nov22/trans1.gif" alt="transparent" width={"100%"} />
        </SwiperSlide>
      </Swiper>
    </>
  )
}
