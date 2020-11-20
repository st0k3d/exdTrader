/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, SubmitButton, ResetButton } from 'formik-antd';
import { Row, Col } from 'antd';
import { FormikProps } from 'formik';
import { FormField } from '../../../Models';
import { getFormItem } from '../helpers/helpers';

interface Props {
  formField: FormField[];
    formik: FormikProps<object>
}

const EXDTraderLayout: React.FunctionComponent<Props> = (props: Props) => {
  const { formField, formik } = props;

  const action = formField[0];
  const symbol = formField[1];
  const qty = formField[2];
  const price = formField[3];
  const orderType = formField[4];
  const tif = formField[5];
  const stopPrice = formField[6];
  const comment = formField[7];

  return (
    <>
      <Row gutter={16}>
        <Col span={6}>
          {getFormItem(action, formik)}
        </Col>
        <Col span={6}>
          {getFormItem(symbol, formik)}
        </Col>
        <Col span={4} />
        <Col span={4}>
          {getFormItem(qty, formik)}
        </Col>
        <Col span={4}>
          <div className="float-right">
            {getFormItem(price, formik)}
          </div>
        </Col>
      </Row>

      <Row>
        <Col span={6}>
          {getFormItem(orderType, formik)}
        </Col>
        <Col span={6}>
          {getFormItem(tif, formik)}
        </Col>
        <Col span={6} />
        <Col span={6}>
          <div className="float-right">
            {getFormItem(stopPrice, formik)}
          </div>
        </Col>
      </Row>

      <Row align="bottom">
        <Col span={12}>
          {getFormItem(comment, formik)}
        </Col>
        <Col span={12}>
          <div className="float-right">
            <Form.Item name="submitButton">
              <SubmitButton disabled={!(formik.isValid && formik.dirty)} title="Submit" id="exd-submit-button">Submit</SubmitButton>
              <ResetButton title="Reset">Reset</ResetButton>
            </Form.Item>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default EXDTraderLayout;
