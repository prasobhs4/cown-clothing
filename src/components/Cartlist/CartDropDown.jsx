import React from 'react'
import './CartDropDown.scss';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../Redux/Cart/cartAction'



const CartDropDown = ({cartItems,history,dispatch}) => {
 
    return (
        <div className='cart-dropdown'>
       {cartItems.length ?
           <div className='cart-items' >
           {cartItems.map(cur => (<CartItem  key={cur.id} item={cur}/>) )}
           </div> :
           <span className='empty-cart'>The cart is empty </span>}
             <CustomButton onClick={()=>
                {
                dispatch(toggleCartHidden())
                history.push('/checkout')
                }
            }>CHECKOUT</CustomButton>
            
          </div>   
     
    )
}

const mapStateToProps = state => ({
   cartItems:state.cart.cartitem,
   
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
