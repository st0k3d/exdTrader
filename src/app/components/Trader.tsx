/* eslint-disable no-unused-vars */
import React from 'react';
import SplitPlane from 'react-split-pane';
import {
  PageHeader, Button, Tooltip, Row, Col,
} from 'antd';
import { AxiosResponse } from 'axios';
import { openErrorNotification, openSuccessNotification } from './helpers/NotificationHelper';
import GenericForm from './form/GenericForm';
import Loading from './Loading';
import AgGrid from './AgGrid';
import { getCurrentDateTime, clearLocalStorage } from '../Utilities';
import DataService from '../Services';
import {
  ORDER_SUBMISSION_ERROR, ORDER_RETRIEVAL_ERROR, DEFAULT_PANE_SIZE,
  LOCAL_STORAGE_KEY, USE_LOCAL_STORAGE,
} from '../constants/appConstants';
import { TradeView } from '../Models';

interface Props {
    tradeViewConfig: TradeView
}

const Trader: React.FunctionComponent<Props> = (props: Props) => {
  const { tradeViewConfig } = props;

  const [rowData, setRowData] = React.useState<any[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = React.useState<string>();

  const fetchInitialData = React.useCallback(() => {
    DataService.getData(tradeViewConfig.ordersService)
      .then((response: AxiosResponse<any>) => {
        setRowData(response.data.rowData);
        setLastUpdated(getCurrentDateTime());
      })
      .catch(() => {
        openErrorNotification(ORDER_RETRIEVAL_ERROR);
      }).finally(() => {
        setIsLoading(false);
      });
  }, [tradeViewConfig]);

  // Called on component instantiation
  React.useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  const onFormSubmit = async (values: any): Promise<boolean> => {
    setIsLoading(true);
    try {
      await DataService.putData(tradeViewConfig.submissionService, values, rowData);
      openSuccessNotification();
      setRowData([values].concat(rowData));

      setLastUpdated(getCurrentDateTime());
      return true;
    } catch (e) {
      openErrorNotification(ORDER_SUBMISSION_ERROR);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const pane2Style = { backgroundColor: 'white' };

  const splitPaneStyle = { marginTop: '2%' };

  const gridPaneStyle = { height: '100%', width: '100%' };

  return (
    <div>
      {isLoading && <Loading />}
      <PageHeader
        className="site-page-header"
        title={tradeViewConfig.title}
        subTitle={tradeViewConfig.formTitle}
      />
      <div>
        <SplitPlane split="horizontal" defaultSize={DEFAULT_PANE_SIZE} primary="first" style={splitPaneStyle} pane2Style={pane2Style}>
          <div id="form-wrapper" className="center" data-testid="trader-order-entry-form">
            <GenericForm formDef={tradeViewConfig.genericForm} onSubmit={onFormSubmit} />
          </div>
          <div data-testid="trader-data-grid" style={gridPaneStyle}>
            <PageHeader
              className="site-page-header second-pane"
              title=""
            >
              <Row>
                <Col span={12}><span className="float-left">{tradeViewConfig.gridTitle}</span></Col>
                <Col span={12}>
                  {lastUpdated
                                        && (
                                        <span className="float-right">
                                          Last Updated:
                                          {lastUpdated}
                                          {USE_LOCAL_STORAGE
                                                && (
                                                <span style={{ marginLeft: '8px' }}>
                                                  <Tooltip title="Clear Orders from simulated Database (Local Storage)">
                                                    <Button onClick={() => { clearLocalStorage(LOCAL_STORAGE_KEY); window.location.reload(); }} size="small">Clear</Button>
                                                  </Tooltip>
                                                </span>
                                                )}
                                        </span>
                                        )}
                </Col>
              </Row>
            </PageHeader>
            <AgGrid
              columnDefs={tradeViewConfig.gridView}
              rowData={rowData}
            />
          </div>
        </SplitPlane>
      </div>
    </div>
  );
};

export default Trader;
