import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Shop from "./pages/ShopPage/Shop";
import Header from "./components/Header/Header";
import SignInOut from "./pages/SignIn-SignOut/SignIn-out";
import { auth, createUserProfileDocument } from "./firebase/Firebase.util";
import { connect } from "react-redux";
import { setCurrentUser } from "./components/Redux/User/userAction";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./components/Redux/User/userSelection";
import { selectCollectionsPreview } from "./components/Redux/Shop/shopSelector";
import Checkout from "./pages/Checkout/Checkout";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  pageNotfound = () => {
    return (
      <div style={{ textDecoration: "strong", fontFamily: "Pangolin" }}>
        {" "}
        <h1>404- Page Not found </h1>{" "}
      </div>
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              path="/signin"
              render={() =>
                this.props.currentUser ? <Redirect to="/" /> : <SignInOut />
              }
            />
            <Route path="/shop" component={Shop} />
            <Route exact path="/checkout" component={Checkout} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  shop: selectCollectionsPreview,
});

const mapDispathToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispathToProps)(App);
