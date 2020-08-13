import request from '../index';

export function post(data) {
  return request({
  	url: 'https://aminochem-backend-prod.herokuapp.com/post',
  	method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
    },
  	data,
  });
}

export function deletePost(data) {
  return request({
    url: 'https://aminochem-backend-prod.herokuapp.com/post/delete',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  });
}

export function updatePost(data) {
  return request({
    url: 'https://aminochem-backend-prod.herokuapp.com/post/update',
    method: 'post',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    data,
  })
}

export function getPosts(data){
  return request({
  	url: 'https://aminochem-backend-prod.herokuapp.com/posts',
  	method: 'post',
  	headers: {
  	  'Content-Type': 'x-www-form-urlencoded',
  	},
  	data,
  })
}

export function getPostsByCategory(categoryID) {
  return request({
    url: `https://aminochem-backend-prod.herokuapp.com/category/${categoryID}/posts`,
    method: 'get',
  })
}

export function getCategories(){
  return request({
  	url: 'https://aminochem-backend-prod.herokuapp.com/categories',
  	method: 'get'
  })
}

export function getImage(id) {
  return request({
    url: `https://aminochem-backend-prod.herokuapp.com/downloadImage/${id}`,
    method: 'get'
  });
}

export function getDocument(id) {
  return request({
    url: `https://aminochem-backend-prod.herokuapp.com/downloadDocument/${id}`,
    method: 'get'
  });
}