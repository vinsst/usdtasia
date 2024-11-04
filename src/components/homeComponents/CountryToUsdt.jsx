import React from "react";
// import coin1 from "../../assets/img/coinicon1.svg";

// import azerbaijan from "../../assets/img/flags/azerbaijan.svg";
import CountryToCurrBlock from "./CountryToCurrBlock";

import { fiatImageMap } from "../../assets/fiatImageMap";

import { flags } from "../../assets/flags.js";

import { useSelector } from "react-redux";

function CountryToUsdt() {
  const currencies = useSelector((state) => state.exchangeReducer.currencies);

  const fiat = currencies.filter((currency) => currency.type === 1);

  const fiatSymbols = fiat.map((currency) => currency.value);

  const filteredFiatArr = Object.entries(fiatImageMap).filter(([symbol]) =>
    fiatSymbols.includes(symbol)
  );
  return (
    <section className="countryToUsdt">
      {/* <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} /> */}
      {filteredFiatArr.map(([symbol, imgSrc]) => {
        const flagSrc = flags[symbol];
        return (
          <CountryToCurrBlock
            symbol={symbol}
            curr={imgSrc}
            key={symbol}
            flag={flagSrc}
          />
        );
      })}
    </section>
  );
}

export default CountryToUsdt;
