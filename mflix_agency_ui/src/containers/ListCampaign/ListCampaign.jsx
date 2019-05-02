import React, {Component} from 'react';

import {Table, Pagination} from '../../components/MndComponents';
import FilterBox from '../../components/FilterBox';
import {removeVietnameseAccentAndLowercase} from '../../utils/stringFunctions';

import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './style.scss';

const defaultHeader = [
  {
    name: 'campaignId',
    title: 'Campaign ID',
    display: true
  }, {
    name: 'campaignName',
    title: 'Campaign name',
    display: true
  }, {
    name: 'brandName',
    title: 'Brand name',
    display: true
  }, {
    name: 'startDate',
    title: 'Start date',
    display: true
  }, {
    name: 'endDate',
    title: 'End date',
    display: true
  }, {
    name: 'videoTime',
    title: 'Video view Booking',
    display: true
  }, {
    title: 'Data package(MB)',
    name: 'awardValue',
    display: true
  }, {
    title: 'Status',
    name: 'campaignStatus',
    type: 'map',
    display: true
  }, {
    title: 'Result',
    display: true,
    name: 'result'
  }, {
    title: 'Unit cost',
    display: true,
    name: 'unitCost'
  }, {
    title: 'Cost uses',
    display: true,
    name: 'costUses'
  }
];

export default class ListCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      header: defaultHeader,
      toggleMenu: {
        advertiser: false,
        campaignName: false,
        date: false,
        column: false
      },
      filter: {},
      allCampaigns: [],
      page: 1,
      pageAmount: 1
    }
  }

  componentWillMount = () => {
    this.props.getAllCampaign().then(success => {
      let {listCampaign} = this.props;
      if (listCampaign.campaigns) {
        this.setState({
          allCampaigns: listCampaign.campaigns,
          page: 1,
          pageAmount: Math.ceil(listCampaign.campaigns.length / 10),
          campaigns: listCampaign.campaigns.slice(0, 10)
        });
      } else {
        this.setState({error: listCampaign.err});
      }
    }).catch(err => {
      let {listCampaign} = this.props;
      this.setState({
        error: listCampaign.err,
        errMessage: listCampaign.message
      }, () => {
        toast(
          this.state.errMessage === 'Unauthorized'
          ? 'Your login session has expired. Please log in again to use ours amazing features has created just for you!'
          : this.state.errMessage, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          onClose: () => this.state.errMessage === 'Unauthorized'
            ? this.props.history.push('/login')
            : null
        });
        if (listCampaign.message === 'Unauthorized') {
          setTimeout(() => {
            this.props.history.push('/login');
          }, 3000);
        }
      });
      console.log(err);
    });
  }

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
      return this.setState({
        filter
      }, () => {
        let {campaigns} = this.state;
        let searchFilter = Object.keys(filter).filter(key => key !== 'column' && filter[key]);
        console.log(searchFilter);
        let result = campaigns.filter(campaign => searchFilter.every(key => removeVietnameseAccentAndLowercase(campaign[key]).includes(removeVietnameseAccentAndLowercase(filter[key]))));
        console.log(result);
      });
    }
  };

  renderHeader = () => {
    let {header} = this.state;
    return header.filter((item) => item.display).map((item, id) => (<td key={id}
      style={{
        width: "15em !important",
      }}
    >
      {item.title}
    </td>))
  }

  renderTable = () => {
    let {header, campaigns} = this.state;
    if (!campaigns.length)
      return <tbody>
        <div className="table-nodata-message">No Campaign Data</div>
      </tbody>
    return (<tbody>
      <tr className="mnd-table-header">
        {this.renderHeader()}
      </tr>
      {
        campaigns.map((item, index) => <tr key={index} className="mnd-table-body">
          {
            header.filter((itm) => itm.display).map((itm, idx) => <td key={idx}>
              {(itm.name === 'campaignId') ? <a href={`/campaign-detail/${item[itm.name]}`}>{item[itm.name]}</a> :item[itm.name]}
            </td>)
          }
        </tr>)
      }
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
    return (<div className="list-campaign-wrapper">
      <ToastContainer/>
      <FilterBox filter={[
          {
            title: 'All advertiser',
            name: 'advertiser',
            type: 'search',
            placeholder: 'Search advertiser'
          }, {
            title: 'All campaign',
            name: 'campaignName',
            type: 'search',
            placeholder: 'Search campaign'
          }, {
            title: 'This month: Nov 1, 2018',
            name: 'date',
            type: 'date',
            value: '123'
          }, {
            title: '+ Add columns',
            name: 'column',
            type: 'button',
            menu: defaultHeader,
            value: header
          }, {
            title: 'Create new campaign',
            type: 'link',
            link: '/create-campaign'
          }
        ]} changeFilter={this.changeFilter.bind(this)} applyFilter={this.applyFilter.bind(this)} toggleMenu={toggleMenu}
      />
      <div className="list-campaign-container">

        <div className="management-container-main-bg list-campaign container col-sm-12">
          <Table body={this.renderTable()}/>
          <Pagination className="container-fluid" pageAmount={pageAmount} currentPage={page} switchPage={this.switchPage.bind(this)}/>
        </div>
      </div>
    </div>)
  }
}
