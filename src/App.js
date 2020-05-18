import React, { Component } from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shop from './pages/ShopPage/Shop';
import Header from './components/Header/Header'
import SignInOut from './pages/SignIn-SignOut/SignIn-out';
import { auth,createUserProfileDocument } from './firebase/Firebase.util';

class App extends Component{
  constructor(){
    super()
    this.state={
      currentUser:null
    }
  }

 componentDidMount(){
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
    if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot => {
        this.setState(
          {
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          },
          ()=>{
            console.log(this.state)
          }
        )
      })

    }
    else{
      this.setState({currentUser:userAuth})
    }
    
      // this.setState({currentUser:user})
   })
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
       <Header currentUser={this.state.currentUser}/>
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

export default App;
