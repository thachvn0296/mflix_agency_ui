import React, {Component} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

import DashboardRoute from "./containers/DashboardRoute";
import ManagementRoute from "./containers/ManagementRoute";
import ListCampaign from './containers/ListCampaign';
import ReportPage from './containers/ReportPage';
import RevenuePage from './containers/RevenuePage';
import CreateCampaignPage from './containers/CreateCampaignPage';
import CreateCreativePresetPage from './containers/CreateCreativePresetPage';
import CreativeManagement from './containers/CreativeManagement';
import CampaignDetail from './containers/CampaignDetail';
import AccountManagement from './containers/AccountManagement';
import CreateNewPrice from './containers/CreateNewPrice';
import CreateNewIO from './containers/CreateNewIO';
import IOManagement from './containers/IOManagement';
import CreateNewAgencyGroup from './containers/CreateNewAgencyGroup';
import AgencyGroupManagement from './containers/AgencyGroupManagement';
import CreateNewAccount from './containers/CreateNewAccount';
import PageNotFound from './containers/PageNotFound';

import {Cookies} from 'react-cookie';

import Home from "./containers/Home";
import Login from "./containers/Login";
import history from './utils/history';
import PriceManagement from "./containers/PriceManagement";

const cookies = new Cookies();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLogin: true
      isLogin: false
    }
  }

  componentWillMount = () => {
    const auth = cookies.get("Authorization");
    if (auth) {
      this.setState({isLogin: true});
    } else {
      // this.setState({isLogin: false});
      this.setState({isLogin: true});
    }
  }

  render() {
    let {isLogin} = this.state
    return (<Router history={history}>
      <span>
        <Switch>
        {/* Home Route */}
          <DashboardRoute exact="exact" path="/" isAuthenticated={isLogin} component={Home}/>
          <DashboardRoute exact="exact" path="/home" isAuthenticated={isLogin} component={Home}/>
        {/* Login Route */}
          <DashboardRoute exact="exact" path="/login" isAuthenticated={isLogin} component={Login}/>
        {/* Report Route */}
          <ManagementRoute exact="exact" path="/report" isAuthenticated={isLogin} component={ReportPage}/>
        {/* Revenue Route */}
          <ManagementRoute exact="exact" path="/revenue" isAuthenticated={isLogin} component={RevenuePage}/>
        {/* Creative Route */}
          <ManagementRoute exact="exact" path="/create-creative-preset" isAuthenticated={isLogin} component={CreateCreativePresetPage}/>
          <ManagementRoute exact="exact" path="/creative-management" isAuthenticated={isLogin} component={CreativeManagement}/>
        {/* Campaign Route */}
          <ManagementRoute exact="exact" path="/list-campaign" isAuthenticated={isLogin} component={ListCampaign}/>
          <ManagementRoute exact="exact" path="/create-campaign" isAuthenticated={isLogin} component={CreateCampaignPage}/>
          <ManagementRoute exact="exact" path="/campaign-detail/:id" isAuthenticated={isLogin} component={CampaignDetail}/>
        {/* Account Route */}
          <ManagementRoute exact="exact" path="/account-management" isAuthenticated={isLogin} component={AccountManagement}/>
          <ManagementRoute exact="exact" path="/create-new-account" isAuthenticated={isLogin} component={CreateNewAccount}/>
        {/* Price Route */}
          <ManagementRoute exact="exact" path="/price-management" isAuthenticated={isLogin} component={PriceManagement}/>
          <ManagementRoute exact="exact" path="/create-new-price" isAuthenticated={isLogin} component={CreateNewPrice}/>
        {/* IO Route */}
          <ManagementRoute exact="exact" path="/create-new-io" isAuthenticated={isLogin} component={CreateNewIO}/>
          <ManagementRoute exact="exact" path="/io-management" isAuthenticated={isLogin} component={IOManagement}/>
        {/* Agency Group Route */}
          <ManagementRoute exact="exact" path="/create-new-agency-group" isAuthenticated={isLogin} component={CreateNewAgencyGroup}/>
          <ManagementRoute exact="exact" path="/agency-group-management" isAuthenticated={isLogin} component={AgencyGroupManagement}/>
        {/* Page Not Found Route */}
          <DashboardRoute isAuthenticated={false} component={PageNotFound}/>
          <DashboardRoute exact="exact" isAuthenticated={false} path="/404" component={PageNotFound}/>
        </Switch>
      </span>
    </Router>);
  }
}

export default App;
