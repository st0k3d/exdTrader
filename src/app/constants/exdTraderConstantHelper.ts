/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import { red, green } from '@ant-design/colors';
import { FormikValues } from 'formik';
import _ from 'lodash';
import { DEFAULT_SELECT_WIDTH } from '../constants/appConstants';

export const exdTraderFormValidation = (values: FormikValues & object): Record<string, string> => {
  let omits = ['tif', 'comment'];
  if (values.orderType && values.orderType.toLowerCase() !== 'limit') {
    omits = _.concat(omits, 'price', 'stopPrice');
  }

  const data: Record<string, string> = {};
  _.forOwn(_.omit(values, omits), (value, key) => {
    if (!value) {
      data[key] = '';
      return false;
    }
    return true;
  });
  return data;
};

export const isLimitOrderType = (values: any): boolean => {
  if (values.orderType && values.orderType.toLowerCase() === 'limit') {
    return true;
  }
  return false;
};

export const getActionStyle = (values: any): object => {
  let backgroundColor = 'transparent';
  if (values && values.action) {
    if (values.action.toLowerCase() === 'buy') {
      backgroundColor = green.primary ? green.primary : 'green';
    } else if (values.action.toLowerCase() === 'sell') {
      backgroundColor = red.primary ? red.primary : 'red';
    }
  }

  return {
    width: DEFAULT_SELECT_WIDTH,
    backgroundColor,
  };
};
