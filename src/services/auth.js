import axios from 'axios'
import { API } from 'config'
import cookie from 'react-cookies'
import { AUTH_TOKEN_NAME } from 'config'

export const login = (email, password) => {
    return axios.post(`${API}/login`, { email, password }).then(res => {
        return res.data
    })
}

export const getAuthCookie = () => {
    return cookie.load(AUTH_TOKEN_NAME)
}

export const setAuthCookie = (token) => {
    cookie.save(AUTH_TOKEN_NAME, token, { path: '/' })
}

export const removeAuthCookie = () => {
    cookie.remove(AUTH_TOKEN_NAME, { path: '/' })
}