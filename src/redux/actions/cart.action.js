import { UPDATE_CART, SET_CART_ERROR, REPLACE_CART } from "../action.type.constants";
import { addProductToCart, removeProductFromCart } from "../../api/cart.api";
import { getCartItems } from "../reducers";

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

export const replaceCartItems = (items) => {
    return {
        type: REPLACE_CART,
        payload: items
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

export const removeItem = (cartItemId) => {
    return (dispatch, getState) => {
        removeProductFromCart(cartItemId)
            .then(response => {
                const cartItems = getCartItems(getState());
                const modifiedCartItems = cartItems.filter(item => item.id != cartItemId);
                dispatch(replaceCartItems(modifiedCartItems));
            })
            .catch(error => dispatch(setCartError(error.message)))
    }
}