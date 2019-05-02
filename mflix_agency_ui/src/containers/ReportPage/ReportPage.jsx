import React, { Component } from "react";

import FilterBox from "../../components/FilterBox";
import PieChart from "../../components/PieChart";
import BarChart from "../../components/BarChart";

import VideoViewReport from "../../components/VideoViewReport";
import CostReport from "../../components/CostReport";
import ImpressionReport from "../../components/ImpressionReport";

import "./style.scss";

const colorScale = [
  "#FADE97",
  "#F9AB4F",
  "#F46860",
  "#4C6693",
  "#4EA9B0",
  "#A5D2E4"
];

const mockData = {
  age: {
    label: [
      {
        name: "0-18",
        symbol: {
          fill: colorScale[0],
          type: "minus"
        }
      }, {
        name: "19-24",
        symbol: {
          fill: colorScale[1],
          type: "minus"
        }
      }, {
        name: "25-34",
        symbol: {
          fill: colorScale[2],
          type: "minus"
        }
      }, {
        name: "35-50",
        symbol: {
          fill: colorScale[3],
          type: "minus"
        }
      }, {
        name: ">50",
        symbol: {
          fill: colorScale[4],
          type: "minus"
        }
      }
    ],
    data: [
      {
        x: "40%",
        y: 40
      }, {
        x: "25%",
        y: 25
      }, {
        x: "14%",
        y: 14
      }, {
        x: "18%",
        y: 18
      }, {
        x: "20%",
        y: 20
      }
    ]
  },
  gender: {
    label: [
      {
        name: "Male",
        symbol: {
          fill: colorScale[0],
          type: "minus"
        }
      }, {
        name: "Female",
        symbol: {
          fill: colorScale[1],
          type: "minus"
        }
      }, {
        name: "Unknown",
        symbol: {
          fill: colorScale[2],
          type: "minus"
        }
      }
    ],
    data: [
      {
        x: "40%",
        y: 40
      }, {
        x: "40%",
        y: 40
      }, {
        x: "20%",
        y: 20
      }
    ]
  },
  os: {
    label: [
      {
        name: "iOS",
        symbol: {
          fill: colorScale[0],
          type: "minus"
        }
      }, {
        name: "Android",
        symbol: {
          fill: colorScale[1],
          type: "minus"
        }
      }, {
        name: "Windows Phone",
        symbol: {
          fill: colorScale[2],
          type: "minus"
        }
      }, {
        name: "Symbian",
        symbol: {
          fill: colorScale[3],
          type: "minus"
        }
      }, {
        name: "Others",
        symbol: {
          fill: colorScale[4],
          type: "minus"
        }
      }

    ],
    data: [
      {
        x: "40%",
        y: 40
      }, {
        x: "25%",
        y: 25
      }, {
        x: "14%",
        y: 14
      }, {
        x: "11%",
        y: 18
      }, {
        x: "10%",
        y: 20
      }
    ]
  },
  phone: {
    label: [
      {
        name: "iPhone 6",
        symbol: {
          fill: colorScale[0],
          type: "minus"
        }
      }, {
        name: "Samsung S6",
        symbol: {
          fill: colorScale[1],
          type: "minus"
        }
      }, {
        name: "Oppo F5",
        symbol: {
          fill: colorScale[2],
          type: "minus"
        }
      }, {
        name: "Huawei i8",
        symbol: {
          fill: colorScale[4],
          type: "minus"
        }
      }
    ],
    data: [
      {
        x: "30%",
        y: 30
      }, {
        x: "30%",
        y: 30
      }, {
        x: "25%",
        y: 25
      }, {
        x: "15%",
        y: 15
      }
    ]
  },
  arpu: {
    label: [
      {
        name: "< 100k",
        symbol: {
          fill: colorScale[0],
          type: "minus"
        }
      }, {
        name: "100k - 200k",
        symbol: {
          fill: colorScale[1],
          type: "minus"
        }
      }, {
        name: "200k - 300k",
        symbol: {
          fill: colorScale[2],
          type: "minus"
        }
      }, {
        name: "300k - 400k",
        symbol: {
          fill: colorScale[3],
          type: "minus"
        }
      }, {
        name: "400l - 500k",
        symbol: {
          fill: colorScale[4],
          type: "minus"
        }
      }, {
        name: "> 500k",
        symbol: {
          fill: colorScale[4],
          type: "minus"
        }
      }
    ],
    data: [
      {
        x: "30%",
        y: 30
      }, {
        x: "20%",
        y: 20
      }, {
        x: "20%",
        y: 20
      }, {
        x: "12%",
        y: 12
      }, {
        x: "6%",
        y: 6
      }, {
        x: "12%",
        y: 12
      }
    ]
  },
  completedView: {
    label: [
      {
        name: "10%",
        symbol: {
          fill: colorScale[0],
          type: "minus"
        }
      }, {
        name: "25%",
        symbol: {
          fill: colorScale[1],
          type: "minus"
        }
      }, {
        name: "50%",
        symbol: {
          fill: colorScale[2],
          type: "minus"
        }
      }, {
        name: "75%",
        symbol: {
          fill: colorScale[3],
          type: "minus"
        }
      }, {
        name: "100%",
        symbol: {
          fill: colorScale[4],
          type: "minus"
        }
      }
    ],
    data: [
      {
        x: "10%",
        y: 10
      }, {
        x: "40%",
        y: 40
      }, {
        x: "20%",
        y: 20
      }, {
        x: "20%",
        y: 20
      }, {
        x: "10%",
        y: 10
      }
    ]
  },
  provincecjs: {
    label: [
      'Hà Nội',
      'Hồ Chí Minh',
      'Bình Dương',
      'An Giang',
      'Vũng Tàu',
      'Cần Thơ',
      'Phan Thiết',
      'Đà Nẵng',
      'Lào Cai',
      'Nam Định'
    ],
    data: [
      65,
      59,
      80,
      81,
      56,
      55,
      40,
      90,
      65,
      59
    ],
    backgroundColor: [
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0",
      "#4EA9B0"
    ]
  },
  viewByDuration: {
    label: [
      '10%', '25%', '50%', '75%', '100%'
    ],
    data: [
      123124, 432425, 234152, 213146, 112342
    ],
    backgroundColor: ["#4EA9B0", "#4EA9B0", "#4EA9B0", "#4EA9B0", "#4EA9B0"]
  }
};

const defaultHeader = [
  {
    name: "campaignId",
    title: "Campaign ID",
    display: true
  }, {
    name: "campaignName",
    title: "Campaign name",
    display: true
  }, {
    name: "brandName",
    title: "Brand name",
    display: true
  }, {
    name: "startDate",
    title: "Start date",
    display: true
  }, {
    name: "endDate",
    title: "End date",
    display: true
  }, {
    name: "videoTime",
    title: "Video view Booking",
    display: true
  }, {
    title: "Data package(MB)",
    name: "awardValue",
    display: true
  }, {
    title: "Status",
    name: "campaignStatus",
    type: "map",
    display: true
  }, {
    title: "Result",
    display: true,
    name: "result"
  }, {
    title: "Unit cost",
    display: true,
    name: "unitCost"
  }, {
    title: "Cost uses",
    display: true,
    name: "costUses"
  }
];

export default class ReportPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campaigns: [],
      header: defaultHeader,
      toggleMenu: {
        advertiser: false,
        campaign: false,
        date: false,
        column: false
      }
    }
  }

  componentWillMount = () => { };

  changeFilter = (menu, filterName, value) => {
    if (filterName === "column") {
      this.setState({
        header: this.state.header.map(item => {
          if (item.name === menu)
            item.display = value;
          return item;
        })
      });
    }
  };

  renderHeader = header => header.filter(item => item.display);

  changeFilter = (menu, filterName, value) => {
    if (filterName === 'column') {
      this.setState({
        header: this.state.header.map(item => {
          if (item.name === menu)
            item.display = value;
          return item;
        })
      });
    }
  }

  applyFilter = (filterName, value) => new Promise((resolve, reject) => {
    if (filterName === 'column') {
      return (this.setState({
        header: this.state.header.map(item => {
          return Object.assign(item, {
            display: value[item.name]
          })
        })
      }, () => resolve()));
    }
  });

  render() {
    let {
      // header,
      toggleMenu
    } = this.state;
    return (<div>
      <FilterBox filter={[
        {
          title: 'All advertiser',
          name: 'advertiser',
          type: 'search',
          placeholder: 'Search advertiser'
        }, {
          title: 'All campaign',
          name: 'campaignName',
          type: 'search',
          placeholder: 'Search campaign'
        }, {
          title: 'This month: Nov 1, 2018',
          name: 'date',
          type: 'date',
          value: '123'
        }, {
          title: 'List campaign',
          type: 'link',
          link: '/list-campaign'
        }, {
          type: 'link',
          iClass: 'fas fa-cloud-download-alt'
        }
      ]} changeFilter={this.changeFilter.bind(this)} applyFilter={this.applyFilter.bind(this)} toggleMenu={toggleMenu}
      />>
      <div className="list-campaign-container">
        <div className="management-container-main-bg list-campaign container col-sm-12">
          <div className="row">
            <div className="sticky-div curve-box">
              <VideoViewReport />
            </div>
            <div className="sticky-div curve-box">
              <ImpressionReport />
            </div>
            <div className="sticky-div curve-box">
              <CostReport />
            </div>
          </div>

          <div className="row">
            <div className="pie-sticky-div curve-box">
              <PieChart colorScale={colorScale} chartData={{
                labels: mockData.age.label,
                datasets: mockData.age.data
              }} title="Age" />
            </div>
            <div className="pie-sticky-div curve-box">
              <PieChart colorScale={colorScale} chartData={{
                labels: mockData.gender.label,
                datasets: mockData.gender.data
              }} title="Gender" />
            </div>
            <div className="pie-sticky-div curve-box">
              <PieChart colorScale={colorScale} chartData={{
                labels: mockData.arpu.label,
                datasets: mockData.arpu.data
              }} title="ARPU" />
            </div>
            <div className="pie-sticky-div curve-box">
              <PieChart colorScale={colorScale} chartData={{
                labels: mockData.phone.label,
                datasets: mockData.phone.data
              }} title="Phone" />
            </div>
            <div className="pie-sticky-div curve-box">
              <PieChart colorScale={colorScale} chartData={{
                labels: mockData.os.label,
                datasets: mockData.os.data
              }} title="OS" />
            </div>
            <div className="pie-sticky-div curve-box">
              <PieChart colorScale={colorScale} chartData={{
                labels: mockData.completedView.label,
                datasets: mockData.completedView.data
              }} title="View by Duration (Percentage)" />
            </div>
          </div>
          <div className="row">
            <div className="curve-box barchart-box">
              <BarChart chartData={{
                labels: mockData.viewByDuration.label,
                datasets: [
                  {
                    data: mockData.viewByDuration.data,
                    backgroundColor: mockData.viewByDuration.backgroundColor
                  }
                ]
              }} title="Views by Duration (Quantity)" legendPosition="" />
            </div>

            <div className="curve-box barchart-box">
              <BarChart chartData={{
                labels: mockData.provincecjs.label,
                datasets: [
                  {
                    data: mockData.provincecjs.data,
                    backgroundColor: mockData.provincecjs.backgroundColor
                  }
                ]
              }} title="Views by location" legendPosition="" />
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
