import React, {Component} from 'react';
import ReactD3Gauge from 'react-d3-gauge';

import "./style.scss";

const paneOptions = {
  center: [
    "50%", "45%"
  ],
  size: "80%",
  startAngle: -90,
  endAngle: 90,
  background: {
    backgroundColor: "#FFF",
    innerRadius: "90%",
    outerRadius: "100%",
    shape: "arc"
  }
};

export default class GaugeChart extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (<div className="gauge-chart col-sm-12">
      <ReactD3Gauge needleColor="#4D4D4D" colors={['#FBDE97', '#FAAB4F', '#4FA8AF', '#9F2513']} width={300} percent={70}/>
      <div className="legend-box">
        <div className="legend-item item-low">Low</div>
        <div className="legend-item item-medium">Medium</div>
        <div className="legend-item item-high">High</div>
        <div className="legend-item item-veryhigh">Very High</div>
      </div>
    </div>);
  }
}
