import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Header = () => {

    return(
        <HeaderContainer>
            <Link to="/game"><h2>Awesome MUD</h2></Link>
            <nav>
                <Link to="/about">ABOUT</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/register">REGISTER</Link>
            </nav>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    top: 0;
    left: 0;
    padding: 1rem;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    h2 {
        font-size: 3rem;
    }
    nav {
        display: flex;
        align-items: center;
    }
    a {
        color: white;
        text-decoration: none;
        font-size: 1.6rem;
    }
    a:hover {
        text-decoration: underline;
    }
`