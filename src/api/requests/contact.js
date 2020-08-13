import request from '../index';

function contact(data) {
  return request({
    url: 'https://aminochem-backend-prod.herokuapp.com/contact',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export default contact;
