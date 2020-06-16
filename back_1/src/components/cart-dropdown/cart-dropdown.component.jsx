import React from 'react'
import './cart-dropdown.styles.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {withRouter} from 'react-router-dom'
import {toggleCartHidden} from '../../redux/cart/cart.actions'

import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors'

const CartDropdown= ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            
        {
            cartItems.length ? 
            cartItems.map(cartItem =>(
            <CartItem key={cartItem.id} item={cartItem} />
            ))
            :
            <span className='empty-message'>Twój koszyk jest pusty!</span>
        }
        </div>    
            <button onClick={() =>{

            history.push('/checkout');
            dispatch(toggleCartHidden())

        }}>Przejdź do koszyka</button>
        
    </div>
)

const mapStateToProps=createStructuredSelector({ // dzięki temu mozliwe jest 'pobranie' danych
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));