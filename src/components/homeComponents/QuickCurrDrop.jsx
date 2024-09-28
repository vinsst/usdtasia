import React from "react";
import QuickCurrDropItem from "./QuickCurrDropItem";

const rates = [
  { pair: "BTC/ETH", price: 0.065 },
  { pair: "BTC/USDT", price: 27000 },
  { pair: "BTC/BNB", price: 120 },
  { pair: "ETH/BTC", price: 15.38 },
  { pair: "ETH/USDT", price: 1800 },
  { pair: "ETH/BNB", price: 18.46 },
  { pair: "USDT/BTC", price: 0.000037 },
  { pair: "USDT/ETH", price: 0.00056 },
  { pair: "USDT/BNB", price: 0.00667 },
  { pair: "BNB/BTC", price: 0.00833 },
  { pair: "BNB/ETH", price: 0.0542 },
  { pair: "BNB/USDT", price: 150 },

  // Пари з валютами країн
  { pair: "BTC/USD", price: 27000 },
  { pair: "BTC/EUR", price: 25000 },
  { pair: "BTC/UAH", price: 1000000 },
  { pair: "BTC/JPY", price: 4000000 },
  { pair: "ETH/USD", price: 1800 },
  { pair: "ETH/EUR", price: 1700 },
  { pair: "ETH/UAH", price: 66000 },
  { pair: "ETH/JPY", price: 260000 },
  { pair: "USDT/USD", price: 1 },
  { pair: "USDT/EUR", price: 0.93 },
  { pair: "USDT/UAH", price: 36.6 },
  { pair: "USDT/JPY", price: 146 },
  { pair: "BNB/USD", price: 150 },
  { pair: "BNB/EUR", price: 140 },
  { pair: "BNB/UAH", price: 5500 },
  { pair: "BNB/JPY", price: 22000 },
];

const coins = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    type: "cryptocurrency",
    imageUrl: "https://example.com/images/btc.png",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    type: "cryptocurrency",
    imageUrl: "https://example.com/images/eth.png",
  },
  {
    name: "Tether",
    symbol: "USDT",
    type: "cryptocurrency",
    imageUrl: "https://example.com/images/usdt.png",
  },
  {
    name: "Binance Coin",
    symbol: "BNB",
    type: "cryptocurrency",
    imageUrl: "https://example.com/images/bnb.png",
  },

  // Валюти країн
  {
    name: "US Dollar",
    symbol: "USD",
    type: "fiat",
    imageUrl: "../../assets/img/kzt.svg",
  },
  {
    name: "Euro",
    symbol: "EUR",
    type: "fiat",
    imageUrl: "../../assets/img/amd.svg",
  },
  {
    name: "Ukrainian Hryvnia",
    symbol: "UAH",
    type: "fiat",
    imageUrl: "../../assets/img/hrn.svg",
  },
  {
    name: "Japanese Yen",
    symbol: "JPY",
    type: "fiat",
    imageUrl: "../../assets/img/azn.svg",
  },
];

function QuickCurrDrop() {
  return (
    <div className="quick__curency_dropdown">
      {coins.map((coin, index) => {
        return <QuickCurrDropItem key={index} name={coin.name} />;
      })}
    </div>
  );
}

export default QuickCurrDrop;
