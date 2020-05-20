import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../images/cartIcon.svg';
import './Cart.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../Redux/Cart/cartAction'

const Cart = ({toggleCartHidden}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
          <ShoppingIcon />
          <span className='item-count'>0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())

})

export default connect(null,mapDispatchToProps)(Cart);
