import { combineReducers } from "redux";
import HomeReducer from "./reducers/home/home.reducer";
import MobileAppReducer from "./reducers/services/mob-app/mob-app.reducer";

export default combineReducers({
    HomeReducer
});