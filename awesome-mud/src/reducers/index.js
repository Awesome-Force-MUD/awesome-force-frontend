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
        default:
            return state;
    }
}

export default reducer