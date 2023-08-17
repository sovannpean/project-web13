import axios from "axios"
import { base_URL } from "../../utils/constant"
import { actionTypes } from "./actionTypes"

export const fetchProfile = (auth) => {
    return (dispatch) => {
        return axios(`${base_URL}auth/profile`,{
            headers: {
                "Content-Type":"application/json",
                "Authorization": `Bearer ${auth}`
            }
        })
        .then((res) => {
            if(res.status == 200){
                dispatch({
                    type: actionTypes.FETCH_PROFILE,
                    payload:res.data,
                })
                return Promise.resolve
            }
        })
    }
}