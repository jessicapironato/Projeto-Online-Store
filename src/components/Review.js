import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Review extends Component {
  state = {
    email: '',
    reviewText: '',
    rating: '',
    toValidation: false,
    valid: '',
  };

  handleChange = (event) => {
    const { target: { id, value } } = event;
    this.setState({
      [id]: value,
    });
  };

  handleSubmit = () => {
    this.setState({
      toValidation: true,
    });
    const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
    const { productID } = this.props;
    const { email, rating, reviewText } = this.state;
    const validateEmail = validEmail.test(email);
    const validateForm = [validateEmail, rating];
    const returnSome = validateForm.some((input) => input === '');
    this.setState({
      valid: !returnSome,
      reviewObj: {
        productID,
        email,
        rating,
        reviewText,
      },
    });
  };

  render() {
    const ratingArray = ['1', '2', '3', '4', '5'];
    const { valid, toValidation } = this.state;
    const errorMsg = toValidation ? <p data-testid="error-msg">Campos inválidos</p> : '';
    return (
      <>
        <form>

          <label htmlFor="email">
            Email
            <input
              type="text"
              id="email"
              data-testid="product-detail-email"
              onChange={ this.handleChange }
            />
          </label>

          <div
            className="rating-star"
          >
            Classifique
            {ratingArray.map((element, index) => (
              <button
                type="button"
                id="rating"
                value={ element }
                key={ index }
                data-testid={ `${element}-rating` }
                onClick={ this.handleChange }
              >
                {element}
              </button>))}
          </div>

          <label htmlFor="reviewText">
            Campo de Texto para Aval
            <input
              type="text"
              id="reviewText"
              data-testid="product-detail-evaluation"
              onChange={ this.handleChange }
            />
          </label>

          <button
            type="button"
            data-testid="submit-review-btn"
            onClick={ this.handleSubmit }
          >
            Enviar Avaliação
          </button>
        </form>
        <div
          className="review-card"
        >
          {valid ? <span>Inputs</span> : errorMsg }
        </div>
      </>
    );
  }
}

Review.propTypes = {
  productID: PropTypes.string.isRequired,
};

export default Review;
