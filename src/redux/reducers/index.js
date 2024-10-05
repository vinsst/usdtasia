import { combineReducers } from "redux";
import contactsReducer from "./contacts";
import highlightReducer from "./highlight";
import loginReducer from "./login";
import exchangeReducer from "./exchange";
import currCryptoRatesReducer from "./currCryptoRates";
import currCryptoCurrChooseReducer from "./currCryptoCurrChoose";

const allReducers = combineReducers({
  contactsReducer,
  highlightReducer,
  loginReducer,
  exchangeReducer,
  currCryptoRatesReducer,
  currCryptoCurrChooseReducer,
});

export default allReducers;
