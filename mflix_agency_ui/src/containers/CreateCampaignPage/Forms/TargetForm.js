import React, {Component} from "react";

import "./style.scss";

export default class TargetForm extends Component {
  render() {
    return (<div className="create-form">
      <div className="box">
        <div className="form-header">
          <div className="index-badge text-center">2</div>
          Target Form
        </div>
        <div className="form-body">

          <div className="col-sm-12 input-box-wrapper">
            <div className="title-text">Title</div>
            <div className="input-source">
              <input className="form-control"/>
            </div>
          </div>
          <div className="col-sm-12 input-box-wrapper">
            <div className="title-text">Title</div>
            <div className="input-source">
              <input className="form-control"/>
            </div>
          </div>
          <div className="col-sm-12 input-box-wrapper">
            <div className="title-text">Title</div>
            <div className="input-source">
              <input className="form-control"/>
            </div>
          </div>
          <div className="col-sm-12 input-box-wrapper">
            <div className="title-text">Title</div>
            <div className="input-source">
              <input className="form-control"/>
            </div>
          </div>

        </div>
      </div>
    </div>);
  }
}
