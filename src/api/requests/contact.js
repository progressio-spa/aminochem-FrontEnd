import request from '../index';

function contact(data) {
  return request({
    url: 'http://157.245.134.21:8081/contact',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export default contact;
