import{ INITIALIZED, ERROR_RECEIVED } from '../actions'

const initialState = {
    uuid: '',
    name: '',
    room_title: '',
    room_desc: '',
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
                room_title: action.payload.title,
                room_desc: action.payload.description,
                players: action.payload.players
            }

        default:
            return state;
    }
}

export default reducer