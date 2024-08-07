import React from "react";
import autorenew from "../assets/img/autorenew.svg";
import Bitcoin from "../assets/img/Bitcoin.svg";
import tCurr from "../assets/img/tCurr.svg";
import wallet from "../assets/img/wallet.svg";
import content_copy from "../assets/img/content_copy.svg";
import qr_code from "../assets/img/qr_code.svg";
import done from "../assets/img/done.svg";
import arrow_down from "../assets/img/arrow_down.svg";
import tether_usdtlogo_small from "../assets/img/tether_usdtlogo_small.svg";
import Ethereum from "../assets/img/Ethereum.svg";
import SOL from "../assets/img/SOL.svg";
import WrappedBNB from "../assets/img/WrappedBNB.svg";
import see_more from "../assets/img/see-more-ic.svg";
import coin1 from "../assets/img/coinicon1.svg";
import coin2 from "../assets/img/coinicon2.svg";
import coin3 from "../assets/img/coinicon3.svg";
import coin4 from "../assets/img/coinicon4.svg";
import coin5 from "../assets/img/coinicon5.svg";
import coin6 from "../assets/img/coinicon6.svg";
import coin7 from "../assets/img/coinicon7.svg";

import graph from "../assets/img/graph.svg";

import azerbaijan from "../assets/img/flags/azerbaijan.svg";

import mouse1 from "../assets/img/mouse1.png";
import arrRight from "../assets/img/arrRight.svg";
import arrowUpDown from "../assets/img/arrowUpDown.svg";
import infoSuccess from "../assets/img/infoSuccess.svg";

function restore() {
  return (
    <main className="homeMain home_container container">
      <div className="home__h1_container">
        <h1 className="home_h1">USDT ASIA CRYPTOCURRENCY EXCHANGE</h1>
        <h1 className="home_h1_mobile">LIGHTNING CRYPTOCURRENCY EXCHANGE</h1>
      </div>
      <div className="exchange_container">
        <section className="quick__exchange_container">
          <div className="quick__exchange_border"></div>
        </section>
        <div className="exchange_container_padding">
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
              <input
                type="text"
                className="wallet_input"
                placeholder="Your Tether (TRC20) address"
              />
            </div>
            <div className="trcAdress_imgs">
              <img src={content_copy} alt="" className="trcAdress_imgs_img" />
              <img src={qr_code} alt="" className="trcAdress_imgs_img" />
            </div>
          </section>
          <section className="quick__exchange_done">
            <div className="quick__exchange_done_rect">
              <img src={done} alt="" className="quick__exchange_img" />
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
          <section className="exchange_btn">
            <button className="quick__exchange_btn">EXCHANGER NOW</button>
          </section>
        </div>
      </div>
      <section className="rates">
        <p className="rates_span">CURRENT EXCHANGE RATES</p>
        <div className="rates_currency_container">
          <div className="rates__curr_el rates__current_curr">
            <img
              src={tether_usdtlogo_small}
              alt=""
              className="currency__el_img"
            />
            <p className="currency__el_abr">USDT</p>
          </div>
          <div className="rates__curr_el">
            <img src={Bitcoin} alt="" className="currency__el_img" />
            <p className="currency__el_abr">BTC</p>
          </div>
          <div className="rates__curr_el">
            <img src={Ethereum} alt="" className="currency__el_img" />
            <p className="currency__el_abr">ETH</p>
          </div>
          <div className="rates__curr_el">
            <img src={SOL} alt="" className="currency__el_img" />
            <p className="currency__el_abr">SOLAN</p>
          </div>
          <div className="rates__curr_el">
            <img src={WrappedBNB} alt="" className="currency__el_img" />
            <p className="currency__el_abr">BNB</p>
          </div>
        </div>
      </section>
      <section className="countryToUsdt">
        <div className="countryToUsdt_block">
          <div className="countryToUsdt__block_side1">
            <div className="countryToUsdt__block_side1_left">
              <img
                src={coin1}
                alt=""
                className="countryToUsdt__block_side1_left_coin"
              />
              <p className="countryToUsdt__block_side1_left_abr">AZN</p>
              <img
                src={azerbaijan}
                alt=""
                className="countryToUsdt__block_side1_left_ctr"
              />
            </div>
            <div className="countryToUsdt__block_side1_right">
              <img src={see_more} alt="" className="" />
            </div>
          </div>
          <div className="countryToUsdt__block_line"></div>
          <div className="countryToUsdt__block_side2">
            <div className="countryToUsdt__block_side2_txt">
              <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
              <div className="countryToUsdt__block_side2_txt2">1,80 AZN</div>
            </div>
            <img
              src={graph}
              alt=""
              className="countryToUsdt__block_side2_graph"
            />
          </div>
        </div>
        <div className="countryToUsdt_block">
          <div className="countryToUsdt__block_side1">
            <div className="countryToUsdt__block_side1_left">
              <img
                src={coin1}
                alt=""
                className="countryToUsdt__block_side1_left_coin"
              />
              <p className="countryToUsdt__block_side1_left_abr">AZN</p>
              <img
                src={azerbaijan}
                alt=""
                className="countryToUsdt__block_side1_left_ctr"
              />
            </div>
            <div className="countryToUsdt__block_side1_right">
              <img src={see_more} alt="" className="" />
            </div>
          </div>
          <div className="countryToUsdt__block_line"></div>
          <div className="countryToUsdt__block_side2">
            <div className="countryToUsdt__block_side2_txt">
              <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
              <div className="countryToUsdt__block_side2_txt2">1,80 AZN</div>
            </div>
            <img
              src={graph}
              alt=""
              className="countryToUsdt__block_side2_graph"
            />
          </div>
        </div>
        <div className="countryToUsdt_block">
          <div className="countryToUsdt__block_side1">
            <div className="countryToUsdt__block_side1_left">
              <img
                src={coin1}
                alt=""
                className="countryToUsdt__block_side1_left_coin"
              />
              <p className="countryToUsdt__block_side1_left_abr">AZN</p>
              <img
                src={azerbaijan}
                alt=""
                className="countryToUsdt__block_side1_left_ctr"
              />
            </div>
            <div className="countryToUsdt__block_side1_right">
              <img src={see_more} alt="" className="" />
            </div>
          </div>
          <div className="countryToUsdt__block_line"></div>
          <div className="countryToUsdt__block_side2">
            <div className="countryToUsdt__block_side2_txt">
              <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
              <div className="countryToUsdt__block_side2_txt2">1,80 AZN</div>
            </div>
            <img
              src={graph}
              alt=""
              className="countryToUsdt__block_side2_graph"
            />
          </div>
        </div>
        <div className="countryToUsdt_block">
          <div className="countryToUsdt__block_side1">
            <div className="countryToUsdt__block_side1_left">
              <img
                src={coin1}
                alt=""
                className="countryToUsdt__block_side1_left_coin"
              />
              <p className="countryToUsdt__block_side1_left_abr">AZN</p>
              <img
                src={azerbaijan}
                alt=""
                className="countryToUsdt__block_side1_left_ctr"
              />
            </div>
            <div className="countryToUsdt__block_side1_right">
              <img src={see_more} alt="" className="" />
            </div>
          </div>
          <div className="countryToUsdt__block_line"></div>
          <div className="countryToUsdt__block_side2">
            <div className="countryToUsdt__block_side2_txt">
              <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
              <div className="countryToUsdt__block_side2_txt2">1,80 AZN</div>
            </div>
            <img
              src={graph}
              alt=""
              className="countryToUsdt__block_side2_graph"
            />
          </div>
        </div>
        <div className="countryToUsdt_block">
          <div className="countryToUsdt__block_side1">
            <div className="countryToUsdt__block_side1_left">
              <img
                src={coin1}
                alt=""
                className="countryToUsdt__block_side1_left_coin"
              />
              <p className="countryToUsdt__block_side1_left_abr">AZN</p>
              <img
                src={azerbaijan}
                alt=""
                className="countryToUsdt__block_side1_left_ctr"
              />
            </div>
            <div className="countryToUsdt__block_side1_right">
              <img src={see_more} alt="" className="" />
            </div>
          </div>
          <div className="countryToUsdt__block_line"></div>
          <div className="countryToUsdt__block_side2">
            <div className="countryToUsdt__block_side2_txt">
              <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
              <div className="countryToUsdt__block_side2_txt2">1,80 AZN</div>
            </div>
            <img
              src={graph}
              alt=""
              className="countryToUsdt__block_side2_graph"
            />
          </div>
        </div>
        <div className="countryToUsdt_block">
          <div className="countryToUsdt__block_side1">
            <div className="countryToUsdt__block_side1_left">
              <img
                src={coin1}
                alt=""
                className="countryToUsdt__block_side1_left_coin"
              />
              <p className="countryToUsdt__block_side1_left_abr">AZN</p>
              <img
                src={azerbaijan}
                alt=""
                className="countryToUsdt__block_side1_left_ctr"
              />
            </div>
            <div className="countryToUsdt__block_side1_right">
              <img src={see_more} alt="" className="" />
            </div>
          </div>
          <div className="countryToUsdt__block_line"></div>
          <div className="countryToUsdt__block_side2">
            <div className="countryToUsdt__block_side2_txt">
              <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
              <div className="countryToUsdt__block_side2_txt2">1,80 AZN</div>
            </div>
            <img
              src={graph}
              alt=""
              className="countryToUsdt__block_side2_graph"
            />
          </div>
        </div>
        <div className="countryToUsdt_block">
          <div className="countryToUsdt__block_side1">
            <div className="countryToUsdt__block_side1_left">
              <img
                src={coin1}
                alt=""
                className="countryToUsdt__block_side1_left_coin"
              />
              <p className="countryToUsdt__block_side1_left_abr">AZN</p>
              <img
                src={azerbaijan}
                alt=""
                className="countryToUsdt__block_side1_left_ctr"
              />
            </div>
            <div className="countryToUsdt__block_side1_right">
              <img src={see_more} alt="" className="" />
            </div>
          </div>
          <div className="countryToUsdt__block_line"></div>
          <div className="countryToUsdt__block_side2">
            <div className="countryToUsdt__block_side2_txt">
              <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
              <div className="countryToUsdt__block_side2_txt2">1,80 AZN</div>
            </div>
            <img
              src={graph}
              alt=""
              className="countryToUsdt__block_side2_graph"
            />
          </div>
        </div>
        <div className="countryToUsdt_block">
          <div className="countryToUsdt__block_side1">
            <div className="countryToUsdt__block_side1_left">
              <img
                src={coin1}
                alt=""
                className="countryToUsdt__block_side1_left_coin"
              />
              <p className="countryToUsdt__block_side1_left_abr">AZN</p>
              <img
                src={azerbaijan}
                alt=""
                className="countryToUsdt__block_side1_left_ctr"
              />
            </div>
            <div className="countryToUsdt__block_side1_right">
              <img src={see_more} alt="" className="" />
            </div>
          </div>
          <div className="countryToUsdt__block_line"></div>
          <div className="countryToUsdt__block_side2">
            <div className="countryToUsdt__block_side2_txt">
              <p className="countryToUsdt__block_side2_txt1">1 USDT =</p>
              <div className="countryToUsdt__block_side2_txt2">1,80 AZN</div>
            </div>
            <img
              src={graph}
              alt=""
              className="countryToUsdt__block_side2_graph"
            />
          </div>
        </div>
      </section>
      <section className="since">
        <h2 className="since_h2">TRUST SINCE 2018</h2>
        <div className="since_content">
          <figure className="since_mousePic">
            <img src={mouse1} alt="" className="since_mouse" />
            <div className="since__mouse_txt">
              <h5 className="since__mouse_h5">Экономьте время</h5>
              <p className="since__mouse_p">
                Максимальная скорость обмена за счет полной автоматизации
              </p>
            </div>
          </figure>
          <figure className="since_mousePic">
            <img src={mouse1} alt="" className="since_mouse" />
            <div className="since__mouse_txt">
              <h5 className="since__mouse_h5">Экономьте время</h5>
              <p className="since__mouse_p">
                Максимальная скорость обмена за счет полной автоматизации
              </p>
            </div>
          </figure>
          <figure className="since_mousePic">
            <img src={mouse1} alt="" className="since_mouse" />
            <div className="since__mouse_txt">
              <h5 className="since__mouse_h5">Экономьте время</h5>
              <p className="since__mouse_p">
                Максимальная скорость обмена за счет полной автоматизации
              </p>
            </div>
          </figure>
        </div>
      </section>
      <section className="recent_container">
        <h3 className="recent_h3">Recent transactions</h3>
        <div className="recent_block">
          <div className="recent__block_line">
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={arrowUpDown}
                  alt=""
                  className="recent__block_line_side_container_left_arrUpDown"
                />
                <p className="recent__block_line_side_container_left_time">
                  a few seconds ago
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
              </div>
            </div>
            <img src={arrRight} alt="" className="recent__block_line_arr" />
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_left_time">
                  16 sec
                </p>
                <img
                  src={infoSuccess}
                  alt=""
                  className="recent__block_line_side_container_right_success"
                />
              </div>
            </div>
          </div>
          <div className="recent__block_line blue_footer">
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={arrowUpDown}
                  alt=""
                  className="recent__block_line_side_container_left_arrUpDown"
                />
                <p className="recent__block_line_side_container_left_time">
                  a few seconds ago
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
              </div>
            </div>
            <img src={arrRight} alt="" className="recent__block_line_arr" />
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_left_time">
                  16 sec
                </p>
                <img
                  src={infoSuccess}
                  alt=""
                  className="recent__block_line_side_container_right_success"
                />
              </div>
            </div>
          </div>
          <div className="recent__block_line">
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={arrowUpDown}
                  alt=""
                  className="recent__block_line_side_container_left_arrUpDown"
                />
                <p className="recent__block_line_side_container_left_time">
                  a few seconds ago
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
              </div>
            </div>
            <img src={arrRight} alt="" className="recent__block_line_arr" />
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_left_time">
                  16 sec
                </p>
                <img
                  src={infoSuccess}
                  alt=""
                  className="recent__block_line_side_container_right_success"
                />
              </div>
            </div>
          </div>
          <div className="recent__block_line blue_footer">
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={arrowUpDown}
                  alt=""
                  className="recent__block_line_side_container_left_arrUpDown"
                />
                <p className="recent__block_line_side_container_left_time">
                  a few seconds ago
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
              </div>
            </div>
            <img src={arrRight} alt="" className="recent__block_line_arr" />
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_left_time">
                  16 sec
                </p>
                <img
                  src={infoSuccess}
                  alt=""
                  className="recent__block_line_side_container_right_success"
                />
              </div>
            </div>
          </div>
          <div className="recent__block_line">
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={arrowUpDown}
                  alt=""
                  className="recent__block_line_side_container_left_arrUpDown"
                />
                <p className="recent__block_line_side_container_left_time">
                  a few seconds ago
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
              </div>
            </div>
            <img src={arrRight} alt="" className="recent__block_line_arr" />
            <div className="recent__block_line_side_container">
              <div className="recent__block_line_side_container_left">
                <img
                  src={tether_usdtlogo_small}
                  alt=""
                  className="recent__block_line_side_container_right_crypto"
                />
                <p className="recent__block_line_side_container_right_value">
                  140000 UDST
                </p>
              </div>
              <div className="recent__block_line_side_container_left">
                <p className="recent__block_line_side_container_left_time">
                  16 sec
                </p>
                <img
                  src={infoSuccess}
                  alt=""
                  className="recent__block_line_side_container_right_success"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default restore;
