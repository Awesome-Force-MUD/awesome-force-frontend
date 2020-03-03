import React, { useState } from 'react'

import { connect } from 'react-redux'

import { initialize } from '../actions'

const MainDash = props => {
    return(
    <div>Welcome, {props.name}</div>
    )
}

const mapStateToProps = () => {
    return {
        uuid: state.uuid,
        name: state.name,
        current_room: state.current_room,
        current_desc: state.current_desc,
        players: state.players,
        error: state.error
    }
}

export default connect(mapStateToProps, {})(MainDash)