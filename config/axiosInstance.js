import axios from "axios";

const baseURL = "/api/juac/";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

export default axiosInstance;
