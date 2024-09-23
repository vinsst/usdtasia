import React, { useState } from "react";
import done from "../../assets/img/done.svg";
import hrestik from "../../assets/img/hrestik.svg";
import login_profile from "../../assets/img/login_profile.svg";
import login_lock from "../../assets/img/login_lock.svg";

function Login({ loginRef, close }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="login_container">
      <section className="login_content" ref={loginRef}>
        <div className="login__word_container">
          <p className="login_word">LOGIN</p>
          <img src={hrestik} alt="" className="login_hrestik" onClick={close} />
        </div>
        <div className="login_loginInput">
          <div className="loginInput_chooseAuth">
            <p className="loginInput__login_word">Логин</p>
            <p className="loginInput__registr_word">Регистрация</p>
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
            <p className="loginInput__login_word">Пароль</p>
            <p className="loginInput__registr_word">Забыли пароль?</p>
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
          <div
            className="quick__exchange_done_rect quick__exchange_done_rect_login"
            onClick={handleCheckboxChange}
          >
            {checked && (
              <img src={done} alt="" className="quick__exchange_img" />
            )}
          </div>
          <p className="rememberMe_p">Запомнить меня</p>
        </div>
        <section className="exchange_btn">
          <button className="quick__exchange_btn order_btn">ВОЙТИ</button>
        </section>
      </section>
    </div>
  );
}

export default Login;
