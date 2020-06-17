import React from 'react' 
import './checkout.styles.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripePay from '../../components/stripe-pay/stripe-pay.component'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
            <div class="flex flex-wrap ">
        <div id="sekcja1" class="w-1/1 sm:w-3/4 sm:h-screen px-4 sm:px-16">
            <h2 class="font-bold mt-16 pb-4 text-2xl text-center sm:text-left">Twój koszyk </h2>
            <div class="flex my-8 sm:my-4">
                <div class="w-2/5">Produkt</div>

                <div class="w-1/5 ">Rozmiar</div>

                <div class="w-1/5 ">Ilość</div>

                <div class="w-1/5 ">Cena</div>

            </div>
            <hr class=""/>
            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
            ))}
        </div>


        <div id="sekcja3" class="w-1/1 sm:w-1/4 bg-green-800 text-white px-16 mt-12 sm:mt-0 sticky">
            <a href="#" class="inline-block text-lg pt-10 "> Podsumowanie</a>
            <a href="#" class="inline-block text-lg pl-6"><FontAwesomeIcon icon={faShoppingBasket}/></a>

            <div class=" text-sm text-gray-500 tracking-widest text-center mt-24">

                Produkty - 
                <div class="text-sm inline text-white">
                    {total}zł
                    
                </div>
            </div>
            <div class=" text-sm text-gray-500 tracking-widest text-center mt-4">
                Przesyłka -
                <div class="text-sm inline text-white">
                    12 zł
                </div>
            </div>
            <div>
                <hr class="hrwhite mt-16 sm:mt-48 "/>
                <div class="cenatotal  text-lg tracking-widest  text-center ">
                    Łącznie <div class="text-lg inline ">
                        {total+12} zł
                    </div>
                </div>
                <hr class="hrwhite" />
                <div class="text-center mt-16">
                    <StripePay price={total+12}/>
                </div>
                
                
            </div>

        </div>

    </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);