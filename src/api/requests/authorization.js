import request from '../index';

function getAccessToken(data) {
  return request({
    url: 'http://157.245.134.21:8081/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export default getAccessToken;
