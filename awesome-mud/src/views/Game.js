import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initialize } from '../actions'

import Map from '../components/game/Map'
import Description from '../components/game/Descriptions'
import Controls from '../components/game/Controls'
import styled from "styled-components"

const Game = props => {
    // console.log('game props:', props)

    useEffect(() => {
        props.initialize()
    }, [])

    return(
    <GameContainer>
        <Map />
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
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 10rem 4rem 0 4rem;
    border: 3px solid #999;
`
const Sidebar = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`