import React, { Component } from 'react';
import { Pagination as Page, PaginationItem, PaginationLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import "./style.scss";

export default class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageAmount: this.props.pageAmount,
            currentPage: this.props.currentPage,
        }
    }

    componentWillReceiveProps = (nextProps) => {
        if (nextProps.pageAmount !== this.state.pageAmount || nextProps.currentPage !== this.state.currentPage) {
            this.setState({
                pageAmount: nextProps.pageAmount,
                currentPage: nextProps.currentPage,
            });
        }
    }

    switchPage = (page, event) => {
        event.preventDefault();
        this.setState({
            currentPage: page
        }, () => this.props.switchPage(page));
    }

    renderPaginationItems = () => {
        let { pageAmount, currentPage } = this.state;
        return Array.apply(null, Array(pageAmount)).map(((item, index) => <PaginationItem
            key={index}
            active={index + 1 === currentPage}
        >
            <PaginationLink onClick={this.switchPage.bind(this, index + 1)}>
                {index + 1}
            </PaginationLink>
        </PaginationItem>))
    }

    render() {
        return (
            <div className={this.props.className}>
                <Page>
                    {this.renderPaginationItems()}
                </Page>
            </div>
        )
    }
}
