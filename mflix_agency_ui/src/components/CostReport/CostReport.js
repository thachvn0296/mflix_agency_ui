import React, { Component } from "react";
import Logo from "./images/cost.svg";

import "./style.scss";

class CostReport extends Component {
  render() {
    return (
      <div className="detail-cost-report-wrapper">
        <div className="detail-report-title">
          <div className="title-text">
            <span className="logo">
              <img className="img-fit" src={Logo} alt="logo" />
            </span>
            <span className="text">Cost</span>
          </div>
          <div className="report-badge text-center">62%</div>
        </div>
        <div className="detail-report-content">
          <div className="box">
              <div className="line">Total Cost Used</div>
            <div className="line booking-result-data">933.000.000</div>
          </div>
          <div className="box">
              <div className="line">Total Cost Remaining</div>
            <div className="line booking-result-data">67.000.000</div>
          </div>
        </div>
      </div>
    );
  }
}

export default CostReport;
