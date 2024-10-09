import React from "react";
import QuickCurrDropItem from "./QuickCurrDropItem";

import { useSelector, useDispatch } from "react-redux";
import { setSendCurrency, setGetCurrency } from "../../redux/actions";
import { fiatImageMap } from "../../assets/fiatImageMap";
import { currencyImageMap } from "../../assets/currencyImageMap";

function QuickCurrDrop({ type }) {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.exchangeReducer.currencies
  );
  const fiatCurrencies = Object.keys(fiatImageMap).map((fiat) => ({
    value: fiat,
    type: "fiat",
  }));

  const allCurrencies = [...selectedCurrency, ...fiatCurrencies];

  const handleClick = (currValue) => {
    if (type === "Send") {
      dispatch(setSendCurrency(currValue));
    } else if (type === "Get") {
      dispatch(setGetCurrency(currValue));
    }
  };
  const imgArrays = { ...fiatImageMap, ...currencyImageMap };

  return (
    <div className="quick__curency_dropdown">
      {allCurrencies.map((currency, index) => {
        const imgSrc = imgArrays[currency.value];
        return (
          <QuickCurrDropItem
            key={index}
            name={currency.value}
            onClick={() => handleClick(currency.value)}
            imgSrc={imgSrc}
          />
        );
      })}
    </div>
  );
}

export default QuickCurrDrop;
