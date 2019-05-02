import React, {Component} from "react";

import "./style.scss";

export default class StepChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listChecker: [
        {
          status: 'error',
          message: 'Message: The form has some Error'
        }, {
          status: 'done',
          message: 'Message: Done'
        }, {
          status: 'emp',
          message: 'Message: Empty'
        }, {
          status: '',
          message: 'Message: Empty'
        }, {
          status: '',
          message: 'Message: Empty'
        }
      ]
    }
    this.liStyle = this.liStyle.bind(this);
  }

  liStyle = (status) => {
    console.log(status);
    switch (status) {
      case 'error':
        return 'active error';
      case 'done':
        return 'active';
      default:
        return ''
    }
  }

  render() {
    const {listChecker} = this.state;

    return (<div className="step-checker-container">
      <ul className="progressbar">
        <li className={this.liStyle(listChecker[0].status)}>
          <span>
            {listChecker[0].message}
          </span>
        </li>
        <li className={this.liStyle(listChecker[1].status)}>
          <span>
            {listChecker[1].message}
          </span>
        </li>
        <li className={this.liStyle(listChecker[2].status)}>
          <span>
            {listChecker[2].message}
          </span>
        </li>
        <li className={this.liStyle(listChecker[3].status)}>
          <span>
            {listChecker[3].message}
          </span>
        </li>
        <li className={this.liStyle(listChecker[4].status)}>
          <span>
            {listChecker[4].message}
          </span>
        </li>
      </ul>
    </div>);
  }
}
