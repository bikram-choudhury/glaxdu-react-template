import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { NewsReducer } from './reducers/news.reducer';

const allReducers = combineReducers({ news: NewsReducer });
export const store = createStore(allReducers, composeWithDevTools(applyMiddleware(thunk)));