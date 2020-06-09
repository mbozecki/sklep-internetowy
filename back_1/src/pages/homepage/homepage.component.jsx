import React from 'react'

const HomePage = () => (
    <div>
        <section id="landing">
        <nav class="bg-transparent sm:px-10 sm:pt-4 flex-wrap pt-10">

<div class="-mb-px flex-col sm:flex-row flex justify-between text-center">
    <h1 id="logo" class="text-2xl text-bold sm:text-left sm:flex-1 text-center"> LOGO.</h1>
    <a class="no-underline text-teal-dark border-b-2 border-teal-dark uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        href="/">
        Strona główna
    </a>
    <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        href="/promo">
        Promocje
    </a>
    <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        href="/">
        O sklepie
    </a>
    <a class="no-underline text-grey-dark border-b-2 border-transparent uppercase tracking-wide font-semibold text-xs sm:py-3 sm:mr-16"
        href="/login">
        Zaloguj się
    </a>
</div>

</nav>
<div class="sm:flex">
        <div class="flex-1 bg-transparent "></div>
        <div class="flex-1 mt-16 sm:mt-56 sm:ml-24 sm:pr-32 text-center sm:text-left">
            <h1 class="text-2xl sm:text-4xl font-bold tracking-wide">Najwyższa jakość w najniższych cenach</h1>
            <p class="text-sm pt-8 sm:pr-32">LOGO. online store to idealne miejsce dla osoby poszukującej sklepu z ubraniami najwyższej klasy, w konkurencyjnych cenach. <br></br> Zobacz nasze najnowsze kolekcje.  </p>
            <a href="sklep.html"><button id="btn-zapisz" class="mt-16 pt-2 pb-2 px-12 text-center ">Sprawdź <i class="fas fa-chevron-down ml-2"></i></button></a>
                <div class="w-1/1 px-6 sm:px-16 py-4 rounded-sm text-xs sm:tracking-widest footer ">
                    <a href="/">Facebook</a> <i class="fas fa-circle"></i> <a href="/">Instagram</a> <i class="fas fa-circle text-xs"></i> <a href="/">Youtube</a>
                </div>

        </div>
        </div>
</section>
    </div>
)

export default HomePage;