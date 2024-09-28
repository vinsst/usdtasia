import React, { useState } from "react";
import done from "../../assets/img/done.svg";
import hrestik from "../../assets/img/hrestik.svg";
import login_profile from "../../assets/img/login_profile.svg";
import login_lock from "../../assets/img/login_lock.svg";

import axios from "axios";

function Login({ loginRef, close }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { login, password };
    try {
      const response = await axios.post(
        "https://dummyjson.com/auth/login",
        loginData
      );

      if (response.status === 200) {
        console.log("Login successful:", response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login_container">
      <form onSubmit={handleSubmit} className="login_content" ref={loginRef}>
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
              onChange={(e) => setLogin(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
        {checked && login.length > 0 && password.length > 0 ? (
          <section className="exchange_btn">
            <button className="quick__exchange_btn order_btn" type="submit">
              ВОЙТИ
            </button>
          </section>
        ) : (
          <section className="exchange_btn quick__exchange_btn_nonActive">
            <button className="quick__exchange_btn order_btn" disabled>
              ВОЙТИ
            </button>
          </section>
        )}
      </form>
    </div>
  );
}

export default Login;
