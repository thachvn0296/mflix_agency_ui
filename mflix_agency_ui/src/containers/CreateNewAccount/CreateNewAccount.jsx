import React, {Component} from "react";

import FilterBox from "../../components/FilterBox";
import Dropzone from "react-dropzone";
import {Table, Pagination} from '../../components/MndComponents';
import {Select} from 'antd';

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
    name: "catalog",
    title: "Catalog",
    display: true
  }, {
    name: "client",
    title: "Client",
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
    name: "quantity",
    title: "Quantity",
    display: true
  }, {
    title: "Data Package (MB)",
    name: "dataPackage",
    display: true
  }, {
    title: "Result",
    name: "result",
    type: "map",
    display: true
  }, {
    title: "Cost",
    display: true,
    name: "cost"
  }, {
    title: "Revenue",
    display: true,
    name: "revenue"
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

export default class CreateNewAccount extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      campaigns: [],
      header: defaultHeader,
      toggleMenu: {
        advertiser: false,
        campaign: false,
        date: false,
        column: false
      },
      filter: {},
      allCampaigns: [],
      page: 1,
      pageAmount: 1,
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

  renderHeader = () => {
    let {header} = this.state;
    return header.filter((item) => item.display).map((item, id) => (<td key={id}>
      {item.title}
    </td>))
  }

  renderTable = () => {
    let {header, campaigns} = this.state;
    return (<tbody>

      <tr className="mnd-table-header">
        {this.renderHeader()}
      </tr>
      <tr className="mnd-table-body title-row">
        <td>Account Management</td>
        <td>Sunlight</td>
        <td>Oct 1 2018</td>
        <td>Oct 31 2018</td>
        <td>1.000.000</td>
        <td>5</td>
        <td>A</td>
        <td>B = A x Buying Cc</td>
        <td>C = A x Unit</td>
      </tr>
      <tr className="mnd-table-body">
        <td>View Login Account Detail</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Create Login Account</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Update Account</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Remove Account</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Update Account Status</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Change Account Password</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Reset Login Account</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr><tr className="mnd-table-body title-row">
        <td>Account Management</td>
        <td>Sunlight</td>
        <td>Oct 1 2018</td>
        <td>Oct 31 2018</td>
        <td>1.000.000</td>
        <td>5</td>
        <td>A</td>
        <td>B = A x Buying Cc</td>
        <td>C = A x Unit</td>
      </tr>
      <tr className="mnd-table-body">
        <td>View Login Account Detail</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Create Login Account</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Update Account</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Remove Account</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Update Account Status</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Change Account Password</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>Reset Login Account</td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>);
  }

  switchPage = (page) => {
    this.setState({
      page,
      campaigns: this.state.allCampaigns.slice((page - 1) * 10, (page - 1) * 10 + 10)
    });
  }

  render() {
    let {
      header,
      toggleMenu,
      imgfiles,
      selectedLayout,
      page,
      pageAmount
    } = this.state;
    const prefixImageDragzone = (<div>
      <div className="dropzone-title col-sm-12"></div>
      <div className="dropzone-icon col-sm-12 text-center h70">
        <span>
          <i className="fas ico-upload l-50-p"/>
        </span>
      </div>
    </div>);

    const imgthumbs = imgfiles.map(file => (<div style={thumb}>
      <div style={thumbInner}>
        <img src={file.preview} style={img}/>
      </div>
    </div>));

    return (<div>
      <FilterBox filter={[
          , {
            title: 'Account Management',
            type: 'link',
            link: '/account-management'
          }
        ]}/>
      <div className="create-new-io">
        <div className="management-container-main-bg list-new-io container col-sm-12">

          <div className="box-wrapper">
            <div className="curve-box new-price-box">
              <div className="title">
                Basic Info
              </div>
              <div className="content">
                <div className="row-item">
                  <div className="row-title">Name</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
                <div className="row-item">
                  <div className="row-title">Email</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
                <div className="row-item">
                  <div className="row-title">Phone</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
                <div className="row-item">
                  <div className="row-title">Company</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box-wrapper">
            <div className="curve-box new-price-box">
              <div className="title">
                Permission
              </div>
              <div className="content">
                <div className="row-item row">
                  <div className="col-sm-12">
                    <div className="row-title">xxx</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row-title">xxx</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                </div>

                <div className="row-item row">
                  <div className="col-sm-12">
                    <div className="row-title">xxx</div>
                    <div className="input-item">
                      <Select/>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="row-title">xx</div>
                    <div className="input-item">
                      <Select/>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
        <div className="container col-sm-12">
          <Table body={this.renderTable()}/>
          <Pagination className="container-fluid" pageAmount={pageAmount} currentPage={page} switchPage={this.switchPage.bind(this)}/>
        </div>
        <div className="btn-wrapper">
          <button className="btn special-button">Save</button>
        </div>
      </div>
    </div>);
  }
}
