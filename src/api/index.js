import axios from 'axios';

const BACKEND_URL = 'http://localhost:8080';

const request = axios.create({
  timeout: 20000, // request timeout
});

export default request;
