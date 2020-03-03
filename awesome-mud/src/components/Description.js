import React from 'react'
import { connect } from 'react-redux'

const Description = props => {
    return(
        <div className="room-description">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        title: state.room_title,
        description: state.room_desc
    }
}


export default connect(mapStateToProps, {})(Description)