


import axios from "axios";
import { toast } from "react-toastify";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 100000,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // show toast and rethrow so callers can catch it
    toast.error(error?.message ?? "Network error");
    return Promise.reject(error);
  }
);
