import axios from 'axios';

export const SERVER_URL = 'http://api.weatherapi.com';

export default axios.create({
  baseURL: SERVER_URL,
  withCredentials: false,
});
