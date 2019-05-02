import React, {Component} from 'react'
import Select from 'react-select'

import options from './options/options.js';

class MultiSelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionValue: []
    }
  }
  componentWillMount() {
    if (this.props.options) {
      if (this.props.options.length) {
        if (typeof this.props.options[1] == 'object')
          this.setState({
            optionValue: this.props.options,
          });
        else
          this.setState({
            optionValue: this.props.options.map(option => {return {
              value: option,
              label: option
            }})
          })
        }
      return;
    } else if (!this.props.type) {
      this.setState({optionValue: []})
      return;
    }

    if (this.props.type == "status") {
      this.setState({optionValue: options.campaignStatus})
      return;
    }

    if (this.props.type == "advertiser") {
      this.setState({optionValue: options.advertiser})
      return;
    }

    if (this.props.type == "campaignType") {
      this.setState({optionValue: options.campaignType})
      return;
    }

    if (this.props.type == "teleProvider") {
      this.setState({optionValue: options.teleProvider})
      return;
    }

    if (this.props.type == "dataReward") {
      this.setState({optionValue: options.dataReward})
      return;
    }

    if (this.props.type == "province") {
      this.setState({optionValue: options.province})
      return;
    }

    this.setState({optionValue: []})
    return;
  }

  render() {
    let {optionValue} = this.state;
    return (<div>
      <Select options={optionValue} onChange={this.props.onChange} isDisabled={this.props.isDisabled} placeholder={this.props.placeholder} value={this.props.value} isMulti />
    </div>)
  }
}

export default MultiSelectBox;
