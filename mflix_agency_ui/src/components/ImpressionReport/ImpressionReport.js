import React, { Component } from "react";
import Logo from "./images/impressions.svg";

import "./style.scss";

class ImpressionReport extends Component {
  render() {
    return (
      <div className="detail-impression-report-wrapper">
        <div className="detail-report-title">
          <div className="title-text">
            <span className="logo">
              <img className="img-fit" src={Logo} alt="logo" />
            </span>
            <span className="text">Impression</span>
          </div>
        </div>
        <div className="detail-report-content">
          <div className="box">
              <div className="line booking-result-data">20.000.000</div>
          </div>
          <div className="box">
              <div className="line">
                Conversion Rate:
                <span className="conversion-rate-result">5%</span>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ImpressionReport;
