import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Switch>
      <Route exact path="/shoppingCart" component={ ShoppingCart } />
      <Route path="/" component={ Home } />

    </Switch>
  );
}

export default App;
