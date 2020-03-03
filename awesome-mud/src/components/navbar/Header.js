import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <div className="main-header">            
            <Link to="/game"><h2>Awesome MUD</h2></Link>
            <nav>
                <Link to="/">About</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    )
}

export default Header