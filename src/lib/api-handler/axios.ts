import axios from "axios";
import storage from "@/utils/storage/Storage";

const AxiosAD = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
});
AxiosAD.interceptors.request.use(
  async (request) => {
    const isLogin = storage.getData(import.meta.env.VITE_STORAGE_ACCOUNT_ADMIN);
    const token = isLogin?.data?.access;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);
AxiosAD.interceptors.response.use((response) => {
  return response?.data;
});
export default AxiosAD;
