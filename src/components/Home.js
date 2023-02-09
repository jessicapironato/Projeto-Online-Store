import React, { Component } from 'react';
import SearchContainer from './SearchContainer';

class Home extends Component {
  render() {
    return (
      <>
        <p
          data-testid="home-initial-message"
        >
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <SearchContainer />
      </>
    );
  }
}

export default Home;
