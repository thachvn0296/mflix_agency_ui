import React, {Component} from "react";

import FilterBox from "../../components/FilterBox";
import Dropzone from "react-dropzone";

import "./style.scss";

const mockData = {
  agency: {
    label: [
      "Premium Agency", "Standard Agency", "Brand"
    ],
    data: [
      20, 13, 5
    ],
    backgroundColor: ["#F76760", "#4E6693", "#4FA8AF"]
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

const thumbsContainer = {
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: 16
};

const thumb = {
  display: "inline-flex",
  borderRadius: 2,
  border: "1px solid #eaeaea",
  marginBottom: 8,
  marginRight: 8,
  width: 100,
  height: 100,
  padding: 4,
  boxSizing: "border-box"
};

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden"
};

const img = {
  display: "block",
  width: "auto",
  height: "100%"
};

export default class CreateNewIO extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.state = {
      campaigns: [],
      header: defaultHeader,
      toggleMenu: {
        creative: false
      },
      selectedLayout: {
        type: "default",
        layoutType: "video"
      },
      imgfiles: [],
      vidfiles: []
    };
    this.changeDropImage.bind(this.state.imgfiles);
  }

  changeUploadImage = e => {
    console.log(e);
  };

  changeDropImage = e => {
    this.setState({
      imgfiles: e.map(file => ({
        ...file,
        preview: URL.createObjectURL(file)
      }))
    });
    this.changeUploadImage(e);
  };

  componentWillMount = () => {};

  render() {
    let {header, toggleMenu, imgfiles, selectedLayout} = this.state;
    const prefixImageDragzone = (<div>
      <div className="dropzone-title col-sm-12"></div>
    <div className="dropzone-icon col-sm-12 text-center h70">
        <span>
          <i className="fas ico-upload l-50-p"/>
        </span>
      </div>
    </div>);

    const imgthumbs = imgfiles.map(file => (<div style={thumb}>
      <div style={thumbInner}>
        <img src={file.preview} style={img}/>
      </div>
    </div>));

    return (<div>
      <FilterBox filter={[
          , {
            title: 'IO Management',
            type: 'link',
            link: '/io-management'
          }
        ]}/>
      <div className="create-new-io">
        <div className="management-container-main-bg list-new-io container col-sm-12">

          <div className="box-wrapper">
            <div className="curve-box new-price-box">
              <div className="title">
                Basic Info
              </div>
              <div className="content">
                <div className="row-item">
                  <div className="row-title">Insertion Order (IO) Number</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
                <div className="row-item">
                  <div className="row-title">Client</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
                <div className="row-item">
                  <div className="row-title">Company</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
                <div className="row-item">
                  <div className="row-title">Brandname</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
                <div className="row-item">
                  <div className="row-title">Date</div>
                  <div className="input-item">
                    <input className="form-control"/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="box-wrapper">
            <div className="curve-box new-price-box">
              <div className="title">
                Cost Info
              </div>
              <div className="content">
                <div className="row-item row">
                  <div className="col-sm-6">
                    <div className="row-title">Quantity Video View</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row-title">Quantity Topup User</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                </div>

                <div className="row-item row">
                  <div className="col-sm-6">
                    <div className="row-title">Unit Cost</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row-title">Unit Cost</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="row-item row">
                  <div className="col-sm-6">
                    <div className="row-title">Discount</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row-title">Discount</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="row-item row">
                  <div className="col-sm-6">
                    <div className="row-title">Total Cost</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row-title">End Date</div>
                    <div className="input-item">
                      <input className="form-control"/>
                    </div>
                  </div>
                </div>
                <div className="row-item row">
                  <div className="col-sm-12">
                    <div className="row-title">Attachments</div>
                    <div className="input-item">
                      <Dropzone accept="image/*" onDrop={this.changeDropImage.bind(this)} multiple={true} className="dropzone-boundary">
                        <div className="dropzone-placeholder col-sm-12">
                          <div className={`${
                            imgfiles.length > 0
                              ? "hidden"
                              : "show"}`}>
                            {prefixImageDragzone}
                          </div>
                          <aside className={"column-fill-img " + `${imgfiles.length > 0
                              ? "show"
                              : "hidden"}`
} style={thumbsContainer}>
                            {imgthumbs}
                          </aside>
                        </div>
                      </Dropzone>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
          <div className="btn-wrapper">
            <button className="btn special-button">Save</button>
          </div>
      </div>
    </div>);
  }
}
