import React from "react";
import { useTranslation } from "react-i18next";

function AffilateComponent() {
  const { t } = useTranslation();

  return (
    <div className="homeMain home_container container other_container faq_container">
      <div className="zayavka__h1_container">
        <h1 className="zayavka_h1">{t("AffilateProgram")}</h1>
      </div>

      <p className="faq_a">
        &nbsp;&nbsp;&nbsp;&nbsp;Партнёрская программа позволяет
        зарегистрированным пользователям зарабатывать на партнерских отчислениях
        от обменов клиентов, которые перешли на наш сайт по реферальной ссылке.
        Участие в программе достаточно простое: Вам необходимо
        зарегистрироваться на нашем сайте и написать в техподдержку, чтобы
        получить вашу персональную ссылку для обмена.
      </p>

      <p className="faq_a">
        Партнёрский процент зависит от общей суммы обменов ваших рефералов и
        будет меняться по таблице:
      </p>

      <table className="affiliate-table">
        <thead>
          <tr>
            <th>Уровень</th>
            <th>Общая сумма обменов рефералов</th>
            <th>Ваша прибыль</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>$0</td>
            <td>5%</td>
          </tr>
          <tr>
            <td>2</td>
            <td>$10 000</td>
            <td>10%</td>
          </tr>
          <tr>
            <td>3</td>
            <td>$50 000</td>
            <td>15%</td>
          </tr>
          <tr>
            <td>4</td>
            <td>$100 000</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>5</td>
            <td>$250 000</td>
            <td>25%</td>
          </tr>
        </tbody>
      </table>

      <p className="faq_a">
        Вывод партнерской прибыли осуществляется каждый день. Минимальная сумма
        для вывода — 10$.
      </p>
    </div>
  );
}

export default AffilateComponent;
