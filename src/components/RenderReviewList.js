import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RenderReviewList extends Component {
  render() {
    const { productID } = this.props;
    const reviewList = JSON.parse(localStorage.getItem(`${productID}`));
    const mappedReview = reviewList.map((review, index) => (
      <div
        className="rendered-review-card"
        key={ index + review.email + review.rating }
      >
        <h3
          data-testid="review-card-email"
        >
          { review.email}
        </h3>
        <h4
          data-testid="review-card-rating"
        >
          { review.rating }
        </h4>
        { review.text !== ''
          ? (
            <p
              data-testid="review-card-evaluation"
            >
              { review.text }
            </p>) : '' }
      </div>
    ));
    return (
      <section>
        {mappedReview}
      </section>
    );
  }
}

RenderReviewList.propTypes = {
  productID: PropTypes.string.isRequired,
};

export default RenderReviewList;
