import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Categories from './Categories';

class ProductDetails extends Component {
  state = {
    name: '',
    image: '',
    price: '',
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const prodID = id.split(' ');
    this.getProduct(prodID[1]);
  }

  getProduct = (id) => {
    this.setState(
      { name: '',
        image: '',
        price: '',
      },
      async () => {
        const API_GET_PRODUCT = await fetch(`https://api.mercadolibre.com/items/${id}`);
        const dataProductID = await API_GET_PRODUCT.json();
        const { title, price, pictures } = dataProductID;
        // chamar image com propriedade pictures (array de objetos)
        console.log(pictures[0].url);
        this.setState({
          name: title,
          image: pictures[0].url,
          price,
        });
      },
    );
  };

  render() {
    const { name, image, price } = this.state;
    // const qualquer = [...image];
    // const { url } = qualquer[0];
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
  }),
}.isRequired;
export default ProductDetails;
