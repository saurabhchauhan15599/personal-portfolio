/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios, {
  AxiosError,
  AxiosResponse,
  HttpStatusCode,
  InternalAxiosRequestConfig,
  isAxiosError
} from 'axios';
import notify from '../helpers/toastify-helper';

const httpClient = Axios.create({
  baseURL: `${import.meta.env.REACT_APP_BASE_URL}`,
  timeout: 2000 * 10,
  responseType: 'json'
});

const handleRequest = (config: InternalAxiosRequestConfig) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
};

const handleRequestError = (error: any) => {
  return Promise.reject(error);
};

const handleResponse = (response: AxiosResponse) => {
  const data = response.data;
  return data;
};

const handleResponseError = async (error: any) => {
  if (isAxiosError(error)) {
    return await parseError(error);
  }
  return Promise.reject(error);
};

const getErrorCode = (error: AxiosError) => {
  switch (error.code) {
    case AxiosError.ECONNABORTED:
      notify({
        title: 'Connection timeout',
        message: 'Server took too long to respond',
        severity: 'warning'
      });
      break;
    case AxiosError.ERR_NETWORK:
      notify({
        title: 'Service unavailable',
        message: "Can't connect to server.",
        severity: 'warning',
        dismissible: false,
        showIcon: false
      });
      break;
    case AxiosError.ERR_CANCELED:
      break;
    default:
      notify({
        title: 'Unknown error',
        message: 'Something went wrong.',
        severity: 'error'
      });
      break;
  }
  return Promise.reject({
    data: null,
    error: error.message
  });
};

const parseError = async (error: AxiosError | any) => {
  if (!error.response) return await getErrorCode(error);
  else {
    const statusCode = error.response.status;
    const responseConfig = error.response.config;
    if (statusCode === HttpStatusCode.Unauthorized && !responseConfig._retry) {
      responseConfig._retry = true;
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        const response = await httpClient(responseConfig);
        if (response.data) return Promise.resolve(response);
        else return Promise.reject(response);
      }
    } else if (statusCode === HttpStatusCode.Unauthorized && responseConfig._retry) {
      notify({ title: 'Session Expired', message: 'Please log in again.', severity: 'info' });
      localStorage.clear();
      window.location.assign('/');
    }
  }
  return Promise.reject(error.response.data);
};

httpClient.interceptors.request.use(handleRequest, handleRequestError);
httpClient.interceptors.response.use(handleResponse, handleResponseError);

export default httpClient;
