import React, {Component} from 'react';
import LoadingOverlay from 'react-loading-overlay';
import PacmanLoader from 'react-spinners/PacmanLoader'

import './style.scss';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      isLoading: false
    }
  }

  changeInput = (key, value) => this.setState({[key]: value});

  submitLogin = () => {
    this.setState({isLoading: true})
    this.props.login(this.state.userName, this.state.password).then(success => {
      console.log(success);
      this.props.history.goBack();
    }).catch(err => console.log(err)).then(() => {
      this.setState({isLoading: false})
    });

  }

  renderMessage = () => {
    let {loginPage} = this.props;
    if (loginPage.err !== null && loginPage.err !== undefined) {
      if (loginPage.err) {
        return (<div className="login-fail text-center">
          {loginPage.message}
        </div>);
      } else {

        // Move to a new location or you can do something else
        window.location.href = "http://103.74.123.73:5000/report";
        return (<div className="login-success text-center">
          Login Successful
        </div>);
      }
    }
  }

  render() {
    let {userName, password, isLoading} = this.state;
    return (<LoadingOverlay active={isLoading} spinner={<PacmanLoader />} text=''>

      <div className={`login-form${(isLoading) ? ' blur-all': ''}`}>
        <div className="form">
          <div className="logo">
            <div className="mflix-logo">SIGN IN</div>
          </div>
          <div className="input-form">
            <span>
              <i className="fas fa-user"></i>
            </span>
            <input className="login-input" value={userName} onChange={e => this.changeInput('userName', e.target.value)}/>
          </div>
          <div className="input-form">
            <span>
              <i className="fas fa-key"></i>
            </span>
            <input className="login-input" value={password} type="password" onChange={e => this.changeInput('password', e.target.value)}/>
          </div>
          <button className="login-button" onClick={this.submitLogin.bind(this)}>LOGIN</button>
          <div className="input-form">
            <div className="reg-link">
              <a href="#">Register a new account</a>
            </div>
          </div>
          {this.renderMessage()}
        </div>
      </div>
    </LoadingOverlay>)
  }
}
