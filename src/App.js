import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';

class App extends React.Component {
  render() {
    return (
      <Switch>

        <Route exact path="/productDetails/:id" component={ ProductDetails } />
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    );
  }
}

export default App;
