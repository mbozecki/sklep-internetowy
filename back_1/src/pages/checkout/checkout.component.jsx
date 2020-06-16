import React from 'react' 
import './checkout.styles.scss'

import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selectors'

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
            <div id="produkt" class="flex my-8 sm:my-4">
                <div class="sm:w-1/5"> <img src="a1.jpg" class="sm:h-48 sm:w-40 hidden sm:block"/></div>
                <div class="w-2/5 sm:w-1/5 text-left font-bold text-sm  sm:m-auto"> Bawełniany Tshirt z czerwonym logo premium</div>

                <div class="w-1/5 m-auto">L</div>

                <div class="w-1/5 m-auto">1</div>

                <div class="w-1/5 m-auto">149.99
                    <i class="fas fa-times ml-8 text-sm "></i>
                </div>

            </div>
            <div class="flex my-8 sm:my-4">
                <div class="sm:w-1/5"> <img src="basicimg.jpg" class="h-48 w-40 hidden sm:block"/></div>
                <div class="w-2/5 sm:w-1/5 text-left font-bold text-sm  sm:m-auto"> Czarna katana kurtka</div>

                <div class="w-1/5 m-auto">L</div>

                <div class="w-1/5 m-auto">1</div>

                <div class="w-1/5 m-auto">149.99
                    <i class="fas fa-times ml-8 text-sm"></i></div>

            </div>
        </div>


        <div id="sekcja3" class="w-1/1 sm:w-1/4 bg-green-800 text-white px-16 mt-12 sm:mt-0 sticky">
            <a href="#" class="inline-block text-lg pt-10 "> Podsumowanie</a>
            <a href="#" class="inline-block text-lg pl-6"><i class="fas fa-shopping-basket"></i> </a>

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
                <hr class="hrwhite  mt-16 sm:mt-48 "/>
                <div class="cenatotal  text-lg tracking-widest  text-center ">
                    Łącznie <div class="text-lg inline ">
                        {total+12} zł
                    </div>
                </div>
                <hr class="hrwhite"/>
                <button id="btn-koszyk" class="text-center  pt-0 sm:pt-16 p-16 my-12">
                    Przejdź do płatności
                </button><br/>
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