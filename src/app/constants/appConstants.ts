/* eslint-disable no-unused-vars */

// SET FALSE TO DISABLE LOCAL STORAGE
export const USE_LOCAL_STORAGE = true;

// //////////////////////

export const MOCK_SERVER_INTENTIONAL_FAIL_AMOUNT = 10;

export const LOCAL_STORAGE_KEY = 'rowData';

export const ORDER_SUBMISSION_ERROR = 'Order time has elapsed';

export const ORDER_RETRIEVAL_ERROR = 'Order retrieval time has elapsed';

export const TIF_INPUT_OPTIONS = ['GTC', 'DAY', 'FOK', 'IOC'];

export const TICKERS_INPUT_OPTIONS = ['AAPL', 'MSFT', 'GOOGL', 'VZ', 'MMM', 'NFLX', 'FB', 'TWTR', 'AMZN', 'EBAY'];

export const ORDER_TYPE_INPUT_OPTIONS = ['Market', 'Limit'];

export const ACTION_INPUT_OPTIONS = ['Buy', 'Sell'];

export const QTY_INPUT_MAX_VALUE = 999;

export const DEFAULT_SELECT_WIDTH = 120;

export const DEFAULT_SEARCH_WIDTH = 140;

export const DEFAULT_PANE_SIZE = 380;

export const CURRENCY_SYMBOL = '$';

export const MOCK_ROW_DATA = [
  {
    action: 'Buy', symbol: 'AAPL', qty: '100', orderType: 'Market', tif: 'IOC', price: '99.25', stopPrice: '100.25', comment: 'Test comments',
  },
  {
    action: 'Sell', symbol: 'AAPL', qty: '12', orderType: '', tif: '', price: '', stopPrice: '', comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical',
  },
  {
    action: 'Sell', symbol: 'AAPL', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '100', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Sell', symbol: 'MSFT', qty: '200', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '5025', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'AAPL', qty: '100', orderType: 'Market', tif: 'IOC', price: '99.25', stopPrice: '100.25', comment: 'Test comments',
  },
  {
    action: 'Sell', symbol: 'AAPL', qty: '12', orderType: '', tif: '', price: '', stopPrice: '', comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical',
  },
  {
    action: 'Sell', symbol: 'AAPL', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '100', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Sell', symbol: 'MSFT', qty: '200', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '5025', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'AAPL', qty: '100', orderType: 'Market', tif: 'IOC', price: '99.25', stopPrice: '100.25', comment: 'Test comments',
  },
  {
    action: 'Sell', symbol: 'AAPL', qty: '12', orderType: '', tif: '', price: '', stopPrice: '', comment: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical',
  },
  {
    action: 'Sell', symbol: 'AAPL', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '100', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Sell', symbol: 'MSFT', qty: '200', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '50', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
  {
    action: 'Buy', symbol: 'MSFT', qty: '5025', orderType: '', tif: '', price: '', stopPrice: '', comment: '',
  },
];

export enum FORM_FIELDS {
    INPUT,
    SELECT,
    TEXT_AREA,
    INPUT_NUMBER,
    SEARCH_INPUT
}

export const MOCK_SUBMITTED_ORDER = {
  action: 'Buy', symbol: 'ADAM', qty: '9', orderType: 'Market', tif: 'IOC', price: '99.25', stopPrice: '100.25', comment: 'Adam Is The Best',
};
