import React from 'react'
import './Checkout.scss'
import {connect} from 'react-redux'; 
import CheckoutItem from '../../components/Checkout-item/CheckoutItem';
import Stripe from '../../components/Stripe/Stripe';

export const Checkout = ({item,price}) => {
    return (
        <div className='checkout-page'>
         <div className='checkout-border'>
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
       </div>
       <div className='total'>
         <span>Total:${price}</span>
       </div> 
       <h4 style={{textAlign:'center',color:'green'}}>TEST MODE ---- Use CARD:424242424242 EXP:01/22 CVV:123</h4>
        <Stripe price={price}/>
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
