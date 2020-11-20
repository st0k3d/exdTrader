const getActionCellColor = (params: { value: any }): string => {
  switch (params.value.toLowerCase()) {
    case 'buy':
      return 'green';
    case 'sell':
      return 'red';
    default:
      return '';
  }
};

export default getActionCellColor;
