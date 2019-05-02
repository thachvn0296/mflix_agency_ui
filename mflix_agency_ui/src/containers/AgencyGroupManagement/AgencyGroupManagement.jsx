import React, {Component} from 'react';

import {Table, Pagination} from '../../components/MndComponents';
import FilterBox from '../../components/FilterBox';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

const defaultHeader = [
  {
    name: 'no',
    title: 'No.',
    display: true,
    type: "w80"
  }, {
    name: 'status',
    title: 'Status',
    display: true,
    type: "w80"
  }, {
    name: 'ioNumber',
    title: 'IO Number',
    display: true
  }, {
    name: 'company',
    title: 'Company',
    display: true
  }, {
    name: 'client',
    title: 'Client',
    display: true
  }, {
    name: 'brandName',
    title: 'Brandname',
    display: true
  }, {
    name: 'date',
    title: 'Date',
    display: true
  }, {
    name: 'creator',
    title: 'Created by',
    display: true
  }, {
    name: 'totalCost',
    title: 'Total Cost',
    display: true
  }, {
    name: 'costRemaining',
    title: 'Cost Remaining',
    display: true
  }
];

export default class AgencyGroupManagement extends Component {
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
      },
      filter: {},
      allCampaigns: [],
      page: 1,
      pageAmount: 1
    }
  }

  componentWillMount = () => {}

  changeFilter = (menu, filterName, value) => {
    if (filterName === 'column') {
      this.setState({
        header: this.state.header.map(item => {
          if (item.name === menu)
            item.display = value;
          return item;
        })
      });
    }
  }

  applyFilter = (filterName, value) => {
    if (filterName === 'column') {
      return (this.setState({
        header: this.state.header.map(item => {
          return Object.assign(item, {
            display: value[item.name]
          })
        })
      }));
    } else {
      let {filter} = this.state;
      filter[filterName] = value;
      return this.setState({filter});
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
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="test1" type="checkbox"/>
            <label className="tgl-btn" htmlFor="test1"></label>
          </div>
        </td>
        <td>01-SUNLIGHT-EZGIFT</td>
        <td>WPP</td>
        <td>Unilever</td>
        <td>Sunlight DWL</td>
        <td>10/12/2018</td>
        <td>Hanh.nguyen</td>
        <td>E = Total Cost (1) + Total Cost (2)</td>
        <td>Y = D</td>
      </tr>
      <tr className="mnd-table-body">
        <td>02</td>
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="test2" type="checkbox"/>
            <label className="tgl-btn" htmlFor="test2"></label>
          </div>
        </td>
        <td>02-SUNLIGHT-EZGIFT</td>
        <td>WPP</td>
        <td>Unilever</td>
        <td>Sunlight DWL</td>
        <td>10/12/2018</td>
        <td>Hanh.nguyen</td>
        <td>E = Total Cost (1) + Total Cost (2)</td>
        <td>Y = D</td>
      </tr>
      <tr className="mnd-table-body">
        <td>03</td>
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="test3" type="checkbox"/>
            <label className="tgl-btn" htmlFor="test3"></label>
          </div>
        </td>
        <td>03-SUNLIGHT-EZGIFT</td>
        <td>WPP</td>
        <td>Unilever</td>
        <td>Sunlight DWL</td>
        <td>11/12/2018</td>
        <td>Hanh.nguyen</td>
        <td>E = Total Cost (1) + Total Cost (2)</td>
        <td>Y = D</td>
      </tr>
      <tr className="mnd-table-body">
        <td>04</td>
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="test4" type="checkbox" checked/>
            <label className="tgl-btn" htmlFor="test4"></label>
          </div>
        </td>
        <td>04-SUNLIGHT-EZGIFT</td>
        <td>WPP</td>
        <td>Unilever</td>
        <td>Sunlight DWL</td>
        <td>12/12/2018</td>
        <td>Hanh.nguyen</td>
        <td>E = Total Cost (1) + Total Cost (2)</td>
        <td>Y = D</td>
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
    let {header, toggleMenu, page, pageAmount} = this.state;
    return (<div>
      <ToastContainer/>
      <FilterBox filter={[{
            title: '+ Create New Agency',
            type: 'link',
            link: '/create-new-agency-group'
          }
        ]} changeFilter={this.changeFilter.bind(this)} applyFilter={this.applyFilter.bind(this)} toggleMenu={toggleMenu}/>
      <div className="creative-management-container">

        <div className="management-container-main-bg list-creative container col-sm-12">
          <Table body={this.renderTable()}/>
          <Pagination className="container-fluid" pageAmount={pageAmount} currentPage={page} switchPage={this.switchPage.bind(this)}/>

        </div>
      </div>
    </div>)
  }
}
