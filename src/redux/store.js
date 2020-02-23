import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './storage';
import thunk from 'redux-thunk';
import { reducers } from './reducers';

const persistedState = loadState();
export const store = createStore(reducers, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    const applicationState = store.getState();
    const newsstate = applicationState && applicationState.news;
    const authState = applicationState && applicationState.auth;
    const productState = applicationState && applicationState.products;
    const cartState = applicationState && applicationState.cart;
    saveState({
        news: { ...newsstate, error: '' },
        products: { ...productState, error: '' },
        cart: { ...cartState, error: '' },
        auth: { ...authState }
    });
});