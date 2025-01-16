import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
const baseURL = 'https://dc-knowing.com/FLOW_COMPTA/public/api'
const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

axiosInstance.interceptors.request.use(async function (config) {
    let user_token = await AsyncStorage.getItem('user_token');
    if (user_token) {
        config.headers.Authorization = `Bearer ${user_token}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (error.response?.status === 401) {
        console.log('Unauthorized! Redirecting to login...');
    }
    return Promise.reject(error);
});

export default axiosInstance;