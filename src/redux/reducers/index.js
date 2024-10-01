import { combineReducers } from "redux";
import contactsReducer from "./contacts";
import highlightReducer from "./highlight";
import loginReducer from "./login";

const allReducers = combineReducers({
  contactsReducer,
  highlightReducer,
  loginReducer,
});

export default allReducers;
