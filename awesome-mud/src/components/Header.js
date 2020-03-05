import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"

const Header = props => {

    const handleLogout = () => {
		localStorage.removeItem("token");
    };
    
    return(
        <HeaderContainer>
            <Link to="/"><h2>Awesome MUD</h2></Link>
            <nav>
                <Link to="/about">ABOUT</Link>
                <Link to="/login">LOGIN</Link>
                <Link to="/register">REGISTER</Link>
                <Link to="/" onClick={handleLogout}>LOGOUT</Link>
            </nav>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    top: 0;
    left: 0;
    padding: 1.2rem;
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
        margin-left: 2rem;
    }
    a:hover {
        text-decoration: underline;
    }
`