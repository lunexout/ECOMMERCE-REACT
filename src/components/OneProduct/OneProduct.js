import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/thumbs/thumbs.min.css";

import './ondeproduct.css'
// import Swiper core and required modules
import SwiperCore, { Navigation, Thumbs } from "swiper/core";

import HEART from './../../images/star (1).svg'
import BAG from './../../images/singlebag.svg'
import SALE from './../../images/sale.svg'
// import GIFT from './../../images/gift-card.svg'
import REVIEW from './../../images/review.svg'
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
          <img alt='' src="https://fdn.gsmarena.com/imgroot/news/20/11/iphone-12-pro-max-just-in/-1200w5/gsmarena_001.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ height: 200, width: 200 }}>
          <img alt='' src="https://fdn.gsmarena.com/imgroot/news/20/11/iphone-12-pro-max-just-in/-1200w5/gsmarena_001.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ height: 200, width: 200 }}>
          <img alt='' src="https://fdn.gsmarena.com/imgroot/news/20/11/iphone-12-pro-max-just-in/-1200w5/gsmarena_001.jpg" />
        </SwiperSlide>
        <SwiperSlide style={{ height: 200, width: 200 }}>
          <img alt='' src="https://fdn.gsmarena.com/imgroot/news/20/11/iphone-12-pro-max-just-in/-1200w5/gsmarena_001.jpg" />
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
          <img alt='' src="https://fdn.gsmarena.com/imgroot/news/20/11/iphone-12-pro-max-just-in/-1200w5/gsmarena_001.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='' src="https://fdn.gsmarena.com/imgroot/news/20/11/iphone-12-pro-max-just-in/-1200w5/gsmarena_001.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='' src="https://fdn.gsmarena.com/imgroot/news/20/11/iphone-12-pro-max-just-in/-1200w5/gsmarena_001.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img alt='' src="https://fdn.gsmarena.com/imgroot/news/20/11/iphone-12-pro-max-just-in/-1200w5/gsmarena_001.jpg" />
        </SwiperSlide>
      </Swiper>
      
      <div className='left_single_div' style={{}}>
      <p style={{float: 'right', marginTop: '10px'}}>
        
        
         
         <img alt='' src={HEART} style={{width: 30, height: 30, marginRight: 0, marginTop: -15}}/></p>

         <div style={{position: 'relative', left: 30}}>

          <p style={{color: '#000',fontFamily: 'Heebo',fontSize: 30, fontWeight: 'bold'}}  className="">COMPOUD ZIP HOODIE</p>
          <p style={{color: '#000', fontWeight: 400, fontFamily: 'Heebo',}} >Lorem Ipsum is simply dummy text of the printing<br/> and typesetting industry. Lorem Ipsum has been <br/>the industry's standard dummy text ever since the 1500s</p>
          <div  >
            {/* <p style={{color: '#000', }}  className="defFont">Colors:</p>  */}
          </div>


          <div>   
                   <img alt='' src={SALE} style={{width: 100, height: 100, objectFit: 'cover',position: 'absolute', marginLeft: -124,zIndex: 2, marginTop: -202}} />
          </div>
          <div>
            <select style={{width: 200, padding: 15, border: '1px solid lightgray',  borderRadius: 6}}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            </select>
          </div>
          <div >
            <p style={{color: '#000' }}><span style={{ fontSize: 25,fontFamily: 'Heebo',}}> $17.90 USD</span> <span style={{textDecoration: 'line-through',fontFamily: 'Heebo', color: '#EB423F'}}>$35.80 USD</span></p>
          </div>

          <div style={{display: 'flex', justifyContent:'center', alignItems: 'center', width: 360}}>
          <button style={{width: 400, padding: "7px 12px", display: 'flex', outline: 'none',border: 'none', borderRadius: 4,
          alignItems: 'center', justifyContent: 'center', fontSize: 16, backgroundColor: '#5062AA',fontFamily: 'Heebo', color: '#fff'}}>Add to shopping bag
          <img src={BAG} style={{width: 30, marginLeft: 20}} alt="bag cart"/></button>

          <button className="defFont" style={{marginLeft: 15,padding: "7px 12px", display: 'flex', outline: 'none',border: 'none', borderRadius: 4,
          alignItems: 'center', justifyContent: 'center', fontSize: 16, backgroundColor: '#5062AA', color: '#fff'}}>
          <img src={REVIEW} style={{width: 30, }} alt="bag cart"/></button>
          </div>
         </div>
          
          <div>
            
          </div>
          
      </div>
      <div className='left_def_div'></div>
      <div className="left_side_respo_div">

      </div>
    </div>
    </>
  );
};
