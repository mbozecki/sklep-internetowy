import React from 'react'
import './checkout-item.styles.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import {connect} from 'react-redux'
import {clearItemFromCart} from '../../redux/cart/cart.actions'

const CheckoutItem = ({cartItem, clearItem}) => {
    const {name,imageUrl,price,quantity} = cartItem;
    return(
    <div className='checkout-item'>
        <div id="xprodukt" class="flex my-8 sm:my-4">
                <div class="sm:w-1/5"> <img src={imageUrl} alt="image" class="sm:h-48 sm:w-40 hidden sm:block"/></div>
                <div class="w-2/5 sm:w-1/5 text-left font-bold text-sm  sm:m-auto"> {name}</div>

                <div class="w-1/5 m-auto">L</div>

                <div class="w-1/5 m-auto">{quantity}</div>

                <div class="w-1/5 m-auto">{price}zł
                    <a class=" ml-8 text-sm  cursor-pointer" onClick={() => clearItem(cartItem)}><FontAwesomeIcon icon={faTimes} /></a>
                </div>

            </div>
    </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem : item => dispatch(clearItemFromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);