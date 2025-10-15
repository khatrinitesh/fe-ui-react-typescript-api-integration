import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const fakeStoreInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL_FAKE_STORE,
});
