import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Login = props => {
    const history = useHistory()

    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    })

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("https://lambda-mud-test.herokuapp.com/api/login/", credentials)
            .then(res => {
                console.log(res)
                localStorage.setItem("token", res.data.key)
                history.push("/game")
            })

    }

    return (
        <div className="login-form">
            <h2>Log In</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    />
                </label>
                <button>Log In</button>
            </form>
        </div>
    )

}

export default Login