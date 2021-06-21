import { products } from "../../json/products";
let initialState = {
  productList: [],
};
export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    default: {
      return { ...state, productList: products };
    }
  }
};
