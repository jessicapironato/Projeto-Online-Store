import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
      </>

    );
  }
}

export default Home;
