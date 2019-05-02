import React, { Component } from 'react';

import CreateForm from './Forms/CreateForm';
import CreateFormPreview from './Preview/CreateFormPreview';
import StepChecker from '../../components/StepChecker';

import './style.scss';

export default class CreateCampaignPage extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <div className="create-campaign-container-fluid">
                  <div className="step-checkbox-wrapper">
                    <StepChecker />
                  </div>
                  <div className="create-campaign-wrapper">
                    <div className="management-container-main-bg col-md-7 col-sm-12">
                        <CreateForm />
                    </div>
                    <div className="management-container-main-bg col-md-5 col-sm-12">
                        <CreateFormPreview />
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}
