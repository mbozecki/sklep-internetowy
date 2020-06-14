import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => (
    <div className='Navbar'>
        <nav class="bg-transparent sm:px-10 sm:pt-4 flex-wrap pt-10">

<div class="-mb-px flex-col sm:flex-row flex justify-between text-center">
    <h1 id="logo" class="text-2xl text-bold sm:text-left sm:flex-1 text-center"> LOGO.</h1>
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
    <Link class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        to="/login">
        Zaloguj się
    </Link>
</div>

</nav>
    </div>
);

export default Navbar;