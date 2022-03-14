import axios from 'axios';

const API_URL = process.env.POKEAPI_URL || 'https://pokeapi.co/api/v2';

const axiosInstance = axios.create(
  {
    baseURL: API_URL
  }
);

export const axiosUrlInstance = (url) => axios.create(
  {
    baseURL: url
  }
);

export default axiosInstance;