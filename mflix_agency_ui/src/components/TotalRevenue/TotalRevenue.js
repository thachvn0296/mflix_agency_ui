import React, { Component } from "react";
import Logo from "./images/total-revenue.svg";

import "./style.scss";

class TotalRevenue extends Component {
  render() {
    return (
      <div className="detail-revenue-wrapper">
        <div className="detail-report-title">
          <div className="title-text">
            <span className="logo">
              <img className="img-fit" src={Logo} alt="logo" />
            </span>
            <span className="text">Total Revenue</span>
          </div>
        </div>
        <div className="detail-report-content">
          <div className="box">
              <div className="line text-capital">Video</div>
              <div className="line booking-result-data">0</div>
          </div>
          <div className="box">
              <div className="line text-capital">Data Topup</div>
              <div className="line booking-result-data">0</div>
          </div>
        </div>
      </div>
    );
  }
}

export default TotalRevenue;
