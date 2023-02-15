import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderReviewList extends Component {
  render() {
    const { reviewList } = this.props;
    const mappedReview = reviewList.map((review) => (
      // O e-mail da avaliação deve conter o data-testid="review-card-email";
      // A nota da avaliação deve conter o data-testid="review-card-rating";
      // O comentario da avaliação deve conter o data-testid="review-card-evaluation".
      <div
        className="rendered-review-card"
      >
        <h3
          data-testid="review-card-email"
        >
          Email : { review.email}
        </h3>
        <h4
          data-testid="review-card-rating"
        >
          Nota : { review.rating }
        </h4>
        { review.text ? <p
          data-testid="review-card-evaluation"
        >
          Avaliação : { review.text || ''}
        </p> : '' }
      </div>
    ));
    return (

    );
  }
}

export default RenderReviewList;
