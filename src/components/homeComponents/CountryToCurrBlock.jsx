import React from "react";
import see_more from "../../assets/img/see-more-ic.svg";
import graph from "../../assets/img/graph.svg";

function CountryToCurrBlock({ symbol, curr }) {
  return (
    <div className="countryToUsdt_block">
      <div className="countryToUsdt__block_side1">
        <div className="countryToUsdt__block_side1_left">
          <img
            src={curr}
            alt=""
            className="countryToUsdt__block_side1_left_coin"
          />
          <p className="countryToUsdt__block_side1_left_abr">{symbol}</p>
          {/* <img
            src={flag}
            alt=""
            className="countryToUsdt__block_side1_left_ctr"
          /> */}
        </div>
        <div className="countryToUsdt__block_side1_right">
          <img src={see_more} alt="" className="" />
        </div>
      </div>
      <div className="countryToUsdt__block_line"></div>
      <div className="countryToUsdt__block_side2">
        <div className="countryToUsdt__block_side2_txt">
          <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
          <div className="countryToUsdt__block_side2_txt2">1,80 {symbol}</div>
        </div>
        <img src={graph} alt="" className="countryToUsdt__block_side2_graph" />
      </div>
    </div>
  );
}

export default CountryToCurrBlock;
