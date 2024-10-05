const initialState = {
  sendCurrency: "BTC",
  getCurrency: "USDT",
};

const currCryptoCurrChooseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEND_CURRENCY":
      return { ...state, sendCurrency: action.payload };
    case "SET_GET_CURRENCY":
      return { ...state, getCurrency: action.payload };
    default:
      return state;
  }
};

export default currCryptoCurrChooseReducer;
