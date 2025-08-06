import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/v1',
});

export {AxiosInstance}