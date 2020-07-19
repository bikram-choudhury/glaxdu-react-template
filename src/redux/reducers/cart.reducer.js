import { UPDATE_CART, SET_CART_ERROR, REPLACE_CART } from "../action.type.constants";

const initialState = {
    items: [],
    error: ''
};

export const cartReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case REPLACE_CART:
            return {
                items: [...payload],
                error: ''
            }
        case UPDATE_CART:
            return {
                items: [payload, ...state.items],
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

export const getCartItems = (state) => state ? state.items : initialState.items;