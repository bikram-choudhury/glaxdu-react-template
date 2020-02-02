import { SET_PRODUCTS, SET_PRODUCTS_ERROR } from "../action.type.constants";

const initialState = {
    list: [],
    error: ''
}

export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                list: [...state.list, ...payload.list]
            }
        case SET_PRODUCTS_ERROR:
            return {
                ...state,
                error: payload.error
            }
        default: return state;
    }
}

export const getProductList = (state) => state.list;