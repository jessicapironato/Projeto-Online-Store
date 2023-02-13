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

export async function getProductById(id) {
  const URL_API = `https://api.mercadolibre.com/items/${id}`;
  const dataProductID = await fetch(URL_API);
  const data = await dataProductID.json();
  return data;
}
