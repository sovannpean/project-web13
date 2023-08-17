import secureLocalStorage from "react-secure-storage"
import { actionTypes } from "../actions/actionTypes"

const auth = secureLocalStorage.getItem('auth')
const initialState = auth ? {isLogin: true, auth: auth} : {isLogin: false, auth: null }

export const authReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.LOGIN_SUCESS: 
        return{...state, isLogin: true, auth: payload}
        case actionTypes.LOGOUT: 
        return{...state, isLogin: false, auth: payload}
        default:
            return state
    }
}