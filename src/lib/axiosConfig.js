import axios from 'axios';

const instance = axios.create({
  baseURL: ' http://api.weatherapi.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
