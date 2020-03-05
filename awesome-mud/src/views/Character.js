import React from 'react'

import styled from "styled-components"

const Character = props => {
    return(
        <div className="character">
            <h2>Welcome, {props.name}</h2>
            <h3>Chose a character to enter to game</h3>
        </div>
    )
}

export default Character

const CharacterContainer = styled.div`
    margin-top: 10rem;
    color: white;
`