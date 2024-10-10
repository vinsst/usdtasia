import React from "react";
import tCurr from "../../assets/img/tCurr.svg";
import arrRight from "../../assets/img/arrRight.svg";

function OrderCurrencyMobile() {
  return (
    <section className="quick__exchange_curr_mob">
      <div className="order_currency_mob">
        <div className="order_currency_mob_txt">
          <p className="order_currency_mob_txt_up">1400.00 USDT</p>
          <p className="order_currency_mob_txt_down">Tetcher Trc20</p>
        </div>
        <img src={tCurr} alt="" className="order_currency_mob_img" />
      </div>
      <img src={arrRight} alt="" className="order_currency_arr_right_mob" />
      <div className="order_currency_mob order_currency_mob_right">
        <img src={tCurr} alt="" className="order_currency_mob_img" />
        <div className="order_currency_mob_txt">
          <p className="order_currency_mob_txt_up">1400.00 USDT</p>
          <p className="order_currency_mob_txt_down">Tetcher Trc20</p>
        </div>
      </div>
    </section>
  );
}

export default OrderCurrencyMobile;
