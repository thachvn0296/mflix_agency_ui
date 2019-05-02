import React, {Component} from 'react';

import './style.scss';

export default class Table extends Component {
  renderHeader = () => {
    let {header} = this.props;
    if (!header)
      return null;
    if (header.length)
      return header.map((item, index) => <td key={index}>
        {item.title}
      </td>)
    return null;
  }

  renderBody = () => {
    let {data, header} = this.props;
    if (!data)
      return null;
    if (!data.length)
      return null;
    let result = data.map((item, index) => <tr key={index} className="mnd-table-body">
      {
        header.map((itm, index) => {
          return <td key={index}>
            {item[itm.name]}
          </td>
        })
      }
    </tr>);
    return result;
  }

  render() {
    return (<div className="mnd-table-container container-fluid">
      <div className="table-wrap">
        <div className="table-box">
          <table className='mnd-table'>

            {this.props.body}

          </table>
        </div>
      </div>
    </div>)
  }
}
