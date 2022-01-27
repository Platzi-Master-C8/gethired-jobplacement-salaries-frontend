import { exchangeValueOfObject } from './exchange';

describe('exchange lib', () => {
    it('should exchange value of object', () => {
        const obj = {
            currency: 1,
        };

        const result = exchangeValueOfObject(obj, 'currency', 2);

        expect(result).toEqual({
            currency: 2,
        });
    });

    it('should exchange value of the objects in a array ', () => {
        const obj = [
            {
                currency: 1,
            },
            {
                currency: 1,
            },
        ];

        const result = obj.map(item => exchangeValueOfObject(item, 'currency', 2));

        expect(result).toEqual([
            {
                currency: 2,
            },
            {
                currency: 2,
            },
        ]);
    });
});
