export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem= cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
        );
    if (existingCartItem) { //obsluga tych samych przedmiotow w koszyku
        return cartItems.map(cartItem=> 
            cartItem.id===cartItemToAdd.id
            ? {...cartItem, quantity: cartItem.quantity+1}
            : cartItem
            )
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}]
};