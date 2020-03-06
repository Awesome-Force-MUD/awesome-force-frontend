import React, { useState } from 'react'
import { connect } from 'react-redux'
import Sketch from "react-p5"

import styled from "styled-components"
import Player from '../player/Player'
import mani from "../assets/mani.png"
// import data from "../../data/dungeon"
import data from "../../data/thunderball"


function Map(props) {
    console.log('MAP props:', props)
    
    

    let sprite

    let preload = p5 => {
        sprite = p5.loadImage(mani)
    }

    let setup = (p5, parentRef)=> {
        console.log('parent ref', parentRef)
        p5.createCanvas(600, 600).parent(parentRef)
        p5.background(0, 0, 0, 0.5)
        p5.noStroke()
        p5.fill(125, 195, 125)
    }

    

    let draw = p5 => {
        props.rooms.forEach(room => {
            // console.log('room coords:', room)

            p5.square(room.x_coord * 60 + 15, 600 - room.y_coord * 60 - 45, 30)

            if (room.n_to) {
                p5.rect(room.x_coord * 60 + 15, 600 - (room.y_coord + 1) * 60 - 30, 30, 50)
            }
            if (room.e_to) {
                p5.rect(room.x_coord * 60 + 30, 600 - room.y_coord * 60 - 45, 50, 30)
            }
        })
        // p5.image(sprite, props.current_room.x_coord * 60 + 10, 600 - props.current_room.y_coord * 60 - 50, 40, 40)
        // p5.image(sprite, 200, 200) // placeholder
    }

    return (
        <MapContainer>
            {/* <Player /> */}
            <Sketch setup={setup} draw={draw} preload={preload} /> 
        </MapContainer>
    )
}
const mapStateToProps = state => {
    return {
        uuid: state.uuid,
        name: state.name,
        title: state.room_title,
        desc: state.room_desc,
        players: state.players,
        error: state.error,
        current_room: state.current_room,
        rooms: state.rooms
    }
}

export default connect(mapStateToProps, { })(Map)

const MapContainer = styled.div`
    // height: 650px
    // width: 650px
    border: 2px solid #555
    margin: 3rem
    background: #444
`