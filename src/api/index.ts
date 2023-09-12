import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3004',
  headers: {
    'Content-type': 'application/json',
  },
});
