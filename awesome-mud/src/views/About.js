import React from 'react'

import styled from "styled-components"

const About = () => {
    return(
        <AboutContainer>
            <h1>About the Awesome MUD Team</h1>
            <h2>Developer1</h2>
            <h2>Developer2</h2>
            <h2>Developer3</h2>
            <h2>Developer4</h2>
            <h2>Developer5</h2>
        </AboutContainer>
    )
}

export default About

const AboutContainer = styled.div`
    margin-top: 10rem;
    h1 {
        font-size: 3rem;
    }
    h2 {
        margin-top: 1rem;
        font-size: 2rem;
    }
`