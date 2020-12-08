import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Card from './components/Cart/Card';
import Default from './components/Default';
import Modal from './components/Modal';
 
class App extends Component {
  render(){
    return (
      <>
        <NavBar />
          <Switch>
              <Route exact path="/" component={ProductList} />
              <Route path="/details" component={Details} />
              <Route path="/Card" component={Card} />
              <Route component={Default} />
          </Switch>
          <Modal />
      </>
    );

  }
}


export default App;
