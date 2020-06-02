import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.57:3300'
});

export default api;