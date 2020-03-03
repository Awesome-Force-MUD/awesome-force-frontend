import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <div className="main-header">            
            <Link to="/"><h2>Awesome MUD</h2></Link>
            <nav>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </div>
    )
}

export default Header