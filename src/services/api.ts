import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { BACKEND_URL } from '../const';
import { getToken } from './token';
import { getTokenWithType } from '../utils';

const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    const headers = config.headers;

    if (token && headers) {
      headers['authorization'] = getTokenWithType(token);
    }

    return config;
  });

  return api;
};
