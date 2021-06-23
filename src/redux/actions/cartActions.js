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
export const addCart = (product) => {
    return {
        type: 'ADD_CART',
        product
    }
}
export const deleteFromCart = (product) => {
    return {
        type: 'REMOVE_CART',
        product
    }
}