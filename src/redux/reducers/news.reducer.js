import { SET_NEWS, SET_NEWS_ERROR, SET_TAG, REPLACE_NEWS, SET_TITLE } from "../action.type.constants";

const initialState = {
    list: [],
    tag: '',
    selctedNewsTitle: '',
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
        case SET_TITLE:
            return {
                ...state,
                selctedNewsTitle: payload.title
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

export const getNewsTag = (state) => state && state.tag || initialState.tag;
export const getNewsList = (state) => state && state.list || initialState.list;
export const getSelectedNewsTitle = (state) => state && state.selctedNewsTitle || initialState.selctedNewsTitle;