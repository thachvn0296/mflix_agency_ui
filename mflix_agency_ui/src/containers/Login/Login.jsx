import React, {Component} from "react";

import LoginForm from '../../components/LoginForm'

import "./style.scss";

class Login extends Component {
  render() {
    return (<div className="login-container">
      <div className="login-form-wrapper">
        <div className="mission col-sm-12 col-md-7">
          <div className="mission-content col-sm-12 col-md-12 col-lg-9">
            <div className="title">OURS
              <br/>
              MISSION</div>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3"></div>
        </div>
        <div className="form-login-wrapper col-sm-12 col-md-5">
          <LoginForm login={this.props.login} loginPage={this.props.loginPage} history={this.props.history}/>
        </div>

      </div>
    </div>);
  }
}

export default Login;
