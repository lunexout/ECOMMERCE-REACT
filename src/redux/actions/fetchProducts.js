export const addQuantity = (product) => {
    return {
        type: 'ADD_QUANTITY',
        product
    }
}
export const deleteQuantity = (product) => {
    return {
        type: 'DELETE_QUANTITY',
        product
    }
}
export const deleteFromCart = (product) => {
    return {
        type: 'DELETE_FROM_CART',
        product
    }
}