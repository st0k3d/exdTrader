import React from 'react';
import { Spin } from 'antd';

const Loading: React.FunctionComponent = () => (
  <div className="loading-mask">
    <div className="loading-spinner">
      <Spin size="large" tip="Loading..." />
    </div>
  </div>
);

export default Loading;
