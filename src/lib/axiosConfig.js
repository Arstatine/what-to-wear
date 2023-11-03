import axios from 'axios';

export const SERVER_URL = 'https://api.weatherapi.com';

export default axios.create({
  baseURL: SERVER_URL,
});
