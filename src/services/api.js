import axios from 'axios';

const API = axios.create({
    baseURL: `http://jsonplaceholder.typicode.com/`
});
// Add a request interceptor
API.interceptors.request.use(
    config => {
        // const state = store.getState();
        // const token = state.auth;

        // eslint-disable-next-line no-param-reassign
        // config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    error => Promise.reject(error)
);
export default API;
