import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

const PreviewCollection = ({title, items}) => (
    <div className='preview-collection'>
        <h1>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item,index)=> index <4)
                .map(({id, ...otheritemProps})=> (
                    <CollectionItem key={id} {...otheritemProps}/>
                ))}
        </div>
    </div>

)
export default PreviewCollection; 