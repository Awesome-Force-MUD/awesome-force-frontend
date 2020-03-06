import React from 'react'
import { connect } from 'react-redux'
import { move_room } from '../../actions'

const MoveButtons = props => {

    const handleMove = e => {
        e.preventDefault()
        props.move_room(e.target.name)
    }

    return (
        <div className="move-buttons">
            <div className="upper-buttons">
                <button name="n" onClick={handleMove}>North</button>
            </div>
            <div className="lower-buttons">
                <button name="w" onClick={handleMove}>West</button>
                <button name="s" onClick={handleMove}>South</button>
                <button name="e" onClick={handleMove}>East</button>
            </div>
        </div>
    )

}

const mapStateToProps = () => {
    return{}
}

export default connect(mapStateToProps, { move_room })(MoveButtons)