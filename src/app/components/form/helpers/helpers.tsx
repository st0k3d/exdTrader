/* eslint-disable no-unused-vars */
import React from 'react';
import { FormikProps } from 'formik';
import {
  Form, Input, InputNumber, Select,
} from 'formik-antd';
import { FormField } from '../../../Models';
import { FORM_FIELDS } from '../../../constants/appConstants';
import SearchInput from '../inputs/SearchInput';

const { Option } = Select;
const { TextArea } = Input;

export const getSelectOptions = (options: any[]): JSX.Element[] => options
  .map((d) => <Option key={d} value={d}>{d}</Option>);

export const getFieldByType = (formField: FormField, formik: FormikProps<object>): JSX.Element => {
  let style = {};
  if (formField.style && typeof formField.style === 'function') {
    style = formField.style(formik.values);
  } else if (formField.style) {
    style = formField.style;
  }

  switch (formField.type) {
    case FORM_FIELDS.INPUT: {
      return (
        <Input name={formField.name} placeholder={formField.placeholder} />
      );
    }
    case FORM_FIELDS.SELECT: {
      return (
        <Select name={formField.name} style={style}>
          {getSelectOptions(formField.options ? formField.options : [])}
        </Select>
      );
    }
    case FORM_FIELDS.SEARCH_INPUT: {
      return (
        <SearchInput
          name={formField.name}
          passedOptions={formField.options}
          placeholder={formField.placeholder}
          style={style}
        />
      );
    }
    case FORM_FIELDS.INPUT_NUMBER: {
      return (
        <InputNumber
          name={formField.name}
          min={formField.min}
          step={formField.step}
          max={formField.max}
          formatter={formField.formatter}
          style={style}
        />
      );
    }
    case FORM_FIELDS.TEXT_AREA: {
      return (
        <TextArea
          name={formField.name}
          placeholder={formField.placeholder}
          rows={formField.rows}
          style={style}
        />
      );
    }
    default: {
      return (
        <div />
      );
    }
  }
};

export const getFormItem = (formField: FormField, formik: FormikProps<object>): JSX.Element => {
  let required = false;
  if (typeof formField.required === 'function') {
    required = formField.required(formik.values);
  } else if (typeof formField.required === 'boolean') {
    required = formField.required;
  }
  return (
    <Form.Item
      name={formField.name}
      label={formField.label}
      required={required}
    >
      {getFieldByType(formField, formik)}
    </Form.Item>
  );
};
