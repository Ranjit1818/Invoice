import axios from "axios";

// Create an Axios instance for the backend API
const apiClient = axios.create({
  baseURL: "https://invoice-backend-orcin.vercel.app/api", // Base URL for the backend
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
