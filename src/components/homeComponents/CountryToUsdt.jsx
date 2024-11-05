import React, { useEffect, useState } from "react";
import axios from "axios";
import CountryToCurrBlock from "./CountryToCurrBlock";
import { fiatImageMap } from "../../assets/fiatImageMap";
import { flags } from "../../assets/flags.js";
import { useSelector } from "react-redux";

function CountryToUsdt() {
  const [currencyImages, setCurrencyImages] = useState({});
  const currencies = useSelector((state) => state.exchangeReducer.currencies);
  const fiat = currencies.filter((currency) => currency.type === 1);

  useEffect(() => {
    const fetchCurrencyImages = async () => {
      const imageUrls = {};

      for (const currency of currencies) {
        if (currency.icon) {
          try {
            const response = await axios.get(
              `${process.env.REACT_APP_SERVER_URL}/file/`,
              {
                params: { Url: currency.icon },
                responseType: "blob",
              }
            );
            const imageUrl = URL.createObjectURL(response.data);
            imageUrls[currency.value] = imageUrl;
          } catch (error) {
            console.error(`Error fetching image for ${currency.value}:`, error);
          }
        }
      }

      setCurrencyImages(imageUrls);
    };

    fetchCurrencyImages();
  }, [currencies]);

  return (
    <section className="countryToUsdt">
      {fiat.map((currency) => {
        const symbol = currency.value;
        const imgSrc = currencyImages[symbol] || fiatImageMap[symbol];
        const flagSrc = flags[symbol];

        return (
          <CountryToCurrBlock
            symbol={symbol}
            curr={imgSrc}
            key={symbol}
            flag={flagSrc}
          />
        );
      })}
    </section>
  );
}

export default CountryToUsdt;
