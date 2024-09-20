import React from "react";
import arrRight from "../../assets/img/arrRight.svg";
import arrowUpDown from "../../assets/img/arrowUpDown.svg";
import infoSuccess from "../../assets/img/infoSuccess.svg";
import tether_usdtlogo_small from "../../assets/img/tether_usdtlogo_small.svg";
import RecentLine from "./RecentLine";

function Recent() {
  return (
    <section className="recent_container">
      <h3 className="recent_h3">Recent transactions</h3>
      <div className="recent_block">
        <RecentLine img1={tether_usdtlogo_small} img2={tether_usdtlogo_small} />
        <RecentLine
          img1={tether_usdtlogo_small}
          img2={tether_usdtlogo_small}
          blue="blue_footer"
        />
        <RecentLine img1={tether_usdtlogo_small} img2={tether_usdtlogo_small} />
        <RecentLine
          img1={tether_usdtlogo_small}
          img2={tether_usdtlogo_small}
          blue="blue_footer"
        />
        <RecentLine img1={tether_usdtlogo_small} img2={tether_usdtlogo_small} />
      </div>
    </section>
  );
}

export default Recent;
