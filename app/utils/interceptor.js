import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { logoutHandler } from './auth'
import { getCookie } from 'cookies-next'
let isRefresh = false

const isTokenExpired = t => t && Date.now() >= jwtDecode(t).exp * 1000

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_APP_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json'
  }
})

axiosInstance.interceptors.request.use(async config => {
  if (!config.url) return config

  if (!isRefresh) {
    let accessToken = getCookie("accessToken");

    if (!accessToken || isTokenExpired(accessToken)) {
      logoutHandler()
    } else {
      config.headers['Authorization'] = `Bearer ${accessToken}`
    }
  }

  isRefresh = false

  return config
})

axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const { response } = error
    if (response && response.status === 401 && !isRefresh) {
      const accessToken = getCookie("accessToken");

      if (!accessToken || isTokenExpired(accessToken)) logoutHandler()
      isRefresh = true
    }

    isRefresh = false
    if (response && response.status === 401) logoutHandler()

    return Promise.reject(error)
  }
)

export default axiosInstance
