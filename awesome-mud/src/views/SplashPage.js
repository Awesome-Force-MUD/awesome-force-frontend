import React from 'react'
import space from "../components/assets/space.png"

const SplashPage = () => {
    return(
        <div className="splash-page">
            <h1>Welcome to Awesome MUD</h1>
            <img src={space} />
        </div>
    )
}

export default SplashPage