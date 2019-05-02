import React, {Component} from "react";
import {
  // VictoryBar,
  // VictoryChart,
  // VictoryAxis,
  VictoryPie,
  // VictoryTooltip,
  VictoryLegend,
  VictoryContainer
} from "victory";
import "./style.scss";

export default class PieChart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      width: 0,
      height: 0,
      data: props.chartData,
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({width: window.innerWidth, height: window.innerHeight});
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'bottom',
    title: ''
  };

  whiteStyle = {
    axis: {
      stroke: "#000"
    },
    axisLabel: {
      fontSize: 20,
      padding: 30,
      fill: "#000"
    },
    ticks: {
      stroke: "#000",
      size: 5
    },
    tickLabels: {
      fontSize: 15,
      padding: 5,
      fill: "#000"
    }
  };

  render() {
    return (<div className="pie-chart-box">
      <div className="chart-title-box">
        {this.props.title}
      </div>
      <div className="chart-box">
        <VictoryPie colorScale={this.props.colorScale} data={this.props.chartData.datasets} padAngle={1} innerRadius={100}
          style={{ labels: { fontSize: 20, fill: "gray", fontWeight: "normal", fontFamily: "Sans-Serif" } }}
          />
      </div>
      <span className="legend-box">

        <VictoryLegend x={0} y={0} orientation="vertical" gutter={90}
          rowGutter={{
            top: 0,
            bottom: 0
          }}
          // style={{
          //   border: {
          //     stroke: "none"
          //   }
          // }}
          data={this.props.chartData.labels}
          containerComponent={<VictoryContainer responsive = {false} />}
          style={{ labels: { fontSize: 15, fill: "gray", fontFamily: "Sans-Serif" },
          border: {
            stroke: "none"
          } }}
          />

      </span>
    </div>
      );
  }
}
