import React from "react";
import time_line from "../assets/img/time_line.svg";
import order_contact from "../assets/img/order_contact.svg";
import order_email from "../assets/img/order_email.svg";
import order_telegram from "../assets/img/order_telegram.svg";
import time_graph from "../assets/img/time_graph.svg";
import calendar from "../assets/img/calendar.svg";
import Bitcoin from "../assets/img/Bitcoin.svg";
import tCurr from "../assets/img/tCurr.svg";
import arrRight from "../assets/img/arrRight.svg";
import { Link } from "react-router-dom";

function Zayavka() {
  return (
    <main className="homeMain home_container container other_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">ORDER #R905868061</h1>
      </div>
      <div className="exchange_container order_exchange">
        <section className="quick__exchange_container quick__exchange_container_order">
          <div className="quick__exchange_border"></div>
        </section>
        <div className="exchange_container_padding order_padding">
          <section className="quick__exchange_time">
            <div className="exchange__time_el">
              <img src={calendar} alt="" className="exchange__time_img" />
              <p className="exchange__time_span">
                <p className="order_blue">Дата заявки:&nbsp;</p>{" "}
                28.05.2022,11:03 (GMT+03)
              </p>
            </div>
            <img src={time_line} alt="" className="time_line" />
            <div className="exchange__time_el">
              <img src={time_graph} alt="" className="exchange__time_img" />
              <p className="exchange__time_span">
                <p className="order_blue">Курс обмена:&nbsp;</p> 1 BTC = 28856
                USD
              </p>
            </div>
          </section>
          <section className="quick__exchange_curr order_exch_curr">
            <div className="order_currency">
              <div className="order__currency_left">
                <img
                  src={tCurr}
                  alt=""
                  className="order__currency_left_currImg"
                />
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
            <div className="order_currency">
              <div className="order__currency_left">
                <img
                  src={Bitcoin}
                  alt=""
                  className="order__currency_left_currImg"
                />
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
          </section>
          <section className="quick__exchange_curr_mob">
            <div className="order_currency_mob">
              <div className="order_currency_mob_txt">
                <p className="order_currency_mob_txt_up">1400.00 USDT</p>
                <p className="order_currency_mob_txt_down">Tetcher Trc20</p>
              </div>
              <img src={tCurr} alt="" className="order_currency_mob_img" />
            </div>
            <img
              src={arrRight}
              alt=""
              className="order_currency_arr_right_mob"
            />
            <div className="order_currency_mob order_currency_mob_right">
              <img src={tCurr} alt="" className="order_currency_mob_img" />
              <div className="order_currency_mob_txt">
                <p className="order_currency_mob_txt_up">1400.00 USDT</p>
                <p className="order_currency_mob_txt_down">Tetcher Trc20</p>
              </div>
            </div>
          </section>
          <section className="order_persInfo">
            <h3 className="order__persInfo_h3">Personal information</h3>
            <div className="order_persInfo_content">
              <div className="order__persInfo_el">
                <img src={order_email} alt="" className="order__persInfo_img" />
                <div className="order__persInfo_emailWord">E-mail:</div>
                <div className="order__persInfo_email">wheper@gmail.com</div>
              </div>
              <div className="order__persInfo_el">
                <img
                  src={order_contact}
                  alt=""
                  className="order__persInfo_img"
                />
                <div className="order__persInfo_emailWord">Name:</div>
                <div className="order__persInfo_email">wheper@gmail.com</div>
              </div>
              <div className="order__persInfo_el">
                <img
                  src={order_telegram}
                  alt=""
                  className="order__persInfo_img"
                />
                <div className="order__persInfo_emailWord">Telegram:</div>
                <div className="order__persInfo_email">@lancerpro</div>
              </div>
            </div>
          </section>
          <section className="order_status">
            <p className="order__status_p">
              Статус обработки заявки R905868061
            </p>
            <p className="order__status_p">Статус: Оплата</p>
            <p className="order__status_p order__status_p_mob">
              Статус заявки R905868061
            </p>
            <p className="order__status_p order__status_p_mob mob_oplachena">
              Оплачена
            </p>
          </section>
          <section className="order_instruction">
            <h3 className="order__instruction_h3">WHAT SHOULD BE DONE:</h3>
            <div className="order__instruction_punkty">
              <div className="order__instruction_punkt">
                <div className="punkt_number">1</div>
                <p className="punkt_p">
                  Напишите отзыв на Bestchange Сервис отправит на Ваш email
                  ссылку для активации отзыва
                </p>
              </div>
              <div className="order__instruction_punkt">
                <div className="punkt_number">2</div>
                <p className="punkt_p">Активируйте отзыв по ссылке.</p>
              </div>
              <div className="order__instruction_punkt">
                <div className="punkt_number">3</div>
                <p className="punkt_p">
                  Сделайте скриншот Вашего отзыва и пришлите его в чат
                  Оператору.
                </p>
              </div>
              <div className="order__instruction_punkt">
                <div className="punkt_number">4</div>
                <p className="punkt_p">
                  Оператор зачислит 3 BYN на Ваш счет или телефон
                </p>
              </div>
            </div>
          </section>
          <Link to="/zayavka2" className="exchange_btn">
            <button className="quick__exchange_btn order_btn">
              ОПЛАТИТЬ ЗАЯВКУ
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Zayavka;
