import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import time_line from "../assets/img/time_line.svg";
import { QRCodeSVG } from "qrcode.react";

function Zayavka2() {
  const { transactionId } = useParams();
  const [transactionData, setTransactionData] = useState(null);
  const [error, setError] = useState(true);

  const loginTxt = useSelector((state) => state.loginReducer.login);
  const token =
    localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://103.13.210.234:5001/transaction/${transactionId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setError(false);
        setTransactionData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      }
    };

    fetchData();
  }, [transactionId, token, loginTxt]);

  if (!transactionData)
    return (
      <main className="homeMain home_container container other_container">
        <p className="loading_history">Loading...</p>
        <p className="loading_history logInPlz_history">
          It can be a transaction of another user
        </p>
      </main>
    );

  if (error)
    return (
      <main className="homeMain home_container container other_container">
        <p className="loading_history">Loading...</p>
        <p className="loading_history logInPlz_history">
          It can be a transaction of another user
        </p>
      </main>
    );

  const statusCancelled = async () => {
    try {
      const response = await axios.put(
        `http://103.13.210.234:5001/transaction/${transactionId}/change-status`,
        { status: 2 },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Status updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const statusPending = async () => {
    try {
      const response = await axios.put(
        `http://103.13.210.234:5001/transaction/${transactionId}/change-status`,
        { status: 1 },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("Status updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleCopyAddress = () => {
    const addressText = transactionData.wallet;
    navigator.clipboard.writeText(addressText);
  };

  return (
    <main className="homeMain home_container container other_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">PAY ORDER #{transactionData.id}</h1>
      </div>
      <div className="exchange_container order_exchange">
        <section className="quick__exchange_container quick__exchange_container_order">
          <div className="quick__exchange_border"></div>
        </section>
        <div className="exchange_container_padding order_padding pay_txt">
          <section className="pay__txt_top">
            <h5 className="txt__top_h5">
              Поздравляем! Вы почти завершили обмен, для завершения, проделайте
              следующие шаги
            </h5>
            <p className="txt__top_p">
              Для совершения операции #{transactionData.id} на сумму:{" "}
              {transactionData.from.value.toFixed(2)}.{" "}
              {transactionData.from.name} Вам потребуется выполнить следующие
              действия:
            </p>
          </section>
          <section className="pay_instruction">
            <div className="pay__instruction_el">
              <div className="punkt_number">1</div>
              <p className="pay__instruction_p">
                Совершите оплату по предоставленным ниже реквизитам
              </p>
            </div>
            <img src={time_line} alt="" className="pay__instruction_img" />
            <div className="pay__instruction_el">
              <div className="punkt_number">2</div>
              <p className="pay__instruction_p">
                Дождаться подтверждения транзакции в сети.
              </p>
            </div>
            <img src={time_line} alt="" className="pay__instruction_img" />
            <div className="pay__instruction_el">
              <div className="punkt_number">3</div>
              <p className="pay__instruction_p">
                Представитель свяжется с Вами и согласует передачу средств
              </p>
            </div>
          </section>
          <section className="pay__waning_txt">
            <p className="pay__warning_p">
              <span className="white">Внимание! </span>
              <span>
                Перед тем как оплатить, откройте Ваш Email и сверьте номер
                кошелька указанный ниже, с номером полученным в Email сообщении.
                Номера кошельков обязаны совпадать. В случае несовпадения, не
                выполняйте платеж и свяжитесь с поддержкой! Проверка номера
                кошелька ОБЯЗАТЕЛЬНА.
              </span>
            </p>
          </section>
          <section className="qrSection">
            <div className="qrSection_content">
              <QRCodeSVG value={transactionData.wallet} size={193} />
              <div className="qrSection_txt">
                <p className="qrSection_value white">
                  {transactionData.from.value} {transactionData.from.name}
                </p>
                <div className="qrSection_valuta">
                  <p className="qrSection__valuta_word white">Валюта:&nbsp;</p>
                  <p className="qrSection__valuta_name">
                    {transactionData.from.name}
                  </p>
                </div>
                <div className="qrSection_reqizity">
                  <p className="qrSection__reqizity_word white">
                    Реквезиты:&nbsp;
                  </p>
                  <p className="qrSection__reqizity_code">
                    {transactionData.wallet}
                  </p>
                </div>
                <p
                  className="qrSection_copyAddress"
                  onClick={handleCopyAddress}
                >
                  Копировать адресс
                </p>
              </div>
            </div>
          </section>
          <section className="pay__txt_bottom_container">
            <p className="pay__txt_bottom">
              * В зависимости от страны, выдача средств происходит в офисе либо
              через представителя.<br></br>
              <br></br> * Для сумм выше 10 000$ в эквиваленте возможен обмен в
              офисе либо при участии представителя. Данная опция является
              индивидуальной и зависит от ряда факторов.<br></br>
              <br></br> * ПОМНИТЕ криптовалютные транзакции являются не
              отзывными. Внимательно проверьте адрес, на который Вы отправляете
              средства. Мы не сможем вернуть средства, если они будут отправлены
              на неверный кошелек.<br></br>
              <br></br> * Транзакция считается подтвержденной после 3х
              подтверждений для сети Bitcoin.<br></br>
              <br></br> * На сумму до 800 BYN возможна выдача наличных в
              банкомате по коду. Если Вам требуется данная опция, обратитесь в
              чат к Оператору. ( Беларусь ) <br></br>
              <br></br>* Внимательно заполняйте платежную информацию, по которой
              желаете получить фиатные средства. В случае возврата транзакции
              сетью, все комиссии по повторной отправке ложатся на Клиента
            </p>
          </section>
          <section className="exchange_btn pay_btn_container">
            <Link to="/">
              <button
                className="quick__exchange_btn order_btn pay__btnCancel pay_btn"
                onClick={statusCancelled}
              >
                ОТМЕНИТЬ ЗАЯВКУ
              </button>
            </Link>
            <Link to={loginTxt > 0 ? "/history" : "/"}>
              <button
                className="quick__exchange_btn order_btn pay_btn"
                onClick={statusPending}
              >
                Я ОПЛАТИЛ(А) ЗАЯВКУ
              </button>
            </Link>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Zayavka2;
