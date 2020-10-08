import axios from 'axios';

const api = axios.create({
  baseURL: 'http://169.254.212.130:3333',
});

export default api;
