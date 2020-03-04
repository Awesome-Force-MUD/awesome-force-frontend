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
                    name="password1"
                    value={credentials.password1}
                    onChange={handleChange}
                    />
                </FormLabel>
                <FormLabel>
                    Repeat Password:
                    <FormInput
                    type="password"
                    name="password2"
                    value={credentials.password2}
                    onChange={handleChange}
                    />
                </FormLabel>
                <FormButton>REGISTER</FormButton>
            </FormContainer>
        </RegisterContainer>
    )

}

export default Register

const RegisterContainer = styled.div`
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
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
export const FormLabel = styled.label`
    font-size: 1.6rem;
    margin: 1.4rem 0;
`
export const FormInput = styled.input`
    font-size: 1.6rem;
    padding: .4rem;
    margin-left: 1rem;
`
export const FormButton = styled.button`
    background-color: #555;
    padding: 1rem;
    font-size: 1.6rem;
    font-family: "Chakra Petch";
`
