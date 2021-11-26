import axios, { AxiosInstance, AxiosResponse } from 'axios';
import Vuex from '../store';
import router from '@/router/index'
const baseURL:string = '/api';

const instance :AxiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    },
    timeout: 20000
})

instance.interceptors.request.use(config  => {
        const token = Vuex.getters.getAccessToken;
        if(token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
})

instance.interceptors.response.use(response => {
    const {data} = response
    const {result, error} = data

    return response
}, error => {
    const {response} = error
    const {status, data} = response

    if (status === 401) {
        // Vue.$toast.open({
        //     message: data.message,
        //     type: 'error',
        //     duration: 5000
        // });
        return router.replace({path: "/"}).catch(() => ({}))
    } else {

    }
    return response
});

export const ins = instance

