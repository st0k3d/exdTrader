/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Form, SubmitButton, ResetButton } from 'formik-antd';
import { Row, Col } from 'antd';
import { Formik, FormikValues, FormikProps } from 'formik';
import _ from 'lodash';
import { FormField, GenForm } from '../../Models';
import { getFormItem } from './helpers/helpers';


interface Props {
    onSubmit: ((values: FormikValues & object) => Promise<boolean>);
    formDef: GenForm;
}

const GenericForm: React.FunctionComponent<Props> = (props: Props) => {
  const { onSubmit, formDef } = props;

  const handleOnFormReset = (): void => {
  };

  const getInitialValues = (formFields: FormField[]): object => {
    const initialValues: Record<string, string | number> = {};
    _.forEach(formFields, (value) => {
      initialValues[value.name] = value.initialValue !== undefined ? value.initialValue : '';
    });
    return initialValues;
  };

  const getFields = (form: GenForm, formik: FormikProps<object>): JSX.Element[] => {
    const children = [];

    for (let i = 0; i < form.formFields.length; i++) {
      children.push(
        <Col span={8} key={i}>
          {getFormItem(form.formFields[i], formik)}
        </Col>,
      );
    }
    return children;
  };

  const getStandardLayout = (formDefinition: GenForm, formik: FormikProps<object>): JSX.Element => (
    <>
      <Row gutter={24}>{getFields(formDefinition, formik)}</Row>
      <Row>
        <Col
          span={24}
          id="genericform-button-col"
        >
          <SubmitButton disabled={!(formik.isValid && formik.dirty)} title="Submit">
            Submit
          </SubmitButton>
          <ResetButton
            id="genericform-reset-button"
            title="Reset"
          >
            Clear
          </ResetButton>
        </Col>
      </Row>
    </>
  );

  const getCustomLayout = (Layout: any, formField: FormField[],
    formik: FormikProps<object>): JSX.Element => {
    const layoutProps: any = {
      formField,
      formik,
    };
    return <Layout {...layoutProps} />;
  };

  return (
    <Formik
      onSubmit={async (values, actions) => {
        onSubmit(values).then((result) => {
          if (result) {
            actions.resetForm();
          }
        }).finally(() => {
          actions.setSubmitting(false);
        });
      }}
      onReset={handleOnFormReset}
      initialValues={getInitialValues(formDef.formFields)}
      validate={(values) => {
        if (formDef.validationFunction) {
          return formDef.validationFunction(values);
        }
        return {};
      }}
    >
      {(formik) => (
        <Form>
          {formDef.formFields
                        && (
                          <>
                            {formDef.Layout
                           && getCustomLayout(formDef.Layout, formDef.formFields, formik)}
                            {!formDef.Layout && getStandardLayout(formDef, formik)}
                          </>
                        )}
        </Form>
      )}
    </Formik>
  );
};

export default GenericForm;
