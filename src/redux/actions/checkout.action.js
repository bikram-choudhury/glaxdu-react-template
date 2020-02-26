import { SAVE_ORDER_FOR_CHECKOUT } from "../action.type.constants";

export const processOrderForCheckout = (order) => {
    return {
        type: SAVE_ORDER_FOR_CHECKOUT,
        payload: order
    }
}