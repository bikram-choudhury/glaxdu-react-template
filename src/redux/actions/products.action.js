import { SET_PRODUCTS, SET_PRODUCTS_ERROR } from "../action.type.constants";
import { getProducts } from "../../api/products.api";

export const setProducts = (products) => {
    return {
        type: SET_PRODUCTS,
        payload: { list: products }
    }
}

export const setProductsError = (message) => {
    return {
        type: SET_PRODUCTS_ERROR,
        payload: { error: message }
    }
}

export const fetchProducts = () => {
    return (dispatch, getState) => {
        getProducts()
            .then(response => {
                response && dispatch(setProducts(response))
            })
            .catch(error => dispatch(setProductsError(error.message)))
    }
}