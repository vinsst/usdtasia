import React from "react";

import time_line from "../assets/img/time_line.svg";
import pay_qr from "../assets/img/pay_qr.png";

function Zayavka2() {
  return (
    <main className="homeMain home_container container other_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">PAY ORDER #R905868061</h1>
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
              Для совершения операции #W972785022 на сумму: 1. BTC Вам
              потребуется выполнить следующие действия:
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
              <img src={pay_qr} alt="" className="qrSection_qrImg" />
              <div className="qrSection_txt">
                <p className="qrSection_value white">1.00000 BTC</p>
                <div className="qrSection_valuta">
                  <p className="qrSection__valuta_word white">Валюта:&nbsp;</p>
                  <p className="qrSection__valuta_name">Bitcoin</p>
                </div>
                <div className="qrSection_reqizity">
                  <p className="qrSection__reqizity_word white">
                    Реквезиты:&nbsp;
                  </p>
                  <p className="qrSection__reqizity_code">
                    bc1qykx7amh4frgugv5vet6zmg3nq2mfcs7ncl08gw
                  </p>
                </div>
                <p className="qrSection_copyAddress">Копировать адресс</p>
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
            <button className="quick__exchange_btn order_btn pay__btnCancel pay_btn">
              ОТМЕНИТЬ ЗАЯВКУ
            </button>
            <button className="quick__exchange_btn order_btn pay_btn">
              Я ОПЛАТИЛ(А) ЗАЯВКУ
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}

export default Zayavka2;
