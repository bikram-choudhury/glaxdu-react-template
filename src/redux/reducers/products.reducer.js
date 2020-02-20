import { SET_PRODUCTS, SET_PRODUCTS_ERROR, SET_TOTAL_PRODUCT_COUNT, SET_SELECT_PRODUCT_SKU } from "../action.type.constants";

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
        case SET_SELECT_PRODUCT_SKU:
            return {
                ...state,
                selectedProduct: payload.sku
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
export const getSelectedProductSku = (state) => state.selectedProduct;