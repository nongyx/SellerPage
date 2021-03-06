/* eslint-disable */
import axios from 'axios'
// const API_URL = 'http://private-0131b-order210.apiary-mock.com'
// const API_URL = 'http://172.18.156.83:8080/ordering/api/v1'
const API_URL = 'http://139.199.71.21:8080/ordering/api/v1'

const myAxios = axios.create({
  baseURL: API_URL,
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
  }
  // withCredentials: true
})

export default {
  myAxios
}
