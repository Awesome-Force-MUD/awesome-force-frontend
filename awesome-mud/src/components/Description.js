import React from 'react'

const Description = props => {
    return(
        <div className="room-description">
            <h3>{props.room_title}</h3>
            <p>{props.room_desc}</p>
        </div>
    )
}


export default Description