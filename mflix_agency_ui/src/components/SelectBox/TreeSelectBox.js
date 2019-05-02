import React, {Component} from 'react'
import Select from 'react-select'
import DropdownTreeSelect from "react-dropdown-tree-select";

import options from './options/options.js';
import './style.scss';

let val = '';
const onChange = (currentNode, selectedNodes) => {
  console.log("path::", currentNode.path);
};

class TreeSelectBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      optionValue: [],
      value: ''
    }
  }
  componentWillMount() {
    // if (this.props.options) {
    //   if (this.props.options.length) {
    //     if (typeof this.props.options[1] == 'object')
    //       this.setState({
    //         optionValue: this.props.options,
    //       });
    //     else
    //       this.setState({
    //         optionValue: this.props.options.map(option => {return {
    //           value: option,
    //           label: option
    //         }})
    //       })
    //     }
    //   return;
    // } else if (!this.props.type) {
    //   this.setState({optionValue: []})
    //   return;
    // }

    if (this.props.type == "location") {
      this.setState({optionValue: options.locationPicker})
      return;
    }

    this.setState({optionValue: []})
    return;
  }

  // onchange(){
  //   console.log(this.state.optionValue)
  // }
  

  onChange = (currentNode, selectedNodes) => {
      console.log(this.state.optionValue)
    console.log('onChange::', currentNode, selectedNodes)
    let result = {}
    if (selectedNodes.length === 1 && selectedNodes[0]._depth === 0) {
      val = 'ALL';
      return;
    }
    for (let i in selectedNodes) {
      if (selectedNodes[i]._depth === 2) {
        result[selectedNodes[i]._parent.substring(2, 4)] = (result[selectedNodes[i]._parent]) ? [...result[selectedNodes[i]._parent], selectedNodes[i].label] : [selectedNodes[i].label]
      } else if (selectedNodes[i]._depth === 1) {
        result[selectedNodes[i]._id.substring(2, 4)] = 'ALL'
      }
    }
    result = Object.keys(result).map(key => {
      console.log(key)
      let cityName = this.state.optionValue[0]['children'][key].label.split(' ').map(e => e.toUpperCase()).join('')
      if (result[key] === 'ALL') return `${cityName}`
      else return `${cityName}.${result[key].toString().replace(new RegExp(',', 'g'), '_').split(' ').map(e => e.toUpperCase()).join('')}`
    })
    val = result.toString()
  }

  onBlur = () => {
    this.props.onChange(val)
  }

  shouldComponentUpdate = (nextProps, nextState) => false

  render() {
    let {optionValue} = this.state;
    return (<div className="">
      <div className="form-control dropdown-tree-wrapper">
        {/* <DropdownTreeSelect data={optionValue} onChange={this.props.onChange} isDisabled={this.props.isDisabled} value={this.props.value} className="bootstrap-demo"/> */}
        <DropdownTreeSelect data={optionValue} className="bootstrap-demo"
          placeholderText={this.props.value || this.props.placeholder}
          onChange={this.onChange.bind(this)}
          onBlur={this.onBlur.bind(this, this)}
        /> 
      </div>
    </div>)
  }
}

export default TreeSelectBox;
