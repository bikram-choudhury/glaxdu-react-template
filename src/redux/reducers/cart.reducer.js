import { UPDATE_CART, SET_CART_ERROR } from "../action.type.constants";

const initialState = {
    items: [],
    error: ''
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case UPDATE_CART:
            return {
                items: [...state.items, payload],
                error: ''
            }
        case SET_CART_ERROR:
            return {
                ...state,
                error: payload.error
            }

        default: return state;
    }
}

export const getCartItems = (state) => state && state.items || [];