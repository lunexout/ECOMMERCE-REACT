import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

import SwiperCore, { Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Navigation]);

export const Carousel = () => {
  return (
    <>
      <Swiper navigation={true} className="mySwiper" style={{marginTop: 30}}>
        <SwiperSlide>
            <div style={{width: '100%', height: 600, backgroundColor: '#F1E0CF', borderBottomRightRadius: 40}}>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div style={{width: '100%', height: 600, backgroundColor: '#F1E0CF', borderBottomRightRadius: 40}}>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div style={{width: '100%', height: 600, backgroundColor: '#F1E0CF', borderBottomRightRadius: 40}}>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
