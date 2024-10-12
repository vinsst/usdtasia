import React from "react";

function OrderCurrencySend({ fromName, value, img }) {
  return (
    <div className="order_currency">
      <div className="order__currency_left">
        <img src={img} alt="" className="order__currency_left_currImg" />
        <div className="order__currency_left_txt">
          <p className="order__currency_left_txt_p_send">Send</p>
          <p className="order__currency_left_txt_p">{fromName}</p>
        </div>
      </div>
      <div className="order__currency_left_txt order__curr_end">
        <p className="order__currency_left_txt_p_send">Сумма:</p>
        <p className="order__currency_left_txt_p">
          {value} {fromName}
        </p>
      </div>
    </div>
  );
}

export default OrderCurrencySend;
