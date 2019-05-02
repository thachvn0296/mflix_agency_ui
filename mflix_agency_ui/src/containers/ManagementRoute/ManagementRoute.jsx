import React from "react";
import { Route, Redirect } from "react-router-dom";

import Sidebar from '../../components/Sidebar'
import ManagementFooter from "../ManagementFooter";
import ManagementHeader from "../ManagementHeader";

import "./style.scss";

const route = [{
  route: '/report',
  iClass: 'fa ico-report-management',
  title: 'Report Management'
}, {
  route: '/creative-management',
  iClass: 'fa ico-creative-management',
  title: 'Creative Management'
}, {
  route: '/list-campaign',
  iClass: 'fa ico-campaign-management',
  title: 'Campaign Management'
}, {
  route: '/account-management',
  iClass: 'fa ico-account-management',
  title: 'Account Management'
}, {
  route: '/agency-group-management',
  iClass: 'fa ico-agency-management',
  title: 'Agency Management'
}, {
  route: '/io-management',
  iClass: 'fa ico-io-management',
  title: 'IO Management'
}, {
  route: '/price-management',
  iClass: 'fa ico-price-management',
  title: 'Price Management'
}, {
  route: '/revenue',
  iClass: 'fa ico-revenue-management',
  title: 'Revenue Management'
},]


const ManagementLayout = ({
  children,
  ...rest
}) => {
  return (<div className="container-fluid management-layout-container">
    <div className="management-header">
      <ManagementHeader
        route={route}
      />
    </div>

    <div className="main-content-container management-container-main-bg">
      <Sidebar route={route} />
      <div className="management-content-container container-fluid management-container-main-bg">
        {children}
      </div>
      <div className="management-footer">
        <ManagementFooter />
      </div>
    </div>

  </div>)
}

const ManagementRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <ManagementLayout>
              <Component {...props} />
          </ManagementLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
};

export default ManagementRoute;
