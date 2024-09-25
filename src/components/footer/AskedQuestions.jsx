import React from "react";
import Question from "../../assets/img/Question.svg";
import AskedQline from "./AskedQline";
function AskedQuestions() {
  return (
    <section className="askedQuestions footer_container container">
      <h3 className="askedQuestions_h3">
        ANSWERS TO FREQUENTLY ASKED QUESTIONS
      </h3>
      <section className="askedQuestions_container">
        <AskedQline
          p="Чем занимается компания USDTASIA?"
          underTxt="Вам остается лишь выбрать самого подходящего трейдера и подписаться на него. Все его сделки будут автоматически открываться и закрываться на вашем биржевом аккаунте. В любой момент вы можете отписаться от трейдера или вывести свою прибыль"
        />
        <AskedQline
          p="Я не нашел информацию по теме инвестиции в майнинг что делать?"
          blue
        />
        <AskedQline
          p="Когда я спрашиваю гугл как дела он всегда говорить что у всех все
хорошо"
        />
        <AskedQline
          p="Навожу курсор на кнопку а она хитро угинается, как нажать?"
          blue
        />
        <AskedQline
          p="Когда я спрашиваю гугл как дела он всегда говорить что у всех все
хорошо"
        />
      </section>
    </section>
  );
}

export default AskedQuestions;
