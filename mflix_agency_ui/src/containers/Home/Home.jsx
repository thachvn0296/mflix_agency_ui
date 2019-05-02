import React, { Component } from "react";

import "./style.scss";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="home-banner">
          <div className="title">Xem video</div>
          <div className="title">Nhận data hấp dẫn</div>
          <div><button>Xem ngay</button></div>
        </div>
      </div>
    );
  }
}

export default Home;
