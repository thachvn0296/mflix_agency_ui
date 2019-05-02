import React, {Component} from 'react';

import {Table, Pagination} from '../../components/MndComponents';
import FilterBox from '../../components/FilterBox';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

const defaultHeader = [
  {
    name: 'creativeId',
    title: 'Creative ID',
    display: true
  }, {
    name: 'status',
    title: 'Status',
    display: true,
    type: "w80"
  }, {
    name: 'brandName',
    title: 'Brandname',
    display: true
  }, {
    name: 'name',
    title: 'Creative Name',
    display: true
  }, {
    name: 'status',
    title: 'Status',
    display: true
  }, {
    name: 'content',
    title: 'Content',
    display: true
  }, {
    name: 'action',
    title: 'Action',
    display: true,
    type: "w80"
  }
];

export default class CreativeManagement extends Component {
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
    let {header} = this.state;
    const campaigns = [
      {
        creativeId: '1',
        status: 'OK',
        brandName: 'OMO',
        creativeName: 'OMO Tết 1'
      }
    ];
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
        <td>OMO</td>
        <td>OMO Tết 1</td>
        <td>OMO Tết</td>
        <td>video/banner</td>
        <td className="w80">
          <div className="action-btn-box">
            <div className="action-wrapper">
              <i className="far fa-trash-alt"></i>
              <i className="far fa-eye"></i>
            </div>
          </div>
          <div className="line-in-middle"></div>
        </td>
      </tr>
      <tr className="mnd-table-body">
        <td>03</td>
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="test2" type="checkbox"/>
            <label className="tgl-btn" htmlFor="test2"></label>
          </div>
        </td>
        <td>OMO</td>
        <td>OMO Tết 2</td>
        <td>OMO Tết</td>
        <td>video/banner</td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>02</td>
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="test3" type="checkbox"/>
            <label className="tgl-btn" htmlFor="test3"></label>
          </div>
        </td>
        <td>OMO</td>
        <td>OMO Tết 3</td>
        <td>OMO Tết</td>
        <td>video/banner</td>
        <td></td>
      </tr>
      <tr className="mnd-table-body">
        <td>04</td>
        <td>
          <div className="toggle-cb-wrapper">
            <input className="tgl tgl-light" id="test4" type="checkbox"/>
            <label className="tgl-btn" htmlFor="test4"></label>
          </div>
        </td>
        <td>OMO</td>
        <td>OMO Tết 4</td>
        <td>OMO Tết</td>
        <td>video/banner</td>
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
    let {header, toggleMenu, page, pageAmount} = this.state;
    return (<div>
      <ToastContainer/>
      <FilterBox filter={[{
            title: '+ Create New Creative Adset',
            type: 'link',
            link: '/create-creative-preset'
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
