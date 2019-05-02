import React, { Component } from "react";

import FilterBox from "../../components/FilterBox";

import { Input } from 'antd';

import "./style.scss";

const mockData = {
  agency: {
    label: [
      "Premium Agency", "Standard Agency", "Brand"
    ],
    data: [
      20, 13, 5
    ],
    backgroundColor: ["#F76760", "#4E6693", "#4FA8AF"]
  }
};

const defaultHeader = [
  {
    name: "campaignId",
    title: "Campaign ID",
    display: true
  }, {
    name: "campaignName",
    title: "Campaign name",
    display: true
  }, {
    name: "brandName",
    title: "Brand name",
    display: true
  }, {
    name: "startDate",
    title: "Start date",
    display: true
  }, {
    name: "endDate",
    title: "End date",
    display: true
  }, {
    name: "videoTime",
    title: "Video view Booking",
    display: true
  }, {
    title: "Data package(MB)",
    name: "awardValue",
    display: true
  }, {
    title: "Status",
    name: "campaignStatus",
    type: "map",
    display: true
  }, {
    title: "Result",
    display: true,
    name: "result"
  }, {
    title: "Unit cost",
    display: true,
    name: "unitCost"
  }, {
    title: "Cost uses",
    display: true,
    name: "costUses"
  }
];

export default class CreateNewPrice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      header: defaultHeader,
      toggleMenu: {
        advertiser: false,
        campaign: false,
        date: false,
        column: false
      }
    }
  }

  componentWillMount = () => { };

  render() {
    let { header, toggleMenu } = this.state;
    return (<div>
      <FilterBox filter={[
        , {
          title: 'Price Management',
          type: 'link',
          link: '/price-management'
        }
      ]} />
      <div className="create-new-price">
        <div className="management-container-main-bg list-new-price container col-sm-12">

          <div className="row">
            <div className="curve-box new-price-box">
              <div className="title">
                Buying Cost
              </div>
              <div className="content">
                <div className="row-header row-wrapper">
                  <div className="row-item">Video Timing Purchase (VDTP)</div>
                  <div className="row-item">Premium Agency</div>
                  <div className="row-item">Standard Agency</div>
                  <div className="row-item">Brand</div>
                </div>
                <div className="row-content row-wrapper">
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                </div>
                <div className="row-content row-wrapper">
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                </div>
                <div className="row-content row-wrapper">
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                </div>
              </div>
              <div className="content">
                <div className="row-header row-wrapper">
                  <div className="row-item">Video Timing Purchase (VDTP)</div>
                  <div className="row-item"></div>
                </div>
                <div className="row-content row-wrapper">
                  <div className="row-item"><Input /></div>
                  <div className="row-item"><Input /></div>
                </div>
                <div className="row-content row-wrapper row-butotn">
                  <div className="btn-wrapper">
                    <button className="btn special-button">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div >);
  }
}
