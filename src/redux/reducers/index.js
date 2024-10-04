import { combineReducers } from "redux";
import contactsReducer from "./contacts";
import highlightReducer from "./highlight";
import loginReducer from "./login";
import exchangeReducer from "./exchange";
import currCryptoRatesReducer from "./currCryptoRates";

const allReducers = combineReducers({
  contactsReducer,
  highlightReducer,
  loginReducer,
  exchangeReducer,
  currCryptoRatesReducer,
});

export default allReducers;
