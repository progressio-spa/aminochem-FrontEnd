import request from '../index';

export function post(data) {
  return request({
  	url: 'https://aminochem-backend.herokuapp.com/post',
  	methods: 'post',
  	headers: {
  	  'Content-Type': 'application/json; charset=UTF-8',
  	  'Access-Control-Allow-Origin': '*',
  	},
  	data,
  })
}

export function getPosts(data){
  return request({
  	url: 'https://aminochem-backend.herokuapp.com/posts',
  	method: 'post',
  	headers: {
  	  'Content-Type': 'x-www-form-urlencoded',
  	},
  	data,
  })
}

export function getCategories(){
  return request({
  	url: 'https://aminochem-backend.herokuapp.com/categories',
  	method: 'get'
  })
}