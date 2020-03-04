import React from 'react'
import { connect } from 'react-redux'

import controls from "../game/assets/Window.png"
import styled from "styled-components"

import { move_room } from "../../actions"

const Controls = props => {
    return(
        <ControlsContainer>
            <img src={controls} alt="controls" />
        </ControlsContainer>
    )
}

const mapStateToProps = state => {
    return {
        // uuid: state.uuid,
        // name: state.name,
        room_title: state.room_title,
        room_desc: state.room_desc,
        // players: state.players,
        // error: state.error
    }
}
export default connect(mapStateToProps, { move_room })(Controls)


const ControlsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    padding: 2rem;
`