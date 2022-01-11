import { urlApi } from 'Constants';
import { get } from './utilsApi';

export const getListByName = (name) => {
    const lists = {
        english: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    };

    if(Object.keys(lists).includes(name)) {
        return lists[name];
    }

    return get(`${urlApi}${name}`);
};
