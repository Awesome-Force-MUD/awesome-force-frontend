import React from "react"
import { connect } from "react-redux"

import styled from "styled-components"
import playerSprite from "../assets/playerSprite.png"

const Player = props => {
    console.log('player props:', props)

    // const spriteDirection = props.direction || game.lastMovedDirection
    let xOffset = "0px"

    // switch (spriteDirection) {
    //     case "e":
    //     xOffset = "-32px"
    //     break
    //     case "w":
    //     xOffset = "-64px"
    //     break
    //     case "n":
    //     xOffset = "-96px"
    //     break
    //     default:
    //     xOffset = "0px"
    // }

    return (
        <StyledPlayer />
    )
}

export default Player

export const StyledPlayer = styled.div`
  background-image: url(${playerSprite});
  background-repeat: no-repeat;
//   background-position-x: ${props => props.xOffset};
//   background-position-y: ${props => props.yOffset};

  background-size: 100px 32px;
  width: 25px;
  height: 32px;

  position: absolute;
  // left: ${props => (props.local_x % 5) * 128 + 48}px;
  // top: ${props => (props.local_y % 5) * 128 + 48}px;
  left: 200px;
  top: 200px;
  transition: left 0.2s linear, top 0.2s linear;
`