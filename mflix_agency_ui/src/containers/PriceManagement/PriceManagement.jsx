import React, { Component } from 'react';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import FilterBox from '../../components/FilterBox';
import { Table, Pagination } from '../../components/MndComponents';
import './style.scss';

const defaultHeader = [{
    name: 'status',
    title: 'Status',
    display: true,
}, {
    name: 'vdtp',
    title: 'VDTP',
    display: true,
}, {
    name: 'premiumAgency',
    title: 'Premium Agency',
    display: true,
}, {
    name: 'standardAgency',
    title: 'Standard Agency',
    display: true,
}, {
    name: 'brand',
    title: 'Brand',
    display: true,
}, {
    name: 'action',
    title: 'Action',
    display: true,
}]

export default class PriceManagement extends Component {
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

    switchPage = (page) => {
        this.setState({
            page,
            campaigns: this.state.allCampaigns.slice((page - 1) * 10, (page - 1) * 10 + 10)
        });
    }

    renderHeader = () => {
        let { header } = this.state;
        return header.filter((item) => item.display).map((item, id) => (<td className={item.type} key={id}>
            {item.title}
        </td>));
    }

    renderTable = () => {
        return (
            <tbody>
                <tr className="mnd-table-header">
                    {this.renderHeader()}
                </tr>
                <tr className="mnd-table-body">
                    <td>
                        <div className="toggle-cb-wrapper">
                            <input className="tgl tgl-light" id="test1" type="checkbox" />
                            <label className="tgl-btn" htmlFor="test1"></label>
                        </div>
                    </td>
                    <td>{`VDTP < 8s`}</td>
                    <td>{`130 VND`}</td>
                    <td>260 VND</td>
                    <td>455 VND</td>
                    <td>Sua / xoa</td>
                </tr>
                <tr className="mnd-table-body">
                    <td>
                        <div className="toggle-cb-wrapper">
                            <input className="tgl tgl-light" id="test2" type="checkbox" />
                            <label className="tgl-btn" htmlFor="test2"></label>
                        </div>
                    </td>
                    <td>{`8s <= VDTP < 22s`}</td>
                    <td>{`200 VND`}</td>
                    <td>400 VND</td>
                    <td>700 VND</td>
                    <td>Sua / xoa</td>
                </tr>
                <tr className="mnd-table-body">
                    <td>
                        <div className="toggle-cb-wrapper">
                            <input className="tgl tgl-light" id="test3" type="checkbox" />
                            <label className="tgl-btn" htmlFor="test3"></label>
                        </div>
                    </td>
                    <td>{`22 <= VDTP < 31s`}</td>
                    <td>{`250 VND`}</td>
                    <td>500 VND</td>
                    <td>875 VND</td>
                    <td>Sua / xoa</td>
                </tr>
            </tbody>
        );
    };

    render() {
        let { header, toggleMenu, page, pageAmount } = this.state;
        return (
            <div>
                <ToastContainer />
                <FilterBox filter={[{
                    title: '+ Create New Price',
                    type: 'link',
                    link: '/create-new-price'
                }]} />
                <div className="creative-management-container">

                    <div className="management-container-main-bg list-creative container col-sm-12">
                        <Table body={this.renderTable()} />
                        <Pagination className="container-fluid" pageAmount={pageAmount} currentPage={page} switchPage={this.switchPage.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
}