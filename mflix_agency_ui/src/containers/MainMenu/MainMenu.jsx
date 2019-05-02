import React, { Component } from "react";
import MFLIXLogo from "./images/mflix-logo.svg";
import "./style.scss";

export default class MainMenu extends Component {
  render() {
    return (
      <div className="main-menu-container">
        <div className="navbar navbar-default header-container">
          <div className="container-fluid">
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-collapse"
              >
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="/">
                <img className="svg-img logo" src={MFLIXLogo} alt="MFLIXLogo" />
              </a>
              <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav list-inline">
                  <li>
                    <a href="home">Home</a>
                  </li>
                  <li>
                    <a href="about">About us</a>
                  </li>
                  <li>
                    <a href="store">Store</a>
                  </li>
                  <li className="header-login-btn">
                    <a href="login">Signup / Login</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
