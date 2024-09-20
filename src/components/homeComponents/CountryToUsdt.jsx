import React from "react";
import coin1 from "../../assets/img/coinicon1.svg";

import azerbaijan from "../../assets/img/flags/azerbaijan.svg";
import CountryToCurrBlock from "./CountryToCurrBlock";

function CountryToUsdt() {
  return (
    <section className="countryToUsdt">
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
      <CountryToCurrBlock flag={azerbaijan} curr={coin1} />
    </section>
  );
}

export default CountryToUsdt;
