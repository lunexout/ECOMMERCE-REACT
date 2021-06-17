import { products } from "./../../json/products";

let initialState = {
  productList: [],
  dataa: "dsgdsfg",
};
export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUANTITY": {
    //   const index = state.productList.findIndex( (el) => el.id === action.product.id );
      const productList = state.productList.map((item, i) => { 
          if(item.id === action.product.id) {
            if(item.quantity === action.product.cart_quantity) { } else {  return { ...item, cart_quantity: item.cart_quantity + 1 } }
          }
          return item
      })
      return {
        ...state,
        productList: productList
      }
    }
    case "DELETE_QUANTITY": {
      const index = state.productList.findIndex(
        (el) => el.id === action.product.id
      );
      const productList = state.productList.map((item, i) => { 
        if(item.id === action.product.id) {
          if(1 === action.product.cart_quantity) { } else {  return { ...item, cart_quantity: item.cart_quantity - 1 } }
        }
        return item
      })
      return {
        ...state,
        productList: productList
      };
    }
    case "DELETE_FROM_CART": {
      const index = state.productList.findIndex(
        (item) => item.id === action.product.id
      );
      return {
        ...state,
        productList: state.productList.filter((_, i) => i !== index),
      };
    }
    default: {
      return { ...state, productList: products };
    }
  }
};
