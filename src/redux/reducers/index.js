import { combineReducers } from "redux";
import contactsReducer from "./contacts";
import highlightReducer from "./highlight";
import loginReducer from "./login";
import exchangeReducer from "./exchange";

const allReducers = combineReducers({
  contactsReducer,
  highlightReducer,
  loginReducer,
  exchangeReducer,
});

export default allReducers;
