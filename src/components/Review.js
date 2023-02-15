import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderReviewList from './RenderReviewList';

class Review extends Component {
  state = {
    email: '',
    text: '',
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

  handleStorage = (validSubmit) => {
    const { productID } = this.props;
    const { email, rating, text } = this.state;
    if (validSubmit) {
      const reviewObj = {
        email, rating, text,
      };
      const reviewStored = JSON.parse(localStorage.getItem(`${productID}`)) || [];
      const newReviews = [...reviewStored, reviewObj];
      localStorage.setItem(`${productID}`, JSON.stringify(newReviews));
    }
  };

  handleSubmit = () => {
    this.setState({
      toValidation: true,
    });
    const validEmail = /^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$/;
    const { email, rating } = this.state;
    const boolRating = rating !== '';
    const validateEmail = validEmail.test(email);
    const validateForm = [validateEmail, boolRating];
    const returnSome = validateForm.some((input) => input === false);
    this.setState({
      valid: !returnSome,
    }, this.handleStorage(!returnSome));
  };

  render() {
    const ratingArray = ['1', '2', '3', '4', '5'];
    const { productID } = this.props;
    const { valid, toValidation } = this.state;
    const localStorageReview = JSON.parse(localStorage.getItem(`${productID}`)) || '';
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
              id="text"
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
          {valid ? '' : errorMsg}
          {localStorageReview ? <RenderReviewList productID={ productID } /> : errorMsg }
        </div>
      </>
    );
  }
}

Review.propTypes = {
  productID: PropTypes.string.isRequired,
};

export default Review;
