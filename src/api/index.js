import axios from 'axios';
const baseUrl = import.meta.env.BASE_URL;

const httpClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default httpClient;
