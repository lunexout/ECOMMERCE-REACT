let initialState = {
  categorieList: [],
  productList: [],
  copyOfProductList: [],
};
export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POPULAR': {
      return {...state, productList: action.payload.sort((a, b) =>  parseFloat(a.price) - parseFloat(b.price)), copyOfProductList: [...action.payload], categorieList: [...new Set(action.payload.map(item => item.category))]}
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
          const sortedByZtoA = state.productList.sort((a, b) => a.title.localeCompare(b.title))
          return {...state, productList: [...sortedByZtoA.reverse()]}
        }
        case 5: {
          const sortedByCategory = state.copyOfProductList.filter(el => el.category === action.category)
          return {...state, productList: [...sortedByCategory]}
        }
        default: {
          return {...state};
        }
      }
    }
    default: {
      return {...state}
    }
  }
};