import React, { Component } from 'react';

import BasicInfoForm from "./BasicInfoForm";
import TargetForm from "./TargetForm";
import CreativeForm from "./CreativeForm";
import AudienceForm from "./AudienceForm";
import moment from 'moment';

import { locationPicker } from './option';
import './style.scss';

export default class CreateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    }
  }

  changeForm = (key, value) => {
    let { form } = this.state;
    form[key] = value;
    this.setState({
      form,
    });
  }

  render() {
    return (<div className="create-form-wrapper container-fluid">
      <div className="col-sm-12 form-panel" id="1">
        <BasicInfoForm
          form={this.props.form}
          badge={1}
          title={`BASIC INFO`}
          forms={[{
            title: 'Campaign name',
            name: 'campaignName',
            required: true,
          }, {
            title: 'Brandname',
            name: 'brandName',
            required: true,
          }, {
            title: 'IO Number',
            name: 'ioNumber',
            required: true,
          }, {
            title: 'Start date',
            name: 'startDate',
            type: 'date',
            required: true,
            disabledDate: (current) => {
              return current && current < moment().endOf('day');
            },
          }, {
            title: 'End date',
            name: 'endDate',
            type: 'date',
            required: true,
            disabledDate: (current) => {
              if (this.state.form['startDate']) {
                return current && current < moment(this.state.form['startDate'], "DD-MM-YYYY").endOf('day'); 
              } else {
                return current && current < moment().endOf('day');
              }
            },
          }]}
          onChange={this.changeForm.bind(this)}
        />
      </div>
      <div className="col-sm-12 form-panel" id="2">
        <BasicInfoForm
          form={this.props.form}
          badge={2}
          title={`TARGET`}
          forms={[{
            title: 'Quantity',
            name: 'videoTime',
            type: 'number',
          }, {
            title: 'Video timing purchase',
            name: 'minWatchingTime',
            type: 'options',
            options: ['10s', '20s', '30s'],
            isMulti: false,
          }, {
            title: 'Frequency cap',
            name: 'frequencyCap',
            type: 'options',
            options: ['Limited', 'Unlimited'],
            isMulti: false,
          }, {
            title: 'Data package',
            name: 'awardValue',
            type: 'options',
            options: ['5MB', '10MB', '20MB'],
            isMulti: false,
          }]}
          onChange={this.changeForm.bind(this)}
        />
      </div>
      <div className="col-sm-12 form-panel">
        <BasicInfoForm
          form={this.props.form}
          title={`AUDIENCE`}
          badge={3}
          forms={[{
            title: 'Age',
            name: 'ageRange',
            type: 'options',
            isMulti: true,
            options: [{
              label: 'All age range',
              value: 'ALL',
            }, '0-18', '19-24', '25-34', '35-50', '51-101',
            ],
          }, {
            title: 'Gender',
            name: 'gender',
            type: 'options',
            isMulti: true,
            options: [{
              label: 'All gender',
              value: 'ALL',
            }, {
              label: 'Male',
              value: 'MALE',
            }, {
              label: 'Female',
              value: 'FEMALE'
            }, {
              label: 'Unknown',
              value: 'UNKNOWN'
            }],
          }, {
            title: 'ARPU',
            name: 'arpu',
            isMulti: true,
            type: 'options',
            options: [{
              label: 'All ARPU',
              value: 'ALL',
            },
              "10K-50K",
              "50K-100K",
              "100K-200K",
              "200K-300K",
              "300K-500K",
              "500K-1000K",
            ],
          }, {
            title: 'Sim type',
            name: 'simType',
            isMulti: true,
            type: 'options',
            options: [{
              label: 'All sim type',
              value: 'ALL',
            }, {
              label: 'Premium sim',
              value: 'premium-sim',
            }, {
              label: 'Standard sim',
              value: 'standard-sim',
            },]
          }, {
            title: 'OS',
            name: 'phoneOS',
            isMulti: true,
            type: 'options',
            options: [{
              label: 'All OS',
              value: 'ALL',
            },
              'iOS', 'Android', 'Windows Phone'
            ],
          }, {
            title: 'Hand set',
            name: 'handSet',
          }, {
            title: 'Location',
            name: 'location',
            subForm: [{
              type: 'treeSelect',
              title: 'Work location',
              name: 'workLocation',
              tree: locationPicker,
            }, {
              type: 'treeSelect',
              title: 'Home Location',
              name: 'homeLocation',
              tree: locationPicker,
            },]
          }, {
            title: 'Registered services',
            name: 'registeredServices',
            type: 'options',
            options: [{
              label: 'All services',
              value: 'ALL'
            }, {
              label: 'Roaming',
              value: 'roaming'
            }]
          }]}
          onChange={this.changeForm.bind(this)}
        />
      </div>
    </div>)
  }
}
