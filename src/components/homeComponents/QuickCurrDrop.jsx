import React from "react";
import QuickCurrDropItem from "./QuickCurrDropItem";

const coins = [
  { name: "Bitcoin", image: "path/to/bitcoin.png" },
  { name: "Ethereum", image: "path/to/ethereum.png" },
  { name: "Litecoin", image: "path/to/litecoin.png" },
  { name: "Ripple", image: "path/to/ripple.png" },
  { name: "Bitcoin Cash", image: "path/to/bitcoin-cash.png" },
  { name: "Cardano", image: "path/to/cardano.png" },
  { name: "Polkadot", image: "path/to/polkadot.png" },
  { name: "Chainlink", image: "path/to/chainlink.png" },
  { name: "Stellar", image: "path/to/stellar.png" },
  { name: "Monero", image: "path/to/monero.png" },
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
