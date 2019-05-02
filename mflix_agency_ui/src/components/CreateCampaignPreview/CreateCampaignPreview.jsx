import React, { Component } from "react";
import TopLayer from "./images/top-layer.svg";

import "./style.scss";

class CreateCampaignPreview extends Component {
  constructor(props) {
    super(props);
  }

  renderLayout = item => {
    let result = null;
    switch (item) {
      case "banner": {
        result = (
          <div className="created-campaign-preview">
            <div className="top-screen-layer">
              <img className="img-fit" src={TopLayer} alt="logo" />
            </div>

            <div className="full-screen-layer">
              <div className="fit-wrapper">Banner</div>
            </div>
          </div>
        );
        break;
      }
      case "video": {
        result = (
          <div className="created-campaign-preview">
            <div className="full-screen-layer">
              {/*
            <video controls="controls"
             className="video-stream img-fit"
             src="https://www.youtube.com/watch?v=mer6X7nOY_o">
           </video> */}
              <div className="top-screen-layer">
                <img className="img-fit" src={TopLayer} alt="logo" />
              </div>
              <div className="fit-wrapper">
                <iframe
                  className="fit-content"
                  width="#"
                  height="#"
                  src="https://www.youtube.com/embed/mer6X7nOY_o"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                />
              </div>
            </div>
          </div>
        );
        break;
      }
      default: {
        result = (
          <div className="created-campaign-preview">
            <div className="top-screen-layer">
              <img className="img-fit" src={TopLayer} alt="logo" />
            </div>

            <div className="video-layer">
              <iframe
                className="img-fit"
                width="#"
                height="#"
                src="https://www.youtube.com/embed/mer6X7nOY_o"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
            <div className="banner-layer">
              <div className="top-banner"> Top banner </div>
              <div className="bottom-banner"> Bot banner </div>
            </div>
          </div>
        );
      }
    }
    return result;
  };

  render() {
    const { layoutType } = this.props;
    return <div>{this.renderLayout(layoutType)}</div>;
  }
}

export default CreateCampaignPreview;
