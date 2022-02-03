import { useCallback, useEffect, useState } from 'react';
import { getCurrencyExchange } from 'Services/currency';

const useCurrency = (currency) => {
    const [currencyValue, setCurrencyValue] = useState(1);

    const exchangeValue = useCallback(async (to) => {
        const data = await getCurrencyExchange(to, 1);
        setCurrencyValue(data);
    }, []);

    useEffect(() => {
        exchangeValue(currency);
    }, [currency, exchangeValue]);

    return {
        currencyValue,
    };
};

export default useCurrency;
