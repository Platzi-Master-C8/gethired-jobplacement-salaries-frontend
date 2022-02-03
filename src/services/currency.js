import { get } from 'Services/http';

const API_URL = process.env.CURRENCY_API_URL;

export const getCurrencyExchange = async (to, value) => {
    const url = `${API_URL}exchange?Code%20Name=${to}&Value%20to%20exchange=${value}`;
    const data = await get(url);
    return data.converted_currency[0];
};

export const getListCurrencies = () => {
    const url = `${API_URL}currencies`;
    return get(url);
};
