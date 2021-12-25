import axios from 'axios'
import { API } from 'config'

export const getUsers = (params) => {
    return axios.get(`${API}/users`, { params }).then(res => {
        return {
            ...res.data,
            page: res.data.page - 1
        }
    })
}