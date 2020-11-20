const moneyFormatter = (value: string | number | undefined) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

export default moneyFormatter;
