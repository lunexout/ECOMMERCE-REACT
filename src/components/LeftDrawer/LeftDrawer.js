import React from 'react'
import './leftdrawer.css'


import CLOSE from './../../images/close.svg'

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
                    <div style={{height: 340, overflowY: 'scroll',paddingRight: 10}}>
                        <div style={{height: 150,backgroundColor: 'green',borderRadius: 4,}}>
                        </div>
                        <div style={{height: 150,backgroundColor: 'green',borderRadius: 4, marginTop: 10}}>
                        </div>
                        <div style={{height: 150,backgroundColor: 'green',borderRadius: 4, marginTop: 10}}>
                        </div>
                    </div>
               
                    <button style={{marginTop: 20,}} className="auth__button">
                        Shop Now $ 0.00
                    </button>
                </div>
               
            </div>
        </>
    )
}