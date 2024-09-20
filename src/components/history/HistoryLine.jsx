import React from "react";

function HistoryLine({ darker }) {
  return (
    <div className={`table__content_line ${darker}`}>
      <p className="table__content_line_el">28.04.2022 12:01</p>
      <p className="table__content_line_el history__blue_font">Bitcoin BTC</p>
      <p className="table__content_line_el">1 BTC</p>
      <p className="table__content_line_el history__blue_font">Наличные USD</p>
      <p className="table__content_line_el">39041.66</p>
      <p className="table__content_line_el  history__green_font">Выполнена</p>
    </div>
  );
}

export default HistoryLine;
