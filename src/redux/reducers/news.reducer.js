import { SET_NEWS, SET_NEWS_ERROR } from "../action.type.constants";

const initialState = {
    list: [],
    error: ''
}

export const NewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEWS:
            return {
                ...state,
                list: [...state.list, ...action.payload]
            }
        case SET_NEWS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default: return state;
    }
}