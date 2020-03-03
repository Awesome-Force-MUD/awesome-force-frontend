import React, { useState } from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import styled from "styled-components"
import { FormContainer, FormLabel, FormInput, FormButton } from "./Register"

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
        <LoginContainer>
            <h2>LOG IN</h2>
            <FormContainer onSubmit={handleSubmit}>
                <FormLabel>
                    Username:
                    <FormInput
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel>
                    Password:
                    <FormInput
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleChange}
                    />
                </FormLabel>
                <FormButton>LOG IN</FormButton>
            </FormContainer>
        </LoginContainer>
    )

}

export default Login

const LoginContainer = styled.div`
display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 10rem;
    color: white;

    h2 {
        font-size: 2rem;
        padding-bottom: 2rem;
    }
`