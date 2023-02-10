import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import SearchContainer from './SearchContainer';

class Home extends Component {
  render() {
    return (
      <>

        <div>
          <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
        </div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchContainer />
        <Categories />
      </>
    );
  }
}

export default Home;
