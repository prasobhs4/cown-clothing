import React from 'react'
import './CartDropDown.scss';
import CustomButton from '../custom-button/custom-button.component';



const CartDropDown = props => {
    return (
        <div className='cart-dropdown'>
        <div className='cart-items' ></div>
             <CustomButton>CHECKOUT</CustomButton>
          </div>   
     
    )
}

export default CartDropDown
