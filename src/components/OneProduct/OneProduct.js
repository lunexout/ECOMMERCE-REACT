import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import './ondeproduct.css'
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

import HEART from './../../images/heart.svg'
import BAG from './../../images/singlebag.svg'

// install Swiper modules
SwiperCore.use([Navigation, Thumbs]);

export const OneProduct = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
    <div className="swiper_div_container">
    <Swiper
        onSwiper={setThumbsSwiper}
        slidesPerView={4}
        freeMode={true}
        spaceBetween={10}
        direction="vertical"
        watchSlidesVisibility={true}
        watchSlidesProgress={true}
        className="mySwiper swiper-container1"
      >
        <SwiperSlide className='swiper-slide1' style={{ height: 200, width: 200 }}>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
        <SwiperSlide style={{ height: 200, width: 200 }}>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
        <SwiperSlide style={{ height: 200, width: 200 }}>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
        <SwiperSlide style={{ height: 200, width: 200 }}>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
      </Swiper>
      <Swiper Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        className="mySwiper2 swiper22-slide "
      >
        <SwiperSlide>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="http://static1.squarespace.com/static/59d2bea58a02c78793a95114/5a0ddb34e4966b9b7c3823a4/5e98a4f9f634725afc3a261a/1614027282486/AppleSE_HP_2x3_v2.jpg?format=1500w" />
        </SwiperSlide>
      </Swiper>
      <div className='left_single_div'>
          <p style={{float: 'right', marginTop: '10px'}}><img src={HEART} style={{width: 30, height: 30}}/></p>

          <p style={{color: '#000', }}  className="defFont">Name of product: Product Name</p>
          <p style={{color: '#000', }}  className="defFont">Description: Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been <br/>the industry's standard dummy text ever since the 1500s</p>
          <div>
            
          </div>
          <button className="defFont" style={{width: 300, padding: "7px 12px", display: 'flex', outline: 'none', border: '1px solid black',
          alignItems: 'center', justifyContent: 'center', fontSize: 16, backgroundColor: '#C33C54', color: '#fff'}}>Add to shopping bag<img src={BAG} style={{width: 30, marginLeft: 20}} alt="bag cart"/></button>
      </div>
      <div className='left_def_div'></div>
      <div className="left_side_respo_div">

      </div>
    </div>
    </>
  );
};
