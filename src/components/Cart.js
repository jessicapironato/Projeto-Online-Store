import React, { Component } from 'react';
import { getProductById } from '../services/api';

class Cart extends Component {
  constructor() {
    super();
    this.state = {
      cartList: [],
    };
  }

  componentDidMount() {
    this.fetchProductCart();
  }

  fetchProductCart = async () => {
    const getCart = JSON.parse(localStorage.getItem('cart')) || [];
    const arrayOfID = getCart.map((product) => product.id);
    const fetchCartList = arrayOfID.map((each) => getProductById(each));
    const cartPromisses = await Promise.all(fetchCartList);
    this.setState({
      cartList: cartPromisses,
    });
  };

  render() {
    const { cartList } = this.state;
    const renderCart = (cartList.map((product) => (
      <>
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
          Quantidade
        </p>
      </>
    )));
    return (
      <div>
        { renderCart }
      </div>
    );
  }
}

export default Cart;
