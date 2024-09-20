import React from "react";
import arrow_down from "../../assets/img/arrow_down.svg";

function CurrChoose({ img, txt, number, symb, status }) {
  return (
    <div className="quick__curency_box">
      <div className="quick__curency_box_side1">
        <img src={img} alt="" className="quick__curency_box_currency_img" />
        <div className="quick__curency_box_currency_name_container">
          <p className="quick__curency_box_currency_send">{status}</p>
          <p className="quick__curency_box_currency_name">{txt}</p>
        </div>
        <img src={arrow_down} alt="" className="quick__curency_arr" />
      </div>
      <div className="quick__curency_box_line"></div>
      <div className="quick__curency_box_side2">
        <div className="quick__curency_box_currency_value">{number}&nbsp;</div>
        <div className="quick__curency_box_currency_init">{symb}</div>
      </div>
    </div>
  );
}

export default CurrChoose;
