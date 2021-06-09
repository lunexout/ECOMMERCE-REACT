import React from 'react'
// install Swiper modules
import IMAGE1 from './im2.jpg'
import IMAGE2 from './im4.jpg'
import './topproducts.css'
export const TopProducts = () => {
  return (
    <>
        <div className="products__container">
            <div style={{width: '100%', flex: 1,height: 260, position: 'relative'}}>
                <img src={IMAGE1} style={{width: '100%', height: 260,objectFit: 'cover'}}/>
                <button style={{position: 'absolute', top: 10, left: 10, right: 'auto',
                padding: '13px 36px',fontFamily: 'Quicksand',fontWeight: 'bold',
                borderRadius: 4,outline: 'none', border: 'none', backgroundColor: '#AE8CA3', color: "#fff",cursor: 'pointer'
            }}>
                    See More
                </button>
                <h5 className="productFont" style={{position: 'absolute', top: 40, left: 10, right: 'auto', color: '#fff'}}>
                    PRODUCT NAME
                </h5>
                <a className="productFont" href="" style={{position: 'absolute', top: 100, left: 10, right: 'auto'}}>
                    Quick Buy
                </a>
            </div>
            <div style={{width: '100%',flex: 1, height: 260,position: 'relative'}}>
                <img src={IMAGE2} style={{width: '100%', height: 260,objectFit: 'cover'}}/>
                <button style={{position: 'absolute', top: 10, left: 10, right: 'auto',
                padding: '13px 36px',fontFamily: 'Quicksand',fontWeight: 'bold',
                borderRadius: 4,outline: 'none', border: 'none', backgroundColor: '#AE8CA3', color: "#fff",cursor: 'pointer'
            }}>
                    See More
                </button>
                <h5 className="productFont" style={{position: 'absolute', top: 40, left: 10, right: 'auto', color: '#fff'}}>
                    PRODUCT NAME
                </h5>
                <a className="productFont" href="" style={{position: 'absolute', top: 100, left: 10, right: 'auto'}}>
                    Quick Buy
                </a>
            </div>
        </div>
        
    </>
  );
};
