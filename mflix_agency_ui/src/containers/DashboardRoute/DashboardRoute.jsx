import React from "react";
import { Route, Redirect } from "react-router-dom";

import MainMenu from "../MainMenu";

import "./style.scss";

const DashboardLayout = ({children, ...rest}) => {
  return (

    <div className="container-fluid dashboard-main-wrapper">
      <MainMenu/>
    <div className="container-fluid dashboard-main-container">
        {children}
      </div>
    </div>
  )
}


const DashboardRoute = ({component: Component, isAuthenticated, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        !isAuthenticated ? (
          <DashboardLayout>
              <Component {...props} />
          </DashboardLayout>
        ) : (
          <Redirect
            to={{
              pathname: "/report",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  )
};



export default DashboardRoute;
