import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-6cw6.onrender.com",
  withCredentials: true,
});
