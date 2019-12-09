import axios from 'axios';

const request = axios.create({
  timeout: 20000, // request timeout
});

export default request;
