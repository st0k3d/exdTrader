import { CURRENCY_SYMBOL } from '../../constants/appConstants';

const formatPrice = (params: any) => (params?.value !== '' ? `${CURRENCY_SYMBOL}${params.value}` : '');

export default formatPrice;
