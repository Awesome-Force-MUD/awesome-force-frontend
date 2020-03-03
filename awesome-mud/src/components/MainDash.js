import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { initialize } from '../actions'

import Description from './Description'
import MoveButtons from './MoveButtons'

const MainDash = props => {
    useEffect(() => {
        props.initialize()
    }, [])

    return(
    <div className="main-dashboard">
        <h4>Welcome, {props.name}</h4>
        <Description room_title={props.room_title} room_desc={props.room_desc} />
        <MoveButtons />
        
    </div>
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

export default connect(mapStateToProps, { initialize })(MainDash)