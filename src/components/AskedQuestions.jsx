import React from "react";
import Question from "../assets/img/Question.svg";
function AskedQuestions() {
  return (
    <section className="askedQuestions footer_container container">
      <h3 className="askedQuestions_h3">
        ANSWERS TO FREQUENTLY ASKED QUESTIONS
      </h3>
      <section className="askedQuestions_container">
        <div className="askedQuestions_block">
          <div className="askedQuestions_name">
            <img src={Question} alt="" className="askedQuestions_question" />
            <p className="askedQuestion__name_p">
              Чем занимается компания USDTASIA?
            </p>
          </div>
          <div className="askedQuestions_plus">+</div>
        </div>
        <div className="askedQuestions_block blue_footer">
          <div className="askedQuestions_name">
            <img src={Question} alt="" className="askedQuestions_question" />
            <p className="askedQuestion__name_p">
              Я не нашел информацию по теме инвестиции в майнинг что делать?
            </p>
          </div>
          <div className="askedQuestions_plus">+</div>
        </div>
        <div className="askedQuestions_block">
          <div className="askedQuestions_name">
            <img src={Question} alt="" className="askedQuestions_question" />
            <p className="askedQuestion__name_p">
              Когда я спрашиваю гугл как дела он всегда говорить что у всех все
              хорошо
            </p>
          </div>
          <div className="askedQuestions_plus">+</div>
        </div>
        <div className="askedQuestions_block blue_footer">
          <div className="askedQuestions_name">
            <img src={Question} alt="" className="askedQuestions_question" />
            <p className="askedQuestion__name_p">
              Навожу курсор на кнопку а она хитро угинается, как нажать?
            </p>
          </div>
          <div className="askedQuestions_plus">+</div>
        </div>
        <div className="askedQuestions_block">
          <div className="askedQuestions_name">
            <img src={Question} alt="" className="askedQuestions_question" />
            <p className="askedQuestion__name_p">
              Когда я спрашиваю гугл как дела он всегда говорить что у всех все
              хорошо
            </p>
          </div>
          <div className="askedQuestions_plus">+</div>
        </div>
      </section>
    </section>
  );
}

export default AskedQuestions;
