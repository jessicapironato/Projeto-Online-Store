import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchContainer extends Component {
  render() {
    const getProductsFromQuery = async () => {
      const { searchField } = this.state;
      const queryItem = searchField;
      const request = await getProductsFromCategoryAndQuery('', queryItem);
      const queryDataProdList = request.results;
      const briefProdList = queryDataProdList.map((product) => (
        {
          id: product.id,
          title: product.title,
          thumbnail: product.thumbnail,
          price: product.price,
        }
      ));
      this.setState({
        queryResultsArray: briefProdList,
      });
    };
    const handleChange = (event) => {
      const { target: { name, value } } = event;
      this.setState({
        [name]: value,
      });
    };

    return (
      <>
        <label
          htmlFor="search-field"
        >
          <input
            id="search-field"
            name="searchField"
            type="text"
            data-testid="query-input"
            onChange={ handleChange }
          />
        </label>
        <input
          type="button"
          id="search-btn"
          name="search-btn"
          data-testid="query-button"
          onClick={ getProductsFromQuery }
          value="Pesquisar"
        />
      </>
    );
  }
}

export default SearchContainer;
