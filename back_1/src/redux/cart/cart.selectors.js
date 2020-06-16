import {createSelector} from 'reselect'

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems

);

export const selectCartHidden = createSelector (
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector( //do dropdownu koszyka
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity,cartItem)=>accumulatedQuantity + cartItem.quantity,0)
);

export const selectCartTotal = createSelector( // do strony koszyka, obliczania wartosci
    [selectCartItems],
    cartItems =>
    cartItems.reduce(
        (accumulatedQuantity,cartItem)=>accumulatedQuantity + cartItem.quantity * cartItem.price,0)
)