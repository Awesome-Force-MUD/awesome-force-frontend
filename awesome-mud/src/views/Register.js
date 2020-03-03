import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Register = props => {
    const history = useHistory()

    const [credentials, setCredentials] = useState({
        username: "",
        password1: "",
        password2: ""
    })

    const handleChange = e => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.post("https://lambda-mud-test.herokuapp.com/api/registration/", credentials)
            .then(res => {
                localStorage.setItem("token", res.key)
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
                    name="password1"
                    value={credentials.password1}
                    onChange={handleChange}
                    />
                </label>
                <label>
                    Repeat Password:
                    <input
                    type="password"
                    name="password2"
                    value={credentials.password2}
                    onChange={handleChange}
                    />
                </label>
                <button>Log In</button>
            </form>
        </div>
    )

}

export default Register