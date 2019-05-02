import React, { Component } from "react";

import FilterBox from "../../components/FilterBox";

import { Input, Select } from "antd";

import "./style.scss";
const Option = Select.Option;

const mockData = {
  agency: {
    label: ["Premium Agency", "Standard Agency", "Brand"],
    data: [20, 13, 5],
    backgroundColor: ["#F76760", "#4E6693", "#4FA8AF"]
  }
};

const defaultHeader = [
  {
    name: "campaignId",
    title: "Campaign ID",
    display: true
  },
  {
    name: "campaignName",
    title: "Campaign name",
    display: true
  },
  {
    name: "brandName",
    title: "Brand name",
    display: true
  },
  {
    name: "startDate",
    title: "Start date",
    display: true
  },
  {
    name: "endDate",
    title: "End date",
    display: true
  },
  {
    name: "videoTime",
    title: "Video view Booking",
    display: true
  },
  {
    title: "Data package(MB)",
    name: "awardValue",
    display: true
  },
  {
    title: "Status",
    name: "campaignStatus",
    type: "map",
    display: true
  },
  {
    title: "Result",
    display: true,
    name: "result"
  },
  {
    title: "Unit cost",
    display: true,
    name: "unitCost"
  },
  {
    title: "Cost uses",
    display: true,
    name: "costUses"
  }
];

const thumbsContainer = {
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

export default class CreateNewAgencyGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      header: defaultHeader,
      toggleMenu: {
        creative: false
      },
      selectedLayout: {
        type: "default",
        layoutType: "video"
      },
      imgfiles: [],
      vidfiles: []
    };
    this.changeDropImage.bind(this.state.imgfiles);
  }

  changeUploadImage = e => {
    console.log(e);
  };

  changeDropImage = e => {
    this.setState({
      imgfiles: e.map(file => ({
        ...file,
        preview: URL.createObjectURL(file)
      }))
    });
    this.changeUploadImage(e);
  };

  componentWillMount = () => {};

  render() {
    let { header, toggleMenu, imgfiles, selectedLayout } = this.state;
    const prefixImageDragzone = (
      <div>
        <div className="dropzone-title col-sm-12" />
        <div className="dropzone-icon col-sm-12 text-center h70">
          <span>
            <i className="fas ico-upload l-50-p" />
          </span>
        </div>
      </div>
    );

    const imgthumbs = imgfiles.map(file => (
      <div style={thumb}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} />
        </div>
      </div>
    ));

    return (
      <div>
        <FilterBox
          filter={[
            ,
            {
              title: "Agency Group Management",
              type: "link",
              link: "/agency-group-management"
            }
          ]}
        />
        <div className="create-new-agency-group">
          <div className="management-container-main-bg list-new-io container col-sm-12">
            <div className="box-wrapper">
              <div className="curve-box new-price-box">
                <div className="title">Basic Info</div>
                <div className="content container">
                  <div className="row-item">
                    <div className="row-title">*Tpye of Agency</div>
                    <div className="input-item">
                      <Input  size="large"/>
                    </div>
                  </div>
                  <div className="row-item">
                    <div className="row-title">Describe</div>
                    <div className="input-item">
                      <Input.TextArea autosize={{ minRows: 6, maxRows: 12 }} size="large"/>
                    </div>
                  </div>
                  <div className="row-item">
                    <div className="row-title">Status</div>
                    <div className="input-item">
                      <Select defaultValue="enable" size="large">
                        <Option value="enable">Active</Option>
                        <Option value="disable">Deactive</Option>
                      </Select>
                    </div>
                  </div>
                  <div className="btn-wrapper row-item">
                    <button className="btn special-button">Save</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
