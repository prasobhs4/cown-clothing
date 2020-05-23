import React from 'react'
import './CheckoutItem.scss';
import {deleteitem, additem,remove1Item} from '../Redux/Cart/cartAction';
import {connect} from 'react-redux'
 
export const CheckoutItem = ({item,deleteitem,additem,remove1Item}) => {

   const {name,quantity,price,imageUrl} = item
    return (
        <div className='checkout-item'>
          <div className='image-container'>
            <img alt='item' src={imageUrl}/>
          </div>
          <span className='name'>{name}</span>
          <span className='quantity'>
          <div className='arrow' onClick={()=>remove1Item(item)}>&#10094;</div>
          <span className='value'>{quantity}</span>
          <div className='arrow' onClick={()=>additem(item)}>&#10095;</div>
          </span>
          <span className='price'>{price}</span>
          <div className='remove-button' onClick={()=> deleteitem(item)}>&#10005;</div>
        </div>

    )
}

const mapDispatchToProps = dispatch =>({
  deleteitem:item => dispatch(deleteitem(item)),
  additem:item=>dispatch(additem(item)),
  remove1Item:item=>dispatch(remove1Item(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem);