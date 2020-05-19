import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shop from './pages/ShopPage/Shop';
import Header from './components/Header/Header'
import SignInOut from './pages/SignIn-SignOut/SignIn-out';
import { auth,createUserProfileDocument } from './firebase/Firebase.util';
import {connect} from 'react-redux';
import {setCurrentUser} from './components/Redux/User/userAction'

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
    
      // this.setState({currentUser:user})
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
          <Route exact path="/signin" component={SignInOut}/>
          <Route exact path="/shop" component={Shop}/>
          <Route path = "/" component={this.pageNotfound}/>
        </Switch>
      </Router>
    </div>
  );
  }
}

const mapDispathToProps = (dispatch) => ({
  setCurrentUser:(user)=>dispatch(setCurrentUser(user))

})

export default connect(null,mapDispathToProps)(App);
