import React from "react";
import Ethereum from "../../assets/img/Ethereum.svg";
import Bitcoin from "../../assets/img/Bitcoin.svg";
import SOL from "../../assets/img/SOL.svg";
import WrappedBNB from "../../assets/img/WrappedBNB.svg";
import tether_usdtlogo_small from "../../assets/img/tether_usdtlogo_small.svg";
import RatesCurrEl from "./RatesCurrEl";

function Rates() {
  return (
    <section className="rates">
      <p className="rates_span">CURRENT EXCHANGE RATES</p>
      <div className="rates_currency_container">
        <RatesCurrEl
          img={tether_usdtlogo_small}
          symbol="USDT"
          isCurr={"rates__current_curr"}
        />
        <RatesCurrEl img={Bitcoin} symbol="BTC" />
        <RatesCurrEl img={Ethereum} symbol="ETH" />
        <RatesCurrEl img={SOL} symbol="SOLAN" />
        <RatesCurrEl img={WrappedBNB} symbol="BNB" />
      </div>
    </section>
  );
}

export default Rates;
