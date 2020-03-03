import{ INITIALIZED, ERROR_RECEIVED } from '../actions'

const initialState = {
    uuid: '',
    name: '',
    current_room: '',
    current_desc: '',
    players: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ERROR_RECEIVED:
            return {
                ...state,
                error: action.payload.response
            }
        case INITIALIZED:
            return {
                error: false,
                uuid: action.payload.uuid,
                name: action.payload.name,
                current_room: action.payload.current_room,
                current_desc: action.payload.current_desc,
                players: action.payload.players
            }

        default:
            return state;
    }
}

export default reducer