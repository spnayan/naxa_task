import fetchReducer from "./fetchReducer";
import { combineReducers } from "redux";

export default combineReducers({
  fetchData: fetchReducer,
});
