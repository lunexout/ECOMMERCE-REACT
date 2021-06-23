let initialState = {
  productList: [],
  copyOfProductList: [],
};
export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR': {
      return {...state, productList: action.payload, copyOfProductList: [...action.payload]}
    }
    case 'FILTER_BY': {
      switch(action.payload) {
        case 0: {
          return {...state, productList: [...state.copyOfProductList]}
        }
        case 1: {
          const sortedByPrice = state.productList.sort((a, b) =>  parseFloat(a.price) - parseFloat(b.price));
          return {...state, productList: [...sortedByPrice]}
        }
        case 2: {
          const sortedByPrice = state.productList.sort((a, b) =>  parseFloat(a.price) - parseFloat(b.price));
          return {...state, productList: [...sortedByPrice.reverse()]}
        }
        case 3: {
          const sortedByAtoZ =state.productList.sort((a, b) => a.title.localeCompare(b.title))
          return {...state, productList: [...sortedByAtoZ]}
        }
        case 4: {
          const sortedByZtoA =state.productList.sort((a, b) => a.title.localeCompare(b.title))
          return {...state, productList: [...sortedByZtoA.reverse()]}
        }
      }
    }
    default: {
      return {...state}
    }
  }
};