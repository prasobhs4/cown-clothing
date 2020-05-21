import React from 'react'
import './Checkout.scss'
import {connect} from 'react-redux'; 
import CheckoutItem from '../../components/Checkout-item/CheckoutItem';

export const Checkout = ({item,price}) => {
    return (
        <div className='checkout-page'>
         <div className='checkout-header'>
           <div className='header-block'>
            <span>Product</span>
            </div>
            <div className='header-block'>
            <span>Description</span>
            </div> 
            <div className='header-block'>
            <span>Quantity</span>
            </div> 
            
            <div className='header-block'>
            <span>Price</span>
            </div> 
            <div className='header-block'>
            <span>Remove</span>
            </div>  
           
         </div>  
         <div>
         {item.map(cur => <CheckoutItem key={cur.id} item={cur}/>)}
       </div>
       <div className='total'>
         <span>Total:${price}</span>
       </div> 
        </div>
    )
}

const mapStateToProps = ({cart:{cartitem}}) => (
    {
        item:cartitem,
        price:cartitem.reduce((acc,cur)=> { return (acc + cur.quantity * cur.price) },0)
    }
)


export default connect(mapStateToProps)(Checkout);
