import React, {Component} from "react";
import Dropzone from "react-dropzone";

import {Select} from 'antd';

import LayoutNormal from "./images/ad-layout/layout-normal.svg";
import LayoutBanner from "./images/ad-layout/layout-banner.svg";
import LayoutVideo from "./images/ad-layout/layout-video.svg";

import "./style.scss";

const Option = Select.Option;
const defaultHeader = [];

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

export default class CreativeForm extends Component {
  constructor(props) {
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
    this.changeDropVideo.bind(this.state.vidfiles);
    this.changeLayout.bind(this.state.selectedLayout);
  }

  handleChange(value) {
    console.log(`selected ${value}`);
  }

  handleBlur() {
    console.log('blur');
  }

  handleFocus() {
    console.log('focus');
  }

  changeLayout = (type, layoutType, e) => {
    console.log("Change layout");
    this.setState({
      selectedLayout: {
        type: type,
        layoutType: layoutType
      }
    });
    console.log(this.state.selectedLayout);
  };

  changeUploadImage = e => {
    console.log(e);
  };

  changeUploadVideo = e => {
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

  changeDropVideo = e => {
    this.setState({
      vidfiles: e.map(file => ({
        ...file,
        name: file.name
      }))
    });
    this.changeUploadVideo(e);
  };
  render() {
    const {toggleMenu, vidfiles, imgfiles, selectedLayout} = this.state;

    const imgthumbs = imgfiles.map(file => (<div style={thumb}>
      <div style={thumbInner}>
        <img src={file.preview} style={img}/>
      </div>
    </div>));

    const vidthumbs = vidfiles.map(file => (<div>
      <div>{file.name}</div>
    </div>));

    const prefixImageDragzone = (<div>
      <div className="dropzone-title col-sm-12">Place your banner here</div>
      <div className="dropzone-icon col-sm-12 text-center">
        <span>
          <i className="fas ico-upload"/>
        </span>
      </div>
    </div>);

    const prefixVideoDragzone = (<div>
      <div className="dropzone-title col-sm-12">Place your video here</div>
      <div className="dropzone-icon col-sm-12 text-center">
        <span>
          <i className="fas ico-upload"/>
        </span>
      </div>
    </div>);
    return (<div className="create-form">
      <div className="box">
        <div className="form-header">Creative Form
        </div>
        <div className="form-body">
          <div className="col-sm-12 input-box-wrapper">
            <div className="title-text">Banner</div>
            <div className="input-source">
              <Dropzone accept="image/*" onDrop={this.changeDropImage.bind(this)} multiple={false} className="dropzone-boundary">
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
          <div className="col-sm-12 input-box-wrapper">
            <div className="title-text">Video</div>
            <div className="input-source">
              <Dropzone accept="video/mp4" onDrop={this.changeDropVideo.bind(this)} multiple={false} className="dropzone-boundary">
                <div className="dropzone-placeholder col-sm-12">
                  <div className={`${
                    vidfiles.length > 0
                      ? "hidden"
                      : "show"}`}>
                    {prefixVideoDragzone}
                  </div>
                  <aside className={"column-fill-vid " + `${vidfiles.length > 0
                      ? "show"
                      : "hidden"}`
} style={thumbsContainer}>
                    {vidthumbs}
                  </aside>
                </div>
              </Dropzone>
            </div>
          </div>
          <div className="col-sm-12 input-box-wrapper">
            <div className="title-text">Creative Format</div>
            <div className="input-source">
              <div className="col-sm-12 preset-box text-center">
                <div className="preset-item">
                  <div className={"layout-img-wrapper"}>
                    <img className={"img-fit " + `${
                      "default" === selectedLayout.type && "normal" === selectedLayout.layoutType
                        ? "selected"
                        : ""}`
} src={LayoutNormal} alt="LayoutNormal" onClick={this.changeLayout.bind(this, "default", "normal")}/>
                  </div>
                </div>
                <div className="preset-item">
                  <div className={"layout-img-wrapper"}>
                    <img className={"img-fit " + `${
                      "default" === selectedLayout.type && "video" === selectedLayout.layoutType
                        ? "selected"
                        : ""}`
} src={LayoutVideo} alt="LayoutVideo" onClick={this.changeLayout.bind(this, "default", "video")}/>
                  </div>
                </div>
                <div className="preset-item">
                  <div className={"layout-img-wrapper"}>
                    <img className={"img-fit " + `${
                      "default" === selectedLayout.type && "banner" === selectedLayout.layoutType
                        ? "selected"
                        : ""}`
} src={LayoutBanner} alt="LayoutBanner" onClick={this.changeLayout.bind(this, "default", "banner")}/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 input-box-wrapper">
            <div className="title-text">Or choose your creative</div>
            <div className="input-source">
              <Select showSearch="showSearch" size="large" placeholder="Select your creative" getPopupContainer={trigger => trigger.parentNode} optionFilterProp="children" onChange={this.handleChange.bind(this)} onFocus={this.handleFocus.bind(this)} onBlur={this.handleBlur.bind(this)} filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                <Option value="jack">Vid Only</Option>
                <Option value="lucy">2 Banners</Option>
                <Option value="tom">1 Banner</Option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}
