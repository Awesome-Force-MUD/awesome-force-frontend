import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from "styled-components"

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
        <RegisterContainer>
            <h2>REGISTER</h2>
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
                <button>REGISTER</button>
            </form>
        </RegisterContainer>
    )

}

export default Register

const RegisterContainer = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 10rem;
    color: white;

    h2 {
        font-size: 2rem;
        padding-bottom: 2rem;
    }
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    label {
        font-size: 1.6rem;
        margin: 1.4rem 0;
    }
    input {
        font-size: 1.6rem;
        padding: .4rem;
    }
    button {
        background-color: #555;
        padding: 1rem;
        font-size: 1.6rem;
        font-family: "Chakra Petch";
    }
`
