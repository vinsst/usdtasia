import React from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";

function HistoryLine({ createdAt, from, to, status, darker, transactionId }) {
  const formattedDate = format(new Date(createdAt), "dd.MM.yyyy HH:mm");
  const statusMap = {
    0: "created",
    1: "pending",
    2: "cancelled",
    3: "success",
    4: "paid",
  };
  return (
    <Link
      to={`/zayavka2/${transactionId}`}
      className={`table__content_line ${darker}`}
    >
      <p className="table__content_line_el">{formattedDate}</p>
      <p className="table__content_line_el history__blue_font">{from.name}</p>
      <p className="table__content_line_el">{from.value.toFixed(2)}</p>
      <p className="table__content_line_el history__blue_font">{to.name}</p>
      <p className="table__content_line_el">{to.value.toFixed(2)}</p>
      <p
        className={`table__content_line_el  history__green_font ${statusMap[status]}`}
      >
        {statusMap[status]}
      </p>
    </Link>
  );
}

export default HistoryLine;
