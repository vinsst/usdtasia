import React from "react";
import time_line from "../../assets/img/time_line.svg";
import time_graph from "../../assets/img/time_graph.svg";
import calendar from "../../assets/img/calendar.svg";

function QuickExchangeTime({ formattedDate, toName, fromName, rate }) {
  return (
    <section className="quick__exchange_time">
      <div className="exchange__time_el">
        <img src={calendar} alt="" className="exchange__time_img" />
        <p className="exchange__time_span">
          <span className="order_blue">Дата заявки:&nbsp;</span> {formattedDate}
        </p>
      </div>
      <img src={time_line} alt="" className="time_line" />
      <div className="exchange__time_el">
        <img src={time_graph} alt="" className="exchange__time_img" />
        <p className="exchange__time_span">
          <span className="order_blue">Курс обмена:&nbsp;</span> 1 {fromName} ={" "}
          {""}
          {rate} {toName}
        </p>
      </div>
    </section>
  );
}

export default QuickExchangeTime;
