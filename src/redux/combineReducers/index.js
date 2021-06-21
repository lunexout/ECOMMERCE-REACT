import {combineReducers} from'redux'

import {cartReducer} from './../reducers/cartReducer'
import {fetchReducer} from './../reducers/fetchProducts'


export const allReducers = combineReducers({
    cart: cartReducer,
    products: fetchReducer
})