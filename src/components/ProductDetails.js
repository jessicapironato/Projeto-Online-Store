import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Categories from './Categories';
import Review from './Review';

class ProductDetails extends Component {
  state = {
    name: '',
    image: '',
    price: '',
    prodObj: {},
    savedToCart: [],
  };

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const prodID = id.split(' ');
    this.getProduct(prodID[1]);
  }

  saveToCart = () => {
    const { prodObj } = this.state;
    this.setState({
      savedToCart: [prodObj],
    });
  };

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
          prodObj: dataProductID,
        });
      },
    );
  };

  render() {
    const { name, image, price, savedToCart } = this.state;
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

        <label htmlFor="btnAdd">
          <button
            id="btnAdd"
            data-testid="product-detail-add-to-cart"
            onClick={ this.saveToCart }
          >
            Adicionar ao Carrinho
          </button>
        </label>
        <label htmlFor="btnCart">
          <Link
            to={ { pathname: '/cart', state: savedToCart } }
          >
            <button
              id="btnCart"
              data-testid="shopping-cart-button"
            >
              Ir ao Carrinho
            </button>

          </Link>
        </label>
        <Review />
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
