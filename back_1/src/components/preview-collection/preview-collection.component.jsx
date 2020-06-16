import React from 'react';
import './preview-collection.styles.scss'
import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => (
    <div className='preview-collection' >
        <h1>{title.toUpperCase()}</h1>
        <div className='preview' >
        
            {
                items.filter((item,index)=> index <5)
                .map(item=> (
                    <CollectionItem key={item.id} item={item}/>
                ))}
                </div>
            </div>

)
export default PreviewCollection; 