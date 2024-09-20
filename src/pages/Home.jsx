import React from "react";

import mouse1 from "../assets/img/mouse1.png";
import mouse2 from "../assets/img/mouse2.png";
import mouse3 from "../assets/img/mouse3.png";
import ExchangeContainer from "../components/homeComponents/ExchangeContainer";
import Rates from "../components/homeComponents/Rates";
import CountryToUsdt from "../components/homeComponents/CountryToUsdt";
import Recent from "../components/homeComponents/Recent";

function restore() {
  return (
    <main className="homeMain home_container container">
      <div className="home__h1_container">
        <h1 className="home_h1">USDT ASIA CRYPTOCURRENCY EXCHANGE</h1>
        <h1 className="home_h1_mobile">LIGHTNING CRYPTOCURRENCY EXCHANGE</h1>
      </div>
      <ExchangeContainer />
      <Rates />
      <CountryToUsdt />
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
            <img src={mouse2} alt="" className="since_mouse" />
            <div className="since__mouse_txt">
              <h5 className="since__mouse_h5">Экономьте время</h5>
              <p className="since__mouse_p">
                Максимальная скорость обмена за счет полной автоматизации
              </p>
            </div>
          </figure>
          <figure className="since_mousePic">
            <img src={mouse3} alt="" className="since_mouse" />
            <div className="since__mouse_txt">
              <h5 className="since__mouse_h5">Экономьте время</h5>
              <p className="since__mouse_p">
                Максимальная скорость обмена за счет полной автоматизации
              </p>
            </div>
          </figure>
        </div>
      </section>
      <Recent />
    </main>
  );
}

export default restore;
