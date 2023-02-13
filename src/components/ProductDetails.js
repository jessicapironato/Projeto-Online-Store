import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Categories from './Categories';

class ProductDetails extends Component {
  state = {
    name: '',
    image: '',
    price: '',
  };

  getProduct = async (id) => {
    const API_GET_PRODUCT = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const dataProductID = await fetch(URL_API);
    const data = await dataProductID.json();
    this.setState({
     
    });
  };

  render() {
    const { name, image, price } = this.state;
    const { match: { params: { id } } } = this.props;
    console.log(id);
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
        <Categories />
        <button data-testid="shopping-cart-button">

          Clique aqui
          {' '}

        </button>

      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
export default ProductDetails;
