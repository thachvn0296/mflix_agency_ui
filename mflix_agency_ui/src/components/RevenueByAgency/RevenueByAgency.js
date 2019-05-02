import React, { Component } from "react";
import Logo from "./images/revenue-by-agency.svg";
import { Bar } from "react-chartjs-2";

import "./style.scss";

class RevenueByAgency extends Component {
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
    return (
      <div className="detail-revenue-wrapper">
        <div className="detail-report-title">
          <div className="title-text">
            <span className="logo">
              <img className="img-fit" src={Logo} alt="logo" />
            </span>
            <span className="text">RevenueByAgency</span>
          </div>
        </div>
        <div className="detail-report-content">
          <div className="box">
            <Bar
              data={this.state.chartData}
              options={{
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
                        labelString: "Y text"
                      },
                      stacked: true,
                      ticks: {
                        stepSize: Math.floor(
                          Math.max(...this.state.chartData.datasets[0].data) / 3
                        ),
                        min: 0,
                        max:
                          Math.max(...this.state.chartData.datasets[0].data) +
                          Math.floor(
                            Math.max(...this.state.chartData.datasets[0].data) /
                              3
                          )
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
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default RevenueByAgency;
