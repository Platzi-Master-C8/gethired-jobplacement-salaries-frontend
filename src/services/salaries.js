import { urlApi } from 'Constants';
import { get, post } from './utilsApi';

export const getListByName = (name) => {
    const lists = {
        senority: ['Junior', 'Mid-Junior', 'Mid', 'Mid-Senior', 'Senior'],
        english: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']
    };

    if (Object.keys(lists).includes(name)) {
        return lists[name];
    }

    return get(`${urlApi}${name}`);
};


export const getSalaryProfile = (name, body) => {
    return post(`${urlApi}${name}`, JSON.stringify(body));
};