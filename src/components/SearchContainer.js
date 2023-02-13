import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      queryResultsArray: [],
      searchField: '',
      searched: false,
    };
  }

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
        searched: true,
      });
    };

    const handleChange = (event) => {
      const { target: { name, value } } = event;
      this.setState({
        [name]: value,
      });
    };

    const { queryResultsArray, searched } = this.state;
    const mappedQuery = queryResultsArray.map((result) => (
      <div
        key={ result.id }
        data-testid="product"
      >
        <p>
          {' '}
          <Link
            data-testid="product-detail-link"
            to={ `/ProductDetails/:id ${result.id} ` }
          >
            { result.title }

          </Link>

        </p>
        <img
          src={ result.thumbnail }
          alt={ result.title }
        />
        <p>{ `R$ ${result.price}` }</p>
      </div>
    ));
    const shouldDisplayNotFound = searched ? 'Nenhum produto foi encontrado' : '';

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
        <section
          className="search-result-container"
        >
          {queryResultsArray.length === 0 ? shouldDisplayNotFound : mappedQuery}
        </section>
      </>
    );
  }
}

export default SearchContainer;
