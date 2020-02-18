import { SET_PRODUCTS, SET_PRODUCTS_ERROR, SET_TOTAL_PRODUCT_COUNT, SET_SELECT_PRODUCT_SKU } from "../action.type.constants";
import { getProducts, getTotalProductCount } from "../../api/products.api";

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: { list: products }
    }
}

export const setTotalProductCount = (totalCount) => {
    return {
        type: SET_TOTAL_PRODUCT_COUNT,
        payload: { totalCount: totalCount }
    }
}

export const setProductsError = (message) => {
    return {
        type: SET_PRODUCTS_ERROR,
        payload: { error: message }
    }
}

export const setSelectedProductSku = (sku) => {
    return {
        type: SET_SELECT_PRODUCT_SKU,
        payload: { sku }
    }
}

export const fetchProducts = (pageNumber) => {
    return (dispatch, getState) => {
        const changeThisName = [getProducts(pageNumber), getTotalProductCount()];
        Promise.all(changeThisName)
            .then(([products, totalProductCount]) => {
                products && dispatch(setProducts(products))
                totalProductCount && dispatch(setTotalProductCount(totalProductCount))
            })
            .catch(error => dispatch(setProductsError(error.message)))
    }
}