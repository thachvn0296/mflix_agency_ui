import React, { PureComponent } from 'react'

export default class Sidebar extends PureComponent {
    render() {
        let { route, match } = this.props;
        return (
            <div className="management-sidebar">
                <div className="icon-bar item">
                    {route.map((item, index) =>
                        <a
                            onClick={(e) => {
                                e.preventDefault()
                                return this.props.history.push(item.route)
                            }}
                            key={index}
                            style={{ 'color': (match.path === item.route) ? '#49a8b0' : '' }}
                        >
                            <i className={item.iClass}></i>
                            <span className="title">{item.title}</span>
                        </a>)}
                </div>
            </div>
        );
    }
}
