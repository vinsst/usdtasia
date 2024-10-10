import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PersonalInfo from "../components/zayavka/PersonalInfo";
import { useSelector } from "react-redux";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import QuickExchangeTime from "../components/zayavka/QuickExchangeTime";
import OrderCurrencySend from "../components/zayavka/OrderCurrencySend";
import OrderCurrencyGet from "../components/zayavka/OrderCurrencyGet";
import OrderCurrencyMobile from "../components/zayavka/OrderCurrencyMobile";

function Zayavka() {
  const { transactionId } = useParams();
  const [transactionData, setTransactionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginTxt = useSelector((state) => state.loginReducer.login);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        const decodedToken = jwtDecode(token);
        const id = decodedToken.id;

        try {
          let allTransactions = [];
          let totalPages = 1;
          let currentPage = 1;

          do {
            const response = await axios.get(
              `https://usdtasia-back-8a0cb4592177.herokuapp.com/transaction/${id}?Page=${currentPage}`,
              {
                headers: { Authorization: `Bearer ${token}` },
              }
            );

            allTransactions = [
              ...allTransactions,
              ...response.data.transactions,
            ];
            totalPages = response.data.pages;
            currentPage += 1;
          } while (currentPage <= totalPages);

          const foundTransaction = allTransactions.find(
            (transaction) => transaction.id.toString() === transactionId
          );

          setTransactionData(foundTransaction);
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(true);
      }
    };

    fetchData();
  }, [transactionId, token, loginTxt]);

  if (loading)
    return (
      <main className="homeMain home_container container other_container">
        <p className="loading_history">Loading...</p>
        <p className="loading_history logInPlz_history">
          You may not be signed in to your account
        </p>
      </main>
    );

  console.log(transactionData);

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
          <QuickExchangeTime />
          <section className="quick__exchange_curr order_exch_curr">
            <OrderCurrencySend />
            <OrderCurrencyGet />
          </section>
          <OrderCurrencyMobile />
          <PersonalInfo />
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
