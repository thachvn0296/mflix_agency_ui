import React, { Component } from "react";
import MFLIXLogo from "./images/mflix-logo-black.svg";

import "./style.scss";

export default class ManagementFooter extends Component {
  render() {
    return (
      <div className="management-footer-container container-fluid">
        <div className="box-footer-wrapper">
          <div className="col-sm-12 logo-container text-center">
            <img className="svg-img img-fit" src={MFLIXLogo} alt={"MFLIXLogo"} />
          </div>
          <div className="col-sm-12 text-center title padding-row hidden-h-500">
            AD ALPHA DIGITECH CO., LTD
          </div>
          <div className="col-sm-12 text-center hidden-h-500">
            <b>HN Headquarter:</b> Room 304, Talico Building, 22 Ho Giam, Quoc Tu Giam
            Ward, Dong Da District, Hanoi
          </div>
          <div className="col-sm-12 text-center hidden-h-500">
            <b>HCM Office:</b> Level 7, Win Home Building, 9 Hoa Cau Road, Ward 7, Phu
            Nhuan District, HCMC
          </div>
          <div className="col-sm-12 text-center padding-row tel-row hidden-h-500">
            <span><b>T:</b> +84 243 232 1881</span>
            <span><b>P:</b> +84 969 033 188</span>
          </div>
        </div>
      </div>
    );
  }
}
