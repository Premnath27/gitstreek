import {createStore, combineReducers, applyMiddleware} from "redux";
import { routerReducer , routerMiddleware } from 'react-router-redux';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import createHistory from 'history/createBrowserHistory';
import options from "./reducers/optionsReducer";
import question from "./reducers/questionReducer";
import votes from "./reducers/votedReducer";

export const history = createHistory();
const logger = createLogger();

const rootReducer = combineReducers({
  options,
  question,
  votes,
  router: routerReducer
});
const initialState = {};
const middleware = routerMiddleware(history);

const store = createStore(
    rootReducer,
    {},
    applyMiddleware(middleware, thunk)
);

export default store;
