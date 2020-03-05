import React from 'react'
import { connect } from 'react-redux'

import styled from "styled-components"
// import player1 from "../assets/player1.png"
import player1 from "../assets/mani.png"

const Descriptions = props => {
    console.log('desc props:', props)

    return (
        <DescriptionsContainer>
            <CurrentPlayer>
                <h3>CURRENT PLAYER:</h3>
                <h4>{props.name}</h4>
                <img src={player1} alt="player" />
            </CurrentPlayer>
            <CurrentRoom>
                <h3>CURRENT ROOM:</h3>
                <h4>{props.room_title}</h4>
                <h5>{props.room_desc}</h5>
            </CurrentRoom>
        </DescriptionsContainer>
    )
}
const mapStateToProps = state => {
    return {
        // uuid: state.uuid,
        name: state.name,
        room_title: state.room_title,
        room_desc: state.room_desc,
        // players: state.players,
        // error: state.error
    }
}

export default connect(mapStateToProps, { })(Descriptions)

const DescriptionsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.4rem;
    padding: 2rem;
`
const CurrentPlayer = styled.div`
    color: #DDD;
    margin: 2rem 0;
    h3 {
        font-size: 2.2rem;
    }
    h4 {
        font-size: 2rem;
        margin-top: .6rem;
    }
    img {
        margin: 1rem;
    }
`
    const CurrentRoom = styled.div`
    color: #DDD;
    margin: 1rem 0;
    max-width: 300px;
    h3 {
        font-size: 2.2rem;
    }
    h4 {
        font-size: 2rem;
        margin-top: 1rem;
    }
    h5 {
        margin: .6rem;
    }
`