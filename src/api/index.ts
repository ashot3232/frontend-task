import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3004/api',
  headers: {
    'Content-type': 'application/json',
  },
});
