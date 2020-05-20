import React from 'react'
import CollectionItem from '../CollectionItem/CollectionItem';
import './CollectionPreview.scss';

const CollectionPreview = ({title,items}) => {
    console.log(items);
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
               {
                   items
                   .filter((cur,i) => i < 4)
                  .map(cur => {
                    return (<CollectionItem key={cur.id} item={cur} />)
                  })
                }
            </div>
        </div>
    )
}

export default CollectionPreview
