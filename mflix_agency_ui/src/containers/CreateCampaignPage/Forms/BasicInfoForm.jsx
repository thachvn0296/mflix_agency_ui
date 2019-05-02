import React, { Component } from "react";
import { withRouter } from 'react-router';
import moment from 'moment';
import { Input, DatePicker, Select, Form, TreeSelect } from 'antd';

import "./style.scss";

const FormItem = Form.Item;

const {
  Option
} = Select;

class BasicInfoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {}
    }
  }

  componentWillMount = () => {
    let { forms } = this.props;
    this.setState({
      form: forms.reduce((
        accumulator,
        currentValue
      ) => {
        if (!currentValue.subForm) {
          return Object.assign(
            accumulator,
            {
              [currentValue.name]: { ...currentValue, value: '' }
            }
          );
        } else {
          let subForm = currentValue.subForm.reduce((
            result,
            currentForm
          ) => Object.assign(
            result,
            {
              [currentForm.name]: { ...currentForm, value: '', isSubForm: true }
            }
          ), {});
          return Object.assign(
            accumulator,
            {
              ...subForm,
              [currentValue.name]: { ...currentValue, value: '' }
            }
          );
        }
      }, {})
    });
  }

  renderFormItem = (key) => {
    let { form } = this.state;
    let { getFieldDecorator } = this.props.form;
    let result = null;
    switch (form[key].type) {
      case 'date': {
        result = (
          <DatePicker
          size="large"
            getCalendarContainer={trigger => trigger.parentNode}
            format="MMM DD YYYY"
            value={form[key].value}
            disabledDate={form[key].disabledDate.bind(this)}
            showTime={{
              defaultValue: moment('00:00:00', 'HH:mm:ss'),
              hideDisabledOptions: true,
            }}
            onChange={(date, type) => {
              let { form } = this.state;
              form[key].value = date;
              this.setState({
                form,
              }, () => this.props.onChange(key, this.state.form[key].value.format(date.format("DD-MM-YYYY"))));
            }}
          />
        );
        break;
      }
      case 'options': {
        if (form[key].options) {
          result = (<div>
            <Select
          size="large"
              getPopupContainer={trigger => trigger.parentNode}
              value={(form[key].value) || []}
              showSearch
              mode={(form[key].isMulti) ? "multiple" : "default"}
              placeholder={`Select ${form[key].title}`}
              onChange={(options) => {
                let { form } = this.state;
                if (form[key].isMulti) {
                  let allItem = false;
                  if (options.length >= 1)
                    allItem = options[options.length - 1] === 'ALL';
                  if (allItem) {
                    form[key].value = ['ALL'];
                  } else {
                    let indexOfAll = options.findIndex(option => option === 'ALL');
                    if (indexOfAll !== -1) {
                      options.splice(indexOfAll, 1);
                      form[key].value = options;
                    } else {
                      form[key].value = options;
                    }
                  }
                } else {
                  form[key].value = options;
                }
                this.setState({
                  form,
                }, () => {
                  if (!form[key].isMulti) {
                    this.props.onChange(key, this.state.form[key].value)
                  } else {
                    this.props.onChange(key, this.state.form[key].value.map(item => item).toString())
                  }
                });
              }}
            >
              {form[key].options.map(item => {
                if (item.label && item.value) return item;
                return {
                  label: item,
                  value: item,
                }
              }).map((option, id) =>
                <Option
                  value={option.value}
                  key={id}
                >
                  {option.label}
                </Option>
              )}
            </Select>
          </div>);
        }
        break;
      }
      case 'treeSelect': {
        result = <TreeSelect
        size="large"
          value={form[key].value}
          style={{ width: 300 }}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={form[key].tree}
          placeholder="Please select"
          multiple
          onChange={(value) => {
            if (value[value.length - 1] === 'ALL') {
              let { form } = this.state;
              form[key].value = ['ALL'];
              this.setState({
                form,
              });
            } else {
              let selectedValue = value;
              let cityValue = selectedValue
                .filter(e => !e.toString().includes("_"))
                .filter(e => {
                  return selectedValue.findIndex(element => {
                    if (element.toString() !== e.toString() && element.toString().includes("_")) {
                      return element.split("_")[0].includes(e.toString());
                    } else {
                      return false;
                    }
                  }) >= 0;
                });
              let { form } = this.state;
              form[key].value = selectedValue.filter(e => !cityValue.includes(e) || e === 'ALL');
              this.setState({
                form,
              });
            }
          }}
        />;
        break;
      }
      case 'number': {
        result = (<Input
          value={form[key].value}
          size="large"
          required={form[key].required}
          placeholder={form[key].title}
          onChange={(e) => {
            let { form } = this.state;
            let result = parseInt(e.target.value.replace(/[,]/g, ''));
            form[key].value = (isNaN(result)) ? '' : result.toLocaleString();
            this.setState({
              form,
            }, () => this.props.onChange(key, this.state.form[key].value));
          }}
        />);
        break;
      }
      default: {
        result = (<Input
          value={form[key].value}
          placeholder={form[key].title}
          size="large"
          required={form[key].required}
          onChange={(e) => {
            let { form } = this.state;
            form[key].value = e.target.value;
            this.setState({
              form,
            }, () => this.props.onChange(key, this.state.form[key].value));
          }}
        />);
      }
    }
    return (
      <FormItem
      >
        {getFieldDecorator(form[key].name, {
          rules: [{
            required: true,
            message: `Please input ${form[key].title}`
          }],
        })(
          <div>
            <div className={(form[key].isSubForm) ? "" : "title-text"}>{form[key].title}</div>
            {result}
          </div>
        )}
      </FormItem>
    );
  }

  mapForm = (key) => {
    let { form } = this.state
    if (form[key].subForm) {
      return (
        <div>
          <div className={(form[key].isSubForm) ? "" : "title-text"}>{form[key].title}</div>
          <div className="input-source">
            {form[key].subForm.map(
              (subForm) => this.renderFormItem(subForm.name))}
          </div>
        </div>
      );
    } else {
      return this.renderFormItem(key)
    }
  }

  renderForms = () => {
    let { form } = this.state
    return Object.keys(form).map((key, index) => {
      if (form[key].isSubForm) return null;
      return (<div
        className="col-sm-12 input-box-wrapper"
        key={index}
      >
        {this.mapForm(key)}
      </div>);
    });
  }

  submitForm = (e) => {
  }

  render() {
    return (
      <div className="create-form"
        onClick={this.props.onFocus.bind(this)}
      >
        <div className="box">
          <div className="form-header">
            <div className="index-badge text-center">{this.props.badge}</div>
            {this.props.title}
          </div>
          <Form className="form-body"
            onSubmit={this.submitForm.bind(this)}
          >
            {this.renderForms()}
          </Form>
        </div>
      </div>
    );
  }
}

export default withRouter(Form.create()(BasicInfoForm));
