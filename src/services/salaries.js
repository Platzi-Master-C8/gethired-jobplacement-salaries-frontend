import { get, post } from './http';

const API_URL = process.env.SALARIES_API_URL;

export const getListByName = (name) => {
    const lists = {
        english: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    };

    if (Object.keys(lists).includes(name)) {
        return lists[name];
    }

    return get(`${API_URL}${name}`);
};

export const getSalaryProfile = (name, body) => {
    return post(`${API_URL}${name}`, JSON.stringify(body));
};
