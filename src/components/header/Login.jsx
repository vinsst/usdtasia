import React, { useState, useEffect } from "react";
import done from "../../assets/img/done.svg";
import hrestik from "../../assets/img/hrestik.svg";
import login_profile from "../../assets/img/login_profile.svg";
import login_lock from "../../assets/img/login_lock.svg";
import { jwtDecode } from "jwt-decode";

import axios from "axios";

import { useDispatch } from "react-redux";
import { addLogin } from "../../redux/actions";

function Login({ loginRef, close, handleRegistrClick }) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { login, password };
    try {
      const response = await axios.post(
        "https://usdtasia-back-8a0cb4592177.herokuapp.com/user/auth/login",
        loginData
      );

      if (response.status === 200) {
        const token = response.data;

        if (checked) {
          localStorage.setItem("authToken", token);
        } else {
          sessionStorage.setItem("authToken", token);
        }

        console.log("Login successful:", response.data);

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.id;

        const userResponse = await axios.get(
          `https://usdtasia-back-8a0cb4592177.herokuapp.com/user/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const userData = userResponse.data;
        if (userResponse.status === 200) {
          console.log("User data:", userData);
        }
        dispatch(addLogin(userData.login));
      }
      setError(false);
      close();
    } catch (error) {
      setError(true);
    }
  };

  useEffect(() => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");

    if (token) {
      const decodedToken = jwtDecode(token);
      const userId = decodedToken.id;

      axios
        .get(
          `https://usdtasia-back-8a0cb4592177.herokuapp.com/user/${userId}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            const userData = response.data;
            dispatch(addLogin(userData.login));
          }
        })
        .catch((error) => {
          console.error("Failed to fetch user data:", error);
        });
    }
  }, [dispatch]);

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
            <p
              className="loginInput__registr_word"
              onClick={handleRegistrClick}
            >
              Регистрация
            </p>
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
        {error && (
          <span className="invalidLogin">Неправильные логин или пароль</span>
        )}
        {login.length > 0 && password.length > 0 ? (
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
