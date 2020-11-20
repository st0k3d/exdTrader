/* eslint-disable no-unused-vars */
import { TradeView } from '../Models';
import getActionCellColor from '../components/helpers/AgGridCellColor';
import formatPrice from '../components/grid/ValueFormatters';
import moneyFormatter from '../components/form/formatters/formatters';
import {
  FORM_FIELDS, ACTION_INPUT_OPTIONS, TICKERS_INPUT_OPTIONS, ORDER_TYPE_INPUT_OPTIONS,
  TIF_INPUT_OPTIONS, DEFAULT_SELECT_WIDTH, DEFAULT_SEARCH_WIDTH,
} from '../constants/appConstants';
import EXDTraderLayout from '../components/form/layouts/EXDTraderLayout';
import { isLimitOrderType, getActionStyle, exdTraderFormValidation } from './exdTraderConstantHelper';

const exdTrader: TradeView = {
  title: 'EXD Trader',
  formTitle: 'Order Entry',
  gridTitle: 'Order Blotter',
  ordersService: 'getOrders',
  submissionService: 'submitOrder',
  gridView: [
    {
      headerName: 'Action',
      field: 'action',
      cellClass(params: any) {
        return getActionCellColor(params);
      },
    },
    { headerName: 'Symbol', field: 'symbol' },
    { headerName: 'Qty', field: 'qty' },
    { headerName: 'Order Type', field: 'orderType' },
    { headerName: 'TIF', field: 'tif' },
    { headerName: 'Price', field: 'price', valueFormatter: formatPrice },
    { headerName: 'Stop Price', field: 'stopPrice', valueFormatter: formatPrice },
    {
      headerName: 'Comment', field: 'comment', tooltipField: 'comment', cellClass: 'comment-column',
    },
  ],
  genericForm: {
    formFields: [
      {
        type: FORM_FIELDS.SELECT, name: 'action', label: 'Action', options: ACTION_INPUT_OPTIONS, required: true, initialValue: '', style: getActionStyle,
      },
      {
        type: FORM_FIELDS.SEARCH_INPUT, name: 'symbol', label: 'Symbol', placeholder: '<Enter Symbol>', options: TICKERS_INPUT_OPTIONS, required: true, initialValue: '', style: { width: DEFAULT_SEARCH_WIDTH },
      },
      {
        type: FORM_FIELDS.INPUT_NUMBER, name: 'qty', label: 'Qty', required: true, min: 0, max: 999, initialValue: 0,
      },
      {
        type: FORM_FIELDS.INPUT_NUMBER, name: 'price', label: 'Price', required: isLimitOrderType, min: 0, step: 0.01, formatter: moneyFormatter, initialValue: 0,
      },
      {
        type: FORM_FIELDS.SELECT, name: 'orderType', label: 'Order Type', options: ORDER_TYPE_INPUT_OPTIONS, required: true, initialValue: '', style: { width: DEFAULT_SELECT_WIDTH },
      },
      {
        type: FORM_FIELDS.SELECT, name: 'tif', label: 'TIF', options: TIF_INPUT_OPTIONS, initialValue: '', style: { width: DEFAULT_SELECT_WIDTH },
      },
      {
        type: FORM_FIELDS.INPUT_NUMBER, name: 'stopPrice', label: 'Stop Price', required: isLimitOrderType, min: 0, step: 0.01, formatter: moneyFormatter, initialValue: 0,
      },
      {
        type: FORM_FIELDS.TEXT_AREA, name: 'comment', placeholder: '<COMMENTS>', rows: 4, initialValue: '',
      },
    ],
    validationFunction: exdTraderFormValidation,
    Layout: EXDTraderLayout,
  },
};

export default exdTrader;
