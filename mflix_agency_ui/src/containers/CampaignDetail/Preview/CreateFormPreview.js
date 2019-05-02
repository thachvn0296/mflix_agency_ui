import React, { Component } from "react";
import CreateCampaignPreview from "../../../components/CreateCampaignPreview";
import GaugeChart from "../../../components/GaugeChart";

import "./style.scss";

export default class CreateFormPreview extends Component {
  render() {
    return <div className="create-form-preview-wrapper container-fluid">
    <div className="col-sm-12 form-panel campaign-final-preview-box">
      <div className="title">
        Audience Size
      </div>
      <div className="content">
        <GaugeChart />
      <div className="potential-wrapper">
        Potential Reach 000 - 000.000
        </div>
      </div>

    </div>
    <div className="col-sm-12 form-panel campaign-final-preview-box">
      <div className="title">
        Preview
      </div>
      <div className="content">
        <CreateCampaignPreview layout="normal" />
      </div>
    </div>
    </div>;
  }
}
