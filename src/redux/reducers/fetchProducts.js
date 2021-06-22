let initialState = {
  productList: [],
};
export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR': {
      return {...state, productList: action.payload}
    }
    default: {
      return {...state}
    }
  }
};
