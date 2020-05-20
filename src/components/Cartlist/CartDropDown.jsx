import React from 'react'
import './CartDropDown.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';



const CartDropDown = ({cartItems,hidden}) => {
    console.log(hidden);
    return (
        <div className='cart-dropdown'>
       
        <div className='cart-items' >
           {cartItems.map(cur => (<CartItem  key={cur.id} item={cur}/>) )}
           </div>
             <CustomButton>CHECKOUT</CustomButton>
            
          </div>   
     
    )
}

const mapStateToProps = state => ({
   cartItems:state.cart.cartitem,
   
})

export default connect(mapStateToProps)(CartDropDown)
