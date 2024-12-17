import axios from "axios";
import { AxiosInstance } from "axios";
import { toast } from "react-toastify";

export const attachErrorInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.response.use(
    (response) => response, // Pass successful responses as is
    (error) => {
      // Handle different error statuses
      if (error.response) {
        const { status, data } = error.response;

        switch (status) {
          case 401:
            toast.error("Unauthorized: Please log in again.");
            // Optionally, redirect to login page
            window.location.href = "/login";
            break;
          case 403:
            toast.error("Forbidden: You do not have access.");
            break;
          case 500:
            toast.error("Server Error: Something went wrong.");
            break;
          default:
            toast.error(data?.message || "An unexpected error occurred.");
            break;
        }
      } else {
        toast.error("Network Error: Please check your connection.");
      }

      return Promise.reject(error);
    }
  );
};

export const attachAuthInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use(
    (config) => {
      // Retrieve token (e.g., from localStorage, cookies, or Next.js appDir cookies)
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem("authToken")
          : null;

      if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }

      return config;
    },
    (error) => {
      toast.error("server Error");
      return Promise.reject(error);
    }
  );
};

// Base Axios instance
const axiosInstance = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    "https://phpv8.aait-d.com/leak_detection/public/api/website/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": localStorage.getItem("lang") || "en",
  },
});

// Attach interceptors
// attachAuthInterceptor(axiosInstance);
// attachErrorInterceptor(axiosInstance);

// Function to attach Authorization Interceptor

export default axiosInstance;
