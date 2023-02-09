export async function getCategories() {
  const API_CAT = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const responseCat = await API_CAT.json();
  return responseCat;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const API_PROD = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const responseProd = await API_PROD.json();
  return responseProd;
}

export async function getProductById() {
  // Esta implementação específica não é avaliada, mas pode ajudar você ￼
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
}
