// services/api.js

import axios from "axios";
import { useAuth } from "../contexts/AuthContext";

const api = axios.create({
  baseURL: "http://localhost:2000",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor untuk menangani response dari server
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const { logout } = useAuth(); // Pastikan untuk menyesuaikan dengan cara Anda mengelola logout

    // Jika response menunjukkan token kadaluwarsa atau tidak valid
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await logout(); // Hapus token dan data user dari local storage
      window.location.href = "/login"; // Redirect ke halaman login
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default api;
