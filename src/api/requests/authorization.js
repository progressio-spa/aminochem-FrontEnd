import request from '../index';

export function getAccessToken(data) {
  return request({
    url: 'http://157.245.134.21:8081/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export function registerUser(data) {
  return request({
    url: 'http://157.245.134.21:8081/register',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export function forgotPassword(data) {
  return request({
    url: 'http://157.245.134.21:8081/forgotPassword',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}
