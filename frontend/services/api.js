// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5500/api/users',
});

export const createUser = (userData) => api.post('/', userData);
export const getAllUsers = () => api.get('/');
export const getUserByNumber = (number) => api.get(`/number/${number}`);
export const updateUser = (number, userData) => api.get(`/update/${number}`, userData);
export const softDeleteUser = (number) => api.get(`/delete/${number}`);

const apiService = {
  createUser,
  getAllUsers,
  getUserByNumber,
  updateUser,
  softDeleteUser,
};

export default apiService;
