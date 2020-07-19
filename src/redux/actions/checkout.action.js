import { SAVE_ORDER_FOR_CHECKOUT } from "../action.type.constants";
import { saveOrderDetailsAfterCheckout } from "../../api/checkout.api";
import { removeItem } from "./cart.action";
import { getCartItems } from "../reducers";

export const processOrderForCheckout = (order) => {
    return {
        type: SAVE_ORDER_FOR_CHECKOUT,
        payload: order
    }
}

export const saveOrderForCheckout = (order, success) => {
    return (dispatch, getState) => {
        saveOrderDetailsAfterCheckout(order)
            .then(response => {
                if (response) {
                    dispatch(processOrderForCheckout({}));
                    const cartItems = getCartItems(getState());
                    // TODO: remove processed items from both client & server cart
                    // Trigger an async action to delete the item from DB
                    // And on success remove the item from store
                    for (const cart of cartItems) {
                        dispatch(removeItem(cart.id));
                    }
                    success.navigateToHome();
                }
            })
            .catch(error => console.error(error))
    }
}