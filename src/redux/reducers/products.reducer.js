import { SET_PRODUCTS, SET_PRODUCTS_ERROR, SET_TOTAL_PRODUCT_COUNT } from "../action.type.constants";

const initialState = {
    list: [],
    error: '',
    totalCount: 0
}

export const ProductReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_PRODUCTS:
            return {
                ...state,
                list: [...payload.list]
            }
        case SET_TOTAL_PRODUCT_COUNT:
            return {
                ...state,
                totalCount: payload.totalCount
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
export const getProductTotalCount = (state) => state.totalCount;