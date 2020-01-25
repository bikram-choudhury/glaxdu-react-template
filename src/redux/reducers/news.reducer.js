import { SET_NEWS, SET_NEWS_ERROR, SET_TAG, REPLACE_NEWS } from "../action.type.constants";

const initialState = {
    list: [],
    tag: '',
    error: ''
}

export const NewsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_NEWS:
            return {
                ...state,
                list: [...state.list, ...payload.list]
            }
        case SET_TAG:
            return {
                ...state,
                tag: payload.tag
            }
        case SET_NEWS_ERROR:
            return {
                ...state,
                error: payload.error
            }
        case REPLACE_NEWS:
            return {
                ...state,
                list: [...payload.list]
            }
        default: return state;
    }
}

export const getNewsTag = (state) => state.tag;
export const getNewsList = (state) => state.list;