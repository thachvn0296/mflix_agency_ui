import React, { Component } from "react";
import { withRouter } from 'react-router';
import moment from 'moment';
import { Input, DatePicker, Select, Form, TreeSelect } from 'antd';

import "./style.scss";

const FormItem = Form.Item;

const { Option } = Select;

class BasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    }
  }

  componentWillMount = () => {
    console.log(moment("21-12-2018"))
    let { forms } = this.props;
    this.setState({
      form: forms.reduce((accumulator, currentValue) => {
        if (!currentValue.subForm) {
          return Object.assign(accumulator, {
            [currentValue.name]: {
              ...currentValue,
              value: ''
            }
          });
        } else {
          let subForm = currentValue.subForm.reduce((result, currentForm) => Object.assign(result, {
            [currentForm.name]: {
              ...currentForm,
              value: '',
              isSubForm: true
            }
          }), {});
          return Object.assign(accumulator, {
            ...subForm,
            [currentValue.name]: {
              ...currentValue,
              value: ''
            }
          });
        }
      }, {})
    });
  }

  renderFormItem = (key, subForm) => {
    let { form } = this.state;
    let result = null;
    switch (form[key].type) {
      default:
        {
          result = (<div>
            {form[key].value}
          </div>);
        }
    }
    return (<FormItem ><div>
      <div className={(
        form[key].isSubForm)
        ? ""
        : "title-text col-sm-4"}>{form[key].title}</div>
      <div className={(subForm) ? "" : "col-sm-8"}>{this.props.form[form[key].name] ? form[key].type === 'options' || form[key].type == 'treeSelect' ? <Input value={this.props.form[form[key].name].toString().split(',').join('; ')} /> : <Input value={this.props.form[form[key].name]} /> : <Input disabled value={'No data'} />}{result}
      </div>
    </div>
    </FormItem>);
  }

  mapForm = (key) => {
    let { form } = this.state
    if (form[key].subForm) {
      return (<div>
        <div className={(
          form[key].isSubForm)
          ? ""
          : "title-text col-sm-4"}>{form[key].title}</div>
        <div className={(
          form[key].isSubForm)
          ? ""
          : "col-sm-8"}>
          {form[key].subForm.map((subForm) => this.renderFormItem(subForm.name, subForm))}
        </div>
      </div>);
    } else {
      return this.renderFormItem(key)
    }
  }

  renderForms = () => {
    let { form } = this.state
    return Object.keys(form).map((key, index) => {
      if (form[key].isSubForm)
        return null;
      return (<div className="col-sm-12 input-box-wrapper" key={index}>
        {this.mapForm(key)}
      </div>);
    });
  }

  submitForm = (e) => {
    // e.preventDefault();
    // Do validation and store state

    // this.props.history.push('/create-campaign?#2')
  }

  render() {
    return (<div className="create-form">
      <div className="box">
        <div className="form-header">
          <div className="index-badge text-center">{this.props.badge}</div>
          {this.props.title}
        </div>
        <Form className="form-body" onSubmit={this.submitForm.bind(this)}>
          {this.renderForms()}
        </Form>
      </div>
    </div>);
  }
}

export default withRouter(Form.create()(BasicInfoForm));
