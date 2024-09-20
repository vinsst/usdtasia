import React from "react";
import done from "../../assets/img/done.svg";
import hrestik from "../../assets/img/hrestik.svg";
import login_profile from "../../assets/img/login_profile.svg";
import login_lock from "../../assets/img/login_lock.svg";
import alternate_email from "../../assets/img/alternate_email.svg";

function Registration({ registrRef, close }) {
  return (
    <div className="login_container">
      <section className="login_content" ref={registrRef}>
        <div className="login__word_container">
          <p className="login_word">REGISTRATION</p>
          <img src={hrestik} alt="" className="login_hrestik" onClick={close} />
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">Логин</p>
          </div>
          <div className="loginInput_withIcon">
            <img src={login_profile} alt="" className="loginInput_icon" />
            <input
              type="text"
              className="loginInput_input"
              placeholder="Login"
            />
          </div>
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">E-mail:</p>
          </div>
          <div className="loginInput_withIcon">
            <img src={alternate_email} alt="" className="loginInput_icon" />
            <input
              type="text"
              className="loginInput_input"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">Пароль</p>
          </div>
          <div className="loginInput_withIcon">
            <img src={login_lock} alt="" className="loginInput_icon" />
            <input
              type="password"
              className="loginInput_input"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">Пароль еще раз</p>
          </div>
          <div className="loginInput_withIcon">
            <img src={login_lock} alt="" className="loginInput_icon" />
            <input
              type="password"
              className="loginInput_input"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="login_rememberMe">
          <div className="done_rect">
            <img src={done} alt="" className="rememberMe_imgDone" />
          </div>
          <p className="rememberMe_p">
            С правилами сервиса ознакомлен и согласен
          </p>
        </div>
        <section className="exchange_btn">
          <button className="quick__exchange_btn order_btn">
            ЗАРЕГИСТРИРОВАТЬСЯ
          </button>
        </section>
      </section>
    </div>
  );
}

export default Registration;
