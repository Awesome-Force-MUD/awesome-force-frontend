import { axiosWithAuth } from '../utils/axiosWithAuth'
    
export const INITIALIZED = 'INITIALIZED'
export const ERROR_RECEIVED = 'ERROR_RECEIVED'
export const MOVED_ROOM = 'MOVED_ROOM'

export const initialize = () => dispatch => {
    axiosWithAuth()
        .get("/api/adv/init/")
        .then(res => {
            console.log(res)
            dispatch({ type: INITIALIZED, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ERROR_RECEIVED, payload: err})
        })
}

export const move_room = dir => dispatch => {
    axiosWithAuth()
        .post("/api/adv/move/", {"direction": dir})
        .then(res => {
            console.log(res)
            dispatch({ type: MOVED_ROOM, payload: res.data })
        })
        .catch(err => {
            console.log(err)
            dispatch({ type: ERROR_RECEIVED, payload: err})
        })
}