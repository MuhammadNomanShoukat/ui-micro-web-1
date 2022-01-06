import AllReducers from "./root-reducer";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const middleware = [logger];
const store = createStore(AllReducers, applyMiddleware(...middleware));

export default store;