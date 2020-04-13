import request from '../index';

export function getAccessToken(data) {
  return request({
    url: 'https://aminochem-backend.herokuapp.com/login',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export function registerUser(data) {
  return request({
    url: 'https://aminochem-backend.herokuapp.com/register',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export function forgotPassword(data) {
  return request({
    url: 'https://aminochem-backend.herokuapp.com/forgotPassword',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export function isAdmin(data) {
  return request({
    url: 'https://aminochem-backend.herokuapp.com/isAdmin',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}