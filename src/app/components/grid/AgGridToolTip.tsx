import React, { Component } from 'react';
import { Tooltip } from 'antd';

interface Props {
    api: any,
    rowIndex: any
}

class AgGridToolTip extends Component<Props> {
  // eslint-disable-next-line class-methods-use-this
  getReactContainerClasses() {
    return ['custom-tooltip'];
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const { data } = this.props.api.getDisplayedRowAtIndex(this.props.rowIndex);
    return (
      <Tooltip placement="topRight" title={data.comment}>
        <span>{data.comment}</span>
      </Tooltip>
    );
  }
}

export default AgGridToolTip;
