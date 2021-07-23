import React, { } from "react";
import "./leftdrawer.css";

import CLOSE from "./../../images/close.svg";
import {CartCard} from "./../Cards/CartCard/CartCard";

import { useSelector } from 'react-redux';
// import {fetchProducts} from '../../redux/actions/cartActions'

const CartList = () => {
    const cartProducts = useSelector(state => state.cart);
    return(
      cartProducts.cartList.length ? (
        cartProducts.cartList.map(item => {
            return(
                <CartCard key={item.id} product={item}/>
            )
        })
        ) : (
          <div>The cart is empty</div>
        )
    )
}

export const LeftDrawer = ({ setLeftBurgerState, LeftBurgerState }) => {
  const total = useSelector(state => state.cart.total);
  let drawerClasses = "left__drawer";
  if (LeftBurgerState) { drawerClasses = "left__drawer open"; }

  return (
    <>
      {LeftBurgerState && (
        <>
          <div
            onClick={() => setLeftBurgerState(false)}
            style={{
              position: "absolute",
              right: 0,
              left: "auto",
              width: "100%",
              height: "100%",
              top: 0,
              backgroundColor: "rgba(292,292,292, 0.5)",
            }}
          ></div>
        </>
      )}
      <div className={drawerClasses}>
        <div className="button__box">
          <img
            src={CLOSE}
            onClick={() => setLeftBurgerState(false)}
            style={{ width: 30, height: 30 }}
            className="close__burger__button"
            alt="close button"
          />
        </div>
        
        <div
          style={{ marginTop: 25, marginLeft: 15 }}
          className="defFont discount__text"
        >
          <span style={{ color: "#DA2D33" }}>-25%</span> Discount for all
          products
        </div>
        <div style={{ marginTop: 20, padding: 15,}}>
          <div style={{ height: "100%", maxHeight: 400, overflowY: "scroll", paddingRight: 10, }} >  
            <CartList/>
          </div>

          <button style={{ marginTop: 20 }} className="auth__button">
            Proceed Checkout $ {Math.round((total + Number.EPSILON) * 100) / 100}
          </button>
        </div>
      </div>
    </>
  );
};
