import axios from 'axios'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        baseURL: "https://lambda-mud-test.herokuapp.com",
        // baseURL: "https://lambda-mud-ty.herokuapp.com",
        headers: {
            Authorization: `Token ${token}`
        }
    })
}