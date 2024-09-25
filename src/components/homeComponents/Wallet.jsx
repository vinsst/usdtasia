import React, { useState } from "react";
import wallet from "../../assets/img/wallet.svg";
import mailHome from "../../assets/img/mailHome.svg";
import profileHome from "../../assets/img/profileHome.svg";
import telegaHome from "../../assets/img/telegaHome.svg";
import content_copy from "../../assets/img/content_copy.svg";
import qr_code from "../../assets/img/qr_code.svg";

function Wallet() {
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const hasValue = inputValue.length > 0;

  return (
    <>
      <section className="quick__exchange_trcAdress_container">
        <div className="trcAdress_wallet">
          <img src={wallet} alt="" className="wallet_img" />
          <input
            type="text"
            className="wallet_input"
            placeholder="Your Tether (TRC20) address"
            onChange={handleInput}
          />
        </div>
        <div className="trcAdress_imgs">
          <img src={content_copy} alt="" className="trcAdress_imgs_img" />
          <img src={qr_code} alt="" className="trcAdress_imgs_img" />
        </div>
      </section>
      {hasValue && (
        <section className="mailNameTelega_container">
          <div className="mailNameTelega__mail_container">
            <img src={mailHome} alt="" className="wallet_img" />
            <input type="text" className="wallet_input" placeholder="Email" />
          </div>
          <div className="mailNameTelega__mail_container">
            <img src={profileHome} alt="" className="wallet_img" />
            <input type="text" className="wallet_input" placeholder="Name" />
          </div>
          <div className="mailNameTelega__mail_container">
            <img src={telegaHome} alt="" className="wallet_img" />
            <input
              type="text"
              className="wallet_input"
              placeholder="Telegram"
            />
          </div>
        </section>
      )}
    </>
  );
}

export default Wallet;
