import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initialize } from '../actions'

import Description from '../components/game/Descriptions'
import Controls from '../components/game/Controls'

import styled from "styled-components"

const Game = props => {
    console.log('game props:', props)
    console.log('game props.name:', props.name)

    useEffect(() => {
        props.initialize()
    }, [])

    return(
    <GameContainer>
        <Board>TEST</Board>
        <Sidebar>
            <Description />
            <Controls />
        </Sidebar>
    </GameContainer>
    )
}

const mapStateToProps = state => {
    return {
        uuid: state.uuid,
        name: state.name,
        room_title: state.room_title,
        room_desc: state.room_desc,
        players: state.players,
        error: state.error
    }
}

export default connect(mapStateToProps, { initialize })(Game)

const GameContainer = styled.div`
    display: flex;
    margin-top: 10rem;
    width: 100%;
    border: 3px solid red;
    color: white;
    font-size:
`
const Board = styled.div`
    height: 400px;
    width: 500px;
    border: 2px solid #555;
`
const Sidebar = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`