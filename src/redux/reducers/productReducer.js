import { actionTypes } from "../actions/actionTypes"

const initialState = {
    products: [],
    categories: [],
    isLoading: true
}
export const productReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type){
        case actionTypes.FETCH_PRDOUCTS: 
        // statement
        return{ ...state, products: payload, isLoading: false}
        case actionTypes.FETCH_CATEGORIES: 
        return {...state, categories: payload}
        default:
            return state
    }
}
