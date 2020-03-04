import React from 'react'

import styled from "styled-components"

const Descriptions = props => {
    console.log('desc props:', props)
    return (
        <DescriptionsContainer>
            <p>CURRENT PLAYER:</p>
            {/* <h4>{props.name}</h4> */}
            <p></p>
            <p>CURRENT ROOM:</p>
            <h4>{props.rooom_title}</h4>
            <p>{props.room_desc}</p>
        </DescriptionsContainer>
    )
}

export default Descriptions

const DescriptionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.4rem;
    padding: 2rem;
`