import { combineReducers } from "redux";
import contactsReducer from "./contacts";
import highlightReducer from "./highlight";

const allReducers = combineReducers({
  contactsReducer,
  highlightReducer,
});

export default allReducers;
