import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import PersonalInfo from "../components/zayavka/PersonalInfo";
import QuickExchangeTime from "../components/zayavka/QuickExchangeTime";
import OrderCurrencySend from "../components/zayavka/OrderCurrencySend";
import OrderCurrencyGet from "../components/zayavka/OrderCurrencyGet";
import OrderCurrencyMobile from "../components/zayavka/OrderCurrencyMobile";

import { format } from "date-fns";

import { fiatImageMap } from "../assets/fiatImageMap";
import { currencyImageMap } from "../assets/currencyImageMap";

function Zayavka() {
  const imgArrays = { ...fiatImageMap, ...currencyImageMap };
  const { transactionId } = useParams();
  const [transactionData, setTransactionData] = useState(null);
  const [loading, setLoading] = useState(true);

  const loginTxt = useSelector((state) => state.loginReducer.login);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          const response = await axios.get(
            `https://usdtasia-back-8a0cb4592177.herokuapp.com/transaction/${transactionId}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          setTransactionData(response.data);
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

  if (!transactionData)
    return (
      <main className="homeMain home_container container other_container">
        <p className="loading_history">Loading...</p>
        <p className="loading_history logInPlz_history">
          It can be a transaction of another user
        </p>
      </main>
    );

  console.log(transactionData);

  const formattedDate = format(
    new Date(transactionData.createdAt),
    "dd.MM.yyyy HH:mm"
  );
  const statusMap = {
    0: "created",
    1: "pending",
    2: "cancelled",
    3: "success",
  };

  const getRate = () => {
    if (transactionData?.from?.value && transactionData?.to?.value) {
      return transactionData.to.value / transactionData.from.value;
    }
    return 0;
  };

  const rate = getRate();

  return (
    <main className="homeMain home_container container other_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">ORDER #{transactionData.id}</h1>
      </div>
      <div className="exchange_container order_exchange">
        <section className="quick__exchange_container quick__exchange_container_order">
          <div className="quick__exchange_border"></div>
        </section>
        <div className="exchange_container_padding order_padding">
          <QuickExchangeTime
            formattedDate={formattedDate}
            rate={rate}
            fromName={transactionData.from.name}
            toName={transactionData.to.name}
          />
          <section className="quick__exchange_curr order_exch_curr">
            <OrderCurrencySend
              fromName={transactionData.from.name}
              value={transactionData.from.value}
              img={imgArrays[transactionData.from.name]}
            />
            <OrderCurrencyGet
              toName={transactionData.to.name}
              value={transactionData.to.value}
              img={imgArrays[transactionData.to.name]}
            />
          </section>
          <OrderCurrencyMobile
            fromName={transactionData.from.name}
            toName={transactionData.to.name}
            toValue={transactionData.to.value}
            fromValue={transactionData.from.value}
            toImg={imgArrays[transactionData.to.name]}
            fromImg={imgArrays[transactionData.from.name]}
          />
          <PersonalInfo
            email={transactionData.email}
            name={transactionData.name}
            telega={transactionData.telegram}
          />
          <section className="order_status">
            <p className="order__status_p">
              Статус обработки заявки {transactionData.id}
            </p>
            <span className="order__status_p">
              Статус:{" "}
              <span
                className={`statusTransaction_zayavka ${
                  statusMap[transactionData.status]
                }`}
              >
                {statusMap[transactionData.status]}
              </span>
            </span>
            <p className="order__status_p order__status_p_mob">
              Статус заявки {transactionData.id}
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
