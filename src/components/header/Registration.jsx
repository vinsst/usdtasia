import React, { useState } from "react";
import done from "../../assets/img/done.svg";
import hrestik from "../../assets/img/hrestik.svg";
import login_profile from "../../assets/img/login_profile.svg";
import login_lock from "../../assets/img/login_lock.svg";
import alternate_email from "../../assets/img/alternate_email.svg";

import axios from "axios";

function Registration({ registrRef, close }) {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  // --------------------------
  // --------------------------
  // --------------------------
  // --------------------------
  // --------------------------
  // --------------------------

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    if (password === password2) {
      e.preventDefault();
      const registrationData = { login, password, password2, email };
      try {
        const response = await axios.post(
          "https://usdtasia-back-8a0cb4592177.herokuapp.com/user/auth/registration",
          registrationData
        );

        if (response.status === 200) {
          console.log("Login successful:", response.data);
        }
        close();
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("passwords do not match");
    }
  };

  return (
    <div className="login_container">
      <form onSubmit={handleSubmit} className="login_content" ref={registrRef}>
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
              onChange={(e) => setLogin(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onChange={(e) => setPassword2(e.target.value)}
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
              type="email"
              className="loginInput_input"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="login_rememberMe">
          <div className="done_rect">
            <div
              className="quick__exchange_done_rect quick__exchange_done_rect_login"
              onClick={handleCheckboxChange}
            >
              {checked && (
                <img src={done} alt="" className="quick__exchange_img" />
              )}
            </div>
          </div>
          <p className="rememberMe_p">
            С правилами сервиса ознакомлен и согласен
          </p>
        </div>
        {checked &&
        login.length > 0 &&
        password.length > 0 &&
        password2.length > 0 &&
        email.length > 0 ? (
          <section className="exchange_btn">
            <button className="quick__exchange_btn order_btn" type="submit">
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </section>
        ) : (
          <section className="exchange_btn quick__exchange_btn_nonActive">
            <button className="quick__exchange_btn order_btn" disabled>
              ЗАРЕГИСТРИРОВАТЬСЯ
            </button>
          </section>
        )}
      </form>
    </div>
  );
}

export default Registration;
