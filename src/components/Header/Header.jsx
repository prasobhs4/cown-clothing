import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../images/crown.svg';
import { auth } from '../../firebase/Firebase.util';
import {connect} from 'react-redux';
import Cart from '../Cart/Cart';
import CartDropDown from '../Cartlist/CartDropDown';

const Header = (props) => {
  console.log(props)
  const {currentUser,hidden} = props;
  
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>

              <Logo className='logo' />
                
            </Link>
            
            {currentUser ?
            (<h4>{`Welcome ! ${currentUser.displayName}`}</h4>):null}

            <div className='options' >

            <Link to="/shop" className='option'>

              SHOP
                
            </Link>

            <Link to="/shop" className='option'>

             CONTACT
                
            </Link>
            
            {currentUser ?
            (<div className='option' 
            onClick={() => auth.signOut()}> SIGN OUT  </div>)
            :
            (<Link to="/signin" className='option' >

            SIGNIN
               
           </Link>)}
           <Cart />
            </div>
            {hidden ?
            null : <CartDropDown />}
        </div>
    )
}

const mapStateToProps = ({cart,user}) => {
  return (
  {currentUser:user.currentUser,
  hidden:cart.hidden}) }


export default connect(mapStateToProps)(Header)
