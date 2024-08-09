import React from "react";
import telega from "../assets/img/telega.svg";
import insta from "../assets/img/insta.svg";
import redit from "../assets/img/redit.svg";
import facebook from "../assets/img/facebook.svg";
import twit from "../assets/img/twit.svg";
import google from "../assets/img/google.svg";
import Question from "../assets/img/Question.svg";

function Footer() {
  return (
    <footer>
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
                Когда я спрашиваю гугл как дела он всегда говорить что у всех
                все хорошо
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
                Когда я спрашиваю гугл как дела он всегда говорить что у всех
                все хорошо
              </p>
            </div>
            <div className="askedQuestions_plus">+</div>
          </div>
        </section>
      </section>
      <section className="footer_container container">
        <div className="footer_top">
          <section className="footer__top_txt_mob">
            <div className="footer__top_txt_mob_container">
              <h5 className="footer__usdtasia_h5_mob footer__h5_mob">
                USDTASIA
              </h5>
              <nav className="footer__usdtasia_nav_mob">
                <p className="footer__nav_p">About</p>
                <p className="footer__nav_p">Our brand</p>
                <p className="footer__nav_p">Affiliate program</p>
                <p className="footer__nav_p">Terms of Service</p>
                <p className="footer__nav_p">Privacy Policy</p>
              </nav>
            </div>
            <div className="footer__top_txt_mob_container">
              <h5 className="footer__usdtasia_h5_mob footer__h5_mob">
                Popular
              </h5>
              <nav className="footer__usdtasia_nav_mob">
                <p className="footer__nav_p">Blog</p>
                <p className="footer__nav_p">XMR to BTC</p>
                <p className="footer__nav_p">ETH to BTC</p>
                <p className="footer__nav_p">LTC to ETH</p>
              </nav>
            </div>
            <div className="footer__top_txt_mob_container">
              <h5 className="footer__usdtasia_h5_mob footer__h5_mob">
                Support
              </h5>
              <nav className="footer__usdtasia_nav_mob">
                <p className="footer__nav_p">FAQ</p>
                <p className="footer__nav_p">API</p>
                <p className="footer__nav_p">Support</p>
              </nav>
            </div>
          </section>
          <section className="">
            <div className="footer__logo footer_section">
              <div className="header_logo">
                USDT<span className="header_logo2">ASIA</span>
              </div>
              <div className="footer__logo_socialMedias">
                <img src={telega} alt="" className="footer_socialMedia" />
                <img src={insta} alt="" className="footer_socialMedia" />
                <img src={redit} alt="" className="footer_socialMedia" />
                <img src={facebook} alt="" className="footer_socialMedia" />
                <img src={twit} alt="" className="footer_socialMedia" />
                <img src={google} alt="" className="footer_socialMedia" />
              </div>
            </div>
          </section>
          <div className="footer_line"></div>
          <section className="footer__top_txt">
            <div className="footer_usdtasia footer_section">
              <h5 className="footer__usdtasia_h5 footer_h5">USDTASIA</h5>
              <nav className="footer__usdtasia_nav footer_elements">
                <p className="footer__usdtasia_nav_el">About Our brand</p>
                <p className="footer__usdtasia_nav_el footer__usdtasia_nav_el_2">
                  Affiliate program Terms of Service
                </p>
                <p className="footer__usdtasia_nav_el">Privacy Policy</p>
              </nav>
            </div>
          </section>
          <div className="footer_line"></div>
          <section className="footer__top_txt">
            <div className="footer_popular footer_section">
              <h5 className="footer__popular_h5 footer_h5">POPULAR</h5>
              <div className="footer__popular_elements footer_elements">
                <p className="footer__popular_el">Blog XMR to BTC</p>
                <p className="footer__popular_el">ETH to BTC LTC to ETH</p>
              </div>
            </div>
          </section>
          <div className="footer_line"></div>
          <section className="footer__top_txt">
            <div className="footer_support footer_section">
              <h5 className="footer__support_h5 footer_h5">SUPPORT</h5>
              <div className="footer__support_elements footer_elements">
                <p className="footer__support_el">FAQ Support</p>
                <p className="footer__support_el">API</p>
              </div>
            </div>
          </section>
        </div>
        <div className="footer_span">
          © 2018–2024  USDTASIA . Все права защищены.
        </div>
      </section>
    </footer>
  );
}

export default Footer;
