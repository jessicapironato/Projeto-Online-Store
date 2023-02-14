import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cart extends Component {
  render() {
    const { location } = this.props;
    const { state } = location;
    const cartList = [...state];
    const renderCart = (cartList.map((product) => (
      <div
        key={ product.id }
      >
        <p
          data-testid="shopping-cart-product-name"
        >
          { product.title }
        </p>
        <img
          src={ product.thumbnail }
          alt={ product.title }
        />
        <p>{ `R$ ${product.price}` }</p>
        <p data-testid="shopping-cart-product-quantity">
          1
        </p>
      </div>
    )));
    return (
      <div>
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        { renderCart }
      </div>
    );
  }
}

Cart.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Cart;
