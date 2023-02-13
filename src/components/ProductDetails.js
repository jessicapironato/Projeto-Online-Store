import React, { Component } from 'react';

class ProductDetails extends Component {
  state = {
    name: '',
    image: '',
    price: '',
  };

  render() {
    const { name, image, price } = this.state;
    return (

      <>
        <p data-testid="product-detail-name">
          { name }
        </p>

        <img
          data-testid="product-detail-image"
          src={ image }
          alt={ name }
        />
        <p data-testid="product-detail-price">
          { price }

        </p>

      </>
    );
  }
}

export default ProductDetails;
