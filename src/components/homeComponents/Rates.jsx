import React, { useState } from "react";
import RatesCurrEl from "./RatesCurrEl";

import { currencyImageMap } from "../../assets/currencyImageMap";

import { useSelector, useDispatch } from "react-redux";
import { currCrypto_rates } from "../../redux/actions";

function Rates() {
  const dispatch = useDispatch();
  const selectedCurrency = useSelector(
    (state) => state.currCryptoRatesReducer.crypto
  );
  const currencies = useSelector((state) => state.exchangeReducer.currencies);

  const handleClick = (currValue) => {
    dispatch(currCrypto_rates(currValue));
  };

  return (
    <section className="rates">
      <p className="rates_span">CURRENT EXCHANGE RATES</p>
      <div className="rates_currency_container">
        {" "}
        {/* <RatesCurrEl
          img={tether_usdtlogo_small}
          symbol="USDT"
          isCurr={"rates__current_curr"}
        />
        <RatesCurrEl img={Bitcoin} symbol="BTC" />
        <RatesCurrEl img={Ethereum} symbol="ETH" />
        <RatesCurrEl img={SOL} symbol="SOLAN" />
        <RatesCurrEl img={WrappedBNB} symbol="BNB" /> */}
        {currencies.map((currency) => {
          const imgSrc = currencyImageMap[currency.value];
          return (
            <RatesCurrEl
              symbol={currency.value}
              key={currency.id}
              img={imgSrc}
              isCurr={
                selectedCurrency === currency.value ? "rates__current_curr" : ""
              }
              onClick={() => handleClick(currency.value)}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Rates;
