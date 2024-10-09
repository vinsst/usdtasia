import { combineReducers } from "redux";
import contactsReducer from "./contacts";
import highlightReducer from "./highlight";
import loginReducer from "./login";
import exchangeReducer from "./exchange";
import currCryptoRatesReducer from "./currCryptoRates";
import currCryptoCurrChooseReducer from "./currCryptoCurrChoose";
import sendNumReducer from "./sendNum";

const allReducers = combineReducers({
  contactsReducer,
  highlightReducer,
  loginReducer,
  exchangeReducer,
  currCryptoRatesReducer,
  currCryptoCurrChooseReducer,
  sendNumReducer,
});

export default allReducers;
