import React from 'react'
import './leftdrawer.css'


import CLOSE from './../../images/close.svg'
import PRODUCT from './product.jpg'
export const LeftDrawer = ({setLeftBurgerState, LeftBurgerState}) => {
  let drawerClasses = 'left__drawer'
  if (LeftBurgerState) {
    drawerClasses = 'left__drawer open'
  }
    return (
        <>
            {
                LeftBurgerState && (
                    <>
                    <div onClick={() => setLeftBurgerState(false)} style={{position:'absolute', right: 0,
            left: 'auto', width: '100%', height: '100%', top: 0,
             backgroundColor:'rgba(292,292,292, 0.5)'}}
            ></div>
                    </>
                )
            }
            <div className={drawerClasses} >
                <div className="button__box">
                    <img src={CLOSE} onClick={() => setLeftBurgerState(false)}
                    style={{width: 30, height: 30}} className="close__burger__button"/>
                </div>
                <div style={{marginTop: 25,marginLeft: 15}} className='defFont discount__text'>
                    <span style={{color : '#DA2D33'}}>-25%</span> Discount for all products
                </div>
                <div style={{marginTop:20,padding:15,}}>
                    <div style={{height: '100%', maxHeight: 400, overflowY: 'scroll',paddingRight: 10}}>
                        <div style={{display: "flex", gap: "10px"}}>
                        <div style={{cursor: "pointer"}}>
                            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/60780994171365.5e78570be33ae.jpg" alt="" style={{height: 75, objectFit: "contain", borderRadius: "10px"}} />
                        </div>
                        <div>
                            <h1 style={{fontWeight: "bold", fontSize: 20, margin: 0}}>Facial Cleanser</h1>
                            <p style={{margin: 0}}>hello</p>
                        </div>
                        </div>
                        <div style={{height: 150,backgroundColor: 'green',borderRadius: 4, marginTop: 10}}>
                        </div>
                        <div style={{height: 150,backgroundColor: 'green',borderRadius: 4, marginTop: 10}}>
                        </div>
                    </div>
               
                    <button style={{marginTop: 20,}} className="auth__button">
                        Proceed Checkout $ 0.00
                    </button>
                </div>
               
            </div>
        </>
    )
}