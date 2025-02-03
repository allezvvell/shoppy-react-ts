import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com/products';

export const productsClient = axios.create({
  baseURL: BASE_URL,
});
