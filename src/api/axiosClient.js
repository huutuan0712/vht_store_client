import axios from 'axios';
import { config } from '../config';

import queryString from 'query-string';

const axiosClient = axios.create({
  baseURL: config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => {
    return queryString.stringify(params);
  },
});

// axiosClient.interceptors.request.use(
//   async (config) => {
//     const accessToken = localStorage.getItem('access_token');
//     config.headers.Authorization = `Bearer ${accessToken}`;
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 403 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         const refreshToken = localStorage.getItem('refresh_token');
//         const access_token = await getAccessToken({ refreshToken });
//         axios.defaults.headers.common['Authorization'] =
//           'Bearer ' + `${access_token.data}`;
//         return axiosClient(originalRequest);
//       } catch (e) {
//         return Promise.reject(e);
//       }
//     }
//   }
// );

export default axiosClient;
