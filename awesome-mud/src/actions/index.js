import { axiosWithAuth } from '../utils/axiosWithAuth'
    
export const INITIALIZED = 'INITIALIZED'
export const ERROR_RECEIVED = 'ERROR_RECEIVED'

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
