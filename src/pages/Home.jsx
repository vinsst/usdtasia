import React from "react";
import autorenew from "../assets/img/autorenew.svg";
import Bitcoin from "../assets/img/Bitcoin.svg";
import tCurr from "../assets/img/tCurr.svg";
import wallet from "../assets/img/wallet.svg";
import content_copy from "../assets/img/content_copy.svg";
import qr_code from "../assets/img/qr_code.svg";
import done from "../assets/img/done.svg";
import arrow_down from "../assets/img/arrow_down.svg";

function restore() {
  return (
    <main className="homeMain home_container container">
      <div className="home__h1_container">
        <h1 className="home_h1">USDT ASIA CRYPTOCURRENCY EXCHANGE</h1>
      </div>
      <section className="quick__exchange_container">
        <div className="quick__exchange_border">
          <section className="quick__currencyChoioce_block">
            <div className="quick__currencyChoioce_currency_container">
              <div className="quick__curency_box">
                <div className="quick__curency_box_side1">
                  <img
                    src={Bitcoin}
                    alt=""
                    className="quick__curency_box_currency_img"
                  />
                  <div className="quick__curency_box_currency_name_container">
                    <p className="quick__curency_box_currency_send">Send</p>
                    <p className="quick__curency_box_currency_name">
                      Bitcoin BTC
                    </p>
                  </div>
                  <img src={arrow_down} alt="" className="quick__curency_arr" />
                </div>
                <div className="quick__curency_box_line"></div>
                <div className="quick__curency_box_side2">
                  <div className="quick__curency_box_currency_value">
                    0.01689025&nbsp;
                  </div>
                  <div className="quick__curency_box_currency_init">BTC</div>
                </div>
              </div>
              {/* <div className="quick__curency_span">
                <div className="quick__curency_span_1">
                  Курс обмена: 1 BTC ≈ 63513.537 USDT
                </div>
                <div className="quick__curency_span_2">Min:10 BTC</div>
              </div> */}
            </div>
            <img
              src={autorenew}
              alt=""
              className="quick__currencyChoioce_autorenew"
            />
            <div className="quick__curency_box">
              <div className="quick__curency_box_side1">
                <img
                  src={tCurr}
                  alt=""
                  className="quick__curency_box_currency_img"
                />
                <div className="quick__curency_box_currency_name_container">
                  <p className="quick__curency_box_currency_send">Send</p>
                  <p className="quick__curency_box_currency_name">
                    Tetcher TRC20
                  </p>
                </div>
                <img src={arrow_down} alt="" className="quick__curency_arr" />
              </div>
              <div className="quick__curency_box_line"></div>
              <div className="quick__curency_box_side2">
                <div className="quick__curency_box_currency_value">
                  0.01689025&nbsp;
                </div>
                <div className="quick__curency_box_currency_init">BTC</div>
              </div>
            </div>
          </section>
          <section className="quick__exchange_currenct_span">
            <div className="quick__exchange_currenct_span_1">
              <div className="quick__exchange_currenct_span_1_1">
                Курс обмена: 1 BTC ≈ 63513.537 USDT
              </div>
              <div className="quick__exchange_currenct_span_1_2">
                Min:10 BTC
              </div>
            </div>
            <div className="quick__exchange_currenct_span_1">
              <div className="quick__exchange_currenct_span_1_1">
                Резерв: 635 13.537 USDT
              </div>
              <div className="quick__exchange_currenct_span_1_2">
                Min: 1006.04 USDT
              </div>
            </div>
          </section>
          <section className="quick__exchange_trcAdress_container">
            <div className="trcAdress_wallet">
              <img src={wallet} alt="" className="wallet_img" />
              <input type="text" className="wallet_input" />
            </div>
            <div className="trcAdress_imgs">
              <img src={content_copy} alt="" className="trcAdress_imgs_img" />
              <img src={qr_code} alt="" className="trcAdress_imgs_img" />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

export default restore;
