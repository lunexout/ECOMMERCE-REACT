import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper/core";
import './carousel.css'

// install Swiper modules
SwiperCore.use([Navigation]);

export const Carousel = () => {
  return (
    <>
      <Swiper navigation={true} className="mySwiper" style={{marginTop: 60}}>
        <SwiperSlide>
              {/* <img src="https://cdn.onoff.ge/media/thumbs/059/0597471.png" style={{width: 'auto', height: 'auto', objectFit: 'contain'}}/> */}
              <div className="swiper-image">

              </div>
        </SwiperSlide>
        <SwiperSlide>
              <div className="swiper-image1">

              </div>
        </SwiperSlide>
        {/* <SwiperSlide>
              <img src="https://cdn.onoff.ge/media/thumbs/059/0597471.png" style={{width: 'auto', height: 'auto', objectFit: 'contain'}}/>
        </SwiperSlide> */}
      </Swiper>
    </>
  );
};
