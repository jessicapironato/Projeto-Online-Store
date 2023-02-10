import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ Cart } />
      </Switch>
    );
  }
}

export default App;
