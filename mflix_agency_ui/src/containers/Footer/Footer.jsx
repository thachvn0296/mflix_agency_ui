import React, { Component } from "react";

import "./style.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="button-group">
          <button className="menu-button">
            <i className="icon ico-report-management"></i>
            <div>Report Management</div>
          </button>
          <button className="menu-button">
            <i className="icon ico-creative-management"></i>
            <div>Creative Management</div>
          </button>
          <button className="menu-button">
            <i className="icon ico-campaign-management"></i>
            <div>Campaign Management</div>
          </button>
          <button className="menu-button">
            <i className="icon ico-account-management"></i>
            <div>Account Management</div>
          </button>
          <button className="menu-button">
            <i className="icon ico-agency-management"></i>
            <div>Agency Management</div>
          </button>
          <button className="menu-button">
            <i className="icon ico-io-management"></i>
            <div>IO Management</div>
          </button>
          <button className="menu-button">
            <i className="icon ico-price-management"></i>
            <div>Price Management</div>
          </button>
          <button className="menu-button">
            <i className="icon ico-revenue-management"></i>
            <div>Revenue Management</div>
          </button>
        </div>
      </div>
    );
  }
}
