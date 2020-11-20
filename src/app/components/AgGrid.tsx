import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import AgGridToolTip from './grid/AgGridToolTip';

interface Props {
  rowData: any[];
  columnDefs: any[]
}

const AgGrid: React.FunctionComponent<Props> = (props: Props) => {
  const { rowData, columnDefs } = props;

  const gridWrapperClass = 'grid-wrapper';

  const onGridSizeChanged = (params: { columnApi: any, api: any }) => {
    const el = document.getElementById(gridWrapperClass);
    const gridWidth = el?.offsetWidth ? el.offsetWidth : 0;
    const columnsToShow = [];
    const columnsToHide = [];
    let totalColsWidth = 0;
    const allColumns = params.columnApi.getAllColumns();

    for (let i = 0; i < allColumns.length; i++) {
      const column = allColumns[i];
      totalColsWidth += column.getMinWidth();
      if (totalColsWidth > gridWidth) {
        columnsToHide.push(column.colId);
      } else {
        columnsToShow.push(column.colId);
      }
    }
    params.columnApi.setColumnsVisible(columnsToShow, true);
    params.columnApi.setColumnsVisible(columnsToHide, false);
    params.api.sizeColumnsToFit();
  };

  const onFirstDataRendered = (params: { api: any }): void => {
    params.api.sizeColumnsToFit();
  };

  const agGridOuterDivStyle = { width: '100%', height: '100%' };

  const outerAgGridWrapperStyle = {
    paddingLeft: '20px',
    paddingRight: '20px',
    paddingTop: '20px',
    width: '100%',
    height: '100%',
  };

  const agGridWrapperStyle = {
    height: '100%',
    width: '100%',
    paddingBottom: '4%',
  };

  return (
    <div style={agGridOuterDivStyle}>
      <div id={gridWrapperClass} style={outerAgGridWrapperStyle}>
        <div
          style={agGridWrapperStyle}
          className="ag-theme-balham"
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            frameworkComponents={{ agGridToolTip: AgGridToolTip }}
            onGridSizeChanged={onGridSizeChanged}
            onFirstDataRendered={onFirstDataRendered}
            defaultColDef={{
              sortable: true,
              tooltipComponent: 'agGridToolTip',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default AgGrid;
