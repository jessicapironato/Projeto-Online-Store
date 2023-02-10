import React from 'react';

class Categories extends React.Component {
  state = {
    categories: [],
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

  render() {
    const { categories } = this.state;
    const mappedCat = categories
      .map((cat) => ((
        <option
          data-testid="category"
          key={ cat.id }
        >
          {cat.name}
        </option>)));
    return (
      <label htmlFor="catProds">
        <select id="catProds">
          Categorias:
          {mappedCat}
        </select>
      </label>
    );
  }
}

export default Categories;
