import React from 'react';

class Categories extends React.Component {
  state = {
    categories: [],
    option: 'Acessórios',
    renderProd: [],
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
    const { target: { value, id } } = event;
    console.log(id);
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
        <p>{ result.title }</p>
        <img
          src={ result.thumbnail }
          alt={ result.title }
        />
        <p>{ `R$ ${result.price}` }</p>
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

export default Categories;
