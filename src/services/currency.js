import { get } from 'Services/http'

export const getCurrencyExchange = (from, to) => {
    const url = `https://api.exchangeratesapi.io/latest?base=${from}`;
    const data = get(url)
    return data.rates[to];
};
