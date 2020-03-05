import React from 'react'
import space from "../components/assets/space.png"
import style from "styled-components"
import styled from 'styled-components'

const SplashPage = () => {
    return(
        <SplashContainer>
            <h1>Welcome to the
            <br/> 
            AWESOME FORCE MUD GAME!</h1>
            <br/>
            <h3>Log in or register to continue...</h3>
        </SplashContainer>
    )
}

export default SplashPage


const SplashContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 10rem;
    color: white;
    background: url(${space});
    min-height: 100vh;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;

    h1 {
        margin: 0;
        font-size: 4rem;
    }
    
    h3 {
        font-size: 2rem;
        padding-top: 1rem;
    }

`