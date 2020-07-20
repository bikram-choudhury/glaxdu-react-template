import { SET_PRODUCTS, SET_PRODUCTS_ERROR, SET_TOTAL_PRODUCT_COUNT, SET_SELECT_PRODUCT_ID } from "../action.type.constants";

const initialState = {
    list: [],
    error: '',
    totalCount: 0,
    selectedProduct: ''
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
        case SET_SELECT_PRODUCT_ID:
            return {
                ...state,
                selectedProduct: payload.id
            }
        case SET_PRODUCTS_ERROR:
            return {
                ...state,
                error: payload.error
            }
        default: return state;
    }
}

export const getProductList = (state) => state ? state.list : initialState.list;
export const getProductTotalCount = (state) => state ? state.totalCount : initialState.totalCount;
export const getSelectedProductId = (state) => state ? state.selectedProduct : initialState.selectedProduct;