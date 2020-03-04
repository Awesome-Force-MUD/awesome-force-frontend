import React from 'react'
import controls from "../game/assets/Window.png"
import styled from "styled-components"

const Controls = props => {
    return(
        <ControlsContainer>
            <img src={controls} alt="controls" />
        </ControlsContainer>
    )
}

export default Controls


const ControlsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding: 1rem;
    background: #333;
`