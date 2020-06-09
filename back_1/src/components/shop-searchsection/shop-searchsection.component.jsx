import React from 'react'

const SearchSection = () => (
    <div className='SearchSection'>
        <div class="sm:w-1/5 mr-4 text-xl text-center  border-gray-300  border-2 shadow-sm">
            <form class="m-auto w-3/4 max-w-sm ">
                <div class="flex items-center border-b border-b-2 border-red-500 py-2">
                      <input class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2  focus:outline-none " type="text" placeholder="Czego szukasz?" />
                </div>
            </form>
            
        </div>
    </div>
);

export default SearchSection;