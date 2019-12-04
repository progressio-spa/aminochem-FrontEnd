import request from '../index';

function getAccessToken() {
  return request({
    url: 'http://localhost:8080/oauth/token',
    method: 'post',
    params: {
      grant_type: 'password',
      username: 'admin@correo.com',
      password: 'admin_password',
    },
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: 'my-trusted-client',
      password: 'secret',
    },
  });
}

export default getAccessToken;
