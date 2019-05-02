import React, { Component } from 'react';

import CreateForm from './Forms/CreateForm';
import CreateFormPreview from './Preview/CreateFormPreview';
import StepChecker from '../../components/StepChecker';

import './style.scss';

export default class CampaignDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campaign: {},
        }
    }
    componentWillMount = () => {
        if (!this.props.match.params.id) return 
        this.props.getCampaign(this.props.match.params.id)
            .then(ok => {
                if (!this.props.campaignDetail.err) {
                    this.setState({
                        campaign: this.props.campaignDetail.campaign,
                    });
                } else {
                    alert(this.props.campaignDetail.message)
                }
            })
            .catch(err => {
                alert(this.props.campaignDetail.message)
            })
    }

    render() {
        return (
            <div>
                <div className="campaign-detail-container-fluid">
                  <div className="step-checkbox-wrapper">
                    {this.state.campaign.campaignName}- Advertiser Name
                  </div>
                  <div className="create-campaign-wrapper">
                    <div className="management-container-main-bg col-md-8 col-sm-12">
                        <CreateForm 
                            form={this.state.campaign}
                        />
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
