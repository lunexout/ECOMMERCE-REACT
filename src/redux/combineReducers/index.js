import {combineReducers} from'redux'

import {productsReducer} from './../reducers/fetchProducts'


export const allReducers = combineReducers({
    product: productsReducer
})