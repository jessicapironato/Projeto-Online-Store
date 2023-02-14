import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import SearchContainer from './SearchContainer';

class Home extends Component {
  state = {
    productsToCart: [],
  };

  handleCartList = (product) => {
    const { productsToCart } = this.state;
    this.setState({
      productsToCart: [...productsToCart, product],
    });
  };

  render() {
    const { productsToCart } = this.state;
    return (
      <>

        <div>
          <Link
            data-testid="shopping-cart-button"
            to={ { pathname: '/cart', state: productsToCart } }
          >
            Carrinho
          </Link>
        </div>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchContainer handleCartList={ this.handleCartList } />
        <Categories handleCartList={ this.handleCartList } />
      </>
    );
  }
}

export default Home;
