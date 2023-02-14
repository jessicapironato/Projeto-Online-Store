import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  state = {
    categories: [],
    option: 'Acessórios',
    renderProd: [],
    prodToCart: [],
  };

  componentDidMount() {
    this.catFunc();
  }

  catFunc = async () => {
    const API_CATEG = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const catResp = await API_CATEG.json();
    this.setState({
      categories: catResp,
    });
  };

  saveToCart = (event) => {
    const { target: { id } } = event;
    const { handleCartList } = this.props;
    const { renderProd, prodToCart } = this.state;
    const toCart = renderProd.find((element) => element.id === id);
    this.setState(
      {
        prodToCart: [...prodToCart, toCart],
      },
      handleCartList(toCart),
    );
    localStorage.setItem('cart', JSON.stringify(prodToCart));
  };

  getProductsFromCatQuery = async () => {
    const { option } = this.state;
    if (option) {
      const request = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${option}`);
      const catDataProdList = await request.json();
      const resulltsCat = catDataProdList.results;
      const catProdList = resulltsCat.map((product) => (
        {
          id: product.id,
          title: product.title,
          thumbnail: product.thumbnail,
          price: product.price,
        }
      ));
      this.setState({
        renderProd: catProdList,
      });
    }
  };

  handleChange = (event) => {
    const { target: { value } } = event;
    console.log('Categories');
    this.setState({
      option: value,
    }, this.getProductsFromCatQuery);
  };

  render() {
    const { categories, renderProd } = this.state;
    const mappedProd = renderProd.map((result) => (
      <div
        key={ result.id }
        data-testid="product"
      >
        <p>
          <Link
            data-testid="product-detail-link"
            to={ `/ProductDetails/:${result.id} ` }
          >
            { result.title }

          </Link>

        </p>
        <img
          src={ result.thumbnail }
          alt={ result.title }
        />
        <p>{ `R$ ${result.price}` }</p>
        <button
          type="button"
          data-testid="product-add-to-cart"
          id={ result.id }
          onClick={ this.saveToCart }
        >
          Adicionar ao Carrinho
        </button>

      </div>

    ));
    const mappedCat = categories
      .map((cat) => ((
        <option
          data-testid="category"
          key={ cat.id }
          value={ cat.id }
          id={ cat.id }
        >
          {cat.name}
        </option>)));
    return (
      <>
        <label htmlFor="catProds">
          Categorias:
          <select
            id="catProds"
            name="categories"
            onClick={ this.handleChange }
          >
            Categorias:
            {mappedCat}
          </select>
        </label>

        {renderProd.length === 0 ? '' : mappedProd}

      </>
    );
  }
}

Categories.propTypes = {
  handleCartList: PropTypes.func.isRequired,
};

export default Categories;
