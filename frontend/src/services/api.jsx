// services/api.js

import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const api = axios.create({
  baseURL: "http://localhost:2000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const { logout } = useAuth();

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await logout();
      window.location.href = "/login";
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
