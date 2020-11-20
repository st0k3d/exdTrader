/* eslint-disable no-unused-vars */
import axios, { AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LOCAL_STORAGE_KEY, USE_LOCAL_STORAGE, MOCK_SERVER_INTENTIONAL_FAIL_AMOUNT } from './constants/appConstants';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios, { delayResponse: 2000 });

mock.onGet('/getOrders').reply(200, {
  // Simulating a database retrieval
  rowData: localStorage.getItem(LOCAL_STORAGE_KEY) !== null
  && USE_LOCAL_STORAGE ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string) : [],
});
mock.onPut('/error').reply(404);
mock.onPut('/submitOrder').reply(200);

const DataService = {
  getData: async (serviceUrl: string): Promise<AxiosResponse<any>> => axios.get(serviceUrl),
  putData: async (serviceUrl: string, data: object, rowData: any[])
  : Promise<AxiosResponse<any>> => {
    // THIS SIMULATES A FAILURE EVERY TENTH SUBMISSION
    if ((mock.history.put.length + 1) % MOCK_SERVER_INTENTIONAL_FAIL_AMOUNT === 0) {
      // console.error('INTENTIONAL FAILURE ON 10TH CALL');
      return axios.put('error');
    }

    // This is simulating a database insert
    if (USE_LOCAL_STORAGE) {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([data].concat(rowData)));
    }
    // This is where data would be passed
    return axios.put(serviceUrl);
  },
};

export default DataService;
