import React, { useState } from "react";
import RatesCurrEl from "./RatesCurrEl";

import { currencyImageMap } from "../../assets/currencyImageMap";

import { useSelector } from "react-redux";

function Rates() {
  const currencies = useSelector((state) => state.exchangeReducer.currencies);

  console.log(currencies);
  return (
    <section className="rates">
      <p className="rates_span">CURRENT EXCHANGE RATES</p>
      <div className="rates_currency_container">
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
            />
          );
        })}
      </div>
    </section>
  );
}

export default Rates;
