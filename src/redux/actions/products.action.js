import {
    SET_PRODUCTS,
    SET_PRODUCTS_ERROR,
    SET_TOTAL_PRODUCT_COUNT,
    SET_SELECT_PRODUCT_ID
} from "../action.type.constants";
import { getProducts, getTotalProductCount, saveReviewForProduct, addProductToCart } from "../../api/products.api";
import { getProductList, getSelectedProduct } from "../reducers";


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

export const setSelectedProductId = (id) => {
    return {
        type: SET_SELECT_PRODUCT_ID,
        payload: { id }
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

export const saveProductReview = (reviews, productId) => {
    return (dispatch, getState) => {
        const selectedProduct = getSelectedProduct(getState());
        selectedProduct.reviews.push(reviews);
        saveReviewForProduct(selectedProduct, productId)
            .then(productResponse => {
                const productsList = getProductList(getState());
                dispatch(setProducts(productsList));

            })
            .catch(error => dispatch(setProductsError(error.message)))
    }
}

export const addToCart = (payload) => {
    return (dispatch) => {
        addProductToCart(payload)
            .then(response => {
                console.log(response);
            })
            .catch(error => dispatch(setProductsError(error.message)))
    }
}