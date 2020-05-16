import React from 'react';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Shop from './pages/ShopPage/Shop';

function App() {

  const pageNotfound = () => {
    return (
    
      <div style={{textDecoration:"strong", fontFamily: 'Pangolin'}}> <h1 >404- Page Not found </h1> </div>
    )
  }
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/shop" component={Shop}/>
          <Route path = "/" component={pageNotfound}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
