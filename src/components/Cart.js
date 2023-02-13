import React, { Component } from 'react';
import ProductDetails from './ProductDetails';

class Cart extends Component {
  render() {
    return (
      <>

        <div
          data-testid="shopping-cart-empty-message"
        >
          Seu carrinho está vazio
        </div>

        <ProductDetails />
      </>
    );
  }
}

export default Cart;
