import React from 'react'
import './collectionitem.scss'

const CollectionItem = ({id,name,price,imageUrl}) => {

console.log(imageUrl);

 const style ={
     backgroundImage:`url(${imageUrl})`
 }   
    return (
        <div className='collection-item'>
             <div style={style} className='image'/>
             <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
             </div>
        </div>

    )
}

export default CollectionItem
