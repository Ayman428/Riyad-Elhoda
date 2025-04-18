import axios from "axios";

const api = axios.create({
  baseURL: "https://backend.aljeel.edu.sa",
});

api.interceptors.request.use((config) => {
  const lang = localStorage.getItem("lang");
  if (lang) {
    config.headers["lang"] = lang;
  }
  return config;
});

export default api;
