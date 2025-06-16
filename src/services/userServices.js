import axios from 'axios'

const BASE_URL = 'https://ecommerce-json-jwt.onrender.com'

const signUpUserService = (data) => axios.post(`${BASE_URL}/register`, data)

const signInUserService = (data) => axios.post(`${BASE_URL}/login`, data)

const getMeUserService = (token) => axios.get(`${BASE_URL}/users/me`, {
  headers: {
    Authorization: `Bearer ${token}`
  }
})

export { signUpUserService, signInUserService, getMeUserService }
