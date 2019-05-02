import React, { Component } from "react";
import Dropzone from "react-dropzone";

import { Table, Pagination } from "../../components/MndComponents";
import CreateCampaignPreview from "../../components/CreateCampaignPreview";
import FilterBox from "../../components/FilterBox";

import { Input } from 'antd';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LayoutNormal from "./images/ad-layout/layout-normal.svg";
import LayoutBanner from "./images/ad-layout/layout-banner.svg";
import LayoutVideo from "./images/ad-layout/layout-video.svg";

import "./style.scss";

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

export default class ListCampaign extends Component {
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
    this.changeLayout = this.changeLayout.bind(this);
  }

  saveAndContinue = e => {
    console.log(e);
  };

  back = e => {
    console.log(e);
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

  render() {
    const { toggleMenu, vidfiles, imgfiles, selectedLayout } = this.state;

    const imgthumbs = imgfiles.map(file => (
      <div style={thumb}>
        <div style={thumbInner}>
          <img src={file.preview} style={img} />
        </div>
      </div>
    ));

    const vidthumbs = vidfiles.map(file => (
      <div>
        <div>{file.name}</div>
      </div>
    ));

    const prefixImageDragzone = (
      <div>
        <div className="dropzone-title col-sm-12">Place your banner here</div>
        <div className="dropzone-icon col-sm-12 text-center">
          <span>
            <i className="fas ico-upload" />
          </span>
        </div>
      </div>
    );

    const prefixVideoDragzone = (
      <div>
        <div className="dropzone-title col-sm-12">Place your video here</div>
        <div className="dropzone-icon col-sm-12 text-center">
          <span>
            <i className="fas ico-upload" />
          </span>
        </div>
      </div>
    );

    return (
      <div className="creative-wrapper">
        <ToastContainer />
        <FilterBox
          filter={[
            {
              title: "Creative",
              name: "creative"
            }
          ]}
          toggleMenu={toggleMenu}
        />
        <div className="list-campaign-container">
          <div className="management-container-main-bg list-campaign col-sm-12">
            <div className="container">
              <div className="creative-box-wrapper col-md-8 col-sm-12">
                <div className="box-title">
                  Creative
                </div>
                <div className="col-sm-12 input-box-wrapper">
                  <div className="title-text">Brandname</div>
                  <div className="input-source">
                    <Input />
                  </div>
                </div>
                <div className="col-sm-12 input-box-wrapper">
                  <div className="title-text">Name</div>
                  <div className="input-source">
                    <Input />
                  </div>
                </div>

                <div className="col-sm-12 input-box-wrapper">
                  <div className="title-text">Banner</div>
                  <div className="input-source">
                    <Dropzone
                      accept="image/*"
                      onDrop={this.changeDropImage.bind(this)}
                      multiple={false}
                      className="dropzone-boundary"
                    >
                      <div className="dropzone-placeholder col-sm-12">
                        <div
                          className={`${
                            imgfiles.length > 0 ? "hidden" : "show"
                          }`}
                        >
                          {prefixImageDragzone}
                        </div>
                        <aside
                          className={
                            "column-fill-img " +
                            `${imgfiles.length > 0 ? "show" : "hidden"}`
                          }
                          style={thumbsContainer}
                        >
                          {imgthumbs}
                        </aside>
                      </div>
                    </Dropzone>
                  </div>
                </div>
                <div className="col-sm-12 input-box-wrapper">
                  <div className="title-text">Video</div>
                  <div className="input-source">
                    <Dropzone
                      accept="video/mp4"
                      onDrop={this.changeDropVideo.bind(this)}
                      multiple={false}
                      className="dropzone-boundary"
                    >
                      <div className="dropzone-placeholder col-sm-12">
                        <div
                          className={`${
                            vidfiles.length > 0 ? "hidden" : "show"
                          }`}
                        >
                          {prefixVideoDragzone}
                        </div>
                        <aside
                          className={
                            "column-fill-vid " +
                            `${vidfiles.length > 0 ? "show" : "hidden"}`
                          }
                          style={thumbsContainer}
                        >
                          {vidthumbs}
                        </aside>
                      </div>
                    </Dropzone>
                  </div>
                </div>
                <div className="col-sm-12 input-box-wrapper">
                  <div className="title-text">Creative Format</div>
                  <div className="input-source col-sm-12">
                    <div className="preset-box text-center">
                      <div className="preset-item">
                        <div className={"layout-img-wrapper"}>
                          <img
                            className={
                              "img-fit " +
                              `${
                                "default" === selectedLayout.type &&
                                "normal" === selectedLayout.layoutType
                                  ? "selected"
                                  : ""
                              }`
                            }
                            src={LayoutNormal}
                            alt="LayoutNormal"
                            onClick={this.changeLayout.bind(
                              this,
                              "default",
                              "normal"
                            )}
                          />
                        </div>
                      </div>
                      <div className="preset-item">
                        <div className={"layout-img-wrapper"}>
                          <img
                            className={
                              "img-fit " +
                              `${
                                "default" === selectedLayout.type &&
                                "video" === selectedLayout.layoutType
                                  ? "selected"
                                  : ""
                              }`
                            }
                            src={LayoutVideo}
                            alt="LayoutVideo"
                            onClick={this.changeLayout.bind(
                              this,
                              "default",
                              "video"
                            )}
                          />
                        </div>
                      </div>
                      <div className="preset-item">
                        <div className={"layout-img-wrapper"}>
                          <img
                            className={
                              "img-fit " +
                              `${
                                "default" === selectedLayout.type &&
                                "banner" === selectedLayout.layoutType
                                  ? "selected"
                                  : ""
                              }`
                            }
                            src={LayoutBanner}
                            alt="LayoutBanner"
                            onClick={this.changeLayout.bind(
                              this,
                              "default",
                              "banner"
                            )}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-12 submit-button-box">
                  <button className="btn btn-primary">Save</button>
                </div>
              </div>
              <div className="preview-box col-md-4 col-sm-12">
                <div className="col-sm-12 input-box-wrapper">
                  <div className="title-text"></div>
                <div className="input-source phone-preview-layout">
                    <CreateCampaignPreview layoutType={selectedLayout.layoutType} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
