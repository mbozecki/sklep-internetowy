import CartActionTypes from './cart.types'

export const toggleCartHidden = () => ({ //chowanie koszyka po kliknieciu
    type: CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItem = item => ({
    type:CartActionTypes.ADD_ITEM, // informuję co robię
    payload: item //co dodaję
})

export const clearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})