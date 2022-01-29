import { get, post } from './http';

const API_URL = process.env.SALARIES_API_URL;

export const getListByName = (name) => {
    return get(`${API_URL}${name}`);
};

export const getSalaryProfile = (name, body) => {
    return post(`${API_URL}${name}`, JSON.stringify(body));
};
