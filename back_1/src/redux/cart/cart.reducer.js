import CartActionTypes from './cart.types'

const INITIAL_STATE= { //inicjalizacja
    hidden:true,
    cartItems: []
};

const cartReducer=(state=INITIAL_STATE, action) => {
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems: [...state.cartItems, action.payload] //stara lista +nowy element
            }
        default:
            return state;
    }
}

export default cartReducer;