import React, {Component} from "react";
import {
  Bar,
  // Line,
  // Pie
} from "react-chartjs-2";
import "./style.scss";

export default class BarChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    title: ""
  };

  render() {
    return (<div className="bar-chart-wrapper">
      <div className="chart-title-box">{this.props.title}</div>
      <div className="chart-box container">
        <Bar data={this.state.chartData} options={{
            tooltips: {
              callbacks: {
                label: function(tooltipItem, data) {
                  var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                  return parseInt(tooltipValue).toLocaleString();
                }
              }
            },
            title: {
              display: false,
              text: `${this.props.title}`,
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false
                  },
                  scaleLabel: {
                    display: false,
                    labelString: "Y"
                  },
                  stacked: true,
                  ticks: {
                    callback(value) {
                      // you can add your own method here (just an example)
                      return Number(value).toLocaleString('en');
                    },
                    stepSize: Math.floor(Math.max(...this.state.chartData.datasets[0].data) / 3),
                    min: 0,
                    max: Math.max(...this.state.chartData.datasets[0].data) + Math.floor(Math.max(...this.state.chartData.datasets[0].data) / 3)
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false
                  },
                  ticks: {},
                  barPercentage: 0.5
                }
              ]
            }
          }}/>
      </div>
    </div>);
  }
}
