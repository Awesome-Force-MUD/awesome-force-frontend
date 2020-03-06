import{ PLAYER_INITIALIZED, ROOMS_INITIALIZED, ERROR_RECEIVED, MOVED_ROOM } from '../actions'
import rooms from '../data/thunderball'

const initialState = {
    uuid: 123456,
    name: 'player',
    room_title: rooms[0].title,
    room_desc: rooms[0].description,
    players: [],
    error: '',
    rooms: rooms,
    current_room: rooms[0]
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ERROR_RECEIVED:
            return {
                ...state,
                error: action.payload.response
            }
        case PLAYER_INITIALIZED:
            return {
                ...state,
                error: false,
                uuid: action.payload.uuid,
                name: action.payload.name,
                room_title: action.payload.title,
                room_desc: action.payload.description,
                players: action.payload.players,
                current_room: action.payload.current_room
            }
        case ROOMS_INITIALIZED:
            return {
                ...state,
                rooms: action.payload
            }
        case MOVED_ROOM:
            console.log(action.payload)
            return {
                ...state,
                // error: action.payload.error_msg,
                room_title: action.payload.title,
                room_desc: action.payload.description,
                // players: action.payload.players
                current_room: action.payload 
            }
            

        default:
            return state;
    }
}

export default reducer