import React, { useState } from "react";
import { motion } from "framer-motion";

import MINUS from "./../../../images/minus.svg";
import PLUS from "./../../../images/add.svg";

import {
  addQuantity,
  deleteQuantity,
  deleteFromCart,
} from "./../../../redux/actions/fetchProducts";
import { useDispatch } from "react-redux";

export const CartCard = ({ product }) => {
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(false);

  const RenderAnimation = ({children}) => {
    if (animation) {
      return (
        <motion.div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            position: "relative",
          }}
          transition={{ duration: 0.3 }}
          animate={{ x: -350, opacity: 1 }}
        >
          {children}
        </motion.div>
      );
    } else {
      return <div>{children}</div>;
    }
  };

  return (
    <>
      <RenderAnimation>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              right: "8px",
              cursor: "pointer",
              fontSize: "21px",
            }}
            onClick={() => {
              setTimeout(() => {
                dispatch(deleteFromCart(product));
              }, 250);
              setAnimation(true);
            }}
          >
            ×
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            <div style={{ cursor: "pointer" }}>
              <img
                src={product.image}
                alt=""
                style={{
                  width: 70,
                  height: 70,
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div style={{ marginLeft: 10 }}>
              <h1 style={{ fontWeight: "bold", fontSize: 15, margin: 0 }}>
                {product.name}
              </h1>
              <p style={{ marginTop: 25 }}>$ {product.price}</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
              marginBottom: "5px",
            }}
          >
            <div
              style={{
                backgroundColor: "#C6D0DA",
                borderRadius: 4,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1px 10px",
                width: 70,
              }}
            >
              <div onClick={() => dispatch(deleteQuantity(product))}> 
                <img
                  src={MINUS}
                  style={{ width: 20, objectFit: "contain" }}
                  alt="minus"
                />
              </div>
              <div>{product.cart_quantity}</div>
              <div onClick={() => dispatch(addQuantity(product))}>
                <img
                  src={PLUS}
                  style={{ width: 20, objectFit: "contain" }}
                  alt="plus"
                />
              </div>
            </div>
          </div>
        </div>
      </RenderAnimation>
    </>
  );
};
