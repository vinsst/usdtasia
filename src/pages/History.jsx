import React from "react";
import HistoryLine from "../components/history/HistoryLine";

function History() {
  return (
    <main className="homeMain home_container container other_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">ORDER HISTORY</h1>
      </div>
      <div className="exchange_container order_exchange">
        <section className="quick__exchange_container quick__exchange_container_order">
          <div className="quick__exchange_border"></div>
        </section>
        <div className="exchange_container_padding order_padding history_padding">
          <section className="history_table">
            <div className="table__static_line">
              <p className="table__static_line_el">ДАТА</p>
              <p className="table__static_line_el">ОТДАЕТЕ</p>
              <p className="table__static_line_el">СУММА</p>
              <p className="table__static_line_el">ПОЛУЧАЕТЕ</p>
              <p className="table__static_line_el">СУММА</p>
              <p className="table__static_line_el">СТАТУС</p>
            </div>
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
            <HistoryLine />
            <HistoryLine darker="history__table_darker_bck" />
          </section>
        </div>
      </div>
    </main>
  );
}

export default History;
