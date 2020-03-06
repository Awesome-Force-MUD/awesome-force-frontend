import { axiosWithAuth } from '../utils/axiosWithAuth'

import rooms from '../data/thunderball'
    
export const PLAYER_INITIALIZED = 'PLAYER_INITIALIZED'
export const ROOMS_INITIALIZED = 'ROOMS_INITIALIZED'
export const ERROR_RECEIVED = 'ERROR_RECEIVED'
export const MOVED_ROOM = 'MOVED_ROOM'

export const initialize = () => dispatch => {
    // axiosWithAuth()
    //     .get("/api/adv/init/")
    //     .then(res => {
    //         console.log(res)
    //         dispatch({ type: PLAYER_INITIALIZED, payload: res.data })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         dispatch({ type: ERROR_RECEIVED, payload: err})
    //     })
    // axiosWithAuth()
    //     .get("/api/adv/rooms/")
    //     .then(res => {
    //         console.log(res)
    //         dispatch({ type: ROOMS_INITIALIZED, payload: res.data })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         dispatch({ type: ERROR_RECEIVED, payload: err})
    //     })

    dispatch({ type: ROOMS_INITIALIZED, payload: rooms})
    dispatch({ type: PLAYER_INITIALIZED, payload: {
        uuid: 123456789,
        name: 'player',
        room_title: rooms[0].title,
        room_desc: rooms[0].description,
        current_room: rooms[0]
    }})

}

export const move_room = (dir, current_room) => dispatch => {
    // axiosWithAuth()
    //     .post("/api/adv/move/", {"direction": dir})
    //     .then(res => {
    //         console.log(res)
    //         dispatch({ type: MOVED_ROOM, payload: res.data })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         dispatch({ type: ERROR_RECEIVED, payload: err})
    //     })

    let next_room_id
    let next_room_obj

    switch(dir) {
        case 'n': 
            next_room_id = current_room.n_to
        case 's': 
            next_room_id = current_room.s_to
        case 'e': 
            next_room_id = current_room.e_to
        case 'w': 
            next_room_id = current_room.w_to
    }

  
    for (let i=0; i < rooms.length; i++) {
        if (rooms[i].id === next_room_id) {
            next_room_obj = rooms[i]
        }
    }
    console.log(rooms)
    console.log(next_room_obj)

    dispatch({ type: MOVED_ROOM, payload: next_room_obj})

}