import React, {Component} from "react";

import FilterBox from "../../components/FilterBox";
import BarChart from "../../components/BarChart";

import TotalCostRevenue from "../../components/TotalCostRevenue";
import TotalRevenue from "../../components/TotalRevenue";
import RevenueByAgency from "../../components/RevenueByAgency";
import {Table, Pagination} from '../../components/MndComponents';

import "./style.scss";

const mockData = {
  agency: {
    label: [
      "Premium Agency", "Standard Agency", "Brand"
    ],
    data: [
      20, 13, 5
    ],
    backgroundColor: ["#B496D4", "#A4D1E4", "#FDAE43"]
  }
};

const defaultHeader = [
  {
    name: "campaignId",
    title: "Campaign ID",
    display: true
  }, {
    name: "ioNumber",
    title: "IO Number",
    display: true
  }, {
    name: "campaignName",
    title: "Campaign Name",
    display: true
  }, {
    name: "brandName",
    title: "Brandname",
    display: true
  }, {
    name: "client",
    title: "Client",
    display: true
  }, {
    name: "startDate",
    title: "Start Date",
    display: true
  }, {
    name: "endDate",
    title: "End Date",
    display: true
  }, {
    name: "quantity",
    title: "Quantity",
    display: true
  }, {
    name: "dataPackage",
    title: "Data Package (MB)",
    display: true
  }, {
    name: "resultVideoView",
    title: "Result Video View",
    display: true
  }, {
    name: "resultTopUp",
    title: "Result Topup",
    display: true
  },
];

export default class RevenuePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      header: defaultHeader,
      toggleMenu: {
        agency: false,
        date: false,
      },
      filter: {},
      allCampaigns: [],
      page: 1,
      pageAmount: 1
    }
  }

  componentWillMount = () => {};

  changeFilter = (menu, filterName, value) => {
    if (filterName === "column") {
      this.setState({
        header: this.state.header.map(item => {
          if (item.name === menu)
            item.display = value;
          return item;
        })
      });
    }
  };

  renderHeader = () => {
    let {header} = this.state;
    return header.filter((item) => item.display).map((item, id) => (<td className={item.type} key={id}>
      {item.title}
    </td>))
  }

  renderTable = () => {
    let {header, campaigns} = this.state;
    return (<tbody>

      <tr className="mnd-table-header">
        {this.renderHeader()}
      </tr>
      <tr className="mnd-table-body">
        <td>01</td>
        <td>01-SUNLIGHT-EZGIFT</td>
        <td>Clean Holiday</td>
        <td>Sunlight</td>
        <td>Sunlight</td>
        <td>Oct 1 2018</td>
        <td>Oct 31 2018</td>
        <td>1.000.000</td>
        <td>5</td>
        <td>A</td>
        <td>C = A x Unit</td>
      </tr>
    </tbody>);
  }

  changeFilter = (name, value) => {
    let { filter } = this.state;
    filter[name] = value;
    this.setState({
      filter,
    });
  }

  applyFilter = (filterName, value) => new Promise((resolve, reject) => {
    if (filterName === 'column') {
      return (this.setState({
        header: this.state.header.map(item => {
          return Object.assign(item, {
            display: value[item.name]
          })
        })
      }, () => resolve()));
    }
  });

  switchPage = (page) => {
    this.setState({
      page,
      campaigns: this.state.allCampaigns.slice((page - 1) * 10, (page - 1) * 10 + 10)
    });
  }

  render() {
    let {header, toggleMenu, page, pageAmount, filter} = this.state;
    return (<div>
      <FilterBox filter={[{
        title: filter.agency ? filter.agency : 'Select agency type',
        name: 'agency',
        type: 'search',
        options: ['Premium Agency', 'Standard Agency', 'Brand']
      }, {
        title: 'Today',
        name: 'date',
        type: 'date',
        value: new Date(),
      }, {
        title: 'Export',
        type: 'button',
      }]} changeFilter={this.changeFilter.bind(this)} applyFilter={this.applyFilter.bind(this)} toggleMenu={toggleMenu}/>
      <div className="list-campaign-container">
        <div className="management-container-main-bg list-campaign container col-sm-12">

          <div className="row">
            <div className="pie-sticky-div curve-box">
              <TotalCostRevenue/>
            </div>

            <div className="pie-sticky-div curve-box">
              <TotalRevenue/>
            </div>

            <div className="pie-sticky-div curve-box">
              <RevenueByAgency chartData={{
                  labels: mockData.agency.label,
                  datasets: [
                    {
                      data: mockData.agency.data,
                      backgroundColor: mockData.agency.backgroundColor
                    }
                  ]
                }} title="Views by location" legendPosition=""/>
            </div>
          </div>

          <div className="row revenue-table">
            <Table header={this.renderHeader()} body={this.renderTable()}/>
            <Pagination className="container-fluid" pageAmount={pageAmount} currentPage={page} switchPage={this.switchPage.bind(this)}/>
          </div>

        </div>
      </div>
    </div>);
  }
}
