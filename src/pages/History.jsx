import React, { useEffect, useState } from "react";
import HistoryLine from "../components/history/HistoryLine";

import axios from "axios";
import { jwtDecode } from "jwt-decode";

function History() {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const id = decodedToken.id;

        try {
          const response = await axios.get(
            `https://usdtasia-back-8a0cb4592177.herokuapp.com/transaction/${id}?Page=1`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );
          setTransactions(response.data.transactions);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [token]);

  if (loading) return <div>Loading...</div>;

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
            {transactions.map((transaction, index) => {
              const isEven = index % 2 === 1;
              return (
                <HistoryLine
                  key={transaction.id}
                  {...transaction}
                  darker={isEven ? "history__table_darker_bck" : ""}
                />
              );
            })}
          </section>
        </div>
      </div>
    </main>
  );
}

export default History;
