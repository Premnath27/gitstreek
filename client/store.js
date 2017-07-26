import {createStore, combineReducers, applyMiddleware} from "redux";
import { routerReducer , routerMiddleware } from 'react-router-redux';
import thunk from "redux-thunk";
import createHistory from 'history/createBrowserHistory';
import data from "./reducers/userReducer";

export const history = createHistory();

const reducers = combineReducers({
  data,
  router: routerReducer
});
const initialState = {};
const middleware = routerMiddleware(history);

const store = createStore(
    reducers,
    applyMiddleware(middleware, thunk)
);

export default store;
