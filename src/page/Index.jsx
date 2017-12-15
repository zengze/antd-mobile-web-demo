import React, { Component } from 'react';

import { NavBar, Drawer, Icon } from 'antd-mobile';

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      docked: false,
    };
  }

  onDock = (d) => {
    this.setState({
      docked: !this.state.docked,
    });
  }

  render() {

    return (
      <div>
        <NavBar icon={<Icon type="ellipsis" />} onLeftClick={() => this.onDock()}>
          Docked in document
        </NavBar>
        <Drawer
          className="my-drawer"
          style={{ minHeight: document.documentElement.clientHeight - 45 }}
          sidebar={'zzzzzzz'}
          docked={this.state.docked}
        >
          Click upper-left corner
        </Drawer>
      </div>
    );
  }
}
