import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import {BrowserRouter as Router, Route, Switch , Redirect} from 'react-router-dom';
import Shop from './pages/ShopPage/Shop';
import Header from './components/Header/Header'
import SignInOut from './pages/SignIn-SignOut/SignIn-out';
import { auth,createUserProfileDocument } from './firebase/Firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './components/Redux/User/userAction'
import Checkout from './pages/Checkout/Checkout';

class App extends Component{
  

unsubscribeFromAuth = null; 

 componentDidMount(){
 const {setCurrentUser} = this.props;

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
       setCurrentUser({
         id:snapShot.id,
         ...snapShot.data(),
       })
      })

    }
    else{
      setCurrentUser(userAuth)
    }
    
   })
 } 
componentWillUnmount(){
  this.unsubscribeFromAuth();
}
 pageNotfound = () => {
    return (
    
      <div style={{textDecoration:"strong", fontFamily: 'Pangolin'}}> <h1 >404- Page Not found </h1> </div>
    )
  }

  render(){
 
  return (
    <div className="App">
      <Router>
       <Header/>
        <Switch>
        
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/signin" render={()=> this.props.currentUser.currentUser ? (<Redirect to='/' />) : (<SignInOut/>)}/>
          <Route path="/shop" component={Shop}/>
          <Route exact path="/checkout" component={Checkout}/>
        </Switch>
      </Router>
    </div>
  );
  }
}

const mapStateToProps = ({user}) => ({
currentUser:user})

const mapDispathToProps = (dispatch) => ({
  setCurrentUser:(user)=>dispatch(setCurrentUser(user))

})

export default connect(mapStateToProps,mapDispathToProps)(App);
