import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/crown.svg";
import { auth } from "../../firebase/Firebase.util";
import { connect } from "react-redux";
import Cart from "../Cart/Cart";
import CartDropDown from "../Cartlist/CartDropDown";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../Redux/User/userSelection";
import { selectCartHidden } from "../Redux/Cart/cartSelector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionsLink,
  OptionStyle,
} from "./HeaderStyle";
import { signOutStart } from "../Redux/User/userAction";

const Header = (props) => {
  const { currentUser, hidden, signOutStart } = props;
  console.log("Header");

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      {currentUser ? (
        <div className="profile">
          {currentUser.photoURL ? (
            <img
              src={currentUser.photoURL}
              alt="ProfilePic"
              width="30"
              height="30"
            />
          ) : null}
          <h4 className="text">{`Welcome! ${currentUser.displayName}`}</h4>
        </div>
      ) : null}

      <OptionsContainer>
        <OptionsLink to="/shop">SHOP</OptionsLink>

        <OptionsLink to="/shop">CONTACT</OptionsLink>

        {currentUser ? (
          <OptionStyle onClick={signOutStart}> SIGN OUT </OptionStyle>
        ) : (
          <OptionsLink to="/signin">SIGNIN</OptionsLink>
        )}
        <Cart />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, { signOutStart })(Header);
