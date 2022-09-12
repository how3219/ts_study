import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosInterceptorManager } from 'axios';
interface CustomResponseFormat<T = unknown> {
  code: string;
  data: T;
  msg: string | null;
}
interface CustomInstance extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CustomResponseFormat>>;
  };
}
const request: CustomInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'production'
      ? 'http://0.0.0.0:4000'
      : process.env.NODE_ENV === 'development'
      ? 'http://localhost:4000'
      : undefined,
});
request.defaults.withCredentials = true;
request.defaults.timeout = 5000;

request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (response) => {
    const res = response?.data?.code ? response?.data : response;
    return res;
  },
  (error) => {
    return console.log(error);
    // if (error.response?.status === 401) window.location.replace('/login');
  },
);

export default request;
