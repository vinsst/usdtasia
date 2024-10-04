import React from "react";
// import coin1 from "../../assets/img/coinicon1.svg";

// import azerbaijan from "../../assets/img/flags/azerbaijan.svg";
import CountryToCurrBlock from "./CountryToCurrBlock";

import { fiatImageMap } from "../../assets/fiatImageMap";

function CountryToUsdt() {
  const fiatArr = Object.entries(fiatImageMap);
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
      {fiatArr.map(([symbol, imgSrc]) => {
        return (
          <CountryToCurrBlock symbol={symbol} curr={imgSrc} key={symbol} />
        );
      })}
    </section>
  );
}

export default CountryToUsdt;
