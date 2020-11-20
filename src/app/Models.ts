/* eslint-disable no-unused-vars */
import { FunctionComponent } from 'react';
import { FORM_FIELDS } from './constants/appConstants';

export interface GridColumn {
    headerName: string;
    field: string;
    cellClass?: string | string[] | Function;
    tooltipField?: string;
    valueFormatter?: Function;
}
export interface Validator {
    (values: object): Record<string, string>;
}

export interface FormField {
    type: FORM_FIELDS,
    name: string,
    label?: string,
    testId?: string;
    placeholder?: string;
    initialValue?: string | number
    options?: any[]
    required?: boolean|((values:object) => boolean);
    min?: number;
    max?: number;
    step?: number;
    rows?: number;
    formatter?: ((value: string | number | undefined) => string);
    style?:object|((value:any) => object);
}

export interface GenForm {
    validationFunction?: Validator;
    formFields: FormField[];
    Layout?:FunctionComponent<any>
}

export interface TradeView {
    title: string;
    formTitle: string;
    gridTitle: string;
    gridView: GridColumn[];
    ordersService: string;
    submissionService: string;
    genericForm: GenForm;
}
