import { get } from 'Services/http';

const API_URL = process.env.CURRENCY_API_URL;

export const getCurrencyExchange = (to, value) => {
    const url = `${API_URL}exchange?Code%20Name=${to}&Value%20to%20exchange=${value}`;
    const data = get(url);
    return data.converted_currency[0];
};
