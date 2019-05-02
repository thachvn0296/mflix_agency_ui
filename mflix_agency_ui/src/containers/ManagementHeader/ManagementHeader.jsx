import React, { Component } from "react";
import MFLIXLogo from "./images/mflix-logo.svg";

import "./style.scss";

export default class ManagementHeader extends Component {
  renderTitle = () => {
    let result = this.props.route.find(e => e.route === this.props.location.pathname);
    if (!result  || !result.title) return '';
    return result.title;
  }
  
  render() {
    return (
      <div className="management-header-container container-fluid">
        <div className="logo-container text-center">
          <a href="/home">
            <img className="img-fit" src={MFLIXLogo} alt="MFLIXLogo" />
          </a>
        </div>
        <div className="text-right management-header-content">
          <span className="hide-900 route-name">{
            this.renderTitle()
          }</span>
          <span className="hide-900">ADMETA Communications & Advertising</span>
          <span>
            <i className="fas fa-user" />
          </span>
          <span>
            <div className="dropdown">
              <span>
                <b>EN</b>
              </span>
              <div className="dropdown-content text-left">
                <p>
                  <img
                    className="flag"
                    src="https://lipis.github.io/flag-icon-css/flags/4x3/um.svg"
                    alt="United States Minor Outlying Islands Flag"
                  />
                  <span>English</span>
                </p>
                <p>
                  <img
                    className="flag"
                    src="https://lipis.github.io/flag-icon-css/flags/4x3/vn.svg"
                    alt="Vietnam Flag"
                  />
                  <span>Tiếng Việt</span>
                </p>
              </div>
            </div>
          </span>
        </div>
      </div>
    );
  }
}
