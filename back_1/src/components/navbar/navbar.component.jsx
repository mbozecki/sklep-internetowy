import React from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Navbar = ({currentUser, hidden}) => ( //navbar zajmuje sie tez trzymaniem stanu uzykownika, tzn czy jest zalogowany
    <div className='Navbar'>
        <nav class="bg-transparent sm:px-10 sm:pt-4 flex-wrap pt-10">

<div class="-mb-px flex-col sm:flex-row flex justify-between text-center">
    <h1 id="logo" class="text-2xl text-bold sm:text-left sm:flex-1 text-center  cursor-pointer "> <a href="/">LOGO.</a></h1>
    <Link class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        to="/">
        Strona główna
    </Link>
    <Link class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        to="/shop">
        Sklep
    </Link>
    <Link class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        to="/about">
        O nas
    </Link>
    {
        currentUser ?
        <div onClick={()=> auth.signOut()} class="cursor-pointer no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16" >Wyloguj się</div>
        :
        <Link class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        to="/login">
        Zaloguj się
    </Link>
    }
    <CartIcon/>
</div>
{
    hidden ? null : <CartDropdown/>
}
    
</nav>
    </div>
);

const mapStateToProps= ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
    //currentUser: state.user.currentUser
})
export default connect(mapStateToProps) (Navbar);