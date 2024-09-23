import React, { useState } from "react";
import arrow_down from "../../assets/img/arrow_down.svg";
import QuickCurrDrop from "./QuickCurrDrop";

function CurrChoose({ img, txt, number, symb, status, input }) {
  const [dropdown, setDropdown] = useState(false);

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const validInput = /^\d*\.?\d*$/.test(inputValue);

    if (validInput) {
      setValue(inputValue);
    }
  };

  const showDropdown = () => {
    setDropdown(!dropdown);
  };
  return (
    <div className="quick__curency_box">
      <div className="quick__curency_box_side1" onClick={showDropdown}>
        <img src={img} alt="" className="quick__curency_box_currency_img" />
        <div className="quick__curency_box_currency__container">
          <p className="quick__curency_box_currency_send">{status}</p>
          <p className="quick__curency_box_currency_name">{txt}</p>
        </div>
        <img src={arrow_down} alt="" className="quick__curency_arr" />
        {dropdown && <QuickCurrDrop />}
      </div>
      <div className="quick__curency_box_line"></div>
      <div className="quick__curency_box_side2">
        {number && (
          <div className="quick__curency_box_currency_value">{number}</div>
        )}
        {input && (
          <input
            className="quick__curency_box_currency_value quick__curency_box_currency_value_input"
            type="text"
            placeholder="0.05"
            min="0"
            step="0.01"
            onChange={handleChange}
            value={value}
          />
        )}
        &nbsp;
        <div className="quick__curency_box_currency_init">{symb}</div>
      </div>
    </div>
  );
}

export default CurrChoose;
