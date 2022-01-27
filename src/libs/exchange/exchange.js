/**
 * Can be used for changing the exchange rate of a object.
 * @param {Object} obj Object that contains the currency data
 * @param {String} property Property to change
 * @param {Number} currency value of the exchange
 * @returns {Object} Object with the new property
 */
export const exchangeValueOfObject = (obj, property, currency) => {
    if (obj[property]) {
        return {
            ...obj,
            [property]: obj[property] * currency,
        };
    }

    return obj;
};