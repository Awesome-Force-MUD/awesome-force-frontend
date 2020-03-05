import React, { useState } from 'react'
import { connect } from 'react-redux'

import styled from "styled-components"

import { move_room } from "../../actions"

const Controls = props => {
    
    const handleMove = e => {
        e.preventDefault()
        props.move_room(e.target.name)
    }
    
    return (
        <ControlsContainer>
            <NorthButton name="n" onClick={handleMove} >N</NorthButton>
            <div>
                <WestButton name="w" onClick={handleMove} >W</WestButton>
                <EastButton name="e" onClick={handleMove} >E</EastButton>
            </div>
            <SouthButton name="s" onClick={handleMove} >S</SouthButton>
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
    flex-direction: column;
    font-size: 2rem;
    padding: 2rem;
`
const NorthButton = styled.button`
    padding: .6rem 1rem;
    color: #DDD;
    background: #222;
    border-right: 3px solid #DDD;
    border-bottom: 3px solid #DDD;
    font-size: 2rem;
    &:hover {
        color: #222;
        background: #DDD;
    }
`
const WestButton = styled.button`
    margin: 0 2rem;
    padding: .6rem .8rem;
    color: #DDD;
    background: #222;
    border-right: 3px solid #DDD;
    border-bottom: 3px solid #DDD;
    font-size: 2rem;
    &:hover {
        color: #222;
        background: #DDD;
    }
`
const EastButton = styled.button`
    margin: 0 2rem;
    padding: .6rem 1rem;
    color: #DDD;
    background: #222;
    border-right: 3px solid #DDD;
    border-bottom: 3px solid #DDD;
    font-size: 2rem;
    &:hover {
        color: #222;
        background: #DDD;
    }
`
const SouthButton = styled.button`
    padding: .6rem 1rem;
    color: #DDD;
    background: #222;
    border-right: 3px solid #DDD;
    border-bottom: 3px solid #DDD;
    font-size: 2rem;
    &:hover {
        color: #222;
        background: #DDD;
    }
`
// const MiddleButtons = styled.div`
//     margin: 0;
// `