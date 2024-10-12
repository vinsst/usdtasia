import React from "react";
import arrRight from "../../assets/img/arrRight.svg";

function OrderCurrencyMobile({
  fromName,
  toName,
  toValue,
  fromValue,
  toImg,
  fromImg,
}) {
  return (
    <section className="quick__exchange_curr_mob">
      <div className="order_currency_mob">
        <div className="order_currency_mob_txt">
          <p className="order_currency_mob_txt_up">
            {fromValue} {fromName}
          </p>
        </div>
        <img src={fromImg} alt="" className="order_currency_mob_img" />
      </div>
      <img src={arrRight} alt="" className="order_currency_arr_right_mob" />
      <div className="order_currency_mob order_currency_mob_right">
        <img src={toImg} alt="" className="order_currency_mob_img" />
        <div className="order_currency_mob_txt">
          <p className="order_currency_mob_txt_up">
            {" "}
            {toValue} {toName}
          </p>
        </div>
      </div>
    </section>
  );
}

export default OrderCurrencyMobile;
