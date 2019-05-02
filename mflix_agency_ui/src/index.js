import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./css/fontawesome/scss/fontawesome.scss";
import "./css/fontawesome/scss/brands.scss";
import "./css/fontawesome/scss/regular.scss";
import "./css/fontawesome/scss/solid.scss";
import "./css/fontawesome/scss/v4-shims.scss";
import "./css/global-css.scss";
import App from "./App";
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';

//Include bootstrap's css
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Include bootstrap's js
import './../node_modules/bootstrap/dist/js/bootstrap.min.js';


import configureStore from './configureStore';

// Create redux store with history
const initialState = {}

const history = createHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
