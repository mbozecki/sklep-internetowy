import React from 'react';

import './collection-item.styles.scss';
import '../brownbutton/brownbutton.component'
import BrownButton from '../brownbutton/brownbutton.component';

import {connect} from 'react-redux' //do koszyka
import {addItem} from '../../redux/cart/cart.actions'

const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} =  item; //destrukturyzacja z item na wartosci, potemmoze tu byc id
    return (
    <div className="collection-item" class="item shadow-sm border-gray-300  border-2 mt-4" >
               <div class="absolute justify-center mt-64 ml-24 ">
        <BrownButton onClick={()=>addItem(item)} >Dodaj</BrownButton>
        </div>
        <img
            className='image'
            class="w-auto"
            src={`${imageUrl}`}
        />
        
        <div className="collection-footer" class="flex m-2">
            <div className='name' class="w-1/2 text-left ">{name} </div>
            
            <div className='price' class="w-1/2 text-gray-700 text-right">{price}</div>
            
        </div>
 
        
    </div>
    ); 
    }

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(CollectionItem);
