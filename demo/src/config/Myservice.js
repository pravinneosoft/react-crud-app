import axios from "axios";
const API_URL = "http://localhost:3001/products/";
const headers = {};
export function getAllProducts() {
  return axios.get(API_URL);
}
export function addProducts(data) {
  return axios.post(API_URL, headers, data);
}
export function deleteProduct(id) {
  return axios.delete(`${API_URL}${id}`);
}
export function getProductById(id) {
  return axios.get(`${API_URL}${id}`);
}
export function updateProduct(id, data) {
  return axios.put(`${API_URL}${id}`, data);
}
