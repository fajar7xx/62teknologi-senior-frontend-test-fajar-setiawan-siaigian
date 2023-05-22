import axios from "axios"
import config from "@/constant/config"

const AppToken = config.APP_TOKEN

const API = axios.create({
    // baseURL: config.API_URL,
    // baseURL: 'http://localhost:5000/yelp',
    baseURL: '/yelp', // karena pakai proxy vite maka di ubah sedemikian link nya https://rubenr.dev/cors-vite-vue/
    headers: {
        'Access-Control-Allow-Origin': '*',
        'cache-control': 'no-cache',
        'Content-Type': 'application/json',
        'Accept': '*',
    },
    withCredentials: true,
    timeout: 5000,
})

API.interceptors.request.use(
    (config) => {
        const initialtoken = 'Ubf1-f0uqsJUnssqPMGo-tiFeZTT85oFmKfznlPmjDtX8s83jYMoAb-ApuD63wgq6LDZNsUXG6gurZIVYaj2jzxJmmLdCdXbDqIHU_b6KiCEVi8v-YB0OSsW6MWaY3Yx'
        const token = AppToken
        if (token) {
            config.headers['Authorization'] = `Bearer ${initialtoken}`
        }

        return config
    }, (err) => {
        console.log('dari interceptor request')
        console.log(err)
        Promise.reject(err)
    }
)

API.interceptors.response.use(
    (response) => {
        if (response.status === 401) {
            console.log('unauthorized')
        }

        return response
    }, (err) => {
        if (err.response && err.response.data) {
            console.log('kalau err')
            return Promise.reject(err.response.data)
        }

        console.log('dari interceptor response')
        console.log(err)
        return Promise.reject(err.message)
    }
)

export default API