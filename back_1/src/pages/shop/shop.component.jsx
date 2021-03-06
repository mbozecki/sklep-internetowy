import React from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../components/preview-collection/preview-collection.component'
import BanerUp from '../shop/Web1.png';
import SearchSection from '../../components/shop-searchsection/shop-searchsection.component'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections}=this.state;
        return(
            
            <div className='shop-page'>
                <div class="sm:mx-16 my-8 flex ">
                <img alt="baner" style={{height:'auto'}} src={BanerUp} class="shadow-xl"/>
                </div>

                <div class="flex sm:flex-row flex-col sm:px-16 m-auto ">
                    <SearchSection/>
                    <div class="sm:w-4/5 mt-4 sm:mt-0 sm:px-0 px-4">
                    <div class="grid-container font-light ">
                    {
                collections.map(({id, ...otherCollectionProps} )=>(
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
                }
                </div></div>
                </div>
                
            </div>
        )
    }
}

export default ShopPage;