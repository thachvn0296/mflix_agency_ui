import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {DateRangePicker} from 'react-date-range';
import {Input, AutoComplete, Select} from 'antd';

// import { history } from 'utils/history';

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import './style.scss'

import {defaultStaticRanges, createStaticRanges} from 'react-date-range';

const {Search} = Input;
const {Option} = Select;

const dataSource = ['Sunlight', 'OMO', 'Comfort', 'Tide'];

function onSelect(value) {}

class FilterBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: {},
      toggleMenu: this.props.toggleMenu,
      dataSource: dataSource
    }
  }
  handleSearch = (value) => {
    if (!value || '' === value) {
      this.setState({dataSource: dataSource});
    } else {
      let searchValue = value.toLowerCase();
      let filteredList = this.state.dataSource;

      filteredList = filteredList.filter(item => {
        return item.toLowerCase().search(searchValue) !== -1;
      });

      this.setState({dataSource: filteredList});
    }

  }

  componentWillMount = () => {
    this.resetFilter();
  }

  resetFilter = () => {
    let value = {};
    let {filter} = this.props;
    filter.filter(item => (item.value)).map(item => {
      if (item.menu && item.value) {
        let menuValue = {};
        item.menu.map(choice => {
          menuValue[choice.name] = item.value.includes(choice);
          return null;
        });
        value[item.name] = menuValue;
      } else if (item.type === 'date') {
        value[item.name] = {
          startDate: new Date(),
          endDate: new Date()
        }
      } else {
        value[item.name] = '';
      }
      return null;
    });

    this.setState({filter: value});
  }

  changeInputFilter = (item, name, value) => {
    let {filter} = this.state;
    filter[name][item.name] = value;
    this.setState({
      filter
    }, () => this.props.changeFilter(item.name, name, value));
  }

  renderInputFilter = (item, name) => {
    let value = this.state.filter[name][item.name];
    return (<div>
      <label className="container-checkbox">{item.title}
        <input type="checkbox" checked={value} onChange={(event) => this.changeInputFilter(item, name, event.target.checked)}/>
        <span className="checkmark"></span>
      </label>
    </div>);
  }

  renderDropDown = (item) => {
    let result = null;
    switch (item.type) {
      case 'button':
        {
          result = (<div className="child-menu-btn-wrapper">
            <button className="btn btn-dropdown btn-child-menu" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {item.title}
            </button>
          </div>);
          break;
        }
      default:
        {
          result = (<div className="">
            <button className="btn dropdown-toggle btn-child-menu" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {item.title}
              <i className="fas fa-chevron-down"></i>
            </button>
            <fieldset className="group">
              <ul className="checkbox">
                {
                  (item.menu)
                    ? item.menu.map((choice, key) => <li key={key}>
                      {this.renderInputFilter(choice, item.name)}
                    </li>)
                    : null
                }
              </ul>
            </fieldset>
          </div>);
        }
    }
    return result;
  }

  closeAllBox = () => {
    this.submitFilter.bind(this)
    let {toggleMenu} = this.state;
    Object.keys(toggleMenu).map((key) => {
      toggleMenu[key] = false;
      return null;
    });
    this.setState({toggleMenu});
  }

  toggleMenu = (menu) => {
    let {toggleMenu} = this.state;
    if (toggleMenu[menu]) {
      Object.keys(toggleMenu).map((key) => {
        toggleMenu[key] = false;
        return null;
      });
    } else {
      Object.keys(toggleMenu).map((key) => {
        if (key === menu) {
          toggleMenu[key] = true;
        } else {
          toggleMenu[key] = false;
        }
        return null;
      })
    }
    this.setState({toggleMenu});
  }

  submitFilter = () => {
    this.props.applyFilter().then(changed => this.resetFilter());
  }

  renderFilterBox = () => {
    let {toggleMenu} = this.state;
    let {filter} = this.props;
    let item = null
    for (let i in toggleMenu) {
      if (toggleMenu[i]) {
        for (let j in filter) {
          if (filter[j].name === i) {
            item = filter[j]
          }
        }
      }
    }
    if (!item)
      return
    if (item.type === 'button') {
      return (<div className="dropdown-menu-wrapper" onMouseLeave={this.closeAllBox.bind(this)}>
        <fieldset className="group">
          <ul className="checkbox">
            {
              (item.menu)
                ? item.menu.map((choice, key) => <li key={key}>
                  {this.renderInputFilter(choice, item.name)}
                </li>)
                : null
            }
          </ul>
        </fieldset>
      </div>)
    } else if (item.type === 'date') {
      let {filter} = this.state;
      return (<div className="dropdown-menu-wrapper">
        <fieldset className="group fieldset-calendar-picker-wrapper">
          <div className="fieldset-calendar-picker-wrapper">
          <DateRangePicker ranges={[filter[item.name]]} onChange={this.handleSelect.bind(this, item.name)} direction="horizontal" months={2} showSelectionPreview={true} staticRanges={createStaticRanges([
              ...defaultStaticRanges, {
                label: 'Lifetime',
                range: () => ({
                  startDate: new Date(1998, 11, 28),
                  endDate: new Date()
                })
              }
            ])}/>
        </div>
        </fieldset>
      </div>)
    } else if (item.type === 'search') {
      let {filter} = this.state;
      return (<div className="dropdown-menu-wrapper">
        <fieldset className="group">
          <AutoComplete dataSource={dataSource} onSelect={(value) => this.selectSearch(item.name, value)} placeholder={item.placeholder || 'Search'} onSearch={this.handleSearch} value={filter[item.name]}/>
        </fieldset>
      </div>)
    } else if (item.type === 'options') {
      let {filter} = this.state;
      const options = item.options.map((option, id) => <Option key={id}>
        {option}
      </Option>)
      return (<div className="dropdown-menu-wrapper">
        <fieldset classname="group">
          <Select mode="multiple" style={{
              width: '100%'
            }} placeholder="Select type of agency" value={filter[item.name]} onChange={value => this.changeSelectOptions(item.name, value)}/> {options}
        </fieldset>
      </div>)
    }
  }

  selectSearch = (name, value) => {
    let {filter} = this.state;
    filter[name] = value;
    this.setState({
      filter
    }, () => this.props.changeFilter(name, this.state.filter[name]));
  }

  changeSelectOptions = (name, value) => {
    let {filter} = this.state;
    filter[name] = value;
    this.setState({filter});
  }

  changeInputSearch = (name, event) => {
    let {filter} = this.state;
    filter[name] = event.target.value;
    this.setState({
      filter
    }, () => this.props.applyFilter(name, this.state.filter[name]));
  }

  handleSelect = (name, ranges) => {
    let {filter} = this.state;
    filter[name] = ranges.range1;
    this.setState({
      filter
    }, () => this.props.changeFilter(name, ranges.range1));
  }

  renderOptions = (item) => {
    let {toggleMenu} = this.state;
    if (toggleMenu[item.name]) {
      return <div>
        123
      </div>
    }
  }

  renderButtonBox = () => {
    let {filter} = this.props;
    return (<div className="btn-group button-group">
      {
        filter.map((item, index) => {
          if (item.type === 'button-group')
            return (<span>{
                item.items.map(i => {
                  const isButton = (i.type === 'button' || i.type === 'link');
                  const isIButton = (i.iClass)
                    ? true
                    : false;
                  return (<div className={`button-wrapper${ (isIButton)
                      ? ' ibutton-wrapper'
                      : ''}`}>
                    <div className="row">
                      <button className={`btn button${ (isButton)
                          ? ' special-button'
                          : ''} grp-btn${ (isIButton)
                            ? ' ibutton'
                            : ''}`} key={index} type="button" onClick={(e) => {
                          e.preventDefault();
                          if (i.type === 'link')
                            return this.props.history.push(i.link);
                          return this.toggleMenu(i.name);
                        }}>
                        {
                          (i.iClass)
                            ? <i className={i.iClass}/>
                            : i.title
                        }
                      </button>
                    </div>
                  </div>);
                })
              }</span>);

          const isButton = (item.type === 'button' || item.type === 'link')
          const isIButton = (item.iClass)
            ? true
            : false
          return (<div className={`button-wrapper${ (isIButton)
              ? ' ibutton-wrapper'
              : ''}`} key={index}>
            <button className={`btn button${ (isButton)
                ? ' header-button-link special-button'
                : ''}${ (isIButton)
                  ? ' ibutton'
                  : ''}`} type="button" key={index} onClick={(e) => {
                e.preventDefault();
                if (item.type === 'link')
                  return this.props.history.push(item.link);
                return this.toggleMenu(item.name);
              }}>
              {
                (item.iClass)
                  ? <i className={item.iClass}/>
                  : item.title
              }
            </button>
            {
              (item.type === 'option')
                ? <div>
                    {this.renderOptions(item)}
                  </div>
                : null
            }
          </div>);
        })
      }
    </div>);
  }

  renderButtonLink = () => {
    let {filter} = this.props;
    return (<div className="btn-group button-group">
      {
        filter.map((item, index) => {
          const isButton = (item.type === 'button-link')
          return (<div className="button-wrapper" key={index}>
            <a href="#link"></a>
            <button className={`btn button${ (isButton)
                ? ' btn-link'
                : ''}`} type="button" key={index}>
              {item.title}
            </button>
            {
              (item.type === 'option')
                ? <div>
                    {this.renderOptions(item)}
                  </div>
                : null
            }
          </div>);
        })
      }
    </div>);
  }

  render() {
    return (<div className="filter-box">
      {this.renderButtonBox()}
      {this.renderFilterBox()}
    </div>)
  }
}

export default withRouter(FilterBox);
