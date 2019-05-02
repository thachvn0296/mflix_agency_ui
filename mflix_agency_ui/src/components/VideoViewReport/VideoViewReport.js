import React, { Component } from "react";
import Logo from "./images/VIdeo-view.svg";

import "./style.scss";

class VideoViewReport extends Component {
  render() {
    return (
      <div className="detail-view-report-wrapper">
        <div className="detail-report-title">
          <div className="title-text">
            <span className="logo">
              <img className="img-fit" src={Logo} alt="logo" />
            </span>
            <span className="text">Video View</span>
          </div>
          <div className="report-badge text-center">86%</div>
        </div>
        <div className="detail-report-content">
          <div className="left-box">
            <div className="wrapper">
              <div className="line title">Booking</div>
            <div className="line booking-data">1.000.000</div>
            </div>
          </div>
          <div className="right-box">
            <div className="wrapper">
              <div className="line title">Result</div>
            <div className="line booking-result-data">1.000.000</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoViewReport;
