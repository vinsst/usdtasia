import React from "react";
import Bitcoin from "../../assets/img/Bitcoin.svg";

function OrderCurrencyGet() {
  return (
    <div className="order_currency">
      <div className="order__currency_left">
        <img src={Bitcoin} alt="" className="order__currency_left_currImg" />
        <div className="order__currency_left_txt">
          <p className="order__currency_left_txt_p_send">Send</p>
          <p className="order__currency_left_txt_p">Tetcher TRC20</p>
        </div>
      </div>
      <div className="order__currency_left_txt order__curr_end">
        <p className="order__currency_left_txt_p_send">Сумма:</p>
        <p className="order__currency_left_txt_p">10.000 USDT</p>
      </div>
    </div>
  );
}

export default OrderCurrencyGet;
