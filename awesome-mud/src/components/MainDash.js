import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'

import { initialize } from '../actions'

const MainDash = props => {
    useEffect(() => {
        props.initialize()
    }, [])

    return(
    <div>Welcome, {props.name}</div>
    )
}

const mapStateToProps = state => {
    return {
        uuid: state.uuid,
        name: state.name,
        current_room: state.current_room,
        current_desc: state.current_desc,
        players: state.players,
        error: state.error
    }
}

export default connect(mapStateToProps, { initialize })(MainDash)