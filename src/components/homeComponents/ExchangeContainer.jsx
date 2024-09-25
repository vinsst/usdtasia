import React, { useState } from "react";
import autorenew from "../../assets/img/autorenew.svg";
import autorenew2 from "../../assets/img/autorenew2.svg";
import tCurr from "../../assets/img/tCurr.svg";
import done from "../../assets/img/done.svg";
import CurrChoose from "./CurrChoose";
import Bitcoin from "../../assets/img/Bitcoin.svg";
import Wallet from "./Wallet";
import { Link } from "react-router-dom";

function ExchangeContainer() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="exchange_container">
      <section className="quick__exchange_container">
        <div className="quick__exchange_border"></div>
      </section>
      <div className="exchange_container_padding">
        <section className="quick__currencyChoioce_block">
          <CurrChoose
            img={Bitcoin}
            txt="Bitcoin BTC"
            input={true}
            symb="BTC"
            status="Send"
          />
          <img
            src={autorenew}
            alt=""
            className="quick__currencyChoioce_autorenew"
          />
          <img
            src={autorenew2}
            alt=""
            className="quick__currencyChoioce_autorenewMobile_img"
          />

          <CurrChoose
            img={tCurr}
            txt="Tetcher TRC20"
            number="234234"
            symb="TRC20"
            status="Get"
          />
        </section>
        <section className="quick__exchange_currenct_span">
          <div className="quick__exchange_currenct_span_1 quick__exchange_currenct_span_1_1_isInMobile">
            <div className="quick__exchange_currenct_span_1_1">
              Курс обмена: 1 BTC ≈ 63513.537 USDT
            </div>
            <div className="quick__exchange_currenct_span_1_2">Min:10 BTC</div>
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
        <Wallet />
        <section className="quick__exchange_done">
          <div
            className="quick__exchange_done_rect"
            onClick={handleCheckboxChange}
          >
            {checked && (
              <img src={done} alt="" className="quick__exchange_img" />
            )}
          </div>
          <span className="quick__exchange_span">
            Используя сайт и создавая обмен, вы соглашаетесь с{" "}
            <span className="change_span_done_blue">
              Условиями обслуживания
            </span>
             и 
            <span className="change_span_done_blue">
              Политикой конфиденциальности UsdtAsia.
            </span>
          </span>
        </section>

        {checked ? (
          <Link to="/zayavka" className="exchange_btn">
            <button className="quick__exchange_btn">EXCHANGER NOW</button>
          </Link>
        ) : (
          <section className="exchange_btn">
            <button
              className="quick__exchange_btn 
              quick__exchange_btn_nonActive"
            >
              EXCHANGER NOW
            </button>
          </section>
        )}
      </div>
    </div>
  );
}

export default ExchangeContainer;
