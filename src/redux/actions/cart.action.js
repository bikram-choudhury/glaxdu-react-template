import { UPDATE_CART, SET_CART_ERROR } from "../action.type.constants";

export const updateCartItems = (item) => {
    return {
        type: UPDATE_CART,
        payload: item
    }
};

export const setCartError = (message) => {
    return {
        type: SET_CART_ERROR,
        payload: { error: message }
    }
};

export const addToCart = (payload) => {
    return (dispatch) => {
        addProductToCart(payload)
            .then(response => {
                dispatch(updateCartItems(response));
            })
            .catch(error => dispatch(setCartError(error.message)))
    }
}