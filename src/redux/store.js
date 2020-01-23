import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState, saveState } from './storage';
import thunk from 'redux-thunk';
import { NewsReducer } from './reducers/news.reducer';

const persistedState = loadState();
const allReducers = combineReducers({ news: NewsReducer });
export const store = createStore(allReducers, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
    saveState(store.getState());
});