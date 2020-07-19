import { SAVE_ORDER_FOR_CHECKOUT } from "../action.type.constants";

const initialState = { order: {} };

export const checkoutReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SAVE_ORDER_FOR_CHECKOUT:
            return {
                order: { ...payload }
            };
        default: return state;
    }
}

export const getOrderForCheckout = (state) => state ? state.order : {};