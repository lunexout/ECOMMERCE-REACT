let initialState = {
  cartList: [],
  total: 0,
};
export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_QUANTITY": {
      const cartList = state.cartList.map((item, i) => { 
          if(item.id === action.product.id) {
            if(item.quantity === action.product.cart_quantity) { }
            else { 
              state.total += action.product.price; 
              return { ...item, cart_quantity: item.cart_quantity + 1 }
            }
          }
          return item
      })
      return {
        ...state,
        cartList: cartList
      }
    }
    case "DELETE_QUANTITY": {
      const cartList = state.cartList.map((item, i) => { 
        if(item.id === action.product.id) {
          if(1 === action.product.cart_quantity) { }
          else {
            state.total -= action.product.price;  
            return { ...item, cart_quantity: item.cart_quantity - 1 }
          }
        }
        return item
      })
      return {
        ...state,
        cartList: cartList
      };
    }
    case "ADD_CART": {
      state.total += action.product.price;
      action.product.isAdd = true;
      state.cartList.push(action.product)
      return {
        ...state, cartList: state.cartList };
    }
    case "REMOVE_CART": {
      if(state.cartList.length === 1) {
        state.total = 0;
      }else {
        state.total = state.total - (action.product.cart_quantity * action.product.price);
      }
      action.product.isAdd = false;
      const index = state.cartList.findIndex(
        (item) => item.id === action.product.id
      );
      return {
        ...state,
        cartList: state.cartList.filter((_, i) => i !== index),
      };
    }
    default: {
      return { ...state };
    }
  }
};
