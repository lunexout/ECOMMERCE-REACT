import './App.css';
import LOGO from './images/logo.svg'
import SEARCH from './images/search.svg'
import MENU from './images/menu.svg'
import HEART from './images/heart.svg'
import CART from './images/cart.svg'
import KEY from './images/key.svg'
import DELIVERY from './images/delivery.svg'
import CLOCK from './images/clock.svg'

import {LeftDrawer} from './components/LeftDrawer/LeftDrawer'
import {Carousel} from './components/Carousel/Carousel'
import { useEffect, useState } from 'react';
import { RightDrawer } from './components/RightDrawer/RightDrawer';
import { Auth } from './components/Auth/Auth';

// import AOS from 'aos';
// import 'aos/dist/aos.css'; 

function App() {
  const [RightBurgerState, setRightBurgerState] = useState(false)
  const [LeftBurgerState, setLeftBurgerState] = useState(false)
  const [auth,setAuth] = useState(false)
  useEffect(() => {
    // AOS.init();
  },[])
  return (
    <>
      <div style={{ margin: '0 auto', paddingLeft: 20, paddingRight: 20}}>
      <div className="header__navigation">
        <div className="left__header__items">
          <div className='defFont'>
            MONDAY - FRIDAY
          </div>
          <div className='defFont' style={{marginLeft: 30}}>
          9:00 TO 12:00
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{width: 40, height: 2, backgroundColor: '#000', marginRight: 20}}>
            
            </div>
            <div className='defFont discount__text'>
              <span style={{color : '#DA2D33'}}>-25%</span> Discount for all products
            </div>
          <div style={{width: 40, height: 2, backgroundColor: '#000', marginLeft: 20}}>
            
          </div>
        </div>
        <div className="right__header__items">
          <div className='defFont'>
            FAQ
          </div>
          <div className='defFont'>
            SUPPORT
          </div>
          <div className='defFont'>
            ABOUT US
          </div>
        </div>
      </div>
      <div className="header__line"></div>
      <div className="navbar_navigation">
      <div className="left__navbar__navigation">

        <div style={{display: 'flex', justifyContent:"center", alignItems:'center'}}>
        <img src={LOGO} style={{width: 60, height: 60, objectFit: 'contain'}}/>  
        <div style={{marginLeft: 20,fontSize: 20, letterSpacing: 2}} 
            className="defFont logo__name">SH<span style={{color: '#DA2D33'}}>O</span>P</div>
        <img src={SEARCH} style={{width: 25, height: 25,marginLeft: 30}}/>
        </div>
        <div style={{marginLeft: 30,display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <div className="defFont nav__items">ENGAGMENT</div>
        <div className="defFont nav__items">DESIGNERS</div>
        <div className="defFont nav__items">WATCHERS</div>
        <div className="defFont nav__items">ALL CATEGORIES</div>
        <img className="menu__icon" onClick={() => setRightBurgerState(true)} src={MENU} style={{width: 40, height: 40}}/>
        </div>
      </div>
      <div className="right__navbar__navigation" style={{width: 350 , display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        {/* <div style={{width: 130}}>
        </div> */}
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',marginLeft: 5, marginRight: 5}}>
          <img src={HEART} style={{width: 30, height: 30}}/>
          <div style={{marginLeft: 5}} className="defFont"><span style={{color: '#DA2D33'}}>WISH</span>LIST</div>
        </div>
        <div onClick={() => setLeftBurgerState(true)} 
        style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between',cursor: 'pointer'}}>
          <img src={CART} style={{width: 30, height: 30}}/>
          <div style={{marginLeft: 5}} className="defFont">$0.00</div>
        </div>
        <div onClick={() => setAuth(true)} 
        style={{display: 'flex',cursor: 'pointer', alignItems: 'center', justifyContent: 'space-between'}}>
          <img src={KEY} style={{width: 30, height: 30}}/>
          <div style={{marginLeft: 5}} className="defFont">SIGN IN</div>
        </div>
      </div>
      </div>
      </div>
      { auth && <Auth setAuth={setAuth}/>}
      <LeftDrawer setLeftBurgerState={setLeftBurgerState} LeftBurgerState={LeftBurgerState}/>
      <RightDrawer setRightBurgerState={setRightBurgerState} RightBurgerState={RightBurgerState}/>
      {/* <Carousel/>

      <div style={{ margin: '0 auto', paddingLeft: 20, paddingRight: 20}}>
        <div style={{border: '1px solid red', height: 120, alignItems: 'center', justifyContent: 'space-between', display: 'flex'}}>
          <div style={{width: 360, display: 'flex', alignItem: 'center', justifyContent: 'space-between'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src={DELIVERY} style={{width: 30, height: 30}}/>
              <p className="defFont" style={{fontWeight: 500,fontSize: 15, marginLeft: 10}}><a style={{color: '#C08F62'}} href="">Free delivery</a> from 100$</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center'}}>
              <img src={CLOCK} style={{width: 30, height: 30}}/>
              <p className="defFont" style={{fontWeight: 500,fontSize: 15, marginLeft: 10}}>Delivery in <a style={{color: '#C08F62'}} href="">24h</a></p>
            </div>
          </div>
          <div style={{width: 400, border: '1px solid green'}}></div>
        </div>
      </div> */}
    </>
  );
}

export default App;
