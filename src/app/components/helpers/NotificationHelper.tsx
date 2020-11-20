/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { notification, Button, Alert } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import { green } from '@ant-design/colors';

export const openErrorNotification = (msg: string): void => {
  const key = `open${Date.now()}`;

  const btn = (
    <Button type="primary" size="small" danger onClick={() => notification.close(key)}>
      Close
    </Button>
  );

  notification.open({
    message: '',
    closeIcon: <div />,
    description:
  <Alert
    message="ERROR"
    description={msg}
    type="error"
    showIcon
  />,
    btn,
    key,
    duration: 0,
    placement: 'topLeft',
  });
};

export const openSuccessNotification = (): void => {
  notification.open({
    message: 'Success',
    closeIcon: <div />,
    placement: 'topLeft',
    description:
            'Your order has been submitted succesfully',
    icon: <CheckCircleOutlined style={{ color: green.primary }} />,
  });
};
