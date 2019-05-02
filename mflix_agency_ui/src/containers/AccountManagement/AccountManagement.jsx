import React, { Component } from 'react';

import { Table, Pagination } from '../../components/MndComponents';
import FilterBox from '../../components/FilterBox';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Select } from 'antd';

import './style.scss';

const defaultHeader = [
  {
    name: 'No.',
    title: 'No.',
    display: true
  }, {
    name: 'status',
    title: 'Status',
    display: true
  }, {
    name: 'name',
    title: 'Name',
    display: true
  }, {
    name: 'email',
    title: 'Email',
    display: true
  }, {
    name: 'phone',
    title: 'Phone',
    display: true
  }, {
    name: 'account',
    title: 'Account',
    display: true
  }, {
    title: 'Company',
    name: 'company',
    display: true
  }, {
    title: 'Superior Account',
    display: true,
    name: 'superiorAccount'
  }, {
    title: 'Type of Agency',
    display: true,
    name: 'typeOfAgency'
  }, {
    title: 'Permission',
    display: true,
    name: 'permission'
  }, {
    title: 'Approve',
    name: 'approve',
    display: true,
  }
];

export default class AccountManagement extends Component {
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

  componentWillMount = () => { }

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
      let { filter } = this.state;
      filter[filterName] = value;
      return this.setState({ filter });
    }
  };

  renderHeader = () => {
    let { header } = this.state;
    return header.filter((item) => item.display).map((item, id) => (<td key={id}>
      {item.title}
    </td>))
  }

  renderTable = () => {
    let { header, campaigns } = this.state;
    return (<tbody>

      <tr className="mnd-table-header">
        {this.renderHeader()}
      </tr>
      <tr className="mnd-table-body">
        <td>01</td>
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="acc1" type="checkbox" />
            <label className="tgl-btn" htmlFor="acc1"></label>
          </div>
        </td>
        <td>Từ Bảo Long</td>
        <td>long.tu@admeta.vn</td>
        <td>097.xxx.xxx</td>
        <td>Longtu</td>
        <td>Admeta</td>
        <td></td>
        <td></td>
        <td></td>
        <td><Select /></td>
      </tr>
      <tr className="mnd-table-body">
        <td>02</td>
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="acc2" type="checkbox" />
            <label className="tgl-btn" htmlFor="acc2"></label>
          </div>
        </td>
        <td>Quynh Do</td>
        <td>quynh.do@admeta.vn</td>
        <td>097.xxx.xxx</td>
        <td>Quynhdo</td>
        <td>Admeta</td>
        <td></td>
        <td></td>
        <td></td>
        <td><Select /></td>
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
    let { header, toggleMenu, page, pageAmount } = this.state;
    return (<div>
      <ToastContainer />
      <FilterBox filter={[{
        title: '+ Create New Account',
        type: 'link',
        link: '/create-new-account'
      }
      ]} changeFilter={this.changeFilter.bind(this)} applyFilter={this.applyFilter.bind(this)} toggleMenu={toggleMenu} />
      <div className="creative-management-container">

        <div className="management-container-main-bg list-creative container-fluid col-sm-12">
          <Table body={this.renderTable()} />
          <Pagination className="container-fluid" pageAmount={pageAmount} currentPage={page} switchPage={this.switchPage.bind(this)} />
        </div>

      </div>
    </div>)
  }
}
